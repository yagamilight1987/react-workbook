import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { DURATION_PER_CHARACTER } from "../../types/constants";
import Word from "./Word";

type Props = {
  value: string;
  inputRange: { start: number; end: number };
};

const Message: React.FC<Props> = ({ value, inputRange }: Props) => {
  const frame = useCurrentFrame();
  const { start, end } = inputRange;

  const sentenceOpacity = () => {
    const opacity = interpolate(
      frame,
      [
        start,
        start + DURATION_PER_CHARACTER,
        end - DURATION_PER_CHARACTER,
        end,
      ],
      [0, 1, 1, 0],
    );
    return opacity;
  };

  const getInputRange = (words: string[], index: number) => {
    const wordsBefore = words.slice(0, index);
    const wordsBeforeCharacterCount = wordsBefore.join("").length;

    const currentWord = words[index];
    const currentWordCharacterCount = currentWord.length;

    const startWord = wordsBeforeCharacterCount * DURATION_PER_CHARACTER;
    const endWord = currentWordCharacterCount * DURATION_PER_CHARACTER;

    return { start: start + startWord, end: start + startWord + endWord };
  };

  const words = value.split(" ");
  return (
    <AbsoluteFill
      className="justify-center items-center text-6xl text-center py-20"
      style={{ opacity: sentenceOpacity() }}
    >
      <span className="bg-white flex flex-wrap justify-center items-center rounded-xl">
        {words.map((word: string, index: number) => (
          <Word
            key={index}
            word={word}
            inputRange={getInputRange(words, index)}
          />
        ))}
      </span>
    </AbsoluteFill>
  );
};

export default Message;
