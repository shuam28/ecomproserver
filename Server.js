const express = require('express')
const cors=require('cors')
const app = express()
app.use(express.json())
const swaggerUi=require('swagger-ui-express')
const swaggerJsDoc=require('swagger-jsdoc')

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
})) 
   

const dotenv = require('dotenv')
dotenv.config()  
  

const option={
    definition:{
        openapi:'3.0.2',
        info:{
            title:"Node API Documentation By Rohit Singh",
            version:"1.0.0"
            },
            server:[
                {
                    url:`http://localhost:4053`,
                }
            ]
    },
    apis:['./Routes/Admin_Route/Admin_Route.js']
              
}

const swaggerSpec=swaggerJsDoc(option)
app.use('/api-docs/',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

const adminusers_router = require('./Routes/Admin_Route/Admin_Route')
app.use('/api/admin/user', adminusers_router)
   
const rolesRoute=require('./Routes/Admin_roles/Roles_Route')
app.use('/api/admin/role',rolesRoute)
 
const categoryRoute = require('./Routes/Admin_Category/Admin_Category')
app.use('/api/admin/category',categoryRoute)
  
const subCategoryRouter=require('./Routes/Admin_Subcategory/Admin_Subcategory')
app.use('/api/admin/subcategory',subCategoryRouter)

const offerRoute=require('./Routes/Admin_Offer/Admin_Offer')
app.use('/api/admin/offer',offerRoute) 

const assignroleroute=require('./Routes/Admin_Assign_Role/Admin_Assign_Role')
app.use('/api/admin',assignroleroute) 

const assignedroleroute=require('./Routes/Admin_Assign_Role/Admin_Assigned_Role')
app.use('/api/admin',assignedroleroute) 
 
   
let port = 4055
app.listen(port, () => {   
    console.log(`Server is running on port ${port}`)
})  




    