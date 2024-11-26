import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import Message from "../FacelessVideo/Message";
import { start } from "repl";
import { DURATION_PER_CHARACTER } from "../../types/constants";

type SentenceProp = {
  text: string;
  start: number;
  end: number;
  subText?: string;
};

type Props = {
  sentences: Array<SentenceProp>;
  audio: string;
  image: string;
  title: string;
  bgClasses: string;
  textColor: string;
};

function AWSCloudPractionerVideo({
  sentences,
  audio,
  image,
  title,
  bgClasses,
  textColor,
}: Props) {
  return (
    <AbsoluteFill className={`${bgClasses} items-center`}>
      <Img
        src={staticFile(image)}
        className="w-64 object-cover pt-20 opacity-50"
      />
      <h1
        className={`text-zinc-800 text-5xl mt-[3%] py-4 px-8 rounded font-bold text-center tracking-widest`}
      >
        AWS Certified Cloud Practitioner
      </h1>
      <h2
        className={`${textColor} text-8xl mt-[3%] py-4 px-8 rounded font-bold text-center`}
      >
        {title}
      </h2>
      <AbsoluteFill className="mt-[10%] max-w-[80%] mx-auto">
        <Sentence data={sentences} textColor={textColor} />
      </AbsoluteFill>
      <Audio src={staticFile(audio || "audio.wav")} />
    </AbsoluteFill>
  );
}

export default AWSCloudPractionerVideo;

const Sentence = ({
  data,
  textColor,
}: {
  data: Array<SentenceProp>;
  textColor: string;
}) => {
  const frame = useCurrentFrame();

  const textOpactiy = (start: number, end: number) => {
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

  return (
    <AbsoluteFill className="justify-center items-center">
      {data.map((item: SentenceProp, index: number) => {
        return item.subText ? (
          <>
            <AbsoluteFill className="mt-[45%]">
              <h2
                className={`mt-[15%] text-6xl py-4 px-8 rounded font-bold text-center ${textColor}`}
                style={{ opacity: textOpactiy(item.start, item.end) }}
              >
                {item.text}
              </h2>
            </AbsoluteFill>
            <Message
              value={item.subText}
              inputRange={{ start: item.start, end: item.end }}
              key={index}
            />
          </>
        ) : (
          <Message
            value={item.text}
            inputRange={{ start: item.start, end: item.end }}
            key={index}
          />
        );
      })}
    </AbsoluteFill>
  );
};
