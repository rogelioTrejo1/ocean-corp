const mysql = require('mysql2');

const database = {
    host: 'localhost',
    user: 'rogelio',
    password: '4492316585',
    database: 'Ocean_Corp'
};

const connection = mysql.createConnection(database);

connection.connect(error => {
    if (error) {
        console.error('Error :' + error.stack);
        return;
    }
    console.log('Coneción establecida con ID: ' + connection.threadId);
});

module.exports = {
    'conn': connection,
    'keys': database
};