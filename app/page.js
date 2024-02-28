"use client"
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const  submitHandler = (e)=>{e.preventDefault();
                                  setmainTask([... mainTask,{Title,desc}]) 
                                 console.log(Title);
                                 console.log(desc);
                                 setTitle("");
                                 setdesc("");
                                 console.log(mainTask); }
const deleHandler = (i)=>{ let copyTask = [...mainTask]
   copyTask.splice(i,1)
  setmainTask(copyTask)}
  let renderTask = <h2>No Task Available</h2>;


 if (mainTask.length>0) 
          {renderTask = mainTask.map((t, i) => {
    return (
    <li key={i} className='flex items-center justify-between mb-8'>
       <div className='flex justify-between mb-5 w-2/3'>
        
        <h5 className="text-2xl font-semibold">{t.Title}</h5>
        <p className="text-lg font-medium">{t.desc}</p>
  </div>
      <button onClick={deleHandler} className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
  );
});
  
 }

  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
Todo List</h1>
    <form onSubmit={submitHandler}>

    <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
    placeholder='Enter Title here' value={Title} onChange={(e)=>{setTitle(e.target.value)}}>
    </input>

    <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
    placeholder='Enter desccription here' value={desc} onChange={(e)=>{setdesc(e.target.value)}}>
    </input>

    <button onClick={()=>deleHandler(i)} className='bg-black text-white px-4 py-2 text-2xl font-bold rounded file:m-5'>Add task</button>
    
    </form>
    <hr/>
    <div className='p-8 bg-slate-400'>
        <ul>
          {renderTask}
        </ul>
    </div>
   </>
  );
};

export default page