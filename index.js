const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/banking/query-tuition/:studentNo', async (req, res) => {
  const { studentNo } = req.params;

  try {
    const response = await axios.get(`http://localhost:3000/api/banking/query-tuition/${studentNo}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/banking/pay-tuition', async (req, res) => {
  const { studentNo, term } = req.body;

  try {
    const response = await axios.post('http://localhost:3000/api/banking/pay-tuition', { studentNo, term });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});