const express = require('express');
const {addUser, getAllUsers, getUserByID, updateUserData, deleteUser} = require('../controllers/userAccountController');

const router = express.Router();

router.post('/addnewuser', addUser);
router.get('/getallusers', getAllUsers);
router.get('/getuserbyid/:id', getUserByID);
router.put('/updateuserdata/:id', updateUserData);
router.delete('/deleteuser/:id', deleteUser);

module.exports = {
    routes: router
}