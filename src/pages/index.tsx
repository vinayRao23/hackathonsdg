import Head from "next/head";
import Lottie from "react-lottie";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Navigation } from "@/components/Navigation";
import Typed from "react-typed";
import { colors } from "@/config/colors";
import { Primary } from "@/components/Primary";
import { useRouter } from "next/router";
import { getLottieFileOptions } from "@/utils/getLottieFileOptions";
import animationData from "../../public/92377-quiz-mode.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="split left">
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
              }}
            >
              A Website Designed for
              <br />{" "}
              <Typed
                strings={[
                  "Summarizing Long Notes.",
                  "Giving You Educative Videos.",
                  "Finding Educational Articles.",
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
                color: "#7F7E7E",
                fontSize: "1vw",
                letterSpacing: 0.5,
                marginTop: -30,
              }}
              id="desc"
            >
              Introducing our comprehensive study website, designed to make
              learning easier and more efficient. With our notes summarization
              tool, you can quickly create condensed versions of your study
              materials. Our video finder makes it simple to locate educational
              videos on a range of topics, while our article summarizer
              generates quick summaries of lengthy articles. Whether you're
              studying for exams or just looking to expand your knowledge, our
              website has everything you need to succeed.
            </p>
            <Primary
              onClick={() => {
                router.push("/summarize");
              }}
              title="Get Started"
            />
            <p
              style={{
                textAlign: "left",
                color: "#7F7E7E",
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
      <div className="split right">
        <div style={{ position: "relative", marginLeft: -100 }} id="herolottie">
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
