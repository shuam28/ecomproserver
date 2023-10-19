const express=require('express')
const categoryRoute=express.Router()

const {addCategory,getCategory,updateCategory,findCategory}=require('../../Controller/Admin_category/Admin_Category')

categoryRoute.post('/addcategory',addCategory)
categoryRoute.get('/viewcategory',getCategory)
categoryRoute.put('/updatecategory/:id',updateCategory)
categoryRoute.get('/findcategory/:name',findCategory)


module.exports=categoryRoute