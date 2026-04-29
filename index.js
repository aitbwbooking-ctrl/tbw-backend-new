const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 BASIC
app.get("/", (req, res) => {
  res.send("TBW BACKEND LIVE");
});

// 🔥 HEALTH
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

// 🔥 SIMPLE AI (fallback logic)
function generateLocalResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("bok") || msg.includes("hello")) {
    return "Pozdrav, ja sam TBW AI.";
  }

  if (msg.includes("gdje sam")) {
    return "Provjeravam tvoju lokaciju...";
  }

  if (msg.includes("vrijeme")) {
    return "Trenutno provjeravam vremenske uvjete.";
  }

  if (msg.includes("auto")) {
    return "Sustav vozila aktivan.";
  }

  return "Razumijem. Nastavi.";
}

// 🔥 CHAT ENDPOINT (GLAVNI)
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Missing message"
      });
    }

    // 🔥 Fallback (za sad bez OpenAI API)
    const response = generateLocalResponse(message);

    res.json({
      success: true,
      input: message,
      response: response,
      source: "fallback"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
});

// 🔥 VOICE COMMAND (RALLY READY)
app.post("/voice", (req, res) => {
  try {
    const { command } = req.body;

    if (!command) {
      return res.status(400).json({ error: "No command" });
    }

    let action = "unknown";

    if (command.includes("navigate")) action = "NAVIGATION_START";
    if (command.includes("stop")) action = "NAVIGATION_STOP";
    if (command.includes("help")) action = "EMERGENCY_HELP";

    res.json({
      success: true,
      command,
      action
    });

  } catch (err) {
    res.status(500).json({ error: "Voice error" });
  }
});

// 🔥 NOTIFICATIONS MOCK (za kasnije real-time)
app.get("/alerts", (req, res) => {
  res.json({
    alerts: [
      {
        type: "EARTHQUAKE",
        level: "HIGH",
        message: "Potres u blizini"
      }
    ]
  });
});

// 🔥 SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 TBW BACKEND RUNNING ON PORT " + PORT);
});
