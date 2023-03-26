import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import Result from "./components/Result";
import TextContainer from "./components/TextContainer";
import TextInput from "./components/TextInput";

export default function Text() {
    return (
        <div className="flex basis-full justify-center">
            <div className="basis-4/5 flex-wrap">
                <Header />
                <Result />
                <TextContainer />
                <TextInput />
                <PlayButton />
            </div>
        </div>
    );
}
