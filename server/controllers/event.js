const Event = require('../models/Event');
const genCode = require('../utils/genCode');
const { StatusCodes } = require('http-status-codes');

const addEvent = async (req, res) => {
    const { name, address, date, time } = req.body;
    if (!name, !address, !date, !time) {
        return res.status(StatusCodes.BAD_REQUEST).send('Empty fields');
    }
    const code = genCode();
    const event = await Event.create({ name, address, date, time, code });

    res.status(StatusCodes.CREATED).render('event',{
        code
    });
}

module.exports = { addEvent };


