require('dotenv').config();
const app = require('./app');
const connectDB = require('./app/db/config');

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});