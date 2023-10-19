const connection = require('../../Model/db_connect')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// Generate a random UUID
// const randomUUID = uuidv4();
// console.log(randomUUID);


const post_admin_user = (req, res) => {
    try {

        let user_data = req.body
     
        const name = user_data.name
        const email = user_data.email
        const password = user_data.password
        const mobile = user_data.mobile
        let photo = req.file.location
       
        user_data = { ...user_data, photo: photo }
        let SqlQuery = "INSERT INTO tbl_adminuser SET ?"
        bcrypt.hash(user_data.password, 10, (err, hash) => {
            if (err) {
                // res.json(err)
            }
            user_data = { ...user_data, password: hash }
            connection.query(SqlQuery, user_data, (err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)

                    // const User = require('../models/User'); // Assuming you have a User model

                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'prashusingh998195@gmail.com',
                            pass: 'fcvhjowqybzftnle'
                        }
                    });

                    // Sending confirmation email (Nodemailer code)
                    const mailOptions = {
                        from: 'shubhsingh998195@gmail.com',
                        to: `${email}`,
                        subject: 'Registration Confirmation',
                        text: `Thank you for registering!
Dear ${name},

I hope this email finds you well.

We wanted to take a moment to express our sincere gratitude for registering with us. Your registration has been successfully processed, and we are pleased to confirm your enrollment.

Your Registration Details:
- Name: ${name}
- Email: ${email}
- Mobile: ${mobile}
- Password: ${password}

If you have any questions or require further assistance, please do not hesitate to reach out to our support team at support@example.com or +1 (555) 123-4567. We are here to help you every step of the way.

Thank you once again for choosing Example Company. We look forward to serving you and ensuring your experience with us is exceptional.

Warm regards,

sonam patel 
Software Engineer
Micro Technology Pvt.Ltd
sonampatel998195@gmail.com
+91 7879441406
vijay nagar ,Indore-462001`
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error);
                            res.status(500).send('Error sending email');
                        } else {
                            console.log('Email sent: ' + info.response);
                            res.status(200).send('Registration successful! Check your email for confirmation.');
                        }
                    });
                    // };


                }

            })
        })
    } catch (error) {

    }

}
const get_admin_user_list = (_req, res) => {
    try {
        let SqlQuery = "SELECT * FROM tbl_adminuser"
        connection.query(SqlQuery, (err, result) => {
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
const delete_admin_user = (req, res) => {
    try {
        let id = req.params.id
        console.log(id)
        let SqlQuery = 'DELETE FROM tbl_adminuser WHERE uid=?'
        connection.query(SqlQuery, id, (err, result) => {
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
const update_admin_user = (req, res) => {
    // try {
        let data = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            aadhar:req.body.aadhar,
            dob:req.body.dob,
            doj:req.body.doj,
            qualification:req.body.qualification,
            address:req.body.address,
            state:req.body.state,
            city:req.body.city,
            pin:req.body.pin,
            // photo:req.file.location,
        } 

        data={...data,photo:req.file.location}
        console.log(data)
        let id = req.params.id
        let SqlQuery = `UPDATE tbl_adminuser SET ? WHERE uid =?`
        connection.query(SqlQuery, [data, id], (err, result) => {
            if (err) {
                res.json(err)
            } 
            else {
                res.json(result)
            }
        })

    // } catch (error) {
    //     res.json("catch",error)

    // }
}
const status_admin_user = (req, res) => {
    try {
        let status = req.body.status
        let id = req.params.id
        // console.log(status)
        let SqlQuery = 'UPDATE tbl_adminuser SET status =? WHERE uid =?'
        connection.query(SqlQuery, [status, id], (err, result) => {
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
const find_admin_userbyuid = (req, res) => {
    try {
        // let status = req.body
        let uid = req.params.uid
        let SqlQuery = 'SELECT * FROM tbl_adminuser WHERE uid =?'
        connection.query(SqlQuery, uid, (err, result) => {
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
module.exports = { post_admin_user, get_admin_user_list, delete_admin_user, update_admin_user, status_admin_user ,find_admin_userbyuid}