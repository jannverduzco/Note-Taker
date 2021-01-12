const { read } = require("../db/store.js");
const store = require("../db/store.js");
const router = require("express").Router();

// Routes
router.get("/notes", function(req, res) {
    store.getNotes(req.body).then((notes) => res.json(notes))
})
router.post('/notes', function(req, res) { 
    store.addNotes(req.body).then((notes) => res.json(notes));
});
router.delete("api/notes/:id", function(req, res) {
    store.deleteNotes(req.params.id).then((notes) => res.json(notes));
})

module.exports = router;