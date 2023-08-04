// const user = require('../models/userModel')
// const loadRegister = async (req, res) => {


//     try {
//         res.render('registration');
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }


// const insertUser = async (req, res) => {


//     try {
//         const user = new user({
//             name: req.body.name,
//             email: req.body.email,
//             image: req.filefilename,
//             password: req.body.password,
//             is_admin: 0

//         })


//         const userData=await user.save();
//         if(userData){
//             res.render('registration',{message:"Your Registration is successfull ..."})
//         }else{
//             res.render('registration',{message:"Your Registration has Failed !!!"})

//         }
//     }
//     catch (error) {
//         console.log(error.message);

//     }
// }


// module.exports = { loadRegister,insertUser}



const userModel = require('../models/userModel');

const loadRegister = async (req, res) => {
    try {
        res.render('registration');
    } catch (error) {
        console.log(error.message);
    }
};

const insertUser = async (req, res) => {
    try {
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            image: req.file.filename,
            password: req.body.password,
            is_admin: 0
        });

        const userData = await newUser.save();
        if (userData) {
            res.render('registration', { message: "Your Registration is successful ... Please Verify your mail" });
        } else {
            res.render('registration', { message: "Your Registration has Failed !!!" });
        }
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { loadRegister, insertUser };
