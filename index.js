
function magic() {
    let text = document.querySelector('.text').textContent;

    const regexp = /'/g;
    console.log(text.replace(regexp, '\"'));
    document.querySelector('.out-1').textContent = text.replace(regexp, '\"');

    console.log(text.replace(/(\W)(')|(^)(')/g, "$1\""));
    document.querySelector('.out-2').textContent = text.replace(/(\W)(')|(^)(')/g, "$1\"");

}

document.querySelector('.btn').onclick = magic;

