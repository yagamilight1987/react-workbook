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

const ka_sentences = [
  "ನಿಮ್ಮ ಮೊಮ್ಮಕ್ಕಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ತೊಂದರೆಯಾಗುತ್ತಿದೆಯೇ?",
  "ಏನು ಕೇಳುವುದು ಅಥವಾ ಏನು ಹೇಳುವುದು ಎಂದು ತಿಳಿದಿಲ್ಲವೇ?",
  "ಅಥವಾ ನೀವು ಇಂಗ್ಲಿಷ್ ಬಳಸುವಲ್ಲಿ ಸ್ವಲ್ಪ ನერვಸ್ ಆಗಿದ್ದೀರಾ?",
  "ಹಾಗಾದರೆ ಚಿಂತಿಸಬೇಡಿ!",
  "ಈ AI ಶಕ್ತಿಯುತ ಸಾಧನವನ್ನು ಪರಿಚಯಿಸುತ್ತಿದ್ದೇವೆ",
  "ನಿಮ್ಮ ಮೊಮ್ಮಕ್ಕಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುವುದನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.",
  "ಈ ಸಾಧನವು ನಿಮ್ಮಿಗೆ ಸ್ವಯಂ-ರಚಿತ ಸಂಭಾಷಣೆ ವಿನಿಮಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ",
  "ಅಭ್ಯಾಸ ಮಾಡಲು ಮತ್ತು ನಿಜ ಜೀವನದ ಚರ್ಚೆಗಳಲ್ಲಿ ತರುವುದಕ್ಕೆ ಪರ್ಫೆಕ್ಟ್!",
  "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಂದ ಆಳವಾದ ಚರ್ಚೆಗಳವರೆಗೆ,",
  "ಇವೆಲ್ಲವೂ ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ ಇರುತ್ತದೆ,",
  "ಪ್ರತಿ ಸಂವಹನದೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಆತ್ಮವಿಶ್ವಾಸಿ ಮಾಡುತ್ತದೆ.",
  "ಸಂಪರ್ಕಿಸುವುದು ಇಷ್ಟು ಸುಲಭವಾಗಿ ಇರುತ್ತದೆ.",
  "ಒಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ, ಇಂದು ಅಂತರವನ್ನು ಹತ್ತಿರಗೊಳ್ಳಿಸಲು ಪ್ರಾರಂಭಿಸಿ!",
  "ಬಯೋದಲ್ಲಿ ಲಿಂಕ್",
];

export const FacelessVideoComposition: React.FC = () => {
  const en_durationInFrames =
    sentences.join("").length * DURATION_PER_CHARACTER;

  const hi_durationInFrames =
    hi_sentences.join("").length * DURATION_PER_CHARACTER;

  const ka_durationInFrames =
    ka_sentences.join("").length * DURATION_PER_CHARACTER;

  return (
    <>
      <Composition
        id="en-faceless-video"
        component={FacelessVideo}
        durationInFrames={en_durationInFrames}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          sentences: sentences,
        }}
      />
      <Composition
        id="hi-faceless-video"
        component={FacelessVideo}
        durationInFrames={hi_durationInFrames}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          sentences: hi_sentences,
        }}
      />
      <Composition
        id="ka-faceless-video"
        component={FacelessVideo}
        durationInFrames={ka_durationInFrames}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          sentences: ka_sentences,
        }}
      />
    </>
  );
};
