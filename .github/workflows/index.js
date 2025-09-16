const express = require("express");
const { PeerServer } = require("peer");

const app = express();

const PORT = process.env.PORT || 3000;

// PeerJS server
const peerServer = PeerServer({
  port: PORT,
  path: "/",
});

// Express route (kontrol amaçlı)
app.get("/", (req, res) => {
  res.send("✅ PeerJS Server çalışıyor");
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
