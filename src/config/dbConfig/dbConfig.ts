import 'dotenv/config';
import mongoose from 'mongoose';
const MONGO_URL: string = process.env.MONGODB_URI as string;
async function databaseConnectionString() {
    if (!MONGO_URL) {
        console.log('Mongo URL doesn\'t exist!', MONGO_URL);
        return;
    }
    try {
     await mongoose.connect(MONGO_URL);
     console.error('MongoDB connection is successful!');
    } catch (error) {
        if (error instanceof Error) {
            console.error("Failed to connect to the DB:", error.message);
        }
    }
}
export default databaseConnectionString;