const connection = require('../../Model/db_connect')

const createOffer= (req, res) => {
    try {
        let data = req.body
        // console.log(data)
        let SqlQuery = "INSERT INTO tbl_admin_offer SET ?"
            connection.query(SqlQuery, data, (err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)
                }
            })
      
    } catch (error) {

    }

}
const viewOffer= (req, res) => {
    try {
        let SqlQuery = "SELECT * FROM tbl_admin_offer"
      
            connection.query(SqlQuery,(err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)
                }
                
            })
      
    } catch (error) {
        res.send(error)
    }

}

const updateOffer=(req,res)=>{
    try {
        const data={
            percentagediscount:req.body.percentagediscount,
            flatdiscount:req.body.flatdiscount,
            uptodiscount:req.body.uptodiscount,
            uptodiscount:req.body.uptodiscount,
            validfrom:req.body.validfrom,
            validto:req.body.validto,
            termsandcondition:req.body.termsandcondition,
            status:req.body.status,
        }
        const offerid=req.params.offerid
        const SqlQuery='UPDATE tbl_admin_offer SET ? WHERE offerid = ?'

        connection.query(SqlQuery,[data,offerid],(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}

const updateStatus=(req,res)=>{
    try {
        const offerid=req.params.offerid
        const status=req.body
        const SqlQuery='UPDATE tbl_admin_offer SET status =? WHERE offerid=?'

        connection.query(SqlQuery,[status,offerid],(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}
const findOffer=(req,res)=>{
    try {
        const discount=req.params.bydiscount
        const SqlQuery='SELECT * FROM tbl_admin_offer WHERE percentagediscount=? OR flatdiscount=? OR uptodiscount=?'

        connection.query(SqlQuery,[discount,discount,discount],(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={createOffer,viewOffer,updateOffer,updateStatus,findOffer}                  
                    