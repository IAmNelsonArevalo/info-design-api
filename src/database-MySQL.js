var mysql = require('mysql2/promise');

//Configuración
var mysqlConn = mysql.createConnection({
    host: 'eml.com.co',
    database: 'cmr_test',
    user: 'root_cmr',
    password: 'password'
});


//Exportación
module.exports = mysqlConn;