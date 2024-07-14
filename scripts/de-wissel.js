
// deel 1 Data bewaren, data verhuist naar data/producten.js
/*
console.log('hallo vanuit de-wissel pagina');
let producten= [
{
    afbeelding: 'afbeeldingen/producten/basket-153310_1280.png',
    naam: 'High-performance basketbalschoenen, ontworpen met veerkrachtige zolen en stijlvolle patronen.',
    rating:{
        sterren:4.5,
        aantal:278
    },
    prijsCent: 16995,
},
{
    afbeelding: 'afbeeldingen/producten/tennis-7968714_1280.png',
    naam: 'Biedt optimale ondersteuning, demping en stabiliteit voor intensieve bewegingen op de baan.',
    rating:{
        sterren:3.0,
        aantal:568
    },
    prijsCent: 14595,
},
{
    afbeelding: 'afbeeldingen/producten/loop-157716_1280.png',
    naam: 'Loopschoenen. Hij heeft een lichtgewicht en ademend bovenwerk dat zorgt voor ventilatie en voorkomt oververhitting.',
    rating:{
        sterren:4.0,
        aantal:368
    },
    prijsCent: 12595,
},
{
    afbeelding: 'afbeeldingen/producten/vrijetijd-niki-8658546_1280.png',
    naam: 'Niki, mooie vrijtijds sportieve schoenen',
    rating:{
        sterren: 3.5,
        aantal:56
    },
    prijsCent:15395,
},
{
    afbeelding: 'afbeeldingen/producten/basket-153310_1280.png',
    naam: 'High-performance basketbalschoenen, ontworpen met veerkrachtige zolen en stijlvolle patronen.',
    rating:{
        sterren:4.5,
        aantal:278
    },
    prijsCent: 16995,
},
{
    afbeelding: 'afbeeldingen/producten/tennis-7968714_1280.png',
    naam: 'Biedt optimale ondersteuning, demping en stabiliteit voor intensieve bewegingen op de baan.',
    rating:{
        sterren:3.0,
        aantal:568
    },
    prijsCent: 14595,
},
{
    afbeelding: 'afbeeldingen/producten/loop-157716_1280.png',
    naam: 'Loopschoenen. Hij heeft een lichtgewicht en ademend bovenwerk dat zorgt voor ventilatie en voorkomt oververhitting.',
    rating:{
        sterren:4.0,
        aantal:368
    },
    prijsCent: 12595,
},
{
    afbeelding: 'afbeeldingen/producten/vrijetijd-niki-8658546_1280.png',
    naam: 'Niki, mooie vrijtijds sportieve schoenen',
    rating:{
        sterren: 3.5,
        aantal:56
    },
    prijsCent:15395,
}
];*/

// deel 2 HTML code genereren

let productenHTML='';

producten.forEach((product)=>{
    productenHTML+=`
            <div class="product-container">
                <div class="product-afbeelding-container">
                    <img class="product-afbeelding" src="${product.afbeelding}">
                </div>

                <div class="product-naam limiteer-text-op-2lijnen">
                   ${product.naam} 
                </div>

                <div class="product-rating-container">
                    <div>
                        <img class="product-rating-sterren" src="afbeeldingen/ratings/rating-${product.rating.sterren * 10}.png">
                    </div>
                    <div class="product-rating-aantal">
                        ${product.rating.aantal}
                    </div>
                </div>

                <div class="product-prijs">
                    ${(product.prijsCent / 100).toFixed(2)} €
                </div>

                <div class="product-aantal-container">
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-afstand-regelen"></div>

                <div class="aan-winkelmand-toegevoegd">
                    <img src="afbeeldingen/icons/checkmark.png" alt="">
                </div>
                <button class="aan-winkelwagen-toevoegen-btn js-aan-winkelwagen-toevoegen-btn"
                    data-product-id="${product.id}">
                    In winkelwagen
                </button>
            </div>      
    `;
});

document.querySelector('.js-producten-grid').innerHTML+=productenHTML;

/*
eventlistener toevoegen aan alle "In winkelwagen" knoppen
*/

document.querySelectorAll('.js-aan-winkelwagen-toevoegen-btn').forEach((knop)=>{
    knop.addEventListener('click', ()=>{
            let productId=knop.dataset.productId;

            let productGevonden; // productNaam === productGekocht

            winkelmand.forEach((productGekocht)=>{
                if (productId === productGekocht.productId){
                    productGevonden=productGekocht;
                }
            });
            /*Javascript instructie in een regel: 
            productGevonden = winkelmand.find((productGekocht) => productNaam === productGekocht.productNaam);*/

            if (productGevonden){
                productGevonden.aantal+=1;
            /*
            Objecten en referenties: In JavaScript worden objecten door referentie opgeslagen. 
            Wanneer je een object zoekt en toewijst aan een variabele (zoals productGevonden), 
            wijst die variabele naar dezelfde plek in het geheugen waar het object is opgeslagen.
            Directe wijziging: Wanneer je vervolgens een eigenschap van dat object wijzigt via de nieuwe variabele 
            (productGevonden.aantal), bewerk je het daadwerkelijke object in de winkelmand array omdat beide variabelen 
            (het element in de array en productGevonden) naar hetzelfde object in het geheugen verwijzen.
            */
            }else{
                winkelmand.push({
                    productId: productId,
                    aantal:1
                }); 
            }

            let winkelmandAantal=0;

            winkelmand.forEach((productGekocht)=>{
                winkelmandAantal+=productGekocht.aantal;
            })

            document.querySelector('.js-kar-aantal').innerHTML=winkelmandAantal;

            console.log(winkelmandAantal);
            console.log(winkelmand);
    });
});

