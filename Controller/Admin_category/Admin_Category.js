const connection=require('../../Model/db_connect')

const addCategory=(req,res)=>{

    const data={
        pCategoryId :req.body.catid ,
        categoryname :req.body.catname
    }

    const SqlQuery='INSERT INTO tbl_admin_product_category SET ?'
    connection.query(SqlQuery,data,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

const getCategory=(req,res)=>{
    const SqlQuery="SELECT * FROM tbl_admin_product_category"
    connection.query(SqlQuery,(error,results)=>{
            if(error){
                res.json(err)
            }
            else{
                res.json(results)
            }
    })
}

const updateCategory=(req,res)=>{
    const id=req.params.id
    const data=req.body
    const SqlQuery='UPDATE tbl_admin_product_category SET ? WHERE pCategoryId=? '
    connection.query(SqlQuery,[data,id], (err, result)=> {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

const findCategory=(req,res)=>{
    const categoryname=req.params.name
    const SqlQuery='SELECT * FROM tbl_admin_product_category WHERE categoryname=?'
    connection.query(SqlQuery,categoryname,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}
module.exports={addCategory,getCategory,updateCategory,findCategory}