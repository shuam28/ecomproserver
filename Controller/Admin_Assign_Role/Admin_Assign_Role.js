const connection = require('../../Model/db_connect')

const assignRole = (req, res) => {
    const data = {
        uid:req.body.uid,
        roleid: req.body.roleid,
        
    }
    console.log(data)
    const SqlQuery = 'INSERT INTO tbl_admin_role_assign SET ?'
    connection.query(SqlQuery, data, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}

const revokeRole=(req,res)=>{
  const uid=req.body.uid
  const roleid=req.body.roleid

  const SqlQuery="DELETE FROM tbl_admin_role_assign WHERE uid=? AND roleid=?"
  connection.query(SqlQuery,[uid,roleid],(result,err)=>{
    if (err) {
        res.json(err)
    }
    else {
        res.json(result)
    }
  })
}

module.exports={assignRole,revokeRole} 