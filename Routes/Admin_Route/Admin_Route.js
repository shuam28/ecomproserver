const express=require('express')
const adminusers_router=express.Router();
const {post_admin_user,get_admin_user_list,delete_admin_user,update_admin_user,status_admin_user,find_admin_userbyuid}= require('../../Controller/Admin_Users/Admin_User');

const {addUserValidation}=require('../../Validation/User/userValidation')
// const aws=require('aws-sdk')


const dotenv = require('dotenv')
dotenv.config()    


const multerS3 = require('multer-s3')
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
//////AWS S3 configuration/////////

const s3 = new S3Client({
    region: 'ap-south-1',
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey:process.env.AWS_SECRET_KEY
    }
})
  
////////Storage Configuration for AWS s3 bucket///////

let storage = multerS3({
    s3:s3,
    bucket:'papabucket',
    acl:'public-read', 
    metadata:(req, file, cb)=>{
        cb(null, {fieldName: file.fieldname})
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key:(req, file, cb)=>{
        cb(null, file.originalname)

    }

})


let upload = multer({storage:storage})

adminusers_router.post('/user_register',upload.single('photo'), post_admin_user)
adminusers_router.get('/user_list',get_admin_user_list)
adminusers_router.delete('/user_delete/:id',delete_admin_user)
adminusers_router.put('/user_update/:id',upload.single('photo'),update_admin_user)
adminusers_router.put('/status_update/:id',status_admin_user)
adminusers_router.get('/finduser/:uid',find_admin_userbyuid)



module.exports=adminusers_router