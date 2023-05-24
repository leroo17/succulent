// let basket = [
//     {
//         name: "Алоэ",
//         price: 300,
//         image: "images/1/aloe0.jpg"
//     },
//     {
//         name: "Кактус",
//         price: 300,
//         image: "images/1/cactus0.jpg"
//     },
//     {
//         name: "Кактус",
//         price: 450,
//         image: "images/1/cactus3.jpg"
//     }

// ]


let arrEcheveria = [
    {
        name: "Эхеверия",
        price: 300,
        image: "../images/1/echeveria0.jpg"
    },
    {
        name: "Эхеверия",
        price: 350,
        image: "../images/1/echeveria1.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "../images/1/echeveria2.jpg"
    },
    {
        name: "Эхеверия",
        price: 450,
        image: "../images/1/echeveria3.jpg"
    },
    {
        name: "Эхеверия",
        price: 300,
        image: "../images/1/echeveria4.jpg"
    },
    {
        name: "Эхеверия",
        price: 350,
        image: "../images/1/echeveria5.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "../images/1/echeveria6.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "../images/1/echeveria7.jpg"
    },
]

let arrHavortia = [
    {
        name: "Хавортия",
        price: 300,
        image: "../images/1/hav0.jpg"
    },
    {
        name: "Хавортия",
        price: 350,
        image: "../images/1/hav1.jpg"
    },
    {
        name: "Хавортия",
        price: 399,
        image: "../images/1/hav2.jpg"
    },
    {
        name: "Хавортия",
        price: 450,
        image: "../images/1/hav3.jpg"
    },
]


let arrSedum = [
    {
        name: "Седум",
        price: 300,
        image: "../images/1/sedum0.jpg"
    },
    {
        name: "Седум",
        price: 350,
        image: "../images/1/sedum1.jpg"
    },
    {
        name: "Седум",
        price: 399,
        image: "../images/1/sedum2.jpg"
    },
    {
        name: "Седум",
        price: 450,
        image: "../images/1/sedum3.jpg"
    },
    {
        name: "Седум",
        price: 450,
        image: "../images/1/sedum4.jpg"
    },
]

let arrCactus = [
    {
        name: "Кактус",
        price: 300,
        image: "../images/1/cactus0.jpg"
    },
    {
        name: "Кактус",
        price: 350,
        image: "../images/1/cactus1.jpg"
    },

    {
        name: "Кактус",
        price: 399,
        image: "../images/1/cactus2.jpg"
    },
    {
        name: "Кактус",
        price: 450,
        image: "../images/1/cactus3.jpg"
    },
]

let arrComposition = [
    {
        name: "Композиция",
        price: 300,
        image: "../images/1/comp0.jpg"
    },
    {
        name: "Флорариум",
        price: 350,
        image: "../images/1/comp1.jpg"

    },
    {
        name: "Композиция",
        price: 399,
        image: "../images/1/comp2.jpg"

    },
    {
        name: "Флорариум",
        price: 450,
        image: "../images/1/comp3.jpg"

    },
    {
        name: "Флорариум",
        price: 300,
        image: "../images/1/comp4.jpg"

    },
    {
        name: "Композиция",
        price: 350,
        image: "../images/1/comp5.jpg"

    },
    {
        name: "Флорариум",
        price: 399,
        image: "../images/1/comp6.jpg"

    },
    {
        name: "Композиция",
        price: 450,
        image: "../images/1/comp7.jpg"

    },
    {
        name: "Флорариум",
        price: 450,
        image: "../images/1/comp8.jpg"

    },
    {
        name: "Флорариум",
        price: 450,
        image: "../images/1/comp9.jpg"

    },
    {
        name: "Флорариум",
        price: 450,
        image: "../images/1/comp10.jpg"

    }
]

let i = 1;

