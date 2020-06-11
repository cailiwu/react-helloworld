import React from 'react';
import ReactDOM from 'react-dom';

// Creact a DOM Object
let element = <h1>Hello, world!!!</h1>
//使用ReactDOM.render把剛建立的物件element插入目標DOM中

ReactDOM.render(
  element,
  document.getElementById('root')
);
