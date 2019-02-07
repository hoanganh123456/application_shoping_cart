let initialState = [
    {
        id : 1,
        name: 'Iphone 6 Plus',
        image: '',
        description: 'Sản phẩm do apply sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id : 2,
        name: 'Sam sung Galaxy S7',
        image: '',
        description: 'Sản phẩm do apply sản xuất',
        price: 400,
        inventory: 10
    },
    {
        id : 3,
        name: 'OPPO F1 S',
        image: '',
        description: 'Sản phẩm do apply sản xuất',
        price: 300,
        inventory: 10
    },
]

const product = (state = initialState, action) => {
    switch (action.Type) {
        default: return [...state];
    }
}

export default product;