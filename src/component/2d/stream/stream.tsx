import * as React from "react";
import { StreamContainer } from "./styles";

type Props = {};

const Stream = ({}: Props) => {
  const [zoomStream, setZoomStream] = React.useState(false);

  const handleZoom = () => setZoomStream((prevState) => !prevState);

  return (
    <StreamContainer zoomStream={zoomStream}>
      <iframe
        src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button onClick={handleZoom}>{zoomStream ? "-" : "+"}</button>
    </StreamContainer>
  );
};

export default Stream;
