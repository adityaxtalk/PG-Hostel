import React, {useRef} from 'react';
import { Box, Typography, Button, Grid, TextField, Paper, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow} from '@mui/material';
import html2pdf from 'html2pdf.js';
import { toast } from 'react-toastify';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ViewDetail = ({ student, handleBackToStudentList }) => {
  const invoiceRef = useRef();

  const printData = async (invoiceData) => {
    const data={...invoiceData, name: `${student[0].firstName} ${student[0].lastName}`}

    const response = await fetch(`https://api-2afwy3hsbq-uc.a.run.app/api/user/generate-invoice`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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

  
  const handleGeneratePdf = () => {
    const element = invoiceRef.current;
    html2pdf().from(element).save();
  };  
  return (
    <>
      <Box mt={3} ref={invoiceRef}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Student Details
        </Typography>

        {student.map((data, index) => (
          <Paper key={index} elevation={3} sx={{ p: 2, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={0} sm={8} />
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  fullWidth
                  label="Admission Date"
                  name="admissionDate"
                  type="date"
                  value={formatDate(data.admissionDate)}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={data.firstName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Middle Name"
                  name="middleName"
                  value={data.middleName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={data.lastName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={data.gender}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formatDate(data.dateOfBirth)}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nationality"
                  name="nationality"
                  value={data.nationality}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  value={data.mobileNumber}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Aadhar Card"
                  name="aadharCard"
                  value={data.aadharCard}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pan Card"
                  name="pancard"
                  value={data.pancard}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Residential Phone"
                  name="residentialPhone"
                  value={data.residentPhone}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={data.email}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Correspondence Address"
                  name="address"
                  value={data.address}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  type="number"
                  value={data.pincode}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Permanent Address"
                  name="permanentAddress"
                  value={data.permanentAddress}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Permanent Address Pincode"
                  name="permanentAddressPincode"
                  type="number"
                  value={data.permanentAddressPincode}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mother's Name"
                  name="motherName"
                  value={data.motherName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mother's Mobile Number"
                  name="motherMobileNumber"
                  value={data.motherMobileNumber}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Father's Name"
                  name="fatherName"
                  value={data.fatherName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Father's Mobile Number"
                  name="fatherMobileNumber"
                  value={data.fatherMobileNumber}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Guardian's Name"
                  name="guardianName"
                  value={data.guardianName}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Guardian's Mobile Number"
                  name="guardianMobile"
                  value={data.guardianMobile}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Guardian's Address"
                  name="guardianAddress"
                  value={data.guardianAddress}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true, readOnly: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: 20 }}
                  textAlign={"center"}
                >
                  Invoices
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {data.invoices.map((invoice, index) => (
                  <Paper
                    key={invoice._id}
                    style={{ padding: 10, marginBottom: 10 }}
                  >
                    
                    <Typography variant="body1" sx={styles.cursorPointer} onClick={()=> printData(invoice)}>
                      <strong>Invoice Number:</strong> {invoice.invoiceNumber}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Date:</strong>{" "}
                      {new Date(invoice.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Address:</strong> {invoice.address}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Total Amount:</strong> {invoice.totalAmount}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Paid Amount:</strong> {invoice.paidAmount}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Next Payment Date:</strong>{" "}
                      {new Date(invoice.nextPaymentDate).toLocaleDateString()}
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <strong>Sr. No.</strong>
                            </TableCell>
                            <TableCell>
                              <strong>Description</strong>
                            </TableCell>
                            <TableCell>
                              <strong>Amount</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {invoice.items.map((item, itemIndex) => (
                            <TableRow key={item._id}>
                              <TableCell>{itemIndex + 1}</TableCell>
                              <TableCell>{item.description}</TableCell>
                              <TableCell>{item.amount}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                              <strong>Subtotal</strong>
                            </TableCell>
                            <TableCell>{invoice.totalAmount}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                              <strong>Paid To Date</strong>
                            </TableCell>
                            <TableCell>{invoice.paidAmount}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                              <strong>Balance Due</strong>
                            </TableCell>
                            <TableCell>
                              {invoice.totalAmount - invoice.paidAmount}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  
                  </Paper>
                ))}
                {data.invoices.length === 0 && (
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ marginTop: 20 }}
                    textAlign={"center"}
                  >
                    No invoice record present
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGeneratePdf}>
          Generate PDF
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained" onClick={handleBackToStudentList}>
          Back to Student List
        </Button>
      </Box>
    </>
  );
};

const styles = {
  cursorPointer: {
    cursor: "pointer"
  },
};

export default ViewDetail;
