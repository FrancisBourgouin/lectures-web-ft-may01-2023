import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const loadVisionModel = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  const faceLandmarker = FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
  });

  return faceLandmarker;
};

const runModel = (faceLandmarker, webcamRef, faceModifier) => {
  let lastVideoTime = -1;
  let nowInMs = Date.now();
  const video = webcamRef.current.video;

  if (video.currentTime !== lastVideoTime) {
    const faceLandmarkerResult = faceLandmarker.detectForVideo(video, nowInMs);
    // console.log(faceLandmarkerResult);

    const jaw =
      faceLandmarkerResult.faceBlendshapes[0] &&
      faceLandmarkerResult.faceBlendshapes[0].categories.find(
        (shape) => shape.categoryName === "jawOpen"
      );
    const eye =
      faceLandmarkerResult.faceBlendshapes[0] &&
      faceLandmarkerResult.faceBlendshapes[0].categories.find(
        (shape) => shape.categoryName === "eyeBlinkLeft"
      );
    console.log(jaw);
    jaw && eye && faceModifier(jaw.score, eye.score);
    lastVideoTime = video.currentTime;
  }

  requestAnimationFrame(() => {
    runModel(faceLandmarker, webcamRef, faceModifier);
  });
};

function App() {
  const [isWebcamReady, setIsWebcamReady] = useState(false);
  const [visionModel, setVisionModel] = useState(null);
  const [isModelRunning, setIsModelRunning] = useState(false);
  const [jawMultiplier, setJawMultiplier] = useState(0);
  const [eyeMultiplier, setEyeMultiplier] = useState(0);
  const webcamRef = useRef();

  const loadModel = async () => {
    const faceLandmarker = await loadVisionModel();

    setVisionModel(faceLandmarker);
  };

  const faceModifier = (jaw, eye) => {
    setJawMultiplier(jaw);
    setEyeMultiplier(eye);
  };

  const run = () => runModel(visionModel, webcamRef, faceModifier);

  console.log(webcamRef.current);

  const jawSize = `calc(1vmin + ${jawMultiplier} * 12vmin)`;
  const eyeSize = `calc(8vmin - ${eyeMultiplier} * 7vmin)`;

  return (
    <>
      <header>
        <h1>Super Face Recognition!</h1>
      </header>
      <section className="face">
        <div className="leftEye" style={{ height: eyeSize }}></div>
        <div className="rightEye" style={{ height: eyeSize }}></div>
        <div className="nose"></div>
        <div className="mouth" style={{ height: jawSize }}></div>
      </section>
      <section>
        <h1>Webcam</h1>
        <Webcam
          ref={webcamRef}
          height={400}
          videoConstraints={{ height: 400, facingMode: "user" }}
          onUserMedia={() => setIsWebcamReady(true)}
        />
      </section>
      <section>
        <h1>Controls</h1>
        {!isWebcamReady && <button disabled>Webcam Loading...</button>}
        {isWebcamReady && <button disabled>Webcam Ready</button>}

        {!visionModel && <button onClick={loadModel}>Load Model</button>}
        {visionModel && <button disabled>Model Ready</button>}

        {!isModelRunning && <button onClick={run}>Start Model</button>}
        {isModelRunning && <button disabled>Model Running...</button>}
      </section>
    </>
  );
}

export default App;
