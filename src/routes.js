const { readAll, writeItem } = require("./handlers");

module.exports = (app) => {
    app.get("/rows/all", readAll);
    app.post("/rows/write", writeItem);
}
