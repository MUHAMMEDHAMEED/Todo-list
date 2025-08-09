import React from 'react'
import { Pie } from "react-chartjs-2"
import { 
  Chart as chartJS,
  ArcElement,
  Tooltip,
  Legend,
 } from "chart.js"

 chartJS.register(ArcElement,Tooltip,Legend)
interface props{
    data: {Activity:string, hours:number}[]
}
const TimeChart = ({data}:props) => {

  const ChartData = {
    labels: data.map((d) => d.Activity),
    datasets:[
      {
        label: "hours",
        data: data.map((d) => d.hours),
        backgroundColor: [
          '#ff6384', '#36A2EB', '#FFCE56', '#34D399', '#A78BFA',
        ],
        borderWidth: 1,
      }
    ]
  }


  return <Pie data={ChartData}/>
}

export default TimeChart