import { Composition } from "remotion";
import {
  DURATION_PER_CHARACTER,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { FacelessVideo } from ".";

const sentences = [
  "Having trouble communicating with your grandkid?",
  "Not sure what to ask or say?",
  "Or maybe you’re a bit nervous about using English?",
  "Well, fret not!",
  "Introducing this AI-powered tool",
  "that makes connecting with your grandkids a breeze.",
  "This tool provides you with auto-generated conversation exchanges",
  "perfect to practice and bring into real-life chats!",
  "From casual questions to deeper chats,",
  "it’s all at your fingertips,",
  "helping you grow confident with each interaction.",
  "Connecting has never been this easy.",
  "Give it a try, and start bridging the gap today!",
  "Link in Bio",
];

const hi_sentences = [
  "अपने पोते-पोतियों से बात करने में परेशानी हो रही है?",
  "नहीं जानते कि क्या पूछें या क्या कहें?",
  "या शायद आपको अंग्रेजी का इस्तेमाल करने में थोड़ी झिझक हो रही है?",
  "तो चिंता की कोई बात नहीं!",
  "पेश है यह AI-संचालित टूल",
  "जो आपके पोते-पोतियों से जुड़ना आसान बना देता है।",
  "यह टूल आपको स्वचालित रूप से बने संवाद प्रदान करता है",
  "जो अभ्यास के लिए बेहतरीन हैं और असली बातचीत में लाए जा सकते हैं!",
  "सामान्य सवालों से लेकर गहरी बातों तक,",
  "सब कुछ आपके पास है,",
  "हर बातचीत के साथ आपको आत्मविश्वास से भरता है।",
  "जुड़ना पहले कभी इतना आसान नहीं था।",
  "इसे आज़माएँ और आज ही दूरी को पाटना शुरू करें!",
  "बायो में लिंक",
];

export const FacelessVideoComposition: React.FC = () => {
  const en_durationInFrames =
    sentences.join("").length * DURATION_PER_CHARACTER;
  const hi_durationInFrames =
    hi_sentences.join("").length * DURATION_PER_CHARACTER;

  return (
    <>
      <Composition
        id="en-faceless-video"
        component={FacelessVideo}
        durationInFrames={en_durationInFrames} // durationInFrames * fps = durationInSeconds
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH} // Instagram Reel dimensions
        height={VIDEO_HEIGHT}
        defaultProps={{
          sentences: sentences
        }}
      />
      <Composition
        id="hi-faceless-video"
        component={FacelessVideo}
        durationInFrames={hi_durationInFrames} // durationInFrames * fps = durationInSeconds
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH} // Instagram Reel dimensions
        height={VIDEO_HEIGHT}
        defaultProps={{
          sentences: hi_sentences
        }}
      />
    </>
  );
};
