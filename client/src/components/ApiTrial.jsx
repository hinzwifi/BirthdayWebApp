import React, {useState, useEffect} from 'react'
import axios from 'axios'
function ApiTrial() {
    
    const [countries, setcountries] = useState([])
    const url = 'http://localhost:3003/bruh'
    useEffect(() => {
        axios.get(url).then(response => {
          setcountries(response.data)
          
        }).catch(err => {console.error(err)} )
      }, [])
    return (
        <>
            <div className='   max-w-lg lg:max-w-3xl   max-h-full mx-auto'>
               {
               countries.length ? countries.map( countr =>
                //  <li key={countr._id}> {countr.name} </li> 
                <>
                 <div class="birthday-people" key={countr._id}>
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
