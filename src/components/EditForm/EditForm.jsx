import { useDispatch, useSelector } from 'react-redux';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { editTodo, selectCurrentTodo, toggleForm } from 'reduxTodo/todoSlice';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = {
      ...currentTodo,
      text: e.target.text.value.trim(),
    };
    dispatch(editTodo(updatedTodo));
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo?.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(toggleForm())}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
