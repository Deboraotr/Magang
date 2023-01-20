const pool = require('../../db_users' );

const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (error, result)=> {
        if (error) throw error;
    })
}

module.exports = {
    getUsers,
};