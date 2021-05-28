import React from "react";
import Block from "../../Blocks/Block";

function getBlockContent(uuid, blocks) {
    let blockContent = blocks.filter(function (e) {
        return e.drupal_id === uuid;
    });

    return blockContent.shift();
}

const LayoutOneColumn = ( props ) => {
    const {id, components, blocks} = props

    let blockComponents = components.map(function(component){
        const {uuid, region, weight, configuration} = component;
        return React.createElement(Block, {
            uuid: uuid,
            region: region,
            weight: weight,
            configuration: configuration,
            blockData: getBlockContent(configuration.uuid, blocks)
        });
    })

    return <div>{ blockComponents }</div>;
}

export default LayoutOneColumn;