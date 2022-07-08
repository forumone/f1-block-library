# Forum One Block Library

A starting set of custom blocks for WordPress 5.9+.

## Requirements for Use
- WordPress 5.9+
- Advanced Custom Fields Pro (needed for the Featured Cards block)
- [Gesso](https://github.com/forumone/gesso-wp) [not technically required but you probably want it]

## Additional Requirements for Development
- Node 14.x.x
- npm 7.x.x

## Getting Started
If you are installing the plugin for use in a site, you can install it with Composer
or download it and place it in the plugins folder. Enable the plugin, and you can begin
using the available blocks.

The F1 Block Library is a shared set of common blocks. For custom blocks for a site, you
can use the [Block Plugins Template](https://github.com/forumone/blocks-plugin-template/) or
[@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/).

You should not override this plugin on a site-by-site basis. To customize the block styling,
use the starting styles in Gesso or otherwise style the blocks in your theme.

To set up the plugin locally to contribute to it:
1. `npm ci`
2. `npm run dev`

## Building Assets
To build assets for production:
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

## Available Blocks
### Accordion
An accessible accordion.

### Accordion Item
An individual item within an accordion. Can only be used inside the Accordion block.

### Address
An `<address>` element.

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

### Slider
Carousel using [Tiny Slider](https://github.com/ganlanyuan/tiny-slider). Each slide must be
a core Group block that can then contain whatever block(s), such as images or quotes, make up
the slide.

### Standalone Link
A non-button link displayed on its own (i.e. not part of a paragraph of text).
A common use for this is a "Read more" type link. Additional Block Styles can be
added for link styling. The WP Next Theme adds an Arrow style that adds an
arrow after the link.
