const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const fcm = require('../services/fcm');
const passwordCheck = require('../services/passwordCheck');
var validate = require('../services/validation');
var errorHandler = require("../services/errorHandler");
var CheckFunc;
const _ = require('lodash');
const cfeMailer = require('cfe-mailer');

const logger = require('../logger').logger;
// var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
    pid = process.pid;
}

const mailer = new cfeMailer(config.HOST, config.MAILINGPORT, config.SENDER_MAIL, config.PASSWORD, true);
var sourceApp;
var SOURCE_PORT;
var Send_mail;

if (sourceApp = 'admin') {
    SOURCE_PORT = config.ADMIN_PORT;
    send_mail = config.MAIL_SEND_ADMIN == 'true';
} else if (sourceApp = 'candidate') {
    SOURCE_PORT = config.CANDIDATE_PORT;
    send_mail = config.MAIL_SEND_CANDIDATE == 'true';
}

checkForMailSending = function (req, res, next) {
    if (send_mail) {
        return next();
    }
    errorHandler(404, { msg: "Route Doesn't Exist" }, res);
};

router.post('/tokenCheck', (req, res) => {
    User.getUserById(req.body.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            res.send(user);
        }
    });
});

//-----------------------------------------
//     save user details to database
//-----------------------------------------
router.post('/register', (req, res) => {







    if (req.headers.app == "admin") {
        CheckFunc = validate.admin;
    }
    else if (req.headers.app == "candidate") {
        CheckFunc = validate.user;
    }

    if (CheckFunc(req.body).success) {
        let newUser = new User({
            insName: req.body.insName,
            email: req.body.email,
            password: req.body.password,
            sourceApp: req.headers.app,
            temptoken: jwt.sign(
                { email: req.body.email },
                config.JWT_SECRET,
                {
                    expiresIn: 24000
                }
            )
        });
        User.findOne({ email: newUser.email, sourceApp: newUser.sourceApp }, function (err, user) {
            if (err) {
                res.send(err);
            }
            if (user) {
                errorHandler(400, { msg: "user already registered with this email" }, res);
            } else {
                User.addUser(newUser, (err, user) => {
                    if (err) {
                        errorHandler(400, { msg: 'Failed to register user', source: err }, res);
                    } else {

                        if (Send_mail) {
                            const mailObj = {
                                from: config.SENDER_MAIL,
                                to: user.email,
                                subject: 'Portal Activation link',
                                text: 'Hello  ' +
                                    user.name +
                                    'thank you for registered at CFEX Portal. Please click on the following link to complete your activation:' +
                                    SOURCE_PORT +
                                    '/activate/' +
                                    user.temptoken,
                                html: 'Hello <strong>' +
                                    user.name +
                                    '</strong>, <br><br>Thank you for registered at CFEX Portal. Please click on the link below to complete your activation. <br/><br/> <a href="' +
                                    SOURCE_PORT +
                                    '/activate/' +
                                    user.temptoken +
                                    '">' +
                                    SOURCE_PORT +
                                    '/activate</a>'
                            };

                            mailer.sendMail(mailObj, (err, data) => {
                                if (err) {
                                    errorHandler(400, { msg: 'Error in sending mail!', source: err }, res);
                                }
                                logger.info(`\n  ${pid} : ==mail is sent for email activation to : ${user.email}`)
                                logger.debug(`\n ${pid} : ==mail is sent for email activation to' : ${user.email}`)
                                // errorHandler(200, { msg: 'Account Registerd.' }, res);
                                res.json({
                                    msg: 'Account registered. Please check your email for activation.'
                                });

                            });

                        } else {
                            user.active = true;
                            user.temptoken = false;
                            user.save(function (err, savedUser) {
                                if (err)
                                    errorHandler(400, { msg: 'Unable to register user', source: err }, res);
                                else
                                    logger.debug(`Registered : ${user.email}`)
                                logger.info(`Registered : ${user.email}`)
                                // errorHandler(200,{ msg: 'Account Registerd.' }, res);
                                res.json({
                                    msg: 'Account registered!'
                                });

                            });
                        }
                    }
                });
            }
        })
        // console.log("====================================")
        // console.log("user", newUser)
        // console.log("====================================")

    }
    else {
        errorHandler(400, { msg: CheckFunc(req.body).msg }, res);

    }

});




