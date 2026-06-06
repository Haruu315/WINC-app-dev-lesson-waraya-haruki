// script.js
console.log("JavaScriptの読み込み成功！");

// 例：h1をクリックしたら文字色を変える
const title = document.querySelector('h1');
title.addEventListener('click', () => {
    if (title.style.color === 'blue') {
        title.style.color = '';
    } else {
        title.style.color = 'blue';
    }
});