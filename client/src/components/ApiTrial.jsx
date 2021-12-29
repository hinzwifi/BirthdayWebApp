import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BsPencilFill , BsTrashFill} from 'react-icons/bs'
import { searchFunction } from './searchFunction'

function ApiTrial() {
    const [showModal, setshowModal] = useState("")
    const [celebrants, setCelebrants] = useState([])
    const url = 'http://localhost:3003/bruh'
    useEffect(() => {
        getPersons()
       
      }, [])
      function getPersons (){
        axios.get(url).then(response => {
          setCelebrants(response.data)
          
        }).catch(err => {console.error(err)} )
      }
      const deletePerson = (id)=>{
        
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this person!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! The Person has died!", {
            icon: "success",
          });
          axios.delete(`http://localhost:3003/bruh/${id}`)
          getPersons()
        } else {
          swal("Your imaginary file is safe!")
          getPersons()
        }
      });
    }
    const bruh =""  
    
    return (
        <>
            <div id="myTable" className='   max-w-lg lg:max-w-3xl   max-h-full mx-auto'>
               {
               celebrants.length ? celebrants.filter((celebrant)=>{
                if(bruh == null)
                    return celebrant
                else if(celebrant.name.toLowerCase().includes(bruh.toLowerCase())) {
                    return celebrant
                }
              }).map( celebrant =>
                //  <li key={celebrant._id}> {celebrant.name} </li> 
                <>
                
                <div id="birthdaypeople"  class="birthday-people flex   justify-between " key={celebrant._id}>
               
            
                
                
                  <div for="my-modal-2" className='flex modal-button '>
                   <div>
                     <div class="avatar">
                       <div class="rounded-full w-14 h-14 shadow"><img src={`https://avatars.dicebear.com/api/avataaars/${celebrant.name}.svg`} /></div>
                          </div>
                    </div>
                    <div>
                          <h2 id="personName" class="something card-title">{celebrant.name}</h2>
                          <p class="something text-base-content text-opacity-40">{celebrant.birthdate}</p>
                    </div>
                    </div>
                  <div>
                  
                  <Link to={`/edit/${celebrant._id}`} className="btn btn-accent btn-active  mx-1 "  aria-pressed="true"  >
                      <BsPencilFill />
                  </Link>
                  <button onClick={() => deletePerson(celebrant._id)} className="btn btn-error btn-active "  type="submit" >
                      <BsTrashFill/>
                  </button>
                  </div>
                </div>
               
                </>
                 )
                 
                 :
                 <>
                 <div class="hero rounded-3xl flex justify-center items-center  my-auto    bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">
      Start adding some friends 🤣🤣🤣
          </h1> 
      
      
    </div>
  </div>
</div>
                 </>
               }
            </div>
        </>
    )
}

export default ApiTrial
