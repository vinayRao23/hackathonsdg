import Lottie from "react-lottie";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import Typed from "react-typed";
import { colors } from "@/config/colors";
import { Primary } from "@/components/Primary";
import { useRouter } from "next/router";
import { getLottieFileOptions } from "@/utils/getLottieFileOptions";
import animationData from "../../public/92377-quiz-mode.json";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as "light" | "dark");
    } else setTheme("light");
  }, []);

  if (typeof localStorage !== undefined)
    return (
      <>
        <div
          className="split left"
          style={{ backgroundColor: theme === "dark" ? "#1A212D" : "" }}
        >
          <Navigation />
          <div className="centered" style={{ marginTop: 0 }}>
            <div
              className="centered"
              style={{
                flexDirection: "column",
                display: "flex",
                width: "40vw",
              }}
            >
              <h1
                style={{
                  textAlign: "left",
                  fontSize: "4vw",
                  letterSpacing: 1.2,
                  width: 1000,
                  color: theme === "dark" ? "#fff" : "#000",
                }}
              >
                A Website Designed for
                <br />{" "}
                <Typed
                  strings={[
                    "Summarizing Long Notes.",
                    "Finding Educational Articles.",
                    "Giving You Informative Videos.",
                  ]}
                  typeSpeed={55}
                  backSpeed={50}
                  loop
                  style={{ color: colors.primary }}
                />
              </h1>
              <p
                style={{
                  textAlign: "left",
                  color: theme === "dark" ? "#AEAEAF" : "#7F7E7E",
                  fontSize: "1vw",
                  letterSpacing: 0.5,
                  marginTop: -30,
                }}
                id="desc"
              >
                Introducing our study website, designed to make learning easier
                and more efficient. With our notes summarization tool, you can
                quickly create condensed versions of your study materials. Our
                resource finder makes it simple to locate educational videos and
                articles. Whether you're studying for exams or just looking to
                expand your knowledge, our website has everything you need to
                succeed.
              </p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Primary
                  onClick={() => {
                    router.push("/summarize");
                  }}
                  title="Notes Summarizer"
                />
                <Primary
                  style={{ marginLeft: 20 }}
                  onClick={() => {
                    router.push("/resources");
                  }}
                  btnColor="#27C392"
                  title="Resource Finder"
                />
              </div>
              <p
                style={{
                  textAlign: "left",
                  color: theme === "dark" ? "#AEAEAF" : "#7F7E7E",
                  fontSize: 20,
                  letterSpacing: 0.5,
                  top: 30,
                  position: "relative",
                }}
              >
                Created By:{" "}
                <a
                  href="https://www.instagram.com/nikhil23rao/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Nikhil Rao,
                </a>{" "}
                <a
                  href="https://www.instagram.com/vinayrao1061"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Vinay Rao,
                </a>{" "}
                <a
                  href="https://www.instagram.com/vinayrao1061"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Abhinav Shah,
                </a>{" "}
                <a
                  href="https://www.instagram.com/vinayrao1061"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Ria Poluru
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="split right"
          style={{ backgroundColor: theme === "dark" ? "#1A212D" : "" }}
        >
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
                <circle
                  cx="11.9998"
                  cy="11.9998"
                  r="5.75375"
                  fill="currentColor"
                >
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
                    <circle
                      cx="12"
                      cy="22.2881"
                      r="1.71143"
                      fill="currentColor"
                    />
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
                    <circle
                      cx="12"
                      cy="1.71143"
                      r="1.71143"
                      fill="currentColor"
                    />
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
            style={{ position: "relative", marginLeft: -100 }}
            id="herolottie"
          >
            <Lottie
              options={getLottieFileOptions(animationData)}
              height={770}
              width={770}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </>
    );
}
