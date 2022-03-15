import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: [],
        playUser: [],
        userQuestion: [],
        deadUser: [],
        userBoolean: [],
        question: ['paper', 'rock', 'scissors'],
        computer: '',
        stageCount: 1
    },
    getters: {

    },
    mutations: {
        deadUserAdd(state) {
            for(var i = 0; state.playUser.length > i; i++) {
                if(state.computer == 'paper') {
                    if(state.userQuestion[i] == 'rock') {
                        state.userBoolean.push(false);
                    } else {
                        state.userBoolean.push(true);
                    }
                }
                if(state.computer == 'rock') {
                    if(state.userQuestion[i] == 'scissors') {
                        state.userBoolean.push(false);
                    } else {
                        state.userBoolean.push(true);
                    }
                }
                if(state.computer == 'scissors') {
                    if(state.userQuestion[i] == 'paper') {
                        state.userBoolean.push(false);
                    } else {
                        state.userBoolean.push(true);
                    }
                }
            }

            for(var i = state.playUser.length; i >= 0; i--) {
                if(state.userBoolean[i] == false) {
                    state.deadUser.unshift(state.playUser[i]);
                    state.playUser.splice(i, 1);
                }
            }
        }
    },
    actions: {
        resultBtn(context) {
            context.commit('deadUserAdd');
        },
    }
})