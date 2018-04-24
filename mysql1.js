var mysql      = require('mysql');
const util = require('util'); // default in node js
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', // Your mysql username
    password : 'root', // Your mysql password
    database : 'test'  // Your database name
});


const runQuery = util.promisify(connection.query).bind(connection);


(async function () {

    try {


       let userData  = await runQuery('SELECT * from user') // you query for any table

       let bookingData  = await runQuery('SELECT * from booking')  // you pother  query for any table


    } catch (err) {
        console.error(err.message);
    } finally {
        console.log("finally");
    }
})();

