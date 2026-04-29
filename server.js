const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//////////////////////////////////////////////////////
// 🔥 ROOT
//////////////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("TBW BACKEND LIVE")
})

//////////////////////////////////////////////////////
// 🔥 HEALTH CHECK (SAD CE RADITI)
//////////////////////////////////////////////////////

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        time: new Date().toISOString()
    })
})

//////////////////////////////////////////////////////
// 🔥 SOS ENDPOINT (APP ZOVE OVO)
//////////////////////////////////////////////////////

app.post("/sos", (req, res) => {

    console.log("🚨 SOS RECEIVED:", req.body)

    res.json({
        success: true,
        message: "SOS RECEIVED"
    })
})

//////////////////////////////////////////////////////
// 🔥 VOICE TRANSLATION (MINIMAL)
//////////////////////////////////////////////////////

app.post("/translate", (req, res) => {

    const { text, from, to } = req.body

    console.log("🌍 TRANSLATE:", text)

    // kasnije ide pravi AI
    res.json({
        translated: text
    })
})

//////////////////////////////////////////////////////

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("🔥 TBW BACKEND RUNNING ON PORT " + PORT)
})