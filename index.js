const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//////////////////////////////////////////////////
// 🔥 HEALTH CHECK
//////////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("TBW BACKEND LIVE");
});

//////////////////////////////////////////////////
// 🔥 SOS EVENT (app → server)
//////////////////////////////////////////////////

app.post("/sos", (req, res) => {

    console.log("🚨 SOS EVENT:");
    console.log(req.body);

    res.json({
        status: "OK",
        received: true
    });
});

//////////////////////////////////////////////////
// 🔥 VOICE / AI HOOK
//////////////////////////////////////////////////

app.post("/voice", (req, res) => {

    const { text } = req.body;

    console.log("🎤 VOICE:", text);

    res.json({
        reply: "Primljeno"
    });
});

//////////////////////////////////////////////////
// 🔥 START
//////////////////////////////////////////////////

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🚀 TBW BACKEND RUNNING ON PORT", PORT);
});