const AudioPlayer = ({audio}) => {
    return (
        <div className="component" id="AudioPlayer">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {audio.label}
            </h1>
            <figure>
                <audio
                    className="block w-full max-w-md mx-auto"
                    controls
                    src={audio.media}
                ></audio>
            </figure>
        </div>
    )
}

export default AudioPlayer
