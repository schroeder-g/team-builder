import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';

import Form from './components/Form'
import Member from './components/Member'

const initialTeamList = [
  {
    id: uuid(),
    name: "Jose",
    email: "beastmaster666@yahoomail.com",
    role: "Instructor"
  },
  {
    id: uuid(),
    name: "Fonzeretta",
    email: "cactiftw@gmail.com",
    role: "Student"
  },
  {
    id: uuid(),
    name: "XAE12",
    email: "elon.musk.sucks@google.com",
    role: "Team Lead"
}
]

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

// 👉 helpers to simulate async data [GET] and [POST]
const fakeAxiosGet = () => {
  return Promise.resolve({status: 200, sucess: true, data: initialTeamList})
}
const fakeAxiosPost = (url, {name, email, role}) => {
  const newTeammate = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeammate })

}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamList)
  const [ formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {  
    const newMember = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    fakeAxiosPost("fleetfoxesapi.com", newMember)
      .then( res => {
        const apiMember = res.data
        setTeamMembers([...teamMembers, apiMember])
        setFormValues(initialFormValues)
      })
  }

  useEffect( () => {
    fakeAxiosGet("fleetfoxesapi.com")
    .then ( res =>  setTeamMembers(res.data))
  },[])
 
  return (
    <div>
      <h1>The Squad</h1>
      <Form update={updateForm} submit={submitForm} values={formValues}/>
      
      {teamMembers.map( member => {
        return (
          <Member key={member.id} details ={member}></Member>
        )
      })}

    </div>
  );
}

export default App;
