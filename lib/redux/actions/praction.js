import regeneratorRuntime from "regenerator-runtime";


export const swap = () => async (dispatch) => {
    dispatch({
        type: "SWAP",
    })
}