const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>TechCrush Cohort 8</title>
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: #0f172a;
            color: #f8fafc;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
          }
          h1 { font-size: 2rem; }
        </style>
      </head>
      <body>
        <h1>Hello TechCrush Cohort 8 with Tutor Yushua Akande</h1>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
