// DEPENDENCIES
// ===============================================================================
const fs = require("fs");
const util = require("util");
var path = require("path")
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

const { v4: uuidv4 } = require('uuid');
const { json } = require("express");

// METHODS
class Store {
    // returns what is read form bd.json file
    read() {
            return readFileAsync("db/db.json", "utf8")
        }
        // write notes to db.json
    write(notes) {
            return writeFileAsync("./db.json", JSON.stringify(notes))
        }
        // get the note from db.json
    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        })
    }
    addNotes() {

    }
    deleteNotes() {

    }
}
module.exports = new Store();