//require express
const router = require('express').Router();

//import API routes from /api/index.js
const apiRoutes = require('./api');

//defines path
router.use('/api', apiRoutes);

//error handling
router.use((req, res) => {
    return res.send('Wrong route!');
  });
  
//exports router
module.exports = router;