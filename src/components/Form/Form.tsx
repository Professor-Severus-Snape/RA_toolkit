import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchFilms, removeFilms } from '../../redux/filmsSlice';
import resetBtn from '../../assets/reset.svg';
import './form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleReset = () => {
    setInputValue(''); // сброс формы (локально)
    dispatch(removeFilms()); // очистка массива с фильмами (в store)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setInputValue('');
      return; // чтобы не отсылать запрос с пустым полем
    }

    const queryParamValue = trimmedValue.replace(' ', '+').toLowerCase();

    dispatch(fetchFilms(queryParamValue));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <label htmlFor="search" className="visually-hidden">Введите название фильма</label>
        <input
          id="search"
          className="form__input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите название фильма на английском языке..."
          required
        />
        <img
          className="form__reset-btn"
          src={resetBtn}
          alt="очистить"
          onClick={handleReset}
        />
      </fieldset>
      <button className="form__button" type="submit">Поиск</button>
    </form>
  );
};

export default Form;
