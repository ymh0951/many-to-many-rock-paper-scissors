import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: [],
        playUser: [],
        userQuestion: [],
        deadUser: [],
        question: ['paper', 'rock', 'scissors'],
        computer: '',
        stageCount: 1
    },
    getters: {

    },
    mutations: {
        deadUserAdd(state) {
            for(let i = 0; state.playUser.length > i; i++) {
                // 컴퓨터가 보를 냈을 때
                if(state.computer == 'paper') {
                    if(state.userQuestion[i] == 'paper') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else if(state.userQuestion[i] == 'rock') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else {

                    }
                }
                // 컴퓨터가 바위를 냈을 때
                if(state.computer == 'rock') {
                    if(state.userQuestion[i] == 'rock') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else if(state.userQuestion[i] == 'scissors') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else {
                        
                    }
                }
                // 컴퓨터가 가위를 냈을 때
                if(state.computer == 'scissors') {
                    if(state.userQuestion[i] == 'scissors') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else if(state.userQuestion[i] == 'paper') {
                        state.deadUser.push(state.playUser[i]);
                        state.playUser.splice(i, 1);
                    } else {
                        
                    }
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