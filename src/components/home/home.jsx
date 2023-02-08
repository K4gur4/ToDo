import { useState } from 'react'
import {Container,Title,TodoInput,Input,Icon} from'./homeStyle.js'
import { useDispatch } from 'react-redux/es/exports'
import { addTodo } from '../../redux/todo'
const Home = ()=>{
    const [todo,setTodo]= useState([])
    const dispatch= useDispatch()
    const handleAdd= (e)=>{
        e.preventDefault()
        if(todo.length===0){
            alert('Add something')
        }
        else {
            dispatch(addTodo({
                name: todo,
                checked:false,
                id: Date.now()
            })) 
            setTodo('')
        }
    }
    const handleKey=(e)=>{
            if(e.key==='Enter'){
                if(todo.length===0){
                    alert('Add something')
                }
                else {
                    dispatch(addTodo({
                        name: todo,
                        checked:false,
                        id: Date.now()
                    })) 
                    setTodo('')
                }
            }
    }
    return (
        <Container>
            <Title>To Do List</Title>
            <TodoInput>
            <Input onKeyDown={handleKey} type={'text'} maxLength={'60'} autoFocus value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add some task you want to do...'/>
            <Icon onClick={handleAdd}>Add</Icon>
             </TodoInput>
        </Container>
    )
}

export default Home