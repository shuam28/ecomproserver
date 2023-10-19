const joi=require("@hapi/joi")

const schema={
    user:joi.object({
        uid:joi.string().max(20).required(),
        name:joi.string().max(50).required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        mobile:joi.number().integer().min(1000000000).message("Invalid Mobile Number").max(9999999999).message("Invalid Mobile Number").required(),
        aadhar:joi.number().integer().min(100000000000).message("Invalid Aadhar Number").max(999999999999).message("Invalid Aadhar Number").required(),
        dob:joi.string().max(20).required(),
        photo:joi.string().max(100).required(),
        qualification:joi.string().max(50).required(),
        address:joi.string().max(100).required(),
        state:joi.string().max(30).required(),
        city:joi.string().max(20).required(),
        pin:joi.number().integer().min(100000).message("Invalid Area Pin Code").max(999999).message("Invalid Area Pin Code").required(),
        status:joi.string().max(15).required(),
        doj:joi.string().max(20).required()
    })
}

module.exports=schema