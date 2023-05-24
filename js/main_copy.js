// let arrEcheveria = [
//     {
//         name: "Эхеверия",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 450,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Эхеверия",
//         price: 399,
//         image: "../images/"
//     }
// ]

// let arrGasteria = [
//     {
//         name: "Гастерия",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Гастерия",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Гастерия",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Гастерия",
//         price: 450,
//         image: "../images/"
//     },
// ]

// let arrHavortia = [
//     {
//         name: "Хавортия",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Хавортия",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Хавортия",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Хавортия",
//         price: 450,
//         image: "../images/"
//     },
// ]

// let arrAloe = [
//     {
//         name: "Алоэ",
//         price: 300,
//         image: "images/1/aloe0.jpg"
//     },
//     {
//         name: "Алоэ",
//         price: 350,
//         image: "images/1/aloe1.jpg"
//     },
//     {
//         name: "Алоэ",
//         price: 399,
//         image: "images/1/aloe2.jpg"
//     },
//     {
//         name: "Алоэ",
//         price: 450,
//         image: "images/1/aloe3.jpg"
//     },
// ]

// let arrSedum = [
//     {
//         name: "Седум",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Седум",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Седум",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Седум",
//         price: 450,
//         image: "../images/"
//     },
// ]

// let arrCrassula = [
//     {
//         name: "Крассула",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Крассула",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Крассула",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Крассула",
//         price: 450,
//         image: "../images/"
//     },
// ]
// let arrCactus = [
//     {
//         name: "Кактус",
//         price: 300,
//         image: "images/1/cactus0.jpg"
//     },
//     {
//         name: "Кактус",
//         price: 350,
//         image: "images/1/cactus1.jpg"
//     },

//     {
//         name: "Кактус",
//         price: 399,
//         image: "images/1/cactus2.jpg"
//     },
//     {
//         name: "Кактус",
//         price: 450,
//         image: "images/1/cactus3.jpg"
//     },
// ]

// let arrComposition = [
//     {
//         name: "Композиция",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Композиция",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Флорариум",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Флорариум",
//         price: 450,
//         image: "../images/"
//     },
//     {
//         name: "Композиция",
//         price: 300,
//         image: "../images/"
//     },
//     {
//         name: "Композиция",
//         price: 350,
//         image: "../images/"
//     },
//     {
//         name: "Флорариум",
//         price: 399,
//         image: "../images/"
//     },
//     {
//         name: "Флорариум",
//         price: 450,
//         image: "../images/"
//     }
// ]


let allSucculent = [
    {
        name: "Эхеверия",
        price: 300,
        image: "images/1/echeveria0.jpg",
        type: "echeveria"
    },
    {
        name: "Гастерия",
        price: 300,
        image: "../images/",
        type: "gasteria"
    },
    {
        name: "Хавортия",
        price: 300,
        image: "../images/",
        type: "havortia"
    },
    {
        name: "Алоэ",
        price: 300,
        image: "images/1/aloe0.jpg",
        type: "aloe"
    },
    {
        name: "Седум",
        price: 300,
        image: "../images/",
        type: "sedum"
    },
    {
        name: "Крассула",
        price: 300,
        image: "../images/",
        type: "crassula"
    },
    {
        name: "Кактус",
        price: 300,
        image: "images/1/cactus0.jpg",
        type: "cactus"
    },
    {
        name: "Композиция",
        price: 350,
        image: "../images/",
        type: "composition"
    },
    {
        name: "Флорариум",
        price: 399,
        image: "../images/",
        type: "composition"
    },
]

function generateNewCard() {
        let gasteria = document.getElementsByClassName("gasteria")
    for (let i=0; i < allSucculent.length; i++) {
        for (key in allSucculent[i]) {
            let newCard = document.createElement("div");
            newCard.classList.add("card_item");
            if (key == image) {
            let innerImg = document.createElement("div");
            innerImg.classList.add("inner_img");
            let imgCard = document.createElement("img");
            imgCard.classList.add("img_item");
            imgCard.setAttribute("src", allSucculent[i][key]);
            }

            // else {
            //     innerImg.innerHTML = allSucculent[i][key];
            // }
            if (key == "name") {
                let h2Card = document.createElement("h2");
                h2Card.classList.add("h2_card");
                h2Card.innerHTML = allSucculent[i][key];
            } 

            if (key == "price") {
                let pCard = document.createElement("p");
                pCard.classList.add("p_card");
                pCard.innerHTML = "Цена: " + allSucculent[i][key]  + " руб.";
            }
                let innerInputs = document.createElement("div");
                innerInputs.classList.add("inner_inputs");
                let btnMinus = document.createElement("input")
                btnMinus.classList.add("btn_minus");
                btnMinus.setAttribute("type", "button");
                btnMinus.setAttribute("value", "-");
                let btnQuantity = document.createElement("input")
                btnQuantity.classList.add("btn_quantity");
                btnQuantity.setAttribute("value", 1);
                let btnPlus = document.createElement("input")
                btnPlus.classList.add("btn_plus");
                btnPlus.setAttribute("type", "button");
                btnPlus.setAttribute("value", "+");
                let btnBuy = document.createElement("input")
                btnBuy.classList.add("btn_buy");
                btnBuy.setAttribute("type", "button");
                btnBuy.setAttribute("value", "Купить");
            
                innerImg.appendChild(imgCard);
            
            
                innerInputs.appendChild(btnMinus);
                innerInputs.appendChild(btnQuantity);
                innerInputs.appendChild(btnPlus);
                innerInputs.appendChild(btnBuy);
                newCard.appendChild(innerImg);
                newCard.appendChild(h2Card);
                newCard.appendChild(pCard);
                newCard.appendChild(innerInputs);
            
                gasteria[0].appendChild(newCard);
        }

    }
    return gasteria;

}

