import * as Types from './../constants/ActionType';
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    console.log(action);
    let {product, quantity} = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            let index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                product, 
                quantity});
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

let findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;