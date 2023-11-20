import { useState } from 'react'
import "./App.css";
import LineChart from './Components/LineChart';
// import LineChartWithBottomBar from './Components/LineChartWithBottomBar';
function App() {

  return (
    <>
      <div>
        <LineChart />
      </div>
      {/* <LineChartWithBottomBar /> */}
    </>
  )
}

export default App
