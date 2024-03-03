import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleForm } from 'reduxTodo/todoSlice';

export const Todo = ({ text, index, id }) => {
  const dispatch = useDispatch();

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index + 1}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={() => dispatch(toggleForm(id))}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
