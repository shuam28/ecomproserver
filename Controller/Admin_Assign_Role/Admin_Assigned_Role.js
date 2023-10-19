const connection = require('../../Model/db_connect')

const assignedRole = (req, res) => {
    
    const uid=req.params.uid
    // console.log(uid)
    const SqlQuery = `SELECT rolename FROM tbl_admin_roles WHERE roleid in (SELECT roleid FROM tbl_admin_role_assign WHERE uid = '${uid}')`
    connection.query(SqlQuery,(err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}

module.exports={assignedRole}  