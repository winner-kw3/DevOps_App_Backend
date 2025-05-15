module.exports = {
    connectDB: async () => {
        const mysql = require('mysql2/promise');

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'your_database_name'
        });

        console.log('MySQL Database connected successfully');
        return connection;
    }
};