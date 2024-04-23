import React, { useEffect, useState } from "react";

import AudioPlayer from './components/AudioPlayer';
import AudioTranscript from "./components/AudioTranscript"
// import Search from "./components/Search";
import Speakers from "./components/Speakers"

import './index.css'; // Import your styles

function App() {
  const [audio, setAudio] = useState([])
  const [speakers, setSpeakers] = useState([])

  useEffect(() => {
    fetch('media/transcript.json', {
        credentials: "same-origin"
    })
    .then(response => response.json())
    .then((data) => {
        setAudio(data)
        setSpeakers(data.speakers)
    })
    .catch(error => console.error(error));
  }, []);
  
  return (
    <div className="App">
        <nav>
            <ul>
                <li><a onClick={(e) => document.documentElement.scrollTop = 0 }>To Top</a></li>
            </ul>
        </nav>

        {/* <Search /> */}
        <Speakers speakers={speakers} />
        <AudioPlayer audio={audio}/>
        <AudioTranscript speakers={speakers} turns={audio.turns} />
    </div>
  );
}

export default App;
