import mongoose from 'mongoose';

export function initDatabase() {
  const DATABASE_URL = process.env.MONGO_DB_URI;
  mongoose.connection.on('open', () => {
    console.info('successfully connected to database:')
  })
  const connection = mongoose.connect(DATABASE_URL)
  return connection
}