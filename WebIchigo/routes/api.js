const express = require('express');
let router = express.Router();
router.use(require("express").json());

router.use(function (req, res, next) {
    console.log(req.url, "@", Date.now());
    next();
});

router.route("/").get((req, res)=> {
    res.send("<html><pre>/test</pre></html>")
})

router.route("/").get((req, res)=> {
    require("../api/index.js").run(req, res);
})


router.route("/test").get((req, res) => {
    require("../api/test").run(req, res);
});


module.exports = router;