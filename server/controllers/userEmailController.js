const db = require('../models')


// create main Model
const UserEmail = db.useremail

// 1. create product

const addUseremail = async (req, res) => {

    let info = {
        subject: req.body.subject,
        content: req.body.content,
        isRead: req.body.isRead ? req.body.isRead : false
    }

    const userEmail = await UserEmail.create(info)
    res.status(200).send(userEmail)
    console.log(userEmail)

}

// 2. get all emails

const getAllEmails = async (req, res) => {

    let userEmails = await UserEmail.findAll({})
    res.status(200).send(userEmails)

}

// 3. get single email

const getOneEmail = async (req, res) => {

    let id = req.params.id
    let userEmail = await UserEmail.findOne({ where: { id: id }})
    res.status(200).send(userEmail)

}

// 5. delete email by id

const deleteUserEmail = async (req, res) => {

    let id = req.params.id
    
    await UserEmail.destroy({ where: { id: id }} )

    res.status(200).send('Email is deleted !')

}

// 6. get all emails

const getAllUnReadEmails = async (req, res) => {

    const userEmail = await UserEmail.findAll({ where: { isRead: false }})
    res.status(200).send(userEmail)

}




module.exports = {
    addUseremail,
    getAllEmails,
    getOneEmail,
    deleteUserEmail,
    getAllUnReadEmails,
    
}