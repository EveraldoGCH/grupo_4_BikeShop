const path = require("path");

const mainController={
    index: function(req, res) {
        res.render('index');
    },
     home: (req, res) => {
        return res.sendFile(path.join(`${__dirname}/../views/index.html`));
     }
}
module.exports=mainController