import { Button, Container, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

export default function Student() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const paperStyle = {
    padding: '50px 20px',
    width: 600,
    margin: '20px auto',
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const student = { name, address }
    console.log({ student })
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    }).then(()=>{
      console.log("New Student has been added")
    })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Add Student</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
              // width: '25ch',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="student-name"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="student-address"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
