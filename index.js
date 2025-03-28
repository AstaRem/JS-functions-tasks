
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
    if (temperature > 20 && !rain) {
        advice = `Puikus oras pasivaikščiojimui!`
    } else if (rain || windSpeed > 30) {
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

    while (haveFuel > minFuel) {
        haveFuel -= fuelUsed;
        totalKm += kmPerHour;
        hour++;
        if (haveFuel > minFuel) {
            result = `Po ${hour} valandos nuvaziavo ${totalKm}km, liko ${haveFuel.toFixed(1)} l kuro`;
            console.log(result);
        } else if (haveFuel <= minFuel) {
            result = `Po ${hour} valandos nuvaziavo ${totalKm}km, liko tik ${haveFuel.toFixed(1)} l kuro, todel kelione baigta!`;
            console.log(result);
        }
    }
}

distAndFuel(50, 0.07, 90, 7);
console.log(`------`)
distAndFuel(60, 0.1, 70, 10);


//4. 
// Masyvai ir atsitiktinumas: Sukurk masyvą su 5 istoriniais ginklais (pvz., „kardas“, „kalavijas“ ir t.t.). 
// Parašyk funkciją, kuri atsitiktinai parenka vieną ginklą (naudodamas Math.random()) 
// ir išveda pranešimą, pvz., „Tau paskirtas [ginklas] kovai!“

console.log('-- task 4  ---');

// man nepatinka ginklu tema, tai naudoju kepures :-)
const headgear = ['Kepure', 'Skrybele', 'Berete', 'Skarele', 'Balaclava', 'Salmas', 'Jureivio kepure', 'Kepure su snapeliu', 'Ziemine kepure']

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let chooseHat = (arr) => {
    let randIndex = getRandomInt(arr.length);
    return `
    Galvos apdangalas siandienai: ${arr[randIndex]}.
    `
}

console.log(chooseHat(headgear));

//5.
// Objektai ir metodai: Sukurk objektą, aprašantį piratą (vardas, laivas, lobio kiekis aukso monetomis). 
// Pridėk metodą raid, kuris padidina lobio kiekį atsitiktiniu skaičiumi (pvz., nuo 10 iki 50 monetų) 
// ir grąžina pranešimą, pvz., „[Vardas] apiplėšė ir gavo [kiekis] monetų!“


console.log('-- task 5  ---');

