require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');


const db = require('./controller/database');
db.db.on('error', (error) => console.error(error));
const User = require('./model/user');

const app = express();
const port = process.env.PORT || 3000;



/* Test */
app.get('/', (req, res) => {
  res.send('Merhaba, Dünya!');
});

/* Gets all data */
app.get('/users', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Verileri getirme hatası' });
      }
  });
/* Post data to database */
app.post('/add-user', async (req, res) => {
    try {
        const newUser = new User({
          userId: "newid",
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });
        const addedUser = await newUser.save();
        res.json(addedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kullanıcı oluşturma hatası' });
        }
})
/* Changes data */
app.patch('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
/* Delete the data */
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

/* listen port */
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});