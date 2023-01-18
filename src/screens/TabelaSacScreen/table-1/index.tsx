import { List } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';


function MyList() {
  const [count, setCount] = useState(134);
  const numbers = Array.from({length: count + 1}, (_, i) => count - i);
    // console.log(numbers)
  return (
    <div>
      {numbers.map(num => (
        <ul key={num}>
          <li >{num}</li>
        </ul>
      ))}
    </div>
  );
}

export default MyList;