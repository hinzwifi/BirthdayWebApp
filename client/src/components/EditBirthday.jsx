import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navbar from './Navbar';
import axios from 'axios';
import swal from 'sweetalert'
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs'
function EditBirthday() {
    const { id } = useParams()
    const [birthMax, setbirthMax] = useState("")
    const [name, setName] = useState("");
    const [birthDate, setbirthDate] = useState("")
    const [placeName, setplaceName] = useState("")
    const [placeBirth, setplaceBirth] = useState("")
      const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.put(`http://localhost:3003/bruh/${id}`, {name: name,
      birthdate:birthDate
      }).then(response => {
         
        swal("Changed It!", "You've edited your friend!", "success");
        
          
          
        }).catch(err => {console.error(err)} )
      }

      useEffect(() => {
        setbirthMax(dayjs().format('YYYY-MM-DD'))
        axios.get(`http://localhost:3003/bruh/${id}`).then(response => {
          const responseYoink = response.data[0]
          
          setName(responseYoink.name) 
          setbirthDate(responseYoink.birthdate)
        }).catch(err => {console.error(err)} )
      
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
      placeholder={placeName}
        autocomplete="off"
        className="input input-bordered my-3" 
        type="text" 
        name="name" 
        value={name || placeName} 
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className="form-control">
      <label class="label">
                <span class="label-text">Birthdate</span>
            </label> 
        <input required     
        className="input input-bordered my-3" 
        type="date" name="birthdate" min="1969-01-01" max={birthMax}
          value={birthDate || placeBirth} placeholder='hi'
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
