/**
 * edit.js - renders the editor view of the content
 *
 * Internal dependencies
 */
import ImageBlocks from './image-columns';
import Controls from './controls';
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, MediaUpload, UrlInput } = wp.editor;
const {	Button, Dashicon, IconButton } = wp.components;

/**
 * Block edit function - renders the edit view of the images columns block.
 */

export default class ImageBlocksBlock extends Component {

	constructor( props ) {
		super( ...arguments );
	}

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
			backgroundColor,
			backgroundColorCol1, backgroundColorCol2, backgroundColorCol3, backgroundColorCol4,
			blockWidth,
			borderColor,
			bottomMargin,
			columns,
			desc, desc2, desc3, desc4,
			mediaID1, mediaID2, mediaID3, mediaID4,
			mediaURL, mediaURL2, mediaURL3, mediaURL4,

			button1, button2, button3, button4,
			buttonURL1, buttonURL2, buttonURL3, buttonURL4,
			buttonBGColor,
			buttonsEnableShow,
			buttonRadius,
			buttonSize,
			buttonTextColor,

			shapes,
			textAlign,
			textColor,
			textSize,
			title, title2, title3, title4,
			titleColor,
			titleSize,
		} = attributes;


		let titleFontSize = titleSize + '%';
		let textFontSize = textSize + '%';

		let showLinkButton = true ;
		if ( ! buttonsEnableShow ) showLinkButton = false;


		return [
			<Fragment>
			{ isSelected && (
				<Controls
					{ ...this.props }
				/>
			) }

			{
			isSelected && (
				<Inspector
					{ ...this.props }
				/>
			)
			}

			<ImageBlocks { ...this.props }>

				<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-one' } style={ { backgroundColor: backgroundColorCol1 } } >
					<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img1' }>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID1: media.id } ) }
						type={'image'}
						value={ mediaID1 }
						render={ function( obj ) {
							return <Button
										className={ mediaID1 ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaID1 ? <img src={mediaURL} /> : __( 'Pick Image', 'blocks-by-weaver'  )
										}
									</Button>
						} }
					/>
					</figure></div>

					<div className={ 'wvrblocks-imgcols__text' }>
						<div className={ 'wvrblocks-imgcols__title' } >
							<RichText
								tagName="h4"
								value={ title }
								style={ {
									color: titleColor, fontSize: titleFontSize
								} }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								placeholder={ __( 'Write column one title...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						<div className={ 'wvrblocks-imgcols__desc' } >
							<RichText
								tagName="p"
								value={ desc }
								onMerge={ mergeBlocks }
								style={ {
									color: textColor, fontSize: textFontSize
								} }
								onChange={ ( value ) => setAttributes( { desc: value } ) }
								placeholder={ __( 'Write column one description...', 'blocks-by-weaver' ) }
								keepPlaceholderOnFocus
							/>
						</div>

						{ showLinkButton && (
							<div className={ `wvrblocks-imgcols__button1 wvrblocks-imgcols__button  wvrblocks-imgcols__pro`}
							style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px` } } >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Title for optional Link Button', 'blocks-by-weaver' ) }
									value={ button1 }
									style={ { color: buttonTextColor } }
									className={ `wvrblocks-imgcols__content-button-${buttonSize}`}
									onChange={ (value) => setAttributes( { button1: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}
						{ showLinkButton && button1 && (button1.length > 0) && (
							<div className={ 'wvrblocks-imgcols__button-url wvrblocks-imgcols__pro'} >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Enter or Paste Link URL ...', 'blocks-by-weaver' ) }
									value={ buttonURL1 }
									onChange={ (text) => setAttributes( { buttonURL1: text } ) }
									formattingControls={ [ ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}


					</div>
				</div>


				<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-two' } style={ { backgroundColor: backgroundColorCol2 } } >
					<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img2' }>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL2: media.url, mediaID2: media.id } ) }
						type={'image'}
						value={mediaID2}
						render={ function( obj ) {
							return <Button
										className={ mediaID2 ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaID2 ? <img src={mediaURL2} /> : __( 'Pick Image', 'blocks-by-weaver'  )
										}
									</Button>
						} }
					/>
					</figure></div>

					<div className={ 'wvrblocks-imgcols__text' }>
						<div className={ 'wvrblocks-imgcols__title2' } >
							<RichText
								tagName="h4"
								value={ title2 }
								style={ {
									color: titleColor, fontSize: titleFontSize
								} }
								onChange={ ( value ) => setAttributes( { title2: value } ) }
								placeholder={ __( 'Write column two title...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						<div className={ 'wvrblocks-imgcols__desc2' } >
							<RichText
								tagName="p"
								value={ desc2 }
								style={ {
									color: textColor, fontSize: textFontSize
								} }
								onChange={ ( value ) => setAttributes( { desc2: value } ) }
								placeholder={ __( 'Write column two description...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						{ showLinkButton && (
							<div className={ `wvrblocks-imgcols__button2 wvrblocks-imgcols__button  wvrblocks-imgcols__pro`}
							style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px` } } >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Title for optional Link Button', 'blocks-by-weaver' ) }
									value={ button2 }
									style={ { color: buttonTextColor } }
									className={ `wvrblocks-imgcols__content-button-${buttonSize}`}
									onChange={ (value) => setAttributes( { button2: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}
						{ showLinkButton && button2 && (button2.length > 0) && (
							<div className={ 'wvrblocks-imgcols__button-url wvrblocks-imgcols__pro'} >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Enter or Paste Link URL ...', 'blocks-by-weaver' ) }
									value={ buttonURL2 }
									onChange={ (text) => setAttributes( { buttonURL2: text } ) }
									formattingControls={ [ ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}



					</div>
				</div>


				<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-three' } style={ { backgroundColor: backgroundColorCol3 } } >
					<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img3' }>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL3: media.url, mediaID3: media.id } ) }
						type={'image'}
						value={mediaID3}
						render={ function( obj ) {
							return <Button
										className={ mediaID3 ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaID3 ? <img src={mediaURL3} /> : __( 'Pick Image', 'blocks-by-weaver'  )
										}
									</Button>
						} }
					/>
					</figure></div>

					<div className={ 'wvrblocks-imgcols__text' }>
						<div className={ 'wvrblocks-imgcols__title3' } >
							<RichText
								tagName="h4"
								value={ title3 }
								style={ {
									color: titleColor, fontSize: titleFontSize
								} }
								onChange={ ( value ) => setAttributes( { title3: value } ) }
								placeholder={ __( 'Write column three title...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						<div className={ 'wvrblocks-imgcols__desc3' } >
							<RichText
								tagName="p"
								value={ desc3 }
								style={ {
									color: textColor, fontSize: textFontSize
								} }
								onChange={ ( value ) => setAttributes( { desc3: value } ) }
								placeholder={ __( 'Write column three description...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						{ showLinkButton && (
							<div className={ `wvrblocks-imgcols__button3 wvrblocks-imgcols__button  wvrblocks-imgcols__pro`}
							style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px` } } >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Title for optional Link Button', 'blocks-by-weaver' ) }
									value={ button3 }
									style={ { color: buttonTextColor } }
									className={ `wvrblocks-imgcols__content-button-${buttonSize}`}
									onChange={ (value) => setAttributes( { button3: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}
						{ showLinkButton && button3 && (button3.length > 0) && (
							<div className={ 'wvrblocks-imgcols__button-url wvrblocks-imgcols__pro'} >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Enter or Paste Link URL ...', 'blocks-by-weaver' ) }
									value={ buttonURL3 }
									onChange={ (text) => setAttributes( { buttonURL3: text } ) }
									formattingControls={ [ ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}

					</div>
				</div>


				<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-four' } style={ { backgroundColor: backgroundColorCol4 } } >
					<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img4' }>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL4: media.url, mediaID4: media.id } ) }
						type={'image'}
						value={mediaID4}
						render={ function( obj ) {
							return <Button
										className={ mediaID4 ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaID4 ? <img src={mediaURL4} /> : __( 'Pick Image', 'blocks-by-weaver'  )
										}
									</Button>
						} }
					/>
					</figure></div>

					<div className={ 'wvrblocks-imgcols__text' }>
						<div className={ 'wvrblocks-imgcols__title4' } >
							<RichText
								tagName="h4"
								value={ title4 }
								style={ {
									color: titleColor, fontSize: titleFontSize
								} }
								onChange={ ( value ) => setAttributes( { title4: value } ) }
								placeholder={ __( 'Write column four title...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						<div className={ 'wvrblocks-imgcols__desc4' } >
							<RichText
								tagName="p"
								value={ desc4 }
								style={ {
									color: textColor, fontSize: textFontSize
								} }
								onChange={ ( value ) => setAttributes( { desc4: value } ) }
								placeholder={ __( 'Write column four description...', 'blocks-by-weaver') }
								keepPlaceholderOnFocus
							/>
						</div>

						{ showLinkButton && (
							<div className={ `wvrblocks-imgcols__button4 wvrblocks-imgcols__button  wvrblocks-imgcols__pro`}
							style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px` } } >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Title for optional Link Button', 'blocks-by-weaver' ) }
									value={ button4 }
									style={ { color: buttonTextColor } }
									className={ `wvrblocks-imgcols__content-button-${buttonSize}`}
									onChange={ (value) => setAttributes( { button4: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}
						{ showLinkButton && button4 && (button4.length > 0) && (
							<div className={ 'wvrblocks-imgcols__button-url wvrblocks-imgcols__pro'} >
								<RichText
									tagName={ 'p' }
									placeholder={ __('Enter or Paste Link URL ...', 'blocks-by-weaver' ) }
									value={ buttonURL4 }
									onChange={ (text) => setAttributes( { buttonURL4: text } ) }
									formattingControls={ [ ] }
									keepPlaceholderOnFocus
								/>
							</div>
							)
						}
					</div>
				</div>

			</ImageBlocks>
			</Fragment>
		];
	}
};
