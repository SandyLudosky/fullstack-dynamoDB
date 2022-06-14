const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const port = process.env.PORT || 4000;
dotenv.config()

app.use(express.json());
app.use(cors());
require("./routes")(app);

const public_path = path.join(__dirname, '../build');
app.use(express.static(public_path));
app.get("*", (_, res) => {
    res.sendFile(path.join(public_path, 'index.html'));
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});