/**
 * inspector.js -  renders the control panel
 *
 *
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, ColorPalette, PanelColorSettings } = wp.editor;
const { PanelBody, PanelColor, FormToggle, ToggleControl, RangeControl, SelectControl,TextControl,
	TextareaControl, } = wp.components;

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
			textAlign,
			backgroundColor,
			blockWidth,
			backgroundColorCol1, backgroundColorCol2, backgroundColorCol3, backgroundColorCol4,
			bottomMargin,

			buttonBGColor,
			buttonsEnableShow,
			buttonRadius,
			buttonSize,
			buttonTextColor,

			textSize,
			textColor,
			titleSize,
			titleColor,
			borderColor,
			shapes,
			columns
		} = attributes;


		const column = [
			{ value: '1', label: __( 'One Column', 'blocks-by-weaver' ) },
			{ value: '2', label: __( 'Two Columns', 'blocks-by-weaver' ) },
			{ value: '3', label: __( 'Three Columns', 'blocks-by-weaver' ) },
			{ value: '4', label: __( 'Four Columns', 'blocks-by-weaver' ) },
		];
		const shape = [
			{ value: 'original', label: __( 'Original Aspect', 'blocks-by-weaver' ) },
			{ value: 'original-smaller', label: __( 'Smaller Original Aspect', 'blocks-by-weaver' ) },
			{ value: 'square', label: __( 'Square', 'blocks-by-weaver' ) },
			{ value: 'square-smaller', label: __( 'Smaller Square', 'blocks-by-weaver' ) },
			{ value: 'square-larger', label: __( 'Larger Square', 'blocks-by-weaver' ) },
			{ value: 'circle', label: __( 'Circle', 'blocks-by-weaver' ) },
			{ value: 'circle-smaller', label: __( 'Smaller Circle', 'blocks-by-weaver' ) },
			{ value: 'circle-larger', label: __( 'Larger Circle', 'blocks-by-weaver' ) },

		];
		const buttonSizes = [
			{ value: 'normal', label: __( 'Normal', 'blocks-by-weaver' ) },
			{ value: 'small', label: __( 'Small', 'blocks-by-weaver' ) },
			{ value: 'medium', label: __( 'Medium', 'blocks-by-weaver' ) },
			{ value: 'large', label: __( 'Large', 'blocks-by-weaver' ) },
			{ value: 'xlarge', label: __( 'Extra Large', 'blocks-by-weaver' ) },
		];

		return (
			<InspectorControls key="inspector">

				<PanelBody title={ __( 'Column Count and Attributes', 'blocks-by-weaver' ) }  initialOpen={ true }>

					<SelectControl
						label={ __( 'Number of Columns', 'blocks-by-weaver' ) }
						value={ columns }
						options={ column.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newColumns ) => { setAttributes( { columns: newColumns } ) } }
					/>
					<SelectControl
						label={ __( 'Image Shape', 'blocks-by-weaver', 'blocks-by-weaver' ) }
						value={ shapes }
						options={ shape.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newShape ) => { setAttributes( { shapes: newShape } ) } }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Block Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>


					<RangeControl
						label={__('Block Width (%)', 'blocks-by-weaver')}
						value={ blockWidth }
						min='20'
						max='100'
						step='1'
						onChange={ ( value ) => setAttributes( { blockWidth: value } ) }
					/>

					<RangeControl
						label={__('Block Bottom Margin (in em)', 'blocks-by-weaver')}
						value={ bottomMargin }
						min='0'
						max='10'
						step='0.1'
						onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
						help={__('Space after this block. Setting to zero allows no space between blocks.', 'blocks-by-weaver' )}
					/>

					<PanelColorSettings
						title={ __( 'Block Colors', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: backgroundColor,
								onChange: ( colorValue ) => setAttributes( { backgroundColor: (colorValue === undefined ? 'transparent' : colorValue) } ),
								label: __( 'Entire Block Background Color', 'blocks-by-weaver' ),
							},
							{
								value: borderColor,
								onChange: ( colorValue ) => setAttributes( { borderColor: (colorValue === undefined ? 'transparent' : colorValue) } ),
								label: __( 'Border Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>
				</PanelBody>

				<PanelBody title={ __( 'Title and Description Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<PanelColorSettings
						title={ __( 'Title, Description Colors', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: titleColor,
								onChange: ( colorValue ) => setAttributes( { titleColor: (colorValue === undefined ? '#222222' : colorValue) } ),
								label: __( 'Title Color', 'blocks-by-weaver' ),
							},
							{
								value: textColor,
								onChange: ( colorValue ) => setAttributes( { textColor: (colorValue === undefined ? '#222222' : colorValue) } ),
								label: __( 'Description Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>

					<RangeControl
						label={__('Title Font Size (% of default)', 'blocks-by-weaver' )}
						value={ titleSize }
						min='70'
						max='300'
						step='10'
						onChange={ ( value ) => setAttributes( { titleSize: value } ) }
					/>

					<RangeControl
						label={__('Description Font Size (% of default)', 'blocks-by-weaver' )}
						value={ textSize }
						min='70'
						max='250'
						step='10'
						onChange={ ( value ) => setAttributes( { textSize: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Link Button Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<ToggleControl
						label={ __( 'Enable Link Buttons' ) }
						value={buttonsEnableShow}
						checked={ !! buttonsEnableShow }
						onChange={ ( value ) => { setAttributes( { buttonsEnableShow: value } ) } }
						help={__('Enable the Link Button for Columns. (Link buttons will NOT display unless you enter ULR for button.)', 'blocks-by-weaver' )}
					/>


					<PanelColorSettings
						title={ __( 'Button Colors', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: buttonBGColor,
								onChange: ( colorValue ) => setAttributes( { buttonBGColor: (colorValue === undefined ? 'rgba(0,0,0,.15)' : colorValue) } ),
								label: __( 'Button Background Color', 'blocks-by-weaver' ),
							},
							{
								value: buttonTextColor,
								onChange: ( colorValue ) => setAttributes( { buttonTextColor: (colorValue === undefined ? '#000000' : colorValue) } ),
								label: __( 'Button Text Color', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>

					<SelectControl
						label={ __( 'Button Size', 'blocks-by-weaver', 'blocks-by-weaver' ) }
						value={ buttonSize }
						options={ buttonSizes.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newShape ) => { setAttributes( { buttonSize: newShape } ) } }
					/>

					<RangeControl
						label={__('Corner Radius of Link Buttons (px)', 'blocks-by-weaver')}
						value={ buttonRadius }
						min='0'
						max='50'
						step='1'
						onChange={ ( value ) => setAttributes( { buttonRadius: value } ) }
					/>

				</PanelBody>


				<PanelBody title={ __( 'Individual Column Attributes', 'blocks-by-weaver' ) }  initialOpen={ false }>

					<PanelColorSettings
						title={ __( 'Column Background Colors', 'blocks-by-weaver' ) }
						colorSettings={ [
							{
								value: backgroundColorCol1,
								onChange: ( colorValue ) => setAttributes( { backgroundColorCol1: (colorValue === undefined ? 'transparent' : colorValue) } ),
								label: __( 'Column 1 BG', 'blocks-by-weaver' ),
							},
							{
								value: backgroundColorCol2,
								onChange: ( colorValue ) => setAttributes( { backgroundColorCol2: (colorValue === undefined ? 'transparent2' : colorValue) } ),
								label: __( 'Column 2 BG', 'blocks-by-weaver' ),
							},
							{
								value: backgroundColorCol3,
								onChange: ( colorValue ) => setAttributes( { backgroundColorCol3: (colorValue === undefined ? 'transparent' : colorValue) } ),
								label: __( 'Column 3 BG', 'blocks-by-weaver' ),
							},
							{
								value: backgroundColorCol4,
								onChange: ( colorValue ) => setAttributes( { backgroundColorCol4: (colorValue === undefined ? 'transparent' : colorValue) } ),
								label: __( 'Column 4 BG', 'blocks-by-weaver' ),
							},
						] } initialOpen={ false }
					>
					</PanelColorSettings>


				</PanelBody>

			</InspectorControls>
		);
	}
}
