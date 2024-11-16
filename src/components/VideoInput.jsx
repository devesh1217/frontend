// src/components/VideoInput.js
import React from 'react';

const VideoInput = ({ index, onFileChange }) => {
    const handleChange = (e) => {
        onFileChange(e.target.files[0]); // Pass the selected file to the parent
    };

    return (
        <div>
            <label htmlFor={`video-input-${index}`}>Video File {index + 1}:</label>
            <input
                type="file"
                accept="video/*"
                id={`video-input-${index}`}
                name={`video-input-${index}`}
                onChange={handleChange} // Handle the file input change
            />
        </div>
    );
};

export default VideoInput;

