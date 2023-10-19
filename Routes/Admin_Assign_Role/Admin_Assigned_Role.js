const express=require('express')
const assignedroleroute=express.Router()
const {assignedRole}=require('../../Controller/Admin_Assign_Role/Admin_Assigned_Role')

assignedroleroute.get('/assignedrole/:uid',assignedRole)

module.exports=assignedroleroute    