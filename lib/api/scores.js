import api from "./api";


const ScoreAPI = {
    add: async (params) => {
        return await api.post(`/new-score/`, params)
    }
}

export default ScoreAPI;