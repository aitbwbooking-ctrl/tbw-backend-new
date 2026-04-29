const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("TBW BACKEND LIVE")
})

app.get("/health", (req, res) => {
    res.json({ status: "OK" })
})

// 🔥 KLJUČNO
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`TBW BACKEND RUNNING ON PORT ${PORT}`)
})