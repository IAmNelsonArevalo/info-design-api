const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const { mysqlConn } = require('./database-MySQL');
const cors = require('cors')

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use(require('./routes/routes'));

//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});