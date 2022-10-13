window.addEventListener('load', () => {
    const form = document.querySelector('.form');
    const newValue = document.querySelector('#newValue');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numberToBeConverted = Number(newValue.value);

        // for length
        let meter = numberToBeConverted * 3.280839895;
        let feet = numberToBeConverted/ 3.280839895;
        let meterOrMeters;
        let feetOrFoot;

        // for volume
        let liters = numberToBeConverted * 0.21996915;
        let gallon = numberToBeConverted/ 0.21996915;
        let literOrLiters;
        let gallonOrGallon;

        // for mass
        let kilo = numberToBeConverted * 2.20462262;
        let pound = numberToBeConverted / 2.20462262;
        let kiloOrKilos;
        let poundOrPounds;

        if (numberToBeConverted <= 1) {
            meterOrMeters = "Meter";
            feetOrFoot = "Feet";
            literOrLiters = "Litter";
            gallonOrGallon = "Gallon";
            kiloOrKilos = "Kilo";
            poundOrPounds = "Pound";
        } else {
            meterOrMeters = "Meters";
            feetOrFoot = "Foot";
            literOrLiters = "Litters";
            gallonOrGallon = "Gallons";
            kiloOrKilos = "Kilos";
            poundOrPounds = "Pounds";
        };


        if (meter <= 1) {
            feetFormat = "Feet";
        } else {
            feetFormat = "Foot";
        };

        if (feet <= 1) {
            meterFormat = "Meter";
        } else {
            meterFormat = "Meters";
        };

        const length = document.querySelector('.convertedValueLength');
        length.innerHTML = `${numberToBeConverted} ${meterOrMeters} = ${meter.toFixed(3)} ${feetFormat} 
        | ${numberToBeConverted} ${feetOrFoot} = ${feet.toFixed(3)} ${meterFormat}`;

        if (gallon <= 1) {
            literFormat = "Liter"
        } else {
            literFormat = "Liters"
        };

        if (liters <= 1) {
            gallonFormat = "Gallon";
        } else {
            gallonFormat = "Gallons";
        }

        const volume = document.querySelector(".convertedValueVolume")
        volume.innerHTML = `${numberToBeConverted} ${literOrLiters} = ${liters.toFixed(3)} ${gallonFormat} 
        | ${numberToBeConverted} ${gallonOrGallon} = ${gallon.toFixed(3)} ${literFormat}`;

        if (pound <= 1) {
            kiloFormat = "Kilo"
        } else {
            kiloFormat = "Kilos"
        };

        if (kilo <= 1) {
            poundFormat = "Pound";
        } else {
            poundFormat = "Pounds";
        }

        const mass = document.querySelector(".convertedValueMass")
        mass.innerHTML = `${numberToBeConverted} ${kiloOrKilos} = ${kilo.toFixed(3)} ${poundFormat} 
        | ${numberToBeConverted} ${poundOrPounds} = ${pound.toFixed(3)} ${kiloFormat}`;
    
    });
});