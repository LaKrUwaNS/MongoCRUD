import React from 'react'
import Navi from '../_NaviBar/Navi'

function page() {
    const page1 = "mongo";
    return (
        <div className='bg-[#454545] min-h-screen text-white '>
            <div className='bg-[#028539] min-h-screen text-white neanimatio'>
                <h1 className="text-center text-4xl">
                    Nextjs + <span className='text-[rgba(69,69,69,63)]'> MongoDB</span>
                </h1>


                <Navi page={page1} />
            </div >
        </div>
    )
}

export default page
