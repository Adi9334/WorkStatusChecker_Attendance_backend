const express = require('express');
const router = express.Router();
const userJourneyController = require('../controllers/locationController');

router.post('/journeys', userJourneyController.addUserJourney);
router.get('/journeys/:id', userJourneyController.getUserJourney);
router.get('/journeys', userJourneyController.getAllUserJourneys);
router.put('/journeys/:id', userJourneyController.updateUserJourney);
router.delete('/journeys/:id', userJourneyController.deleteUserJourney);

module.exports = router;
