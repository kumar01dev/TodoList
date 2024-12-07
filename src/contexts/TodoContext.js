import {createContext,useContext} from 'react';

export const TodoContext=createContext({
    todos:[
        {
            todo:'todo msg',
            id:101,
            completed:false,
        }
    ],
    addTodo:(title)=>{},
    updateTodo:(id,title)=>{},
    deleteTodo:(id,)=>{},
    toggleComplete:(id)=>{},
});

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}