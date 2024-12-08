export function app(){
    const express = require("express");
    const path = require("path");
    
    const app = express();
    const port = process.env.PORT || 8080;
    
    // Serve any static files built by React
    app.use(express.static(path.join(__dirname, "client/build")));
    
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
    
    app.listen(port, () => console.log(`Listening on port ${port}`));
    return app;
    }