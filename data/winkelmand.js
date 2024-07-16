export let winkelmand = [];

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