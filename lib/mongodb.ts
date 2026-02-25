import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mehakkamboj001_db_user:c6hmGPpWEzmxKOiK@diamondexchange99.7avhpkn.mongodb.net/diamond-exchange?retryWrites=true&w=majority&appName=diamondExchange99';
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://managejj359_db_user:EJMGbPAr9LiJqLAt@matrixlearining.7avhpkn.mongodb.net/matrixleariningschool?retryWrites=true&w=majority&appName=matrixlearining';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://managejj359_db_user:EJMGbPAr9LiJqLAt@matrixlearining.e9yamgs.mongodb.net/matrixleariningschool?appName=matrixlearining';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000, // 10 seconds timeout
            socketTimeoutMS: 45000, // 45 seconds
        };

        console.log('🔄 Connecting to MongoDB...');
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
            console.log('✅ MongoDB connected successfully');
            console.log('📊 Database:', mongooseInstance.connection.db?.databaseName || 'N/A');
            console.log('🔗 Host:', mongooseInstance.connection.host);
            return mongooseInstance;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('❌ MongoDB connection failed:', e);
        throw e;
    }

    return cached.conn;
}

export default connectDB;
