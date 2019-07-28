// import * as types from "../constant/ActionType";

var initial = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        img: "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png",
        description: "Sản Xuất do Appel",
        price: 200,
        inventory: 20,
        rate:4
    },
    {
        id: 2,
        name: "Samung galaxy Plus",
        img: "https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-black-600x600.jpg",
        description: "Sản Xuất do samsung",
        price: 400,
        inventory: 20,
        rate:3
    },
    {
        id: 3,
        name: "Iphone XX Plus",
        img: "https://cdn.tgdd.vn/Products/Images/42/166247/samsung-galaxy-a8-star-black-600x600.jpg",
        description: "Sản Xuất do Appel",
        price: 300,
        inventory: 20,
        rate:5
    }
];

const products = (state = initial, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
};


export default products