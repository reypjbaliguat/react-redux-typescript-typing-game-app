import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { AppDispatch, RootState } from "../../../app/store";
import {
    fetchText,
    setGameOver,
    setPlaying,
    setWordPerMinute,
} from "../../text/textSlice";
import { useDispatch, useSelector } from "react-redux";

const TextContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { text } = useSelector((state: RootState) => state.text);
    const { status, content, value, time, gameOver, playing } = text;
    let textValue = value && value.split("");
    let letterArr = content && content.split("").splice(0, 100);

    useEffect(() => {
        let result;
        const averageLetterPerWord = 4.7;
        const wordCount = content.length / averageLetterPerWord;
        if (
            letterArr &&
            textValue &&
            letterArr.join("") === textValue.join("")
        ) {
            result = Math.round((wordCount / time) * 60);
            dispatch(setWordPerMinute(result));
            dispatch(setGameOver(true));
            dispatch(setPlaying(false));
        }
    }, [value, time, content, textValue, letterArr, dispatch]);

    useEffect(() => {
        if (
            letterArr &&
            textValue &&
            letterArr.join("") === textValue.join("")
        ) {
            const promise = dispatch(fetchText());
            return () => {
                promise.abort();
            };
        }
    }, [gameOver, playing]);

    useEffect(() => {
        const promise = dispatch(fetchText());
        return () => {
            promise.abort();
        };
    }, [dispatch]);

    return (
        <div className="flex sm:basis-3/5 sm:my-10 my-5 border border-black sm:p-16 p-5 rounded-lg">
            {status === "loading" ? (
                <Loading />
            ) : (
                <div>
                    {letterArr &&
                        letterArr.map((letter, i) => {
                            return (
                                <span
                                    key={i}
                                    className={`text-4xl inline text-black ${
                                        textValue &&
                                        letterArr &&
                                        textValue[i] === letter
                                            ? "text-green"
                                            : textValue &&
                                              textValue[i] !== letter &&
                                              textValue.length > i
                                            ? "text-red"
                                            : ""
                                    }`}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default TextContainer;
