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
// 🔥 HEALTH
//////////////////////////////////////////////////////

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime()
    })
})

//////////////////////////////////////////////////////
// 🔥 ERROR SAFETY (NO CRASH)
//////////////////////////////////////////////////////

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT ERROR:", err)
})

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED PROMISE:", err)
})

//////////////////////////////////////////////////////
// 🔥 PORT (OBAVEZNO)
//////////////////////////////////////////////////////

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 TBW BACKEND RUNNING ON PORT ${PORT}`)
})