import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function insertData() {
    try {
        await client.connect();
        console.log('Connected to database');
        
        // Create table
        const result = await client.query(
            'CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))'
        );
        console.log('Table created successfully');

        // Insert new user
        const insertQuery = `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`;
        const values = ['samsan', 'h2@h1.com'];
        const res = await client.query(insertQuery, values);
        console.log('Inserted user:', res.rows[0]);

        // Fetch all users
        const allUsers = await client.query('SELECT * FROM users');
        console.log('All users:', allUsers.rows);
         const fetchBasedEnail=await client.query(`SELECT * FROM users WHERE email='rahul@email.com'`);
         console.log(fetchBasedEnail.rows[0]);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.end();
        console.log('Client connection closed');
    }
}

insertData();
