'use strict';

const firebase = require('../db');
const User = require("../models/user_accounts");
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('user_accounts').doc().set(data);
        res.send('Record saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await firestore.collection('user_accounts');
        const data = await users.get();
        const usersArray = [];

        if(data.empty) {
            res.status(400).send('No user record found');
        }else{
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().fName,
                    doc.data().lName,
                    doc.data().DOB,
                    doc.data().contactNum,
                    doc.data().email,
                    doc.data().home_address,
                    doc.data().helthStat
                );
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUserByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('user_accounts').doc(id);
        const data = await user.get();

        if(!data.exists) {
            res.status(400).send('User with the given ID not found');
        }else {
            res.send(data.data());
        }
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUserData = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('user_accounts').doc(id);
        await user.update(data);

        res.send('User data is updated successfully');

    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('user_accounts').doc(id).delete();
        res.send('The user deleted form the database!!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUserByID,
    updateUserData,
    deleteUser
}
