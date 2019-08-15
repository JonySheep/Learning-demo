function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _ }) => {
        let element = document.createElement('div');
        element.innerHTML = _.join(['Component'], ' ');
        return element;
    }).catch(error => 'An error occur');
}

export default function showComponent() {
    getComponent().then(component => {
        document.body.appendChild(component)
    });
}