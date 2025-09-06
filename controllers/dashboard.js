const usersSchema = require('../models/usersSchema');

const getDashboard = async (req, res, next) => {

    try {

        const usersData = await usersSchema.find();
        res.render('dashboard', { title: 'Join the movement' , usersData});

    }catch (error) {
        console.log(error)
    }
}

module.exports  = { getDashboard }