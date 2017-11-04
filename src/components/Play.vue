<template>
    <div class="play">
        <h1 class="master-title">PLAY</h1>
        <md-card id="panel-card">
            <md-card-header>
                <div><span class="label">RODADAS:</span><span class="value">{{ turns }}</span></div>
            </md-card-header>
            <md-card-content class="cards">
                <div class="row">
                    <div class="col-xs-2 col-sm-2 col-md-3 col-lg-3" v-for="card in cards">
                        <button :style="card.styleObject" :disabled="card.active == true" class="box card" v-on:click="showCard(card)"><md-image :md-src="card.src"></md-image></button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
        <router-link tag="md-button" class="md-raised md-accent" to="/start">
            <md-icon>arrow_back</md-icon> Novo Jogo
        </router-link>
        <md-dialog-alert
            :md-title="alert.title"
            :md-content="alert.content"
            :md-ok-text="alert.ok"
            @close="resetGame"
            ref="dialog">
        </md-dialog-alert>
    </div>
</template>

<script>
    var counter = 1;
    var cardPrevious = [];
    var finish = 0;
    var turns = 0;
    let dataObj =  [{id: 1 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 1 , styleObject: {backgroundColor: '#795548'}},
                    {id: 2 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 2 , styleObject: {backgroundColor: '#795548'}},
                    {id: 3 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 3 , styleObject: {backgroundColor: '#795548'}},
                    {id: 4 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 4 , styleObject: {backgroundColor: '#795548'}},
                    {id: 5 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 5 , styleObject: {backgroundColor: '#795548'}},
                    {id: 6 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 6 , styleObject: {backgroundColor: '#795548'}},
                    {id: 7 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 7 , styleObject: {backgroundColor: '#795548'}},
                    {id: 8 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 8 , styleObject: {backgroundColor: '#795548'}},
                    {id: 9 ,  src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 9 , styleObject: {backgroundColor: '#795548'}},
                    {id: 10 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 10 ,styleObject: {backgroundColor: '#795548'}},
                    {id: 11 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 1 , styleObject: {backgroundColor: '#795548'}},
                    {id: 12 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 2 , styleObject: {backgroundColor: '#795548'}},
                    {id: 13 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 3 , styleObject: {backgroundColor: '#795548'}},
                    {id: 14 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 4 , styleObject: {backgroundColor: '#795548'}},
                    {id: 15 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 5 , styleObject: {backgroundColor: '#795548'}},
                    {id: 16 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 6 , styleObject: {backgroundColor: '#795548'}},
                    {id: 17 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 7 , styleObject: {backgroundColor: '#795548'}},
                    {id: 18 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 8 , styleObject: {backgroundColor: '#795548'}},
                    {id: 19 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 9 , styleObject: {backgroundColor: '#795548'}},
                    {id: 20 , src: 'https://image.flaticon.com/icons/svg/36/36601.svg', active: false, naipe: 10 ,styleObject: {backgroundColor: '#795548'}}];

    export default {
        name: 'play',
        data () {
            return {
                cards: [],
                turns : 0,
                alert: {
                    title: 'Parabéns',
                    content: 'content',
                    ok: 'NOVO JOGO'
                },
            }
        },
        methods: {
            showCard: function (card) {
                this.changeCard(card);
                card.styleObject = {backgroundColor: '#BCAAA4'};
                card.active = true;
                cardPrevious[counter] = card;
               
                if(counter == 2){
                    if(cardPrevious[1].naipe == cardPrevious[2].naipe){
                        finish += 1;
                    }else{
                        cardPrevious[1].styleObject = {backgroundColor: '#795548'};
                        cardPrevious[1].src = 'https://image.flaticon.com/icons/svg/36/36601.svg'
                        cardPrevious[1].active = false;
                        cardPrevious[2].styleObject = {backgroundColor: '#795548'};
                        cardPrevious[2].src = 'https://image.flaticon.com/icons/svg/36/36601.svg'
                        cardPrevious[2].active = false;
                    }
                    cardPrevious = [];
                    this.turns += 1;
                    counter = 0;
                }
                if(finish == 10){
                    this.openDialog('dialog');
                    this.alert.content = 'Você precisou de ' + this.turns + ' rodadas para vencer!';
                }                                
                counter += 1;


            },
            changeCard(card){
                card.id == 1  ? card.src = 'https://image.flaticon.com/icons/svg/477/477195.svg' : '';
                card.id == 2  ? card.src = 'https://image.flaticon.com/icons/svg/477/477190.svg' : '';
                card.id == 3  ? card.src = 'https://image.flaticon.com/icons/svg/477/477173.svg' : '';
                card.id == 4  ? card.src = 'https://image.flaticon.com/icons/svg/477/477168.svg' : '';
                card.id == 5  ? card.src = 'https://image.flaticon.com/icons/svg/477/477160.svg' : '';
                card.id == 6  ? card.src = 'https://image.flaticon.com/icons/svg/477/477182.svg' : '';
                card.id == 7  ? card.src = 'https://image.flaticon.com/icons/svg/477/477199.svg' : '';
                card.id == 8  ? card.src = 'https://image.flaticon.com/icons/svg/477/477184.svg' : '';
                card.id == 9  ? card.src = 'https://image.flaticon.com/icons/svg/477/477162.svg' : '';
                card.id == 10 ? card.src = 'https://image.flaticon.com/icons/svg/477/477175.svg' : '';
                card.id == 11 ? card.src = 'https://image.flaticon.com/icons/svg/477/477195.svg' : '';
                card.id == 12 ? card.src = 'https://image.flaticon.com/icons/svg/477/477190.svg' : '';
                card.id == 13 ? card.src = 'https://image.flaticon.com/icons/svg/477/477173.svg' : '';
                card.id == 14 ? card.src = 'https://image.flaticon.com/icons/svg/477/477168.svg' : '';
                card.id == 15 ? card.src = 'https://image.flaticon.com/icons/svg/477/477160.svg' : '';
                card.id == 16 ? card.src = 'https://image.flaticon.com/icons/svg/477/477182.svg' : '';
                card.id == 17 ? card.src = 'https://image.flaticon.com/icons/svg/477/477199.svg' : '';
                card.id == 18 ? card.src = 'https://image.flaticon.com/icons/svg/477/477184.svg' : '';
                card.id == 19 ? card.src = 'https://image.flaticon.com/icons/svg/477/477162.svg' : '';
                card.id == 20 ? card.src = 'https://image.flaticon.com/icons/svg/477/477175.svg' : '';
            },
            resetGame() {
                var m = dataObj.length, t, i;

                while (m) {
                    i = Math.floor(Math.random() * m--);
                    t = dataObj[m];
                    dataObj[m] = dataObj[i];
                    dataObj[i] = t;
                    dataObj[m].styleObject = {backgroundColor: '#795548'};
                    dataObj[m].active = false;
                    dataObj[m].src = 'https://image.flaticon.com/icons/svg/36/36601.svg';
                    finish = 0;
                }
                this.cards = dataObj;

            },
            openDialog(ref) {
                this.$refs[ref].open();
            },
        },

        created() {
            this.resetGame();
        }
    }
</script>