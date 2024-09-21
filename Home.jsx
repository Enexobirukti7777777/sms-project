import React from 'react'
import {  BsChat, BsChatLeftDots, BsChatLeftText, BsPerson, BsPersonVcard } from 'react-icons/bs'

function Home() {
  return (

    <main className='main-container'>
    <div className='main-title'>
        <h2>Wellcome Lewi Haile</h2>
      </div>
    <h8>Home - Dashboard</h8>

    <div className='main-card'>
        <div className='card'>
            <div className='card-inner'>
               <BsChatLeftDots className='card-iicon'/><br/><br/>
              
            </div>
            <h7>Total SMS</h7>
            <h1>300,000</h1>
            <h8>SMS</h8>

        </div>
        <div className='card'>
            <div className='card-inner'>
               <BsChatLeftText className='card-iicon2'/>
            </div>
            <h7>Remaining SMS</h7>

            <h1>200,000</h1>
            <h8>SMS</h8>

        </div>
        <div className='card'>
            <div className='card-inner'>
               <BsPerson className='card-iicon3'/>
            </div>          
                 <h7>Total User</h7>



            <h1>30</h1>
            <h8>Users</h8>

        </div>
        <div className='card'>
            <div className='card-inner'>
               <BsPersonVcard className='card-iicon4'/>
            </div>
            <h7>Total No Of Chanal</h7>

            <h1>15</h1>
            <h8>Chanals</h8>

        </div>

        
    </div>

    <div className='main-card2'>

    <h5>Overall Delivery Status</h5>
        <div className='card2'>

            <div className='card-inner2'>

               <BsChatLeftDots className='card-iicon5'/><br/><br/><br/>
              
            </div>
            <h7>Deliverd</h7>
            <h1>20,000</h1>

        </div>
        <div className='card3'>

            <div className='card-inner2'>

               <BsChatLeftText className='card-iicon6'/><br/><br/><br/><br/>

            </div>
            <h7>Waiting</h7><br/>
             <h1>2000</h1>

        </div>
        <div className='card4'>

            <div className='card-inner2'>

               <BsChat className='card-iicon7'/><br/><br/><br/><br/>


            </div>          
                 <h7>Failed</h7><br/>
                 <h1>300</h1>

        

        </div> 

        
    </div>
   
        
    </main>
  )
}

export default Home
