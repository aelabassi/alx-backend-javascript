import Routes from './routes';

const express = require('express');

const app = express();
const PORT = 1245;

Routes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
module.exports = app;
