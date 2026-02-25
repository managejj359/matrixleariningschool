import mongoose from 'mongoose';
import { MONGODB_DB_URI } from './constants';

const MONGODB_URI = MONGODB_DB_URI;

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
