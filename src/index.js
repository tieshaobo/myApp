

var React = require('react'),
    ReactDOM = require('react-dom');

// import Common from './common'
// import Todo from './to-do'
 import AntTest from './ant-test'
// import AntStudy from './ant-study/index2'
// import RouteStudy from './router-study'

//import RouteStudy2 from './route-sudy2'
import 'antd/dist/antd.min.css'
require('./index.css');



ReactDOM.render(
  <AntTest/>,
  //<RouteStudy2 />,
  document.getElementById('root')
);

