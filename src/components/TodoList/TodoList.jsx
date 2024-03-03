import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {todos.length ? (
        <Grid>
          {todos.map((item, idx) => (
            <Todo key={item.id} id={item.id} text={item.text} index={idx} />
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
