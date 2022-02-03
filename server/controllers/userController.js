const { urlencoded } = require('body-parser');
const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  

exports.view = (req,res)=>{
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
        connection.query(`SELECT * FROM user WHERE status = "active"`,(err,rows)=>{
            connection.release()
            if(!err){
                let removedUser = req.query.removed
                res.render('home',{rows,removedUser})
            }else{
                console.error(err)
            }
        });
      });
    
}
// FIND USER BY SEARCH
exports.find = (req,res)=>{
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
        let searchTerm = req.body.search
        console.log(typeof(searchTerm),searchTerm);
        connection.query(`SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ? `,[`%${searchTerm}%`,`%${searchTerm}%`],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('home',{rows})
            }else{
                console.error(`No user by this name found`,err)
            }
        });
      });
    
}
// ADD NEW USER
exports.userForm = (req,res)=>{
    res.render('add-user')    
}

exports.addUser = (req,res)=>{
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
        let {first_name,last_name,user_email,user_phone,user_comment} = req.body
        connection.query(`INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?`,[first_name,last_name,user_email,user_phone,user_comment],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('add-user',{alert:`User ${first_name} ${last_name} Added Successfully`})
                console.log(`User ${first_name} ${last_name} Added`);
            }else{
                res.render('error-msg')
                console.error(`Something Went Wrong`,err)
            }
        });
      });
}

// EDIT and UPDATE USER ::

exports.editUser = (req,res)=>{
    let Id = req.params
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
        connection.query(`SELECT * FROM user WHERE id = ?`,[Id.id],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('edit-user',{rows})
            }else{
                console.error(err)
            }
        });
      });
}

exports.updateUser = (req,res)=>{
    let {first_name,last_name,user_email,user_phone,user_comment} = req.body
    let Id = req.params
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
        connection.query(`UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?`,[first_name,last_name,user_email,user_phone,user_comment,Id.id],(err,rows)=>{
            connection.release()
            if(!err){
                pool.getConnection((err, connection) => {
                    if (err) throw err;
                    console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
                    connection.query(`SELECT * FROM user WHERE id = ?`,[Id.id],(err,rows)=>{
                        connection.release()
                        if(!err){
                            res.render('edit-user',{rows,alert:`User ${first_name} ${last_name} has been updated`})
                        }else{
                            console.error(err)
                        }
                    });
                  });
            }else{
                console.error(err)
            }
        });
      });
}

// DELETING USER

exports.deleteUser = (req,res)=>{
    Id = req.params;
    console.log(Id);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);

        connection.query(`UPDATE user SET status='removed' WHERE id = ?`,[Id.id],(err,rows)=>{
            connection.release()
            if(!err){
                let removedUser = encodeURIComponent('User Successfully removed')
                 res.redirect('/?removed='+removedUser);
            }else{
                res.render('error-msg')
                console.error(`Something Went Wrong`,err)
            }
        });
      });
}

/// VIEW USER

exports.viewUser = (req,res)=>{

        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
            connection.query(`SELECT * FROM user WHERE id = ? `,[req.params.id],(err,rows)=>{
                connection.release()
                if(!err){
                    res.render('view-user',{rows})
                }else{
                    console.error(`No user by this name found`,err)
                }
            });
          });
        
    
}