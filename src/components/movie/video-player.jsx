import PropTypes from 'prop-types';
import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {

    return (
            <ReactPlayer
                url={src}
                controls={true}
                width={"100%"}
            />
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string
}
 
export default VideoPlayer;