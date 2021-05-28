import React from 'react';
import LayoutOneColumn from "./LayoutOneColumn";
import LayoutTwoColumnSection from "./LayoutTwoColumnSection";

// Define the layouts already know about first, drupal_layout_key|React Component.
const Layouts = {
    layout_onecol: LayoutOneColumn,
    layout_twocol_section: LayoutTwoColumnSection
};

const LayoutBuilder = ( props ) => {
    const {sections, blocks} = props;
    //console.log(blocks);
    var rows = sections.map(function(section){
        const {layout_id, components} = section;
        if (typeof Layouts[layout_id] !== "undefined") {
            return React.createElement(Layouts[layout_id], {
                id: layout_id,
                components: components,
                blocks: blocks
            });
        }

        // component doesn't exist yet
        return React.createElement(
            () => <div>The layout {layout_id} has not been created yet.</div>,
            { key: layout_id }
        );
    })

    return <div>{ rows }</div>;
}
export default LayoutBuilder;
