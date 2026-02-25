/**
 * Seed Script for WhatsApp Numbers
 * 
 * This script populates the database with sample WhatsApp numbers for testing.
 * 
 * Usage:
 * 1. Make sure MongoDB is running
 * 2. Update MONGODB_URI in .env.local
 * 3. Run: npx tsx scripts/seedWhatsAppNumbers.ts
 */

import mongoose from 'mongoose';
import WhatsAppNumber from '../models/WhatsAppNumber';
import { MONGODB_DB_URI } from '@/lib/constants';

const MONGODB_URI = MONGODB_DB_URI;

const sampleNumbers = [
    {
        number: '919000000000',
        is_active: true,
        max_clicks: 10000,
        hours_limit: 24,
        click_count: 0,
        last_reset_at: new Date()
    },
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await WhatsAppNumber.deleteMany({});
        console.log('🗑️  Cleared existing WhatsApp numbers');

        // Insert sample data
        const inserted = await WhatsAppNumber.insertMany(sampleNumbers);
        console.log(`✅ Inserted ${inserted.length} WhatsApp numbers`);

        // Display inserted data
        console.log('\n📱 Sample WhatsApp Numbers:');
        inserted.forEach((num, index) => {
            console.log(`${index + 1}. ${num.number} (${num.is_active ? 'Active' : 'Inactive'}) - ID: ${num._id}`);
        });

        console.log('\n✨ Database seeded successfully!');
    } catch (error) {
        console.error('❌ Error seeding database:', error);
    } finally {
        await mongoose.disconnect();
        console.log('👋 Disconnected from MongoDB');
    }
}

seedDatabase();
