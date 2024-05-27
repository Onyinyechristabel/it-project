/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect } from "react";

import OpenAI from "openai";
import { useContext, useState } from "react";
import { Context } from "./Context";

let $prev = 1;
let $current = 1;
let $next = 2;
function Next(current, next) {
  $prev = current ?? 1;
  $current = next ?? 2;
  $next = Math.max(next + 1, 5) ?? 3;
  const element = document.querySelector(`.hero__qa:nth-of-type(${current})`);
  const main = document.querySelector(`.hero__qa:nth-of-type(${next})`);
  element.classList.add("hide");
  main.classList.remove("hide");
}

function IndexHTML() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const [learnt, setLearnt] = useState("");
  const [skills, setSkills] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <main className="hero">
      <div className="hero__qa">
        <h1 className="hero__question">
          What did you learn in your IT workplace?*
        </h1>
        <input
          type="text"
          className="hero__answer"
          placeholder="Type your answer here..."
          value={learnt}
          onChange={(e) => setLearnt(e.target.value)}
        />

        <button className="hero__btn" onClick={() => Next(1, 2)}>
          OK &#10003;
        </button>
      </div>

      <div className="hero__qa hide">
        <h1 className="hero__question">
          What other skill do you have relating to the field?*
        </h1>
        <input
          type="text"
          className="hero__answer"
          placeholder="Type your answer here..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button className="hero__btn" onClick={() => Next(2, 3)}>
          OK &#10003;
        </button>
      </div>

      <div className="hero__qa hide">
        <h1 className="hero__question">
          How long do you want to spend on the project?*
        </h1>
        <input
          type="text"
          className="hero__answer"
          placeholder="Type your answer here..."
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <button className="hero__btn" onClick={() => Next(3, 4)}>
          OK &#10003;
        </button>
      </div>
      <div className="hero__qa hide">
        <h1 className="hero__question">
          If 0 is very serious and 5 is very playful, How will you scale the
          seriousness or playfulness of the project*
        </h1>
        <div className="hero__class__Wrapper">
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a very serious project. straight to the point. Less than 100 words`
              );
            }}
          >
            0
          </button>
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a serious project. straight to the point. Less than 100 words`
              );
            }}
          >
            1
          </button>
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a bit serious project. straight to the point. Less than 100 words`
              );
            }}
          >
            2
          </button>
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a bit playful project. straight to the point. Less than 100 words`
              );
            }}
          >
            3
          </button>
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a playful project. straight to the point. Less than 100 words`
              );
            }}
          >
            4
          </button>
          <button
            className="hero__class"
            onClick={() => {
              Next(4, 5);
              onSent(
                `Recommend an IT project for someone who learnt ${learnt} in his IT place, has some other skills like ${duration}, wants to spend ${duration} duration on the project and wants a very playful project. straight to the point. Less than 100 words`
              );
            }}
          >
            5
          </button>
        </div>
      </div>

      <div id="answer" className="hero__qa hide">
        <h1 className="recommendations">Project Idea</h1>
        <h2
          className="recommendations__details"
          dangerouslySetInnerHTML={{
            __html: loading ? "We're curating one for you..." : resultData,
          }}
        ></h2>
      </div>

      <div className="hero__footer">
        <button className="hero__footer__btnname">Made by Onyinye</button>
      </div>
    </main>
  );
}

export default IndexHTML;
