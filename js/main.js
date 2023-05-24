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

let review = [
    {
        name: "Егор Селиванов",
        date: "05.05.2023г.",
        review: "Заказывал у этой компании флорариум ко дню рождения девушки. Она была в восторге, спасибо!",
        photo: "images/rewiew3.jpg"
    },
    {
        name: "Анна Быстрова",
        date: "10.03.2023г.",
        review: "Добрый день! Хочу выразить вам огромную благодарность за флорариум! Невероятно красиво и достойно смотрится! Благодарю за доставку в срок! Успехов вам и развития!",
        photo: "images/rewiew4.jpg"
    },
    {
        name: "Анастасия Петрова",
        date: "25.02.2023г.",
        review: "Хороший магазин, все очень понравилось, доставка быстрая. Флорариум живет у меня уже три месяца, все хорошо, спасибо за радость и красоту!",
        photo: "images/rewiew1.jpg"
    },
    {
        name: "Юлия Иванова",
        date: "15.02.2023г.",
        review: "Очень красивые флорариумы. Брала в подарок, сотрудники учли все мои пожелания, очень красиво! Спасибо!",
        photo: "images/rewiew2.jpg"
    },


];

let l = 0;
    for (let el of review) {
        let imgInner = document.getElementsByClassName("review_img-inner");
        let revImg = document.createElement("img");
        revImg.src = el.photo;
        imgInner[l].appendChild(revImg);

        let h3 = document.getElementsByClassName("review_h3");
        h3[l].innerHTML = el.name;
        let p = document.getElementsByClassName("review_p-date");
        p[l].innerHTML = el.date;
        let p2 = document.getElementsByClassName("review_p-review");
        p2[l].innerHTML = el.review;
        l++;
    };

let arrEcheveria = [
    {
        name: "Эхеверия",
        price: 499,
        image: "images/1/echeveria0.jpg"
    },
    {
        name: "Эхеверия",
        price: 449,
        image: "images/1/echeveria1.jpg"
    },
    {
        name: "Эхеверия",
        price: 590,
        image: "images/1/echeveria2.jpg"
    },
    {
        name: "Эхеверия",
        price: 449,
        image: "images/1/echeveria3.jpg"
    },
    {
        name: "Эхеверия",
        price: 590,
        image: "images/1/echeveria4.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "images/1/echeveria5.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "images/1/echeveria6.jpg"
    },
    {
        name: "Эхеверия",
        price: 399,
        image: "images/1/echeveria7.jpg"
    },
]

let arrHavortia = [
    {
        name: "Хавортия",
        price: 499,
        image: "images/1/hav0.jpg"
    },
    {
        name: "Хавортия",
        price: 399,
        image: "images/1/hav1.jpg"
    },
    {
        name: "Хавортия",
        price: 399,
        image: "images/1/hav2.jpg"
    },
    {
        name: "Хавортия",
        price: 499,
        image: "images/1/hav3.jpg"
    },
]


let arrSedum = [
    {
        name: "Седум",
        price: 799,
        image: "images/1/sedum0.jpg"
    },
    {
        name: "Седум",
        price: 399,
        image: "images/1/sedum1.jpg"
    },
    {
        name: "Седум",
        price: 449,
        image: "images/1/sedum2.jpg"
    },
    {
        name: "Седум",
        price: 499,
        image: "images/1/sedum3.jpg"
    },
    {
        name: "Седум",
        price: 499,
        image: "images/1/sedum4.jpg"
    },
]

let arrCactus = [
    {
        name: "Кактус",
        price: 399,
        image: "images/1/cactus3.jpg"
    },
    {
        name: "Кактус",
        price: 349,
        image: "images/1/cactus1.jpg"
    },

    {
        name: "Кактус",
        price: 399,
        image: "images/1/cactus2.jpg"
    },
    {
        name: "Кактус",
        price: 349,
        image: "images/1/cactus0.jpg"
    },
]

let arrComposition = [
    {
        name: "Композиция",
        price: 990,
        image: "images/1/comp0.jpg"
    },
    {
        name: "Флорариум",
        price: 1390,
        image: "images/1/comp1.jpg"

    },
    {
        name: "Композиция",
        price: 1190,
        image: "images/1/comp2.jpg"

    },
    {
        name: "Флорариум",
        price: 990,
        image: "images/1/comp3.jpg"

    },
    {
        name: "Флорариум",
        price: 1390,
        image: "images/1/comp4.jpg"

    },
    {
        name: "Композиция",
        price: 1490,
        image: "images/1/comp5.jpg"

    },
    {
        name: "Флорариум",
        price: 1790,
        image: "images/1/comp6.jpg"

    },
    {
        name: "Композиция",
        price: 1390,
        image: "images/1/comp7.jpg"

    },
    {
        name: "Флорариум",
        price: 1990,
        image: "images/1/comp8.jpg"

    },
    {
        name: "Флорариум",
        price: 1790,
        image: "images/1/comp9.jpg"

    },
    {
        name: "Флорариум",
        price: 1790,
        image: "images/1/comp10.jpg"

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

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let catalogCenter = catalog.offsetHeight / 9;

        // (scrollTop >= catalogCenter) ? header.classList.add("fixed") : header.classList.remove("fixed");
        if (scrollTop >= catalogCenter) {
            header.classList.add("fixed");
            header.style.zIndex = "5";
            catalog.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove("fixed");
            catalog.style.marginTop = `0px`;
            header.style.zIndex = "5";
        } 
    };
    
    headerFixed();
    // scrollAnimation();
    
    window.addEventListener("scroll", () => {
        headerFixed();
        // scrollAnimation();
    });
});



// let menuBurger = document.getElementById("menu_burger");
// menuBurger.onclick = function() {
//     let menu = document.getElementById("menu");
//     menu.style.opacity = 1;
//     menu.style.visibility = "visible";
//     menu.style.transform = "scale(1)";
//     menu.style.zIndex = "5";
//     };

// let closed = document.getElementById("close");

// closed.onclick = function() {
// let menu = document.getElementById("menu");

//         menu.style.opacity = 0;
//         menu.style.visibility = "hidden";
//         menu.style.transform = "scale(0)";
//         menu.style.zIndex = "-20";

// };





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
let targetsImg = document.querySelectorAll(".animate_img")
targets.forEach(target => {
    observer.observe(target);
});
targetsImg.forEach(target => {
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
            entry.targetsImg.classList.add("active");
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


