function AudioTranscript(props) {
    let audio = document.getElementsByTagName('audio')[0]

    const handleClick = (start) => {
        audio.currentTime = start
        audio.play()
    }

    return (
        <div className="component" id="AudioTranscript">
            {props.turns &&
                props.turns.map((turn, key) => {
                    return (
                        <div>
                            <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                                {' '}
                                {props.speakers[turn.speaker]}:{' '}
                            </h3>

                            {turn.speech &&
                                turn.speech.map((el, key) => {
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => handleClick(el.start)}
                                        >
                                            {el.text} &nbsp;
                                        </button>
                                    )
                                })}
                        </div>
                    )
                })}
        </div>
    )
}

export default AudioTranscript
