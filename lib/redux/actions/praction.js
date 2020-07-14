import regeneratorRuntime from "regenerator-runtime";


export const swap = () => async (dispatch) => {
    console.log("HMMM");
    dispatch({
        type: "SWAP",
    })
}