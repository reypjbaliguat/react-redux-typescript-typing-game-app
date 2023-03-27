import textReducer, {
    TextState,
    setValue,
    setGameOver,
    setPlaying,
    addSecondToTime,
    resetTime,
    setWordPerMinute,
} from "./textSlice";

describe.only("text reducer", () => {
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
    it("should handle initial state", () => {
        expect(textReducer(undefined, { type: "unknown" })).toEqual({
            text: {
                status: "",
                content: "",
                value: "",
                gameOver: false,
                playing: false,
                time: 0,
                wordsPerMinute: 0,
            },
        });
    });
    it("should handle setValue", () => {
        const { text } = textReducer(initialState, setValue("a"));
        const { value } = text;
        expect(value).toEqual("a");
    });
    it("should handle setGameOver", () => {
        const { text } = textReducer(initialState, setGameOver(true));
        const { gameOver } = text;
        expect(gameOver).toEqual(true);
    });
    it("should handle setPlaying", () => {
        const { text } = textReducer(initialState, setPlaying(true));
        const { playing } = text;
        expect(playing).toEqual(true);
    });
    it("should handle addSecondToTime", () => {
        const { text } = textReducer(initialState, addSecondToTime());
        const { time } = text;
        expect(time).toEqual(1);
    });
    it("should handle resetTime", () => {
        const { text } = textReducer(initialState, resetTime());
        const { time } = text;
        expect(time).toEqual(0);
    });
    it("should handle setWordPerMinute", () => {
        const { text } = textReducer(initialState, setWordPerMinute(50));
        const { wordsPerMinute } = text;
        expect(wordsPerMinute).toEqual(50);
    });
});
