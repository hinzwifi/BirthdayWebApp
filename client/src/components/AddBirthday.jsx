import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navbar from './Navbar';
import axios from 'axios';
import swal from 'sweetalert'
import dayjs from 'dayjs';
function AddBirthday() {
  const [birthMax, setbirthMax] = useState("")
    const [name, setName] = useState("");
      const [birthDate, setbirthDate] = useState("")
    
      
        const handleSubmit = (event) => {
          event.preventDefault();
          
          axios.post('http://localhost:3003/bruh', {name: name,
        birthdate:birthDate
        }).then(response => {
           
          swal("Added It!", "You've added a friend!", "success");
           
            
            
          }).catch(err => {console.error(err)} )
        }
        useEffect(() => {
          setbirthMax(dayjs().format('YYYY-MM-DD'))
        }, [])
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
      placeholder="Write down a person's name"
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
        type="date" name="birthdate"min="1995-01-01" max={birthMax}
          value={birthDate || birthMax} 
          onChange={(e) => setbirthDate(e.target.value)}
        />
        </div>
        <div class="divider"></div> 
        <div className="form-control  ">
        <button className="btn btn-primary btn-active my-3"  aria-pressed="true" type="submit" >
             Submit
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

export default AddBirthday
