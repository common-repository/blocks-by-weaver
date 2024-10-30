/**
 *  index.js: registers the block, provides code to render front-end display.
 */
/**
 * Internal dependencies
 */
import './styles/style.scss';
import './styles/editor.scss';
import ImageBlocks from './components/image-columns';
import ImageBlocksBlock from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Block registration
 */
registerBlockType( 'wvrblocks/imgcols', {

	title: __( 'Image Columns' ),

	description: __( 'Display Images and accompanying Text in up to Four Columns.' ),

	icon: 'editor-table',

	category: 'wvrblocks',

	keywords: [
		__( 'images' ),
		__( 'columns' ),
		__( 'wvrblocks' ),
	],


	attributes: {
		bottomMargin: {
			type: 'number',
			default: 0.5,
		},

		blockWidth: {
			type:		'number',
			default:	100,
		},

		mediaID1: { type: 'number' },
		mediaID2: { type: 'number' },
		mediaID3: { type: 'number' },
		mediaID4: { type: 'number' },

		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.wvrblocks-imgcols__img1 img',
			attribute: 'src',
		},
		mediaURL2: {
			type: 'string',
			source: 'attribute',
			selector: '.wvrblocks-imgcols__img2 img',
			attribute: 'src',
		},
		mediaURL3: {
			type: 'string',
			source: 'attribute',
			selector: '.wvrblocks-imgcols__img3 img',
			attribute: 'src',
		},
		mediaURL4: {
			type: 'string',
			source: 'attribute',
			selector: '.wvrblocks-imgcols__img4 img',
			attribute: 'src',
		},

		title: { type: 'array', default: [], },
		title2: { type: 'array', default: [], },
		title3: { type: 'array', default: [], },
		title4: { type: 'array', default: [], },

		desc:  { type: 'array', default: [], },
		desc2: { type: 'array', default: [], },
		desc3: { type: 'array', default: [], },
		desc4: { type: 'array', default: [], },

		buttonURL1: { type: 'array', default:[], },
		buttonURL2: { type: 'array', default:[], },
		buttonURL3: { type: 'array', default:[], },
		buttonURL4: { type: 'array, default:[],' },

		button1: { type: 'array', default:[],},
		button2: { type: 'array', default:[],},
		button3: { type: 'array', default:[],},
		button4: { type: 'array', default:[],},

		buttonBGColor: 	{ type: 'string', default: 'rgba(0,0,0,.15)' },
		buttonRadius:	{ type: 'number', default: 0 },
		buttonTextColor: { type: 'string', default: '#000000' },
		buttonSize:		{ type: 'string', default: 'normal'},
		buttonsEnableShow:	{ type: 'boolean', default: false },

		backgroundColor: { type: 'string', default: 'transparent' },

		backgroundColorCol1: { type: 'string', default: 'transparent' },
		backgroundColorCol2: { type: 'string', default: 'transparent' },
		backgroundColorCol3: { type: 'string', default: 'transparent' },
		backgroundColorCol4: { type: 'string', default: 'transparent' },

		borderColor: {
			type: 'string',
			default: 'transparent'
		},

		textColor: {
			type: 'string',
			default: '#333333'
		},

		textSize: {
			type: 'number',
			default: 100
		},

		titleColor: {
			type: 'string',
			default: '#222222'
		},
		titleSize: {
			type: 'number',
			default: 150
		},
		align: {
			type: 'string',
			default: 'none',
		},
		textAlign: {
			type: 'string',
			default: 'center',
		},
		columns: {
			type: 'string',
			default: '1',
		},
		shapes: {
			type: 'string',
			default: 'original',
		}
	},



	edit: ImageBlocksBlock,

	save: function( props ) {

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
		} = props.attributes;

		let titleFontSize = titleSize + '%';
		let textFontSize = textSize + '%';

		let showLinkButton = true ;
		if ( ! buttonsEnableShow ) showLinkButton = false;


		return (
			<ImageBlocks { ...props }>
			<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-one' } style={ { backgroundColor: backgroundColorCol1 } }>
				{ mediaID1 && (<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img1' }>
					<div className="wvrblocks-imgcols__column-image"><img src={mediaURL} /></div>
				</figure></div> )}

				<div className={ `wvrblocks-imgcols__text` } >
					{ ! RichText.isEmpty( title ) && (
						<div className={ 'wvrblocks-imgcols__title' } >
							<RichText.Content
								tagName="h4"
								value={ title }
								style={ { color: titleColor, fontSize: titleFontSize } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( desc ) && (

						<div className={ 'wvrblocks-imgcols__desc' } >
						<RichText.Content
								tagName="p"
								value={ desc }
								style={ { color: textColor, fontSize: textFontSize } }
							/>
						</div>
					) }

					{ showLinkButton && ! RichText.isEmpty( button1 ) && (
						<div className={ 'wvrblocks-imgcols__button1 wvrblocks-imgcols__button wvrblocks-imgcols__pro'} style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px`}} >
							<a className={`wvrblocks-imgcols__content-button wvrblocks-imgcols__content-button-${buttonSize}`} href={ `${buttonURL1}` } style={ { color: buttonTextColor } }>
								<RichText.Content
								tagName=""
								value={ button1 }
							/>
							</a>
						</div>
						)
					}

				</div>
			</div>


			<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-two' } style={ { backgroundColor: backgroundColorCol2 } } >
				{ mediaID2 && (<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img2' }>
					<div className="wvrblocks-imgcols__column-image"><img src={mediaURL2} /></div>
				</figure></div>  )}

				<div className={ 'wvrblocks-imgcols__text' }>
					{ ! RichText.isEmpty( title2 ) && (
						<div className={ 'wvrblocks-imgcols__title' } >
							<RichText.Content
								tagName="h4"
								value={ title2 }
								style={ { color: titleColor, fontSize: titleFontSize } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( desc2 ) && (

						<div className={ 'wvrblocks-imgcols__desc2' } >
						<RichText.Content
								tagName="p"
								value={ desc2 }
								style={ { color: textColor, fontSize: textFontSize } }
							/>
						</div>
					) }

					{ showLinkButton && ! RichText.isEmpty( button2 ) && (
						<div className={ 'wvrblocks-imgcols__button1 wvrblocks-imgcols__button wvrblocks-imgcols__pro'} style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px`}} >
							<a className={`wvrblocks-imgcols__content-button wvrblocks-imgcols__content-button-${buttonSize}`} href={ `${buttonURL2}` } style={ { color: buttonTextColor } }>
								<RichText.Content
								tagName=""
								value={ button2 }
							/>
							</a>
						</div>
						)
					}
				</div>
			</div>


			<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-three' } style={ { backgroundColor: backgroundColorCol3 } } >
				{ mediaID3 && (<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img3' }>
					<div className="wvrblocks-imgcols__column-image"><img src={mediaURL3} /></div>
				</figure></div> )}

				<div className={ 'wvrblocks-imgcols__text' }>
					{ ! RichText.isEmpty( title3 ) && (
						<div className={ 'wvrblocks-imgcols__title' } >
							<RichText.Content
								tagName="h4"
								value={ title3 }
								style={ { color: titleColor, fontSize: titleFontSize } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( desc3 ) && (

						<div className={ 'wvrblocks-imgcols__desc2' } >
						<RichText.Content
								tagName="p"
								value={ desc3 }
								style={ { color: textColor, fontSize: textFontSize } }
							/>
						</div>
					) }

					{ showLinkButton && ! RichText.isEmpty( button3 ) && (
						<div className={ 'wvrblocks-imgcols__button1 wvrblocks-imgcols__button wvrblocks-imgcols__pro'} style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px`}} >
							<a className={`wvrblocks-imgcols__content-button wvrblocks-imgcols__content-button-${buttonSize}`} href={ `${buttonURL3}` } style={ { color: buttonTextColor } }>
								<RichText.Content
								tagName=""
								value={ button3 }
							/>
							</a>
						</div>
						)
					}
				</div>
			</div>


			<div className={ 'wvrblocks-imgcols__column wvrblocks-imgcols__column-four' } style={ { backgroundColor: backgroundColorCol4 } } >
				{ mediaID4 && (<div className={ 'wvrblocks-imgcols__image' }><figure className={ 'wvrblocks-imgcols__img4' }>
					<div className="wvrblocks-imgcols__column-image"><img src={mediaURL4} /></div>
				</figure></div> )}

				<div className={ 'wvrblocks-imgcols__text' }>
					{ ! RichText.isEmpty( title4 ) && (
						<div className={ 'wvrblocks-imgcols__title' } >
							<RichText.Content
								tagName="h4"
								value={ title4 }
								style={ { color: titleColor, fontSize: titleFontSize } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( desc4 ) && (

						<div className={ 'wvrblocks-imgcols__desc4' } >
						<RichText.Content
								tagName="p"
								value={ desc4 }
								style={ { color: textColor, fontSize: textFontSize } }
							/>
						</div>
					) }

					{ showLinkButton && button4 && (button4.length > 0) && (
						<div className={ 'wvrblocks-imgcols__button4 wvrblocks-imgcols__button wvrblocks-imgcols__pro'} style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px`}} >
							<a className={`wvrblocks-imgcols__content-button wvrblocks-imgcols__content-button-${buttonSize}`} href={ `${buttonURL4}` } style={ { color: buttonTextColor } }>
								{ button4 }
							</a>
						</div>
						)
					}

					{ showLinkButton && ! RichText.isEmpty( button4 ) && (
						<div className={ 'wvrblocks-imgcols__button1 wvrblocks-imgcols__button wvrblocks-imgcols__pro'} style={ { backgroundColor: buttonBGColor, borderRadius: `${buttonRadius}px`}} >
							<a className={`wvrblocks-imgcols__content-button wvrblocks-imgcols__content-button-${buttonSize}`} href={ `${buttonURL4}` } style={ { color: buttonTextColor } }>
								<RichText.Content
								tagName=""
								value={ button4 }
							/>
							</a>
						</div>
						)
					}
				</div>
			</div>

			</ImageBlocks>
		);
	},
} );
