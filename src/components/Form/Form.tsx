import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchFilms } from '../../redux/filmsSlice';
import './form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setInputValue("");
      return; // чтобы не отсылать запрос с пустым полем
    }

    const queryParamValue = trimmedValue.replace(" ", "+").toLowerCase();

    dispatch(fetchFilms(queryParamValue));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="search" className="visually-hidden">Введите название фильма</label>
      <input
        id="search"
        className="form__input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите название фильма на английском языке..."
        required
      />
      <button className="form__button" type="submit">Поиск</button>
    </form>
  );
};

export default Form;
