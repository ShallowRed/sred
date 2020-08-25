const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/dist', express.static(path.join(process.cwd(), './dist')));

router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, './dist/index.html'))
);

module.exports = router;
