import { Product } from "./product";

export class CartItem {

    product:Product;
    id;

    quantity = 1;

    constructor(product:Product) {
        this.product = product;
        this.id = product.id;
    }

    increaseQuantity() {
        this.quantity += 1;
    }

    decreaseQuantity() {
        this.quantity += 1;
    }

}