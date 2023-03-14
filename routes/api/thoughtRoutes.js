//require express 
const router = require('express').Router();

//import thought controllers from thoughtController.js
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

//defines GET all and POST api/thoughts routes
router.route('/')
.get(getThought)
.post(createThought);

//defines GET one thought, PUT, & DELETE by id api/thoughts routes
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

//defines POST new reaction api/thoughts routes
router.route('/:thoughtId/reactions')
.post(createReaction);

//defines DELETE a reaction by id api/thoughts routes
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

//export router
module.exports = router;