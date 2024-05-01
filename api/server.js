const app = require("./app");
const mongoose = require("mongoose");

const db =
  "mongodb+srv://rajchauhan25112004:G0WeXqLNCvtndL4q@clustercarrental.amjwun3.mongodb.net/carrental?retryWrites=true&w=majority&appName=Clustercarrental";
mongoose.connect(db).then((con) => {
  console.log("DB connected successfully");
});
const port = 3001;
app.listen(port, () => console.log(`Port is running on ${port}`));
// G0WeXqLNCvtndL4q
