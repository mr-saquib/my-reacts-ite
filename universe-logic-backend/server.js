import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// SQL Server Configuration
const dbConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    options: {
        encrypt: false, // true for azure
        trustServerCertificate: true, // true for local dev
        enableArithAbort: true
    },
    port: parseInt(process.env.PORT) || 1433

};

// Test and Connect to Database
sql.connect(dbConfig)
    .then(pool => {
        if (pool.connected) console.log('✅ Connected to SQL Server');
    })
    .catch(err => console.log('❌ Database Connection Failed:', err));

// API Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const pool = await sql.connect(dbConfig);
        
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('message', sql.NVarChar, message)
            .query('INSERT INTO ContactMessages (name, email, message) VALUES (@name, @email, @message)');

        res.status(201).json({ success: true, message: 'Data saved successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Database Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));