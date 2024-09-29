const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('figmaapp','root','karanveer@9334',{
    host:'localhost',
    dialect:'mysql',
});

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log("Error"+err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);

db.sequelize.sync()
.then(()=>{
    console.log("yes re sync");
})
module.exports = (sequelize,Sequelize,db);