export let winkelmand = [
    {
        productId: 3,
        aantal: 3
    },
    {
        productId: 1,
        aantal: 3
    }
];

export function inWinkelwagen(productId){
    let productGevonden; // productNaam === productGekocht

    winkelmand.forEach((productGekocht)=>{
        if (productId === productGekocht.productId){
            productGevonden=productGekocht;
        }
    });

    let aantalSelector=document.querySelector(`.js-aantal-selector-${productId}`);
    let aantalGeselecteerd=Number(aantalSelector.value);                    
    if (productGevonden){
        productGevonden.aantal+=aantalGeselecteerd;                          
    }else{
        winkelmand.push({
            productId: productId,
            aantal:aantalGeselecteerd                                          
        }); 
    }
}

export function verwijderVanWinkelmand(productId){
//stap 1. Maak een nieuwe array aan.
  let nieuwWinkelmand=[];   
//stap 2. Loop deer de winkelmand producten.                    
  winkelmand.forEach((product)=>{ 
//stap 3. Kopieer alle producten van winkelmand naar het nieuwe array, behalve de productId die we willen verwijderen. 
// productId komt als een string, omdat deze van een dataset gehaald is. Ofwel gebruiken we != ofwel Number()                 
    if (product.productId !== Number(productId)){                                               
        nieuwWinkelmand.push(product); 
        console.log(productId, product.productId)         
    }
  });
//stap 4. Kopieer de nieuwe array naar de bestaande winkelmand. 
  winkelmand = nieuwWinkelmand;                   
}