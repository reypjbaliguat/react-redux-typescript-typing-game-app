import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUtil from "../../utilities/fetchUtil";

interface text {
    status: String;
    content: String;
    value: String;
    gameOver: Boolean;
    playing: Boolean;
    time: number;
    wordsPerMinute: number;
}

// Type for our state
export interface TextState {
    text: text;
}

// Initial state
const initialState: TextState = {
    text: {
        status: "",
        content: "",
        value: "",
        gameOver: false,
        playing: false,
        time: 0,
        wordsPerMinute: 0,
    },
};

export const fetchText = createAsyncThunk("text/fetchText", async () => {
    return fetchUtil("https://api.quotable.io/random");
});

// Actual Slice
export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.text.value = action.payload;
        },
        setGameOver: (state, action) => {
            state.text.gameOver = action.payload;
        },
        setPlaying: (state, action) => {
            state.text.playing = action.payload;
        },
        addSecondToTime: (state) => {
            state.text.time = state.text.time + 1;
        },
        resetTime: (state) => {
            state.text.time = 0;
        },
        setWordPerMinute: (state, action) => {
            state.text.wordsPerMinute = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchText.pending, (state) => {
                state.text.status = "loading";
                // both `state` and `action` are now correctly typed
                // based on the slice state and the `pending` action creator
            })
            .addCase(fetchText.fulfilled, (state, { payload }) => {
                state.text.content = payload.content;
                state.text.status = "loaded";
            })
            .addCase(fetchText.rejected, (state) => {
                state.text.status = "failed";
            });
    },
});

// Action creators are generated for each case reducer function
export const {
    setValue,
    setGameOver,
    setPlaying,
    addSecondToTime,
    resetTime,
    setWordPerMinute,
} = textSlice.actions;

export default textSlice.reducer;
