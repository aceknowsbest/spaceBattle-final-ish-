    var missiles = []
    var aliens = [];
    var starShip = {
        hull: 20,
        firePower: 5,
        accuracy: 7,
        attack: function() {
                // let response = prompt('Do you wish to attack? Enter Y or N', "")
                let a = this.firePower
                let b = aliens[0].hull
                let c = a - b  
                    if ((response === 'Y') && (c > 0) && (aliens[0].accuracy <= this.accuracy) && (aliens[0].hull > 0)) {
                        console.log(aliens)
                        console.log("Attacking alien ship with " + this.firePower + " firepower.")
                        aliens[0].hull = c // WILL PUSH NEW VALUE OF 'HULL' TO THE OBJECT IN THE ARRAY
                        console.log(aliens[0].name + " has " + aliens[0].hull + " points remaining")
                        aliens[0].attack()
                        }
                            else if((c < 0)) {
                                console.log(aliens[0].name + " has been DESTROYED")
                                aliens[0].attack()
                         }
                                else if ((response === 'Y') && (aliens[0].accuracy >= starShip.accuracy) && (aliens[0].hull > 0)) {
                                        console.log('Shucks, you missed. NO DAMAGE DONE TO ALIEN SHIP')
                                        aliens[0].attack
                                    }
                                },                    
                          
        }
    
    function newAlien(name) {
                    this.name = name;
                    this.hull = Math.floor( Math.random() * ( 1 + 6 - 3 ) ) + 3;
                    this.firePower = Math.floor(Math.random() * 3) + 2;
                    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
                    this.attack = function() {
                        let a = starShip.hull
                        let b = this.firePower
                        let c = a - b
                        starShip.hull = c
                           if ((this.accuracy >= starShip.accuracy) && (this.hull > 0)) {
                                console.log("STARSHIP HIT with " + this.firePower + " firepower")
                                console.log("THE STARSHIP HAS " + c + " HULL REMAINING")
                                continueFighting() }
                                    else if ((this.accuracy <= starShip.accuracy) && (this.hull > 0)) {
                                            console.log('WhooHoo, the alien missed')
                                            continueFighting()
                                        }
                                            else if ((this.hull <= 0)) {
                                                console.log("The alien ship has been destroyed")
                                                window.alert("The alien ship has been destroyed")
                                                alienStatus()                                            }
                                            }
                    }
        
    // ****************************************************GLOBAL FUNCTIONS**************************************************************
    
    function gameOver () {
        alert("YOU WON! GAME OVER") 
        console.log("YOU WON ! GAME OVER")
    }
    
    function alienStatus () {
        if (aliens.length = 0) {
            console.log("GAME OVER...YOU WON!!")
        }
    }
    
    function aliensToCreate() {
          var input = prompt("Enter the number of Alien ships to battle", "");
          for (let i = 1; i <= input; i++) {
                        let alien = new newAlien("alien"+i)
                        var list = aliens.push(alien)
                        console.log(aliens)
                   }
                } starShip.attack()
            
    function continueFighting(){
        let playAgain = prompt("Some hits remain... Do you wish to attack? ", "")
            if ((aliens[0].hull > 0) && (playAgain === 'Y') && (aliens.length > 0)) {
                    console.log(aliens[0].name + " DESTROYED")
                    const removeShip = aliens.shift()
                    console.log(aliens[0].name + " has been dispatched")
                    aliens[0].attack()
            }
                else if ((aliens[0].hull <= 0) && (playAgain === 'Y') && (aliens.length > 0)) {
                    console.log(aliens[0].name + " has been DESTROYED")  
                    const removeShip = aliens.shift()
                    console.log(aliens[0].name + " has been dispatched")
                    starShip.attack()
                }
                        else if ((aliens[0].hull <= 0) && (playAgain === 'N') && (aliens.length > 0)) {
                            gameOver()
                            }
                        else if ((aliens === undefined || aliens.length === 0) && (starShip.hull < 0)) {
                            window.alert("YOU WON! No more alien ships to attack")
                            console.log(aliens[0].name + " has been DESTROYED")
                            }
                        else if ((aliens[0].hull <= 0) && (playAgain === 'Y') && (aliens.length = 0)) {
                            console.log(aliens[0].name + " has been DESTROYED")
                            console.log("All ALIEN SHIPS HAVE BEEN DESTROYED")
                        }   
                        }
     // Function to move ship element
    function moveShip() {
        document.getElementById('ship').style.left = ship.left + 'px';
    }
    
    // function to create missile
    function createMissiles() {
        document.getElementById('missiles').innerHTML = "";
        for( var missile = 0; missile < missiles.length; missile++) {
            console.log(missile)
            document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;
        }
    }
    // function to move missile
    function moveMissiles() {
        for( var missile = 0; missile < missiles.length; missile++) {
            missiles[missile].top = missiles[missile].top -10
        }
    }
    
    // function to move missile in 1/10th of a second
    function missileLoop() {
        setTimeout(missileLoop , 100)
        moveMissiles()
        createMissiles()
        collisionDetect()
    }
    
    //  function which performs callback function to createMissile and moveMissiles
    function attackAlien () {
        var attack = prompt("To attack the first alien ship, type attack");
        if (attack === 'attack') {
            console.log("Attacking ship")
            setTimeout(missileLoop , 100)
            moveMissiles()
            createMissiles()
        }
        }
    //  function to detect collision of missile to alien ship
    function collisionDetect() {
            for ( var missile = 0; missile < missiles.length; missile++) {
                if (
                (missiles[missile].top <= enemies[enemy].top + 50) &&
                (missiles[missile].top > enemies[enemy].top) && 
                (missiles[missile].left >= enemies[enemy].left) && 
                (missiles[missile].left <= enemies[enemy].left + 50) ){
                    console.log("Alien ship HIT")
                }
        }
    }
    
    document.onkeydown = function(x) {
        console.log(x.keyCode)
        if(x.keyCode === 37) {
            console.log("LEFT");
            ship.left = ship.left - 10;
            moveShip();
    
        }
        else if(x.keyCode === 39) {
            console.log("RIGHT FIRE");
            ship.left = ship.left + 10;
            moveShip()
        }
        else if(x.keyCode === 32) {
            console.log("MISSILE LAUNCHED");
            missiles.push({
                left: ship.left,
                top: ship.top -10,
            })
            createMissiles()
        }
    }
     // Function to move ship element
    function moveShip() {
        document.getElementById('ship').style.left = ship.left + 'px';
    }
    
    // function to create missile
    function createMissiles() {
        document.getElementById('missiles').innerHTML = "";
        for( var missile = 0; missile < missiles.length; missile++) {
            console.log(missile)
            document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;
        }
    }
    // function to move missile
    function moveMissiles() {
        for( var missile = 0; missile < missiles.length; missile++) {
            missiles[missile].top = missiles[missile].top -10
        }
    }
    
    // function to move missile in 1/10th of a second
    function missileLoop() {
        setTimeout(missileLoop , 100)
        moveMissiles()
        createMissiles()
        collisionDetect()
    }
    
    //  function which performs callback function to createMissile and moveMissiles
    function attackAlien () {
        var attack = prompt("To attack the first alien ship, type attack");
        if (attack === 'attack') {
            console.log("Attacking ship")
            setTimeout(missileLoop , 100)
            moveMissiles()
            createMissiles()
        }
        }
    //  function to detect collision of missile to alien ship
    function collisionDetect() {
            for ( var missile = 0; missile < missiles.length; missile++) {
                if (
                (missiles[missile].top <= enemies[enemy].top + 50) &&
                (missiles[missile].top > enemies[enemy].top) && 
                (missiles[missile].left >= enemies[enemy].left) && 
                (missiles[missile].left <= enemies[enemy].left + 50) ){
                    console.log("Alien ship HIT")
                }
        }
    }
