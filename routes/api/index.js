//require express
const router = require('express').Router();

//import user and thought routes 
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//defines paths
router.use('./users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//export router
module.exports = router;