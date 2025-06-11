const mongoose = require('mongoose');

const userDatabase = process.env.MONGODB_USER;
const passowordDatabase = process.env.MONGODB_PASSWORD;
const appNameDatabase = process.env.MONGODB_APPNAME

mongoose.connect(`mongodb+srv://${userDatabase}:${passowordDatabase}@repc.g47tahk.mongodb.net/?retryWrites=true&w=majority&appName=${appNameDatabase}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

module.exports = mongoose;