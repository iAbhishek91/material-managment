const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Abhi', lastName: 'D' },
    { id: 2, firstName: 'Suta', lastName: 'C' }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
