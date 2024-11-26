import React from "react";
import { Composition } from "remotion";
import AWSCloudPractionerVideo from ".";
import { VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";
import topics from "./constants";

const AWSCloudPractionerComposition = () => {
  return topics.map((topic) => (
    <Composition
      id={topic.id}
      component={AWSCloudPractionerVideo}
      durationInFrames={topic.durationInFrames}
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      defaultProps={{
        sentences: topic.sentences,
        title: topic.title,
        audio: topic.audio,
        image: topic.image,
        bgClasses: topic.bgClasses,
        textColor: topic.textColor,
      }}
    />
  ));
};

export default AWSCloudPractionerComposition;
