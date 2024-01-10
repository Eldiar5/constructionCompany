const years = [
    {
        title: "26",
        subTitle: "ЛЕТ",
        text: "на рынке"
    },
    {
        title: "26",
        subTitle: "ЛЕТ",
        text: "на рынке"
    },
    {
        title: "26",
        subTitle: "ЛЕТ",
        text: "на рынке"
    },
    {
        title: "26",
        subTitle: "ЛЕТ",
        text: "на рынке"
    }
];

const headerContent = document.querySelector(".hero__wrapper");

years.map(item => {
    headerContent.innerHTML += `
        <div class="hero__item">
            <div class="hero__title">${item.title}</div>
            <div class="hero__subtitle">${item.subTitle}</div>
            <div class="hero__text">${item.text}</div>
        </div>
    `
});

// --------------------------------------------------------------------

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

// ---------------------------------------------------------------------

const arena = [
    {
        title: "Газпром Арена",
        imgUrl: "./img/arena/img.png",
        line: "",
        description: " Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву. "
    },
    {
        title: "Газпром Арена",
        imgUrl: "./img/arena/img.png",
        line: "",
        description: " Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву. "
    },
    {
        title: "Газпром Арена",
        imgUrl: "./img/arena/img.png",
        line: "",
        description: " Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву. "
    }
];

const arenaContent = document.querySelector(".arena__content");

arena.map(item => {
    arenaContent.innerHTML += `
    <div class="arena__item">
        <img src="${item.imgUrl}" alt="img" class="arena__img">
        <div class="arena__line"></div>
        <h3 class="arena__item_title">${item.title}</h3>
        <p class="arena__item_description">
        ${item.description}
        </p>
    </div>
    `
});

// -------------------------------------------------------------------

const services = [
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ"
    },
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО ЧАСТНЫХ ДОМОВ"
    },
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО ТОРГОВЫХ ТОЧЕК"
    },
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО СТАДИОНОВ"
    },
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО ГАЗАПРОВОДОВ"
    },
    {
        imgUrl: "./img/services/icon.svg",
        title: "СТРОИТЕЛЬСТВО МОСТОВ"
    }
];

const servicesContent = document.querySelector(".services__content")

services.map(item => {
    servicesContent.innerHTML += `
        <div class="services__item">
            <div class="services__wrapper">
                <img src="${item.imgUrl}" alt="img" class="services__icon">
                <h4 class="services__desc">
                    ${item.title}
                </h4>
            </div>
        </div>
    `
});

// -------------------------------------------------------------------

const partfolio = [
    {
        imgUrl: "./img/partfolio/img.png",
    },
    {
        imgUrl: "./img/partfolio/img.png",
    },
    {
        imgUrl: "./img/partfolio/img.png",
    },
    {
        imgUrl: "./img/partfolio/img.png",
    },
    {
        imgUrl: "./img/partfolio/img.png",
    },
    {
        imgUrl: "./img/partfolio/img.png",
    },
];

const partfolioContent = document.querySelector(".partfolio__content")


partfolio.map(item => {
    partfolioContent.innerHTML += `
    <img src="${item.imgUrl}" alt="img" class="partfolio__img">
    `
});

// -------------------------------------------------------------------

// let questionsDropdown = document.querySelector(".questions__dropdown")
// let qestionsMenu = document.querySelector(".questions__menu")
// let qestionsArrow = document.querySelector(".questions__arrow")

// questionsDropdown.addEventListener("click", () => {
//     qestionsMenu.classList.toggle("active");
//     qestionsArrow.classList.toggle("active");
// });

// const questions = [
//     {
//         title: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
//         text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremIpsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В товремя некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
//     },
//     {
//         title: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
//         text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremIpsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В товремя некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
//     },
//     {
//         title: "РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?",
//         text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremIpsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В товремя некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
//     }
// ];

// const questionsContent = document.querySelector(".questions__content");

// questions.map(item => {
//     questionsContent.innerHTML += `
//     <div class="questions__dropdown">
//         <p class="questions__text">${item.title}</p>
//         <span class="questions__arrow arrow"></span>
//         <div class="questions__menu">
//             <p class="sub-text">
//             ${item.text}
//             </p>
//         </div>
//     </div>
//     `
// });

let intervalId;

document.querySelectorAll(".questions__text").forEach(e => {
    e.addEventListener("click", e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll(".questions__menu").forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
                e.classList.remove("active")
                e.classList.remove("open")
                document.querySelector(`[data-target=${menu}]`).classList.add("active");
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add("open")
                },0);
            } if (!document.querySelector(`[data-arrow=${menu}]`).classList.contains("open")) {
                e.classList.remove("active")
                e.classList.remove("open")
                document.querySelector(`[data-arrow=${menu}]`).classList.add("active");
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-arrow=${menu}]`).classList.add("open")
                },0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains("open")) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove("active");
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove("open")
                },0);
            } if (document.querySelector(`[data-arrow=${menu}]`).classList.contains("open")) {
                clearTimeout(intervalId);
                document.querySelector(`[data-arrow=${menu}]`).classList.remove("active");
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-arrow=${menu}]`).classList.remove("open")
                },0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove("active");
                    document.querySelector(`[data-target=${menu}]`).classList.remove("open");
                    document.querySelector(`[data-arrow=${menu}]`).classList.remove("active");
                    document.querySelector(`[data-arrow=${menu}]`).classList.remove("open");
                }
            }
        });
    });
});

// -------------------------------------------------------------------

const reviews = [
    {
        imgUrl: "./img/reviews/img.svg",
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
        subText: " Иванов Иван,",
        subSubText: " ООО “Газпром-Арена”"
    },
    {
        imgUrl: "./img/reviews/img.svg",
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
        subText: " Иванов Иван,",
        subSubText: " ООО “Газпром-Арена”"
    },
    {
        imgUrl: "./img/reviews/img.svg",
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
        subText: " Иванов Иван,",
        subSubText: " ООО “Газпром-Арена”"
    },
];

const reviewsContent = document.querySelector(".reviews__content");

reviews.map(item => {
    reviewsContent.innerHTML += `
        <div class="reviews__item">
            <img src="${item.imgUrl}" alt="img" class="reviews__img">
            <div class="reviews__desc">
                ${item.text}
            </div>
        </div>

    `
});