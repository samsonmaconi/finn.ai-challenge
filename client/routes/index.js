const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let user = null

  await axios.get(`http://${process.env.HOST}:${process.env.PORT_EXPRESS_SRV}/user`)
    .then(response => {
      user = response.data
      console.log('user :', user);
    })
    .catch(error => {
      console.log(error);
    });


  res.render('index', { title: 'Finn AI Code Challenge - Client', user });
});

module.exports = router;
