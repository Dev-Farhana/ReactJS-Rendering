import React from 'react'
import './App.css';

const List = (props) => {
  return (
    <>
    <div className='ani'>
    {!props.animals && <div> Loading... </div>}
    {props.animals && props.animals.length > 0 && (
      <ul> {props.animals.map((animal) => {
        return <li key={animal}> {animal} </li>
      })} 
      </ul> )
    }
    {props.animals && props.animals.length === 0 && <p>There are no animals in the List!  </p> }
    </div>

    </>
  );
}

export default List;

