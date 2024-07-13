console.log('hallo vanuit de-wissel pagina');
// deel 1 Data bewaren
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
}
];

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

                <button class="aan-winkelwagen-toevoegen-btn">
                    In winkelwagen
                </button>
            </div>      
    `;
});

console.log(productenHTML);

document.querySelector('.js-producten-grid').innerHTML+=productenHTML;