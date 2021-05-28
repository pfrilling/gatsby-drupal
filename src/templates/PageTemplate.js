import { graphql } from 'gatsby';
import React from 'react';
import LayoutBuilder from "../components/Sections/LayoutBuilder";

export const query = graphql`
query ($uuid: String!) {
  nodePage(drupal_id: {eq: $uuid}) {
    drupal_id
    layout_builder__layout {
      components {
        configuration {
          id
          block_revision_id
          label
          provider
          type
          uuid
          view_mode
        }
        region
        uuid
        weight
      }
      layout_id
    }
    id
    created(formatString: "MMM Do, YYYY")
    title
  }
}
`;

const BasicPage = (props) => {
    const {title, created, layout_builder__layout} = props.data.nodePage;

        return (
        <>
          <h1>{ title }</h1>
          <div>{ created }</div>
          {/*<div dangerouslySetInnerHTML={{ __html: body.processed}}></div>*/}
         <LayoutBuilder
             sections={layout_builder__layout}
             blocks={props.pageContext.drupal_blocks}
         >

         </LayoutBuilder>
        </>
        );
};

export default BasicPage;

// export default function PageTemplate({ data }) {
//     console.log(props);
//     const {title, created, layout_builder__layout} = data.nodePage;
//
//     return (
//         <>
//           <h1>{ title }</h1>
//           <div>{ created }</div>
//           {/*<div dangerouslySetInnerHTML={{ __html: body.processed}}></div>*/}
//          <LayoutBuilder
//              sections={layout_builder__layout}
//          >
//
//          </LayoutBuilder>
//         </>
//     );
// }