//-----------------------------------------------
//     re-generating new link for activation
//-----------------------------------------------
router.put('/newlink', (req, res) => {
    sourceApp = req.headers.app;
    User.findOne(
        { username: req.body.username, sourceApp: sourceApp },
        function (err, user) {
            if (err)
                errorHandler(400, { msg: 'Invalid User!', source: err }, res);
            if (!user) {
                errorHandler(400, { msg: 'User not found' }, res);

            } else {
                user.temptoken = jwt.sign(
                    { username: req.body.username, email: req.body.email },
                    config.JWT_SECRET,
                    {
                        expiresIn: 24000
                    }
                );
                user.save(function (err) {
                    if (err) {
                        errorHandler(400, { msg: 'Error in registration!', source: err }, res);

                    } else {
                        console.log('new data: ', user);
                        if (Send_mail) {
                            var mailData = {
                                from: 'goldip@cfeindia.com',
                                to: user.email,
                                subject: 'Portal Activation link',
                                text:
                                    'Hello  ' +
                                    user.name +
                                    'You have requested new link for activation. Please click on the following link to complete your activation: ' +
                                    config.SOURCE_PORT +
                                    '/activate/' +
                                    user.temptoken,
                                html:
                                    'Hello <strong>' +
                                    user.name +
                                    '</strong>, <br><br>You have requested new link for activation. Please click on the link below to complete your activation. <br/><br/> <a href="' +
                                    config.SOURCE_PORT +
                                    '/activate/' +
                                    user.temptoken +
                                    '">' +
                                    config.SOURCE_PORT +
                                    '/activate</a>'
                            };

                            mailer.sendMail(mailObj, (err, data) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: 'Please provide correct Email ID'
                                    });
                                }
                                else {
                                    logger.info(`New activation link has been sent`)
                                    logger.debug(`New activation link has been sent`)
                                    res.json({
                                        success: true,
                                        msg:
                                            'New link has been send. please check your email for activation link'
                                    });
                                }
                            });
                        } else {
                            user.active = true;
                            user.temptoken = false;
                            user.save(function (err, savedUser) {
                                if (err)
                                    // res.json({ success: false, message: err });
                                    errorHandler(403, { msg: 'Error in sending mail!', source: err }, res);
                                else {
                                    logger.info(`user has been saved : ${savedUser}`)
                                    logger.debug(`user has been saved : ${savedUser}`)
                                    console.log('saved user', savedUser);
                                    res.json({
                                        msg: 'Link Activated!!'
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
    );
});

//--------------------------------------------------
//             activate user's account
//--------------------------------------------------
router.put('/activate/:token', function (req, res) {
    sourceApp = req.headers.app;

    User.findOne(
        { temptoken: req.params.token, sourceApp: sourceApp },
        function (err, user) {
            if (err)
                errorHandler(403, { msg: 'Error in finding user!', source: err }, res);
            var token = req.params.token;
            jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
                if (err) {
                    errorHandler(403, { msg: 'Activation link has expired', source: err }, res);
                } else if (!user) {
                    errorHandler(403, { msg: 'Activation link has expired' }, res);

                } else {
                    user.temptoken = false;
                    user.active = true;
                    user.save(function (err) {
                        if (err) {
                            errorHandler(400, { msg: 'Error in saving user', source: err }, res);
                            console.log(err);
                        } else {
                            // console.log('saved user: ', user);
                            if (config.SEND_MAIL) {
                                logger.info(`mail sent to user for successful activation : ${user.email}`)
                                logger.debug(`mail sent to user for successful activation : ${user.email}`)
                                var mailData = {
                                    from: 'goldip@cfeindia.com',
                                    to: user.email,
                                    subject: 'Portal Account Activated',
                                    text:
                                        'Hello ' +
                                        user.name +
                                        'Your account has been successfully activated!',
                                    html:
                                        'Hello <strong>' +
                                        user.name +
                                        '</strong>, <br><br>Your account has been successfully activated!'
                                };

                                mailer.sendMail(mailObj, (err, data) => {
                                    if (err) {
                                        // res.json({ message: 'Please provide a valid Email ID' });
                                        errorHandler(400, { msg: 'Error in sending mail', source: err }, res);
                                    }
                                    else
                                        res.json({ message: 'Account activated' });
                                });
                            } else {
                                user.active = true;
                                user.temptoken = false;
                                user.save(function (err, savedUser) {
                                    if (err)
                                        errorHandler(400, { msg: 'Error in activation. Please try again', source: err }, res);
                                    else
                                        // errorHandler(200,{ msg: 'Account Registerd.' }, res);
                                        logger.info(`user account has been activated : ${user.email}`)
                                    logger.debug(`user account has been activated : ${user.email}`)
                                    res.json({
                                        msg: 'Account activated!'
                                    });

                                });
                            }
                        }
                    });
                }
            });
        }
    );
});

//--------------------------------------------
//       Authenticate user when login
//--------------------------------------------
router.post('/authenticate', (req, res) => {
    sourceApp = req.headers.app;
    const email = req.body.email;
    const password = req.body.password;


    User.getUserByEmail(email, sourceApp, (err, user) => {
        // console.log('data from back-end', user);
        if (err) {
            errorHandler(400, { msg: 'Somthing went wrong', source: err }, res);
            // throw err;
        }
        if (!user) {
            errorHandler(400, { msg: 'User not found. Please check your username or password!!', source: err }, res);
            // res.status('400').json({ msg: 'User not found', debugMsg: '', source: err });
        } else if (user) {
            // console.log(user);
            passwordCheck.comparePassword(
                password,
                user.password,
                user,
                (err, info) => {
                    if (err) {
                        errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                        throw err;
                    }
                    if (!info) {
                        errorHandler(400, { msg: 'Could not authenticate password' }, res);

                    } else if (!user.active) {

                        errorHandler(400, { msg: 'Account is not yet activated.' }, res);

                    } else {
                        logger.info(`user has logged in : ${user.name}`)
                        logger.debug(`user has logged in : ${user.name}`)
                        res.status(200).json({
                            token: info,
                            msg: 'You are logged in',
                            user: {
                                id: user._id,
                                // name: user.name,
                                insName: user.insName,
                                // branch: user.branch,
                                // phone: user.phone,
                                // username: user.username,
                                email: user.email,
                                status: user.status,
                                sourceApp: user.sourceApp
                            }
                        });
                    }
                }
            );
        }
    });
});

//----------------------------------------------
//     getting distinct values for active users
//----------------------------------------------
router.get('/activeusers/distinct', (req, res, next) => {
    User.find({ 'status': 'Active' }).distinct('branch', function (err, branches) {
        if (err) {
            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
        } else {
            User.find({ 'status': 'Active' }).distinct('status', function (error, status) {
                if (error) {
                    errorHandler(400, { msg: 'Something went wrong', source: error }, res);

                } else {
                    User.find({ 'status': 'Active' }).distinct('state', function (err, states) {
                        if (err) {
                            errorHandler(400, { msg: 'Something went wrong', source: err }, res);

                        } else {
                            // console.log("branchdsd", branches);
                            logger.info(`filters for active users has been fetched`)
                            logger.debug(`filters for active users has been fetched`)
                            res.send({
                                branches: branches,
                                status: status,
                                states: states
                            });
                        }
                    })
                }
            })
        }
    })
})


//----------------------------------------------
//     getting distinct values for filteration
//----------------------------------------------
router.get('/distinct', (req, res, next) => {
    console.log("user service");
    User.find().distinct('branch', function (err, branches) {
        if (err) {
            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
        } else {
            User.find().distinct('status', function (err, status) {
                if (err) {
                    errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                } else {
                    User.find().distinct('state', function (err, states) {
                        if (err) {
                            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                        } else {
                            logger.info(`distinct values has been fetched for display`)
                            logger.debug(`distinct values has been fetched for display`)
                            res.send({
                                branches: branches,
                                status: status,
                                states: states
                            })
                        }
                    })
                }
            })
        }
    })
})

//---------------------------------------
//       fetch users for Groups
//---------------------------------------
router.get('/users', (req, res, next) => {
    console.log('fufufu');
    User.find({ sourceApp: 'candidate' }).exec(function (err, users) {
        if (err) {
            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
        }
        else {
            logger.info(`users list has been fetched for display`)
            logger.debug(`users list has been fetched for display`)
            res.send({
                users: users,
            });
            console.log("users list", users);
        }
    })
})
//------------------------------------------
//           fetch user list
//------------------------------------------
router.get('/user/:page', (req, res, next) => {

    console.log('my parameter', req.query);

    var perPage = parseInt(req.query.perPage) || 5;
    var page = req.params.page || 1;
    var sort = parseInt(req.query.sort) || 1;
    let userList = {};
    userList.sourceApp = 'candidate';


    if (req.query.branch != undefined && req.query.branch != "")
        userList.branch = req.query.branch;

    if (req.query.status != undefined && req.query.status != "")
        userList.status = req.query.status;

    if (req.query.state != undefined && req.query.state != "")
        userList.state = req.query.state;

    if (req.query.perPage == "")
        perPage = 5;

    User.find(userList)
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, users) {

            //===================================
            //  COUNTING TOTAL FILTERED DATA (AUTHOR VISHAVJEET)
            //====================================
            User.count(userList).exec(function (err, count) {
                if (err) {
                    errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                }
                logger.info(`users list has been fetched for display`)
                logger.debug(`users list has been fetched for display`)
                res.send({
                    users: users,
                    count: count,
                    perPage: perPage,
                    pages: Math.ceil(count / perPage)
                });
                console.log("users list", users);
            });

        });

});

//-------------------------------------------
//          set user to archive state
//-------------------------------------------
router.put('/deleteuser', (req, res, next) => {
    console.log(req.body.userId);
    User.delete(req.body, (err, user) => {
        if (err) {
            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
        } else {
            // console.log(user);
            logger.info(`user is archieved : ${user.name}`)
            logger.debug(`user is archieved : ${user.name}`)
            errorHandler(200, { msg: 'User archieved' }, res);

        }
    });
});

//--------------------------------------
//        Change state of user
//--------------------------------------
router.put('/setState', (req, res, next) => {
    User.setState(req.body, (err, user) => {
        if (err) {
            errorHandler(400, { msg: 'Error! User state could not be changed', source: err }, res);

        } else {
            console.log(user);
            logger.info(`state is set for: ${user.name}`)
            logger.debug(`state is set for: ${user.name}`)
            res.json(user);
        }
    });
});

//-------------------------------------------
//          forgot password
//-------------------------------------------
router.put('/resetpassword', function (req, res) {

    User.findOne({ email: req.body.email })
        .select('username email resettoken name')
        .exec(function (err, user) {
            if (err) {
                errorHandler(400, { msg: 'Wrong password', source: err }, res);
            } else {
                if (!user) {
                    errorHandler(400, { msg: 'E-mail was not found' }, res);
                } else {
                    user.resettoken = jwt.sign(
                        { username: user.username, email: user.email },
                        config.JWT_SECRET,
                        {
                            expiresIn: 240
                        }
                    );
                    user.save(function (err) {
                        if (err) {
                            errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                        } else {
                            var mailData = {
                                from: config.SENDER_MAIL,
                                to: user.email,
                                subject: config.SOURCE_PORT + 'Reset password Request',
                                text:
                                    'Hello ' +
                                    user.name +
                                    'You recently request a password reset link. Please click on the link below to reset your password: ' +
                                    config.SOURCE_PORT +
                                    '/reset/' +
                                    user.resettoken,
                                html:
                                    'Hello<strong>' +
                                    user.name +
                                    '</strong>, <br><br>You recently request a password reset link. Please click on the link below to reset your password: <br/><br/><a href = "' +
                                    config.SOURCE_PORT +
                                    '/reset/' +
                                    user.resettoken +
                                    '">' +
                                    config.SOURCE_PORT +
                                    '/reset</a>'
                            };

                            mailer.sendMail(mailData, (err, data) => {
                                if (err)
                                    errorHandler(400, { msg: 'Please provide correct Email ID', source: err }, res);
                                else
                                    logger.info(`mail is sent for setting password to: ${user.email}`)
                                logger.debug(`mail is sent for setting password to: ${user.email}`)
                                res.json({ msg: 'E-mail has been send to you E-mail Id you can set password' });
                            });
                        }
                    });
                }
            }
        });
});

//------------------------------------------------------------------
//      to identify the correct user for resetting password
//------------------------------------------------------------------
router.get('/resetpassword/:token', function (req, res) {
    // console.log('reached here');
    User.findOne({ resettoken: req.params.token })
        .select()
        .exec(function (err, user) {
            if (err)
                errorHandler(400, { msg: 'No such email is found!!', source: err }, res);

            var token = req.params.token;
            // funtion to verify token
            jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
                if (err) {
                    errorHandler(400, { msg: 'password link has expired', source: err }, res);
                } else {
                    logger.info(`mail is sent for resetting password to: ${user.email}`)
                    logger.debug(`mail is sent for resetting password to: ${user.email}`)
                    res.json({ user: user });
                }
            });
        });
});

//------------------------------------------
//          save new password
//------------------------------------------
router.put('/savepassword', function (req, res) {
    // console.log(req.body.username);
    if (req.headers.app == "admin") {
        CheckFunc = validate.admin;
    }
    else if (req.headers.app == "candidate") {
        CheckFunc = validate.user;
    }

    if (CheckFunc.passReset(req.body)) {

        User.findOne({ username: req.body.username })
            .select('username password email resettoken name')
            .exec(function (err, user) {
                if (err) {
                    errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                    throw err;
                }
                if (req.body.password == null || req.body.password == '') {
                    errorHandler(400, { msg: 'Password not provided!' }, res);
                } else {
                    user.password = req.body.password;
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) {
                                errorHandler(400, { msg: 'Something went wrong', source: err }, res);
                                throw err;
                            }
                            user.password = hash;
                            user.resettoken = false;
                            console.log(user);
                            user.save(function (err) {
                                if (err) {
                                    errorHandler(400, { msg: 'Something went wrong', source: err }, res);

                                } else {
                                    logger.info(`password has been saved for : ${user.email}`)
                                    logger.debug(`password has been saved for : ${user.email}`)
                                    var mailData = {
                                        from: 'goldip@cfeindia.com',
                                        to: user.email,
                                        subject: config.SOURCE_PORT + ' Reset password',
                                        text:
                                            'Hello ' +
                                            user.name +
                                            'This e-mail is to notify you that your password was recently reset at ' +
                                            config.SOURCE_PORT +
                                            '.com',
                                        html:
                                            'Hello<strong> ' +
                                            user.name +
                                            '</strong>,<br><br>This e-mail is to notify you that your password was recently reset at ' +
                                            config.SOURCE_PORT +
                                            '.com'
                                    };
                                    mailer.sendMail(mailData, (err, data) => {
                                        if (err)
                                            errorHandler(400, { msg: 'Something went wrong', source: err }, res);

                                        else {
                                            logger.info(`password set for: ${user.email}`)
                                            logger.debug(`password set for: ${user.email}`)
                                            res.json({ msg: 'Password has been set' });
                                        }

                                    });
                                }
                            });
                        });
                    });
                }
            });
    }
    else {
        errorHandler(400, { msg: CheckFunc(req.body).msg }, res);
    }
});



