const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let user = null

  try {
    response = await axios.get(`http://${process.env.SERVER_HOST}:${process.env.PORT_EXPRESS_SRV}/user`)
    user = response.data
  } catch (error) {
    console.log(error);
  }

  res.render('index', { title: 'Finn AI Code Challenge - Client', user });
});

module.exports = router;
