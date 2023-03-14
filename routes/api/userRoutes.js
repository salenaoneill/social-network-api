//require express 
const router = require('express').Router();
//import user controllers from userController.js
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//defines GET all and POST api/users routes
router.route('/')
.get(getUser)
.post(createUser);

//defines GET one user, PUT, & DELETE by id  api/users routes
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//defines POST and DELETE a friend by id api/users routes
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

//export router
module.exports = router;