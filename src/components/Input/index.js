import './styles.css';

function Input(props) {
  return (
    <input className='input-box' type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
  );
}

export default Input;