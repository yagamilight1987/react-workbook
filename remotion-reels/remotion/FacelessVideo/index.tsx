import { AbsoluteFill, Audio, staticFile } from "remotion";
import BackgroundImage from "./BackgroundImage";
import Messages from "./Messages";

type Props = {
  sentences: string[];
};

export const FacelessVideo: React.FC<Props> = ({ sentences }) => {
  return (
    <AbsoluteFill>
      <BackgroundImage imageUrl="image.webp" />
      <AbsoluteFill className="p-10">
        <Messages data={sentences} />
      </AbsoluteFill>
      <Audio src={staticFile("audio.wav")} />
    </AbsoluteFill>
  );
};
