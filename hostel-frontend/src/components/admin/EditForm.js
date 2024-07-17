import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Grid, FormControl, Select, MenuItem, InputLabel, FormHelperText, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  residentPhone: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required('Address is required'),
  pincode: Yup.number().required('Pincode is required'),
  permanentAddress: Yup.string().required('Permanent Address is required'),
  permanentAddressPincode: Yup.number().required('Permanent Address Pincode is required'),
  motherName: Yup.string().required('Mother Name is required'),
  motherMobileNumber: Yup.string().required('Mother Mobile Number is required'),
  fatherName: Yup.string().required('Father Name is required'),
  fatherMobileNumber: Yup.string().required('Father Mobile Number is required'),
  guardianName: Yup.string(),
  guardianMobile: Yup.string(),
  guardianAddress: Yup.string(),
  aadharCard: Yup.string().required('Aadhar Card number is required').matches(/^\d{12}$/, 'Aadhar Card number must be 12 digits'),
  pancard: Yup.string().required('PAN Card number is required').matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'Invalid PAN Card number format'),
});

const EditForm = ({ student, handleBackToStudentList }) => {
  const formik = useFormik({
    initialValues: {
      ...student[0]
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
        console.log(values);
        resetForm();
    },
  });

  return (
    <Box mt={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Student
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              name="middleName"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.middleName && Boolean(formik.errors.middleName)}
              helperText={formik.touched.middleName && formik.errors.middleName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={formik.touched.gender && Boolean(formik.errors.gender)}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="gender"
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender && (
                <FormHelperText>{formik.errors.gender}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              InputLabelProps={{ shrink: true }}
              error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
              helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nationality"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.nationality && Boolean(formik.errors.nationality)}
              helperText={formik.touched.nationality && formik.errors.nationality}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Resident Phone"
              name="residentPhone"
              value={formik.values.residentPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.residentPhone && Boolean(formik.errors.residentPhone)}
              helperText={formik.touched.residentPhone && formik.errors.residentPhone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              type="number"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Permanent Address"
              name="permanentAddress"
              value={formik.values.permanentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.permanentAddress && Boolean(formik.errors.permanentAddress)}
              helperText={formik.touched.permanentAddress && formik.errors.permanentAddress}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Permanent Address Pincode"
              name="permanentAddressPincode"
              type="number"
              value={formik.values.permanentAddressPincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.permanentAddressPincode && Boolean(formik.errors.permanentAddressPincode)}
              helperText={formik.touched.permanentAddressPincode && formik.errors.permanentAddressPincode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mother's Name"
              name="motherName"
              value={formik.values.motherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.motherName && Boolean(formik.errors.motherName)}
              helperText={formik.touched.motherName && formik.errors.motherName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mother's Mobile Number"
              name="motherMobileNumber"
              value={formik.values.motherMobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.motherMobileNumber && Boolean(formik.errors.motherMobileNumber)}
              helperText={formik.touched.motherMobileNumber && formik.errors.motherMobileNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Name"
              name="fatherName"
              value={formik.values.fatherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
              helperText={formik.touched.fatherName && formik.errors.fatherName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Mobile Number"
              name="fatherMobileNumber"
              value={formik.values.fatherMobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fatherMobileNumber && Boolean(formik.errors.fatherMobileNumber)}
              helperText={formik.touched.fatherMobileNumber && formik.errors.fatherMobileNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Guardian's Name"
              name="guardianName"
              value={formik.values.guardianName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.guardianName && Boolean(formik.errors.guardianName)}
              helperText={formik.touched.guardianName && formik.errors.guardianName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Guardian's Mobile Number"
              name="guardianMobile"
              value={formik.values.guardianMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.guardianMobile && Boolean(formik.errors.guardianMobile)}
              helperText={formik.touched.guardianMobile && formik.errors.guardianMobile}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Guardian's Address"
              name="guardianAddress"
              value={formik.values.guardianAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.guardianAddress && Boolean(formik.errors.guardianAddress)}
              helperText={formik.touched.guardianAddress && formik.errors.guardianAddress}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
          <Button onClick={handleBackToStudentList}>
            <ArrowBack /> Back to Student List
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditForm;
