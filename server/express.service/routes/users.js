const express = require('express');
const router = express.Router();
const User = require('../models/persistedUser');
const {v4} = require('uuid');

/* GET user */
router.get('/', function (req, res, next) {
  let storage = req.app.locals
  let user = storage.persistedUser
  //TODO: Get and Set User Tone
  // user.setTone(userTone)
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
  let newUser = new User(userId, 'Samson', 'Maconi', 'Solutions provider') // user new unique ID
  newUser.saveToStorage(storage)
  console.log('newUser :', storage['persistedUser']);
  res.status(201).send({newUser})
});

module.exports = router;