gasteria.appendChild(generateNewCard())


// const arrEcheveriaNew = []
//     for (let el of allSucculent) {
//         if (el.type == "echeveria") arrEcheveriaNew.push(el)
//     }
// const arrGasteriaNew = []
//     for (let el of allSucculent) {
//         if (el.type == "gasteria") arrGasteriaNew.push(el)
//     }
// const arrHavortiaNew = []
//     for (let el of allSucculent) {
//         if (el.type == "havortia") arrHavortiaNew.push(el)
//     }
// const arrAloeNew = []
//     for (let el of allSucculent) {
//         if (el.type == "aloe") arrAloeNew.push(el)
//     }
// let arrSedumNew = []
//     for (let el of allSucculent) {
//         if (el.type == "sedum") arrSedumNew.push(el)
//     }
// let arrCrassulaNew = []
//     for (let el of allSucculent) {
//         if (el.type == "crassula") arrCrassulaNew.push(el)
//     }

// let arrCactusNew = []
//     for (let el of allSucculent) {
//         if (el.type == "cactus") arrCactusNew.push(el)
//     }
// let arrCompositionNew = []
//     for (let el of allSucculent) {
//         if (el.type == "composition") arrCompositionNew.push(el)
//     }

// let i = 1;

// for (let obj of arrEcheveriaNew) {
//     let echeveria = document.getElementsByClassName("echeveria");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);


//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);
//     newCard.appendChild(innerInputs);

//     echeveria[0].appendChild(newCard);


// }

// for (let obj of arrGasteriaNew) {
//     let gasteria = document.getElementsByClassName("gasteria");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     gasteria[0].appendChild(newCard);
//     i++;


// }

// for (let obj of arrHavortiaNew) {
//     let havortia = document.getElementsByClassName("havortia");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";
    
//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     havortia[0].appendChild(newCard);
//     i++;


// }


// for (let obj of arrEcheveria) {
//     let echeveria = document.getElementsByClassName("echeveria");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     echeveria[0].appendChild(newCard);
//     i++;


// }
// for (let obj of arrAloeNew) {
//     let aloe = document.getElementsByClassName("aloe");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     aloe[0].appendChild(newCard);
//     i++;


// }
// for (let obj of arrSedumNew) {
//     let sedum = document.getElementsByClassName("sedum");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     sedum[0].appendChild(newCard);
//     i++;


// }
// for (let obj of arrCrassulaNew) {
//     let crassula = document.getElementsByClassName("crassula");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     crassula[0].appendChild(newCard);
//     i++;


// }
// for (let obj of arrCactusNew) {
//     let k=0;
//     let cactus = document.getElementsByClassName("cactus");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;


//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     cactus[0].appendChild(newCard);
//     i++;
// }

// for (let obj of arrCompositionNew) {
//     let composition = document.getElementsByClassName("composition");
//     let newCard = document.createElement("div");
//     newCard.classList.add("card_item");
//     let innerImg = document.createElement("div");
//     innerImg.classList.add("inner_img");
//     let imgCard = document.createElement("img");
//     imgCard.classList.add("img_item");
//     imgCard.src = obj.image;
//     // pic = "" + i + ".jpg";
//     // imgCard.src = pic;
//     let h2Card = document.createElement("h2");
//     h2Card.classList.add("h2_card");
//     h2Card.innerHTML = obj.name;
//     let pCard = document.createElement("p");
//     pCard.classList.add("p_card");
//     pCard.innerHTML = "Цена: " + obj.price  + " руб.";

//     let innerInputs = document.createElement("div");
//     innerInputs.classList.add("inner_inputs");
//     let btnMinus = document.createElement("input")
//     btnMinus.classList.add("btn_minus");
//     btnMinus.setAttribute("type", "button");
//     btnMinus.setAttribute("value", "-");
//     let btnQuantity = document.createElement("input")
//     btnQuantity.classList.add("btn_quantity");
//     btnQuantity.setAttribute("value", 1);
//     let btnPlus = document.createElement("input")
//     btnPlus.classList.add("btn_plus");
//     btnPlus.setAttribute("type", "button");
//     btnPlus.setAttribute("value", "+");
//     let btnBuy = document.createElement("input")
//     btnBuy.classList.add("btn_buy");
//     btnBuy.setAttribute("type", "button");
//     btnBuy.setAttribute("value", "Купить");

