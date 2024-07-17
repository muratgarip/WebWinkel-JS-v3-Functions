import {winkelmand}  from '../data/winkelmand.js';
import {producten} from '../data/producten.js';

let winkelmandHTML= '';

winkelmand.forEach((product)=>{
    let productId=product.productId;
    let productGevonden;
    producten.forEach((product)=>{
        if (product.id===productId){      
            productGevonden=product;    //product gevonden
        } 
    });

winkelmandHTML+=`   
    <div class="winkelwagen-product-container">
        <div class="lever-datum">
            Levering datum: Maandag 22 julie
        </div>
        <div class="winkelwagen-product-detail-grid">
            <img class="product-afbeelding" src="${productGevonden.afbeelding}">
            <div class="winkelwagen-product-detail">
                <div class="product-naam">
                    ${productGevonden.naam}
                </div>
                <div class="product-prijs">
                    ${productGevonden.prijsCent/100} €
                </div>
                <div class="product-aantal">
                    <span>
                        Aantal: <span class="aantal-label">${winkelmand.aantal}</span>
                    </span>
                    <span class="wijzig-aantal-link link-primary">
                        Wijzigen
                    </span>
                    <span class="verwijder-aantal-link link-primary">
                        Verwijderen
                    </span>
                </div>
            </div>
            <div class="bezorg-opties">
                <div class="bezorg-opties-titel">
                    Kies een bezorgoptie:
                </div>
                <div class="bezorg-optie">
                    <input type="radio" checked class="bezorg-optie-input" name="bezorg-optie-1">
                    <div>
                        <div class="bezorg-optie-datum">
                            Maandag 22 julie
                        </div>
                        <div class="bezorg-optie-prijs">
                            Gratis
                        </div>
                    </div>
                </div>
                <div class="bezorg-optie">
                    <input type="radio" class="bezorg-optie-input" name="bezorg-optie-1">
                    <div>
                        <div class="bezorg-optie-datum">
                            Woensdag 17 julie
                        </div>
                        <div class="bezorg-optie-prijs">
                            4,99 €
                        </div>
                    </div>
                </div>
                <div class="bezorg-optie">
                    <input type="radio" class="bezorg-optie-input" name="bezorg-optie-1">
                    <div>
                        <div class="bezorg-optie-datum">
                            Donderdag 11 julie
                        </div>
                        <div class="bezorg-optie-prijs">
                            9,99 €
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
});

document.querySelector('.js-bestelling-samenvatting').innerHTML = winkelmandHTML;

