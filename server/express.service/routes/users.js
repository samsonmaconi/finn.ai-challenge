const express = require('express');
const router = express.Router();
const User = require('../models/persistedUser');
const {v4} = require('uuid');
const axios = require('axios');

/* GET user */
router.get('/', async function (req, res, next) {
  let storage = req.app.locals
  let user = storage.persistedUser
  try {
    response = await axios.post(`http://${process.env.HOST}:${process.env.PORT_FLASK_SRV}/tone`, {text: user.biography})
    user.setTone(response.data)
  } catch (err) {
    console.log(err)
  }
  console.log('User :', user);
  res.send(user);
});


/* SAVE new user */
router.post('/', function (req, res, next) {
  let isSucessfulRequest = Math.random() < 0.5 ? true : false
  if (!isSucessfulRequest){
    res.status(500).send({error: 'New User Request Failed'})
    return 
  }
  let storage = req.app.locals
  let userId = v4()
  let newUser = new User(userId, 'Samson', 'Maconi', 'Solutions provider... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna') // user new unique ID
  newUser.saveToStorage(storage)
  console.log('newUser :', storage['persistedUser']);
  res.status(201).send({newUser})
});

module.exports = router;
