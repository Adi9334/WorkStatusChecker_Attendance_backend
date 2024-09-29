module.exports = (sequelize, DataTypes) => {
    const UserJourneys = sequelize.define('user_journeys', {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'newusers',  
                key: 'user_id'
            }
        },
        journey_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        current_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        started_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        visited_location: {
            type: DataTypes.JSON,  // Use JSON to store the list of visited locations as sublists
            allowNull: false,
        },
        total_distance: {
            type: DataTypes.DECIMAL(10, 2),  // Use DECIMAL to match the SQL type
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,  // Assuming the image will be a URL or file path
            allowNull: false,        // Set to false to make the image column not nullable
        },
        started_time: {
            type: DataTypes.TIME,    // New field for starting time
            allowNull: false,        // Set to false to make it required
        },
        completed_time: {
            type: DataTypes.TIME,    // New field for completed time
            allowNull: false,        // Set to false to make it required
        }
    }, {
        tableName: 'user_journeys', 
        timestamps: false,  // Disable createdAt and updatedAt fields
    });

    return UserJourneys;
};
