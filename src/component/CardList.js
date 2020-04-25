import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
if(true) {
	throw new Error('Noooooo');
}

return (
<div>
{
 robots.map((user,i) => {
   return (

	<Card 
	key={i} //remove the key you want gone
	 id={robots[i].id}
	  name={robots[i].name}
	   email={robots[i].email}
	    />
        );
})
}
</div>
);
}

	



export default CardList;//7:00 min