import React from 'react';
import ReactDOM from 'react-dom';

/*
// Creact a DOM Object
let element = <h1>Hello, world!!!</h1>
//使用ReactDOM.render把剛建立的物件element插入目標DOM中

ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

// 匿名函式


/*
const displayTime = () => {
  // 顯示時間的組件
  let nowTime = (
    <div>
      <span>現在時間：{new Date().toLocaleTimeString()}</span>
    </div>
  )
  ReactDOM.render(nowTime, document.getElementById('root'))
}

setInterval(displayTime, 1000)
*/

class HelloWorld extends React.Component {
  render () {
  return <p style={this.props.style}>Hello World, {this.props.name}</p>
  }
}

// 宣告一個欲渲染的根組件
let rootDiv = (
  <div>
    { /*這是註解, 插入自製組件*/ }
    <HelloWorld name="Mary" style={ {'font-size': 20} }></HelloWorld>
    <HelloWorld name="Jhon" style={ {'font-size': 10} }></HelloWorld>
  </div>
)
ReactDOM.render(rootDiv, document.getElementById('root'))
