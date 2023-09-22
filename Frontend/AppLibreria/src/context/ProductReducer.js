export const reducer = (globalState, action) => {

    switch(action.type) {
        case "GETS_PRODUCTS":
            return {
                ...globalState,
                newProducts: action.payload
            }

        default: 
            return globalState
    }
}