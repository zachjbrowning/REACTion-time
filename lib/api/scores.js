import api from "./api";


const ScoreAPI = {
    add: async (game, params) => {
        return await api.post(`/new-score/${game}`, params)
    },
    get: async (game) => {
        return await api.get(`/get-highs/${game}`)
    }
}

export default ScoreAPI;