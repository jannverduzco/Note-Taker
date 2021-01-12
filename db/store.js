// DEPENDENCIES
// ===============================================================================
const fs = require("fs");
const util = require("util");
var path = require("path")
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);
const { json } = require("express");
// keeps track of notes id's
const { v4: uuidv4 } = require('uuid');



// METHODS
class Store {
    // returns what is read form bd.json file
    read() {
            return readFileAsync("db/db.json", "utf8")
        }
        // write notes to db.json
    write(notes) {
            return writeFileAsync('db/db.json', JSON.stringify(notes));
        }
        // get the note from db.json
    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        })
    }
    addNotes(note) {
        return this.read().then((notes) => {
            const n = JSON.parse(notes);
            //array containg pushed notes
            const newNotes = [...n, note];
            this.write(newNotes).then(() => {
                return newNotes;
            });
        });
    }
    deleteNotes() {
        var allNotes = notes.filter(note => note.id !== parseInt(req.params.id));
        writeToJsonFile(allNotes);
        notes = allNotes;
        res.json(true);
    }
}

module.exports = new Store();