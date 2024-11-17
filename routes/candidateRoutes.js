const express = require('express');
const router = express.Router();
const { addCandidate,updateCandidate } = require('../controllers/candidateController');


// Route to add a new candidate
router.post('/', addCandidate);

router.put('/:id', updateCandidate);


module.exports = router;
