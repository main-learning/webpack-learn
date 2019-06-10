import _ from 'lodash';

import Icon from './icon.svg';
import Data from './data.xml';
import './style.css';

function component() {

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Laba'], ' ');
    element.classList.add('hello');
    
    const myIcon = new Image();
    myIcon.src = Icon; 

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());