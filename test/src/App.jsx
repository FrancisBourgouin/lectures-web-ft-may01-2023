import { useEffect, useRef, useState } from "react";
import "./App.css";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors } from "@mediapipe/drawing_utils";
import {
  FACEMESH_TESSELATION,
  FACEMESH_RIGHT_EYE,
  FACEMESH_LEFT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_FACE_OVAL,
  FACEMESH_LIPS,
  FACEMESH_LEFT_IRIS,
  FACEMESH_RIGHT_IRIS,
} from "@mediapipe/face_mesh";

function App() {
  const webcamRef = useRef();
  const faceMeshRef = useRef();
  const canvasRef = useRef();

  const [isWebcamLoaded, setIsWebcamLoaded] = useState(false);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  function onResults(results) {
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {
          color: "#C0C0C070",
          lineWidth: 1,
        });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, { color: "#FF3030" });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {
          color: "#FF3030",
        });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, { color: "#FF3030" });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, { color: "#30FF30" });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {
          color: "#30FF30",
        });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, { color: "#30FF30" });
        drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, { color: "#E0E0E0" });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: "#E0E0E0" });
      }
    }
    canvasCtx.restore();
  }

  useEffect(() => {
    if (isWebcamLoaded) {
      console.log(webcamRef.current);
      webcamRef.current.video.crossOrigin = "anonymous";

      console.log("starting!");

      const faceMesh = new FaceMesh({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
        },
      });
      faceMeshRef.current = faceMesh;

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
      faceMesh.onResults(onResults);

      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 1280,
        height: 720,
      });

      camera.start();
    }
  }, [isWebcamLoaded]);

  return (
    <>
      {/* <button onClick={camera.start}>Start</button> */}
      <Webcam
        height={720}
        width={1280}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
        onUserMedia={() => {
          console.log("webcamRef.current", webcamRef.current);
          setIsWebcamLoaded(true);
        }}
      />
      <button onClick={() => setIsWebcamLoaded(true)}>Yeah</button>
      <canvas width="1280" height="720" ref={canvasRef}></canvas>
    </>
  );
}

export default App;
