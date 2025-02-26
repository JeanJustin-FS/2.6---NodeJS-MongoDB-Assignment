const axios = require('axios');
require('dotenv').config();

const todoService = async () => {
    return await axios.get(`${process.env.TODO_API}/todos)`);

};

const todoServiceById = async () => {
    return await axios.get(`${process.env.TODO_API}${id}/todos)`);

};

module.exports = { todoService, todoServiceById };