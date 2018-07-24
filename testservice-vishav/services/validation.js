
const   spaceCheck      =   /^\s+|\s+$/,
        emailCheck      =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        passCheck       =   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        lengthCheck     =   /^(?=.{6,}$)/,
        alphaCheck      =   /^[a-zA-Z ]*$/,
        numCheck        =   /^[0-9]{10,14}$/;

function  getKeyByValue(object) {

if(!Object.keys(object).length|| object==undefined||object==null)
return "Whole data";

return Object.keys(object).find(key => object[key] === undefined|| object[key] === "");
}



var validate ={};

//==================================================
//VALIDATE TEST DATA
//==================================================


validate.testCheck=function(data)
{

var errorValue=getKeyByValue(data);

if(errorValue)
return {success:false,msg:"Error in "+errorValue};

if(!(data.duration&&data.testName&&data.category&&data.difficultylevel))
return {success:false,msg:"One or more field are missing"};



/////////////////////////////////////////////////////////////////////
if(spaceCheck.test(data.testName))
return {success:false,msg:"Error in testName field"};

if(!/^[0-9]{2,3}$/.test(data.duration))
return {success:false,msg:"Error in duration field"};

if(spaceCheck.test(data.category)|| !alphaCheck.test(data.category))
return {success:false,msg:"Error in category field"};

if(spaceCheck.test(data.difficultylevel)|| !alphaCheck.test(data.difficultylevel))
return {success:false,msg:"Error in difficultylevel field"};


return {success:true,msg:"No errors"};
}

//==========================================
//  EMAIL VALIDATION
///=========================================

validate.email=function(data)
{
var errorValue=getKeyByValue(data);

if(errorValue)
return {success:false,msg:"Error in "+errorValue};

if(!data.email)
return {success:false,msg:"Error in email"};

//EMAIL CHECK
if(!emailCheck.test(data.email))
return {success:false,msg:"Error in email"};

return {success:true,msg:"No errors"};
}




module.exports=validate;