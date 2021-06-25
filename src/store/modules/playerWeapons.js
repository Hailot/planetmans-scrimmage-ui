import axios from 'axios'

// initial state
const state = () => ({
    all: []
})

// getters
const getters = {}

// actions
const actions = {
    getPlayerWeapons ({ commit }, playerName) {
        let url = process.env.VUE_APP_API_URL + "/players/name/"+playerName+'/weapons';
        axios.get(url)
            .then((response) => {
                commit('setWeapons', response.data)
            })
    }

}

// mutations
const mutations = {
    setWeapons (state, weapons) {
        state.all = weapons
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}