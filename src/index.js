import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import print from './print.js';


function component() {
  var element = document.createElement('div');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data)
  print.print();
  return element;
}

document.body.appendChild(component());