const {Sequelize} = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate().then(()=>{
    console.log('connected to db')
}).catch((err) => {
    console.log(err)
}
)

module.exports = sequelize