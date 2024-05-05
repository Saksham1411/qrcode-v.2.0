const Event = require('../models/Event');
const genCode = require('../utils/genCode');
const { StatusCodes } = require('http-status-codes');

const addEvent = async (req, res) => {
    const { name, address, date, time } = req.body;
    const { userId } = req.user;
    console.log(userId);
    if (!name || !address || !date || !time) {
        return res.status(StatusCodes.BAD_REQUEST).send({msg:'Empty fields'});
    }
    const code = genCode();
    const event = await Event.create({ name, address, date, time, code,owner:userId });

    res.status(StatusCodes.CREATED).send({event
    });
}

const getEvent = async(req,res)=>{
    const {userId} = req.user;
    const events = await Event.find({owner:userId});
    console.log(events);
    res.status(StatusCodes.OK).send({events});
}

module.exports = { addEvent,getEvent };


