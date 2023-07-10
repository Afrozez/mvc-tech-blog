const path = require("path");
const router = require('express').Router()
 
router.get("/", (req, res) => {
    res.render('login');
 });

router.get("/signup", (req, res) => {
    res.render('signup')
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
}); 



module.exports = router;