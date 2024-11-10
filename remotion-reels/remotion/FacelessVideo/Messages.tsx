import { AbsoluteFill } from "remotion";
import { DURATION_PER_CHARACTER } from "../../types/constants";
import Message from "./Message";

type Props = {
  data: string[];
};

const Messages: React.FC<Props> = ({ data }) => {
  const getInputRange = (index: number) => {
    const sentencesBefore = data.slice(0, index);
    const sentencesBeforeCharacterCount = sentencesBefore.join("").length;

    const currentSentence = data[index];
    const currentSentenceCharacterCount = currentSentence.length;

    const offsetDuration =
      sentencesBeforeCharacterCount * DURATION_PER_CHARACTER;
    const currentSentenceDuration =
      currentSentenceCharacterCount * DURATION_PER_CHARACTER;

    return {
      start: offsetDuration,
      end: offsetDuration + currentSentenceDuration,
    };
  };

  return (
    <AbsoluteFill className="justify-center items-center">
      {data.map((message: string, index: number) => (
        <Message
          value={message}
          inputRange={getInputRange(index)}
          key={index}
        />
      ))}
    </AbsoluteFill>
  );
};

export default Messages;
