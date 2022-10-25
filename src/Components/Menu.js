import React from 'react';
import Button from './Button';
/* Add any imports you think you might need here! */

const Menu = () => { 

    return (
      <div className="colorOptions">
          {<Button text="red" />}
          {<Button text="yellow" />}
          {<Button text="orange" />}
          {<Button text="pink" />}
      </div>
    );
}

export default Menu;