import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(Response => Response.json()
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    )
    },[])
    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
        <img  src={data.avatar_url} alt="Git Picture" width={300} />
        </>
    )
}

export default Github
