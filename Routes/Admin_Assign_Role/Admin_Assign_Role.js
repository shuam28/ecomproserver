const express=require('express')
const assignroleroute=express.Router()
const {assignRole,revokeRole}=require('../../Controller/Admin_Assign_Role/Admin_Assign_Role')

assignroleroute.post('/assignrole',assignRole)
assignroleroute.delete('/revokerole',revokeRole)

module.exports=assignroleroute    