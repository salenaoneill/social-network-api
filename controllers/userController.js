//imports thought and user models
const {User, Thought} = require('../models'); 

module.exports = {
    //get all users
    getUser(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //get single user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .populate('thoughts')
        .populate('friends')
        //version key
        .select('-__v')
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
    //create user 
    createUser(req, res) {
        User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
    //update user
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user found with this id!' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      //delete user
      deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with this id!' })
                //delete users associated thoughts when the user is deleted.
                : Thought.deleteMany({_id: {$in: user.thoughts}})
          )
          .then(() => res.json({message: 'User deleted!'}))
          .catch((err) => res.status(500).json(err));
      },
      //add a friend
      addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.body.friendId } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      //delete a friend
      deleteFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { reactions: { friends: req.params.friendId } } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user found with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    };
    