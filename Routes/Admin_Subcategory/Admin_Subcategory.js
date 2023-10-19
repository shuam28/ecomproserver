const express=require('express')
const subCategoryRouter=express.Router();

const {addSubCategory,getSubCategory,updateSubCategory,findSubCategory}=require('../../Controller/Admin_Subcategory/Admin_Subcategory')

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

subCategoryRouter.post('/addsubcategory',upload.single('photo'),addSubCategory)
subCategoryRouter.put('/updatesubcategory/:subcategoryid',updateSubCategory)
subCategoryRouter.get('/getsubcategory',getSubCategory)
subCategoryRouter.get('/findsubcategory/:subcategoryid',findSubCategory)


module.exports=subCategoryRouter   