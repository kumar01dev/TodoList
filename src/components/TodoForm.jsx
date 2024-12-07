import React,{useState} from 'react'
import { useTodo } from '../contexts'


function TodoForm() {
    const [todo,setTodo] =useState("") // for individual todo

    const {addTodo}=useTodo();  

    const add=(e)=>{
        e.preventDefault();

        if(!todo) return //guard clause to do nothing if todo is empty or !todo

        addTodo({todo,completed:false})   // // use this if new id is not created in app.jsx but addTodo already creates id so:
        // addTodo({todo:todo,completed:false});
        // // we can add every property here but not in the app.jsx file as the addtodo there id for the todo i.e (each object)....
        setTodo("") ;

        // // or 
        // else {
        //     addTodo({todo:todo,completed:false})
        //     setTodo("")
        // } the above is shortcut of this.
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>   
    )
}

export default TodoForm