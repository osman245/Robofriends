import React from 'react';
//props just gives properties that was iven he the card class

const Card = ({name,id,email}) => {

return (
<div className='tc grow bg-light-green dib br3 pa3 ma2  bw2 shadow-5'>
<img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
<div>
<h2>{name}</h2>
<p>{email}</p>
</div>
</div>
);
//only can return one element, in this case a div element with a binch in it.
}

export default Card;