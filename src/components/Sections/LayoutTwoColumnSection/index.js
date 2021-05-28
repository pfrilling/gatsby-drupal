import React from "react";
import Block from "../../Blocks/Block";

function getBlockContent(uuid, blocks) {
    let blockContent = blocks.filter(function (e) {
        return e.drupal_id === uuid;
    });

    return blockContent.shift();
}

const LayoutTwoColumnSection = ( props ) => {
    const {id, components, blocks} = props
    let columnOne = components.filter(function (e) {
        return e.region === 'first';
    });

    let columnTwo = components.filter(function (e) {
        return e.region === 'second';
    });

    let firstColumn = columnOne.map(function(component){
        const {uuid, region, weight, configuration} = component;

        let blockData = getBlockContent(configuration.uuid, blocks);

        return React.createElement(Block, {
            uuid: uuid,
            region: region,
            weight: weight,
            configuration: configuration,
            blockData: blockData
        });
    })

    let secondColumn = columnTwo.map(function(component){
        const {uuid, region, weight, configuration} = component;
        let blockData = getBlockContent(configuration.uuid, blocks);
        return React.createElement(Block, {
            uuid: uuid,
            region: region,
            weight: weight,
            configuration: configuration,
            blockData: blockData
        });
    })

    return (
        <>
            <div>
                <div>{ firstColumn }</div>
                <div>{ secondColumn }</div>
            </div>
        </>
    );
}

export default LayoutTwoColumnSection;