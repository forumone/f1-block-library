# Forum One Block Library

A starting set of custom blocks for WordPress 5.9+.

## Requirements
- Node 14.x.x
- npm 7.x.x
- WordPress 5.9+
- Advanced Custom Fields Pro (needed for the Featured Cards block)

Not required but heavily recommended, a theme based on
[the to-be-named starter theme](https://github.com/forumone/wp-next-theme).

## Getting Started
1. Enable the plugin
2. `npm ci`
3. `npm run dev`

## Building Assets
To build assets for production or if you want to compile the plugin without
watching for changes:
1. `npm ci`
2. `npm run build`

The Forum One Block Library uses
[@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts) for
the linting and building process, with a few styling and prettier overrides.

## Creating a New Block
The [Block Editor Handbook](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/)
has a walkthrough to creating custom blocks. You will want to refer to it and to the
[Block API reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/) if
you are new to creating custom blocks. As a broad-level overview, each time you create
a new block, you'll need to:
1. Add a block.json file that defines the block name, editorScript JS file, and any other relevant info, such as attributes.
2. Add the Edit and Save functions. The convention blocks in the Forum One Block Library follow is to define the edit function in `_Edit.js` and the save function in `_Save.js` and import both into `index.js`.
3. Add any other assets, such as a SCSS file or additional scripts to load with the block. See the Slider block for an example of both.
4. Add the index.js file and call the `registerBlock` function.
5. Register the block within the `f1_block_library_register_blocks` in `f1-block-library.php`.

## Blockbook
[Blockbook](https://github.com/youknowriad/blockbook) allows you to review and demo blocks
outside of WordPress, similar to Pattern Lab and Storybook.

To start Blockbook locally:
```
npm run blockbook:start
```

To compile a static version of Blockbook:
```
npm run blockbook:build
```

To add a new block to Blockbook, import the index.js JavaScript file in `.blockbook/index.js`
and add the block name to the array of blocks to be registered. SCSS files
should be imported in the theme (for wp-next-theme, that's in `blockbook.scss`) so
that the block styles will display for both the Example and Editor tabs.

## Available Blocks
### Accordion
An accessible accordion.

### Accordion Item
An individual item within an accordion. Can only be used inside the Accordion block.

### Back to Top
A link to jump back to the top of the page.

### Cards
A card display of content. Comes in three varieties:
#### Featured Cards
Requires Advanced Custom Fields. Allows the editor to select pieces of
content and displays them as cards using the featured image, post title,
and post excerpt.

#### Query Cards
Used within a Query Loop block in place of the Post Template block to display
the results of a Query Loop in card format.

#### Manual Cards
A card display that allows editors to manually enter each part of the card.

The shared markup for the various card displays is in card-output.php, which takes
the card values as parameters and returns the markup displayed on the front-end.

### Copyright
A dynamic block showing the current year and whatever text the user enters for the
copyright statement.

### Mega Menu
A wrapper around the Navigation block to make the navigation use mega menu styling.

### Section
A section with a title and optional link (e.g. for "Read all").

### Skiplinks
Accessible link to skip to the main content. Note that you will need to add the ID of
main to the appropriate element in your template(s) as well.

### Standalone Link
A non-button link displayed on its own (i.e. not part of a paragraph of text).
A common use for this is a "Read more" type link. Additional Block Styles can be
added for link styling. The WP Next Theme adds an Arrow style that adds an
arrow after the link.
