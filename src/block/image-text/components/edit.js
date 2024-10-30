/**
 * edit.js - renders the editor view of the content
 *
 * Internal dependencies
 */
import ImageBlocks from './image-text';
import Controls from './controls';
import Inspector from './inspector';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, MediaUpload } = wp.editor;
const {	Button } = wp.components;


/**
 * Block edit function - renders the edit view of the images text block.
 */

/*

*/
export default class ImageBlocksBlock extends Component {

	constructor( props ) {
		super( ...arguments );
	}

/*
 */
	render() {

		const {
			attributes,
			className,
			isSelected,
			onReplace,
			setAttributes,
			mergeBlocks,
		} = this.props;

		const {
			align,
			alt,
			backgroundColor,
			blockMinHeight,
			blockWidth,
			borderColor,
			bottomMargin,
			descTop, descTopColor, descTopTopMargin, descTopLeftMargin, descTopFontSize,
			descMid, descMidColor, descMidTopMargin, descMidLeftMargin, descMidFontSize,
			descBot, descBotColor, descBotTopMargin, descBotLeftMargin, descBotFontSize,
			imageWidth,
			imageParallax,
			imageTopMargin,
			shadowDesc,
			mediaURL,
			bgURL,
			flexDir,
			shape,
			textAlign,

		} = attributes;


		let dMidFontSize = descMidFontSize + '%';
		let dMidTopMargin = descMidTopMargin + '%';
		let dMidLeftMargin = descMidLeftMargin + '%';

		let dBotFontSize = descBotFontSize + '%';
		let dBotTopMargin = descBotTopMargin + '%';
		let dBotLeftMargin = descBotLeftMargin + '%';

		let imgWidth = 100;
		let descWidth = 100;
		let descAlign = textAlign;

		if ( (flexDir != 'col-normal' && flexDir != 'col-reverse') )
		{
			imgWidth = imageWidth;
			descWidth = (100 - imageWidth);
			descAlign = 'left';
		}

		if ( blockWidth != 0 && blockWidth != 100 )
			descAlign = textAlign;


		imgWidth = imgWidth + '%';
		descWidth = descWidth + '%';


		let shadowClass = '';
		if ( shadowDesc ) shadowClass = 'has-text-shadow';



		return [
			isSelected && (
				<Controls
					{ ...this.props }
				/>
			),
			isSelected && (
				<Inspector
					{ ...this.props }
				/>
			),
			<ImageBlocks { ...this.props }>

					{!bgURL && (
						<div className={ classnames( 'wvrblocks-imgtext_bgimage' ) } style={ { margin:`0 auto .5em auto`, width:`60%`, padding:`.5em`, textAlign:`center`, border:`1px solid #888888` } } >
						<div style={{paddingBottom:`0`, fontStyle: `italic`, textAlign:`center`, color:`#666666`}} >{__('Please open the Settings Block Inspector to see all available block features.','blocks-by-weaver') }
						</div>
						<div style={{paddingBottom:`.5em`, textAlign:`center`, color:`#666666`}} >{__('You may optionally add a cover or parallax background image.','blocks-by-weaver') }
						</div>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { bgURL: media.url } ) }
							type={'image'}
							value={bgURL}
							render={ function( obj ) {
								return <Button
											className={ bgURL ? '' : 'button button-large' }
											onClick={ obj.open } >
											{
												bgURL ? `` : __( 'Pick Backgroud Image', 'blocks-by-weaver'  )
											}
										</Button>
								}
							}
							/>
							</div>
					)}

					<div className={ classnames( `wvrblocks-imgtext__image`, `wvrblocks-imgtext__shape-${shape}`) } style={{ textAlign: textAlign, width: imgWidth }}>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { mediaURL: media.url } ) }
							type={'image'}
							value={mediaURL}
							render={ function( obj ) {
								return <Button
											className={ mediaURL ? '' : 'button button-large' }
											onClick={ obj.open } >
											{
												mediaURL ? <img src={mediaURL} alt={alt} style={{ marginTop: `${imageTopMargin}%`}}/> : __( 'Pick Image', 'blocks-by-weaver'  )
											}
										</Button>
							} }
						/>
					</div>


					<div className={ 'wvrblocks-imgtext__descriptions' }  style={{ width: descWidth, textAlign: descAlign }}>
						<div className={ classnames('wvrblocks-imgtext__descTop', shadowClass )} >
							<RichText
								tagName="div"
								value={ descTop }
								style={ {
									color: descTopColor, fontSize: `${descTopFontSize}%`, marginLeft: `${descTopLeftMargin}%`, marginTop: `${descTopTopMargin}%`
								} }
								onChange={ ( value ) => setAttributes( { descTop: value } ) }
								placeholder={ __( 'Write Top description...', 'blocks-by-weaver' ) }
								keepPlaceholderOnFocus
							/>
						</div>

						<div className={ classnames('wvrblocks-imgtext__descMid', shadowClass) } >
							<RichText
								tagName="div"
								value={ descMid }
								style={ {
									color: descMidColor, fontSize: dMidFontSize, marginLeft: dMidLeftMargin, marginTop: dMidTopMargin
								} }
								onChange={ ( value ) => setAttributes( { descMid: value } ) }
								placeholder={ __( 'Write Middle description...', 'blocks-by-weaver' ) }
								keepPlaceholderOnFocus

							/>
						</div>

						<div className={ classnames('wvrblocks-imgtext__descBot', shadowClass) } >
							<RichText
								tagName="div"
								value={ descBot }
								style={ {
									color: descBotColor, fontSize: dBotFontSize, marginLeft: dBotLeftMargin, marginTop: dBotTopMargin
								} }
								onChange={ ( value ) => setAttributes( { descBot: value } ) }
								placeholder={ __( 'Write Bottom description...', 'blocks-by-weaver' ) }
								keepPlaceholderOnFocus
							/>
						</div>

					</div>


			</ImageBlocks>
		];
	}
};
