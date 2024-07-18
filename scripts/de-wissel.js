import {winkelmand, inWinkelwagen}  from '../data/winkelmand.js';
import {producten} from '../data/producten.js';
import {formateerMunt} from './nuttige-functies/geld.js';

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
                    ${formateerMunt(product.prijsCent)} €
                </div>

                <div class="product-aantal-container">
                    <select class="js-aantal-selector-${product.id}">
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

                <div class="aan-winkelmand-toegevoegd js-aan-winkelmand-toegevoegd-${product.id}">
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
Deel3 functions aanmaken
*/

function winkelmandAantalAanpassen(productId){
    let winkelmandAantal=0;

    winkelmand.forEach((productGekocht)=>{
        winkelmandAantal+=productGekocht.aantal;
    });

    document.querySelector('.js-kar-aantal').innerHTML=winkelmandAantal;

    let iconToegevoegd=document.querySelector(`.js-aan-winkelmand-toegevoegd-${productId}`);
    iconToegevoegd.classList.add('aan-winkelmand-toegevoed-zichtbaar');                     

    setTimeout(()=>{                                                                        
        iconToegevoegd.classList.remove('aan-winkelmand-toegevoed-zichtbaar')               
    },2000); 
}

document.querySelectorAll('.js-aan-winkelwagen-toevoegen-btn').forEach((knop)=>{
    knop.addEventListener('click', ()=>{
            let productId=knop.dataset.productId;

            inWinkelwagen(productId);

            winkelmandAantalAanpassen(productId);                                                                                        
    });
});

