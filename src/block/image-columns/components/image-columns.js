/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

/**
 * Renders the wrapper div
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
			backgroundColor,
			blockWidth,
			buttonEnable,
			borderColor,
			bottomMargin,
			textAlign,
			shapes,
			columns
		} = attributes;

		/* need to add shape */
		let myalign = align;
		if ( align === undefined ) myalign = 'none';
		if ( myalign != 'wide' && myalign != 'full')
			myalign = '_' + myalign;

		let myWidth = blockWidth;

		if ( myWidth == 0 || myWidth == 100 || myWidth === undefined ) {		/* default behavior - allow wide/full width */
			myWidth = 'auto';
		} else {
			myWidth = myWidth + '%';
			if (myalign == 'wide' || myalign == 'full' )
				myalign = '_center';
		}

		let blockBottom = bottomMargin + 'em';

		/* hardwire block's class name - fix for 4.0 className, -> `wp-block-wvrblocks-imgcols`, */

		return (
			<Fragment>
			<div
				className={ classnames(
					`wp-block-wvrblocks-imgcols`,
					`align${ myalign }`,
					`wvrblocks-imgcols__has-${columns}`,
					`wvrblocks-imgcols__shape-${shapes}`
				) }
				style={ {
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					textAlign: textAlign,
					marginBottom: blockBottom,
					width: `${myWidth}`
				} }
			>
				{ this.props.children }
			</div>
			</Fragment>
		);
	}
}
