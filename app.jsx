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
class NowTime extends React.Component {
  //使用類別中的constructor建構子，參數中傳入props是必要的
  constructor(props){
      //super-> eact.Component內的props屬性
      super(props)
      this.state = {time : new Date().toLocaleTimeString()}
  }
  componentDidMount () {
    // 組件建構完成，每一次都去刷新this.state.time
    const updateTime = () => {
      this.setState({time: new Date().toLocaleTimeString()})
    }
    setInterval(updateTime, 1000)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('prevProps, prevState', prevProps, prevState,)
    console.log('state被更新了')
  }
  render(){
      //使用類別中state的屬性
      return <h1>現在時間是{this.state.time}</h1>
  }
  componentWillUnmount () {
    console.log('component被移除了，在', this.state.time)
  }
}

ReactDOM.render(<NowTime />,document.getElementById('root'))

const removeElement = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

setTimeout(removeElement, 5000)