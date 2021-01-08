// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const fs = require("fs");
const util = require("util");

var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

const { v4: uuidv4 } = require('uuid');

// METHODS
class Methods {
    // returns what is read form bd.json file
    read() {
            return readFileAsync("./db.json", "utf8")
        }
        // write notes to db.json
    write(notes) {
            return writeFileAsync("./db.json", JSON.stringify(notes))
        }
        // get the note from db.json
    getNote() {

    }

    addNote() {

    }

    deleteNote() {

    }



}
module.exports = new Methods();