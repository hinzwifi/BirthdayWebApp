import React from 'react'
import Navbar from './Navbar'

function AuthProfile() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col mx-auto max-w-sm md:w-screen sm:flex-row items-center justify-center my-10  gap-9'>
            {/* <div className="flex-none hidden md:block w-14 h-14 ...">
                01
            </div> */}
            <div className="card card-bordered w-screen   sm:max-w-xs h-auto">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250" />
                </figure> 
                <div className="card-body">
                    <h2 className="card-title">Top image
                    <div className="badge mx-2 badge-secondary">NEW</div>
                    </h2> 
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                    <div className="justify-end card-actions">
                    <button className="btn btn-secondary">More info</button>
                    </div>
                </div>
            </div> 
            <div class="hidden md:block divider divider-vertical"></div> 
                <div>
                        bruh
                </div>
                {/* <div className="flex-none hidden md:block w-14 h-14 ...">
                    03
                </div> */}
            </div>
        </>
    )
}

export default AuthProfile
