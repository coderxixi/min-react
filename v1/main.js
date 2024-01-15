const dom=document.createElement('div');
dom.id='app';
document.querySelector('#root').append(dom);
const textNode=document.createTextNode('app');
dom.append(textNode);

//todo ve react -> vdom -> js object