const products = [
    { id: 1, imgSrc: "img/notebook.jpg", title: 'Notebook', price: 1000 },
    { id: 2, imgSrc: "img/mouse.jpg", title: 'Mouse', price: 10 },
    { id: 3, imgSrc: "img/keyboard.jpg", title: 'Keyboard', price: 20 },
    { id: 4, imgSrc: "img/gamepad.jpg", title: 'Gamepad', price: 100 },
];

const renderProduct = (imgSrc, title, price) => {
    return `<div class="product-item">
                <img src="${imgSrc}">
                <h3>${title}</h3>
                <p>$${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

/*const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};*/

/*вариант сокращения функции*/

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.imgSrc, item.title, item.price)).join('');
};

/* Метод join() объединяет все элементы массива в строку, разделяющую элементы массива.
В случае необходимости тип разделителя приводится к типу cтрока.
Если он не задан, элементы массива разделяются запятой ','. 
Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке. */

renderPage(products);