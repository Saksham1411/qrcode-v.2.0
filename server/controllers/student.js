const Student = require('../models/student');
const { StatusCodes } = require('http-status-codes');
const QRCode = require('qrcode');

const addStudent = async (req, res) => {
    const { name, rollNo } = req.body;
    if(!name || !rollNo){
        return res.status(StatusCodes.BAD_REQUEST).render("register",{
            msg:"Enter the Name or RollNo",user:req.user
        })
    }
    try{
        const student = await Student.create({ ...req.body });
        QRCode.toDataURL(student._id.toString(), function (err, url) {
            let src = url;
            res.status(StatusCodes.CREATED).render("register", { src,user:req.user });
            return;
        })
    }catch(error){
        res.render("register",{
            msg:"RollNo already exist",user:req.user
        })
    }

    
}

const verifyStudent = async (req, res) => {
    const { id } = req.body;
    const student = await Student.findOne({ _id: id });
    if (!student) {
        return res.send({data:"Wrong QR Code"});
    }
    if (!student.allowed) {
        await Student.findOneAndUpdate({ _id: id }, { allowed: true });
        res.status(StatusCodes.OK).send({ data: "Allowed" });
        return;
    }
    res.status(StatusCodes.OK).send({ data: "Not Allowed" });
}

const resetAllowed = async (req, res) => {
    await Student.updateMany({ allowed: true }, { allowed: false });
    res.send("works");
}

module.exports = { addStudent, verifyStudent, resetAllowed };