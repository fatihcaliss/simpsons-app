import React from 'react'
import Navbar from '../components/Navbar'
import SimpsonList from '../components/SimpsonList'

const Home = () => {
    return (
        <div className='min-h-screen bg-purple-300'>
            <Navbar />
            <SimpsonList />
        </div>
    )
}

export default Home