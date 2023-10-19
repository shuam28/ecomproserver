const express=require('express')
const rolesRoute=express.Router()

const {adminRolePost,viewrRole,updateRole,deleteRole,getRoleByName,revokerole}=require('../../Controller/Admin_Role/Admin_Role')

rolesRoute.post('/addrole',adminRolePost)
rolesRoute.get('/viewrole',viewrRole)
rolesRoute.put('/updaterole/:roleid',updateRole)
rolesRoute.delete('/deleterole/:roleid',deleteRole)
rolesRoute.get('/getrolebyname/:rolename',getRoleByName)
rolesRoute.delete('/revokerole',revokerole)

module.exports=rolesRoute