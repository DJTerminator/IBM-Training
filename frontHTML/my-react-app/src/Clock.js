import React from 'react';

function Clock(props){
  return(
      <div>
          <h2>{props.title}</h2>
          <p>{props.hours} : {props.minutes} : {props.seconds}</p>
      </div>

  );
}

export default Clock;