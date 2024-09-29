const { sequelize, Sequelize } = require('../models/index.js');
const UserJourneys = require('../models/locationModel.js')(sequelize, Sequelize.DataTypes);

var addUserJourney = async (req, resp) => {
    try {
        let info = {
            journey_date: req.body.journey_date,  // Add journey_date
            user_id: req.body.user_id,
            current_location: req.body.current_location,
            started_location: req.body.started_location,
            visited_location: req.body.visited_location,  // Keep this as JSON
            total_distance: req.body.total_distance,
            image: req.body.image,  // Add image URL
            started_time: req.body.started_time,  // New field
            completed_time: req.body.completed_time // New field
        };

        const newJourney = await UserJourneys.create(info);
        resp.status(201).send(newJourney);  // Changed status to 201 for resource creation
        console.log(newJourney);
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while creating user journey", error: e.message });
    }
};

var getUserJourney = async (req, resp) => {
    try {
        let id = req.params.id;  // Change from id to date (as journey_date is the primary key)
        let journey = await UserJourneys.findOne({
            where: { user_id:id }  // Adjust this to use journey_date
        });
        if (journey) {
            resp.status(200).send(journey);
        } else {
            resp.status(404).send({ message: "User journey not found" });
        }
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while fetching user journey", error: e.message });
    }
};

var getAllUserJourneys = async (req, resp) => {
    try {
        let journeys = await UserJourneys.findAll({});
        resp.status(200).send(journeys);
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while fetching user journeys", error: e.message });
    }
};

var updateUserJourney = async (req, resp) => {
    try {
        const { date } = req.params;  // Change from id to date
        const updatedJourney = await UserJourneys.update(req.body, { where: { journey_date: date } });
        if (updatedJourney[0] === 1) {
            resp.status(200).send({ message: "User journey updated successfully" });
        } else {
            resp.status(404).send({ message: "User journey not found or no changes made" });
        }
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while updating user journey", error: e.message });
    }
};

var deleteUserJourney = async (req, resp) => {
    try {
        const { date } = req.params;  // Change from id to date
        const deletedCount = await UserJourneys.destroy({ where: { journey_date: date } });
        if (deletedCount) {
            resp.status(200).send({ message: "User journey deleted successfully" });
        } else {
            resp.status(404).send({ message: "User journey not found" });
        }
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while deleting user journey", error: e.message });
    }
};

module.exports = {
    addUserJourney,
    getUserJourney,
    getAllUserJourneys,
    updateUserJourney,
    deleteUserJourney,
};
