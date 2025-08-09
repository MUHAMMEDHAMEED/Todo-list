import React, { useState } from 'react'
import Timeform from '@/components/Timeform'
import TimeChart from './TimeChart';
const Home = () => {

  const [data, setData] = useState<{Activity:string; hours:number}[]>([]);
   const handleAdd =(Activity:string, hours:number) => {

    setData((prev) =>[...prev, {Activity, hours}]);

   }
  return (
    <div className="max-w-md mx-auto p-16 mt-10 bg-white rounded-shadow space-y-6">
          <h1 className="text-2-xl font-bold">Time Tracker</h1>
                    <Timeform onAdd={handleAdd}/>
                    <TimeChart data={data}/>
    </div>
  )
}

export default Home
