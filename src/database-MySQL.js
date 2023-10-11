var mysql = require('mysql2');

//Configuración
var mysqlConn = mysql.createConnection({
    host: 'eml.com.co',
    database: 'cmr_test',
    user: 'root_cmr',
    password: 'password'
});

//Conexión
mysqlConn.connect( (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a DB MYSQL exitosa');
    }
});

//Exportación
module.exports = mysqlConn;