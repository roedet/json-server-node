const express = require('express');

const app = express();

console.log('server ffffffstartt');

const user = {
  name: 'sally',
  hobby: 'soccer',
};

app.get('/', (req, res) => {
  res.send(user);
});

app.listen(3000);
