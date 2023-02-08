import { Container } from "./itemStyle";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {  updateTodo } from "../../redux/todo";
import TodoItem from "../todo/todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const Item = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();


function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateTodo(items))
  }
  return (
    
    <DragDropContext onDragEnd={handleOnDragEnd} >
      <Droppable  droppableId="items">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {todos?.map((todo,index) =>  (
              <TodoItem key={todo.id} tasks = {todo} index={index}/>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Item;
