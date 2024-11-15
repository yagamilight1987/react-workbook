import { AbsoluteFill, Audio, staticFile } from "remotion";
import BackgroundImage from "./BackgroundImage";
import Messages from "./Messages";

type Props = {
  sentences: string[];
  image?: string;
  audio?: string;
};

export const FacelessVideo: React.FC<Props> = ({ sentences, image, audio }) => {
  return (
    <AbsoluteFill>
      <BackgroundImage imageUrl={image || "image.webp"} />
      <AbsoluteFill className="p-10">
        <Messages data={sentences} />
      </AbsoluteFill>
      <Audio src={staticFile(audio || "audio.wav")} />
    </AbsoluteFill>
  );
};
