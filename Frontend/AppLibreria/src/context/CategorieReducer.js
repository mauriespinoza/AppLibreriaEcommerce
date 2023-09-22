export const reducer = (globalState, action) => {

    switch(action.type) {
        case "GETS_CATEGORIES":
            return {
                ...globalState,
                newCategories: action.payload
            }

        default: 
            return globalState
    }
}