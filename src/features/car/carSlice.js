import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: [
        {
            "name": "Model S",
            "id": "#ModelS",
        },
        {
            "name": "Model 3",
            "id": "#Model3",
        },
        {
            "name": "Model X",
            "id": "#ModelX",
        }
        , {
            "name": "Model Y",
            "id": "#ModelY",
        }
    ]
}
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
});


export const selectCars = state => state.car.cars;

export default carSlice.reducer;