const mongoose = require('mongoose');


const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((err) => {
      console.log(`Erro ao conectar com o MongoDB, erro: ${err}`);
    });
};

module.exports = connectToDatabase;
