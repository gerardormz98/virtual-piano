import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Credits = () => {
    return (
        <div className="credits">
            <span>Use your mouse or keyboard to play the piano!</span>
            <span>Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/gerardormz98/" target="_blank" rel="noreferrer">Gerardo Ramírez</a></span>
        </div>
    );
};

export default Credits;