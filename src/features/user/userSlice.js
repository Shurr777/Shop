import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";

/*export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`);
            return res.data;
        } catch (err) {
            console.log("ProductsError", err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)*/

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: [],
        card: [],
        isLoading: false,
    },
    reducers: {
        addItemToCard: (state, {payload}) => {
            let newCard = [...state.card];
            const found = state.card.find(({id}) => id === payload.id)
            if(found) {
                newCard = newCard.map((item) =>{
                    return item.id === payload.id ?
                        {...item, quantity: payload.quantity || item.quantity + 1}:
                        item;
                })
            }else newCard.push({...payload, quantity: 1})
          state.card = newCard;
        },
    },

    /*extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, n) => {
            state.isLoading = true;
        })

        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = false;
        })

        builder.addCase(getProducts.rejected, (state, {payload}) => {
            state.isLoading = false;
        })
    }*/
})

export const {addItemToCard} = userSlice.actions;
export default userSlice.reducer;
