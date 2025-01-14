import React, { Component } from "react";
// import { findDOMNode } from 'react-dom'
import ReactPlayer from "../index";
import Duration from "./Duration";
import gsap from "gsap";
import CorrectAnswer from "@/components/common/correct-answer";

class App extends Component {
  state = {
    url: "https://",
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    playingBGAudio: false,
    playingCorrectAudio: false,
    playedSeconds: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    question: 0,
    questionTime: false,
    answerTime: false,
    correctQuestion: false,
    inCorrectQuestion: false,
    points: 0,
    pointsAdded: 80,
    started: false,
    ended: true,
    playAudioClip: false,
    qTime1: 1, //32
    qTime2: 74, //74
    qTime3: 149,
    qTime4: 196,
    qTime5: 210, //210
    questionTitle: "Symbiosis",
    qFeedback: null,
    q0: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
  };
  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };
  handleStart = (episode) => {
    console.log("playing episode 1");
    let url;
    if (episode != 2) {
      url = "./video/video.mp4";
    } else {
      url = "https://youtu.be/laksjfdljasdf";
    }
    gsap.fromTo(".outer-menu", { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 });
    this.setState({ playing: true, started: true, playingBGAudio: true });
    this.load(url);
  };
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  handleStop = () => {
    this.setState({ url: null, playing: false });
  };
  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    );
  };
  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };
  handleTogglePlayAudio = () => {
    this.setState({ playAudioClip: !this.state.playAudioClip });
  };
  handleTogglePlayCorrectAudio = () => {
    this.setState({ playingCorrectAudio: !this.state.playingCorrectAudio });
  };
  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  handleToggleQuestionTime = () => {
    this.setState({ questionTime: !this.state.questionTime });
  };
  handleToggleAnswerTime = () => {
    this.setState({ answerTime: !this.state.answerTime });
  };
  handleToggleCorrectQuestion = () => {
    this.setState({ correctQuestion: !this.state.correctQuestion });
    // CorrectAnswer2()
  };
  handleToggleInCorrectQuestion = () => {
    this.setState({ inCorrectQuestion: !this.state.inCorrectQuestion });
  };
  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };
  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) });
  };
  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };
  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };
  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };
  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };
  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };
  handlePoints = (p) => {
    console.log("AddsPoints");
    this.setState({ points: p });
  };
  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };
  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  handleEnded = () => {
    console.log("onEnded");
    this.setState({ ended: !this.state.ended });
  };
  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };
  // handleClickFullscreen = () => {
  //   screenfull.request(findDOMNode(this.player))
  // }
  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };
  secondsPlayed = () => {
    this.state.playedSeconds;
  };
  handleProgress = (state, handle) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
    // Question Time based on qTime set in state and if the question is the current question.
    if (
      (this.state.playedSeconds > this.state.qTime1) &
        (this.state.question == 0) ||
      (this.state.playedSeconds > this.state.qTime2) &
        (this.state.question == 1) ||
      (this.state.playedSeconds > this.state.qTime3) &
        (this.state.question == 2) ||
      (this.state.playedSeconds > this.state.qTime4) &
        (this.state.question == 3) ||
      (this.state.playedSeconds > this.state.qTime5) &
        (this.state.question == 4)
    ) {
      this.questionTime(2);
    }
  };
  questionTime = (timeAmount) => {
    // gsap.set("#question", {opacity: 0})
    gsap.fromTo("#question", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
    gsap.fromTo(
      "#questionTitle",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "+=1"
    );
    gsap.fromTo(
      ".question",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 },
      "+=.2"
    );
    this.handleToggleQuestionTime();
    this.setState({ question: this.state.question + 1 });

    this.handlePause();
    // this.handleToggleMuted()
    switch (this.state.question) {
      case 1:
        this.setState({
          qFeedback:
            "The anemone does sting the Clownfish. However the clownfishes skin contains a 'mucu's, a slim film that protects the Clownfish from the poison of the Anemone",
          questionTitle:
            "Why are the poisonous tentacles not affecting the Clownfish?",
          q1: "The sea anemone does not sting the clownfish",
          q0: "The clownfish is immune to the poison",
        });
        break;
      case 2:
        this.setState({
          qFeedback:
            "Clownfish all begin life as male, but can all carry both female and male reproductive organs. In any given community, the female is the largest fish, the breeding male is the second-largest and the rest are sexually immature males. These immature males can turn into females if the alpha female dies.",
          questionTitle: "How did she became the boss?",
          q0: "She is the boss because she is the oldest",
          q1: "The former male leader died",
        });
        break;
      case 3:
        this.setState({
          qFeedback: "Oh crab! Its a perfect home for something else...",
          questionTitle: "Is the shell suitable to lay the eggs?",
          q0: "No",
          q1: "Yes",
        });
        break;
      case 4:
        this.setState({
          qFeedback:
            "Over 300 million tonnes of plastic are produced each year, and eight million tonnes of that ends up clogging our oceans.",
          questionTitle: "Is the plastic bottle suitable?",
          q0: "No",
          q1: "Yes",
        });
        break;
      case 5:
        this.setState({
          qFeedback:
            "Symbiosis is any type of a close and long-term biological interaction between two different biological organisms, be it mutualistic, commensalistic, or parasitic.",
          questionTitle:
            "What type of symbiosis do clownfish have with the Sea Anemone?",
          q2: "Commensalism",
          q1: "Parasitism",
          q0: "Mutualism",
        });
        break;
      default:
        this.setState({
          questionTitle: "",
          q1: "The sea anemone does not sting the clownfish",
          q0: "The clownfish is immune to the poison",
        });
    }
  };
  answerQuestion = (q) => {
    gsap.to("#question", { opacity: 0, scale: 1.1, duration: 1 })
    this.toggleAnswerTime
    // this.handleToggleMuted()
    if (!q) {
      // switch(this.state.question) {
      //   case 1: this.player.seekTo(this.state.qTime1)
      //   case 2: this.player.seekTo(this.state.qTime2)
      //   case 3: this.player.seekTo(this.state.qTime3)
      //   case 4: this.player.seekTo(this.state.qTime4)
      // }
      this.handleToggleInCorrectQuestion()
      gsap.set("#questionAnswer", { display: "block" })
      gsap.set("#incorrect", {
        visibility: "visible",
        display: "fixed",
        opacity: 0,
      })
      gsap.to("#incorrect", { opacity: 1, duration: 2, delay: 1 })
      gsap.to("#incorrect", { opacity: 0, duration: 1, delay: 10 })
      gsap.set("#incorrect", { visibility: "hidden", delay: 11 })
      // // Not correct answer
      gsap.delayedCall(10, this.handlePlayPause)
      gsap.delayedCall(11, this.handleToggleQuestionTime)
      gsap.set("#questionAnswer", { display: "hidden" })
    } else {
      // Correct Answer
      // let tl = gsap.timeline()
      // tl.counter(".points", {end:this.state.points + this.state.pointsAdded, ease:"linear"}, "-=0.5")
      this.setState({ points: this.state.points + this.state.pointsAdded }) //Add points
      // this.player.seekTo(parseFloat(e.target.value))
      this.audioBlock2.seekTo(0)
      gsap.delayedCall(2, this.handleTogglePlayCorrectAudio)
      this.handleToggleCorrectQuestion()

      gsap.set("#questionAnswer", { display: "block" })
      gsap.set("#correct", { visibility: "visible", opacity: 0 })
      gsap.to("#correct", { opacity: 1, duration: 2, delay: 1 })
      gsap.to("#correct", { opacity: 0, duration: 1, delay: 4 })
      gsap.set("#correct", { visibility: "hidden", delay: 6 })
      this.handlePlayPause()
      gsap.set("#questionAnswer", { display: "none", delay: 8 },
                                  { opacity: 0, duration: 1, delay: 4 })
      this.handleToggleQuestionTime()
    }
  };
  
  ref = (player) => {
    this.player = player;
  };
  ref2 = (audioBlock) => {
    this.audioBlock = audioBlock;
  };
  ref3 = (audioBlock2) => {
    this.audioBlock2 = audioBlock2;
  };

  render() {
    const {
      url,
      playAudioClip,
      qFeedback,
      playingBGAudio,
      playingCorrectAudio,
      ended,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
      questionTime,
      answerTime,
      questionTitle,
      points,
      pointsAdded,
      question,
      q0,
      q1,
      q2,
      q3,
      q4,
      q5,
      started,
    } = this.state;
    const SEPARATOR = " · ";

    return (
      <div className="app">
        {/* POINTS */}
        
        {/* <Lottie animationData={onScoreAdded} style={{height: '100vh', width:'100vw', position:'fixed', left: '50%', top:'0', transform: `translate(-50%, 0)`, PointerEvent:'none'}} /> */}
        <div className="w-full fixed top-0 left-0 h-full pointer-events-none">
          <div className="section-container flex">
            <h2
              className={`${
                points == 0 ? "block" : "block"
              } text-white text-2xl font-semibold relative left-14 top-9`}
            >
              {points}
            </h2>
          </div>
        </div>
        <div
          id="questionAnswer"
          className={`${
            questionTime == true ? "block" : "hidden"} overlay`}
        >
          <h2
            id='questionTitle'
            className="text-white text-center font-bold text-3xl mt-6 relative z-50 p-8"
          >
            {questionTitle}
          </h2>
          <div
            className={`${
              Math.floor(Math.random() * 2) == 1
                ? 'flex-col-reverse md:flex-row-reverse'
                : 'flex-col md:flex-row'
            }`}
          >
            <button
              className={`${
                q0 != null ? 'block' : 'hidden'
              } py-2 question question0 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(true)}
            >
              {q0}
            </button>
            <button
              className={`${
                q1 != null ? "block" : "hidden"
              } py-2 question question1 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(false)}
            >
              {q1}
            </button>
            <button
              className={`${
                q2 != null ? "block" : "hidden"
              } py-2 question question2 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(false)}
            >
              {q2}
            </button>
            <button
              className={`${
                q3 != null ? "block" : "hidden"
              } py-2 question question3 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(false)}
            >
              {q3}
            </button>
            <button
              className={`${
                q4 != null ? "block" : "hidden"
              } py-2 question question4 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(false)}
            >
              {q4}
            </button>
            <button
              className={`${
                q5 != null ? "block" : "hidden"
              } py-2 question question5 px-7 font-medium border-2 border-white background-white rounded-md text-base w-fit
                md:text-xl tracking-wide duration-300 z-50 link`}
              onClick={() => this.answerQuestion(false)}
            >
              {q5}
            </button>
          </div>
        </div>
        <div className={`${answerTime ? "fixed" : "hidden"} absolute overlay`}>
          <div
            id="correct"
            className="invisible pointer-events-none fixed overlay"
          >
            <div>
              <h2 className="text-white animate-pulse text-5xl">
                You are correct 🐠🐠
              </h2>
              <h3 className="text-3xl text-white center mt-5 animate-pulse">
                +<span className="points">{pointsAdded}</span> points
              </h3>
            </div>
          </div>
          <div
            id="incorrect"
            className="invisible pointer-events-none fixed overlay"
          >
            <div className="flex-col">
              <h2 className="text-white animate-pulse text-5xl">
                Oops! not correct
              </h2>
              <p className="text-white w-96 mt-9">{qFeedback}</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1
            className={`${
              started ? "hidden" : "block"
            } text-white text-center font-bold text-5xl z-50`}
          >
            Symbiosis
          </h1>
          <p className={`${started ? "hidden" : "block"} mt-9`}>
            Symbiosis is the connection between different species.
            <br />
            In this small quiz a team of Clownfish will have to work together
            with a Sea Anemone for their survival.
            <br />
            Become the master of Symbiosis by answering the correct questions.
          </p>
          <div className={`${started ? "hidden" : "block"} mt-20 flex-1`}>
            <a onClick={() => this.handleStart(1)} className="link">
              <button
                className="py-2 px-7 font-medium border-2 uppercase border-white bg-white rounded-md text-base text-black
              md:text-xl tracking-wide duration-300 z-50 link"
                onClick={() => this.handleStart(1)}
              >
                Start
              </button>
            </a>
          </div>
          {/* When the thing ends */}
          <div className={`${ended ? "hidden" : "block"} mt-20 flex-1`}>
            <h1 className="text-white text-center font-bold text-5xl relative z-50 mt-20">
              Completed Symbiosis
            </h1>
            <h2 className="text-white mt-8 text-3xl">With a total of</h2>
            <h2 className="text-white animate-pulse mt-8 font-bold text-5xl">
              {points}
            </h2>
            <span className="text-base mb-20 uppercase">points</span>
            <p className="my-9">
              To enhance the experience I would love your feedback. Please share
              ❤️️.
            </p>
            <a
              href={"https://forms.gle/PPLoJFJanmvxTFeBA"}
              target={"_blank"}
              rel="noreferrer"
              className="link"
            >
              <button
                className="py-2 px-7 font-medium border-2 uppercase border-white bg-white rounded-md text-base text-black
              md:text-xl tracking-wide duration-300 z-50 link"
              >
                Send feedback
              </button>
            </a>
          </div>
          {/* <p className="text-white">{playedSeconds}</p> */}
        </div>

        <div className="hidden">
          <table>
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={this.handleStop}>Stop</button>
                  <button onClick={this.handlePlayPause}>
                    {playing ? "Pause" : "Play"}
                  </button>
                  <button onClick={this.handleClickFullscreen}>
                    Fullscreen
                  </button>
                  {light && (
                    <button onClick={() => this.player.showPreview()}>
                      Show preview
                    </button>
                  )}
                  {ReactPlayer.canEnablePIP(url) && (
                    <button onClick={this.handleTogglePIP}>
                      {pip ? "Disable PiP" : "Enable PiP"}
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <button onClick={this.handleSetPlaybackRate} value={1}>
                    1x
                  </button>
                  <button onClick={this.handleSetPlaybackRate} value={1.5}>
                    1.5x
                  </button>
                  <button onClick={this.handleSetPlaybackRate} value={2}>
                    2x
                  </button>
                </td>
              </tr>
              <tr>
                <th>Seek</th>
                <td>
                  <input
                    type="range"
                    min={0}
                    max={0.999999}
                    step="any"
                    value={played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                  />
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={volume}
                    onChange={this.handleVolumeChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="controls">Controls</label>
                </th>
                <td>
                  <input
                    id="controls"
                    type="checkbox"
                    checked={controls}
                    onChange={this.handleToggleControls}
                  />
                  <em>&nbsp; Requires player reload</em>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="muted">Muted</label>
                </th>
                <td>
                  <input
                    id="muted"
                    type="checkbox"
                    checked={muted}
                    onChange={this.handleToggleMuted}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="loop">Loop</label>
                </th>
                <td>
                  <input
                    id="loop"
                    type="checkbox"
                    checked={loop}
                    onChange={this.handleToggleLoop}
                  />
                </td>
              </tr>
              <tr>
                <th>Played</th>
                <td>
                  <progress max={1} value={played} />
                </td>
              </tr>
              <tr>
                <th>Loaded</th>
                <td>
                  <progress max={1} value={loaded} />
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>questionTime</th>
                <td>{questionTime ? "true" : "false"}</td>
              </tr>
              <tr>
                <th>question</th>
                <td>{question}</td>
              </tr>
              <tr>
                <th>url</th>
                <td className={!url ? "faded" : ""}>
                  {(url instanceof Array ? "Multiple" : url) || "null"}
                </td>
              </tr>
              <tr>
                <th>playing</th>
                <td>{playing ? "true" : "false"}</td>
              </tr>
              <tr>
                <th>volume</th>
                <td>{volume.toFixed(3)}</td>
              </tr>
              <tr>
                <th>speed</th>
                <td>{playbackRate}</td>
              </tr>
              <tr>
                <th>played</th>
                <td>{played.toFixed(3)}</td>
              </tr>
              <tr>
                <th>loaded</th>
                <td>{loaded.toFixed(3)}</td>
              </tr>
              <tr>
                <th>duration</th>
                <td>
                  <Duration seconds={duration} />
                </td>
              </tr>
              <tr>
                <th>elapsed</th>
                <td>
                  <Duration seconds={duration * played} />
                </td>
              </tr>
              <tr>
                <th>remaining</th>
                <td>
                  <Duration seconds={duration * (1 - played)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="player-wrapper absolute pointer-events-none h-screen w-screen -z-1 left-0 top-0">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log("onBuffer")}
            onPlaybackRateChange={this.handleOnPlaybackRateChange}
            onSeek={(e) => console.log("onSeek", e)}
            onEnded={this.handleEnded}
            onError={(e) => console.log("onError", e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
            resizeMode="cover"
          />
                  {/* AUDIO */}
        <ReactPlayer
          ref={this.ref3}
          url="./audio/ambient.wav"
          playing={playingBGAudio}
          loop={true}
          controls={false}
          className="hidden"
          volume={0.5}
        />
        <ReactPlayer
          url="./audio/correct.wav"
          ref={this.ref3}
          playing={playingCorrectAudio}
          loop={false}
          controls={false}
          className="hidden"
          volume={1}
        />
        <ReactPlayer
          ref={this.ref2}
          url="./audio/water.wav"
          playing={playAudioClip}
          loop={true}
          controls={false}
          volume={0.2}
          className="hidden"
        />
        </div>
      </div>
    );
  }
}

export default App;
