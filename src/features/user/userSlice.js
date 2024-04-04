import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";

export const createUser = createAsyncThunk(
    'users/createUsers',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/users`, payload);
            return res.data;
        } catch (err) {
            console.log("UserError", err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        card: [],
        isLoading: false,
        formType: "signup",
        showForm: false,
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
        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        }
    },

    extraReducers: (builder) => {
        /*builder.addCase(getProducts.pending, (state, n) => {
            state.isLoading = true;
        })*/

        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })

       /* builder.addCase(getProducts.rejected, (state, {payload}) => {
            state.isLoading = false;
        })*/
    }
})

export const {addItemToCard, toggleForm} = userSlice.actions;
export default userSlice.reducer;
