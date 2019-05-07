import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With']= 'XMLHttpRequest';
// import Values from './values'

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <div>Name: {this.props.name}</div> */}
//                 <Values />
//             </div>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
