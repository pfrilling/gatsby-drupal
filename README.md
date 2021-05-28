# Gatsby / Drupal Layout Builder Proof of Concept

This is a proof of concept that will allow Gatsby to pull and render layout builder blocks.

## Drupal
Drupal needs the following patch applied:
- https://www.drupal.org/files/issues/2020-07-07/2942975-116.patch

The POC currently assumes that two custom block types have been created with machine names of:
- basic (inline_block:basic)
- hero (inline_block:hero)

Add any fields needed to those blocks and enable layout builder for your content type.

## Gatsby

The page query also queries for all drupal inline blocks and passes the content of those blocks through to the
components that need the content.

### Components
#### LayoutBuilder
This is a dynamic component that maps the layout type in Drupal to a component type in Gatsby.
It passes all Drupal blocks housed within the layout along with the block content array.

#### LayoutOneColumn
This maps all blocks for the layout and passes the block information to the Blocks component for further rendering.

#### LayoutTwoColumnSection
This maps all blocks for the layout and passes the block information to the Blocks component for further rendering.
Additionally, this filters the blocks based on the layout builder region and prints those blocks in different regions of
the component.

#### Block
This is a dynamic component that servers to map the Drupal block type to the correct component.

#### Basic
The basic block component that prints the layout builder block fields.

#### Hero
The hero block component that prints the layout builder block fields.
