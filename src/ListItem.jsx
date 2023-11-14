import React from 'react';

const ListItem = (props) => {
  return (
    <>
      { !props.flowers ? ( <div>Load..</div> ) : props.flowers.length > 0 ? 
       ( <ul>{props.flowers.map((flowers) =>{ return <li> {flowers} </li> })} 
       </ul> ) : ( <div>There is none. </div> )
      }
   </>
  )
}

export default ListItem;