import { getYoutubeSearch } from "@/utils/getYoutubeSearch";
import { useEffect } from "react";

export default function Video() {
  useEffect(() => {
    getYoutubeSearch("NhoItAlls");
  }, []);

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "3.5vw", marginBottom: 0 }}>Video Finder</h1>
        <p
          style={{
            width: 900,
            textAlign: "center",
            fontSize: "0.9vw",
            color: "gray",
          }}
        >
          The video finder tool is designed to help students easily discover
          educational videos that align with their academic needs. It uses a
          search algorithm to recommend videos based on the student's subject of
          interest and learning level. The tool also allows students to filter
          videos by duration, and source, making it easier to find relevant
          content quickly.
        </p>
      </div>
    </>
  );
}