//============================================================
//  GET USER PROFILE  (AUTHOR VISHAVJEET)
//============================================================
router.get('/getusrprofile/:id', function (req, res) {

    User.findById(req.params.id, function (err, foundUser) {
        if (err)
            return errorHandler(400, { msg: 'Error in Profile Fetching!', source: err }, res);
        if (!foundUser)
            return errorHandler(404, { msg: 'User Not Found!', source: {} }, res);

        let user = mapUser(foundUser, true);

        return res.json(user);
    });
});

//============================================================
//   USER PROFILE UPDATE (AUTHOR VISHAVJEET)
//============================================================
router.put('/updateusrprofile', function (req, res) {

    let user = mapUser(req.body, false);
    try {

        User.findByIdAndUpdate(req.body.id, user, { new: true }, function (err, updatedUser) {
            if (err) {
                throw (err);
            }
            if (!updatedUser)
                throw (err);

            let updateduser = mapUser(updatedUser, true);

            return res.json(updateduser);

        });
    }
    catch (err) {
        return errorHandler(400, { msg: 'Error in Profile Updation!', source: err }, res);
    }

});

//=============================================
// SENDING FIREBASE PUSH NOTIFICATIONS
//=============================================
router.post('/fcmnotification', function (req, res) {

    User.findById(req.body.params.users, function (err, foundUser) {
        if (err) {
        }
        else if (foundUser.FCMtoken) {
            fcm(foundUser.FCMtoken).then((response) => {
            })
                .catch((err) => {
                });
        }
    });
    return errorHandler(200, { msg: "" }, res);
});

//======================================
//  USER OBJECT MAPPER (AUTHOR VISHAVJEET)
//======================================
function mapUser(user, statusOrId) {
    let mapedUser = _.pick(user, ["FCMtoken", "firstName", "lastName", "insName", "branch", "phone", "username", "state", "gender",
        "dob", "image", "pincode", "address", "UG", "Twelfth", "Tenth", "progLang", "DB",
        "email", "software", "OS", "MobileDev", "WebDeve"]);
    if (statusOrId) {
        mapedUser.id = user.id;
        mapedUser.status = user.status;
    }
    return mapedUser;

}




module.exports = router;
