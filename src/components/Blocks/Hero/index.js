import React from 'react';

const Hero = ({ uuid, region, weight, configuration, blockData }) => {
    const {field_headline, field_cta, relationships} = blockData;

    return (
        <>
            <div>
                <h2>{field_headline}</h2>
            </div>
        </>
    );
}

export default Hero;
