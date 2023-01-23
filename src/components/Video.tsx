import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video = () => {
    return (
        <ReactPlayer
            url="https://www.youtube.com/watch?v=V1EtE8M_ioA&ab_channel=InstitutoNacionalPenitenciario"
            width="100%"
            height="100%"
            playing
            controls={true}
        />
    )
}

export default Video;