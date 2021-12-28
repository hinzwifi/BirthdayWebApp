import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BsPencilFill , BsTrashFill} from 'react-icons/bs'

function ApiTrial() {
    const [showModal, setshowModal] = useState("")
    const [countries, setcountries] = useState([])
    const url = 'http://localhost:3003/bruh'
    useEffect(() => {
        getPersons()
       
      }, [])
      function getPersons (){
        axios.get(url).then(response => {
          setcountries(response.data)
          
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
    return (
        <>
            <div className='   max-w-lg lg:max-w-3xl   max-h-full mx-auto'>
               {
               countries.length ? countries.map( countr =>
                //  <li key={countr._id}> {countr.name} </li> 
                <>
                
                <div   class="birthday-people flex   justify-between " key={countr._id}>
               
            
                
                
                  <div for="my-modal-2" className='flex modal-button '>
                   <div>
                     <div class="avatar">
                       <div class="rounded-full w-14 h-14 shadow"><img src={`https://avatars.dicebear.com/api/avataaars/${countr.name}.svg`} /></div>
                          </div>
                    </div>
                    <div>
                          <h2 class="card-title">{countr.name}</h2>
                          <p class="text-base-content text-opacity-40">{countr.birthdate}</p>
                    </div>
                    </div>
                  <div>
                  
                  <Link to={`/edit/${countr._id}`} className="btn btn-accent btn-active  mx-1 "  aria-pressed="true"  >
                      <BsPencilFill />
                  </Link>
                  <button onClick={() => deletePerson(countr._id)} className="btn btn-error btn-active "  type="submit" >
                      <BsTrashFill/>
                  </button>
                  </div>
                </div>
               
                </>
                 ):
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
