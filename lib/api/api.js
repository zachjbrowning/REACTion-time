import axios from "axios";


let instance = axios.create({
  baseURL: `https://zachjbrowning.tech/reaction`,
  header: {
    "content-type": "application/json",
  },
});

export default instance;
