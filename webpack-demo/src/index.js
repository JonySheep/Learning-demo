import _ from 'lodash';
import './style.css';
import Image from './image.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
    element.classList.add('hello');

    return element;
}
function img() {
    const element = document.createElement('img');
    element.src = Image;
    return element;
}
function button() {
    const btn = document.createElement('button');
    btn.innerHTML = 'click';
    btn.onclick = e => import(/* webpackChunkName: "component" */ './component').then(module => {
        let showComponent = module.default;
        showComponent();
    });
    return btn;
}
document.body.appendChild(component());
document.body.appendChild(img());
document.body.appendChild(button());