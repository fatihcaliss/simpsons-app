import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const DetailPage = () => {

    const { state } = useLocation()
    const navigate = useNavigate();

    console.log(state);
    return (
        <div className='h-screen  bg-purple-300 p-5'>
            <div className='max-w-[800px] m-auto'>
            <img src={state.avatar.split("revision")[0]} alt={state.name} className="h-[200px] block m-auto" />
            <h1 className='text-6xl text-center my-8'>{state.name}</h1>
            <p className='text-2xl indent-8'>{state.description}</p>
            <button onClick={()=>navigate("/")} className="block m-auto p-4 border-2 rounded-md bg-pink-300 font-bold my-2 hover:bg-pink-700 transition-all duration-1000" >BACK TO HOME PAGE</button>

            </div>
        </div>
    )
}

export default DetailPage