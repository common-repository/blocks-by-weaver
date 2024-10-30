/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 *
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls, BlockAlignmentToolbar, Toolbar, MediaUpload } = wp.editor;


export default class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	} 

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			align,
			textAlign,
			blockWidth
		} = attributes;

		const STANDARD_CONTROLS = [ 'left', 'center', 'right' ];
		const WIDE_CONTROLS = [ 'wide', 'full' ];

		let alignControls = STANDARD_CONTROLS;
		if ( blockWidth == 100 )
			alignControls = WIDE_CONTROLS;

		return (
			<Fragment>
			<BlockControls key="controls">

				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => setAttributes( { align: nextAlign } ) }
					controls={ alignControls }
				/>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextTextAlign ) => setAttributes( { textAlign: nextTextAlign } ) }
				/>

			</BlockControls>
			</Fragment>
		);
	}
}