//     innerImg.appendChild(imgCard);
//     newCard.appendChild(innerImg);
//     newCard.appendChild(h2Card);
//     newCard.appendChild(pCard);

//     innerInputs.appendChild(btnMinus);
//     innerInputs.appendChild(btnQuantity);
//     innerInputs.appendChild(btnPlus);
//     innerInputs.appendChild(btnBuy);
//     newCard.appendChild(innerInputs);

//     composition[0].appendChild(newCard);
//     i++;


// };



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });


// // ФУНКЦИЯ ФИКСИРОВАННОГО HEADER ПРИ СКРОЛЛЕ С НУЖНОГО МЕСТА САЙТА (В Д.С. С 1/7 СЕКЦИИ КАТАЛОГ ):

// document.addEventListener("DOMContentLoaded", () => {
//     const catalog = document.querySelector(".catalog");
//     const header = document.querySelector(".header");

//     const scrollItem = document.querySelector(".scroll_item");

//     // const scrollAnimation = () => {
//     //     let windowCenter = (window.innerHeight / 2) + window.scrollY;
//     //     scrollItem.forEach(el => {

//     //         let scrollOffset = el.offsetTop + el.offsetHeight;
//     //         if (windowCenter >= scrollOffset) {
//     //             el.classlist.add("animation-class");
//     //         } else {
//     //             el.classlist.remove("animation-class");
//     //         };
//     //     });
//     // };

//     const headerFixed = () => {
//         let scrollTop = window.scrollY;
//         let catalogCenter = catalog.offsetHeight / 9;

//         // (scrollTop >= catalogCenter) ? header.classList.add("fixed") : header.classList.remove("fixed");
//         if (scrollTop >= catalogCenter) {
//             header.classList.add("fixed");
//             header.style.zIndex = "1";
//             catalog.style.marginTop = `${header.offsetHeight}px`;
//         } else {
//             header.classList.remove("fixed");
//             catalog.style.marginTop = `0px`;
//             header.style.zIndex = "0";
//         } 
//     };
    
//     headerFixed();
//     // scrollAnimation();
    
//     window.addEventListener("scroll", () => {
//         headerFixed();
//         // scrollAnimation();
//     });
// });


// // img.onclick = function(){
// //     let modal = document.getElementById("modal");
// //     modal.style.opacity = 1;
// //     modal.style.visibility = "visible";
// //     modal.style.transform = "scale(1)";
// //     let pic = document.getElementById("pic");
// //     let head = document.getElementById("head");
// //     let desc = document.getElementById("desc");

// //     pic.setAttribute("src", `../images/picture2504/pic${i}.jpg`);
// //     head.innerHTML = data[i].name;
// //     desc.innerHTML = data[i].desc;

// // }

// // let close = document.getElementById("close");
// // close.onclick = function() {
// //     modal.style.opacity = 0;
// //     modal.style.visibility = "hidden";
// //     modal.style.transform = "scale(0)";
// // }

// //Intersection Observer API
// // Как работает Intersectionobserver?
// // Intersection Observer работает через колбэк. При создании нужно описать за какими элементами мы хотим следить и пересечение с каким контейнером отслеживать. В дальнейшем колбэк будет вызываться каждый раз, когда происходит пересечение наблюдаемой области и какого-либо элемента из отслеживаемых

// // настройки:
// let options = {
//     root: null,
//     rootMargin: "5px",
//     threshold: 0.5
// }

// // функция обратного вызова:
// let callback = function(entries, observer) {
//     entries.forEach(entry => {
//         // если элемент является наблюдателем
//         if (entry.isIntersecting) {
//             console.log("find", entry);
//             // добавляем класс к нему
//             entry.target.classList.add("active");
//         }
//     });
// }

// // наблюдатель:
// let observer = new IntersectionObserver(callback, options);

// // определяем элементы, за которыми наблюдаем:
// let targets = document.querySelectorAll(".anim_right-h2")
// targets.forEach(target => {
//     observer.observe(target);
// });

// // функция обратного вызова:
// let callback2 = function(entries, observer) {
//     entries.forEach(entry => {
//         // если элемент является наблюдателем
//         if (entry.isIntersecting) {
//             console.log("find", entry);
//             // добавляем класс к нему
//             entry.target2.classList.add("active");
//         }
//     });
// }

// // наблюдатель:
// let observer2 = new IntersectionObserver(callback, options);

// // определяем элементы, за которыми наблюдаем:
// let targets2 = document.querySelectorAll(".card_item")
// targets2.forEach(target2 => {
//     observer2.observe(target2);
// });

