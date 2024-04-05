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

export const loginUser = createAsyncThunk(
    'users/login',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload);
            const login = await axios(`${BASE_URL}/auth/profile`, {
                headers: {
                    "Authorization": `Bearer${res.access_token}`
                }
            });
            return login.data;
        } catch (err) {
            console.log("LoginError", err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const addCurrentUser = (state, {payload}) => {
    state.currentUser = payload;
}


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
                newCard = newCard.map((item) => {
                    return item.id === payload.id ?
                        {...item, quantity: payload.quantity || item.quantity + 1} :
                        item;
                })
            } else newCard.push({...payload, quantity: 1})
            state.card = newCard;
        },
        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        },
        toggleFormType: (state, {payload}) => {
            state.formType = payload;
        },

    },

    extraReducers: (builder) => {
        /*builder.addCase(getProducts.pending, (state, n) => {
            state.isLoading = true;
        })*/

        builder.addCase(createUser.fulfilled, addCurrentUser)

        builder.addCase(loginUser.fulfilled, addCurrentUser)
        /* builder.addCase(getProducts.rejected, (state, {payload}) => {
             state.isLoading = false;
         })*/
    }
})

export const {addItemToCard, toggleForm, toggleFormType } = userSlice.actions;
export default userSlice.reducer;
