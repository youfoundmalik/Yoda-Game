import { createSlice } from "@reduxjs/toolkit";

const apiStatus = createSlice({
    name: "apistatus",
    initialState: {
        isLoading: false,
        error: null,
    },
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})

export const apiActions = apiStatus.actions;
export default apiStatus