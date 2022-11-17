const express = require('express');
const router = express.router();

const stuffCtrl = require('../controllers/stuff')

// get all the things
router.use('/', stuffCtrl.getAllStuff);
// Read
router.get('/:id', stuffCtrl.getOneThing);
// To create
router.post('/', stuffCtrl.createThing);
// To update 
router.put('/:id', stuffCtrl.modifyThing);
//Delete
router.delete('/:id', stuffCtrl.deleteThing);
  
module.exports = router;