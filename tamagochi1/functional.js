function Pet(name) { // constructor for ur pet
    function Animal(time, hunger, clock1, bladder, clock2, fun, clock3, energy, clock4, happy, clock5, gameover) {
        this.time = time;//0;
        this.hunger = hunger;//100;
        this.clock1 = clock1;//setInterval(depleteH, interval);
        this.bladder = bladder;//100;
        this.clock2 = clock2;//setInterval(depleteB, interval);
        this.fun = fun;//100;
        this.clock3 = clock3;//setInterval(depleteF, interval);
        this.energy = energy;//100;
        this.clock4 = clock4;//setInterval(depleteE, interval);
        this.happy = happy;//100;
        this.clock5 = clock5;//setInterval(depleteHap, interval);
        this.gameover = gameover;//0;
    }
// messages about ur pet`s life properties 
   let message = {
        hunger: {
            mes0: "Your pet is starving!",
            mes25: "Your pet will be starving soon!",
            mes50: "Your pet won`t mind having a bite)",
            mes75: "Your pet feels fine)",
            mes100: "Your pet has full stomach... ohh.. so hard",
            id:'hunger',
        },
        bladder: {
            mes0: "Your pet has become sick!",
            mes25: "Your pet want pipi now!",
            mes50: "Your pet wants something)",
            mes75: "Your pet feels as never before)",
            mes100: "Your pet is blissfull))",
            id: "bladder",
            btn: "BladderBar",
        },
        fun: {
            mes0: "Your pet is depressed!",
            mes25: "Your pet is bored!",
            mes50: "Your pet wants play with you)",
            mes75: "Your pet is funny now)",
            mes100: "Your pet is the happiest animal in the world)))",
        },
        energy: {
            mes0: "Your pet is tired!",
            mes25: "Your pet is done!",
            mes50: "Your pet will want go to the his bed soon)",
            mes75: "Your pet has so many energy)",
            mes100: "Your pet has full battery))",
        },
        happy: {
            mes0: "Your pet can to do suiside!",
            mes25: "Your pet hasn't happy!",
            mes50: "Your pet wants to handle)",
            mes75: "Your pet rejoices over everything)",
            mes100: "Your pet gives happy all the world)))",
        },
    }
 // create new pet
    let pet = new Animal(0, 100, setInterval(()=>depletePetProperties(
        'hunger', 
        'HungerBar',
         --pet.hunger,
          pet.clock1,
          message.hunger.mes100,
          message.hunger.mes75,
          message.hunger.mes50,
          message.hunger.mes25,
          message.hunger.mes0), 1000),
    100, setInterval(()=>depletePetProperties(
        'bladder', 
        'BladderBar',
         --pet.bladder,
          pet.clock2,
          message.bladder.mes100,
          message.bladder.mes75,
          message.bladder.mes50,
          message.bladder.mes25,
          message.bladder.mes0), 1000),
    100, setInterval(()=>depletePetProperties(
        'fun', 
        'FunBar',
         --pet.fun,
          pet.clock3,
          message.fun.mes100,
          message.fun.mes75,
          message.fun.mes50,
          message.fun.mes25,
          message.fun.mes0), 1000),
    100, setInterval(()=>depletePetProperties(
        'energy', 
        'EnergyBar',
         --pet.energy,
          pet.clock4,
          message.energy.mes100,
          message.energy.mes75,
          message.energy.mes50,
          message.energy.mes25,
          message.energy.mes0), 1000),
    100, setInterval(()=>depletePetProperties(
        'happy', 
        'HappinessBar',
         --pet.happy,
          pet.clock5,
          message.happy.mes100,
          message.happy.mes75,
          message.happy.mes50,
          message.happy.mes25,
          message.happy.mes0), 1000), 0);

    // function for initialisation pet life properties progress
    function depletePetProperties(id, btn, option, timer, mes100, mes75, mes50, mes25, mes0) {
       document.getElementById(id).innerHTML = mes100;
          if (option === 100) document.getElementById(id).innerHTML = mes100;
          else if (option === 75)  document.getElementById(id).innerHTML = mes75;
          else if (option === 50)  document.getElementById(id).innerHTML = mes50;
          else if (option === 25)  document.getElementById(id).innerHTML = mes25;
          else if (option !== 0)   document.getElementById(btn).value = option;
          else if (option === 0) {
            document.getElementById(id).innerHTML = mes0;
            clearInterval(timer);
            gameovercheck();
        }
    }
// function for gameover
    function gameovercheck() {
        if (pet.hunger === 0 && 
            pet.bladder === 0 && 
            pet.fun === 0 && 
            pet.happy === 0 &&
            pet.energy === 0 && 
            pet.gameover === 0) {
            pet.gameover++;
            document.getElementById('name').innerHTML = 'RIP\n' + name;
            alert("Game Over!");
            spriteHandler();
            delete pet;
        }
        else {
            spriteHandler();
            delete pet;
        }
    }
 // show ur dead pet photo
    function spriteHandler() {
        if (pet.hunger === 0 && 
            pet.bladder === 0 && 
            pet.fun === 0 && 
            pet.happy === 0 &&
            pet.energy === 0 ) {
            document.getElementById("Sprite").src = "https://orig00.deviantart.net/7a8e/f/2018/049/f/f/dead_pet_asset_js_game_by_karukami1-dc3jgfu.png";
        }
    }
 // pet life timer
    function getTime() {
        if (pet.hunger > 0 && pet.bladder > 0 && pet.fun > 0 && pet.energy > 0 && pet.happy > 0) {
            document.getElementById("TimeValue").value = pet.time;
            pet.time++;
        }
        if (pet.time === 1000) alert('good job)) your pet still alive');
        else if (pet.time === 3000) alert('u a good ovner)) your pet still alive');
    }
    setInterval(getTime, 1000);

// function for kill ur pet
    document.getElementById('BtnKill').onclick = function killPet() {
        pet.fun = 0;
        pet.happy = 0;
        pet.hunger = 0;
        pet.bladder = 0;
        pet.energy = 0;
        gameovercheck();
        delete pet;
    }

    // functions for check pet`s life property
    document.getElementById("BtnHunger").onclick = function () {
        if (pet.hunger <= 99 && pet.hunger != 0) {
            pet.hunger += 10;
        }
        else if (pet.hunger === 0 || pet.hunger > 100) {
            pet.hunger += 0;
        } else if (pet.hunger <= 91 && pet.hunger <= 100) {
            pet.hunger += 100 - pet.hunger;
        }
    }

    document.getElementById("BtnBladder").onclick = function () {
        if (pet.bladder <= 99 && pet.bladder != 0) {
            pet.bladder += 10;
        }
        else if (pet.bladder === 0 || pet.bladder > 100) {
            pet.bladder += 0;
        } else if (pet.bladder <= 91 && pet.bladder <= 100) {
            pet.bladder += 100 - pet.bladder;
        }
    }

    document.getElementById("BtnFun").onclick = function () {
        if (pet.fun <= 99 && pet.bladder != 0) {
            pet.fun += 10;
        }
        else if (pet.fun === 0 || pet.fun > 100) {
            pet.fun += 0;
        } else if (pet.fun <= 91 && pet.fun <= 100) {
            pet.fun += 100 - pet.fun;
        }
    }

    document.getElementById("BtnEnergy").onclick = function () {
        if (pet.energy <= 99 && pet.hunger != 0) {
            pet.energy += 10;
        }
        else if (pet.energy === 0 || pet.energy > 100) {
            pet.energy += 0;
        } else if (pet.energy <= 91 && pet.energy <= 100) {
            pet.energy += 100 - pet.energy;
        }
    }

    document.getElementById("BtnHappiness").onclick = function () {
        if (pet.happy <= 99 && pet.bladder != 0 && pet.fun != 0 && pet.hunger != 0) {
            pet.happy += 10;
        }
        else if (pet.happy == 0 || pet.happy > 100) {
            pet.happy += 0;
        } else if (pet.happy <= 91 && pet.happy <= 100) {
            pet.happy += 100 - pet.happy;
        }
    }
}
 // load game onload page
window.onload = function () {
    var ret = true;
    while (ret) {
        var name = prompt("name pet");
        if (name === null || name === '' || name === 'null') {
            ret = true;

        } else if (name !== null) {
            document.getElementById('name').innerHTML = name;
            Pet(name);
            ret = false;
        }
    }
}
