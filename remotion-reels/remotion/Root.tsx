import AWSCloudPractionerComposition from "./AWSCloudPractioner/Composition";
import { FacelessVideoComposition } from "./FacelessVideo/Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <FacelessVideoComposition />
      <AWSCloudPractionerComposition />
    </>
  );
};