for (let obj of arrHavortia) {
    let havortia = document.getElementsByClassName("havortia");
    let newCard = document.createElement("div");
    newCard.classList.add("card_item");
    let innerImg = document.createElement("div");
    innerImg.classList.add("inner_img");
    let imgCard = document.createElement("img");
    imgCard.classList.add("img_item");
    imgCard.src = obj.image;
    // pic = "" + i + ".jpg";
    // imgCard.src = pic;
    let h2Card = document.createElement("h2");
    h2Card.classList.add("h2_card");
    h2Card.innerHTML = obj.name;
    let pCard = document.createElement("p");
    pCard.classList.add("p_card");
    pCard.innerHTML = "Цена: " + obj.price  + " руб.";
    
    let innerInputs = document.createElement("div");
    innerInputs.classList.add("inner_inputs");
    
    let btnQuantity = document.createElement("input")
    btnQuantity.classList.add("btn_quantity");
    btnQuantity.setAttribute("value", 1);

    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("id", `btnMinus${i}`);
    
    if (btnQuantity.value!=null) {
        btnMinus.onclick = function () {
        btnQuantity.value = Math.max(0, btnQuantity.value - 1);
        };
    };
    btnMinus.classList.add("btn_minus");
    btnMinus.setAttribute("type", "button");
    btnMinus.setAttribute("value", "-");

    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("id", `btnPlus${i}`);
    
    if (btnQuantity.value!=null) {
        btnPlus.onclick = function () {
        btnQuantity.value = Number(btnQuantity.value) + 1;
        };
    };
    btnPlus.classList.add("btn_plus");
    btnPlus.setAttribute("type", "button");
    btnPlus.setAttribute("value", "+");
    let btnBuy = document.createElement("input")
    btnBuy.classList.add("btn_buy");
    btnBuy.setAttribute("type", "button");
    btnBuy.setAttribute("value", "Купить");



    innerImg.appendChild(imgCard);
    newCard.appendChild(innerImg);
    newCard.appendChild(h2Card);
    newCard.appendChild(pCard);

    innerInputs.appendChild(btnMinus);
    innerInputs.appendChild(btnQuantity);
    innerInputs.appendChild(btnPlus);
    innerInputs.appendChild(btnBuy);
    newCard.appendChild(innerInputs);

    havortia[0].appendChild(newCard);
    i++;
};




for (let obj of arrEcheveria) {
    let echeveria = document.getElementsByClassName("echeveria");
    let newCard = document.createElement("div");
    newCard.classList.add("card_item");
    let innerImg = document.createElement("div");
    innerImg.classList.add("inner_img");
    let imgCard = document.createElement("img");
    imgCard.classList.add("img_item");
    imgCard.src = obj.image;
    // pic = "" + i + ".jpg";
    // imgCard.src = pic;
    let h2Card = document.createElement("h2");
    h2Card.classList.add("h2_card");
    h2Card.innerHTML = obj.name;
    let pCard = document.createElement("p");
    pCard.classList.add("p_card");
    pCard.innerHTML = "Цена: " + obj.price  + " руб.";

    let innerInputs = document.createElement("div");
    innerInputs.classList.add("inner_inputs");
    let btnQuantity = document.createElement("input")
    btnQuantity.classList.add("btn_quantity");
    btnQuantity.setAttribute("value", 1);
    
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("id", `btnMinus${i}`);
    
    if (btnQuantity.value!=null) {
        btnMinus.onclick = function () {
        btnQuantity.value = Math.max(0, btnQuantity.value - 1);
        };
    };
    btnMinus.classList.add("btn_minus");
    btnMinus.setAttribute("type", "button");
    btnMinus.setAttribute("value", "-");
    
    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("id", `btnPlus${i}`);
    
    if (btnQuantity.value!=null) {
        btnPlus.onclick = function () {
        btnQuantity.value = Number(btnQuantity.value) + 1;
        };
    };
    btnPlus.classList.add("btn_plus");
    btnPlus.setAttribute("type", "button");
    btnPlus.setAttribute("value", "+");
    let btnBuy = document.createElement("input")
    btnBuy.classList.add("btn_buy");
    btnBuy.setAttribute("type", "button");
    btnBuy.setAttribute("value", "Купить");

    innerImg.appendChild(imgCard);
    newCard.appendChild(innerImg);
    newCard.appendChild(h2Card);
    newCard.appendChild(pCard);

    innerInputs.appendChild(btnMinus);
    innerInputs.appendChild(btnQuantity);
    innerInputs.appendChild(btnPlus);
    innerInputs.appendChild(btnBuy);
    newCard.appendChild(innerInputs);

    echeveria[0].appendChild(newCard);
    i++;


}

