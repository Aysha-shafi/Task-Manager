let tasks=[]
let idCounter=1

export const getTasks=(req,res)=>{
    res.json(tasks)
}


//CREATE TASK
export const createTask=(req,res)=>{
    const {title,description,status}=req.body

    if(!title || !description ||!status){
        return res.status(400).json({message:"Title,Description and status are required"})
    }
    const newTask={id:idCounter++,title,description,status:status || "pending"}
    tasks.push(newTask)
    res.status(201).json(newTask)
}

//UPDATE TASK STATUS
export const updateTask=(req,res)=>{
    const {id}=req.params
    

    const task=tasks.find(t=>t.id===parseInt(id))
    if(!task){
        return res.status(404).json({message:"Task not found"})
    }
    if(task.status!=="pending"){
        return res.status(400).json({message:"Only pending tasks can be updated"})
    }   
    task.status="completed"
    res.json(task)
}

//DELETE TASK
export const deleteTask=(req,res)=>{
    const {id}=req.params
    const initialLength=tasks.length
    tasks=tasks.filter(t=>t.id!==parseInt(id))
    if(tasks.length===initialLength){
        return res.status(404).json({message:"Task not found"})
    }
    res.json({message:"Task deleted"})
}
    