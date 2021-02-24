const db = new GoogleSpreadsheetsDb(
    'AIzaSyBdjsu_0mERhpzaz79MxeFzhcyqsiniImc',
    '17wKXW0Mw3TpG-loJx6XifKAEw61am8fVqV8CiCInoj0'
);

var categories = [
    {
        ru: "Супы",
        en: "Soups"
    },
    {
        ru: "Холодные закуски",
        en: ""
    },
    {
        ru: "Салаты",
        en: ""
    },
    {
        ru: "Горячие закуски",
        en: ""
    },
    {
        ru: "Горячие блюда-Мясо",
        en: ""
    },
    {
        ru: "Горячие блюда-Птица",
        en: ""
    },
    {
        ru: "Горячие блюда-Рыба",
        en: ""
    },
    {
        ru: "Горячие блюда на углях",
        en: ""
    },
    {
        ru: "Гарниры и соусы",
        en: ""
    },
    {
        ru: "Десерты",
        en: ""
    },
    {
        ru: "Напитки от шефа",
        en: ""
    }
]


categories.forEach(category => {
    db.getAll(category.ru+'!A1:L100', (err, rows) => {     
        category.rows = rows;
        el = document.getElementById(category.ru);
        elHTML = "";
        category.rows.forEach(row => {
            
            if (!row.image) {
                
                row.image = "empty.png";
            }
        
            elHTML = elHTML + `
            <div class="swiper-slide">
                <img src="food/`+row.image +`" width="100%">
                <p class="dishTitle"><b>`+row.name_ru +` – `+ row.price + `р. </b></p>
                <p class="description">`+row.description_ru +`</p>
            </div>
            `;
            el.innerHTML = elHTML;
            
            if (category.rows.length == row.id) {
                runEE();
            };
            
        });
    })
    
});


function runEE() {
    i = 0;
    categories.forEach(category => {
        if (document.getElementById(category.ru).innerHTML.length > 50) {
            i = i + 1
        }
    });

    if (i == 11) {
        const swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                direction: 'horizontal',
                loop: false,
                effect: "coverflow",
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                    type: "fraction"
                },
                spaceBetween: 20,
                });
    }
    
}



     

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     console.log(anchor);

//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         console.log(e);
//         console.log(this);
        

//         // document.querySelector(this.getAttribute('href')).scrollIntoView({
//         //     behavior: 'smooth'
//         // });

//         var id = this.getAttribute('href');
//         console.log(id);

//         element = document.getElementById(id.substring(1));

//         console.log(element);

//         // element.scrollIntoView({
//         //     behavior: 'smooth'
//         // });

//         document.getElementById('body').scrollTop = "200";

//         document.getElementById('body').scrollIntoView({
//             behavior: 'smooth'
//         });

        
//     });
// });




    


