import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import VideoFile from "../assets/image/Video.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="video">
      <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
        <video
          ref={videoRef}
          src={VideoFile}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* Centered Play/Pause Button */}
        <IconButton
          onClick={togglePlayback}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#fff",
            width: 64,
            height: 64,
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            cursor: "pointer"
          }}>
          {isPlaying ? (
            <PauseIcon fontSize="large" />
          ) : (
            <PlayArrowIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
    </section>
  );
};

export default VideoSection;
