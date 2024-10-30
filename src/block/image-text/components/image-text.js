/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

/**
 * Renders the wrapper div
 *
 * 	borderColor: borderColor,
 *
 */

export default class ImageBlocks extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			className,
		} = this.props;

		const {
			align,
			bgURL,
			backgroundColor,
			blockMinHeight,
			blockWidth,
			borderColor,
			bottomMargin,
			blockTopPadding,
			blockBotPadding,
			blockLeftPadding,
			blockRightPadding,
			textAlign,
			flexDir,
			mobileColumns,
			shape,
			imageParallax,
		} = attributes;

		/* handle interaction with different options */

		let myalign = align;
		if ( align === undefined ) myalign = 'none';

		let myWidth = blockWidth;

		if ( myWidth == 0 || myWidth == 100 || myWidth === undefined ) {		/* default behavior - allow wide/full width */
			myWidth = 'auto';
		} else {
			myWidth = myWidth + '%';
			if (myalign == 'wide' || myalign == 'full' )
				myalign = 'center';
		}

		let blockBottom = bottomMargin + 'em';
		let bgImage = 'none';
		if ( bgURL ) bgImage = 'url(' + bgURL + ')';
		let hasBG = '';
		if ( bgURL ) hasBG = 'wvrblocks-imgtext__has-bg';

		let hasParallax = '';
		if ( imageParallax ) hasParallax = 'wvrblocks-imgtext__has-parallax';
		let useMobileColumns = '';
		if ( mobileColumns ) useMobileColumns = 'use-mobile-columns';

		return (
			<div
				className={ classnames(
					className,
					`align${ myalign }`,
					`flex-dir-${flexDir}`,
					hasBG,
					hasParallax,
					useMobileColumns
				) }
				style={ {
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					marginBottom: blockBottom,
					backgroundImage: bgImage,
					minHeight: `${blockMinHeight}px`,
					paddingTop: `${blockTopPadding}em`,
					paddingBottom: `${blockBotPadding}em`,
					paddingLeft: `${blockLeftPadding}em`,
					paddingRight: `${blockRightPadding}em`,
					width: `${myWidth}`
				} }
			>
				{ this.props.children }
			</div>
		);
	}
}
