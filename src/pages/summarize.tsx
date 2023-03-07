import { Primary } from "@/components/Primary";
import { colors } from "@/config/colors";
import { getSummarizedText } from "@/utils/getSummarizedText";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Summarizer() {
  const router = useRouter();
  const [summary, setSummary] = useState<any>();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [text, setText] = useState("");
  const [summaryPercent, setSummaryPercent] = useState<
    "short" | "medium" | "long"
  >("medium");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log(summary, text);
  }, [summary]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as "light" | "dark");
    } else setTheme("light");
  }, []);

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme === "dark" ? "#1A212D" : "",
          height: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "3.5vw",
            marginBottom: 0,
            marginTop: -60,
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          Notes Summarizer
        </h1>
        <p
          style={{
            width: 900,
            textAlign: "center",
            fontSize: "0.9vw",
            color: theme === "dark" ? "#AEAEAF" : "#7F7E7E",
          }}
        >
          The notes summarizer tool is a cutting-edge AI-powered software that
          streamlines the process of summarizing lengthy lecture notes. It uses
          advanced natural language processing algorithms to identify key themes
          and concepts within the text, and condenses the information into clear
          and concise summaries. This tool can save students and professionals
          countless hours of work, allowing them to quickly review the most
          important information from their notes. With its intuitive interface
          and powerful technology, the notes summarizer is the ultimate
          productivity tool for anyone looking to optimize their note-taking
          process.
        </p>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "27%",
          }}
        >
          {summary && (
            <>
              {" "}
              <Primary
                onClick={() => {
                  setSummaryPercent("short");
                  getSummarizedText(20, text.replace(/\n/g, " "), setSummary);
                  setCopied(false);
                }}
                style={{ marginRight: 20 }}
                btnColor={
                  summaryPercent === "short" ? "#27C392" : colors.primary
                }
                title="Short"
              />
              <Primary
                btnColor={
                  summaryPercent === "medium" ? "#27C392" : colors.primary
                }
                onClick={() => {
                  setSummaryPercent("medium");
                  getSummarizedText(50, text.replace(/\n/g, " "), setSummary);
                  setCopied(false);
                }}
                title="Medium"
              />
              <Primary
                onClick={() => {
                  setSummaryPercent("long");
                  getSummarizedText(80, text.replace(/\n/g, " "), setSummary);

                  setCopied(false);
                }}
                btnColor={
                  summaryPercent === "long" ? "#27C392" : colors.primary
                }
                style={{ marginLeft: 20 }}
                title="Long"
              />
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <textarea
            className="textarea"
            placeholder="Copy Your Lecture Here..."
            style={{ width: 400, height: 300, resize: "none" }}
            onChange={(e) => {
              setText(e.currentTarget.value);
            }}
          ></textarea>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 20,
              backgroundColor: text.length === 0 ? "gray" : "#3461E1",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: text.length === 0 ? "not-allowed" : "pointer",
              marginLeft: 40,
            }}
            onClick={() =>
              getSummarizedText(50, text.replace(/\n/g, " "), setSummary)
            }
          >
            <i
              className="fa fa-arrow-right fa-2x"
              style={{ color: "#fff" }}
            ></i>
          </div>

          <ul
            style={{
              marginLeft: 10,
              maxHeight: 260,
              overflowY: "scroll",
              scrollbarColor: "#000",
            }}
          >
            {summary ? (
              summary.sentences.map((s: any) => (
                <li
                  key={s}
                  style={{
                    maxWidth: 400,
                    color: theme === "dark" ? "#AEAEAF" : "#7F7E7E",
                  }}
                >
                  {s}
                </li>
              ))
            ) : (
              <li style={{ color: theme === "dark" ? "#AEAEAF" : "#7F7E7E" }}>
                {" "}
                Click the button once you have your notes loaded.
              </li>
            )}
          </ul>
          {summary ? (
            <div style={{ position: "absolute", right: 380 }}>
              <i
                className="fa fa-clipboard fa-2x"
                onClick={() => {
                  setCopied(true);
                  navigator.clipboard.writeText(summary.summary);
                }}
                style={{
                  color: copied === true ? "#27C392" : colors.primary,
                  marginLeft: 40,
                  cursor: "pointer",
                }}
              />
              {copied && (
                <p style={{ marginLeft: 33, color: "#27C392" }}>Copied!</p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
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
      </div>
    </>
  );
}
