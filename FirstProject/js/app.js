new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[],

    },
    methods: {
        startNewGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
             this.turns=[];
        },
        attack: function () {

            if (this.checkPlayerOption()) {
                return;
            }
            //Monster
            var damage = this.inputDamage(4, 10);
            this.monsterHealth -=damage;
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player hits Monster for '+damage,
            })
            //Player

            this.monsterAttact();


        },
        specialAttack: function () {
            if (this.checkPlayerOption()) {
                return;
            }
            //Monster
            var damage=this.inputDamage(10, 20)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player hits Monster for '+damage,
            })

            //Player

            this.monsterAttact();
        },
        heal: function () {
            if (this.playerHealth > 70) {
                return false;
            } else if (this.playerHealth <= 60) {
                this.playerHealth += 10;

            } else {
                this.playerHealth = 70;
            }
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player heal for 10',
            })
            this.monsterAttact();

        },
        giveUp: function () {
            this.startNewGame();
            this.turns=[];
            alert('Can You Lost!')
        },
        monsterAttact: function () {
            var damage=this.inputDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer:false,
                textLog:'Monster hits Player for '+damage,
            })
            this.checkPlayerOption();
        },
        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random()) * maxDamage + 1, minDamage);
        },
        checkPlayerOption: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startNewGame();
                    // this.gameIsRunning=true;
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth) {
                if (this.playerHealth <= 0) {
                    if (confirm('You Lose! New Game?')) {
                        this.startNewGame();
                        // this.gameIsRunning=true;
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    },
});