import React from 'react';

const Basic = ({ uuid, region, weight, configuration, blockData }) => {
   const {field_test_field} = blockData;

    return (
        <>
            <div>
                <div>{ field_test_field }</div>
            </div>
        </>
    );
}

export default Basic;