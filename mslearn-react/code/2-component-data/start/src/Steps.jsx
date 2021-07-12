import './steps.css';
import React from 'react';

function Steps(props){
    
return (

<div>
    <ol>
{props.steps.map((step,i)=> 
<li key={i} >
    {step}
    </li>)}
    </ol>
</div>
);

}

export default Steps;