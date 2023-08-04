
// const express = require('express');
// const user_route = express();

// // Set the view engine to 'ejs'
// user_route.set('view engine', 'ejs');

// // Set the views directory to 'views/users'
// user_route.set('views', './views/users');




// //multer
// const bodyParser = require('body-parser')
// user_route.use(bodyParser.json())
// user_route.use(bodyParser.urlencoded({ extended: true }))

// const multer = require('multer')
// const path = require('path')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../public/userImages'))

//     },
//     filename: function (req, file, cb) {
//         const name = Date.now(req, file, cb) + '-' + file.originalname
//         cb(null, name)
//     }
// })
// const upload = multer({ storage: storage })

// const userController = require('../controllers/userController');
// user_route.get('/register', userController.loadRegister);
// user_route.post('/register',upload.single('image'),userController.insertUser)

// // Export the user_route router directly
// module.exports = user_route


const express = require('express');
const userRoute = express();

// Set the view engine to 'ejs'
userRoute.set('view engine', 'ejs');

// Set the views directory to 'views/users'
userRoute.set('views', './views/users');

// multer
const bodyParser = require('body-parser');
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });

const userController = require('../controllers/userController');
userRoute.get('/register', userController.loadRegister);
userRoute.post('/register', upload.single('image'), userController.insertUser);

// Export the userRoute router directly
module.exports = userRoute;
