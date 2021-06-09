const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
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
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Product img">
                <div class="desc"> 
                    <h3>${this.title}</h3>
                    <p>${this.price} руб.</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class CartList {
    constructor() {
        this.countGoods = 0;
        this.amount = 0;
        this.basketItems = [];
        this.container = '.cart-content';
        this.allProducts = [];
        this._getBasket()
            .then(() => {
                this.render();
            });
    }

    // метод получения товаров в корзине
    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                this.basketItems = data;
                this.countGoods = data.countGoods;
                this.totalPrice = data.totalPrice;
                this.amount = data.amount;
            })
            .catch(error => {
                console.log(error);
            })
    }

    // отрисовка корзины
    render() {
        document.querySelector(this.container).innerHTML = '';
        const block = document.querySelector(this.container);
        for (let product of this.basketItems.contents) {
            const prod = new CartItem(product);
            this.allProducts.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
        let out = `<div class="out">Всего товаров в корзине: ${this.countGoods}<br> На сумму: ${this.amount} рублей</div> `;
        block.insertAdjacentHTML('beforeend', out);
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

    // изменить товары в корзине
    changeGoods() {

    }
}

class CartItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.amount = product.amount;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="cart-item">
                    <div class="cart-desc">
                        <h3 class="cart-name">${this.title}</h3>
                        <p>Количество: ${this.quantity} шт.</p>
                        <p class="cart-price">Цена: ${this.price} руб.</><br>
                        <p class="cart-price">Итого: ${this.price} руб.</p><br>
                  </div>
              </div>`
    }
    // удалить один элемент из корзины
    deleteItem() {

    }
}

let list = new ProductList();
list.totalSum();
list.render();
let cart = new CartList();