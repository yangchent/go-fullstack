const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/stuff')

// get all the things
router.get('/', auth, stuffCtrl.getAllStuff);
// Read
router.get('/:id', auth, stuffCtrl.getOneThing);
// To create
router.post('/', auth, stuffCtrl.createThing);
// To update 
router.put('/:id', auth, stuffCtrl.modifyThing);
//Delete
router.delete('/:id', auth, stuffCtrl.deleteThing);
  
module.exports = router;