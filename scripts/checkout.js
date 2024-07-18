import {winkelmand, verwijderVanWinkelmand}  from '../data/winkelmand.js';
import {producten} from '../data/producten.js';
import {formateerMunt} from './nuttige-functies/geld.js';

let winkelmandHTML= '';


winkelmand.forEach((product)=>{
    let productId=product.productId;
    let productGevonden;
    producten.forEach((product)=>{
        if (product.id===productId){      
            productGevonden=product;    //product gevonden           
        } 
    });

   //in productGevonden is de id product.id
   //console.log(productGevonden.id);
   //in winkelmand is de aantal product.aantal
   //console.log(product.aantal);

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
                    ${formateerMunt(productGevonden.prijsCent)} €
                </div>
                <div class="product-aantal">
                    <span>
                        Aantal: <span class="aantal-label">${product.aantal}</span>
                    </span>
                    <span class="wijzig-aantal-link link-primary">
                        Wijzigen
                    </span>
                    <span class="verwijder-aantal-link link-primary js-verwijder-aantal-link" data-product-id="${productGevonden.id}">
                        Verwijderen
                    </span>
                </div>
            </div>
            <div class="bezorg-opties">
                <div class="bezorg-opties-titel">
                    Kies een bezorgoptie:
                </div>
                <div class="bezorg-optie">
                    <input type="radio" checked class="bezorg-optie-input" name="bezorg-optie-${productGevonden.id}">
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
                    <input type="radio" class="bezorg-optie-input" name="bezorg-optie-${productGevonden.id}">
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
                    <input type="radio" class="bezorg-optie-input" name="bezorg-optie-${productGevonden.id}">
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

document.querySelectorAll('.js-verwijder-aantal-link').forEach((link)=>{
    link.addEventListener('click',()=>{
        let productId = link.dataset.productId;
        verwijderVanWinkelmand(productId)
        console.log(winkelmand);
    })
});