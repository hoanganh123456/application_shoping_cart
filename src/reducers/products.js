let initialState = [
    {
        id : 1,
        name: 'Iphone 6 Plus',
        image: 'https://www.cellgiant.com/wp-content/uploads/2017/12/Iphone-6-plus-gold.jpg',
        description: 'Sản phẩm do apply sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id : 2,
        name: 'Sam sung Galaxy S7',
        image: 'https://cdn11.bigcommerce.com/s-h0as7/images/stencil/1280x1280/products/12741/104817/galaxy%20s7%20edge%20silver%201%20generic%20carrier__52684.1535974057.jpg?c=2&imbypass=on',
        description: 'Sản phẩm do apply sản xuất',
        price: 400,
        inventory: 10,
        rating: 4
    },
    {
        id : 3,
        name: 'OPPO F1 S',
        image: 'https://mobipicker-xukdv8yuztpzliajnm.stackpathdns.com/wp-content/uploads/2016/11/Oppo-F1-Plus-vs-Vivo-V3-Max-Specs-Features-Price-Comparison-2.jpg',
        description: 'Sản phẩm do apply sản xuất',
        price: 300,
        inventory: 10,
        rating: 3
    },
]

const products = (state = initialState, action) => {
    switch (action.Type) {
        default: return [...state];
    }
}

export default products;