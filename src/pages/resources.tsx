import { Primary } from "@/components/Primary";
import { colors } from "@/config/colors";
import { getLinkSearch } from "@/utils/getLinkSearch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Resource() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [videos, setVideos] = useState<any>();
  const [selected, setSelected] = useState<"Articles" | "Videos" | "">("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as "light" | "dark");
    } else setTheme("light");
  }, []);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  useEffect(() => {
    if (input.length === 0) {
      setVideos(null);
      setSelected("");
    }
  }, [input]);

  return (
    <>
      <div
        className="checkbox-wrapper"
        style={{
          position: "absolute",
          top: 40,
          right: 100,
          zoom: 1.2,
          zIndex: 200,
        }}
      >
        <input
          className="tgl"
          id="darkmode"
          type="checkbox"
          defaultChecked={true}
          checked={theme === "light"}
          onChange={(e) => {
            setTheme(e.currentTarget.checked === false ? "dark" : "light");
            localStorage.setItem(
              "theme",
              e.currentTarget.checked === false ? "dark" : "light"
            );
            console.log(e.currentTarget.checked);
          }}
        />
        <label className="tgl-btn" htmlFor="darkmode">
          <svg
            className="icon icon_sun"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor">
              <g>
                <circle
                  cx="3.08982"
                  cy="6.85502"
                  r="1.71143"
                  transform="rotate(-60 3.08982 6.85502)"
                  fill="currentColor"
                />
                <circle
                  cx="3.0903"
                  cy="17.1436"
                  r="1.71143"
                  transform="rotate(-120 3.0903 17.1436)"
                  fill="currentColor"
                />
                <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
                <circle
                  cx="20.9101"
                  cy="17.1436"
                  r="1.71143"
                  transform="rotate(-60 20.9101 17.1436)"
                  fill="currentColor"
                />
                <circle
                  cx="20.9101"
                  cy="6.8555"
                  r="1.71143"
                  transform="rotate(-120 20.9101 6.8555)"
                  fill="currentColor"
                />
                <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
              </g>
            </circle>
          </svg>
          <svg
            className="icon icon_moon"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 50 50"
          >
            <path
              d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
              fill="currentColor"
            />
          </svg>
        </label>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme === "dark" ? "#1A212D" : "",
          height: !videos ? "100vh" : "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            position: "absolute",
            top: 60,
            left: 80,
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          <i
            className="fa fa-arrow-circle-left fa-3x"
            style={{ color: colors.primary }}
          ></i>
          <h1
            style={{
              color: colors.primary,
              marginLeft: 20,
              marginTop: 0,
            }}
          >
            Back
          </h1>
        </div>
        <h1
          style={{
            fontSize: "3.5vw",
            marginBottom: 0,
            color: theme === "dark" ? "#fff" : "#000",
            marginTop: videos ? "" : -200,
          }}
        >
          Resource Finder
        </h1>
        <p
          style={{
            width: 900,
            textAlign: "center",
            fontSize: "0.9vw",
            color: theme === "dark" ? "#AEAEAF" : "#7F7E7E",
          }}
        >
          The resource finder tool is designed to help students easily discover
          educational videos/articles that align with their academic needs. It
          uses a search algorithm to recommend videos/articles based on the
          student's subject of interest and learning level. The tool also allows
          students to filter videos by duration, and articles by source, making
          it easier to find relevant content quickly.
        </p>
        <h1 style={{ color: colors.primary }}>Teach me about...</h1>
        <input
          type="text"
          style={{
            width: 400,
            borderRadius: 200,
            padding: 10,
            border: "2px solid #eee",
          }}
          placeholder="What do you want to learn about?"
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Call function getLinkSearch
              getLinkSearch(input, setVideos);
            }
          }}
        />
        <div style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
          {videos && (
            <>
              <Primary
                onClick={() => {
                  setSelected("Articles");
                  getLinkSearch("Articles on" + input, setVideos);
                }}
                style={{ width: 200 }}
                title="Articles"
                btnColor={selected === "Articles" ? "#27C392" : colors.primary}
              />
              <Primary
                onClick={() => {
                  setSelected("Videos");
                  getLinkSearch("Videos on" + input, setVideos);
                }}
                title="Videos"
                style={{ width: 200, marginLeft: 40 }}
                btnColor={selected === "Videos" ? "#27C392" : colors.primary}
              />
            </>
          )}
        </div>
        <div className="grids">
          {videos &&
            videos.map((v: any) => {
              console.log(v.pagemap.metatags);
              return (
                <div
                  className="card"
                  style={{
                    width: 400,
                    marginRight: 120,
                    backgroundColor: theme === "dark" ? "#fff" : "",
                  }}
                >
                  <div className="card__imgContainer">
                    <span className="card__imgOverlay">
                      <svg
                        className="card__imgOverlayViewIcon"
                        width="48"
                        height="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h48v48H0z" />
                          <path
                            d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                    <img
                      width="300px"
                      height="300px"
                      src={
                        v.pagemap && v.pagemap.cse_image
                          ? v.pagemap.cse_image[0].src
                          : "/edutoolslogo.png"
                      }
                      alt="Equilibrium Image"
                      className="card__img"
                    />
                  </div>
                  <a
                    href="#emptyLink"
                    className="card__title"
                    style={{ color: colors.primary }}
                    onClick={() => {
                      window.open(v.formattedUrl);
                    }}
                  >
                    {v.title}
                  </a>
                  <p className="card__desc" style={{ color: "gray" }}>
                    {v.snippet}
                  </p>
                  <div className="card__info">
                    <div className="card__date">
                      <i className="fa fa-home"></i>
                      <p className="card__dateText">{v.displayLink}</p>
                    </div>
                  </div>
                  <span className="card__separator"></span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
