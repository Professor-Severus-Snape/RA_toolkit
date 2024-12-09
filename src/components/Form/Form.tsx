import './form.css';

const Form = () => {
  return (
    <form className="form">
      <label htmlFor="search" className="visually-hidden">Введите название фильма</label>
      <input id="search" className="form__input" placeholder='Введите название фильма...' required/>
      <button className="form__button" type="submit">Поиск</button>
    </form>
  );
};

export default Form;
