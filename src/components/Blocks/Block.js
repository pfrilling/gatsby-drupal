import React from 'react';
import Basic from "./Basic";
import Hero from "./Hero";

// Define the layouts already know about first, drupal_layout_key|React Component.
const DrupalBlocks = {
    'inline_block:basic': Basic,
    'inline_block:hero': Hero
};

const Block = ({ uuid, region, weight, configuration, blockData }) => {
    console.log(configuration.id)
    if (typeof DrupalBlocks[configuration.id] !== "undefined") {
        return React.createElement(DrupalBlocks[configuration.id], {
            uuid: uuid,
            region: region,
            weight: weight,
            configuration: configuration,
            blockData: blockData
        });
    }

    // component doesn't exist yet
    return React.createElement(
        () => <div>The block component {uuid} has not been created yet.</div>,
        { key: uuid }
    );

}
export default Block;