function randomNum(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


const pirate = {
    name: 'Henry Every',
    ship: 'Fancy',
    treasure: 1000,
    raid() {
        return this.treasure += randomNum(10, 50);
    },
    looseAll() {
        return this.treasure = 0;
    }
}


let raidOutcome = (qty) => {
    // let results = [];
    for (let i = 1; i < qty; i++) {
        let result = `Aukso monetu kiekis po ${i} apiplesimo: ${pirate.raid()}`
        console.log(result);
        // results.push(result); can use later, if needed
    }
    // return results;  can use later, if needed
}

console.log(`Piratas ${pirate.name}, su savo igula plaukiojo laivu ${pirate.ship} Indijos vandenyne 
        ir apiplesinejo prekybos laivus. Pradzioje lobio kiekis aukso monetomis: ${pirate.treasure} `)

raidOutcome(10);

console.log(`Tada atsirado kitas piratas, kurio vardo neminesime, kuris apiplese ${pirate.name}! 
    ${pirate.name} lobis liko: ${pirate.looseAll()}. `)

console.log(`Bet ${pirate.name} nenuleido ranku, pagrobe kita laiva, ir toliau tese plesikavimus:`)
raidOutcome(5);


// 6.
// Funkcijos: Parašyk funkciją, kuri priima slaptažodį (string) 
// ir grąžina objektą su: ilgis (length), ar yra skaičių (true/false), ar yra didžiųjų raidžių (true/false) 
// ir stiprumo įvertinimą („Silpnas“, „Vidutinis“, „Stiprus“ pagal kriterijus: ilgis > 8, skaičiai, didžiosios raidės). 
// console.log(checkPassword("abc")); 
// Išvestis: { length: 3, hasNumbers: false, hasUppercase: false, strength: "Silpnas" } 
// console.log(checkPassword("Pass123")); 
// Išvestis: { length: 7, hasNumbers: true, hasUppercase: true, strength: "Vidutinis" } 
// console.log(checkPassword("SuperSecure123")); 
// Išvestis: { length: 14, hasNumbers: true, hasUppercase: true, strength: "Stiprus" }

//Dar pridedu viena salyga, kad tuti tureti ir mazasias raides

console.log('-- task 6  ---');

function checkPassword(password) {
    let passwLength = password.length;
    let hasNumbers = /\d/.test(password);
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let strength;

    if (passwLength > 8 && hasNumbers && hasUppercase && hasLowercase) {
        strength = 'Stiprus';
        // console.log(strength);
    } else if (passwLength > 4 && passwLength < 8 && hasNumbers && hasUppercase && hasLowercase) {
        strength = 'Vidutinis';
        // console.log(strength);
    } else {
        strength = 'Silpnas';
        // console.log(strength);

    }

    return result = {
        length: passwLength,
        hasNumbers: hasNumbers,
        hasUppercase: hasUppercase,
        hasLowercase: hasLowercase,
        strength: strength
    }
}

console.log(checkPassword('123'));
console.log(checkPassword('123aaaaaaaaaaaaaaaaaaaaaaa'));
console.log(checkPassword('123BBBBBBaaaaaaaaaa'));
console.log(checkPassword('aaaaaaaaaaaaaaaaaaaa'));
console.log(checkPassword('aa12Paa'));



// 7.
// Aukštesnio lygio funkcijos: Sukurk funkciją, kuri priima masyvą su darbų objektais (kiekvienas turi task – darbo pavadinimą ir done – būseną kaip true/false) ir kitą funkciją, apibrėžiančią, kaip keisti būseną (pvz., pažymėti kaip atliktą). Grąžink naują masyvą su atnaujintais darbais. Duomenų pvz: const myTasks = [
//     { task: "Išplauti indus", done: false }, { task: "Pavalgyt", done: fslde }, ]; Išvestis: [{ task: "Išplauti indus", done: true }, { task: "Pavalgyt", done: true }]


console.log('-- task 7  ---');

const tasks = [
    { task: 'Isplauti indus', done: false },
    { task: 'Pavalgyti', done: false },
    { task: 'Sutvarkyti namus', done: false }
]
console.log(tasks)

const doTask = (arr) => {
    return arr.map((item) => {
        return { ...item, done: true }
    });
}
console.log('visos uzduotys atliktos, galim eiti zaisti:')
console.log(doTask(tasks));


// 8.
// Aukštesnio lygio funkcijos: Sukurk funkciją, kuri priima masyvą su maisto kalorijomis (skaičiais) ir kitą funkciją, apibrėžiančią, kaip keisti kalorijas (pvz., pridėti 10%). Grąžink naują masyvą su atnaujintomis kalorijomis. Duomenų pvz: const dailyFoods = [200, 150, 300]; Išvestis: [220, 165, 330]

console.log('-- task 8  ---');

const dailyFoods = [200, 150, 300];
const add10Percent = (cal) => {
    return Math.floor(cal * 1.10)
}

// console.log(add10Percent(500))

const increaseCal = (arr, action) => {
    return arr.map((item) => action(item));
}

console.log(increaseCal(dailyFoods, add10Percent));



// 8.
// Numatyti parametrai + Masyvų metodai (reduce): Parašyk funkciją, kuri priima masyvą su pirkinių kainomis ir nuolaidą (su numatyta reikšme 0%), o grąžina bendrą sumą po nuolaidos. Duomenų pvz: calculateTotal([10, 20, 30]) => Išvestis: "60.00 eurų"; calculateTotal([10, 20, 30], 20) => Išvestis: "48.00 eurų"

console.log('-- task 9  ---');

const prices = [10, 20, 30];
// const dis = 20/100;
// console.log(dis)

const calculateTotal = (arr, discount = 0) => {

    let afterDiscount;

    if (discount > 0) {
        afterDiscount = arr.map((price) => {
            newPrice = price - price * (discount / 100)
            return newPrice;
        });
    } else {
        afterDiscount = arr;
    }
    
    return afterDiscount;
}

console.log(calculateTotal(prices, 20));


//  10.
// Uždarymai (Closures) – moko funkcijų, kurios „prisimena“ ankstesnius duomenis.
// Užduotis: Sukurk funkciją, kuri priima pradinį treniruočių dienų masyvą (pvz., ["Pirmadienis"]) ir grąžina kitą funkciją. 
// Ta nauja funkcija leidžia pridėti vieną treniruočių dieną ir išveda visas esamas dienas kaip eilutę. 

// const myPlan = planWorkouts(["Antradienis"]); console.log(myPlan("Ketvirtadienis")); išvestis => Treniruotės: Antradienis, Ketvirtadienis 
// console.log(myPlan("Šeštadienis")); išvestis => Treniruotės: Antradienis, Ketvirtadienis, Šeštadienis

console.log('-- task 10 ---');

const initialDays = ['Pirmadienis'];

function workoutDays(arr){
    return function addDay(newDay){
        arr.push(newDay);
        return `Treniruociu dienos: ${arr.join(', ')}`
    }
}

let trainingPlan = workoutDays(initialDays);
console.log(trainingPlan('Antradienis'));
console.log(trainingPlan('Ketvirtadienis'));
console.log(trainingPlan('Penktadienis'));







