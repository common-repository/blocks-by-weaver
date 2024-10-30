=== Designer Blocks for Block Editor by Weaver ===

Contributors: wpweaver
Tags: gutenberg, blocks, web design, block editor, editor blocks, block images, parallax, wordpress 5.0
Requires at least: 4.9.8
Tested up to: 5.0
Requires PHP: 5.4
Stable tag: 1.0.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Discover the power of the Block Editor! This plugin adds Designer Blocks that make it easy to add Images, Text, and Parallax.

== Description ==

The new Block Editor Editor (Gutenberg) provides a completely new way to edit your WordPress Pages and Posts. The standard version provides many blocks, but _Designer Blocks for the Block Editor by Weaver_ adds several new blocks that make it easy to add modern web design patterns to your pages.

**Designer Blocks for the Block Editor by Weaver currently includes:**

* **_All-in-One Image/Text_**

   Combine an image in one column with up to three text elements in the second column. You can control the size and shape of the image. You can independently control the position, text color, and font-size of the three text elements. You can switch the order of the columns.

   Not only can you control the background color, you can also specify a cover background image that can be switch to a parallax image. You control the display height of the background image. This Block allows you to easily create amazingly beautiful elements on your page.

* **_Image Columns_**

  Create a block with up to four columns with an image at the top of the block, with a title and description under. The image can be a square, a circle, or the aspect of the original image.

  This web design pattern is found on many modern sites, and is commonly used for showing staff, product images/logos with descriptions, or other blocks with text under an image. The _Image Columns_ block makes it trivial to create this design.


= Features shared by blocks =

* Image shape choice: original aspect ratio, plus square or circle in three sizes
* Background color for columns
* Text area text color and font-size.
* Standard Gutenberg text properties: bold, italic, strikethrough, link
* Wide and Full width display if theme supports it
* Responsive - will automatically look good on desktops and mobile devices

= Demos, Help, and Full support on our own website =

> [Designer Blocks for Gutenberg by Weaver Demo](https://weavertheme.com/plugins/designer-block-demos)
> [Weaver Support Forum](https://forum.weavertheme.com/)

= Suggestions Welcome =

> This version has been tested and is fully compatible with the final WordPress 5.0 release! As features, APIs, and best practices change in the Block Editor, so will this plugin.

The goal of this plugin it to include easy-to-use designer blocks that mix images, text, and background images arragned in different creative patterns. If you have a favorite web design pattern you'd like made easy, just send us an email, and we'll see if it can be made into a block.


== Installation ==

= Minimum Requirements =
You'll need the **Gutenberg plugin** for this plugin to work. (Gutenberg should be included in WordPress 5.0 sometime in 2018.)

= Automated Installation =
Add and activate this plugin to automatically add the new blocks to the Gutenberg editor. Installation is free, quick, and easy. Use the standard WordPress plugin installation admin panel.


== Frequently Asked Questions ==

**What is Gutenberg and why do I need it for this plugin to work?**

Gutenberg is a beta project by Matt Mullenweg, the co-founder of WordPress. It's a visual builder prototype of the new WordPress editor that's coming out with WordPress 5.0 sometime in 2018.

Since its yet to be fully integrated with WordPress, Gutenberg comes as a separate plugin for developers and beta testers. This plugin is an add-on for the current Gutenberg plugin, so you'll need both of them installed for you to use it.

** Won't adding new blocks make Gutenberg bigger and slower? **

One of the great features of Gutenberg is that it has been designed from the start to make it easy for plugin developers to add new blocks (although they require a high level of technical and programming skill). Because of the API designed for Gutenberg, each new block is really very tiny, and will not measurably affect the speed or size of Gutenberg.

**How did you create Great Gutenberg Blocks by Weaver?**

This plugin has been built using [Ahmad Awais' Create Guten Block](https://github.com/ahmadawais/create-guten-block) tool.

**Why would I need an add-on for Gutenberg?**

Currently, Gutenberg has some of the most basic features needed to create a website. However, the basic blocks are fairly limited, so we wanted to provide more page-builder-like blocks and make it easy to add some of the currently popular designer patterns.

**I have a suggestion for an existing block.**

Note: due to some very critical restrictions on the Gutenberg block programming interface, it is essentially impossible to add new features to an existing block. Styling elements covered by CSS can be tweaked, but _nothing_ related to the fundamental HTML code generated by the block can be modified without breaking any previous instances of the block.

== Screenshots ==

1. All-in-one Image/Text
2. Image Columns

== Changelog ==
= 1.0.1 =
* Tweaks: Updated for final WP 5.0 release

= 1.0 =
* New: Optional link button for Image Columns block. You must enable link buttons to see them!
* Updates: Several tweaks and updates for Gutenberg 5.0 compatibility
* IMPORTANT NOTE: Version 1.0 may not be backward compatible with previous designer blocks. Gutenberg has been a moving target, and now that WP 5.0 release is near, there have been changes that break some backward compatbility. You can convert to HTML blocks and preserve your old blocks, but if you need changes, you may have to recreate them from scratch.


= 0.4.2 =
* Tweak: added margins between columns - makes displays better when cols have bg color
* Fix: bug when changing bg colors from a color back to none (transparent)

= 0.4.1 =

* Minor Styling tweaks

= 0.3 =

* First release
