const connection = require('../../Model/db_connect')

const adminRolePost = (req, res) => {
    const data = {
        roleid: req.body.roleid,
        rolename: req.body.rolename,
    }
    const SqlQuery = 'INSERT INTO tbl_admin_roles SET ?'
    connection.query(SqlQuery, data, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
const viewrRole = (req, res) => {

    const SqlQuery = 'SELECT * FROM tbl_admin_roles '
    connection.query(SqlQuery,(err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
const updateRole = (req, res) => {
    const id = req.params.roleid
    const rolename = req.body.rolename

    const SqlQuery = 'UPDATE tbl_admin_roles SET rolename =? WHERE roleid =?'
    connection.query(SqlQuery, [rolename,id], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
const deleteRole = (req, res) => {
    const id = req.params.roleid
   
    const SqlQuery = 'DELETE FROM tbl_admin_roles WHERE roleid=?'
    connection.query(SqlQuery, id, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
const revokerole = (req, res) => {

    const uid = req.body.uidforrevokrole
    const roleid = req.body.roleid
   
    const SqlQuery = `DELETE FROM tbl_admin_role_assign WHERE uid =? and roleid =?`
    connection.query(SqlQuery, [uid,roleid], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
const getRoleByName = (req, res) => {
    const rolename = req.params.rolename
//    console.log(rolename)
    const SqlQuery = `SELECT roleid FROM tbl_admin_roles WHERE rolename = ?`
    connection.query(SqlQuery, rolename, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}

module.exports = { adminRolePost, viewrRole, updateRole, deleteRole ,getRoleByName,revokerole}