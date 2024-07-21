import React, {useState, useEffect } from 'react'
import { Container, Box, Button, Typography, TextField, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

const Bill = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    date: '',
    name: '',
    address: '',
    items: [],
    nextPaymentDate: '',
  });

  useEffect(() => {
    const generateInvoiceNumber = () => {
      const timestamp = Date.now();
      setInvoiceData((prevData) => ({ ...prevData, invoiceNumber: `INV-${timestamp}` }));
    };

    generateInvoiceNumber();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...invoiceData.items];
    items[index][name] = value;
    setInvoiceData({ ...invoiceData, items });
  };

  const addItem = () => {
    setInvoiceData({ ...invoiceData, items: [...invoiceData.items, { description: '', amount: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URI}/api/user/generate-invoice`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(invoiceData)
    });
    if (response.ok) {
      const file = await response.blob();
      const fileURL = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = `invoice-${invoiceData.invoiceNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(fileURL);
      toast.success("Invoice generated successfully!");
    } else {
      toast.error("Error generating the invoice, please try again");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Generate Invoice
        </Typography>
        <Divider/>
        <Typography variant="h6" gutterBottom>
          Invoice Number: {invoiceData.invoiceNumber}
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          name="date"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          onChange={handleChange}
        />
        {invoiceData.items.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              onChange={(e) => handleItemChange(index, e)}
            />
            <TextField
              fullWidth
              label="Amount"
              name="amount"
              onChange={(e) => handleItemChange(index, e)}
            />
          </Box>
        ))}
        <Box sx={{ mt: 2 }}>
          <IconButton color="primary" onClick={addItem}>
            <AddIcon />
          </IconButton> Add Bill
        </Box>
        <TextField
          fullWidth
          margin="normal"
          label="Next Payment Date"
          name="nextPaymentDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Generate Invoice
        </Button>
      </Box>
    </Container>
  );
}

export default Bill
