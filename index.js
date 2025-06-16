express = require("express");
app = express();

app.listen("/", (req, res) => {
  console.log("benvenuto sul backend");
});

app.listen(3000, () => {
  console.log(" serve in ascolto su http://localhost:3000");
});
