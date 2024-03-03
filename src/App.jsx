import {
  Section,
  Container,
  Header,
  Form,
  TodoList,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/todoSlice';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentTodo ? <Form /> : <EditForm />}
          <TodoList />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
        </Container>
      </Section>
    </>
  );
};
