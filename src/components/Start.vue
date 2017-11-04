<template>
    <div class="start">
        <h1 class="master-title">Jogo da Memória</h1>
        <md-card>
            <md-card-header>
            </md-card-header>
            <md-card-content>
                <form novalidate @submit.stop.prevent="submit" class="col-md-6 col-md-offset-3">
                    <md-input-container class="md-input-invalid">
                        <label>Nome ou Apelido</label>
                        <md-input required v-model="name"></md-input>
                    </md-input-container>
                <router-link tag="md-button" class="md-raised md-primary" to="/play" @click.native="addRow()" v-if="!missingName"> 
                  PLAY <md-icon>navigate_next</md-icon> 
                </router-link>
                </form>
                <md-table class="col-md-6 col-md-offset-3">
                    <md-table-header>
                        <md-table-row>
                              <md-table-head>Nome</md-table-head>
                              <md-table-head>Rodadas</md-table-head>
                        </md-table-row>
                    </md-table-header>
                    <md-table-body>
                        <md-table-row v-for="player in players">
                          <md-table-cell>{{player.name}}</md-table-cell>
                          <md-table-cell>{{player.rounds}}</md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>
            </md-card-content>
        </md-card>
     </div>
</template>

<script>
    export default {
        name: 'start',
        data () {
            return {
                players: [
                    {name: ''},
                    {rounds: ''}
                ],
                name : '',
                rounds: ''
            }
        },
        methods:{
            addRow: function(){
                console.log(this.name);
                this.players.push({name: this.name , rounds: this.rounds});
            }
        } ,
        computed: {
            missingName: function () { return this.name === ''; }
        },
    } 
 
</script>