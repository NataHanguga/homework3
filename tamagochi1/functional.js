function Pet(name) {
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

    let message = {
        hunger: {
            mes0: "Your pet is starving!",
            mes25: "Your pet will be starving soon!",
            mes50: "Your pet won`t mind having a bite)",
            mes75: "Your pet feels fine)",
            mes100: "Your pet has full stomach... ohh.. so hard",
            id: document.getElementById('hungger'),
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

    let pet = new Animal(0,
        100, setInterval(depleteHunger(message.hunger.id), 1000),
        100, setInterval(depleteBladder, 1000),
        100, setInterval(depleteFun, 1000),
        100, setInterval(depleteEnergy, 1000),
        100, setInterval(depleteHappy, 1000), 0);

    // function depleteHunger(/*id, btn, message0, message25, message50, message75, message100, pet, clock*/) {
    //     let id = document.getElementById('hungger');
    //     let btn = document.getElementById('HungerBar');
    //     let message0 = message.hunger.mes0;
    //     let message25 = message.hunger.mes25;
    //     let message50 = message.hunger.mes50;
    //     let message75 = message.hunger.mes75;
    //     let message100 = message.hunger.mes100;
    //     let cat = pet.hunger;
    //     // let clock = pet.clock1;

    //     if (cat === 0) {
    //         id.innerHTML = message0;
    //         clearInterval(pet.clock1);
    //         gameovercheck();
    //     } else if (cat == 100) {
    //         id.innerHTML = message100;
    //         cat--;
    //     } else if (cat === 75) {
    //         id.innerHTML = message75;
    //         cat--;
    //     } else if (cat === 50) {
    //         id.innerHTML = message50;
    //         cat--;
    //     } else if (cat === 25) {
    //         id.innerHTML = message25;
    //         cat--;
    //     } else if (cat !== 0)
    //         cat--;
    //     console.log(cat);
    //     btn.value = cat;
    // }

    function depleteHunger(id) {
        // let id = document.getElementById('hungger');
        let progress = document.getElementById('HungerBar');
        let cat = pet.clock1;
        if (pet.hunger == 0) {
            id.innerHTML = message.hunger.mes0;
            clearInterval(cat);
            gameovercheck();
        } else if (pet.hunger == 100) {
            id.innerHTML = message.hunger.mes100;
            pet.hunger--;
        } else if (pet.hunger == 75) {
            id.innerHTML = message.hunger.mes75;
            pet.hunger--;
        } else if (pet.hunger == 50) {
            id.innerHTML = message.hunger.mes50;
            pet.hunger--;
        } else if (pet.hunger == 25) {
            id.innerHTML = message.hunger.mes25;
            pet.hunger--;
        } else if (pet.hunger != 0)
            console.log(pet.hunger);
        progress.value = pet.hunger--;

    }


    function depleteBladder() {
        if (pet.bladder == 0) {
            document.getElementById('bladder').innerHTML = message.bladder.mes0;
            clearInterval(pet.clock2);
            gameovercheck();
        } else if (pet.bladder == 100) {
            document.getElementById('bladder').innerHTML = message.bladder.mes100;
            pet.bladder--;
        } else if (pet.bladder == 75) {
            document.getElementById('bladder').innerHTML = message.bladder.mes75;
            pet.bladder--;
        } else if (pet.bladder == 50) {
            document.getElementById('bladder').innerHTML = message.bladder.mes50;
            pet.bladder--;
        } else if (pet.bladder == 25) {
            document.getElementById('bladder').innerHTML = message.bladder.mes25;
            pet.bladder--;
        } else if (pet.bladder != 0)
            pet.bladder--;
        document.getElementById("BladderBar").value = pet.bladder;

    }

    function depleteFun() {
        if (pet.fun == 0) {
            document.getElementById('fun').innerHTML = message.fun.mes0;
            clearInterval(pet.clock3);
            gameovercheck();
        } else if (pet.fun == 100) {
            document.getElementById('fun').innerHTML = message.fun.mes100;
            pet.fun--;
        } else if (pet.fun == 75) {
            document.getElementById('fun').innerHTML = message.fun.mes75;
            pet.fun--;
        } else if (pet.fun == 50) {
            document.getElementById('fun').innerHTML = message.fun.mes50;
            pet.fun--;
        } else if (pet.fun == 25) {
            document.getElementById('fun').innerHTML = message.fun.mes25;
            pet.fun--;
        } else if (pet.fun != 0)
            pet.fun--;
        document.getElementById("FunBar").value = pet.fun;

    }

    function depleteEnergy() {
        if (pet.energy == 0) {
            document.getElementById('energy').innerHTML = "Your pet is tired!";
            clearInterval(pet.clock4);
            gameovercheck();
        } else if (pet.energy == 100) {
            document.getElementById('energy').innerHTML = "Your pet has full battery))";
            pet.energy--;
        } else if (pet.energy == 75) {
            document.getElementById('energy').innerHTML = "Your pet has so many energy)";
            pet.energy--;
        } else if (pet.energy == 50) {
            document.getElementById('energy').innerHTML = "Your pet will want go to the his bed soon)";
            pet.energy--;
        } else if (pet.energy == 25) {
            document.getElementById('energy').innerHTML = "Your pet is done!";
            pet.energy--;
        } else if (pet.energy !== 0)
            pet.energy--;
        document.getElementById("EnergyBar").value = pet.energy;

    }
    function depleteHappy() {
        if (pet.happy == 0) {
            document.getElementById('happy').innerHTML = "Your pet can to do suiside!";
            clearInterval(pet.clock5);
            gameovercheck();
        } else if (pet.happy == 100) {
            document.getElementById('happy').innerHTML = "Your pet gives happy all the world)))";
            pet.happy--;
        } else if (pet.happy == 75) {
            document.getElementById('happy').innerHTML = "Your pet rejoices over everything)";
            pet.happy--;
        } else if (pet.happy == 50) {
            document.getElementById('happy').innerHTML = "Your pet wants to handle)";
            pet.happy--;
        } else if (pet.happy == 25) {
            document.getElementById('happy').innerHTML = "Your pet hasn't happy!";
            pet.happy--;
        } else if (pet.happy !== 0)
            pet.happy--;
        document.getElementById("HappinessBar").value = pet.happy;

    }

    function gameovercheck() {
        if (pet.hunger == 0 && pet.bladder == 0 && pet.fun == 0 && pet.happy == 0 && pet.energy == 0 && pet.gameover == 0) {
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

    function spriteHandler() {
        if (pet.hunger == 0 && pet.bladder == 0 && pet.fun == 0 && pet.energy == 0 && pet.happy == 0) {
            document.getElementById("Sprite").src = "https://orig00.deviantart.net/7a8e/f/2018/049/f/f/dead_pet_asset_js_game_by_karukami1-dc3jgfu.png";
        }
    }

    function getTime() {
        if (pet.hunger > 0 && pet.bladder > 0 && pet.fun > 0 && pet.energy > 0 && pet.happy > 0) {
            document.getElementById("TimeValue").value = pet.time;
            pet.time++;
        }
        if (pet.time == 1000) alert('good job)) your pet still alive');
        else if (pet.time == 3000) alert('u a good ovner)) your pet still alive');
    }
    setInterval(getTime, 1000);


    document.getElementById('BtnKill').onclick = function killPet() {
        pet.fun = 0;
        pet.happy = 0;
        pet.hunger = 0;
        pet.bladder = 0;
        pet.energy = 0;
        gameovercheck();
        delete pet;
    }

    document.getElementById("BtnHunger").onclick = function () {
        if (pet.hunger <= 99 && pet.hunger != 0) {
            pet.hunger += 10;
        }
        else if (pet.hunger == 0 || pet.hunger > 100) {
            pet.hunger += 0;
        } else if (pet.hunger <= 91 && pet.hunger <= 100) {
            pet.hunger += 100 - pet.hunger;
        }
    }

    document.getElementById("BtnBladder").onclick = function () {
        if (pet.bladder <= 99 && pet.bladder != 0) {
            pet.bladder += 10;
        }
        else if (pet.bladder == 0 || pet.bladder > 100) {
            pet.bladder += 0;
        } else if (pet.bladder <= 91 && pet.bladder <= 100) {
            pet.bladder += 100 - pet.bladder;
        }
    }

    document.getElementById("BtnFun").onclick = function () {
        if (pet.fun <= 99 && pet.bladder != 0) {
            pet.fun += 10;
        }
        else if (pet.fun == 0 || pet.fun > 100) {
            pet.fun += 0;
        } else if (pet.fun <= 91 && pet.fun <= 100) {
            pet.fun += 100 - pet.fun;
        }
    }

    document.getElementById("BtnEnergy").onclick = function () {
        if (pet.energy <= 99 && pet.hunger != 0) {
            pet.energy += 10;
        }
        else if (pet.energy == 0 || pet.energy > 100) {
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

window.onload = function () {
    var ret = true;
    while (ret) {
        var name = prompt("name pet");
        if (name == null || name == '' || name == 'null') {
            ret = true;

        } else if (name !== null) {
            console.log(name);

            document.getElementById('name').innerHTML = name;
            Pet(name);
            ret = false;
        }
    }
}
