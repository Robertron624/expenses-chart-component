import { useState } from 'react'
import './App.css'
import Bar from './components/Bar'

import data from "./data.json"

function App() {

  let values = data.map((item) => parseFloat(item.amount)) // creating a list with all items amount property

  let today = new Date();

  let todayDay = today.toUTCString().slice(0, 3).toLowerCase()

  return (
    <div className="App">
      <div className="balance-container flex justify-between">
        <div className='balance-text'>
          <p>My balance</p>
          <span className='balance-value'>$921.48</span>
        </div>
        <img src="logo.svg" alt="logo image" />
      </div>
      <div className="bars-container">
        <h1>Spending - Last 7 days</h1>
        <div className="bars">
          {data.map((bar, i) => {
            let isToday = false
            if(bar.day == todayDay) isToday = true
            return (<Bar key={i} amount={bar.amount} day={bar.day} isToday={isToday}/>)
          })}
        </div>
      </div>
      <div className="balance-footer flex justify-between">
          <div className="total-value">
            <p className='total-text'>Total this month</p>
            <span>$478.33</span>
          </div>
          <div className="balance-delta flex column justify-center">
            <p className="delta-value">+2.4%</p>
            <span>from last month</span>
          </div>
        </div>
    </div>
  )
}

export default App
