import './button.css';

export function Button({name, type}) {
  return ( 
    <div className='button unselectable'>{name}</div>
   );
}