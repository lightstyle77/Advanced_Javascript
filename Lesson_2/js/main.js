class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [{
            id: 1,
            title: 'Notebook',
            price: 2000,
            imgSrc: "img/notebook.jpg"
        },
        {
            id: 2,
            title: 'Mouse',
            price: 20,
            imgSrc: "img/mouse.jpg"
        },
        {
            id: 3,
            title: 'Keyboard',
            price: 200,
            imgSrc: "img/keyboard.jpg"
        },
        {
            id: 4,
            title: 'Gamepad',
            price: 50,
            imgSrc: "img/gamepad.jpg"
        },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    totalSum() {
        let sum = 0;
        this.goods.forEach((product) => {
            sum += product.price;
        });
        document.querySelector('.sum').innerHTML = `Сумма заказа: ${sum} долларов`;
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.imgSrc = product.imgSrc;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.imgSrc}">
                <h3>${this.title}</h3>
                <p>$${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class CartList {
    constructor() {

    }
    // метод для очистки корзины
    clearAll() {

    }
    // метод подсчета суммы купленных товаров
    totalSum() {

    }
    // метод оплаты товаров
    pay() {

    }
}

class CartItem {
    constructor() {

    }
    // метод удаления элемента из корзины
    deleteItem() {

    }
}

let list = new ProductsList();
list.totalSum();























