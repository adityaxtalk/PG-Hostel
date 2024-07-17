import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import { Visibility, Edit, Delete, ArrowDropDown } from '@mui/icons-material';

import { Typography, IconButton, Button, Container, Box, CircularProgress } from '@mui/material';
import AddForm from './AddForm';
import EditForm from './EditForm';
import ViewDetail from './ViewDetail';

const customStyle = {
    header: {
        style: {
            borderBottom: "2px solid #3682f2",
            color: "#3682f2"
        }
    },
    headCells: {
        style: {
            fontWeight: "bold",
            fontSize: "14px",
            backgroundColor: "#3682f2",
            color: "white",
            borderRight: "2px solid white"
        }
    }
}
const HomePage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [students, setStudents] = useState([]);
   
   const [visibleStudentList, setVisibleStudentList] = useState(true);
   const [visibleStudentDetail, setVisibleStudentDetail] = useState(false);
   const [visibleAddStudentForm, setVisibleAddStudentForm] = useState(false);
   const [visibleEditStudentForm, setVisibleEditStudentForm] = useState(false);
   const [viewStudentData, setViewStudentData] = useState([]);
   const [columns, setColumns] = useState([]);
   

  const handleAddToStudentList = () => {
    setVisibleStudentDetail(false);
    setVisibleAddStudentForm(true);
    setVisibleEditStudentForm(false);
  }

  const handleBackToStudentList = (isFetch = true) => {
    setVisibleStudentDetail(false);
    setVisibleAddStudentForm(false);
    setVisibleEditStudentForm(false);
    if (isFetch) {
        fetchStudentDetail();
    }
  }


  const handleView = (student,val) => {
    // Handle view action here
    const data=student.filter(stud=> stud.email === val);
    setViewStudentData(data);
    setVisibleStudentDetail(true);
    setVisibleAddStudentForm(false);
    setVisibleEditStudentForm(false);
    console.log('View action clicked for row:', val);
  };
  
  const handleEdit = (student,val) => {
    // Handle view action here
    const data=student.filter(stud=> stud.email === val);
    setViewStudentData(data);
    setVisibleStudentDetail(false);
    setVisibleAddStudentForm(false);
    setVisibleEditStudentForm(true);
    console.log('Edit action clicked for row:', val);
  };
  
  const handleDelete = (id) => {
    // Handle delete action here
    console.log('Delete action clicked for row ID:', id);
  };

   function fetchStudentDetail() {
    setIsLoading(true);
       const accessToken = localStorage.getItem("access-token");
        fetch(`${process.env.REACT_APP_API_URI}/api/student`, {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${accessToken}`
          }
        }).then(res=>res.json()).then(data=> {
            debugger
            const _columns = [
                { name: 'First Name', selector: row => row.firstName, sortable: true, wrap: true },
                { name: 'Last Name', selector: row => row.lastName, sortable: true, wrap: true },
                { name: 'Mobile Number', selector: row => row.mobileNumber, sortable: true, wrap: true },
               
                { name: 'Email', selector: row => row.email, sortable: true, wrap: true },
                { name: 'Address', selector: row => row.address, sortable: true, wrap: true },
                { name: 'Pincode', selector: row => row.pincode, sortable: true, wrap: true },
                {
                  name: 'Actions',
                  cell: row => (
                    <>
                      <IconButton aria-label="view" onClick={() => handleView(data.student,row["email"])}>
                        <Visibility />
                      </IconButton>
                      <IconButton aria-label="edit" onClick={() => handleEdit(data.student,row["email"])}>
                        <Edit />
                      </IconButton>
                      <IconButton aria-label="delete" onClick={() => handleDelete(row["email"])}>
                        <Delete />
                      </IconButton>
                    </>
                  )
                }
              ];
            setStudents(data.student);
            setColumns(_columns);
            setIsLoading(false);
        }).catch(error=> {
          debugger
            console.error(error);
            toast.error("Error occurred while fetching the student details");
            setIsLoading(false);
        })
   }
   useEffect(()=> {
        fetchStudentDetail();
   } , []); 
  return (
    <Container>
        
        {isLoading && <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>}
        {!isLoading && <>
           
          {(!visibleAddStudentForm && !visibleEditStudentForm && !visibleStudentDetail) && <>
              <Typography variant="h3" sx={{textAlign: "center", textDecoration: "underline"}}>Student Detail</Typography>
              <Button variant="contained" color="primary" onClick={handleAddToStudentList}>
                Add Student
              </Button>
              <DataTable
                columns={columns} data={students}
                highlightOnHover
                dense
                subHeader
                sortIcon={<ArrowDropDown/>}
                style={customStyle}
                pagination
              />
          </>}
          {visibleAddStudentForm && <AddForm handleBackToStudentList={handleBackToStudentList} student={viewStudentData}/>}
          {visibleEditStudentForm && <EditForm handleBackToStudentList={handleBackToStudentList} student={viewStudentData}/>}
          {visibleStudentDetail && <ViewDetail handleBackToStudentList={handleBackToStudentList} student={viewStudentData}/>}
        </>}
    </Container>
  )
}

export default HomePage;