for (let obj of arrSedum) {
    let sedum = document.getElementsByClassName("sedum");
    let newCard = document.createElement("div");
    newCard.classList.add("card_item");
    let innerImg = document.createElement("div");
    innerImg.classList.add("inner_img");
    let imgCard = document.createElement("img");
    imgCard.classList.add("img_item");
    imgCard.src = obj.image;
    // pic = "" + i + ".jpg";
    // imgCard.src = pic;
    let h2Card = document.createElement("h2");
    h2Card.classList.add("h2_card");
    h2Card.innerHTML = obj.name;
    let pCard = document.createElement("p");
    pCard.classList.add("p_card");
    pCard.innerHTML = "Цена: " + obj.price  + " руб.";

    let innerInputs = document.createElement("div");
    innerInputs.classList.add("inner_inputs");
    let btnQuantity = document.createElement("input")
    btnQuantity.classList.add("btn_quantity");
    btnQuantity.setAttribute("value", 1);
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("id", `btnMinus${i}`);
    
    if (btnQuantity.value!=null) {
        btnMinus.onclick = function () {
        btnQuantity.value = Math.max(0, btnQuantity.value - 1);
        };
    };
    btnMinus.classList.add("btn_minus");
    btnMinus.setAttribute("type", "button");
    btnMinus.setAttribute("value", "-");
    
    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("id", `btnPlus${i}`);
    
    if (btnQuantity.value!=null) {
        btnPlus.onclick = function () {
        btnQuantity.value = Number(btnQuantity.value) + 1;
        };
    };
    btnPlus.classList.add("btn_plus");
    btnPlus.setAttribute("type", "button");
    btnPlus.setAttribute("value", "+");
    let btnBuy = document.createElement("input")
    btnBuy.classList.add("btn_buy");
    btnBuy.setAttribute("type", "button");
    btnBuy.setAttribute("value", "Купить");

    innerImg.appendChild(imgCard);
    newCard.appendChild(innerImg);
    newCard.appendChild(h2Card);
    newCard.appendChild(pCard);

    innerInputs.appendChild(btnMinus);
    innerInputs.appendChild(btnQuantity);
    innerInputs.appendChild(btnPlus);
    innerInputs.appendChild(btnBuy);
    newCard.appendChild(innerInputs);

    sedum[0].appendChild(newCard);
    i++;
}

for (let obj of arrCactus) {
    let k=0;
    let cactus = document.getElementsByClassName("cactus");
    let newCard = document.createElement("div");
    newCard.classList.add("card_item");
    let innerImg = document.createElement("div");
    innerImg.classList.add("inner_img");
    let imgCard = document.createElement("img");
    imgCard.classList.add("img_item");
    imgCard.src = obj.image;


    let h2Card = document.createElement("h2");
    h2Card.classList.add("h2_card");
    h2Card.innerHTML = obj.name;
    let pCard = document.createElement("p");
    pCard.classList.add("p_card");
    pCard.innerHTML = "Цена: " + obj.price  + " руб.";

    let innerInputs = document.createElement("div");
    innerInputs.classList.add("inner_inputs");
    let btnQuantity = document.createElement("input")
    btnQuantity.classList.add("btn_quantity");
    btnQuantity.setAttribute("value", 1);
    
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("id", `btnMinus${i}`);
    
    if (btnQuantity.value!=null) {
        btnMinus.onclick = function () {
        btnQuantity.value = Math.max(0, btnQuantity.value - 1);
        };
    };
    btnMinus.classList.add("btn_minus");
    btnMinus.setAttribute("type", "button");
    btnMinus.setAttribute("value", "-");
    
    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("id", `btnPlus${i}`);
    
    if (btnQuantity.value!=null) {
        btnPlus.onclick = function () {
        btnQuantity.value = Number(btnQuantity.value) + 1;
        };
    };
    btnPlus.classList.add("btn_plus");
    btnPlus.setAttribute("type", "button");
    btnPlus.setAttribute("value", "+");
    let btnBuy = document.createElement("input")
    btnBuy.classList.add("btn_buy");
    btnBuy.setAttribute("type", "button");
    btnBuy.setAttribute("value", "Купить");

    innerImg.appendChild(imgCard);
    newCard.appendChild(innerImg);
    newCard.appendChild(h2Card);
    newCard.appendChild(pCard);

    innerInputs.appendChild(btnMinus);
    innerInputs.appendChild(btnQuantity);
    innerInputs.appendChild(btnPlus);
    innerInputs.appendChild(btnBuy);
    newCard.appendChild(innerInputs);

    cactus[0].appendChild(newCard);
    i++;
}

