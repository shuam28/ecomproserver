const express=require('express')
const offerRoute=express.Router()

const {createOffer,viewOffer,findOffer,updateOffer,updateStatus}=require('../../Controller/Admin_Offer/Admin_Offer')

offerRoute.post('/createoffer',createOffer)
offerRoute.get('/viewoffer',viewOffer)
offerRoute.put('/updateoffer/:offerid',updateOffer)
offerRoute.put('/updatestatus/:offerid',updateStatus)
offerRoute.get('/findoffer/:bydiscount',findOffer)

module.exports=offerRoute