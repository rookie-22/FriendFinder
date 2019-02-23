const ex = require("express");
const bp = require("body-parser");
const p = require("path");

const app = ex();
const PORT = process.env.PORT || 3000;

app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());

app.use(ex.static(p.join(__dirname, "/app/public")));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("FriendFinder listening on PORT " + PORT);
});