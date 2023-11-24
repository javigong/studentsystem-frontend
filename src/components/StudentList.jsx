import { Paper } from '@mui/material'
import { useEffect, useState } from 'react'

const StudentList = (updated) => {
  const [students, setStudents] = useState([])
  const paperStyle = {
    padding: '50px 20px',
    width: 600,
    margin: '20px auto',
  }
  const studentStyle = {
    margin: '10px',
    padding: '15px',
    textAlign: 'left',
  }

  useEffect(() => {
    fetch('http://localhost:8080/student/getAll')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      })
  }, [updated])
  
  return (
    <>
      <h1>Students</h1>
      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper elevation={6} key={student.id} style={studentStyle}>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Address: {student.address}</p>
          </Paper>
        ))}
      </Paper>
    </>
  )
}

export default StudentList
