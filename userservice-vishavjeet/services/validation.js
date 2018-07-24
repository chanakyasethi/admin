const spaceCheck = /^\s+|\s+$/,
    emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    lengthCheck = /^(?=.{6,}$)/,
    alphaCheck = /^[a-zA-Z ]*$/,
    numCheck = /^[0-9]{10,14}$/;

function getKeyByValue(object) {

    if (!Object.keys(object).length || object == undefined || object == null)
        return "Whole data";

    return Object.keys(object).find(key => object[key] === undefined || object[key] === "");
}

var validate = {};

//===================================
// ADMIN VALIDATION 
//===================================
validate.admin = function (data) {

    var errorValue = getKeyByValue(data);

    if (errorValue)
        return { success: false, msg: "Error in " + errorValue };
    if (!(data.insName && data.email && data.password))
        return { success: false, msg: "One or more field are missing" };
    ////////////////////////////////////////////////////////////////////////////
    //NAME CHECK   
    // if (spaceCheck.test(data.name) || !alphaCheck.test(data.name))
    //     return { success: false, msg: "Error in name  field" };
    //EMAIL CHECK    
    if (!emailCheck.test(data.email))
        return { success: false, msg: "Error in email field" };
    //INSTITUTE NAME CHECK
    if (spaceCheck.test(data.insName) || !alphaCheck.test(data.insName))
        return { success: false, msg: "Error in insName field" };
    //USERNAME CHECK
    // if (!lengthCheck.test(data.username) || /\s+/.test(data.username))
    //     return { success: false, msg: "Error in  username field" };
    //PASSWORD CHECK
    if (!passCheck.test(data.password))
        return { success: false, msg: "Error in password field" };


    return { success: true, msg: "No errors" };
}

//=============================================
//USER VALIDATION 
//=============================================

validate.user = function (data) {

    var errorValue = getKeyByValue(data);
    if (errorValue)
        return { success: false, msg: "Error in " + errorValue };
    if (!( data.email && data.password))
        return { success: false, msg: "One or more field are missing" };
    //////////////////////////////////////////////////////////////////////////////////
    //NAME CHECK
    // if (spaceCheck.test(data.name) || !alphaCheck.test(data.name))
    //     return { success: false, msg: "Error in name field" };
    //INSTITUTE NAME CHECK
    // if (spaceCheck.test(data.insName) || !alphaCheck.test(data.insName))
    //     return { success: false, msg: "Error in insName field" };
    //BRANCH CHECK
    // if (spaceCheck.test(data.branch) || !alphaCheck.test(data.branch))
    //     return { success: false, msg: "Error in branch field" };
    //EMAIL CHECK
    if (!emailCheck.test(data.email))
        return { success: false, msg: "Error in email field" };
    //PAHONE NUMBER  CHECK   
    // if (!numCheck.test(data.phone))
    //     return { success: false, msg: "Error in phone field" };
    //USERNAME CHECK
    // if (!lengthCheck.test(data.username) || /\s+/.test(data.username))
    //     return { success: false, msg: "Error in username field" };
    //PASSWORD CHECK
    if (!passCheck.test(data.password))
        return { success: false, msg: "Error in password field" };


    return { success: true, msg: "No errors" };

}

//===========================================
//RESET PASSWORD VALIDATION
//===========================================
validate.passReset = function (data) {

    var errorValue = getKeyByValue(data);

    if (errorValue)
        return { success: false, msg: "Error in " + errorValue };
    if (!(data.password && data.confirmPass))
        return { success: false, msg: "One or more field are missing" };
    ////////////////////////////////////////////////////////////////
    //PASSWORD CHECK
    if (!passCheck.test(data.password))
        return { success: false, msg: "Error in password field" };
    //CONFIRM PAASWORD CHECK
    if (data.confirmPass != data.password)
        return { success: false, msg: "Error in confirmPass field" };

    return { success: true, msg: "No errors" };

}




//==========================================
//  EMAIL VALIDATION
///=========================================

validate.email = function (data) {
    if (getKeyByValue(data))
        return { success: false, msg: "Error in email field" };

    if (!data.email)
        return { success: false, msg: "Error in email field" };

    //EMAIL CHECK
    if (!emailCheck.test(data.email))
        return { success: false, msg: "Error in email field" };

    return { success: true, msg: "No errors" };
}




module.exports = validate;