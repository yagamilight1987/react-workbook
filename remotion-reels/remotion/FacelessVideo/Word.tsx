import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  word: string;
  inputRange: { start: number; end: number };
};

const Word: React.FC<Props> = ({ word, inputRange }: Props) => {
  const frame = useCurrentFrame();

  const wordOpacity = () => {
    const interpolation = interpolate(
      frame,
      [inputRange.start, inputRange.end],
      [0, 1],
    );
    return interpolation;
  };

  return (
    <span
      className="rounded px-2 tracking-wider leading-snug m-2"
      style={{
        backgroundColor: `rgba(251, 191, 36, ${wordOpacity()})`,
      }}
    >
      {word}{" "}
    </span>
  );
};

export default Word;
