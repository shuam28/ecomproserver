const connection=require('../../Model/db_connect')

const addSubCategory=(req,res)=>{
    
    let data=req.body
    console.log(data)
    let photo=req.file.location
    data={...data,photo:photo}
    const SqlQuery='INSERT INTO tbl_admin_pro_subcategory SET ?'
    connection.query(SqlQuery,data,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })    
}

const getSubCategory=(req,res)=>{
  
    const SqlQuery='SELECT * FROM  tbl_admin_pro_subcategory'
    connection.query(SqlQuery,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}
const updateSubCategory=(req,res)=>{
    const subcategoryid=req.params.subcategoryid
    const data=req.body
    const SqlQuery='UPDATE tbl_admin_pro_subcategory SET ? WHERE subcategoryid=?'
    connection.query(SqlQuery,[data,subcategoryid],(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}
const findSubCategory=(req,res)=>{
    const subcategoryname=req.params.subcategoryname
    const SqlQuery='SELECT * FROM tbl_admin_pro_subcategory WHERE subcategoryname=?'
    connection.query(SqlQuery,subcategoryname,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

module.exports={addSubCategory,getSubCategory,updateSubCategory,findSubCategory}