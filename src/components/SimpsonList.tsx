import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getSimpsons } from '../features/simpsonsSlice'
import { ISimpsonData } from "../types/types";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs"
import {FaTrashAlt} from "react-icons/fa"
import {removeItem,upItem,downItem} from "../features/simpsonsSlice"
import {useNavigate} from "react-router-dom"

const SimpsonList = () => {

    const dispatch = useAppDispatch()
    const { simpsons } = useAppSelector(state => state.simpsons)
    const { loading } = useAppSelector(state => state.simpsons)
    const navigate=useNavigate()


    useEffect(() => {
        dispatch(getSimpsons())
    }, [])

    console.log(simpsons)
    console.log(loading)

    if (loading) {
        return <h1 className='text-center font-bold'>Loading...</h1>
    }
    return (
        <div className='max-w-[800px] m-auto'>
            {simpsons.map((item: ISimpsonData, index: any) => {
                return (
                    <div className='flex justify-between items-center my-3 border-4 border-separate rounded-md px-4'>
                        <img src={item.avatar.split("revision")[0]} alt={item.name} className="h-[90px]" />
                        <button className='text-3xl' onClick={()=> navigate(`/detail/${item.id}`,{state:item})} >{item.name}</button>
                        <div className='flex gap-3'>
                            <button className='text-green-700' onClick={()=>dispatch(upItem(item.id))}>
                                <BsFillArrowUpCircleFill size={30}/>
                            </button>
                            <button className='text-red-700' onClick={()=>dispatch(downItem(item.id))}>
                                <BsFillArrowDownCircleFill size={30}/>
                            </button>
                            <button className='text-red-400' onClick={()=>dispatch(removeItem(item.id))}>
                                <FaTrashAlt size={30}/>
                            </button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SimpsonList