
// 1.
// Kintamieji ir šabloninės eilutės: Sukurk programą, kuri imituoja pirkinių 
// čekio  generavimą.  Priima  tris  kintamuosius:  prekės  pavadinimą  (pvz., 
// „Pienas“),  kiekį  (pvz.,  2)  ir  vieneto  kainą  (pvz.,  1.5).  Naudodamas 
// šablonines eilutes, išvesk čekį, pvz., „Prekė: Pienas, kiekis: 2 vnt., 
// vieneto kaina: 1.5 €, viso: 3 €“. Taip pat pridėk 21% PVM ir išvesk galutinę 
// sumą su mokesčiais.


console.log('-- task 1 ---')
const VAT = 0.21;

let generateReceipt = (item, qty, price) => {
    let priceWithoutVAT = qty * price
    let amountVAT = priceWithoutVAT * VAT
    let totalPrice = priceWithoutVAT + amountVAT
    return `
            Pirkinio kvitas:
            Preke: ${item}
            vieneto kaina: ${price} €
            kiekis: ${qty}
            pirkinio kaina be PVM: ${priceWithoutVAT} € 
            PVM ${VAT * 100}% - ${amountVAT} €
            Viso:${totalPrice} €
    `
}

console.log(generateReceipt('Pienas', 2, 3));
console.log(generateReceipt('Grindu plyteles(m2)', 10, 15));
console.log(generateReceipt('Obelis', 5, 20));

// 2.
// Sąlygos  ir  loginiai  operatoriai:  Parašyk  funkciją,  kuri  imituoja  orų 
// programėlės rekomendaciją. Ji priima tris parametrus: temperatūrą (pvz., 
// 15°C), ar lyja (true/false), ir vėjo greitį (pvz., 20 km/h). Funkcija grąžina 
// patarimą: 
// ✓ Jei temperatūra > 20°C ir nelyja – „Puikus oras pasivaikščiojimui!“ 
// ✓ Jei lyja arba vėjo greitis > 30 km/h – „Geriau likti namuose.“ 
// ✓ Kitais atvejais – „Apsirenk pagal orą ir viskas bus gerai!“ 

console.log('-- task 2 ---');

let weatherAdvice = (temperature, rain, windSpeed) => {
    let advice;
    if(temperature > 20 && !rain){
        advice = `Puikus oras pasivaikščiojimui!`
    } else if(rain || windSpeed > 30){
        advice = `Geriau likti namuose.`
    } else {
        advice = `Apsirenk pagal orą ir viskas bus gerai!`
    }

    return `
    Oro temperatura: ${temperature}°C , 
    ${rain ? 'lyja' : 'nelyja'}, 
    vejo greitis: ${windSpeed} km/h.
    Musu patarimas: ${advice}
    `;
}

console.log(weatherAdvice(25, false, 15));
console.log(weatherAdvice(10, true, 15));
console.log(weatherAdvice(10, false, 32));
console.log(weatherAdvice(15, false, 17));


// 3.
// Ciklai ir skaičiavimai: Sukurk programą, kuri imituoja automobilio kelionę 
// ir apskaičiuoja, kiek kilometrų jis nuvažiuos per tam tikrą laiką. Naudok 
// šiuos duomenis (duomenis galima keisti pagal pageidavimus): 
// • Pradinė kuro talpa (pvz., 50 litrų) įvedama kaip kintamasis. 
// • Mašina naudoja 7 litrus kuro 100 kilometrų  
// • Mašina važiuoja pastoviu 90 km/h greičiu. 
// • Naudodamas ciklą, apskaičiuok ir kiekvieną valandą išvesk: 
// ✓ Kiek kilometrų nuvažiuota iš viso. 
// ✓ Kiek kuro liko bake. 
// • Ciklas sustoja, kai kuro lieka mažiau nei 7 litrai (neužtenka kitam 100 
// km). 
 
// Pavyzdinis išvesties formatas: 
// Po 1 val.: nuvažiuota 90 km, liko 43.7 l kuro 
// Po 2 val.: nuvažiuota 180 km, liko 37.4 l kuro 
// ... 
// Po X val.: nuvažiuota Y km, liko Z l kuro – kelionė baigta! 
 

console.log('-- task 3 ---');


let distAndFuel = (fullTank, fuelConsumption, speed, minFuel) => {
    let haveFuel = fullTank;
    const kmPerHour = speed;
    let fuelUsed = kmPerHour * fuelConsumption;
    let totalKm = 0;
    let hour = 0;
    let result;

    console.log(`Automobilio bako dydis: ${fullTank} l, kuro sanaudos ${fuelConsumption},  vaziavimo greitis ${speed}, kai lieka minimalus kuro kiekis, kuris yra ${minFuel} l, toliau vaziuoti nebegalima. `)

    while (haveFuel > minFuel){
        haveFuel -= fuelUsed;
        totalKm += kmPerHour;
        hour++;
        if (haveFuel > minFuel){
            result = `Po ${hour} valandos nuvaziavo ${totalKm}km, liko ${haveFuel.toFixed(1)} l kuro`;
            console.log(result);
        }  else if(haveFuel <= minFuel) {
            result = `Po ${hour} valandos nuvaziavo ${totalKm}km, liko tik ${haveFuel.toFixed(1)} l kuro, todel kelione baigta!`;
            console.log(result);
        }
    }
}

distAndFuel(50, 0.07, 90, 7);
console.log(`------`)
distAndFuel(60, 0.1, 70, 10);








