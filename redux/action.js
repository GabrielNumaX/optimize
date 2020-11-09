
export const getProds = (paramData) => dispatch => {
    dispatch({
        type: 'SELECT_PROD',
        payload: paramData
    })
}
export const getId = (paramData) => dispatch => {
    dispatch({
        type: 'GET_ID',
        payload: paramData
    })
}