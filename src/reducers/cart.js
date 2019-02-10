import * as Types from './../constants/ActionType';
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = [
    {
       product: {
        id : 1,
        name: 'Iphone 6 Plus',
        image: 'https://www.cellgiant.com/wp-content/uploads/2017/12/Iphone-6-plus-gold.jpg',
        description: 'Sản phẩm do apply sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
       },
       quantity : 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.Type) {
        case Types.ADD_TO_CART:
            console.log('hoanganh',action);
            return [...state];
        default: return [...state];
    }
}

export default cart;