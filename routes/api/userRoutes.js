const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller.js');

//api/user
router.route('/').get(getUsers).post(createUser);

//api/user
// router.route('/:user').get(getStudents).post(createStudent);
module.exports = router;