import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";

export default function Result() {
    const { text } = useSelector((state: RootState) => state.text);
    const { wordsPerMinute } = text;
    return (
        <div className="mt-7">
            <h1 className="text-4xl text-center">
                Speed: {wordsPerMinute} Words Per Minute
            </h1>
        </div>
    );
}
