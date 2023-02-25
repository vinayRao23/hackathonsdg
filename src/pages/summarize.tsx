import { Primary } from "@/components/Primary";
import { colors } from "@/config/colors";
import { getSummarizedText } from "@/utils/getSummarizedText";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Summarizer() {
  const router = useRouter();
  const [summary, setSummary] = useState<any>();
  const [text, setText] = useState("");
  const [summaryPercent, setSummaryPercent] = useState<
    "short" | "medium" | "long"
  >("medium");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log(summary, text);
  }, [summary]);

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
        <h1 style={{ fontSize: "3.5vw", marginBottom: 0 }}>Notes Summarizer</h1>
        <p
          style={{
            width: 900,
            textAlign: "center",
            fontSize: "0.9vw",
            color: "gray",
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
                }}
                title="Medium"
              />
              <Primary
                onClick={() => {
                  setSummaryPercent("long");
                  getSummarizedText(80, text.replace(/\n/g, " "), setSummary);
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
              backgroundColor: text.length === 0 ? "gray" : "#000",
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

          <ul style={{ marginLeft: 10, maxHeight: 260, overflowY: "scroll" }}>
            {summary ? (
              summary.sentences.map((s: any) => (
                <li style={{ maxWidth: 400 }}>{s}</li>
              ))
            ) : (
              <li>Click the button once you have your notes loaded.</li>
            )}
          </ul>
          {/* {summary ? (
            <Primary
              title={copied === true ? "Copied!" : "Copy to Clipboard"}
              onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText(summary);
              }}
              style={{ width: "40%" }}
              btnColor={copied === true ? "green" : colors.primary}
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </>
  );
}
