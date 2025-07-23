import React from 'react'
import { Input } from "@material-tailwind/react";

function EnquireForm() {
    return (

        <>
            <div className='h-[70vh] w-[100vw]'>
                <div className='grid grid-cols-1 md:grid md:grid-cols-2 h-[100%] bg-red-200'>

                    <div className='bg-red-100'>


                    </div>

                    <div className='bg-amber-100'>
                        <h1 >Let's Connect</h1>
                        <h2>Send Your Message</h2>
                        <p>sub Sub Heading </p>



                        <div className="w-72">
                            <Input label="Username is hre" />
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default EnquireForm