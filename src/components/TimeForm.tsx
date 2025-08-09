import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface props{
  onAdd:(Activity:string, hours:number) => void;
}

const Timeform = ({onAdd}:props) => {
  
  const [Activity,setActivity] = useState("") 
  const [hours,setHours] = useState("")


  const handleSubmit = () => {
    if (!Activity.trim()|| !hours) alert ("fill it")
      onAdd(Activity,Number(hours))
    setActivity ("");
    setHours("");
  }

  return (
    
    <div className='space-y-3'>

      <Input
      placeholder='setActivity eg:study'
      value={Activity}
      onChange={(e) => setActivity(e.target.value)}/>
      
      <Input
      type="number"
      placeholder='setHours eg:5'
      value={hours}
      onChange={(e) => setHours(e.target.value)}/>
      
      <Button className='w-full ' onClick={handleSubmit}>
        save</Button>
    </div>
  )
}

export default Timeform
