import { text } from '@fortawesome/fontawesome-svg-core';
import React, { Fragment, useEffect } from 'react';
import TagCloud from 'TagCloud';
//Textsphere
const TextShpere = (data) => {
    // Animation settings for Text Cloud
    const texts = data.texts;
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div
                className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default TextShpere;