import React from 'react'
import { atom, useRecoilState} from 'recoil';

const textState = atom({
   key: 'textState', // unique ID (with respect to other atoms/selectors)
   default: '', // default value (aka initial value)
 });

function Input() {
   const [text, setText] = useRecoilState(textState);

   const onChange = (event) => {
     setText(event.target.value);
   };
 
   return (
     <div>
       <input type="text" value={text} onChange={onChange} className="search-input"/>
       <br />
       Echo: {text}
     </div>
   );
}

export default Input
