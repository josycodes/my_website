const express = require('express'), app = express(), port = 3000;

/** Middlewares */
app.use(express.static('./public'));


const start = async () => {
    try{
        app.listen(port, console.log(`App is Listening on port ${port}`))
    }catch (e) {
        console.log(e);
    }
}

start()

