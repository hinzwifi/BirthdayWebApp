import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navbar from './Navbar';
import axios from 'axios';
import swal from 'sweetalert'

function EditBirthday() {

    async function getUser(){
        axios.get(`http://localhost:3003/bruh/`).then(response => {
            setName(response.data.name)
            setbirthDate(response.data.birthdate)
          }).catch(err => {console.error(err)} )
    }
    getUser()
    const [name, setName] = useState("");
    const [birthDate, setbirthDate] = useState("")
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.put('http://localhost:3003/bruh', {name: name,
      birthdate:birthDate
      }).then(response => {
         
        swal("Added It!", "You've added a friend!", "success");
         
          
          
        }).catch(err => {console.error(err)} )
      }
    return (
        <>
     <Navbar />
     <div className="max-w-md mx-auto">
     

     <form method='post' onSubmit={handleSubmit}>
         <div className="form-control">
     <label class="label">
                <span class="label-text">Full Name</span>
            </label> 
      <input required
        autocomplete="off"
        className="input input-bordered my-3" 
        type="text" 
        name="name" 
        value={name || ""} 
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className="form-control">
      <label class="label">
                <span class="label-text">Birthdate</span>
            </label> 
        <input required     
        className="input input-bordered my-3" 
        type="date" name="birthdate"min="1969-01-01" max="2018-12-31"
          value={birthDate || ""} 
          onChange={(e) => setbirthDate(e.target.value)}
        />
        </div>
        <div class="divider"></div> 
        <div className="form-control  ">
        <button className="btn btn-primary btn-active my-3"  aria-pressed="true" type="submit" >
             Edit
        </button>
        <Link to="/" className="btn btn-error btn-active  my-3"  aria-pressed="true" type="submit" >
             Cancel
        </Link>
        </div>
    </form>

     
     </div>
   </>
    )
}

export default EditBirthday
