import React, {useState, useEffect, useRef } from 'react'
import { Container, Box, Button, Typography, TextField, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
import Select, {components} from 'react-select'


const Bill = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    date: '',
    address: '',
    items: [],
    nextPaymentDate: '',
  });
  


  const selectRef = useRef();
  const [options, setOptions] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [studentValue, setStudentValue] = useState("");
  const [selectedStudent, setSelectedSudent] = useState("");
  const handleInputChange = (stud) => {
    if (stud.length) {
      setMenuIsOpen(true)
    } else {
      setMenuIsOpen(false);
    }
    setStudentValue(stud);
  }

   const handleStudentValue = (studValue) => {
    const {firstName, lastName} = studValue;
    setInvoiceData({...invoiceData,"name": `${firstName} ${lastName}`});
   }

   const DropdownIndicator = (props) => {
    const {menuIsOpen} = props.selectProps;

    const handleDropDownClick= () => {
      setMenuIsOpen(prevState=> !prevState);
    }

    return <components.DropdownIndicator {...props}>
         <div onClick={handleDropDownClick}>
          {menuIsOpen ? "-":"+"}
         </div>
    </components.DropdownIndicator>
   }

  useEffect(() => {
    const generateInvoiceNumber = () => {
      const timestamp = Date.now();
      setInvoiceData((prevData) => ({ ...prevData, invoiceNumber: `INV-${timestamp}` }));
    };
   
    const fetchStudentDetail = async () => {
      const accessToken = localStorage.getItem("access-token");
          const response = await fetch(`${process.env.REACT_APP_API_URI}/api/student`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${accessToken}`
            }
          });
          const data = await response.json();
          setOptions(data.student);
    }

    fetchStudentDetail();
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
        <Select menuIsOpen={menuIsOpen} ref={selectRef} options={options} value={studentValue} placeholder="Generate Invoice for Student" 
          getOptionValue={(option)=> option.firstName + " " + option.lastName}
          getOptionLabel={(option)=> option.firstName + " " + option.lastName}
          components={{DropdownIndicator}}
          onChange={handleStudentValue}
          onInputChange={handleInputChange}
        />
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
          InputLabelProps={{ shrink: true }}
          label="name"
          name="name"
          value={invoiceData.name}
          disabled
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
