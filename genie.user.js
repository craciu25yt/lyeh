// ==UserScript==
// @name       Genie
// @namespace  npm/genius-bleh
// @version    1.0.0
// @match      https://genius.com/*
// @connect    genius.com
// @connect    images.genius.com
// @connect    t2.genius.com
// @grant      GM_addStyle
// @grant      GM_deleteValue
// @grant      GM_getValue
// @grant      GM_setValue
// @grant      GM_xmlhttpRequest
// @run-at     document-start
// ==/UserScript==

(function() {
	"use strict";
	var s = new Set();
	var _css = async (t) => {
		if (s.has(t)) return;
		s.add(t);
		((c) => {
			if (typeof GM_addStyle === "function") GM_addStyle(c);
			else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
		})(t);
	};
	_css(":root[data-lyeh-theme=dark]{--lyeh-bg-primary:#292424;--lyeh-bg-shadow:#1a1616;--lyeh-bg-secondary:#362f2f;--lyeh-bg-thirdy:#2e2828;--lyeh-accent:#ed4597;--lyeh-text-main:#f1f2f6;--lyeh-text-muted:#a4b0be;--lyeh-current-song-accent:#000;--lyeh-current-song-accent-secondary:#000;--artist-banner-url:linear-gradient(180deg, #1e1e2e 0%, #313244 50%, #1e1e2e 100%);--current-accent:#ffff64}body,div[class^=PageLayout__Container],main{transition:background-color 1s;background-color:var(--lyeh-bg-primary)!important;color:var(--lyeh-text-main)!important;fill:var(--lyeh-text-main)!important}div[class^=Lyrics__Container]{letter-spacing:-.01em!important;color:var(--lyeh-text-main)!important;font-size:1.15rem!important;line-height:1.7!important}div[class^=Lyrics__Container] a{border-bottom:1px dashed #ff47574d;transition:all .2s;color:inherit!important;-webkit-text-decoration-color:var(--lyeh-accent)!important;text-decoration-color:var(--lyeh-accent)!important}div[class^=Lyrics__Container] a:hover{border-bottom:1px solid var(--lyeh-accent);background:#ff47571a}span[class^=ReferentFragment]{background:var(--lyeh-bg-secondary);color:var(--lyeh-text-main)!important}span[class^=ReferentFragment]:hover{border-bottom:1px solid var(--lyeh-accent);background:#fa64a0b3;color:var(--lyeh-text-main)!important}[class^=TextLabel],[class^=ContributorsCreditSong]{color:var(--lyeh-text-main)!important}a:not([class^=StickyNavSectionLink__StyledLink]){color:var(--lyeh-text-main)!important;-webkit-text-decoration:underline #ffffff80!important;text-decoration:underline #ffffff80!important}span{color:var(--lyeh-text-main)!important}div[class^=SongHeader-desktop__CoverArt] img{border-radius:10px}div[class^=ContributorSidebar__Container]{box-shadow:10px 5px 5px var(--lyeh-bg-shadow);border-radius:15px;padding-right:14px;background-color:var(--lyeh-bg-secondary)!important}button[class^=Button__Container-sc]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}button[class^=Button__Container-sc]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}a[class^=Button__Container-sc]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}a[class^=Button__Container-sc]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}button[class^=ContributorActionTextbox]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}div[class^=ContributorSidebarSection__HeaderButtons] svg path:first-child{fill:var(--lyeh-text-main)!important}div[class^=ContributorSidebarSection__HeaderButtons] svg path:last-child{fill:var(--lyeh-bg-primary)!important}div[class^=PageGrid-desktop][class*=StickyToolbar__Container]{border-bottom:none;background-color:var(--lyeh-bg-primary)!important}button[class^=SmallButton__Container]{border-color:var(--lyeh-text-main);color:var(--lyeh-text-main)!important}button[class^=SmallButton__Container]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}a[class^=SmallButton__Container]{border-color:var(--lyeh-text-main);color:var(--lyeh-text-main)!important}a[class^=SmallButton__Container]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}svg[class^=LineItemActionIcon__Icon][data-action-name=recognized] path,svg[class^=LineItemActionIcon__Icon][data-action-name=accepted] path,svg[class^=LineItemActionIcon__Icon][data-action-name=hit_pageview_threshold] path,svg[class^=LineItemActionIcon__Icon][data-action-name=upvoted] path{fill:#4bbf38!important}div[class^=LineItemList__Container] path{fill:#9a9a9a!important}div[class^=LineItem__IqDifference]{color:#4bbf38!important}svg[class^=LineItemActionIcon__Icon][data-action-name=earned] path{fill:#c7ba18!important}span[class^=ContributorActionTextbox]{color:var(--lyeh-text-main)!important}[color=background\\.iqPoints]{color:#4bbf38!important}[color=background\\.negativeNumber]{color:#f03e26!important}div[class^=ContributorsCreditMarkedComplete__CompletedUsernameContainer]{color:var(--lyeh-text-main)!important}div[class^=TooltipShadow]{color:var(--lyeh-text-main);z-index:1;background-color:#0000;border-radius:15px;position:relative;overflow:hidden}div[class^=TooltipShadow]:before{content:\"\";filter:blur(2px)brightness(.5);z-index:-1;background-position:50%;background-size:cover;border:0;transition:all 1s;position:absolute;inset:0;transform:scale(1.1);background-image:var(--artist-banner-url)!important;border-radius:15px!important}div[class^=ArtistTooltip__Verified]{color:#000;text-align:center;background-color:#ffff64;margin-right:30%;font-size:.75rem;border-radius:15px!important}div[class^=TooltipShadow]:has([class^=ArtistTooltip__Verified]){box-shadow:1px 1px 20px #ffff6480!important}div[class^=TooltipShadow]:has([role=moderator]){box-shadow:1px 1px 20px #047ec680!important}div[class^=Placeholder__Container]{background-color:#fa64a0b3!important}span[class^=UserBadge__Iq]{border-radius:10px;padding:.125rem .225rem;color:#000!important;background-color:#ffff64cc!important}button{color:#fff!important}div[class^=UserBadge__Role-sc-]{align-items:center;padding:4px 0;transition:all .3s ease-in-out;display:inline-flex;overflow:hidden}span[class^=UserBadge__RoleLabel-sc-]{opacity:0;white-space:nowrap;max-width:0;margin-right:0;transition:max-width .3s ease-in-out,opacity .2s ease-in-out,margin .3s ease-in-out;display:inline-block}div[class^=UserBadge__Role-sc-]:hover span[class^=UserBadge__RoleLabel-sc-]{opacity:1;max-width:100px;margin-right:6px}span[class^=RoleIcon__Container-sc-]{flex-shrink:0;align-items:center;width:14px;height:14px;display:flex}span[class^=RoleIcon__Container-sc-] svg{width:100%;height:100%}div[class^=AlbumTracklist__Track]{color:var(--lyeh-text-main)}div[class^=PageGrid-desktop][class*=SongHeader-desktop__Container] :is(span,a,button,path){color:color-contrast(var(--current-accent))!important;fill:color-contrast(var(--current-accent))!important}");
	_css("html{scroll-behavior:smooth}div[class^=Modal-shared__ModalSharedContainer]{background-color:#0000}div[class^=ContributionsScholars__Container]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-image:none;border-radius:10px 10px 0 0;background-color:#000000b3!important}div[class^=RecentActivity__Container]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#0000001a}div[class^=LineItem__ItemRow]{background-color:#16141496;border:0;border-radius:10px;margin-top:8px;border:1px solid #fff3!important}div[class^=LineItem__ItemRow]:hover{background-color:#161414;transition:all .2s cubic-bezier(.4,0,.2,1)}div[class^=Annotation__Container]{color:var(--lyeh-text-main)}div[class^=LineItemList__Container],div[class^=LineItemList__Container]>div{background:0 0!important}body[class^=act-embed\\ cont-searches]{padding:20px;background-color:#0000!important}.mini_card{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#29242466;border:1px solid #7d7d7d;border-radius:10px}mini-song-card .mini_card{padding:10px}.mini_card path{fill:var(--lyeh-text-main)!important}.mini_card:hover{background-color:#16141496!important}.mini_card-lyric_excerpt span{color:#d6d6d6!important;background-color:#fa64a080!important}div[class^=mini_card-thumbnail]{border-radius:10px}a[class^=full_width_button]{background-color:#0000!important}div[class^=thumbnail_grid]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);border:1px solid #7d7d7d;border-radius:10px;background-color:#29242466!important}div[class^=thumbnail_grid-grid_element]{padding:5px}div[class^=thumbnail_grid-grid_element]:hover{background-color:#16141496!important}.vertical_album_card:hover{background-color:unset!important}");
	_css("h4[class^=SiteCommandPalettePage__PageContainer],[class^=SiteCommandPaletteItem__Title],div[class^=SiteCommandPalettePage__PageContainer] h4{color:var(--lyeh-text-main)!important}div[class^=SiteCommandPalettePage__PageContainer] [class^=command-palette-list-item]{margin-bottom:2px;border-radius:15px!important}input#command-palette-search-input[type=text]{color:#fff!important;-webkit-text-fill-color:#fff!important}.command-palette div[id^=headlessui-dialog-panel-]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#151a1a80!important;background-image:none!important;border-radius:15px!important}.command-palette [class*=bg-gray-900][class*=bg-opacity-80]{background-color:#0000}html{overflow:visible!important}");
	_css("div[class^=apple_music_player-container]{background-color:#0000;border:0!important}body[ng-app=genius\\.apple_music_player]{border-radius:10px;padding:0;display:block;background-color:#0000!important}div[class=apple_music_player-player]{background-color:var(--lyeh-bg-secondary);border-radius:10px;padding:5px}div[class^=apple_music_player-player-info]{flex-direction:column;justify-content:center;display:flex}div[class^=apple_music_player-player-info-title]{padding:0 0 0 5px;font-size:1rem;line-height:1.2;margin:0!important}div[class^=apple_music_player-player-info-artist]{padding:0 0 0 5px;font-size:.8rem;line-height:1.2;margin:0!important}div[class^=apple_music_player-player-song_art]{justify-content:center;align-items:center;width:60px;height:60px;display:flex;position:static}div[class^=apple_music_player-seekbar]:before{background-color:var(--lyeh-text-main)}div[class^=apple_music_player-player-seekbar-dashed]{border-bottom:2px dashed var(--lyeh-text-main)}.cover_art-image{border-radius:5px}.cover_art{background-color:#0000!important}.apple_music_player-seekbar-scrubber-circle{background-color:var(--lyeh-text-main)!important}");
	_css("textarea[class^=TextInput-sc]{color:var(--lyeh-text-main);border:1px solid var(--lyeh-text-main)!important}button[class*=jSZRoS]{background-color:#56cd4d;color:#000!important;border:1px solid var(--lyeh-text-main)!important}");
	_css("div[class^=styleAnchors__PageHeaderDropdownMenu]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#29242466;border-radius:10px;top:3rem!important}div[class^=styleAnchors__PageHeaderDropdownMenu][class*=PageHeaderDropdown-desktop__Container]:has([src*=\"/inboxes/messages_inbox?embed=true\"]){width:40vw!important}div[class*=styleAnchors__PageHeaderDropdownMenu][class*=PageHeaderDropdown-desktop__Container]{width:35vw!important}[class^=PageHeaderMenu__Title][class*=PageHeaderMenu__Item]:hover{color:var(--lyeh-text-main);transition:background-color .3s;background-color:#fa64a0b3!important}div[class^=PageHeaderInbox-desktop__Label]{display:none!important}form[class^=StickyNavSearch-desktop__Form]{background-color:var(--lyeh-bg-primary);border-radius:15px}input[class^=StickyNavSearch-desktop__Input]{background-color:var(--lyeh-bg-primary);justify-content:center;margin-left:15px;color:#fff!important;-webkit-text-fill-color:#fff!important}div[class^=styleAnchors__PageHeaderDropdownMenu] div[class^=LineItemList__Container]{margin:20px}div[class^=LineItemDetail__Container]{background-color:#16141496!important}div[class^=LyricsDiffsSection__Container]{background-color:#0000!important}div[class=lyeh__ItemParent]:has([class^=LineItemDetail__Container]) [class^=LineItem__ItemRow]{border-radius:10px 10px 0 0;border-bottom:none!important}div[class=lyeh__ItemParent]:has([class^=LineItemDetail__Container]) [class^=LineItemDetail__Container]{border-radius:0 0 10px 10px;color:var(--lyeh-text-main)!important;border:1px solid #fff3!important}div[class^=ExpandableDiff__Lines] ins{background-color:#13ff004a!important}div[class^=ExpandableDiff__Lines] del{background-color:#ff00004a!important}div[class^=DetailSection__SectionWrapper]{background-color:#0000!important}div[class^=DetailSection__SectionWrapper]:first-child{margin-top:10px;background-color:#0000!important}div[class^=DetailSection-shared]{background-color:#0000!important}a[class^=MiniCard__Link]{border:1px solid #fff9;border-radius:10px;padding:.5rem;background-color:#16141496!important}a[class^=MiniCard__Link]:hover{transition:all .2s cubic-bezier(.4,0,.2,1);background-color:#fa64a0b3!important}div[class*=MiniCard__Thumbnail]{border-radius:10px}div[class^=Referent__FragmentContainer],a[class^=Referent__FragmentHighlight]{background-color:#0000}a[class^=UnreviewedAnnotation__Unreviewed],div[class^=UnreviewedAnnotation__Unreviewed]{border-radius:4px;background:0 0!important}body[class^=act-messages_inbox]{background-color:#0000!important}div[class^=feed_dropdown-item]{border-radius:10px;margin:10px;background-color:#16141496!important;border:1px solid #fff3!important}div[class^=feed_dropdown-item]:hover{transition:all .2s cubic-bezier(.4,0,.2,1);background-color:#161414!important}.modal_window-content{background-color:#0000!important}.modal_window-content p{background-color:#fa64a080;border-radius:5px;padding:5px;border:1px solid #ffffff4d!important}.u-dark_overlay:before{background-color:#16141496!important}.conversation-compose_area{background-color:#0000!important}textarea[class^=square_input]{color:#fff!important;background-color:#0000!important;border:1px solid #ffffff4d!important;border-radius:10px!important;padding:5px 10px!important}textarea[class^=square_input]:focus{transition:all .2s cubic-bezier(.4,0,.2,1);box-shadow:inset 0 0 .3em #fa64a080!important}.square_button{color:var(--lyeh-text-main)!important;background-color:#161414!important;border:1px solid #ffffff4d!important;border-radius:10px!important;padding:5px 10px!important}.square_button:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}span[class*=text_label--purple]{background-color:#0000;border:none;border-color:none!important}div[class=conversation] span[class*=text_label]:not([class*=text_label--purple]){background-color:#fa64a080;border-radius:4px;padding:3px;border-bottom:1px!important}div[class^=MetadataChangesSection__Container]{background:0 0;padding:0}div[class^=LineItem__EventCountBadge]{color:#fff;border:1px solid #7d7d7d;background-color:#0006!important}div[class^=StickyNavSearch-desktop__Icon] path{fill:#fff!important}");
	_css("h2{color:var(--lyeh-text-main)!important}nav[class^=StickyNav-desktop__Container]:has(~div[class^=Profile__Container]){background-color:var(--current-accent);transition:all .5s cubic-bezier(.4,0,.2,1)!important}nav[class^=StickyNav-desktop__Container]:has(~div[class^=Profile__Container]) :is(svg,a,span){fill:contrast-color(var(--current-accent));color:contrast-color(var(--current-accent))!important;text-decoration:none!important;transition:all .5s cubic-bezier(.4,0,.2,1)!important}main[class*=ProfileContent-desktop__PageGrid] path{fill:var(--lyeh-text-main)!important}div[class^=DiscographyItem__Info]{color:var(--lyeh-text-main)!important}span[class^=LabelWithIcon__Container] path{fill:var(--lyeh-text-main)!important}button[class^=DropdownList__LabeledButton]{border:1px solid var(--lyeh-text-main)}button[class^=DropdownList__LabeledButton]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}button[class^=VotingActions__Button][aria-pressed=true] svg[class^=VotingActions__ThumbsUp] path{fill:#4bbf38!important}button[class^=VotingActions__Button][aria-pressed=true] svg[class^=VotingActions__ThumbsDown] path{fill:#bf4538!important}a[class^=DiscographyItem__Container]{border-radius:10px;padding:3px}a[class^=DiscographyItem__Container]:hover{background-color:#16141496;border:1px solid #fff9;scale:1.1;transition:all .4s cubic-bezier(.4,0,.2,1)!important}div[class^=SizedImage__Container]{border-radius:8px}div[class^=PopularSongs__Container],div[class^=PopularAlbums__Container]{border:1px solid #fff9;border-radius:10px;background-color:#16141496!important}button[class*=ProfileContent-desktop__FeaturedButton]{background-color:#0000}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc]{background-color:var(--current-accent);color:#000;fill:#fff;border-radius:10px;padding:2px 6px;color:contrast-color(var(--current-accent))!important;transition:all .5s cubic-bezier(.4,0,.2,1)!important}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc] svg{fill:contrast-color(var(--current-accent));transition:all .4s cubic-bezier(.4,0,.2,1)!important}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc] path{fill:contrast-color(contrast-color(var(--current-accent)))}div[class^=ArtistAvatar__Container]{border-color:var(--current-accent);transition:all .5s cubic-bezier(.4,0,.2,1)!important}ul[class^=DiscographyItemList]{gap:1rem;overflow:visible}a[class*=OptOutButton__Container-sc]{display:none}hr[class^=ProfileContent-desktop__Divider]{border-color:#fff3}div[class^=CollaboratorEntry__Container],li[class^=IqEarnersList__List]{border-color:#fff3!important}.iHfhfx{background-color:#fa64a080}ul[class^=DropdownList__ItemsContainer]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#16141496;border:1px solid #fff9}a[class^=ProfilesDropdown__SocialLink]:hover{background-color:#fa64a080}span[class^=DropdownList__Caret]{background-color:var(--lyeh-text-main)!important}div[class^=QuestionAnswerList__List]{gap:10px}a[class^=QuestionAnswerList__ItemContainer]{column-gap:10px;border:1px solid var(--lyeh-text-main)!important;border-radius:10px!important}");
	_css("nav[class^=StickyNav-desktop__Left] span,nav[class^=StickyNav-desktop__Container] div[class^=PageHeaderMenu__Container] span{color:color-contrast(var(--current-accent))!important}div[class^=Question__Attribution],div[class^=Contributors__LabelContainerRow]{color:var(--lyeh-text-main)}div[class^=Answer-desktop__Card]{border-radius:10px}");
	var __defProp = Object.defineProperty;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __esm = (fn, res) => function __init() {
		return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
	};
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	function srgbToLinear(c) {
		const s = c / 255;
		return s <= .04045 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);
	}
	function linearToSrgb(c) {
		const s = c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055;
		return Math.round(Math.max(0, Math.min(255, s * 255)));
	}
	function rgbToOklch(r, g, b) {
		const lr = srgbToLinear(r);
		const lg = srgbToLinear(g);
		const lb = srgbToLinear(b);
		const l_ = .4122214708 * lr + .5363325363 * lg + .0514459929 * lb;
		const m_ = .2119034982 * lr + .6806995451 * lg + .1073969566 * lb;
		const s_ = .0883024619 * lr + .2817188376 * lg + .6299787005 * lb;
		const l3 = Math.cbrt(l_);
		const m3 = Math.cbrt(m_);
		const s3 = Math.cbrt(s_);
		const L = .2104542553 * l3 + .793617785 * m3 - .0040720468 * s3;
		const a = 1.9779984951 * l3 - 2.428592205 * m3 + .4505937099 * s3;
		const bLab = .0259040371 * l3 + .7827717662 * m3 - .808675766 * s3;
		const C = Math.sqrt(a * a + bLab * bLab);
		let H = Math.atan2(bLab, a) * (180 / Math.PI);
		if (H < 0) H += 360;
		return {
			l: L,
			c: C,
			h: H
		};
	}
	function oklchToRgb(l, c, h) {
		const hRad = h * (Math.PI / 180);
		const a = c * Math.cos(hRad);
		const bLab = c * Math.sin(hRad);
		const l3 = l + .3963377774 * a + .2158037573 * bLab;
		const m3 = l - .1055613458 * a - .0638541728 * bLab;
		const s3 = l - .0894841775 * a - 1.291485548 * bLab;
		const l_ = l3 * l3 * l3;
		const m_ = m3 * m3 * m3;
		const s_ = s3 * s3 * s3;
		const lr = 4.0767416621 * l_ - 3.3077115913 * m_ + .2309699292 * s_;
		const lg = -1.2684380046 * l_ + 2.6097574011 * m_ - .3413193965 * s_;
		const lb = -.0041960863 * l_ - .7034186147 * m_ + 1.707614701 * s_;
		return [
			linearToSrgb(lr),
			linearToSrgb(lg),
			linearToSrgb(lb)
		];
	}
	function pixelsRgbToOklchScaled(pixels) {
		const out = new Array(pixels.length);
		for (let i = 0; i < pixels.length; i++) {
			const [r, g, b] = pixels[i];
			const { l, c, h } = rgbToOklch(r, g, b);
			out[i] = [
				Math.round(l * 255),
				Math.round(c / .4 * 255),
				Math.round(h / 360 * 255)
			];
		}
		return out;
	}
	function paletteOklchScaledToRgb(colors) {
		return colors.map(({ color: [ls, cs, hs], population }) => {
			return {
				color: oklchToRgb(ls / 255, cs / 255 * .4, hs / 255 * 360),
				population
			};
		});
	}
	var init_color_space = __esm({ "src/color-space.ts"() {
		"use strict";
	} });
	function rgbToHsl(r, g, b) {
		const r1 = r / 255;
		const g1 = g / 255;
		const b1 = b / 255;
		const max = Math.max(r1, g1, b1);
		const min = Math.min(r1, g1, b1);
		const l = (max + min) / 2;
		let h = 0;
		let s = 0;
		if (max !== min) {
			const d = max - min;
			s = l > .5 ? d / (2 - max - min) : d / (max + min);
			if (max === r1) h = ((g1 - b1) / d + (g1 < b1 ? 6 : 0)) / 6;
			else if (max === g1) h = ((b1 - r1) / d + 2) / 6;
			else h = ((r1 - g1) / d + 4) / 6;
		}
		return {
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			l: Math.round(l * 100)
		};
	}
	function relativeLuminance(r, g, b) {
		const toLinear = (c) => {
			const s = c / 255;
			return s <= .04045 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);
		};
		return .2126 * toLinear(r) + .7152 * toLinear(g) + .0722 * toLinear(b);
	}
	function contrastRatio(l1, l2) {
		const lighter = Math.max(l1, l2);
		const darker = Math.min(l1, l2);
		return (lighter + .05) / (darker + .05);
	}
	function createColor(r, g, b, population, proportion = 0) {
		return new ColorImpl(r, g, b, population, proportion);
	}
	var ColorImpl;
	var init_color = __esm({ "src/color.ts"() {
		"use strict";
		init_color_space();
		ColorImpl = class {
			constructor(r, g, b, population, proportion) {
				this._r = r;
				this._g = g;
				this._b = b;
				this.population = population;
				this.proportion = proportion;
			}
			rgb() {
				return {
					r: this._r,
					g: this._g,
					b: this._b
				};
			}
			hex() {
				const toHex = (n) => n.toString(16).padStart(2, "0");
				return `#${toHex(this._r)}${toHex(this._g)}${toHex(this._b)}`;
			}
			hsl() {
				if (!this._hsl) this._hsl = rgbToHsl(this._r, this._g, this._b);
				return this._hsl;
			}
			oklch() {
				if (!this._oklch) this._oklch = rgbToOklch(this._r, this._g, this._b);
				return this._oklch;
			}
			css(format = "rgb") {
				switch (format) {
					case "hsl": {
						const { h, s, l } = this.hsl();
						return `hsl(${h}, ${s}%, ${l}%)`;
					}
					case "oklch": {
						const { l, c, h } = this.oklch();
						return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`;
					}
					default: return `rgb(${this._r}, ${this._g}, ${this._b})`;
				}
			}
			array() {
				return [
					this._r,
					this._g,
					this._b
				];
			}
			toString() {
				return this.hex();
			}
			get textColor() {
				return this.isDark ? "#ffffff" : "#000000";
			}
			get luminance() {
				if (this._luminance === void 0) this._luminance = relativeLuminance(this._r, this._g, this._b);
				return this._luminance;
			}
			get isDark() {
				return this.luminance <= .179;
			}
			get isLight() {
				return !this.isDark;
			}
			get contrast() {
				if (!this._contrast) {
					const lum = this.luminance;
					const white = contrastRatio(lum, 1);
					const black = contrastRatio(lum, 0);
					const foreground = this.isDark ? createColor(255, 255, 255, 0, 0) : createColor(0, 0, 0, 0, 0);
					this._contrast = {
						white: Math.round(white * 100) / 100,
						black: Math.round(black * 100) / 100,
						foreground
					};
				}
				return this._contrast;
			}
		};
	} });
	var pipeline_exports = {};
	__export(pipeline_exports, {
		computeFallbackColor: () => computeFallbackColor,
		createPixelArray: () => createPixelArray,
		extractPalette: () => extractPalette,
		validateOptions: () => validateOptions
	});
	function validateOptions(options) {
		let { colorCount, quality } = options;
		if (typeof colorCount === "undefined" || !Number.isInteger(colorCount)) colorCount = 10;
		else if (colorCount === 1) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
		else {
			colorCount = Math.max(colorCount, 2);
			colorCount = Math.min(colorCount, 20);
		}
		if (typeof quality === "undefined" || !Number.isInteger(quality) || quality < 1) quality = 10;
		const ignoreWhite = options.ignoreWhite !== void 0 ? !!options.ignoreWhite : true;
		const whiteThreshold = typeof options.whiteThreshold === "number" ? options.whiteThreshold : 250;
		const alphaThreshold = typeof options.alphaThreshold === "number" ? options.alphaThreshold : 125;
		const minSaturation = typeof options.minSaturation === "number" ? Math.max(0, Math.min(1, options.minSaturation)) : 0;
		const colorSpace = options.colorSpace ?? "oklch";
		return {
			colorCount,
			quality,
			ignoreWhite,
			whiteThreshold,
			alphaThreshold,
			minSaturation,
			colorSpace
		};
	}
	function createPixelArray(data, pixelCount, quality, filterOptions) {
		const { ignoreWhite = true, whiteThreshold = 250, alphaThreshold = 125, minSaturation = 0 } = filterOptions;
		const pixelArray = [];
		for (let i = 0; i < pixelCount; i += quality) {
			const offset = i * 4;
			const r = data[offset];
			const g = data[offset + 1];
			const b = data[offset + 2];
			const a = data[offset + 3];
			if (a !== void 0 && a < alphaThreshold) continue;
			if (ignoreWhite && r > whiteThreshold && g > whiteThreshold && b > whiteThreshold) continue;
			if (minSaturation > 0) {
				const max = Math.max(r, g, b);
				if (max === 0 || (max - Math.min(r, g, b)) / max < minSaturation) continue;
			}
			pixelArray.push([
				r,
				g,
				b
			]);
		}
		return pixelArray;
	}
	function computeFallbackColor(data, pixelCount, quality) {
		let rTotal = 0;
		let gTotal = 0;
		let bTotal = 0;
		let count = 0;
		for (let i = 0; i < pixelCount; i += quality) {
			const offset = i * 4;
			rTotal += data[offset];
			gTotal += data[offset + 1];
			bTotal += data[offset + 2];
			count++;
		}
		if (count === 0) return null;
		return [
			Math.round(rTotal / count),
			Math.round(gTotal / count),
			Math.round(bTotal / count)
		];
	}
	function extractPalette(data, width, height, opts, quantizer) {
		const pixelCount = width * height;
		const filterOptions = {
			ignoreWhite: opts.ignoreWhite,
			whiteThreshold: opts.whiteThreshold,
			alphaThreshold: opts.alphaThreshold,
			minSaturation: opts.minSaturation
		};
		let pixelArray = createPixelArray(data, pixelCount, opts.quality, filterOptions);
		if (pixelArray.length === 0) pixelArray = createPixelArray(data, pixelCount, opts.quality, {
			...filterOptions,
			ignoreWhite: false
		});
		if (pixelArray.length === 0) pixelArray = createPixelArray(data, pixelCount, opts.quality, {
			...filterOptions,
			ignoreWhite: false,
			alphaThreshold: 0
		});
		let quantized;
		if (opts.colorSpace === "oklch") {
			const scaled = pixelsRgbToOklchScaled(pixelArray);
			quantized = paletteOklchScaledToRgb(quantizer.quantize(scaled, opts.colorCount));
		} else quantized = quantizer.quantize(pixelArray, opts.colorCount);
		if (quantized.length > 0) {
			const totalPopulation = quantized.reduce((sum, q) => sum + q.population, 0);
			return quantized.map(({ color: [r, g, b], population }) => createColor(r, g, b, population, totalPopulation > 0 ? population / totalPopulation : 0));
		}
		const fallback = computeFallbackColor(data, pixelCount, opts.quality);
		return fallback ? [createColor(fallback[0], fallback[1], fallback[2], 1, 1)] : null;
	}
	var init_pipeline = __esm({ "src/pipeline.ts"() {
		"use strict";
		init_color();
		init_color_space();
	} });
	var browser_exports = {};
	__export(browser_exports, { BrowserPixelLoader: () => BrowserPixelLoader });
	var BrowserPixelLoader;
	var init_browser = __esm({ "src/loaders/browser.ts"() {
		"use strict";
		BrowserPixelLoader = class {
			async load(source) {
				if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) return this.loadFromImage(source);
				if (typeof HTMLCanvasElement !== "undefined" && source instanceof HTMLCanvasElement) return this.loadFromCanvas(source);
				if (typeof ImageData !== "undefined" && source instanceof ImageData) return {
					data: source.data,
					width: source.width,
					height: source.height
				};
				if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) return this.loadFromVideo(source);
				if (typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap) return this.loadFromImageBitmap(source);
				if (typeof OffscreenCanvas !== "undefined" && source instanceof OffscreenCanvas) return this.loadFromOffscreenCanvas(source);
				throw new Error("Unsupported source type. Expected HTMLImageElement, HTMLCanvasElement, HTMLVideoElement, ImageData, ImageBitmap, or OffscreenCanvas.");
			}
			loadFromImage(img) {
				if (!img.complete) throw new Error("Image has not finished loading. Wait for the \"load\" event before calling getColor/getPalette.");
				if (!img.naturalWidth) throw new Error("Image has no dimensions. It may not have loaded successfully.");
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				const width = canvas.width = img.naturalWidth;
				const height = canvas.height = img.naturalHeight;
				ctx.drawImage(img, 0, 0, width, height);
				try {
					return {
						data: ctx.getImageData(0, 0, width, height).data,
						width,
						height
					};
				} catch (e) {
					if (e instanceof DOMException && e.name === "SecurityError") {
						const err = new Error("Image is tainted by cross-origin data. Add crossorigin=\"anonymous\" to the <img> tag and ensure the server sends appropriate CORS headers.");
						err.cause = e;
						throw err;
					}
					throw e;
				}
			}
			loadFromCanvas(canvas) {
				const ctx = canvas.getContext("2d");
				const { width, height } = canvas;
				return {
					data: ctx.getImageData(0, 0, width, height).data,
					width,
					height
				};
			}
			loadFromVideo(video) {
				if (video.readyState < 2) throw new Error("Video is not ready. Wait for the \"loadeddata\" or \"canplay\" event before calling getColor/getPalette.");
				const width = video.videoWidth;
				const height = video.videoHeight;
				if (!width || !height) throw new Error("Video has no dimensions. It may not have loaded successfully.");
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				canvas.width = width;
				canvas.height = height;
				ctx.drawImage(video, 0, 0, width, height);
				return {
					data: ctx.getImageData(0, 0, width, height).data,
					width,
					height
				};
			}
			loadFromOffscreenCanvas(canvas) {
				const ctx = canvas.getContext("2d");
				if (!ctx) throw new Error("Could not get 2D context from OffscreenCanvas.");
				const { width, height } = canvas;
				return {
					data: ctx.getImageData(0, 0, width, height).data,
					width,
					height
				};
			}
			loadFromImageBitmap(bitmap) {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				canvas.width = bitmap.width;
				canvas.height = bitmap.height;
				ctx.drawImage(bitmap, 0, 0);
				return {
					data: ctx.getImageData(0, 0, bitmap.width, bitmap.height).data,
					width: bitmap.width,
					height: bitmap.height
				};
			}
		};
	} });
	var WORKER_SOURCE;
	var init_worker_script = __esm({ "src/worker/worker-script.ts"() {
		"use strict";
		WORKER_SOURCE = `
'use strict';

// -------------------------------------------------------------------------
// Inlined MMCQ (Modified Median Cut Quantization)
// -------------------------------------------------------------------------

var SIGBITS = 5;
var RSHIFT = 3;
var MAX_ITER = 1000;
var FRACT_POP = 0.75;
var HISTO_SIZE = 32768;

function colorIndex(r, g, b) {
    return (r << 10) + (g << 5) + b;
}

function getHisto(pixels) {
    var h = new Uint32Array(HISTO_SIZE);
    for (var i = 0; i < pixels.length; i++) {
        var p = pixels[i];
        h[colorIndex(p[0] >> RSHIFT, p[1] >> RSHIFT, p[2] >> RSHIFT)]++;
    }
    return h;
}

function VBox(r1, r2, g1, g2, b1, b2, histo) {
    this.r1 = r1; this.r2 = r2;
    this.g1 = g1; this.g2 = g2;
    this.b1 = b1; this.b2 = b2;
    this.histo = histo;
    this._count = -1;
    this._volume = -1;
    this._avg = null;
}

VBox.prototype.volume = function(force) {
    if (this._volume < 0 || force) {
        this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1);
    }
    return this._volume;
};

VBox.prototype.count = function(force) {
    if (this._count < 0 || force) {
        var n = 0;
        for (var i = this.r1; i <= this.r2; i++)
            for (var j = this.g1; j <= this.g2; j++)
                for (var k = this.b1; k <= this.b2; k++)
                    n += this.histo[colorIndex(i, j, k)] || 0;
        this._count = n;
    }
    return this._count;
};

VBox.prototype.copy = function() {
    return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
};

VBox.prototype.avg = function(force) {
    if (!this._avg || force) {
        var mult = 1 << RSHIFT;
        if (this.r1 === this.r2 && this.g1 === this.g2 && this.b1 === this.b2) {
            this._avg = [this.r1 << RSHIFT, this.g1 << RSHIFT, this.b1 << RSHIFT];
        } else {
            var ntot = 0, rsum = 0, gsum = 0, bsum = 0;
            for (var i = this.r1; i <= this.r2; i++)
                for (var j = this.g1; j <= this.g2; j++)
                    for (var k = this.b1; k <= this.b2; k++) {
                        var hval = this.histo[colorIndex(i, j, k)] || 0;
                        ntot += hval;
                        rsum += hval * (i + 0.5) * mult;
                        gsum += hval * (j + 0.5) * mult;
                        bsum += hval * (k + 0.5) * mult;
                    }
            this._avg = ntot
                ? [~~(rsum / ntot), ~~(gsum / ntot), ~~(bsum / ntot)]
                : [~~(mult * (this.r1 + this.r2 + 1) / 2), ~~(mult * (this.g1 + this.g2 + 1) / 2), ~~(mult * (this.b1 + this.b2 + 1) / 2)];
        }
    }
    return this._avg;
};

function PQueue(comparator) {
    this.contents = [];
    this.sorted = false;
    this.comparator = comparator;
}

PQueue.prototype.push = function(item) { this.contents.push(item); this.sorted = false; };
PQueue.prototype.pop = function() {
    if (!this.sorted) { this.contents.sort(this.comparator); this.sorted = true; }
    return this.contents.pop();
};
PQueue.prototype.size = function() { return this.contents.length; };

function vboxFromPixels(pixels, histo) {
    var rmin = 1e6, rmax = 0, gmin = 1e6, gmax = 0, bmin = 1e6, bmax = 0;
    for (var i = 0; i < pixels.length; i++) {
        var p = pixels[i];
        var rv = p[0] >> RSHIFT, gv = p[1] >> RSHIFT, bv = p[2] >> RSHIFT;
        if (rv < rmin) rmin = rv; if (rv > rmax) rmax = rv;
        if (gv < gmin) gmin = gv; if (gv > gmax) gmax = gv;
        if (bv < bmin) bmin = bv; if (bv > bmax) bmax = bv;
    }
    return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
}

function medianCutApply(histo, vbox) {
    if (!vbox.count()) return undefined;
    if (vbox.count() === 1) return [vbox.copy(), null];

    var rw = vbox.r2 - vbox.r1 + 1;
    var gw = vbox.g2 - vbox.g1 + 1;
    var bw = vbox.b2 - vbox.b1 + 1;
    var maxw = Math.max(rw, gw, bw);
    var total = 0;
    var partialsum = [];
    var lookaheadsum = [];
    var i, j, k, sum;

    if (maxw === rw) {
        for (i = vbox.r1; i <= vbox.r2; i++) {
            sum = 0;
            for (j = vbox.g1; j <= vbox.g2; j++)
                for (k = vbox.b1; k <= vbox.b2; k++)
                    sum += histo[colorIndex(i, j, k)] || 0;
            total += sum; partialsum[i] = total;
        }
    } else if (maxw === gw) {
        for (i = vbox.g1; i <= vbox.g2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++)
                for (k = vbox.b1; k <= vbox.b2; k++)
                    sum += histo[colorIndex(j, i, k)] || 0;
            total += sum; partialsum[i] = total;
        }
    } else {
        for (i = vbox.b1; i <= vbox.b2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++)
                for (k = vbox.g1; k <= vbox.g2; k++)
                    sum += histo[colorIndex(j, k, i)] || 0;
            total += sum; partialsum[i] = total;
        }
    }

    partialsum.forEach(function(d, idx) { lookaheadsum[idx] = total - d; });

    function doCut(color) {
        var dim1 = color + '1', dim2 = color + '2';
        for (var i = vbox[dim1]; i <= vbox[dim2]; i++) {
            if (partialsum[i] > total / 2) {
                var vbox1 = vbox.copy(), vbox2 = vbox.copy();
                var left = i - vbox[dim1], right = vbox[dim2] - i;
                var d2 = left <= right
                    ? Math.min(vbox[dim2] - 1, ~~(i + right / 2))
                    : Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                while (!partialsum[d2]) d2++;
                var count2 = lookaheadsum[d2];
                while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
                vbox1[dim2] = d2;
                vbox2[dim1] = d2 + 1;
                return [vbox1, vbox2];
            }
        }
    }

    if (maxw === rw) return doCut('r');
    if (maxw === gw) return doCut('g');
    return doCut('b');
}

function iterate(pq, target, histo) {
    var ncolors = pq.size(), niters = 0;
    while (niters < MAX_ITER) {
        if (ncolors >= target) return;
        niters++;
        var vbox = pq.pop();
        if (!vbox.count()) { pq.push(vbox); continue; }
        var result = medianCutApply(histo, vbox);
        if (!result || !result[0]) return;
        pq.push(result[0]);
        if (result[1]) { pq.push(result[1]); ncolors++; }
    }
}

function quantize(pixels, maxColors) {
    if (!pixels.length || maxColors < 2 || maxColors > 256) return [];

    var histo = getHisto(pixels);
    var vbox = vboxFromPixels(pixels, histo);
    var pq = new PQueue(function(a, b) { return a.count() - b.count(); });
    pq.push(vbox);
    iterate(pq, FRACT_POP * maxColors, histo);

    var pq2 = new PQueue(function(a, b) { return a.count() * a.volume() - b.count() * b.volume(); });
    while (pq.size()) pq2.push(pq.pop());
    iterate(pq2, maxColors, histo);

    var results = [];
    while (pq2.size()) {
        var box = pq2.pop();
        results.push({ color: box.avg(), population: box.count() });
    }
    return results;
}

// -------------------------------------------------------------------------
// Worker message handler
// -------------------------------------------------------------------------

self.onmessage = function (e) {
    var data = e.data;
    var id = data.id;
    try {
        var palette = quantize(data.pixels, data.maxColors);
        self.postMessage({ id: id, palette: palette });
    } catch (err) {
        self.postMessage({ id: id, error: err.message || 'Unknown worker error' });
    }
};
`;
	} });
	var manager_exports = {};
	__export(manager_exports, {
		extractInWorker: () => extractInWorker,
		isWorkerSupported: () => isWorkerSupported,
		terminateWorker: () => terminateWorker
	});
	function isWorkerSupported() {
		return typeof Worker !== "undefined";
	}
	function getOrCreateWorker() {
		if (worker) return worker;
		if (!isWorkerSupported()) throw new Error("Web Workers are not supported in this environment.");
		blobUrl = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "application/javascript" }));
		worker = new Worker(blobUrl);
		worker.onmessage = (e) => {
			const { id, palette, error } = e.data;
			const entry = pending.get(id);
			if (!entry) return;
			pending.delete(id);
			if (error) entry.reject(new Error(error));
			else {
				const raw = palette;
				const totalPopulation = raw.reduce((sum, q) => sum + q.population, 0);
				const colors = raw.map(({ color: [r, g, b], population }) => createColor(r, g, b, population, totalPopulation > 0 ? population / totalPopulation : 0));
				entry.resolve(colors);
			}
		};
		worker.onerror = (e) => {
			for (const [, entry] of pending) entry.reject(new Error(e.message));
			pending.clear();
		};
		return worker;
	}
	function extractInWorker(pixels, maxColors, signal) {
		return new Promise((resolve, reject) => {
			if (signal?.aborted) {
				reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
				return;
			}
			const id = nextId++;
			pending.set(id, {
				resolve,
				reject
			});
			const onAbort = () => {
				pending.delete(id);
				reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
			};
			signal?.addEventListener("abort", onAbort, { once: true });
			try {
				getOrCreateWorker().postMessage({
					id,
					pixels,
					maxColors
				});
			} catch (err) {
				pending.delete(id);
				signal?.removeEventListener("abort", onAbort);
				reject(err);
			}
		});
	}
	function terminateWorker() {
		if (worker) {
			worker.terminate();
			worker = null;
		}
		if (blobUrl) {
			URL.revokeObjectURL(blobUrl);
			blobUrl = null;
		}
		for (const [, entry] of pending) entry.reject(new Error("Worker terminated"));
		pending.clear();
	}
	var worker, blobUrl, nextId, pending;
	var init_manager = __esm({ "src/worker/manager.ts"() {
		"use strict";
		init_color();
		init_worker_script();
		worker = null;
		blobUrl = null;
		nextId = 0;
		pending = new Map();
	} });
	init_pipeline();
	init_pipeline();
	init_color();
	var TARGETS = [
		{
			role: "Vibrant",
			targetL: .65,
			minL: .4,
			maxL: .85,
			targetC: .2,
			minC: .08
		},
		{
			role: "Muted",
			targetL: .65,
			minL: .4,
			maxL: .85,
			targetC: .04,
			minC: 0
		},
		{
			role: "DarkVibrant",
			targetL: .3,
			minL: 0,
			maxL: .45,
			targetC: .2,
			minC: .08
		},
		{
			role: "DarkMuted",
			targetL: .3,
			minL: 0,
			maxL: .45,
			targetC: .04,
			minC: 0
		},
		{
			role: "LightVibrant",
			targetL: .85,
			minL: .7,
			maxL: 1,
			targetC: .2,
			minC: .08
		},
		{
			role: "LightMuted",
			targetL: .85,
			minL: .7,
			maxL: 1,
			targetC: .04,
			minC: 0
		}
	];
	var WEIGHT_L = 6;
	var WEIGHT_C = 3;
	var WEIGHT_POP = 1;
	function score(color, target, maxPopulation) {
		const { l, c } = color.oklch();
		if (l < target.minL || l > target.maxL) return -Infinity;
		if (c < target.minC) return -Infinity;
		const lDist = 1 - Math.abs(l - target.targetL);
		const cDist = 1 - Math.min(Math.abs(c - target.targetC) / .2, 1);
		const pop = maxPopulation > 0 ? color.population / maxPopulation : 0;
		return lDist * WEIGHT_L + cDist * WEIGHT_C + pop * WEIGHT_POP;
	}
	var WHITE = createColor(255, 255, 255, 0);
	var BLACK = createColor(0, 0, 0, 0);
	function textColors(color) {
		return {
			title: color.isDark ? WHITE : BLACK,
			body: color.isDark ? WHITE : BLACK
		};
	}
	function classifySwatches(palette) {
		const maxPopulation = Math.max(...palette.map((c) => c.population), 1);
		const assignments = [];
		for (const target of TARGETS) {
			let bestColor = null;
			let bestScore = -Infinity;
			for (const color of palette) {
				const s = score(color, target, maxPopulation);
				if (s > bestScore) {
					bestScore = s;
					bestColor = color;
				}
			}
			if (bestColor && bestScore > -Infinity) assignments.push({
				role: target.role,
				color: bestColor,
				score: bestScore
			});
		}
		const used = new Set();
		const result = {};
		assignments.sort((a, b) => b.score - a.score);
		for (const assignment of assignments) if (used.has(assignment.color)) {
			const target = TARGETS.find((t) => t.role === assignment.role);
			let fallback = null;
			let fallbackScore = -Infinity;
			for (const color of palette) {
				if (used.has(color)) continue;
				const s = score(color, target, maxPopulation);
				if (s > fallbackScore) {
					fallbackScore = s;
					fallback = color;
				}
			}
			if (fallback && fallbackScore > -Infinity) {
				used.add(fallback);
				const { title, body } = textColors(fallback);
				result[assignment.role] = {
					color: fallback,
					role: assignment.role,
					titleTextColor: title,
					bodyTextColor: body
				};
			} else result[assignment.role] = null;
		} else {
			used.add(assignment.color);
			const { title, body } = textColors(assignment.color);
			result[assignment.role] = {
				color: assignment.color,
				role: assignment.role,
				titleTextColor: title,
				bodyTextColor: body
			};
		}
		for (const target of TARGETS) if (!(target.role in result)) result[target.role] = null;
		return result;
	}
	var SIGBITS = 5;
	var RSHIFT = 8 - SIGBITS;
	var MAX_ITERATIONS = 1e3;
	var FRACT_BY_POPULATIONS = .75;
	var HISTO_SIZE = 1 << 3 * SIGBITS;
	function getColorIndex(r, g, b) {
		return (r << 2 * SIGBITS) + (g << SIGBITS) + b;
	}
	var VBox = class _VBox {
		constructor(r1, r2, g1, g2, b1, b2, histo) {
			this.r1 = r1;
			this.r2 = r2;
			this.g1 = g1;
			this.g2 = g2;
			this.b1 = b1;
			this.b2 = b2;
			this.histo = histo;
		}
		volume(force = false) {
			if (this._volume === void 0 || force) this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1);
			return this._volume;
		}
		count(force = false) {
			if (this._count === void 0 || force) {
				let npix = 0;
				for (let i = this.r1; i <= this.r2; i++) for (let j = this.g1; j <= this.g2; j++) for (let k = this.b1; k <= this.b2; k++) npix += this.histo[getColorIndex(i, j, k)] || 0;
				this._count = npix;
			}
			return this._count;
		}
		copy() {
			return new _VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
		}
		avg(force = false) {
			if (this._avg === void 0 || force) {
				const mult = 1 << RSHIFT;
				if (this.r1 === this.r2 && this.g1 === this.g2 && this.b1 === this.b2) this._avg = [
					this.r1 << RSHIFT,
					this.g1 << RSHIFT,
					this.b1 << RSHIFT
				];
				else {
					let ntot = 0;
					let rsum = 0;
					let gsum = 0;
					let bsum = 0;
					for (let i = this.r1; i <= this.r2; i++) for (let j = this.g1; j <= this.g2; j++) for (let k = this.b1; k <= this.b2; k++) {
						const hval = this.histo[getColorIndex(i, j, k)] || 0;
						ntot += hval;
						rsum += hval * (i + .5) * mult;
						gsum += hval * (j + .5) * mult;
						bsum += hval * (k + .5) * mult;
					}
					if (ntot) this._avg = [
						~~(rsum / ntot),
						~~(gsum / ntot),
						~~(bsum / ntot)
					];
					else this._avg = [
						~~(mult * (this.r1 + this.r2 + 1) / 2),
						~~(mult * (this.g1 + this.g2 + 1) / 2),
						~~(mult * (this.b1 + this.b2 + 1) / 2)
					];
				}
			}
			return this._avg;
		}
	};
	var PQueue = class {
		constructor(comparator) {
			this.comparator = comparator;
			this.contents = [];
			this.sorted = false;
		}
		sort() {
			this.contents.sort(this.comparator);
			this.sorted = true;
		}
		push(item) {
			this.contents.push(item);
			this.sorted = false;
		}
		peek(index) {
			if (!this.sorted) this.sort();
			return this.contents[index ?? this.contents.length - 1];
		}
		pop() {
			if (!this.sorted) this.sort();
			return this.contents.pop();
		}
		size() {
			return this.contents.length;
		}
		map(fn) {
			return this.contents.map(fn);
		}
	};
	function getHisto(pixels) {
		const histo = new Uint32Array(HISTO_SIZE);
		for (const pixel of pixels) {
			const rval = pixel[0] >> RSHIFT;
			const gval = pixel[1] >> RSHIFT;
			const bval = pixel[2] >> RSHIFT;
			histo[getColorIndex(rval, gval, bval)]++;
		}
		return histo;
	}
	function vboxFromPixels(pixels, histo) {
		let rmin = 1e6;
		let rmax = 0;
		let gmin = 1e6;
		let gmax = 0;
		let bmin = 1e6;
		let bmax = 0;
		for (const pixel of pixels) {
			const rval = pixel[0] >> RSHIFT;
			const gval = pixel[1] >> RSHIFT;
			const bval = pixel[2] >> RSHIFT;
			if (rval < rmin) rmin = rval;
			else if (rval > rmax) rmax = rval;
			if (gval < gmin) gmin = gval;
			else if (gval > gmax) gmax = gval;
			if (bval < bmin) bmin = bval;
			else if (bval > bmax) bmax = bval;
		}
		return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
	}
	function medianCutApply(histo, vbox) {
		if (!vbox.count()) return void 0;
		if (vbox.count() === 1) return [vbox.copy(), null];
		const rw = vbox.r2 - vbox.r1 + 1;
		const gw = vbox.g2 - vbox.g1 + 1;
		const bw = vbox.b2 - vbox.b1 + 1;
		const maxw = Math.max(rw, gw, bw);
		let total = 0;
		const partialsum = [];
		const lookaheadsum = [];
		if (maxw === rw) for (let i = vbox.r1; i <= vbox.r2; i++) {
			let sum = 0;
			for (let j = vbox.g1; j <= vbox.g2; j++) for (let k = vbox.b1; k <= vbox.b2; k++) sum += histo[getColorIndex(i, j, k)] || 0;
			total += sum;
			partialsum[i] = total;
		}
		else if (maxw === gw) for (let i = vbox.g1; i <= vbox.g2; i++) {
			let sum = 0;
			for (let j = vbox.r1; j <= vbox.r2; j++) for (let k = vbox.b1; k <= vbox.b2; k++) sum += histo[getColorIndex(j, i, k)] || 0;
			total += sum;
			partialsum[i] = total;
		}
		else for (let i = vbox.b1; i <= vbox.b2; i++) {
			let sum = 0;
			for (let j = vbox.r1; j <= vbox.r2; j++) for (let k = vbox.g1; k <= vbox.g2; k++) sum += histo[getColorIndex(j, k, i)] || 0;
			total += sum;
			partialsum[i] = total;
		}
		partialsum.forEach((d, i) => {
			lookaheadsum[i] = total - d;
		});
		function doCut(color) {
			const dim1 = color + "1";
			const dim2 = color + "2";
			for (let i = vbox[dim1]; i <= vbox[dim2]; i++) if (partialsum[i] > total / 2) {
				const vbox1 = vbox.copy();
				const vbox2 = vbox.copy();
				const left = i - vbox[dim1];
				const right = vbox[dim2] - i;
				let d2;
				if (left <= right) d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
				else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
				while (!partialsum[d2]) d2++;
				let count2 = lookaheadsum[d2];
				while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
				vbox1[dim2] = d2;
				vbox2[dim1] = vbox1[dim2] + 1;
				return [vbox1, vbox2];
			}
		}
		if (maxw === rw) return doCut("r");
		if (maxw === gw) return doCut("g");
		return doCut("b");
	}
	function iterate(pq, target, histo) {
		let ncolors = pq.size();
		let niters = 0;
		while (niters < MAX_ITERATIONS) {
			if (ncolors >= target) return;
			niters++;
			const vbox = pq.pop();
			if (!vbox.count()) {
				pq.push(vbox);
				continue;
			}
			const result = medianCutApply(histo, vbox);
			if (!result || !result[0]) return;
			pq.push(result[0]);
			if (result[1]) {
				pq.push(result[1]);
				ncolors++;
			}
		}
	}
	function quantize(pixels, maxColors) {
		if (!pixels.length || maxColors < 2 || maxColors > 256) return [];
		const seenColors = new Set();
		const uniqueColors = [];
		for (const color of pixels) {
			const key = color.join(",");
			if (!seenColors.has(key)) {
				seenColors.add(key);
				uniqueColors.push(color);
			}
		}
		if (uniqueColors.length <= maxColors) {
			const countMap = new Map();
			for (const color of pixels) {
				const key = color.join(",");
				countMap.set(key, (countMap.get(key) || 0) + 1);
			}
			return uniqueColors.map((color) => ({
				color,
				population: countMap.get(color.join(","))
			}));
		}
		const histo = getHisto(pixels);
		const vbox = vboxFromPixels(pixels, histo);
		const pq = new PQueue((a, b) => a.count() - b.count());
		pq.push(vbox);
		iterate(pq, FRACT_BY_POPULATIONS * maxColors, histo);
		const pq2 = new PQueue((a, b) => a.count() * a.volume() - b.count() * b.volume());
		while (pq.size()) pq2.push(pq.pop());
		iterate(pq2, maxColors, histo);
		const results = [];
		while (pq2.size()) {
			const box = pq2.pop();
			results.push({
				color: box.avg(),
				population: box.count()
			});
		}
		return results;
	}
	var MmcqQuantizer = class {
		async init() {}
		quantize(pixels, maxColors) {
			return quantize(pixels, maxColors);
		}
	};
	async function resolveDefaultLoader() {
		const { BrowserPixelLoader: BrowserPixelLoader2 } = await Promise.resolve().then(() => (init_browser(), browser_exports));
		return new BrowserPixelLoader2();
	}
	var globalLoader = null;
	var globalQuantizer = null;
	async function getLoader(perCall) {
		if (perCall) return perCall;
		if (globalLoader) return globalLoader;
		globalLoader = await resolveDefaultLoader();
		return globalLoader;
	}
	async function getQuantizer(perCall) {
		if (perCall) {
			await perCall.init();
			return perCall;
		}
		if (globalQuantizer) return globalQuantizer;
		const q = new MmcqQuantizer();
		await q.init();
		globalQuantizer = q;
		return q;
	}
	function checkAborted(signal) {
		if (signal?.aborted) throw signal.reason ?? new DOMException("Aborted", "AbortError");
	}
	async function loadPixels(source, options) {
		checkAborted(options?.signal);
		return (await getLoader(options?.loader)).load(source, options?.signal);
	}
	async function getPalette(source, options) {
		const opts = validateOptions(options ?? {});
		checkAborted(options?.signal);
		if (options?.worker) {
			const { isWorkerSupported: isWorkerSupported2, extractInWorker: extractInWorker2 } = await Promise.resolve().then(() => (init_manager(), manager_exports));
			if (isWorkerSupported2()) {
				const { data, width, height } = await loadPixels(source, options);
				const { createPixelArray: createPixelArray2 } = await Promise.resolve().then(() => (init_pipeline(), pipeline_exports));
				return extractInWorker2(createPixelArray2(data, width * height, opts.quality, {
					ignoreWhite: opts.ignoreWhite,
					whiteThreshold: opts.whiteThreshold,
					alphaThreshold: opts.alphaThreshold,
					minSaturation: opts.minSaturation
				}), opts.colorCount, options?.signal);
			}
		}
		const [pixels, quantizer] = await Promise.all([loadPixels(source, options), getQuantizer(options?.quantizer)]);
		checkAborted(options?.signal);
		return extractPalette(pixels.data, pixels.width, pixels.height, opts, quantizer);
	}
	async function getSwatches(source, options) {
		return classifySwatches(await getPalette(source, {
			colorCount: 16,
			...options
		}) ?? []);
	}
	init_browser();
	init_pipeline();
	new BrowserPixelLoader();
	var defaultQuantizer = new MmcqQuantizer();
	function getPaletteSync(source, options) {
		const opts = validateOptions(options ?? {});
		const quantizer = options?.quantizer ?? defaultQuantizer;
		const pixels = loadPixelsSync(source);
		return extractPalette(pixels.data, pixels.width, pixels.height, opts, quantizer);
	}
	function getSwatchesSync(source, options) {
		return classifySwatches(getPaletteSync(source, {
			colorCount: 16,
			...options
		}) ?? []);
	}
	function loadPixelsSync(source) {
		if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) return loadFromImage(source);
		if (typeof HTMLCanvasElement !== "undefined" && source instanceof HTMLCanvasElement) return loadFromCanvas(source);
		if (typeof ImageData !== "undefined" && source instanceof ImageData) return {
			data: source.data,
			width: source.width,
			height: source.height
		};
		if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) return loadFromVideo(source);
		if (typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap) return loadFromImageBitmap(source);
		if (typeof OffscreenCanvas !== "undefined" && source instanceof OffscreenCanvas) return loadFromOffscreenCanvas(source);
		throw new Error("Unsupported source type. Expected HTMLImageElement, HTMLCanvasElement, HTMLVideoElement, ImageData, ImageBitmap, or OffscreenCanvas.");
	}
	function loadFromImage(img) {
		if (!img.complete) throw new Error("Image has not finished loading. Wait for the \"load\" event before calling getColorSync/getPaletteSync.");
		if (!img.naturalWidth) throw new Error("Image has no dimensions. It may not have loaded successfully.");
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const width = canvas.width = img.naturalWidth;
		const height = canvas.height = img.naturalHeight;
		ctx.drawImage(img, 0, 0, width, height);
		try {
			return {
				data: ctx.getImageData(0, 0, width, height).data,
				width,
				height
			};
		} catch (e) {
			if (e instanceof DOMException && e.name === "SecurityError") {
				const err = new Error("Image is tainted by cross-origin data. Add crossorigin=\"anonymous\" to the <img> tag and ensure the server sends appropriate CORS headers.");
				err.cause = e;
				throw err;
			}
			throw e;
		}
	}
	function loadFromCanvas(canvas) {
		const ctx = canvas.getContext("2d");
		const { width, height } = canvas;
		return {
			data: ctx.getImageData(0, 0, width, height).data,
			width,
			height
		};
	}
	function loadFromVideo(video) {
		if (video.readyState < 2) throw new Error("Video is not ready. Wait for the \"loadeddata\" or \"canplay\" event before calling getColorSync/getPaletteSync.");
		const width = video.videoWidth;
		const height = video.videoHeight;
		if (!width || !height) throw new Error("Video has no dimensions. It may not have loaded successfully.");
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = width;
		canvas.height = height;
		ctx.drawImage(video, 0, 0, width, height);
		return {
			data: ctx.getImageData(0, 0, width, height).data,
			width,
			height
		};
	}
	function loadFromOffscreenCanvas(canvas) {
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Could not get 2D context from OffscreenCanvas.");
		const { width, height } = canvas;
		return {
			data: ctx.getImageData(0, 0, width, height).data,
			width,
			height
		};
	}
	function loadFromImageBitmap(bitmap) {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = bitmap.width;
		canvas.height = bitmap.height;
		ctx.drawImage(bitmap, 0, 0);
		return {
			data: ctx.getImageData(0, 0, bitmap.width, bitmap.height).data,
			width: bitmap.width,
			height: bitmap.height
		};
	}
	init_color();
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var privilegedFetch = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
	var banners = new Map();
	var covers = new Map();
	var coverAccent = new Map();
	var progressBarRegex = /linear-gradient\(to right,\s*[^)]+\)\s*([\d.]+%)/;
	var Genie = class {
		constructor() {
			this.init();
		}
		init() {
			console.log("[Genie] Launching 🚀!");
			document.documentElement.dataset.lyehTheme = "dark";
			const url = new URL(window.location.href);
			if (url.pathname.startsWith("/artists/")) {
				if (url.searchParams.get("react") != "1") {
					url.searchParams.set("react", "1");
					window.location.replace(url.toString());
				}
				this.mouseEvents();
			}
			window.addEventListener("DOMContentLoaded", () => {
				this.observeDOM();
				this.extractSongData();
			});
			window.addEventListener("keypress", (event) => {
				console.log(event.ctrlKey, event.key);
				if (event.ctrlKey && event.key == "") debugger;
			});
			const originalFetch = window.fetch;
			window.fetch = function(...args) {
				const response = originalFetch.apply(this, args);
				const url = args[0];
				if (typeof url === "string" && url.includes("/api/inboxes/main_activity_inbox/line_items/")) {}
				console.log(response);
				return response;
			};
		}
		observeDOM() {
			new MutationObserver(async (mutations) => {
				for (const mutation of mutations) for (const node of mutation.addedNodes) {
					if (!(node instanceof HTMLElement)) continue;
					const navvar = document.querySelector(`[class^="StickyNav-desktop__Container"]`);
					if (navvar) {
						console.log(window.getComputedStyle(navvar).backgroundColor);
						document.documentElement.style.setProperty("--current-accent", window.getComputedStyle(navvar).backgroundColor);
					}
					const referents = node.querySelectorAll(`[class^="Referent__FragmentContainer"]`);
					if (referents.length != 0) for (const elem of referents) console.log();
					if (node.matches(`[class^="styleAnchors__PageHeaderDropdownMenu"]`)) {
						const targets = node.querySelectorAll("[class^=\"LineItem__ItemRow\"]");
						for (const target of targets) target.parentElement.classList.add("lyeh__ItemParent");
					}
					if (node.querySelector(`[class^="LineItem__ItemRow"]`)) {
						node.classList.add("lyeh__ItemParent");
						console.log("lirico en la casa");
					}
					if (node.matches("[class^=\"PortalTooltip__Content\"]")) {
						let artistLink = node.querySelector(`a[class^="ArtistTooltip__ArtistBadge"]`);
						if (!artistLink) {
							artistLink = node.querySelector(`a[class^="UserBadge__Container"]`);
							if (!artistLink) {
								console.warn("[Genie] Failed to scrap the autor href");
								continue;
							}
						}
						const bannerUrl = banners.get(artistLink.href);
						if (bannerUrl) node.style.setProperty("--artist-banner-url", `url(${bannerUrl})`);
						continue;
					}
					if (node.matches(`[class^="Modal-shared__ModalSharedContainer"`)) {
						const progressBars = document.querySelectorAll(`li[class*="ContributorList__ListItem"]`);
						for (const progress of progressBars) {
							const Class = progress.className.split(" ")[1];
							if (!Class) {
								console.warn("xd?");
								continue;
							}
							const barElem = node.getElementsByClassName(Class)[0];
							console.log(barElem, barElem.style);
							const regex = barElem.style.background.match(progressBarRegex);
							console.log("jeje", regex, progress);
							if (!regex) continue;
							barElem.style.background = `linear-gradient(to right, white ${regex[0]}, transparent 0px)`;
						}
					}
					if (node.querySelector("[class*=\"SongHeader\"]")) this.transformHeader(node);
				}
			}).observe(document.body, {
				childList: true,
				subtree: true
			});
		}
		transformHeader(headerElement) {
			headerElement.classList.add("bleh-custom-header");
		}
		extractSongData() {
			const trackingData = window.__PRELOADED_STATE__ || null;
			if (trackingData) {
				console.log("Genius Metadata captured:", trackingData);
				for (const [_, data] of Object.entries(trackingData.entities.artists)) if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
				for (const [_, data] of Object.entries(trackingData.entities.users)) if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
				for (const [_, data] of Object.entries(trackingData.entities.songs)) if (data.songArtImageThumbnailUrl) {
					covers.set(data.url, data.songArtImageThumbnailUrl);
					coverAccent.set(data.url, this.getAccentCache(data.url, data.songArtImageThumbnailUrl));
				}
				for (const [_, data] of Object.entries(trackingData.entities.albums)) if (data.coverArtThumbnailUrl) coverAccent.set(data.url, this.getAccentCache(data.url, data.coverArtThumbnailUrl));
			}
		}
		getAccent(img) {
			console.log("running accent");
			const color = getSwatchesSync(img);
			console.log("color", color);
			return color;
		}
		async getAccentCache(songUrl, imgUrl) {
			console.log("running accent async");
			const cacheKey = `accent:${songUrl}`;
			const cached = await _GM_getValue(cacheKey, null);
			if (cached) {
				console.log("CACHE HIT!!");
				return JSON.parse(cached);
			}
			console.log(`[Genie] Cache miss ${songUrl}`);
			return new Promise((resolve, reject) => {
				privilegedFetch({
					method: "GET",
					url: imgUrl,
					responseType: "blob",
					onload: (response) => {
						const blobUrl = URL.createObjectURL(response.response);
						const tempImg = new Image();
						tempImg.onload = async () => {
							try {
								const swatches = await getSwatches(tempImg);
								await _GM_setValue(cacheKey, JSON.stringify(swatches));
								URL.revokeObjectURL(blobUrl);
								resolve(swatches);
							} catch (err) {
								URL.revokeObjectURL(blobUrl);
								reject(err);
							}
						};
						tempImg.onerror = () => {
							URL.revokeObjectURL(blobUrl);
							reject(new Error("Failed to load blob into Image element."));
						};
						tempImg.src = blobUrl;
					},
					onerror: (err) => {
						reject(err);
						resolve(null);
					}
				});
			});
		}
		mouseEvents() {
			document.addEventListener("mouseover", async (e) => {
				if (!e || !e.target) return;
				const songAnchor = e.target.closest("a[class^=\"DiscographyItem__Container\"]");
				if (songAnchor) {
					console.log(songAnchor);
					const songUrl = songAnchor.href;
					const swatches = await coverAccent.get(songUrl);
					const activeSwatch = swatches.Vibrant || swatches.DarkVibrant || swatches.LightVibrant || swatches.Muted || swatches.DarkMuted || swatches.LightMuted;
					if (activeSwatch) {
						const { l, c, h } = activeSwatch.color._oklch;
						const accentColor = `oklch(${l} ${c} ${h})`;
						document.documentElement.style.setProperty("--current-accent", accentColor);
						document.documentElement.style.setProperty("--lyeh-bg-primary", `color-mix(in oklch, ${accentColor} 15%, #292424)`);
					}
				}
			});
			document.addEventListener("mouseout", (e) => {
				if (e.target.closest("a[class^=\"DiscographyItem__Container\"]")) {
					document.documentElement.style.setProperty("--current-accent", "rgb(255, 255, 100)");
					document.documentElement.style.setProperty("--lyeh-bg-primary", "#292424");
				}
			});
		}
	};
	new Genie();
})();
