import React, { useEffect, useState } from "react";

import AudioPlayer from './components/AudioPlayer';
import AudioTranscript from "./components/AudioTranscript"
// import Search from "./components/Search";
import Speakers from "./components/Speakers"

import './index.css'; // Import your styles

function App() {
  const [audio, setAudio] = useState('')
  const [speakers, setSpeakers] = useState('')
  
  const fetchAudio = async () => {
      try {
          const response = await fetch('media/transcript.json', {
              method: 'GET',
          })

          if (!response.ok) {
              throw new Error('Network response was not ok')
          }

          const data = await response.json()
          console.log("data: ", data)
          setAudio(data);
          
          const speakers = data.speakers

          console.log(speakers)

          setSpeakers(speakers)

      } catch (error) {
          console.error('Error:', error)
      }
  }

  useEffect(() => {
      fetchAudio();
  }, [])
  
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
