import api from "./api";


const ScoreAPI = {
    add: async (params) => {
        return await api.post(`/new-score/`, params)
    },
    get: async (game) => {
        return await api.get(`/get-highs/${game}`)
    }
}

export default ScoreAPI;