/**
 * inspector.js -  renders the control panel
 *
 *
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, MediaUpload, PanelColorSettings } = wp.editor;
const { PanelBody, FormToggle, ToggleControl, RangeControl, SelectControl, TextControl, Button } = wp.components;

/**
 * Inspector controls - renders the control panel
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			alt,
			textAlign,
			backgroundColor,
			blockMinHeight,
			blockWidth,
			borderColor,
			bgURL,
			flexDir,
			bottomMargin,
			blockTopPadding,
			blockBotPadding,
			blockLeftPadding,
			blockRightPadding,

			descTopColor,
			descTopFontSize,
			descTopLeftMargin,
			descTopTopMargin,

			descMidColor,
			descMidFontSize,
			descMidLeftMargin,
			descMidTopMargin,

			descBotColor,
			descBotFontSize,
			descBotLeftMargin,
			descBotTopMargin,

			imageWidth,				/* Width of image column. Description column derived from this value. */
			imageParallax,
			mobileColumns,
			imageTopMargin,
			shadowDesc,

			shape
		} = attributes;

		const order = [
			{ value: 'normal', label: __( 'Image:Text', 'blocks-by-weaver' ) },
			{ value: 'reverse', label: __( 'Text:Image', 'blocks-by-weaver' ) },
			{ value: 'col-normal', label: __( 'Image:Text (Stacked)', 'blocks-by-weaver' ) },
			{ value: 'col-reverse', label: __( 'Text:Image (Stacked)', 'blocks-by-weaver' ) },
		];

		const shapes = [
			{ value: 'original', label: __( 'Original Aspect', 'blocks-by-weaver' ) },
			{ value: 'original-smaller', label: __( 'Smaller Original Aspect', 'blocks-by-weaver' ) },
			{ value: 'square', label: __( 'Square', 'blocks-by-weaver' ) },
			{ value: 'square-smaller', label: __( 'Smaller Square', 'blocks-by-weaver' ) },
			{ value: 'square-larger', label: __( 'Larger Square', 'blocks-by-weaver' ) },
			{ value: 'circle', label: __( 'Circle', 'blocks-by-weaver' ) },
			{ value: 'circle-smaller', label: __( 'Smaller Circle', 'blocks-by-weaver' ) },
			{ value: 'circle-larger', label: __( 'Larger Circle', 'blocks-by-weaver' ) },

		];



		return (
			<InspectorControls key="inspector">

				<PanelBody title={ __( 'Block Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<SelectControl
						label={ __( 'Image/Text Layout Order', 'blocks-by-weaver', 'blocks-by-weaver' ) }
						value={ flexDir }
						options={ order.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( value ) => { setAttributes( { flexDir: value } ) } }
					/>

					<PanelColorSettings
						title={ __( 'Block Color Settings' ) }
						colorSettings={ [
							{
								value: backgroundColor,
								onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
								label: __( 'Background Color of Block', 'blocks-by-weaver' ),
							},
							{
								value: borderColor,
								onChange: ( colorValue ) => setAttributes( { borderColor: colorValue } ),
								label: __( 'Border Color around Block', 'blocks-by-weaver' ),
							},
						] }
					>
					</PanelColorSettings>


					<RangeControl
						label={__('Minimum Height of Block (px)', 'blocks-by-weaver')}
						value={ blockMinHeight }
						min='0'
						max='1000'
						step='4'
						onChange={ ( value ) => setAttributes( { blockMinHeight: value } ) }
						help={__('Useful with BG Image. Also controls height of parallax "window".', 'blocks-by-weaver' )}
					/>

					<RangeControl
						label={__('Block Width (%)', 'blocks-by-weaver')}
						value={ blockWidth }
						min='0'
						max='100'
						step='1'
						onChange={ ( value ) => setAttributes( { blockWidth: value } ) }
					/>

					<RangeControl
						label={__('Block Bottom Margin (in em)', 'blocks-by-weaver')}
						value={ bottomMargin }
						min='0'
						max='20'
						step='0.25'
						onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
						help={__('Space after this block. Setting to zero allows no space between blocks.', 'blocks-by-weaver' )}
					/>

					<ToggleControl
						label={ __( 'Stack Columns on Phones instead of Shrinking' ) }
						value={mobileColumns}
						checked={ !! mobileColumns }
						onChange={ ( value ) => { setAttributes( { mobileColumns: value } ) } }
					/>

					<RangeControl
						label={__('Block Top Padding (in em)', 'blocks-by-weaver')}
						value={ blockTopPadding }
						min='0'
						max='20'
						step='0.25'
						onChange={ ( value ) => setAttributes( { blockTopPadding: value } ) }
						help={__('Padding is useful with BG Images to control placement of image/text columns.', 'blocks-by-weaver' )}
					/>

					<RangeControl
						label={__('Block Bottom Padding (in em)', 'blocks-by-weaver')}
						value={ blockBotPadding }
						min='0'
						max='20'
						step='0.25'
						onChange={ ( value ) => setAttributes( { blockBotPadding: value } ) }
					/>

					<RangeControl
						label={__('Block Left Padding (in em)', 'blocks-by-weaver')}
						value={ blockLeftPadding }
						min='0'
						max='20'
						step='0.5'
						onChange={ ( value ) => setAttributes( { blockLeftPadding: value } ) }
					/>

					<RangeControl
						label={__('Block Right Padding (in em)', 'blocks-by-weaver')}
						value={ blockRightPadding }
						min='0'
						max='20'
						step='0.25'
						onChange={ ( value ) => setAttributes( { blockRightPadding: value } ) }
					/>


				</PanelBody>

				<PanelBody title={ __( 'Image Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<SelectControl
						label={ __( 'Image Shape', 'blocks-by-weaver', 'blocks-by-weaver' ) }
						value={ shape }
						options={ shapes.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newShape ) => { setAttributes( { shape: newShape } ) } }
						help={__('It is best to use a square original image for square and circle shapes or it may be distorted on mobile devices.', 'blocks-by-weaver' )}
					/>

					<RangeControl
						label={__('Image Column Width (%)', 'blocks-by-weaver')}
						value={ imageWidth }
						min='0'
						max='100'
						step='1'
						onChange={ ( value ) => setAttributes( { imageWidth: value } ) }
						help={__('Set the width of the image column relative to entire block.', 'blocks-by-weaver' )}
					/>

					<RangeControl
						label={__('Image Top Margin (%)', 'blocks-by-weaver' )}
						value={ imageTopMargin }
						min='-50'
						max='90'
						step='1'
						onChange={ ( value ) => setAttributes( { imageTopMargin: value } ) }
					/>

					<TextControl
						label={ __( 'Image Textual Alternative (alt)' ) }
						value={ alt }
						onChange={ ( value ) => { setAttributes( { alt: value } ) } }
						help={ __( 'Provide an "alt" (alternate description) for the image.' ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Background Image Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<ToggleControl
						label={ __( 'Make Background Parallax' ) }
						value={imageParallax}
						checked={ !! imageParallax }
						help={  __( 'Use Block Attributes : Minimum Height to control parallax window size.', 'blocks-by-weaver' ) }
						onChange={ ( value ) => { setAttributes( { imageParallax: value } ) } }
					/>

					<ToggleControl
						label={ __( 'Add Shadows to Descriptions' ) }
						value={shadowDesc}
						checked={ !! shadowDesc }
						help={  __( 'This can make description text more readable.', 'blocks-by-weaver' ) }
						onChange={ ( value ) => { setAttributes( { shadowDesc: value } ) } }
					/>

					<MediaUpload
							onSelect={ ( media ) => setAttributes( { bgURL: media.url } ) }
							type={'image'}
							value={bgURL}
							render={ function( obj ) {
								return <Button
											className={ 'button button-large' }
											onClick={ obj.open } >
											{
												bgURL ? __( 'Change Background Image', 'blocks-by-weaver' ) : __( 'Pick Background Image', 'blocks-by-weaver'  )
											}
										</Button>
								}
							}
					/>

				</PanelBody>

				<PanelBody title={ __( 'Top Description Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<PanelColorSettings
						title={ __( 'Top: Color', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: descTopColor,
								onChange: ( colorValue ) => setAttributes( { descTopColor: (colorValue === undefined ? '#222222' : colorValue) } ),
								label: __( 'Description Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>


					<RangeControl
						label={__('Top: Font Size (% of default)', 'blocks-by-weaver' )}
						value={ descTopFontSize }
						min='70'
						max='500'
						step='10'
						onChange={ ( value ) => setAttributes( { descTopFontSize: value } ) }
					/>

					<RangeControl
						label={__('Top: Top Margin (%)', 'blocks-by-weaver' )}
						value={ descTopTopMargin }
						min='0'
						max='50'
						step='1'
						onChange={ ( value ) => setAttributes( { descTopTopMargin: value } ) }
					/>

					<RangeControl
						label={__('Top: Left Margin (%)', 'blocks-by-weaver' )}
						value={ descTopLeftMargin }
						min='-50'
						max='90'
						step='1'
						onChange={ ( value ) => setAttributes( { descTopLeftMargin: value } ) }
					/>

				</PanelBody>

				<PanelBody title={ __( 'Middle Description Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>


					<PanelColorSettings
						title={ __( 'Middle: Color', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: descMidColor,
								onChange: ( colorValue ) => setAttributes( { descMidColor: (colorValue === undefined ? '#222222' : colorValue) } ),
								label: __( 'Description Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>


					<RangeControl
						label={__('Middle: Font Size (% of default)', 'blocks-by-weaver' )}
						value={ descMidFontSize }
						min='70'
						max='500'
						step='10'
						onChange={ ( value ) => setAttributes( { descMidFontSize: value } ) }
					/>

					<RangeControl
						label={__('Middle: Top Margin (%)', 'blocks-by-weaver' )}
						value={ descMidTopMargin }
						min='-50'
						max='50'
						step='1'
						onChange={ ( value ) => setAttributes( { descMidTopMargin: value } ) }
					/>

					<RangeControl
						label={__('Middle: Left Margin (%)', 'blocks-by-weaver' )}
						value={ descMidLeftMargin }
						min='-50'
						max='90'
						step='1'
						onChange={ ( value ) => setAttributes( { descMidLeftMargin: value } ) }
					/>

				</PanelBody>

				<PanelBody title={ __( 'Bottom Description Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<PanelColorSettings
						title={ __( 'Bottom: Color', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: descBotColor,
								onChange: ( colorValue ) => setAttributes( { descBotColor: (colorValue === undefined ? '#222222' : colorValue) } ),
								label: __( 'Description Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>

					<RangeControl
						label={__('Bottom: Font Size (% of default)', 'blocks-by-weaver' )}
						value={ descBotFontSize }
						min='70'
						max='500'
						step='10'
						onChange={ ( value ) => setAttributes( { descBotFontSize: value } ) }
					/>

					<RangeControl
						label={__('Bottom: Top Margin (%)', 'blocks-by-weaver' )}
						value={ descBotTopMargin }
						min='-50'
						max='50'
						step='1'
						onChange={ ( value ) => setAttributes( { descBotTopMargin: value } ) }
					/>

					<RangeControl
						label={__('Bottom: Left Margin (%)', 'blocks-by-weaver' )}
						value={ descBotLeftMargin }
						min='-50'
						max='90'
						step='1'
						onChange={ ( value ) => setAttributes( { descBotLeftMargin: value } ) }
					/>

				</PanelBody>

			</InspectorControls>
		);
	}
}