for (let obj of arrComposition) {
    let composition = document.getElementsByClassName("composition");
    let newCard = document.createElement("div");
    newCard.classList.add("card_item");
    let innerImg = document.createElement("div");
    innerImg.classList.add("inner_img");
    let imgCard = document.createElement("img");
    imgCard.classList.add("img_item");
    imgCard.src = obj.image;
    // pic = "" + i + ".jpg";
    // imgCard.src = pic;
    let h2Card = document.createElement("h2");
    h2Card.classList.add("h2_card");
    h2Card.innerHTML = obj.name;
    let pCard = document.createElement("p");
    pCard.classList.add("p_card");
    pCard.innerHTML = "Цена: " + obj.price  + " руб.";

    let innerInputs = document.createElement("div");
    innerInputs.classList.add("inner_inputs");
    let btnQuantity = document.createElement("input")
    btnQuantity.classList.add("btn_quantity");
    btnQuantity.setAttribute("value", 1);
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("id", `btnMinus${i}`);
    
    if (btnQuantity.value!=null) {
        btnMinus.onclick = function () {
        btnQuantity.value = Math.max(0, btnQuantity.value - 1);
        };
    };
    btnMinus.classList.add("btn_minus");
    btnMinus.setAttribute("type", "button");
    btnMinus.setAttribute("value", "-");

    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("id", `btnPlus${i}`);
    
    if (btnQuantity.value!=null) {
        btnPlus.onclick = function () {
        btnQuantity.value = Number(btnQuantity.value) + 1;
        };
    };
    btnPlus.classList.add("btn_plus");
    btnPlus.setAttribute("type", "button");
    btnPlus.setAttribute("value", "+");
    let btnBuy = document.createElement("input")
    btnBuy.classList.add("btn_buy");
    btnBuy.setAttribute("type", "button");
    btnBuy.setAttribute("value", "Купить");

    innerImg.appendChild(imgCard);
    newCard.appendChild(innerImg);
    newCard.appendChild(h2Card);
    newCard.appendChild(pCard);

    innerInputs.appendChild(btnMinus);
    innerInputs.appendChild(btnQuantity);
    innerInputs.appendChild(btnPlus);
    innerInputs.appendChild(btnBuy);
    newCard.appendChild(innerInputs);

    composition[0].appendChild(newCard);
    i++;


};



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


// ФУНКЦИЯ ФИКСИРОВАННОГО HEADER ПРИ СКРОЛЛЕ С НУЖНОГО МЕСТА САЙТА (В Д.С. С 1/7 СЕКЦИИ КАТАЛОГ ):

document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.querySelector(".catalog");
    const header = document.querySelector(".header");

    const scrollItem = document.querySelector(".scroll_item");

    // const scrollAnimation = () => {
    //     let windowCenter = (window.innerHeight / 2) + window.scrollY;
    //     scrollItem.forEach(el => {

    //         let scrollOffset = el.offsetTop + el.offsetHeight;
    //         if (windowCenter >= scrollOffset) {
    //             el.classlist.add("animation-class");
    //         } else {
    //             el.classlist.remove("animation-class");
    //         };
    //     });
    // };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let catalogCenter = catalog.offsetHeight / 9;

        // (scrollTop >= catalogCenter) ? header.classList.add("fixed") : header.classList.remove("fixed");
        if (scrollTop >= catalogCenter) {
            header.classList.add("fixed");
            header.style.zIndex = "1";
            catalog.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove("fixed");
            catalog.style.marginTop = `0px`;
            header.style.zIndex = "0";
        } 
    };
    
    headerFixed();
    // scrollAnimation();
    
    window.addEventListener("scroll", () => {
        headerFixed();
        // scrollAnimation();
    });
});


// cardNew.onclick = function(){
//     let modal = document.getElementById("modal");
//     modal.style.opacity = 1;
//     modal.style.visibility = "visible";
//     modal.style.transform = "scale(1)";
//     let pic = document.getElementById("pic");
//     let head = document.getElementById("head");
//     let desc = document.getElementById("desc");

//     pic.setAttribute("src", `../images/picture2504/pic${i}.jpg`);
//     head.innerHTML = data[i].name;
//     desc.innerHTML = data[i].desc;

// }

// let close = document.getElementById("close");
// close.onclick = function() {
//     modal.style.opacity = 0;
//     modal.style.visibility = "hidden";
//     modal.style.transform = "scale(0)";
// }

//Intersection Observer API
// Как работает Intersectionobserver?
// Intersection Observer работает через колбэк. При создании нужно описать за какими элементами мы хотим следить и пересечение с каким контейнером отслеживать. В дальнейшем колбэк будет вызываться каждый раз, когда происходит пересечение наблюдаемой области и какого-либо элемента из отслеживаемых

// настройки:
let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.5
}

// функция обратного вызова:
let callback = function(entries, observer) {
    entries.forEach(entry => {
        // если элемент является наблюдателем
        if (entry.isIntersecting) {
            console.log("find", entry);
            // добавляем класс к нему
            entry.target.classList.add("active");
        }
    });
}

// наблюдатель:
let observer = new IntersectionObserver(callback, options);

// определяем элементы, за которыми наблюдаем:
let targets = document.querySelectorAll(".anim_right-h2")
targets.forEach(target => {
    observer.observe(target);
});

// функция обратного вызова:
let callback2 = function(entries, observer) {
    entries.forEach(entry => {
        // если элемент является наблюдателем
        if (entry.isIntersecting) {
            console.log("find", entry);
            // добавляем класс к нему
            entry.target2.classList.add("active");
        }
    });
}

// наблюдатель:
let observer2 = new IntersectionObserver(callback, options);

// определяем элементы, за которыми наблюдаем:
let targets2 = document.querySelectorAll(".card_item")
targets2.forEach(target2 => {
    observer2.observe(target2);
});