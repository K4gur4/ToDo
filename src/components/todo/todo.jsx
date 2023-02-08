import { Container, Icon, Title, Action } from "./todoStyle";
import { removeTodo } from "../../redux/todo";
import { Draggable } from "react-beautiful-dnd";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useSelector } from "react-redux/es/exports";

import { useDispatch } from "react-redux";
import { useState } from "react";
const TodoItem = ({ tasks, index }) => {
  console.log(tasks);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const [check, setCheck] = useState(tasks.checked);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");
  console.log(tasks.id, check);
  const handleCompleted = (id) => {
    setCheck(!check);
  };
  const handleRemove = (e) => {
    dispatch(removeTodo(e.id));
  };
  const handleEdit = (e) => {
    setEdit(!edit);
  };
  const handleUpdate = (id) => {
  
    if (update.length === 0) {
      alert("Update Somthing");
    } else {
      
      setEdit(!edit)
    }
  };

  return (
    <Draggable key={index} draggableId={String(tasks.id)} index={index}>
      {(provided) => (
        <Container
          checked={check}
          {...provided?.draggableProps}
          {...provided?.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit === false ? (
            <Title>{tasks.name}</Title>
          ) : (
            <>
              <input
                onChange={(e) => setUpdate(e.target.value)}
                placeholder={tasks.name}
              />
              <Icon
                style={{ borDer: "1px solid black" }}
                onClick={(e) => handleUpdate(tasks.id)}
              >
                <UpgradeIcon style={{ fontSide: "larger" }} />
              </Icon>
            </>
          )}
          <Action key={tasks.id}>
            <Icon onClick={(e) => handleCompleted(tasks.id)}>
              <CheckBoxIcon />
            </Icon>
            <Icon onClick={handleEdit}>
              <CreateIcon />
            </Icon>
            <Icon onClick={handleRemove}>
              <DeleteForeverIcon />
            </Icon>
          </Action>
        </Container>
      )}
    </Draggable>
  );
};
export default TodoItem;
