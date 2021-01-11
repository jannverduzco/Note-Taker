const { read } = require("../db/store.js");
const store = require("../db/store.js");
const router = require("express").Router();

// Routes
router.get("/notes", function(req, res) {
    store.getNotes().then((notes) => res.json(notes))
})
router.post('/notes', function(req, res) { 
    store.addNotes(req.body).then((notes) => res.json(notes));
});
router.delete("api/notes:id", function() {

})

module.exports = router;