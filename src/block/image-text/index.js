/**
 *  index.js: registers the block, provides code to render front-end display.
 */
/**
 * Internal dependencies
 */
import './styles/style.scss';
import './styles/editor.scss';
import ImageBlocks from './components/image-text';
import ImageBlocksBlock from './components/edit';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Block registration
 */
registerBlockType( 'wvrblocks/imgtext', {

	title: __( 'All-in-One Image/Text' ),

	description: __( 'Image and Text, side by side. BG cover/parallax image, too!' ),

	icon: 'id',

	category: 'wvrblocks',

	keywords: [
		__( 'images' ),
		__( 'text' ),
		__( 'parallax' ),
	],

	attributes: {
		bottomMargin: {
			type: 'number',
			default: 1.5,
		},

		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.wvrblocks-imgtext__image img',
			attribute: 'src',
		},

		bgURL: {
			type: 'string',
			selector: '.wp-block-wvrblocks-imgtext'
		},

		imageWidth: {
			type:		'number',
			default: 	50,
		},

		imageParallax: {
			type:		'number',
			default: 	0,
		},

		imageTopMargin: {
			type:		'number',
			default:	0,
		},


		shadowDesc: {
			type:		'number',
			default: 	0,
		},

		blockTopPadding: {
			type:		'number',
			default:	0,
		},

		blockBotPadding: {
			type:		'number',
			default:	0,
		},

		blockLeftPadding: {
			type:		'number',
			default:	0,
		},

		blockRightPadding: {
			type:		'number',
			default:	0,
		},

		alt: {
			type:		'string',
			default:	'',
		},

		blockMinHeight: {
			type:		'number',
			default:	150,
		},

		blockWidth: {
			type:		'number',
			default:	100,
		},

		descTop: {
			type: 'array',
			default: [],
		},
		descMid: {
			type: 'array',
			default: [],
		},
		descBot: {
			type: 'array',
			default: [],
		},

		descTopTopMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descTop',
			default: 0
		},

		descTopLeftMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descTop',
			default: 1
		},

		descTopColor: {
			type: 'string',
			selector: '.wvrblocks-imgtext__descTop',
			default: '#222222'
		},

		descTopFontSize: {
			type: 'number',
			elector: '.wvrblocks-imgtext__descTop',
			default: 150
		},

		descMidTopMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descMid',
			default: 1
		},

		descMidLeftMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descMid',
			default: 25
		},

		descMidColor: {
			type: 'string',
			selector: '.wvrblocks-imgtext__descMid',
			default: '#222222'
		},

		descMidFontSize: {
			type: 'number',
			elector: '.wvrblocks-imgtext__descMid',
			default: 120
		},

		descBotTopMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descBot',
			default: 1
		},

		descBotLeftMargin: {
			type: 'number',
			selector: '.wvrblocks-imgtext__descBot',
			default: 5
		},

		descBotColor: {
			type: 'string',
			selector: '.wvrblocks-imgtext__descBot',
			default: '#222222'
		},

		descBotFontSize: {
			type: 'number',
			elector: '.wvrblocks-imgtext__descBot',
			default: 100
		},

		backgroundColor: {
			type: 'string',
			default: 'transparent'
		},

		borderColor: {
			type: 'string',
			default: 'transparent'
		},

		align: {
			type: 'string',
			default: 'none',
		},

		textAlign: {
			type: 'string',
			default: 'center',
		},

		flexDir: {
			type: 'string',
			default: 'row',
		},

		mobileColumns: {
			type: 'number',
			default: 0,
		},

		shape: {
			type: 'string',
			default: 'original',
		}
	},


	edit: ImageBlocksBlock,

	save: function( props ) {

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
			imageTopMargin,
			imageParallax,
			shadowDesc,
			mediaURL,
			bgURL,
			flexDir,
			shape,
			textAlign,

		} = props.attributes;

		let dTopFontSize = descTopFontSize + '%';
		let dTopTopMargin = descTopTopMargin + '%';
		let dTopLeftMargin = descTopLeftMargin + '%';

		let dMidFontSize = descMidFontSize + '%';
		let dMidTopMargin = descMidTopMargin + '%';
		let dMidLeftMargin = descMidLeftMargin + '%';

		let dBotFontSize = descBotFontSize + '%';
		let dBotTopMargin = descBotTopMargin + '%';
		let dBotLeftMargin = descBotLeftMargin + '%';

		let imgWidth = '100';		/* assume the column flex direction */
		let descWidth = '100';
		let descAlign = textAlign;

		if ( (flexDir != 'col-normal' && flexDir != 'col-reverse') ) /* fix if row */
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
		if ( shadowDesc ) shadowClass = "has-text-shadow";


		return (
			<ImageBlocks { ...props }>

				<div className={ classnames( `wvrblocks-imgtext__image`, `wvrblocks-imgtext__shape-${shape}`) } style={{ textAlign: textAlign, width: imgWidth }}>
						{ mediaURL && <img src={mediaURL} alt={alt} style={{ marginTop: `${imageTopMargin}%`}}/> }
				</div>

				<div className={ 'wvrblocks-imgtext__descriptions' } style={{ width: descWidth, textAlign: descAlign }}>
					{ ! RichText.isEmpty( descTop ) && (
						<div className={ classnames('wvrblocks-imgtext__descTop', shadowClass) } >
						<RichText.Content
								tagName="div"
								value={ descTop }
								style={ { color: descTopColor, fontSize: dTopFontSize, marginLeft: dTopLeftMargin, marginTop: dTopTopMargin } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( descMid ) && (
						<div className={ classnames('wvrblocks-imgtext__descMid', shadowClass) } >
						<RichText.Content
								tagName="div"
								value={ descMid }
								style={ { color: descMidColor, fontSize: dMidFontSize, marginLeft: dMidLeftMargin, marginTop: dMidTopMargin } }
							/>
						</div>
					) }

					{ ! RichText.isEmpty( descBot ) && (
						<div className={ classnames('wvrblocks-imgtext__descBot', shadowClass) } >
						<RichText.Content
								tagName="div"
								value={ descBot }
								style={ { color: descBotColor, fontSize: dBotFontSize, marginLeft: dBotLeftMargin, marginTop: dBotTopMargin } }
							/>
						</div>
					) }

				</div>

			</ImageBlocks>
		);
	},
} );
