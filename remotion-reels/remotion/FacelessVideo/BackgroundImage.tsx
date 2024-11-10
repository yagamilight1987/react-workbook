import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  imageUrl: string;
  enableFade?: boolean;
};

const BackgroundImage: React.FC<Props> = ({
  imageUrl,
  enableFade = false,
}: Props) => {
  if (enableFade) {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(
      frame,
      [0, 10, durationInFrames - 10, durationInFrames],
      [0, 1, 1, 0],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    );

    return (
      <AbsoluteFill className="bg-white ">
        <Img
          src={staticFile(imageUrl)}
          className="h-full w-full object-cover"
          style={{ opacity }}
        />
      </AbsoluteFill>
    );
  } else {
    return (
      <AbsoluteFill className="bg-white ">
        <Img
          src={staticFile(imageUrl)}
          className="h-full w-full object-cover"
        />
      </AbsoluteFill>
    );
  }
};

export default BackgroundImage;
