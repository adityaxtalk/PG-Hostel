import React from 'react';
import { Box, Typography, Button, Grid, Divider, Paper } from '@mui/material';

const ViewDetail = ({ student, handleBackToStudentList }) => {
  return (
    <Box mt={3}>
      <Typography variant="h4" gutterBottom>
        Student Details
      </Typography>

      {student.map((data, index) => (
        <Paper key={index} elevation={3} sx={{ p: 2, mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Personal Information</Typography>
              <Typography>
                <strong>Name:</strong>{' '}
                {`${data.firstName} ${data.middleName ? data.middleName : ''} ${data.lastName}`}
              </Typography>
              <Typography>
                <strong>Gender:</strong> {data.gender ? data.gender : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Date of Birth:</strong>{' '}
                {data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Nationality:</strong> {data.nationality ? data.nationality : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Email:</strong> {data.email ? data.email : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Mobile Number:</strong> {data.mobileNumber ? data.mobileNumber : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Resident Phone:</strong> {data.residentPhone ? data.residentPhone : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Address:</strong> {data.address ? data.address : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Pincode:</strong> {data.pincode ? data.pincode : 'Not Applicable'}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Permanent Address</Typography>
              <Typography>
                <strong>Address:</strong> {data.permanentAddress ? data.permanentAddress : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Pincode:</strong>{' '}
                {data.permanentAddressPincode ? data.permanentAddressPincode : 'Not Applicable'}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Parent/Guardian Information</Typography>
              <Typography>
                <strong>Mother's Name:</strong>{' '}
                {data.motherName ? data.motherName : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Mother's Mobile Number:</strong>{' '}
                {data.motherMobileNumber ? data.motherMobileNumber : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Father's Name:</strong>{' '}
                {data.fatherName ? data.fatherName : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Father's Mobile Number:</strong>{' '}
                {data.fatherMobileNumber ? data.fatherMobileNumber : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Guardian's Name:</strong>{' '}
                {data.guardianName ? data.guardianName : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Guardian's Mobile Number:</strong>{' '}
                {data.guardianMobile ? data.guardianMobile : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>Guardian's Address:</strong>{' '}
                {data.guardianAddress ? data.guardianAddress : 'Not Applicable'}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Identification Information</Typography>
              <Typography>
                <strong>Aadhar Card:</strong> {data.aadharCard ? data.aadharCard : 'Not Applicable'}
              </Typography>
              <Typography>
                <strong>PAN Card:</strong> {data.pancard ? data.pancard : 'Not Applicable'}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Box mt={2}>
        <Button variant="contained" onClick={handleBackToStudentList}>
          Back to Student List
        </Button>
      </Box>
    </Box>
  );
};

export default ViewDetail;
