// ==UserScript==
// @name         Genie
// @namespace    npm/lyeh
// @version      1.0.1
// @downloadURL  https://craciu25yt.github.io/lyeh/genie.derp.user.js
// @updateURL    https://craciu25yt.github.io/lyeh/genie.derp.user.js
// @match        https://genius.com/*
// @connect      genius.com
// @connect      images.genius.com
// @connect      t2.genius.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
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
	_css(" .overlay[data-v-1fcf85f7]{z-index:99999;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#0006;justify-content:center;align-items:center;display:flex;position:fixed;inset:0}.box[data-v-1fcf85f7]{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);text-align:center;background:#ffffff14;border:1px solid #ffffff26;border-radius:24px;min-width:320px;padding:48px 64px;position:relative;box-shadow:0 8px 64px #00000080,inset 0 1px #ffffff1a}.close[data-v-1fcf85f7]{color:#ffffff80;cursor:pointer;background:0 0;border:none;padding:0;font-size:28px;line-height:1;position:absolute;top:12px;right:16px}.close[data-v-1fcf85f7]:hover{color:#fff}.title[data-v-1fcf85f7]{color:#fff;letter-spacing:-.02em;margin:0 0 16px;font-size:28px;font-weight:700}.version[data-v-1fcf85f7]{color:#fffc;justify-content:center;align-items:center;gap:12px;margin:0;font-size:18px;display:flex}.old[data-v-1fcf85f7]{opacity:.5;text-decoration:line-through}.arrow[data-v-1fcf85f7]{opacity:.6;font-size:22px}.new[data-v-1fcf85f7]{color:#fff;font-weight:600}\n/*$vite$:1*/ ");
	_css(":root[data-lyeh-theme=dark]{--lyeh-bg-primary:#292424;--lyeh-bg-shadow:#1a1616;--lyeh-bg-secondary:#362f2f;--lyeh-bg-thirdy:#2e2828;--lyeh-accent:#ed4597;--lyeh-text-main:#f1f2f6;--lyeh-text-muted:#a4b0be;--accent-muted:#fa64a080;--lyeh-current-song-accent:#000;--lyeh-current-song-accent-secondary:#000;--artist-banner-url:linear-gradient(180deg, #1e1e2e 0%, #313244 50%, #1e1e2e 100%);--current-accent:#ffff64}body,div[class^=PageLayout__Container],main{transition:background-color 1s;background-color:var(--lyeh-bg-primary)!important;color:var(--lyeh-text-main)!important;fill:var(--lyeh-text-main)!important}path{fill:var(--lyeh-text-main)}div[class^=StickyNavLoggedIn__Container] path{fill:color-contrast(var(--current-accent))}div[class^=Lyrics__Container]{letter-spacing:-.01em!important;color:var(--lyeh-text-main)!important;font-size:1.15rem!important;line-height:1.7!important}div[class^=Lyrics__Container] a{border-bottom:1px dashed #ff47574d;transition:all .2s;-webkit-text-decoration-color:var(--lyeh-accent)!important;text-decoration-color:var(--lyeh-accent)!important}div[class^=Lyrics__Container] a:hover{border-bottom:1px solid var(--lyeh-accent);background:#ff47571a}span[class^=ReferentFragment]{background:var(--lyeh-bg-secondary);color:var(--lyeh-text-main)!important}span[class^=ReferentFragment]:hover{border-bottom:1px solid var(--lyeh-accent);background:#fa64a0b3;color:var(--lyeh-text-main)!important}[class^=TextLabel],[class^=ContributorsCreditSong]{color:var(--lyeh-text-main)!important}a:not([class^=StickyNavSectionLink__StyledLink]){color:var(--lyeh-text-main)!important;-webkit-text-decoration:underline #ffffff80!important;text-decoration:underline #ffffff80!important}span{color:var(--lyeh-text-main)!important}div[class^=SongHeader-desktop__CoverArt] img{border-radius:10px}aside[class^=ContributorSidebar__Container]{box-shadow:10px 5px 5px var(--lyeh-bg-shadow);border-radius:15px;padding-right:14px;background-color:var(--lyeh-bg-secondary)!important}div[class^=ContributorSidebarSection__Header],div[class^=ContributorSidebarMetadata]{color:var(--lyeh-text-main)}button[class^=Button__Container-sc]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}button[class^=Button__Container-sc]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}a[class^=Button__Container-sc]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}a[class^=Button__Container-sc]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}button[class^=ContributorActionTextbox]{border:1px solid var(--lyeh-text-main);color:var(--lyeh-text-main)!important}div[class^=ContributorSidebarSection__HeaderButtons] svg path:first-child{fill:var(--lyeh-text-main)!important}div[class^=ContributorSidebarSection__HeaderButtons] svg path:last-child{fill:var(--lyeh-bg-primary)!important}div[class^=PageGrid-desktop][class*=StickyToolbar__Container]{border-bottom:none;background-color:var(--lyeh-bg-primary)!important}button[class^=SmallButton__Container]{border-color:var(--lyeh-text-main);color:var(--lyeh-text-main)!important}button[class^=SmallButton__Container]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}a[class^=SmallButton__Container]{border-color:var(--lyeh-text-main);color:var(--lyeh-text-main)!important}a[class^=SmallButton__Container]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}svg[class^=LineItemActionIcon__Icon][data-action-name=recognized] path,svg[class^=LineItemActionIcon__Icon][data-action-name=accepted] path,svg[class^=LineItemActionIcon__Icon][data-action-name=hit_pageview_threshold] path,svg[class^=LineItemActionIcon__Icon][data-action-name=upvoted] path{fill:#4bbf38!important}div[class^=LineItemList__Container] path{fill:#9a9a9a!important}div[class^=LineItem__IqDifference]{color:#4bbf38!important}svg[class^=LineItemActionIcon__Icon][data-action-name=earned] path{fill:#c7ba18!important}span[class^=ContributorActionTextbox]{color:var(--lyeh-text-main)!important}[color=background\\.iqPoints]{color:#4bbf38!important}[color=background\\.negativeNumber]{color:#f03e26!important}div[class^=ContributorsCreditMarkedComplete__CompletedUsernameContainer]{color:var(--lyeh-text-main)!important}div[class^=TooltipShadow]{color:var(--lyeh-text-main);z-index:1;background-color:#0000;border-radius:15px;position:relative;overflow:hidden}div[class^=TooltipShadow]:before{content:\"\";filter:blur(2px)brightness(.5);z-index:-1;background-position:50%;background-size:cover;border:0;transition:all 1s;position:absolute;inset:0;transform:scale(1.1);background-image:var(--artist-banner-url)!important;border-radius:15px!important}div[class^=ArtistTooltip__Verified]{color:#000;text-align:center;background-color:#ffff64;margin-right:30%;font-size:.75rem;border-radius:15px!important}div[class^=TooltipShadow]:has([class^=ArtistTooltip__Verified]){box-shadow:1px 1px 20px #ffff6480!important}div[class^=TooltipShadow]:has([role=moderator]){box-shadow:1px 1px 20px #047ec680!important}div[class^=Placeholder__Container]{background-color:#fa64a0b3!important}span[class^=UserBadge__Iq]{border-radius:10px;padding:.125rem .225rem;color:#000!important;background-color:#ffff64cc!important}button{color:#fff!important}div[class^=UserBadge__Role-sc-]{align-items:center;padding:4px 0;transition:all .3s ease-in-out;display:inline-flex;overflow:hidden}span[class^=UserBadge__RoleLabel-sc-]{opacity:0;white-space:nowrap;max-width:0;margin-right:0;transition:max-width .3s ease-in-out,opacity .2s ease-in-out,margin .3s ease-in-out;display:inline-block}div[class^=UserBadge__Role-sc-]:hover span[class^=UserBadge__RoleLabel-sc-]{opacity:1;max-width:100px;margin-right:6px}span[class^=RoleIcon__Container-sc-]{flex-shrink:0;align-items:center;width:14px;height:14px;display:flex}span[class^=RoleIcon__Container-sc-] svg{width:100%;height:100%}div[class^=AlbumTracklist__Track]{color:var(--lyeh-text-main)}div[class^=PageGrid-desktop][class*=SongHeader-desktop__Container] :is(span,a,button,path){color:color-contrast(var(--current-accent))!important;fill:color-contrast(var(--current-accent))!important}div[class^=white_container]{background-color:#0000}span[class^=LineItemMessage__NoteBubble]{background-color:#fa64a0b3!important}input{caret-color:var(--lyeh-accent)}::selection{color:#fff;background-color:#fa64a0b3}div[class^=ScrollableTabs__TabNavContainer]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:15px 15px 0 0;background-color:#0000004d!important}div[class^=ScrollableTabs__ContentArea]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#0000004d}h3[class^=ScrollableTabsSection__Title],legend[class^=Field-shared__FieldLabel],div[class^=css-hfv4dh-singleValue]{color:var(--lyeh-text-main)}div[class^=LyricsHighlightTooltip__Content]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#16141496;border:0;border-radius:10px;border:1px solid #fff3!important}div[class^=LyricsHighlightTooltip__Content]:hover{background-color:var(--accent-muted)!important}button[class^=LyricsHighlightTooltip__Container]:before{display:none}div[class^=LyricsHighlightTooltip__Content]:before:hover{background-color:var(--accent-muted)!important}span[class^=LyricsHighlightTooltip__IQ]{color:#40ff21!important}a[class^=LyricsHeader__TranslationLink]{background:0 0}a[class^=LyricsHeader__TranslationLink]:hover{background-color:var(--accent-muted)!important}div[class^=VotesModal__Container]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#29242466;border-radius:10px}");
	_css("html{scroll-behavior:smooth}div[class^=Modal-shared__ModalSharedContainer]{background-color:#0000}div[class^=ContributionsScholars__Container]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-image:none;border-radius:10px 10px 0 0;background-color:#000000b3!important}div[class^=RecentActivity__Container]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#0000001a}div[class^=LineItem__ItemRow]{background-color:#16141496;border:0;border-radius:10px;margin-top:8px;border:1px solid #fff3!important}div[class^=LineItem__ItemRow]:hover{background-color:#161414;transition:all .2s cubic-bezier(.4,0,.2,1)}div[class^=Annotation__Container]{color:var(--lyeh-text-main)}div[class^=LineItemList__Container],div[class^=LineItemList__Container]>div{background:0 0!important}body[class^=act-embed\\ cont-searches]{padding:20px;background-color:#0000!important}.mini_card{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);border:1px solid #7d7d7d;border-radius:10px;background-color:#29242466!important}mini-song-card .mini_card{padding:10px}.mini_card path{fill:var(--lyeh-text-main)!important}.mini_card:hover{background-color:#16141496!important}.mini_card-lyric_excerpt span{color:#d6d6d6!important;background-color:#fa64a080!important}div[class^=mini_card-thumbnail]{border-radius:10px}a[class^=full_width_button]{background-color:#0000!important}div[class^=thumbnail_grid]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);border:1px solid #7d7d7d;border-radius:10px;background-color:#29242466!important}div[class^=thumbnail_grid-grid_element]{padding:5px}div[class^=thumbnail_grid-grid_element]:hover{background-color:#16141496!important}.vertical_album_card:hover{background-color:unset!important}");
	_css("h4[class^=SiteCommandPalettePage__PageContainer],[class^=SiteCommandPaletteItem__Title],div[class^=SiteCommandPalettePage__PageContainer] h4{color:var(--lyeh-text-main)!important}div[class^=SiteCommandPalettePage__PageContainer] [class^=command-palette-list-item]{margin-bottom:2px;border-radius:15px!important}input#command-palette-search-input[type=text]{color:#fff!important;-webkit-text-fill-color:#fff!important}.command-palette div[id^=headlessui-dialog-panel-]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#151a1a80!important;background-image:none!important;border-radius:15px!important}.command-palette [class*=bg-gray-900][class*=bg-opacity-80]{background-color:#0000}html{overflow:visible!important}");
	_css("div[class^=apple_music_player-container]{background-color:#0000;border:0!important}body[ng-app=genius\\.apple_music_player]{border-radius:10px;padding:0;display:block;background-color:#0000!important}div[class=apple_music_player-player]{background-color:var(--lyeh-bg-secondary);border-radius:10px;padding:5px}div[class^=apple_music_player-player-info]{flex-direction:column;justify-content:center;display:flex}div[class^=apple_music_player-player-info-title]{padding:0 0 0 5px;font-size:1rem;line-height:1.2;margin:0!important}div[class^=apple_music_player-player-info-artist]{padding:0 0 0 5px;font-size:.8rem;line-height:1.2;margin:0!important}div[class^=apple_music_player-player-song_art]{justify-content:center;align-items:center;width:60px;height:60px;display:flex;position:static}div[class^=apple_music_player-seekbar]:before{background-color:var(--lyeh-text-main)}div[class^=apple_music_player-player-seekbar-dashed]{border-bottom:2px dashed var(--lyeh-text-main)}.cover_art-image{border-radius:5px}.cover_art{background-color:#0000!important}.apple_music_player-seekbar-scrubber-circle{background-color:var(--lyeh-text-main)!important}");
	_css("textarea[class^=TextInput-sc]{color:var(--lyeh-text-main);border:1px solid var(--lyeh-text-main)!important}button[class*=jSZRoS]{background-color:#56cd4d;color:#000!important;border:1px solid var(--lyeh-text-main)!important}");
	_css("div[class^=styleAnchors__PageHeaderDropdownMenu]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--lyeh-text-main);background-color:#29242466;border-radius:10px;top:3rem!important}div[class^=styleAnchors__PageHeaderDropdownMenu][class*=PageHeaderDropdown-desktop__Container]:has([src*=\"/inboxes/messages_inbox?embed=true\"]){width:40vw!important}div[class*=styleAnchors__PageHeaderDropdownMenu][class*=PageHeaderDropdown-desktop__Container]{width:35vw!important}div[aria-label^=User\\ Menu]~div[class*=styleAnchors__PageHeaderDropdownMenu]{width:10vw!important}[class^=PageHeaderMenu__Title][class*=PageHeaderMenu__Item]:hover{color:var(--lyeh-text-main);transition:background-color .3s;background-color:#fa64a0b3!important}div[class^=PageHeaderInbox-desktop__Label]{display:none!important}form[class^=StickyNavSearch-desktop__Form]{background-color:var(--lyeh-bg-primary);border-radius:15px}input[class^=StickyNavSearch-desktop__Input]{background-color:var(--lyeh-bg-primary);justify-content:center;margin-left:15px;color:#fff!important;-webkit-text-fill-color:#fff!important}div[class^=styleAnchors__PageHeaderDropdownMenu] div[class^=LineItemList__Container]{margin:20px}div[class^=LineItemDetail__Container]{background-color:#16141496!important}div[class^=LyricsDiffsSection__Container]{background-color:#0000!important}div[class=lyeh__ItemParent]:has([class^=LineItemDetail__Container]) [class^=LineItem__ItemRow]{border-radius:10px 10px 0 0;border-bottom:none!important}div[class=lyeh__ItemParent]:has([class^=LineItemDetail__Container]) [class^=LineItemDetail__Container]{border-radius:0 0 10px 10px;color:var(--lyeh-text-main)!important;border:1px solid #fff3!important}div[class^=ExpandableDiff__Lines] ins{background-color:#13ff004a!important}div[class^=ExpandableDiff__Lines] del{background-color:#ff00004a!important}div[class^=DetailSection__SectionWrapper]{background-color:#0000!important}div[class^=DetailSection__SectionWrapper]:first-child{margin-top:10px;background-color:#0000!important}div[class^=DetailSection-shared]{background-color:#0000!important}a[class^=MiniCard__Link]{border:1px solid #fff9;border-radius:10px;padding:.5rem;background-color:#16141496!important}a[class^=MiniCard__Link]:hover{transition:all .2s cubic-bezier(.4,0,.2,1);background-color:#fa64a0b3!important}div[class*=MiniCard__Thumbnail]{border-radius:10px}div[class^=Referent__FragmentContainer],a[class^=Referent__FragmentHighlight]{background-color:#0000}a[class^=UnreviewedAnnotation__Unreviewed],div[class^=UnreviewedAnnotation__Unreviewed],div[class^=dashed_background_message]{border-radius:4px;background:0 0!important}body[class^=act-messages_inbox]{background-color:#0000!important}div[class^=feed_dropdown-item]{border-radius:10px;margin:10px;background-color:#16141496!important;border:1px solid #fff3!important}div[class^=feed_dropdown-item]:hover{transition:all .2s cubic-bezier(.4,0,.2,1);background-color:#161414!important}.modal_window-content{background-color:#0000!important}.modal_window-content p{background-color:#fa64a080;border-radius:5px;padding:5px;border:1px solid #ffffff4d!important}.u-dark_overlay:before{background-color:#16141496!important}.conversation-compose_area{background-color:#0000!important}textarea[class^=square_input]{color:#fff!important;background-color:#0000!important;border:1px solid #ffffff4d!important;border-radius:10px!important;padding:5px 10px!important}textarea[class^=square_input]:focus{transition:all .2s cubic-bezier(.4,0,.2,1);box-shadow:inset 0 0 .3em #fa64a080!important}.square_button{color:var(--lyeh-text-main)!important;background-color:#161414!important;border:1px solid #ffffff4d!important;border-radius:10px!important;padding:5px 10px!important}.square_button:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}span[class*=text_label--purple]{background-color:#0000;border:none;border-color:none!important}div[class=conversation] span[class*=text_label]:not([class*=text_label--purple]){background-color:#fa64a080;border-radius:4px;padding:3px;border-bottom:1px!important}div[class^=MetadataChangesSection__Container]{background:0 0;padding:0}div[class^=LineItem__EventCountBadge]{color:#fff;border:1px solid #7d7d7d;background-color:#0006!important}div[class^=StickyNavSearch-desktop__Icon] path{fill:#fff!important}body[class^=\"act-iq_inbox cont-inboxes snarly\"]{background-color:#0000!important}div[class^=contribution_opportunity]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:none;border-radius:10px;background-color:#16141430!important}input[class^=square_input],[class^=tags_input]{background-color:#0000!important}span[class^=square_item_and_iq] span[class^=square_button],span[class^=square_item_and_iq] button[class^=square_button]{z-index:10;background:#141414!important}span[class^=square_item_and_iq] span[class^=square_button]:hover,span[class^=square_item_and_iq] button[class^=square_button]:hover{background:var(--lyeh-accent)!important}");
	_css("h2{color:var(--lyeh-text-main)!important}nav[class^=StickyNav-desktop__Container]:has(~div[class^=Profile__Container]){background-color:var(--current-accent);transition:all .5s cubic-bezier(.4,0,.2,1)!important}nav[class^=StickyNav-desktop__Container]:has(~div[class^=Profile__Container]) :is(a,span,path){fill:contrast-color(var(--current-accent));color:contrast-color(var(--current-accent));text-decoration:none!important;transition:all .5s cubic-bezier(.4,0,.2,1)!important}nav[class^=StickyNav-desktop__Container]:has(~div[class^=Profile__Container]) div[class^=PageHeaderMenu__Iq]{color:contrast-color(var(--current-accent))!important}main[class*=ProfileContent-desktop__PageGrid] path{fill:var(--lyeh-text-main)!important}div[class^=DiscographyItem__Info]{color:var(--lyeh-text-main)!important}span[class^=LabelWithIcon__Container] path{fill:var(--lyeh-text-main)!important}button[class^=DropdownList__LabeledButton]{border-color:var(--lyeh-text-main)}button[class^=DropdownList__LabeledButton]:hover{background-color:#fa64a080!important;transition:all .2s cubic-bezier(.4,0,.2,1)!important}button[class^=VotingActions__Button][aria-pressed=true] svg[class^=VotingActions__ThumbsUp] path{fill:#4bbf38!important}button[class^=VotingActions__Button][aria-pressed=true] svg[class^=VotingActions__ThumbsDown] path{fill:#bf4538!important}a[class^=DiscographyItem__Container]{border-radius:10px;padding:3px}a[class^=DiscographyItem__Container]:hover{background-color:#16141496;border:1px solid #fff9;scale:1.1;transition:all .4s cubic-bezier(.4,0,.2,1)!important}div[class^=SizedImage__Container]{border-radius:8px}div[class^=PopularSongs__Container],div[class^=PopularAlbums__Container]{border:1px solid #fff9;border-radius:10px;background-color:#16141496!important}button[class*=ProfileContent-desktop__FeaturedButton]{background-color:#0000}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc]{background-color:var(--current-accent);color:#000;fill:#fff;border-radius:10px;padding:2px 6px;color:contrast-color(var(--current-accent))!important;transition:all .5s cubic-bezier(.4,0,.2,1)!important}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc] svg{fill:contrast-color(var(--current-accent));transition:all .4s cubic-bezier(.4,0,.2,1)!important}h3[class^=VerifiedBadge__VerifiedBadgeContainer-sc] path{fill:contrast-color(contrast-color(var(--current-accent)))!important}div[class^=ArtistAvatar__Container]{border-color:var(--current-accent);transition:all .5s cubic-bezier(.4,0,.2,1)!important}ul[class^=DiscographyItemList]{gap:1rem;overflow:visible}a[class*=OptOutButton__Container-sc]{display:none}hr[class^=ProfileContent-desktop__Divider]{border-color:#fff3}div[class^=CollaboratorEntry__Container],li[class^=IqEarnersList__List]{border-color:#fff3!important}.iHfhfx{background-color:#fa64a080}ul[class^=DropdownList__ItemsContainer]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#16141496;border:1px solid #fff9;border-radius:10px}a[class^=ProfilesDropdown__SocialLink]:hover{background-color:#fa64a080}span[class^=DropdownList__Caret]{background-color:var(--lyeh-text-main)!important}div[class^=QuestionAnswerList__List]{gap:10px}a[class^=QuestionAnswerList__ItemContainer]{column-gap:10px;border:1px solid var(--lyeh-text-main)!important;border-radius:10px!important}");
	_css("nav[class^=StickyNav-desktop__Left] span,nav[class^=StickyNav-desktop__Container] div[class^=PageHeaderMenu__Container] span{color:color-contrast(var(--current-accent))!important}div[class^=Question__Attribution],div[class^=Contributors__LabelContainerRow]{color:var(--lyeh-text-main)}div[class^=Answer-desktop__Card]{border-radius:10px}");
	_css("div[class^=SectionTitle__Title-sc]{color:var(--lyeh-text-main)}div[class^=ExpandableListItem__Container]{border-color:var(--lyeh-text-main)}div[class^=ExpandableListItem__Title]{color:var(--lyeh-text-main);background-color:#0000}div[class^=AlbumCredits__Columns] div,div[class^=SongCredits__Columns] div{color:var(--lyeh-text-main)!important}a[class^=SongTags__Tag]{border-color:var(--lyeh-text-main)!important}");
	_css("div[class^=standalone_annotation]{background-color:#16141496;border:1px solid #fff9;border-radius:10px;padding:10px}a[class^=referent--accent_font\\ referent--line_break]{background-color:#fa64a0b3!important}div[class^=profile_achievements-badge-name]{color:var(--lyeh-text-main)}div[class^=statistics_panel]{background-color:#0000}div[class^=statistics_panel] path{fill:var(--lyeh-text-main)}a[class^=profile_contribution],a[class^=referent]{background-color:#0000!important}div[class^=note_bubble]{background-color:var(--accent-muted)!important}div[class^=note_bubble]:before{border-bottom-color:var(--accent-muted)!important}");
	_css("div[class^=HomeContent-desktop__Section]{background-color:#0000!important}div[class^=HomeContent-desktop__Section] :is(h2,h3){color:inherit;text-shadow:unset!important}div[class^=EditorialPlacement__Container]:hover :is(h2,h3){color:var(--lyeh-accent)!important}div[class^=SquareManySelects__Container]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#16141496;border:1px solid #fff9;border-radius:10px}div[class^=SquareManySelects__Option]:hover{background-color:var(--accent-muted)!important}a[class^=PageGrid-desktop][class*=ChartItem-desktop__Row]:hover{background-color:#16141496}button[class^=SquareButton]{border:1px solid var(--lyeh-text-main);border-radius:10px;color:var(--lyeh-text-main)!important}button[class^=SquareButton]:hover{background-color:var(--accent-muted)}a[class^=SquareButton]{border:1px solid var(--lyeh-text-main);border-radius:10px;color:var(--lyeh-text-main)!important}a[class^=SquareButton]:hover{background-color:var(--accent-muted)}div[class^=EditorialPlacement__Label]:after{border-bottom-color:#fff!important}a[class^=PageGrid-desktop][class*=CommunityRanking-desktop__Row]:hover{background-color:var(--accent-muted)}");
	_css("div[class^=PageGrid-desktop][class*=AddSongPage__PageGrid]{background-image:none;background-color:var(--lyeh-background-main)!important}.css-wkgora-control,.css-qabeig-control{border-color:var(--lyeh-text-main)!important;color:var(--lyeh-text-main)!important}.css-13q8uhz-placeholder{color:#9a9a9a!important}.css-1wy0on6 path{fill:var(--lyeh-text-main)!important}.css-13q8uhz-placeholder path{color:#9a9a9a!important;fill:var(--lyeh-text-main)!important}input[class^=TextInput]{color:var(--lyeh-text-main);border-color:var(--lyeh-text-main)!important}input[class^=TextInput]::placeholder{color:#9a9a9a}input{color:var(--lyeh-text-main)!important}textarea[class^=TextInput]{color:var(--lyeh-text-main);border-color:var(--lyeh-text-main)!important}textarea[class^=TextInput]::placeholder{color:#9a9a9a}div[class^=Lyrics__HelperText],div[class^=Field-shared__FieldHelpText]{color:var(--lyeh-text-main)!important}div[class^=LyricsTextarea__Container]{border-color:var(--lyeh-text-main)!important;fill:var(--lyeh-text-main)!important}div[class^=LyricsTextarea__Container] path{fill:var(--lyeh-text-main)!important}fieldset[class^=DisclosureWidget__Container],div[class^=AddSongForm__AdditionalMetadataContent]{border-color:var(--lyeh-text-main)!important}div[class^=AddSongForm__AdditionalMetadataContent] :is(legend,path){color:var(--lyeh-text-main)!important;fill:var(--lyeh-text-main)!important}legend[class^=DisclosureWidget__Header]{background-color:#0000!important}");
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
	function makeMap(str) {
		const map = Object.create(null);
		for (const key of str.split(",")) map[key] = 1;
		return (val) => val in map;
	}
	var EMPTY_OBJ = {};
	var EMPTY_ARR = [];
	var NOOP = () => {};
	var NO = () => false;
	var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
	var isModelListener = (key) => key.startsWith("onUpdate:");
	var extend = Object.assign;
	var remove = (arr, el) => {
		const i = arr.indexOf(el);
		if (i > -1) arr.splice(i, 1);
	};
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
	var isArray = Array.isArray;
	var isMap = (val) => toTypeString(val) === "[object Map]";
	var isSet = (val) => toTypeString(val) === "[object Set]";
	var isDate = (val) => toTypeString(val) === "[object Date]";
	var isFunction = (val) => typeof val === "function";
	var isString = (val) => typeof val === "string";
	var isSymbol = (val) => typeof val === "symbol";
	var isObject = (val) => val !== null && typeof val === "object";
	var isPromise = (val) => {
		return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
	};
	var objectToString = Object.prototype.toString;
	var toTypeString = (value) => objectToString.call(value);
	var toRawType = (value) => {
		return toTypeString(value).slice(8, -1);
	};
	var isPlainObject = (val) => toTypeString(val) === "[object Object]";
	var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
	var isReservedProp = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
	var cacheStringFunction = (fn) => {
		const cache = Object.create(null);
		return ((str) => {
			return cache[str] || (cache[str] = fn(str));
		});
	};
	var camelizeRE = /-\w/g;
	var camelize = cacheStringFunction((str) => {
		return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
	});
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
	var capitalize = cacheStringFunction((str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	});
	var toHandlerKey = cacheStringFunction((str) => {
		return str ? `on${capitalize(str)}` : ``;
	});
	var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
	var invokeArrayFns = (fns, ...arg) => {
		for (let i = 0; i < fns.length; i++) fns[i](...arg);
	};
	var def = (obj, key, value, writable = false) => {
		Object.defineProperty(obj, key, {
			configurable: true,
			enumerable: false,
			writable,
			value
		});
	};
	var looseToNumber = (val) => {
		const n = parseFloat(val);
		return isNaN(n) ? val : n;
	};
	var _globalThis;
	var getGlobalThis = () => {
		return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
	};
	function normalizeStyle(value) {
		if (isArray(value)) {
			const res = {};
			for (let i = 0; i < value.length; i++) {
				const item = value[i];
				const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
				if (normalized) for (const key in normalized) res[key] = normalized[key];
			}
			return res;
		} else if (isString(value) || isObject(value)) return value;
	}
	var listDelimiterRE = /;(?![^(]*\))/g;
	var propertyDelimiterRE = /:([^]+)/;
	var styleCommentRE = /\/\*[^]*?\*\//g;
	function parseStringStyle(cssText) {
		const ret = {};
		cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
			if (item) {
				const tmp = item.split(propertyDelimiterRE);
				tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
			}
		});
		return ret;
	}
	function normalizeClass(value) {
		let res = "";
		if (isString(value)) res = value;
		else if (isArray(value)) for (let i = 0; i < value.length; i++) {
			const normalized = normalizeClass(value[i]);
			if (normalized) res += normalized + " ";
		}
		else if (isObject(value)) {
			for (const name in value) if (value[name]) res += name + " ";
		}
		return res.trim();
	}
	var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
	var isSpecialBooleanAttr = makeMap(specialBooleanAttrs);
	specialBooleanAttrs + "";
	function includeBooleanAttr(value) {
		return !!value || value === "";
	}
	function looseCompareArrays(a, b) {
		if (a.length !== b.length) return false;
		let equal = true;
		for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
		return equal;
	}
	function looseEqual(a, b) {
		if (a === b) return true;
		let aValidType = isDate(a);
		let bValidType = isDate(b);
		if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
		aValidType = isSymbol(a);
		bValidType = isSymbol(b);
		if (aValidType || bValidType) return a === b;
		aValidType = isArray(a);
		bValidType = isArray(b);
		if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
		aValidType = isObject(a);
		bValidType = isObject(b);
		if (aValidType || bValidType) {
			if (!aValidType || !bValidType) return false;
			if (Object.keys(a).length !== Object.keys(b).length) return false;
			for (const key in a) {
				const aHasKey = a.hasOwnProperty(key);
				const bHasKey = b.hasOwnProperty(key);
				if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
			}
		}
		return String(a) === String(b);
	}
	var isRef$1 = (val) => {
		return !!(val && val["__v_isRef"] === true);
	};
	var toDisplayString = (val) => {
		return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
	};
	var replacer = (_key, val) => {
		if (isRef$1(val)) return replacer(_key, val.value);
		else if (isMap(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
			entries[stringifySymbol(key, i) + " =>"] = val2;
			return entries;
		}, {}) };
		else if (isSet(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
		else if (isSymbol(val)) return stringifySymbol(val);
		else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
		return val;
	};
	var stringifySymbol = (v, i = "") => {
		var _a;
		return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
	};
	var activeEffectScope;
	var EffectScope = class {
		constructor(detached = false) {
			this.detached = detached;
			this._active = true;
			this._on = 0;
			this.effects = [];
			this.cleanups = [];
			this._isPaused = false;
			this._warnOnRun = true;
			this.__v_skip = true;
			if (!detached && activeEffectScope) if (activeEffectScope.active) {
				this.parent = activeEffectScope;
				this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
			} else {
				this._active = false;
				this._warnOnRun = false;
			}
		}
		get active() {
			return this._active;
		}
		pause() {
			if (this._active) {
				this._isPaused = true;
				let i, l;
				if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].pause();
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
			}
		}
		resume() {
			if (this._active) {
				if (this._isPaused) {
					this._isPaused = false;
					let i, l;
					if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].resume();
					for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].resume();
				}
			}
		}
		run(fn) {
			if (this._active) {
				const currentEffectScope = activeEffectScope;
				try {
					activeEffectScope = this;
					return fn();
				} finally {
					activeEffectScope = currentEffectScope;
				}
			}
		}
		on() {
			if (++this._on === 1) {
				this.prevScope = activeEffectScope;
				activeEffectScope = this;
			}
		}
		off() {
			if (this._on > 0 && --this._on === 0) {
				if (activeEffectScope === this) activeEffectScope = this.prevScope;
				else {
					let current = activeEffectScope;
					while (current) {
						if (current.prevScope === this) {
							current.prevScope = this.prevScope;
							break;
						}
						current = current.prevScope;
					}
				}
				this.prevScope = void 0;
			}
		}
		stop(fromParent) {
			if (this._active) {
				this._active = false;
				let i, l;
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
				this.effects.length = 0;
				for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
				this.cleanups.length = 0;
				if (this.scopes) {
					for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
					this.scopes.length = 0;
				}
				if (!this.detached && this.parent && !fromParent) {
					const last = this.parent.scopes.pop();
					if (last && last !== this) {
						this.parent.scopes[this.index] = last;
						last.index = this.index;
					}
				}
				this.parent = void 0;
			}
		}
	};
	function getCurrentScope() {
		return activeEffectScope;
	}
	var activeSub;
	var pausedQueueEffects = new WeakSet();
	var ReactiveEffect = class {
		constructor(fn) {
			this.fn = fn;
			this.deps = void 0;
			this.depsTail = void 0;
			this.flags = 5;
			this.next = void 0;
			this.cleanup = void 0;
			this.scheduler = void 0;
			if (activeEffectScope) if (activeEffectScope.active) activeEffectScope.effects.push(this);
			else this.flags &= -2;
		}
		pause() {
			this.flags |= 64;
		}
		resume() {
			if (this.flags & 64) {
				this.flags &= -65;
				if (pausedQueueEffects.has(this)) {
					pausedQueueEffects.delete(this);
					this.trigger();
				}
			}
		}
		notify() {
			if (this.flags & 2 && !(this.flags & 32)) return;
			if (!(this.flags & 8)) batch(this);
		}
		run() {
			if (!(this.flags & 1)) return this.fn();
			this.flags |= 2;
			cleanupEffect(this);
			prepareDeps(this);
			const prevEffect = activeSub;
			const prevShouldTrack = shouldTrack;
			activeSub = this;
			shouldTrack = true;
			try {
				return this.fn();
			} finally {
				cleanupDeps(this);
				activeSub = prevEffect;
				shouldTrack = prevShouldTrack;
				this.flags &= -3;
			}
		}
		stop() {
			if (this.flags & 1) {
				for (let link = this.deps; link; link = link.nextDep) removeSub(link);
				this.deps = this.depsTail = void 0;
				cleanupEffect(this);
				this.onStop && this.onStop();
				this.flags &= -2;
			}
		}
		trigger() {
			if (this.flags & 64) pausedQueueEffects.add(this);
			else if (this.scheduler) this.scheduler();
			else this.runIfDirty();
		}
		runIfDirty() {
			if (isDirty(this)) this.run();
		}
		get dirty() {
			return isDirty(this);
		}
	};
	var batchDepth = 0;
	var batchedSub;
	var batchedComputed;
	function batch(sub, isComputed = false) {
		sub.flags |= 8;
		if (isComputed) {
			sub.next = batchedComputed;
			batchedComputed = sub;
			return;
		}
		sub.next = batchedSub;
		batchedSub = sub;
	}
	function startBatch() {
		batchDepth++;
	}
	function endBatch() {
		if (--batchDepth > 0) return;
		if (batchedComputed) {
			let e = batchedComputed;
			batchedComputed = void 0;
			while (e) {
				const next = e.next;
				e.next = void 0;
				e.flags &= -9;
				e = next;
			}
		}
		let error;
		while (batchedSub) {
			let e = batchedSub;
			batchedSub = void 0;
			while (e) {
				const next = e.next;
				e.next = void 0;
				e.flags &= -9;
				if (e.flags & 1) try {
					e.trigger();
				} catch (err) {
					if (!error) error = err;
				}
				e = next;
			}
		}
		if (error) throw error;
	}
	function prepareDeps(sub) {
		for (let link = sub.deps; link; link = link.nextDep) {
			link.version = -1;
			link.prevActiveLink = link.dep.activeLink;
			link.dep.activeLink = link;
		}
	}
	function cleanupDeps(sub) {
		let head;
		let tail = sub.depsTail;
		let link = tail;
		while (link) {
			const prev = link.prevDep;
			if (link.version === -1) {
				if (link === tail) tail = prev;
				removeSub(link);
				removeDep(link);
			} else head = link;
			link.dep.activeLink = link.prevActiveLink;
			link.prevActiveLink = void 0;
			link = prev;
		}
		sub.deps = head;
		sub.depsTail = tail;
	}
	function isDirty(sub) {
		for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
		if (sub._dirty) return true;
		return false;
	}
	function refreshComputed(computed) {
		if (computed.flags & 4 && !(computed.flags & 16)) return;
		computed.flags &= -17;
		if (computed.globalVersion === globalVersion) return;
		computed.globalVersion = globalVersion;
		if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
		computed.flags |= 2;
		const dep = computed.dep;
		const prevSub = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = computed;
		shouldTrack = true;
		try {
			prepareDeps(computed);
			const value = computed.fn(computed._value);
			if (dep.version === 0 || hasChanged(value, computed._value)) {
				computed.flags |= 128;
				computed._value = value;
				dep.version++;
			}
		} catch (err) {
			dep.version++;
			throw err;
		} finally {
			activeSub = prevSub;
			shouldTrack = prevShouldTrack;
			cleanupDeps(computed);
			computed.flags &= -3;
		}
	}
	function removeSub(link, soft = false) {
		const { dep, prevSub, nextSub } = link;
		if (prevSub) {
			prevSub.nextSub = nextSub;
			link.prevSub = void 0;
		}
		if (nextSub) {
			nextSub.prevSub = prevSub;
			link.nextSub = void 0;
		}
		if (dep.subs === link) {
			dep.subs = prevSub;
			if (!prevSub && dep.computed) {
				dep.computed.flags &= -5;
				for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
			}
		}
		if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
	}
	function removeDep(link) {
		const { prevDep, nextDep } = link;
		if (prevDep) {
			prevDep.nextDep = nextDep;
			link.prevDep = void 0;
		}
		if (nextDep) {
			nextDep.prevDep = prevDep;
			link.nextDep = void 0;
		}
	}
	var shouldTrack = true;
	var trackStack = [];
	function pauseTracking() {
		trackStack.push(shouldTrack);
		shouldTrack = false;
	}
	function resetTracking() {
		const last = trackStack.pop();
		shouldTrack = last === void 0 ? true : last;
	}
	function cleanupEffect(e) {
		const { cleanup } = e;
		e.cleanup = void 0;
		if (cleanup) {
			const prevSub = activeSub;
			activeSub = void 0;
			try {
				cleanup();
			} finally {
				activeSub = prevSub;
			}
		}
	}
	var globalVersion = 0;
	var Link = class {
		constructor(sub, dep) {
			this.sub = sub;
			this.dep = dep;
			this.version = dep.version;
			this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
		}
	};
	var Dep = class {
		constructor(computed) {
			this.computed = computed;
			this.version = 0;
			this.activeLink = void 0;
			this.subs = void 0;
			this.map = void 0;
			this.key = void 0;
			this.sc = 0;
			this.__v_skip = true;
		}
		track(debugInfo) {
			if (!activeSub || !shouldTrack || activeSub === this.computed) return;
			let link = this.activeLink;
			if (link === void 0 || link.sub !== activeSub) {
				link = this.activeLink = new Link(activeSub, this);
				if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
				else {
					link.prevDep = activeSub.depsTail;
					activeSub.depsTail.nextDep = link;
					activeSub.depsTail = link;
				}
				addSub(link);
			} else if (link.version === -1) {
				link.version = this.version;
				if (link.nextDep) {
					const next = link.nextDep;
					next.prevDep = link.prevDep;
					if (link.prevDep) link.prevDep.nextDep = next;
					link.prevDep = activeSub.depsTail;
					link.nextDep = void 0;
					activeSub.depsTail.nextDep = link;
					activeSub.depsTail = link;
					if (activeSub.deps === link) activeSub.deps = next;
				}
			}
			return link;
		}
		trigger(debugInfo) {
			this.version++;
			globalVersion++;
			this.notify(debugInfo);
		}
		notify(debugInfo) {
			startBatch();
			try {
				for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
			} finally {
				endBatch();
			}
		}
	};
	function addSub(link) {
		link.dep.sc++;
		if (link.sub.flags & 4) {
			const computed = link.dep.computed;
			if (computed && !link.dep.subs) {
				computed.flags |= 20;
				for (let l = computed.deps; l; l = l.nextDep) addSub(l);
			}
			const currentTail = link.dep.subs;
			if (currentTail !== link) {
				link.prevSub = currentTail;
				if (currentTail) currentTail.nextSub = link;
			}
			link.dep.subs = link;
		}
	}
	var targetMap = new WeakMap();
	var ITERATE_KEY = Symbol("");
	var MAP_KEY_ITERATE_KEY = Symbol("");
	var ARRAY_ITERATE_KEY = Symbol("");
	function track(target, type, key) {
		if (shouldTrack && activeSub) {
			let depsMap = targetMap.get(target);
			if (!depsMap) targetMap.set(target, depsMap = new Map());
			let dep = depsMap.get(key);
			if (!dep) {
				depsMap.set(key, dep = new Dep());
				dep.map = depsMap;
				dep.key = key;
			}
			dep.track();
		}
	}
	function trigger(target, type, key, newValue, oldValue, oldTarget) {
		const depsMap = targetMap.get(target);
		if (!depsMap) {
			globalVersion++;
			return;
		}
		const run = (dep) => {
			if (dep) dep.trigger();
		};
		startBatch();
		if (type === "clear") depsMap.forEach(run);
		else {
			const targetIsArray = isArray(target);
			const isArrayIndex = targetIsArray && isIntegerKey(key);
			if (targetIsArray && key === "length") {
				const newLength = Number(newValue);
				depsMap.forEach((dep, key2) => {
					if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) run(dep);
				});
			} else {
				if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
				if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
				switch (type) {
					case "add":
						if (!targetIsArray) {
							run(depsMap.get(ITERATE_KEY));
							if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
						} else if (isArrayIndex) run(depsMap.get("length"));
						break;
					case "delete":
						if (!targetIsArray) {
							run(depsMap.get(ITERATE_KEY));
							if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
						}
						break;
					case "set":
						if (isMap(target)) run(depsMap.get(ITERATE_KEY));
						break;
				}
			}
		}
		endBatch();
	}
	function reactiveReadArray(array) {
		const raw = toRaw(array);
		if (raw === array) return raw;
		track(raw, "iterate", ARRAY_ITERATE_KEY);
		return isShallow(array) ? raw : raw.map(toReactive);
	}
	function shallowReadArray(arr) {
		track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
		return arr;
	}
	function toWrapped(target, item) {
		if (isReadonly(target)) return isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
		return toReactive(item);
	}
	var arrayInstrumentations = {
		__proto__: null,
		[Symbol.iterator]() {
			return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
		},
		concat(...args) {
			return reactiveReadArray(this).concat(...args.map((x) => isArray(x) ? reactiveReadArray(x) : x));
		},
		entries() {
			return iterator(this, "entries", (value) => {
				value[1] = toWrapped(this, value[1]);
				return value;
			});
		},
		every(fn, thisArg) {
			return apply(this, "every", fn, thisArg, void 0, arguments);
		},
		filter(fn, thisArg) {
			return apply(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
		},
		find(fn, thisArg) {
			return apply(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
		},
		findIndex(fn, thisArg) {
			return apply(this, "findIndex", fn, thisArg, void 0, arguments);
		},
		findLast(fn, thisArg) {
			return apply(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
		},
		findLastIndex(fn, thisArg) {
			return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
		},
		forEach(fn, thisArg) {
			return apply(this, "forEach", fn, thisArg, void 0, arguments);
		},
		includes(...args) {
			return searchProxy(this, "includes", args);
		},
		indexOf(...args) {
			return searchProxy(this, "indexOf", args);
		},
		join(separator) {
			return reactiveReadArray(this).join(separator);
		},
		lastIndexOf(...args) {
			return searchProxy(this, "lastIndexOf", args);
		},
		map(fn, thisArg) {
			return apply(this, "map", fn, thisArg, void 0, arguments);
		},
		pop() {
			return noTracking(this, "pop");
		},
		push(...args) {
			return noTracking(this, "push", args);
		},
		reduce(fn, ...args) {
			return reduce(this, "reduce", fn, args);
		},
		reduceRight(fn, ...args) {
			return reduce(this, "reduceRight", fn, args);
		},
		shift() {
			return noTracking(this, "shift");
		},
		some(fn, thisArg) {
			return apply(this, "some", fn, thisArg, void 0, arguments);
		},
		splice(...args) {
			return noTracking(this, "splice", args);
		},
		toReversed() {
			return reactiveReadArray(this).toReversed();
		},
		toSorted(comparer) {
			return reactiveReadArray(this).toSorted(comparer);
		},
		toSpliced(...args) {
			return reactiveReadArray(this).toSpliced(...args);
		},
		unshift(...args) {
			return noTracking(this, "unshift", args);
		},
		values() {
			return iterator(this, "values", (item) => toWrapped(this, item));
		}
	};
	function iterator(self, method, wrapValue) {
		const arr = shallowReadArray(self);
		const iter = arr[method]();
		if (arr !== self && !isShallow(self)) {
			iter._next = iter.next;
			iter.next = () => {
				const result = iter._next();
				if (!result.done) result.value = wrapValue(result.value);
				return result;
			};
		}
		return iter;
	}
	var arrayProto = Array.prototype;
	function apply(self, method, fn, thisArg, wrappedRetFn, args) {
		const arr = shallowReadArray(self);
		const needsWrap = arr !== self && !isShallow(self);
		const methodFn = arr[method];
		if (methodFn !== arrayProto[method]) {
			const result2 = methodFn.apply(self, args);
			return needsWrap ? toReactive(result2) : result2;
		}
		let wrappedFn = fn;
		if (arr !== self) {
			if (needsWrap) wrappedFn = function(item, index) {
				return fn.call(this, toWrapped(self, item), index, self);
			};
			else if (fn.length > 2) wrappedFn = function(item, index) {
				return fn.call(this, item, index, self);
			};
		}
		const result = methodFn.call(arr, wrappedFn, thisArg);
		return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
	}
	function reduce(self, method, fn, args) {
		const arr = shallowReadArray(self);
		const needsWrap = arr !== self && !isShallow(self);
		let wrappedFn = fn;
		let wrapInitialAccumulator = false;
		if (arr !== self) {
			if (needsWrap) {
				wrapInitialAccumulator = args.length === 0;
				wrappedFn = function(acc, item, index) {
					if (wrapInitialAccumulator) {
						wrapInitialAccumulator = false;
						acc = toWrapped(self, acc);
					}
					return fn.call(this, acc, toWrapped(self, item), index, self);
				};
			} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
				return fn.call(this, acc, item, index, self);
			};
		}
		const result = arr[method](wrappedFn, ...args);
		return wrapInitialAccumulator ? toWrapped(self, result) : result;
	}
	function searchProxy(self, method, args) {
		const arr = toRaw(self);
		track(arr, "iterate", ARRAY_ITERATE_KEY);
		const res = arr[method](...args);
		if ((res === -1 || res === false) && isProxy(args[0])) {
			args[0] = toRaw(args[0]);
			return arr[method](...args);
		}
		return res;
	}
	function noTracking(self, method, args = []) {
		pauseTracking();
		startBatch();
		const res = toRaw(self)[method].apply(self, args);
		endBatch();
		resetTracking();
		return res;
	}
	var isNonTrackableKeys = makeMap(`__proto__,__v_isRef,__isVue`);
	var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
	function hasOwnProperty(key) {
		if (!isSymbol(key)) key = String(key);
		const obj = toRaw(this);
		track(obj, "has", key);
		return obj.hasOwnProperty(key);
	}
	var BaseReactiveHandler = class {
		constructor(_isReadonly = false, _isShallow = false) {
			this._isReadonly = _isReadonly;
			this._isShallow = _isShallow;
		}
		get(target, key, receiver) {
			if (key === "__v_skip") return target["__v_skip"];
			const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
			if (key === "__v_isReactive") return !isReadonly2;
			else if (key === "__v_isReadonly") return isReadonly2;
			else if (key === "__v_isShallow") return isShallow2;
			else if (key === "__v_raw") {
				if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
				return;
			}
			const targetIsArray = isArray(target);
			if (!isReadonly2) {
				let fn;
				if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
				if (key === "hasOwnProperty") return hasOwnProperty;
			}
			const res = Reflect.get(target, key, isRef(target) ? target : receiver);
			if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
			if (!isReadonly2) track(target, "get", key);
			if (isShallow2) return res;
			if (isRef(res)) {
				const value = targetIsArray && isIntegerKey(key) ? res : res.value;
				return isReadonly2 && isObject(value) ? readonly(value) : value;
			}
			if (isObject(res)) return isReadonly2 ? readonly(res) : reactive(res);
			return res;
		}
	};
	var MutableReactiveHandler = class extends BaseReactiveHandler {
		constructor(isShallow2 = false) {
			super(false, isShallow2);
		}
		set(target, key, value, receiver) {
			let oldValue = target[key];
			const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
			if (!this._isShallow) {
				const isOldValueReadonly = isReadonly(oldValue);
				if (!isShallow(value) && !isReadonly(value)) {
					oldValue = toRaw(oldValue);
					value = toRaw(value);
				}
				if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) if (isOldValueReadonly) return true;
				else {
					oldValue.value = value;
					return true;
				}
			}
			const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
			const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
			if (target === toRaw(receiver)) {
				if (!hadKey) trigger(target, "add", key, value);
				else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			}
			return result;
		}
		deleteProperty(target, key) {
			const hadKey = hasOwn(target, key);
			const oldValue = target[key];
			const result = Reflect.deleteProperty(target, key);
			if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		}
		has(target, key) {
			const result = Reflect.has(target, key);
			if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
			return result;
		}
		ownKeys(target) {
			track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
			return Reflect.ownKeys(target);
		}
	};
	var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
		constructor(isShallow2 = false) {
			super(true, isShallow2);
		}
		set(target, key) {
			return true;
		}
		deleteProperty(target, key) {
			return true;
		}
	};
	var mutableHandlers = new MutableReactiveHandler();
	var readonlyHandlers = new ReadonlyReactiveHandler();
	var shallowReactiveHandlers = new MutableReactiveHandler(true);
	var toShallow = (value) => value;
	var getProto = (v) => Reflect.getPrototypeOf(v);
	function createIterableMethod(method, isReadonly2, isShallow2) {
		return function(...args) {
			const target = this["__v_raw"];
			const rawTarget = toRaw(target);
			const targetIsMap = isMap(rawTarget);
			const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
			const isKeyOnly = method === "keys" && targetIsMap;
			const innerIterator = target[method](...args);
			const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
			!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
			return extend(Object.create(innerIterator), { next() {
				const { value, done } = innerIterator.next();
				return done ? {
					value,
					done
				} : {
					value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
					done
				};
			} });
		};
	}
	function createReadonlyMethod(type) {
		return function(...args) {
			return type === "delete" ? false : type === "clear" ? void 0 : this;
		};
	}
	function createInstrumentations(readonly, shallow) {
		const instrumentations = {
			get(key) {
				const target = this["__v_raw"];
				const rawTarget = toRaw(target);
				const rawKey = toRaw(key);
				if (!readonly) {
					if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
					track(rawTarget, "get", rawKey);
				}
				const { has } = getProto(rawTarget);
				const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
				if (has.call(rawTarget, key)) return wrap(target.get(key));
				else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
				else if (target !== rawTarget) target.get(key);
			},
			get size() {
				const target = this["__v_raw"];
				!readonly && track(toRaw(target), "iterate", ITERATE_KEY);
				return target.size;
			},
			has(key) {
				const target = this["__v_raw"];
				const rawTarget = toRaw(target);
				const rawKey = toRaw(key);
				if (!readonly) {
					if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
					track(rawTarget, "has", rawKey);
				}
				return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
			},
			forEach(callback, thisArg) {
				const observed = this;
				const target = observed["__v_raw"];
				const rawTarget = toRaw(target);
				const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
				!readonly && track(rawTarget, "iterate", ITERATE_KEY);
				return target.forEach((value, key) => {
					return callback.call(thisArg, wrap(value), wrap(key), observed);
				});
			}
		};
		extend(instrumentations, readonly ? {
			add: createReadonlyMethod("add"),
			set: createReadonlyMethod("set"),
			delete: createReadonlyMethod("delete"),
			clear: createReadonlyMethod("clear")
		} : {
			add(value) {
				const target = toRaw(this);
				const proto = getProto(target);
				const rawValue = toRaw(value);
				const valueToAdd = !shallow && !isShallow(value) && !isReadonly(value) ? rawValue : value;
				if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
					target.add(valueToAdd);
					trigger(target, "add", valueToAdd, valueToAdd);
				}
				return this;
			},
			set(key, value) {
				if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
				const target = toRaw(this);
				const { has, get } = getProto(target);
				let hadKey = has.call(target, key);
				if (!hadKey) {
					key = toRaw(key);
					hadKey = has.call(target, key);
				}
				const oldValue = get.call(target, key);
				target.set(key, value);
				if (!hadKey) trigger(target, "add", key, value);
				else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
				return this;
			},
			delete(key) {
				const target = toRaw(this);
				const { has, get } = getProto(target);
				let hadKey = has.call(target, key);
				if (!hadKey) {
					key = toRaw(key);
					hadKey = has.call(target, key);
				}
				const oldValue = get ? get.call(target, key) : void 0;
				const result = target.delete(key);
				if (hadKey) trigger(target, "delete", key, void 0, oldValue);
				return result;
			},
			clear() {
				const target = toRaw(this);
				const hadItems = target.size !== 0;
				const oldTarget = void 0;
				const result = target.clear();
				if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
				return result;
			}
		});
		[
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((method) => {
			instrumentations[method] = createIterableMethod(method, readonly, shallow);
		});
		return instrumentations;
	}
	function createInstrumentationGetter(isReadonly2, shallow) {
		const instrumentations = createInstrumentations(isReadonly2, shallow);
		return (target, key, receiver) => {
			if (key === "__v_isReactive") return !isReadonly2;
			else if (key === "__v_isReadonly") return isReadonly2;
			else if (key === "__v_raw") return target;
			return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
		};
	}
	var mutableCollectionHandlers = { get: createInstrumentationGetter(false, false) };
	var shallowCollectionHandlers = { get: createInstrumentationGetter(false, true) };
	var readonlyCollectionHandlers = { get: createInstrumentationGetter(true, false) };
	var reactiveMap = new WeakMap();
	var shallowReactiveMap = new WeakMap();
	var readonlyMap = new WeakMap();
	var shallowReadonlyMap = new WeakMap();
	function targetTypeMap(rawType) {
		switch (rawType) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}
	function reactive(target) {
		if (isReadonly(target)) return target;
		return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
	}
	function shallowReactive(target) {
		return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
	}
	function readonly(target) {
		return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
	}
	function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
		if (!isObject(target)) return target;
		if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
		if (target["__v_skip"] || !Object.isExtensible(target)) return target;
		const existingProxy = proxyMap.get(target);
		if (existingProxy) return existingProxy;
		const targetType = targetTypeMap(toRawType(target));
		if (targetType === 0) return target;
		const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
		proxyMap.set(target, proxy);
		return proxy;
	}
	function isReactive(value) {
		if (isReadonly(value)) return isReactive(value["__v_raw"]);
		return !!(value && value["__v_isReactive"]);
	}
	function isReadonly(value) {
		return !!(value && value["__v_isReadonly"]);
	}
	function isShallow(value) {
		return !!(value && value["__v_isShallow"]);
	}
	function isProxy(value) {
		return value ? !!value["__v_raw"] : false;
	}
	function toRaw(observed) {
		const raw = observed && observed["__v_raw"];
		return raw ? toRaw(raw) : observed;
	}
	function markRaw(value) {
		if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
		return value;
	}
	var toReactive = (value) => isObject(value) ? reactive(value) : value;
	var toReadonly = (value) => isObject(value) ? readonly(value) : value;
	function isRef(r) {
		return r ? r["__v_isRef"] === true : false;
	}
	function ref(value) {
		return createRef(value, false);
	}
	function createRef(rawValue, shallow) {
		if (isRef(rawValue)) return rawValue;
		return new RefImpl(rawValue, shallow);
	}
	var RefImpl = class {
		constructor(value, isShallow2) {
			this.dep = new Dep();
			this["__v_isRef"] = true;
			this["__v_isShallow"] = false;
			this._rawValue = isShallow2 ? value : toRaw(value);
			this._value = isShallow2 ? value : toReactive(value);
			this["__v_isShallow"] = isShallow2;
		}
		get value() {
			this.dep.track();
			return this._value;
		}
		set value(newValue) {
			const oldValue = this._rawValue;
			const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
			newValue = useDirectValue ? newValue : toRaw(newValue);
			if (hasChanged(newValue, oldValue)) {
				this._rawValue = newValue;
				this._value = useDirectValue ? newValue : toReactive(newValue);
				this.dep.trigger();
			}
		}
	};
	function unref(ref2) {
		return isRef(ref2) ? ref2.value : ref2;
	}
	var shallowUnwrapHandlers = {
		get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
		set: (target, key, value, receiver) => {
			const oldValue = target[key];
			if (isRef(oldValue) && !isRef(value)) {
				oldValue.value = value;
				return true;
			} else return Reflect.set(target, key, value, receiver);
		}
	};
	function proxyRefs(objectWithRefs) {
		return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
	}
	var ComputedRefImpl = class {
		constructor(fn, setter, isSSR) {
			this.fn = fn;
			this.setter = setter;
			this._value = void 0;
			this.dep = new Dep(this);
			this.__v_isRef = true;
			this.deps = void 0;
			this.depsTail = void 0;
			this.flags = 16;
			this.globalVersion = globalVersion - 1;
			this.next = void 0;
			this.effect = this;
			this["__v_isReadonly"] = !setter;
			this.isSSR = isSSR;
		}
		notify() {
			this.flags |= 16;
			if (!(this.flags & 8) && activeSub !== this) {
				batch(this, true);
				return true;
			}
		}
		get value() {
			const link = this.dep.track();
			refreshComputed(this);
			if (link) link.version = this.dep.version;
			return this._value;
		}
		set value(newValue) {
			if (this.setter) this.setter(newValue);
		}
	};
	function computed$1(getterOrOptions, debugOptions, isSSR = false) {
		let getter;
		let setter;
		if (isFunction(getterOrOptions)) getter = getterOrOptions;
		else {
			getter = getterOrOptions.get;
			setter = getterOrOptions.set;
		}
		return new ComputedRefImpl(getter, setter, isSSR);
	}
	var INITIAL_WATCHER_VALUE = {};
	var cleanupMap = new WeakMap();
	var activeWatcher = void 0;
	function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
		if (owner) {
			let cleanups = cleanupMap.get(owner);
			if (!cleanups) cleanupMap.set(owner, cleanups = []);
			cleanups.push(cleanupFn);
		}
	}
	function watch$1(source, cb, options = EMPTY_OBJ) {
		const { immediate, deep, once, scheduler, augmentJob, call } = options;
		const reactiveGetter = (source2) => {
			if (deep) return source2;
			if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
			return traverse(source2);
		};
		let effect;
		let getter;
		let cleanup;
		let boundCleanup;
		let forceTrigger = false;
		let isMultiSource = false;
		if (isRef(source)) {
			getter = () => source.value;
			forceTrigger = isShallow(source);
		} else if (isReactive(source)) {
			getter = () => reactiveGetter(source);
			forceTrigger = true;
		} else if (isArray(source)) {
			isMultiSource = true;
			forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
			getter = () => source.map((s) => {
				if (isRef(s)) return s.value;
				else if (isReactive(s)) return reactiveGetter(s);
				else if (isFunction(s)) return call ? call(s, 2) : s();
			});
		} else if (isFunction(source)) if (cb) getter = call ? () => call(source, 2) : source;
		else getter = () => {
			if (cleanup) {
				pauseTracking();
				try {
					cleanup();
				} finally {
					resetTracking();
				}
			}
			const currentEffect = activeWatcher;
			activeWatcher = effect;
			try {
				return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
			} finally {
				activeWatcher = currentEffect;
			}
		};
		else getter = NOOP;
		if (cb && deep) {
			const baseGetter = getter;
			const depth = deep === true ? Infinity : deep;
			getter = () => traverse(baseGetter(), depth);
		}
		const scope = getCurrentScope();
		const watchHandle = () => {
			effect.stop();
			if (scope && scope.active) remove(scope.effects, effect);
		};
		if (once && cb) {
			const _cb = cb;
			cb = (...args) => {
				const res = _cb(...args);
				watchHandle();
				return res;
			};
		}
		let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
		const job = (immediateFirstRun) => {
			if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
			if (cb) {
				const newValue = effect.run();
				if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
					if (cleanup) cleanup();
					const currentWatcher = activeWatcher;
					activeWatcher = effect;
					try {
						const args = [
							newValue,
							oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
							boundCleanup
						];
						oldValue = newValue;
						call ? call(cb, 3, args) : cb(...args);
					} finally {
						activeWatcher = currentWatcher;
					}
				}
			} else effect.run();
		};
		if (augmentJob) augmentJob(job);
		effect = new ReactiveEffect(getter);
		effect.scheduler = scheduler ? () => scheduler(job, false) : job;
		boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
		cleanup = effect.onStop = () => {
			const cleanups = cleanupMap.get(effect);
			if (cleanups) {
				if (call) call(cleanups, 4);
				else for (const cleanup2 of cleanups) cleanup2();
				cleanupMap.delete(effect);
			}
		};
		if (cb) if (immediate) job(true);
		else oldValue = effect.run();
		else if (scheduler) scheduler(job.bind(null, true), true);
		else effect.run();
		watchHandle.pause = effect.pause.bind(effect);
		watchHandle.resume = effect.resume.bind(effect);
		watchHandle.stop = watchHandle;
		return watchHandle;
	}
	function traverse(value, depth = Infinity, seen) {
		if (depth <= 0 || !isObject(value) || value["__v_skip"]) return value;
		seen = seen || new Map();
		if ((seen.get(value) || 0) >= depth) return value;
		seen.set(value, depth);
		depth--;
		if (isRef(value)) traverse(value.value, depth, seen);
		else if (isArray(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
		else if (isSet(value) || isMap(value)) value.forEach((v) => {
			traverse(v, depth, seen);
		});
		else if (isPlainObject(value)) {
			for (const key in value) traverse(value[key], depth, seen);
			for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
		}
		return value;
	}
	function callWithErrorHandling(fn, instance, type, args) {
		try {
			return args ? fn(...args) : fn();
		} catch (err) {
			handleError(err, instance, type);
		}
	}
	function callWithAsyncErrorHandling(fn, instance, type, args) {
		if (isFunction(fn)) {
			const res = callWithErrorHandling(fn, instance, type, args);
			if (res && isPromise(res)) res.catch((err) => {
				handleError(err, instance, type);
			});
			return res;
		}
		if (isArray(fn)) {
			const values = [];
			for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
			return values;
		}
	}
	function handleError(err, instance, type, throwInDev = true) {
		const contextVNode = instance ? instance.vnode : null;
		const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
		if (instance) {
			let cur = instance.parent;
			const exposedInstance = instance.proxy;
			const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
			while (cur) {
				const errorCapturedHooks = cur.ec;
				if (errorCapturedHooks) {
					for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
				}
				cur = cur.parent;
			}
			if (errorHandler) {
				pauseTracking();
				callWithErrorHandling(errorHandler, null, 10, [
					err,
					exposedInstance,
					errorInfo
				]);
				resetTracking();
				return;
			}
		}
		logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
	}
	function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
		if (throwInProd) throw err;
		else console.error(err);
	}
	var queue = [];
	var flushIndex = -1;
	var pendingPostFlushCbs = [];
	var activePostFlushCbs = null;
	var postFlushIndex = 0;
	var resolvedPromise = Promise.resolve();
	var currentFlushPromise = null;
	function nextTick(fn) {
		const p = currentFlushPromise || resolvedPromise;
		return fn ? p.then(this ? fn.bind(this) : fn) : p;
	}
	function findInsertionIndex(id) {
		let start = flushIndex + 1;
		let end = queue.length;
		while (start < end) {
			const middle = start + end >>> 1;
			const middleJob = queue[middle];
			const middleJobId = getId(middleJob);
			if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
			else end = middle;
		}
		return start;
	}
	function queueJob(job) {
		if (!(job.flags & 1)) {
			const jobId = getId(job);
			const lastJob = queue[queue.length - 1];
			if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
			else queue.splice(findInsertionIndex(jobId), 0, job);
			job.flags |= 1;
			queueFlush();
		}
	}
	function queueFlush() {
		if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
	}
	function queuePostFlushCb(cb) {
		if (!isArray(cb)) {
			if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
			else if (!(cb.flags & 1)) {
				pendingPostFlushCbs.push(cb);
				cb.flags |= 1;
			}
		} else pendingPostFlushCbs.push(...cb);
		queueFlush();
	}
	function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
		for (; i < queue.length; i++) {
			const cb = queue[i];
			if (cb && cb.flags & 2) {
				if (instance && cb.id !== instance.uid) continue;
				queue.splice(i, 1);
				i--;
				if (cb.flags & 4) cb.flags &= -2;
				cb();
				if (!(cb.flags & 4)) cb.flags &= -2;
			}
		}
	}
	function flushPostFlushCbs(seen) {
		if (pendingPostFlushCbs.length) {
			const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
			pendingPostFlushCbs.length = 0;
			if (activePostFlushCbs) {
				activePostFlushCbs.push(...deduped);
				return;
			}
			activePostFlushCbs = deduped;
			for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
				const cb = activePostFlushCbs[postFlushIndex];
				if (cb.flags & 4) cb.flags &= -2;
				if (!(cb.flags & 8)) cb();
				cb.flags &= -2;
			}
			activePostFlushCbs = null;
			postFlushIndex = 0;
		}
	}
	var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
	function flushJobs(seen) {
		try {
			for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
				const job = queue[flushIndex];
				if (job && !(job.flags & 8)) {
					if (job.flags & 4) job.flags &= -2;
					callWithErrorHandling(job, job.i, job.i ? 15 : 14);
					if (!(job.flags & 4)) job.flags &= -2;
				}
			}
		} finally {
			for (; flushIndex < queue.length; flushIndex++) {
				const job = queue[flushIndex];
				if (job) job.flags &= -2;
			}
			flushIndex = -1;
			queue.length = 0;
			flushPostFlushCbs(seen);
			currentFlushPromise = null;
			if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
		}
	}
	var currentRenderingInstance = null;
	var currentScopeId = null;
	function setCurrentRenderingInstance(instance) {
		const prev = currentRenderingInstance;
		currentRenderingInstance = instance;
		currentScopeId = instance && instance.type.__scopeId || null;
		return prev;
	}
	function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
		if (!ctx) return fn;
		if (fn._n) return fn;
		const renderFnWithContext = (...args) => {
			if (renderFnWithContext._d) setBlockTracking(-1);
			const prevInstance = setCurrentRenderingInstance(ctx);
			let res;
			try {
				res = fn(...args);
			} finally {
				setCurrentRenderingInstance(prevInstance);
				if (renderFnWithContext._d) setBlockTracking(1);
			}
			return res;
		};
		renderFnWithContext._n = true;
		renderFnWithContext._c = true;
		renderFnWithContext._d = true;
		return renderFnWithContext;
	}
	function invokeDirectiveHook(vnode, prevVNode, instance, name) {
		const bindings = vnode.dirs;
		const oldBindings = prevVNode && prevVNode.dirs;
		for (let i = 0; i < bindings.length; i++) {
			const binding = bindings[i];
			if (oldBindings) binding.oldValue = oldBindings[i].value;
			let hook = binding.dir[name];
			if (hook) {
				pauseTracking();
				callWithAsyncErrorHandling(hook, instance, 8, [
					vnode.el,
					binding,
					vnode,
					prevVNode
				]);
				resetTracking();
			}
		}
	}
	function provide(key, value) {
		if (currentInstance) {
			let provides = currentInstance.provides;
			const parentProvides = currentInstance.parent && currentInstance.parent.provides;
			if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
			provides[key] = value;
		}
	}
	function inject(key, defaultValue, treatDefaultAsFactory = false) {
		const instance = getCurrentInstance();
		if (instance || currentApp) {
			let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
			if (provides && key in provides) return provides[key];
			else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
		}
	}
	var ssrContextKey = Symbol.for("v-scx");
	var useSSRContext = () => {
		{
			const ctx = inject(ssrContextKey);
			if (!ctx) {}
			return ctx;
		}
	};
	function watch(source, cb, options) {
		return doWatch(source, cb, options);
	}
	function doWatch(source, cb, options = EMPTY_OBJ) {
		const { immediate, deep, flush, once } = options;
		const baseWatchOptions = extend({}, options);
		const runsImmediately = cb && immediate || !cb && flush !== "post";
		let ssrCleanup;
		if (isInSSRComponentSetup) {
			if (flush === "sync") {
				const ctx = useSSRContext();
				ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
			} else if (!runsImmediately) {
				const watchStopHandle = () => {};
				watchStopHandle.stop = NOOP;
				watchStopHandle.resume = NOOP;
				watchStopHandle.pause = NOOP;
				return watchStopHandle;
			}
		}
		const instance = currentInstance;
		baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
		let isPre = false;
		if (flush === "post") baseWatchOptions.scheduler = (job) => {
			queuePostRenderEffect(job, instance && instance.suspense);
		};
		else if (flush !== "sync") {
			isPre = true;
			baseWatchOptions.scheduler = (job, isFirstRun) => {
				if (isFirstRun) job();
				else queueJob(job);
			};
		}
		baseWatchOptions.augmentJob = (job) => {
			if (cb) job.flags |= 4;
			if (isPre) {
				job.flags |= 2;
				if (instance) {
					job.id = instance.uid;
					job.i = instance;
				}
			}
		};
		const watchHandle = watch$1(source, cb, baseWatchOptions);
		if (isInSSRComponentSetup) {
			if (ssrCleanup) ssrCleanup.push(watchHandle);
			else if (runsImmediately) watchHandle();
		}
		return watchHandle;
	}
	function instanceWatch(source, value, options) {
		const publicThis = this.proxy;
		const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
		let cb;
		if (isFunction(value)) cb = value;
		else {
			cb = value.handler;
			options = value;
		}
		const reset = setCurrentInstance(this);
		const res = doWatch(getter, cb.bind(publicThis), options);
		reset();
		return res;
	}
	function createPathGetter(ctx, path) {
		const segments = path.split(".");
		return () => {
			let cur = ctx;
			for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
			return cur;
		};
	}
	var TeleportEndKey = Symbol("_vte");
	var isTeleport = (type) => type.__isTeleport;
	var leaveCbKey = Symbol("_leaveCb");
	function setTransitionHooks(vnode, hooks) {
		if (vnode.shapeFlag & 6 && vnode.component) {
			vnode.transition = hooks;
			setTransitionHooks(vnode.component.subTree, hooks);
		} else if (vnode.shapeFlag & 128) {
			vnode.ssContent.transition = hooks.clone(vnode.ssContent);
			vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
		} else vnode.transition = hooks;
	}
	function defineComponent(options, extraOptions) {
		return isFunction(options) ? (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
	}
	function markAsyncBoundary(instance) {
		instance.ids = [
			instance.ids[0] + instance.ids[2]++ + "-",
			0,
			0
		];
	}
	function isTemplateRefKey(refs, key) {
		let desc;
		return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
	}
	var pendingSetRefMap = new WeakMap();
	function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
		if (isArray(rawRef)) {
			rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
			return;
		}
		if (isAsyncWrapper(vnode) && !isUnmount) {
			if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
			return;
		}
		const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
		const value = isUnmount ? null : refValue;
		const { i: owner, r: ref } = rawRef;
		const oldRef = oldRawRef && oldRawRef.r;
		const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
		const setupState = owner.setupState;
		const rawSetupState = toRaw(setupState);
		const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
			if (isTemplateRefKey(refs, key)) return false;
			return hasOwn(rawSetupState, key);
		};
		const canSetRef = (ref2, key) => {
			if (key && isTemplateRefKey(refs, key)) return false;
			return true;
		};
		if (oldRef != null && oldRef !== ref) {
			invalidatePendingSetRef(oldRawRef);
			if (isString(oldRef)) {
				refs[oldRef] = null;
				if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
			} else if (isRef(oldRef)) {
				const oldRawRefAtom = oldRawRef;
				if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
				if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
			}
		}
		if (isFunction(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
		else {
			const _isString = isString(ref);
			const _isRef = isRef(ref);
			if (_isString || _isRef) {
				const doSet = () => {
					if (rawRef.f) {
						const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
						if (isUnmount) isArray(existing) && remove(existing, refValue);
						else if (!isArray(existing)) if (_isString) {
							refs[ref] = [refValue];
							if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
						} else {
							const newVal = [refValue];
							if (canSetRef(ref, rawRef.k)) ref.value = newVal;
							if (rawRef.k) refs[rawRef.k] = newVal;
						}
						else if (!existing.includes(refValue)) existing.push(refValue);
					} else if (_isString) {
						refs[ref] = value;
						if (canSetSetupRef(ref)) setupState[ref] = value;
					} else if (_isRef) {
						if (canSetRef(ref, rawRef.k)) ref.value = value;
						if (rawRef.k) refs[rawRef.k] = value;
					}
				};
				if (value) {
					const job = () => {
						doSet();
						pendingSetRefMap.delete(rawRef);
					};
					job.id = -1;
					pendingSetRefMap.set(rawRef, job);
					queuePostRenderEffect(job, parentSuspense);
				} else {
					invalidatePendingSetRef(rawRef);
					doSet();
				}
			}
		}
	}
	function invalidatePendingSetRef(rawRef) {
		const pendingSetRef = pendingSetRefMap.get(rawRef);
		if (pendingSetRef) {
			pendingSetRef.flags |= 8;
			pendingSetRefMap.delete(rawRef);
		}
	}
	getGlobalThis().requestIdleCallback;
	getGlobalThis().cancelIdleCallback;
	var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
	var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
	function onActivated(hook, target) {
		registerKeepAliveHook(hook, "a", target);
	}
	function onDeactivated(hook, target) {
		registerKeepAliveHook(hook, "da", target);
	}
	function registerKeepAliveHook(hook, type, target = currentInstance) {
		const wrappedHook = hook.__wdc || (hook.__wdc = () => {
			let current = target;
			while (current) {
				if (current.isDeactivated) return;
				current = current.parent;
			}
			return hook();
		});
		injectHook(type, wrappedHook, target);
		if (target) {
			let current = target.parent;
			while (current && current.parent) {
				if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
				current = current.parent;
			}
		}
	}
	function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
		const injected = injectHook(type, hook, keepAliveRoot, true);
		onUnmounted(() => {
			remove(keepAliveRoot[type], injected);
		}, target);
	}
	function injectHook(type, hook, target = currentInstance, prepend = false) {
		if (target) {
			const hooks = target[type] || (target[type] = []);
			const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
				pauseTracking();
				const reset = setCurrentInstance(target);
				const res = callWithAsyncErrorHandling(hook, target, type, args);
				reset();
				resetTracking();
				return res;
			});
			if (prepend) hooks.unshift(wrappedHook);
			else hooks.push(wrappedHook);
			return wrappedHook;
		}
	}
	var createHook = (lifecycle) => (hook, target = currentInstance) => {
		if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
	};
	var onBeforeMount = createHook("bm");
	var onMounted = createHook("m");
	var onBeforeUpdate = createHook("bu");
	var onUpdated = createHook("u");
	var onBeforeUnmount = createHook("bum");
	var onUnmounted = createHook("um");
	var onServerPrefetch = createHook("sp");
	var onRenderTriggered = createHook("rtg");
	var onRenderTracked = createHook("rtc");
	function onErrorCaptured(hook, target = currentInstance) {
		injectHook("ec", hook, target);
	}
	var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
	var getPublicInstance = (i) => {
		if (!i) return null;
		if (isStatefulComponent(i)) return getComponentPublicInstance(i);
		return getPublicInstance(i.parent);
	};
	var publicPropertiesMap = extend(Object.create(null), {
		$: (i) => i,
		$el: (i) => i.vnode.el,
		$data: (i) => i.data,
		$props: (i) => i.props,
		$attrs: (i) => i.attrs,
		$slots: (i) => i.slots,
		$refs: (i) => i.refs,
		$parent: (i) => getPublicInstance(i.parent),
		$root: (i) => getPublicInstance(i.root),
		$host: (i) => i.ce,
		$emit: (i) => i.emit,
		$options: (i) => resolveMergedOptions(i),
		$forceUpdate: (i) => i.f || (i.f = () => {
			queueJob(i.update);
		}),
		$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
		$watch: (i) => instanceWatch.bind(i)
	});
	var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
	var PublicInstanceProxyHandlers = {
		get({ _: instance }, key) {
			if (key === "__v_skip") return true;
			const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
			if (key[0] !== "$") {
				const n = accessCache[key];
				if (n !== void 0) switch (n) {
					case 1: return setupState[key];
					case 2: return data[key];
					case 4: return ctx[key];
					case 3: return props[key];
				}
				else if (hasSetupBinding(setupState, key)) {
					accessCache[key] = 1;
					return setupState[key];
				} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
					accessCache[key] = 2;
					return data[key];
				} else if (hasOwn(props, key)) {
					accessCache[key] = 3;
					return props[key];
				} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
					accessCache[key] = 4;
					return ctx[key];
				} else if (shouldCacheAccess) accessCache[key] = 0;
			}
			const publicGetter = publicPropertiesMap[key];
			let cssModule, globalProperties;
			if (publicGetter) {
				if (key === "$attrs") track(instance.attrs, "get", "");
				return publicGetter(instance);
			} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
			else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
		},
		set({ _: instance }, key, value) {
			const { data, setupState, ctx } = instance;
			if (hasSetupBinding(setupState, key)) {
				setupState[key] = value;
				return true;
			} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
				data[key] = value;
				return true;
			} else if (hasOwn(instance.props, key)) return false;
			if (key[0] === "$" && key.slice(1) in instance) return false;
			else ctx[key] = value;
			return true;
		},
		has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
			let cssModules;
			return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
		},
		defineProperty(target, key, descriptor) {
			if (descriptor.get != null) target._.accessCache[key] = 0;
			else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
			return Reflect.defineProperty(target, key, descriptor);
		}
	};
	function normalizePropsOrEmits(props) {
		return isArray(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
	}
	var shouldCacheAccess = true;
	function applyOptions(instance) {
		const options = resolveMergedOptions(instance);
		const publicThis = instance.proxy;
		const ctx = instance.ctx;
		shouldCacheAccess = false;
		if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
		const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
		const checkDuplicateProperties = null;
		if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
		if (methods) for (const key in methods) {
			const methodHandler = methods[key];
			if (isFunction(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
		}
		if (dataOptions) {
			const data = dataOptions.call(publicThis, publicThis);
			if (!isObject(data)) {} else instance.data = reactive(data);
		}
		shouldCacheAccess = true;
		if (computedOptions) for (const key in computedOptions) {
			const opt = computedOptions[key];
			const c = computed({
				get: isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
				set: !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP
			});
			Object.defineProperty(ctx, key, {
				enumerable: true,
				configurable: true,
				get: () => c.value,
				set: (v) => c.value = v
			});
		}
		if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
		if (provideOptions) {
			const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
			Reflect.ownKeys(provides).forEach((key) => {
				provide(key, provides[key]);
			});
		}
		if (created) callHook(created, instance, "c");
		function registerLifecycleHook(register, hook) {
			if (isArray(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
			else if (hook) register(hook.bind(publicThis));
		}
		registerLifecycleHook(onBeforeMount, beforeMount);
		registerLifecycleHook(onMounted, mounted);
		registerLifecycleHook(onBeforeUpdate, beforeUpdate);
		registerLifecycleHook(onUpdated, updated);
		registerLifecycleHook(onActivated, activated);
		registerLifecycleHook(onDeactivated, deactivated);
		registerLifecycleHook(onErrorCaptured, errorCaptured);
		registerLifecycleHook(onRenderTracked, renderTracked);
		registerLifecycleHook(onRenderTriggered, renderTriggered);
		registerLifecycleHook(onBeforeUnmount, beforeUnmount);
		registerLifecycleHook(onUnmounted, unmounted);
		registerLifecycleHook(onServerPrefetch, serverPrefetch);
		if (isArray(expose)) {
			if (expose.length) {
				const exposed = instance.exposed || (instance.exposed = {});
				expose.forEach((key) => {
					Object.defineProperty(exposed, key, {
						get: () => publicThis[key],
						set: (val) => publicThis[key] = val,
						enumerable: true
					});
				});
			} else if (!instance.exposed) instance.exposed = {};
		}
		if (render && instance.render === NOOP) instance.render = render;
		if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
		if (components) instance.components = components;
		if (directives) instance.directives = directives;
		if (serverPrefetch) markAsyncBoundary(instance);
	}
	function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
		if (isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
		for (const key in injectOptions) {
			const opt = injectOptions[key];
			let injected;
			if (isObject(opt)) if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
			else injected = inject(opt.from || key);
			else injected = inject(opt);
			if (isRef(injected)) Object.defineProperty(ctx, key, {
				enumerable: true,
				configurable: true,
				get: () => injected.value,
				set: (v) => injected.value = v
			});
			else ctx[key] = injected;
		}
	}
	function callHook(hook, instance, type) {
		callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
	}
	function createWatcher(raw, ctx, publicThis, key) {
		let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
		if (isString(raw)) {
			const handler = ctx[raw];
			if (isFunction(handler)) watch(getter, handler);
		} else if (isFunction(raw)) watch(getter, raw.bind(publicThis));
		else if (isObject(raw)) if (isArray(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
		else {
			const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
			if (isFunction(handler)) watch(getter, handler, raw);
		}
	}
	function resolveMergedOptions(instance) {
		const base = instance.type;
		const { mixins, extends: extendsOptions } = base;
		const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
		const cached = cache.get(base);
		let resolved;
		if (cached) resolved = cached;
		else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
		else {
			resolved = {};
			if (globalMixins.length) globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
			mergeOptions(resolved, base, optionMergeStrategies);
		}
		if (isObject(base)) cache.set(base, resolved);
		return resolved;
	}
	function mergeOptions(to, from, strats, asMixin = false) {
		const { mixins, extends: extendsOptions } = from;
		if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
		if (mixins) mixins.forEach((m) => mergeOptions(to, m, strats, true));
		for (const key in from) if (asMixin && key === "expose") {} else {
			const strat = internalOptionMergeStrats[key] || strats && strats[key];
			to[key] = strat ? strat(to[key], from[key]) : from[key];
		}
		return to;
	}
	var internalOptionMergeStrats = {
		data: mergeDataFn,
		props: mergeEmitsOrPropsOptions,
		emits: mergeEmitsOrPropsOptions,
		methods: mergeObjectOptions,
		computed: mergeObjectOptions,
		beforeCreate: mergeAsArray,
		created: mergeAsArray,
		beforeMount: mergeAsArray,
		mounted: mergeAsArray,
		beforeUpdate: mergeAsArray,
		updated: mergeAsArray,
		beforeDestroy: mergeAsArray,
		beforeUnmount: mergeAsArray,
		destroyed: mergeAsArray,
		unmounted: mergeAsArray,
		activated: mergeAsArray,
		deactivated: mergeAsArray,
		errorCaptured: mergeAsArray,
		serverPrefetch: mergeAsArray,
		components: mergeObjectOptions,
		directives: mergeObjectOptions,
		watch: mergeWatchOptions,
		provide: mergeDataFn,
		inject: mergeInject
	};
	function mergeDataFn(to, from) {
		if (!from) return to;
		if (!to) return from;
		return function mergedDataFn() {
			return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
		};
	}
	function mergeInject(to, from) {
		return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
	}
	function normalizeInject(raw) {
		if (isArray(raw)) {
			const res = {};
			for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
			return res;
		}
		return raw;
	}
	function mergeAsArray(to, from) {
		return to ? [...new Set([].concat(to, from))] : from;
	}
	function mergeObjectOptions(to, from) {
		return to ? extend(Object.create(null), to, from) : from;
	}
	function mergeEmitsOrPropsOptions(to, from) {
		if (to) {
			if (isArray(to) && isArray(from)) return [...new Set([...to, ...from])];
			return extend(Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
		} else return from;
	}
	function mergeWatchOptions(to, from) {
		if (!to) return from;
		if (!from) return to;
		const merged = extend(Object.create(null), to);
		for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
		return merged;
	}
	function createAppContext() {
		return {
			app: null,
			config: {
				isNativeTag: NO,
				performance: false,
				globalProperties: {},
				optionMergeStrategies: {},
				errorHandler: void 0,
				warnHandler: void 0,
				compilerOptions: {}
			},
			mixins: [],
			components: {},
			directives: {},
			provides: Object.create(null),
			optionsCache: new WeakMap(),
			propsCache: new WeakMap(),
			emitsCache: new WeakMap()
		};
	}
	var uid$1 = 0;
	function createAppAPI(render, hydrate) {
		return function createApp(rootComponent, rootProps = null) {
			if (!isFunction(rootComponent)) rootComponent = extend({}, rootComponent);
			if (rootProps != null && !isObject(rootProps)) rootProps = null;
			const context = createAppContext();
			const installedPlugins = new WeakSet();
			const pluginCleanupFns = [];
			let isMounted = false;
			const app = context.app = {
				_uid: uid$1++,
				_component: rootComponent,
				_props: rootProps,
				_container: null,
				_context: context,
				_instance: null,
				version,
				get config() {
					return context.config;
				},
				set config(v) {},
				use(plugin, ...options) {
					if (installedPlugins.has(plugin)) {} else if (plugin && isFunction(plugin.install)) {
						installedPlugins.add(plugin);
						plugin.install(app, ...options);
					} else if (isFunction(plugin)) {
						installedPlugins.add(plugin);
						plugin(app, ...options);
					}
					return app;
				},
				mixin(mixin) {
					if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
					return app;
				},
				component(name, component) {
					if (!component) return context.components[name];
					context.components[name] = component;
					return app;
				},
				directive(name, directive) {
					if (!directive) return context.directives[name];
					context.directives[name] = directive;
					return app;
				},
				mount(rootContainer, isHydrate, namespace) {
					if (!isMounted) {
						const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
						vnode.appContext = context;
						if (namespace === true) namespace = "svg";
						else if (namespace === false) namespace = void 0;
						if (isHydrate && hydrate) hydrate(vnode, rootContainer);
						else render(vnode, rootContainer, namespace);
						isMounted = true;
						app._container = rootContainer;
						rootContainer.__vue_app__ = app;
						return getComponentPublicInstance(vnode.component);
					}
				},
				onUnmount(cleanupFn) {
					pluginCleanupFns.push(cleanupFn);
				},
				unmount() {
					if (isMounted) {
						callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
						render(null, app._container);
						delete app._container.__vue_app__;
					}
				},
				provide(key, value) {
					context.provides[key] = value;
					return app;
				},
				runWithContext(fn) {
					const lastApp = currentApp;
					currentApp = app;
					try {
						return fn();
					} finally {
						currentApp = lastApp;
					}
				}
			};
			return app;
		};
	}
	var currentApp = null;
	var getModelModifiers = (props, modelName) => {
		return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
	};
	function emit(instance, event, ...rawArgs) {
		if (instance.isUnmounted) return;
		const props = instance.vnode.props || EMPTY_OBJ;
		let args = rawArgs;
		const isModelListener = event.startsWith("update:");
		const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
		if (modifiers) {
			if (modifiers.trim) args = rawArgs.map((a) => isString(a) ? a.trim() : a);
			if (modifiers.number) args = rawArgs.map(looseToNumber);
		}
		let handlerName;
		let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
		if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
		if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
		const onceHandler = props[handlerName + `Once`];
		if (onceHandler) {
			if (!instance.emitted) instance.emitted = {};
			else if (instance.emitted[handlerName]) return;
			instance.emitted[handlerName] = true;
			callWithAsyncErrorHandling(onceHandler, instance, 6, args);
		}
	}
	var mixinEmitsCache = new WeakMap();
	function normalizeEmitsOptions(comp, appContext, asMixin = false) {
		const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
		const cached = cache.get(comp);
		if (cached !== void 0) return cached;
		const raw = comp.emits;
		let normalized = {};
		let hasExtends = false;
		if (!isFunction(comp)) {
			const extendEmits = (raw2) => {
				const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
				if (normalizedFromExtend) {
					hasExtends = true;
					extend(normalized, normalizedFromExtend);
				}
			};
			if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
			if (comp.extends) extendEmits(comp.extends);
			if (comp.mixins) comp.mixins.forEach(extendEmits);
		}
		if (!raw && !hasExtends) {
			if (isObject(comp)) cache.set(comp, null);
			return null;
		}
		if (isArray(raw)) raw.forEach((key) => normalized[key] = null);
		else extend(normalized, raw);
		if (isObject(comp)) cache.set(comp, normalized);
		return normalized;
	}
	function isEmitListener(options, key) {
		if (!options || !isOn(key)) return false;
		key = key.slice(2).replace(/Once$/, "");
		return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
	}
	function renderComponentRoot(instance) {
		const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
		const prev = setCurrentRenderingInstance(instance);
		let result;
		let fallthroughAttrs;
		try {
			if (vnode.shapeFlag & 4) {
				const proxyToUse = withProxy || proxy;
				const thisProxy = proxyToUse;
				result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
				fallthroughAttrs = attrs;
			} else {
				const render2 = Component;
				result = normalizeVNode(render2.length > 1 ? render2(props, {
					attrs,
					slots,
					emit
				}) : render2(props, null));
				fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
			}
		} catch (err) {
			blockStack.length = 0;
			handleError(err, instance, 1);
			result = createVNode(Comment);
		}
		let root = result;
		if (fallthroughAttrs && inheritAttrs !== false) {
			const keys = Object.keys(fallthroughAttrs);
			const { shapeFlag } = root;
			if (keys.length) {
				if (shapeFlag & 7) {
					if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
					root = cloneVNode(root, fallthroughAttrs, false, true);
				}
			}
		}
		if (vnode.dirs) {
			root = cloneVNode(root, null, false, true);
			root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
		}
		if (vnode.transition) setTransitionHooks(root, vnode.transition);
		result = root;
		setCurrentRenderingInstance(prev);
		return result;
	}
	var getFunctionalFallthrough = (attrs) => {
		let res;
		for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
		return res;
	};
	var filterModelListeners = (attrs, props) => {
		const res = {};
		for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
		return res;
	};
	function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
		const { props: prevProps, children: prevChildren, component } = prevVNode;
		const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
		const emits = component.emitsOptions;
		if (nextVNode.dirs || nextVNode.transition) return true;
		if (optimized && patchFlag >= 0) {
			if (patchFlag & 1024) return true;
			if (patchFlag & 16) {
				if (!prevProps) return !!nextProps;
				return hasPropsChanged(prevProps, nextProps, emits);
			} else if (patchFlag & 8) {
				const dynamicProps = nextVNode.dynamicProps;
				for (let i = 0; i < dynamicProps.length; i++) {
					const key = dynamicProps[i];
					if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
				}
			}
		} else {
			if (prevChildren || nextChildren) {
				if (!nextChildren || !nextChildren.$stable) return true;
			}
			if (prevProps === nextProps) return false;
			if (!prevProps) return !!nextProps;
			if (!nextProps) return true;
			return hasPropsChanged(prevProps, nextProps, emits);
		}
		return false;
	}
	function hasPropsChanged(prevProps, nextProps, emitsOptions) {
		const nextKeys = Object.keys(nextProps);
		if (nextKeys.length !== Object.keys(prevProps).length) return true;
		for (let i = 0; i < nextKeys.length; i++) {
			const key = nextKeys[i];
			if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
		}
		return false;
	}
	function hasPropValueChanged(nextProps, prevProps, key) {
		const nextProp = nextProps[key];
		const prevProp = prevProps[key];
		if (key === "style" && isObject(nextProp) && isObject(prevProp)) return !looseEqual(nextProp, prevProp);
		return nextProp !== prevProp;
	}
	function updateHOCHostEl({ vnode, parent, suspense }, el) {
		while (parent) {
			const root = parent.subTree;
			if (root.suspense && root.suspense.activeBranch === vnode) {
				root.suspense.vnode.el = root.el = el;
				vnode = root;
			}
			if (root === vnode) {
				(vnode = parent.vnode).el = el;
				parent = parent.parent;
			} else break;
		}
		if (suspense && suspense.activeBranch === vnode) suspense.vnode.el = el;
	}
	var internalObjectProto = {};
	var createInternalObject = () => Object.create(internalObjectProto);
	var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
	function initProps(instance, rawProps, isStateful, isSSR = false) {
		const props = {};
		const attrs = createInternalObject();
		instance.propsDefaults = Object.create(null);
		setFullProps(instance, rawProps, props, attrs);
		for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
		if (isStateful) instance.props = isSSR ? props : shallowReactive(props);
		else if (!instance.type.props) instance.props = attrs;
		else instance.props = props;
		instance.attrs = attrs;
	}
	function updateProps(instance, rawProps, rawPrevProps, optimized) {
		const { props, attrs, vnode: { patchFlag } } = instance;
		const rawCurrentProps = toRaw(props);
		const [options] = instance.propsOptions;
		let hasAttrsChanged = false;
		if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
			if (patchFlag & 8) {
				const propsToUpdate = instance.vnode.dynamicProps;
				for (let i = 0; i < propsToUpdate.length; i++) {
					let key = propsToUpdate[i];
					if (isEmitListener(instance.emitsOptions, key)) continue;
					const value = rawProps[key];
					if (options) if (hasOwn(attrs, key)) {
						if (value !== attrs[key]) {
							attrs[key] = value;
							hasAttrsChanged = true;
						}
					} else {
						const camelizedKey = camelize(key);
						props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
					}
					else if (value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				}
			}
		} else {
			if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
			let kebabKey;
			for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) if (options) {
				if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
			} else delete props[key];
			if (attrs !== rawCurrentProps) {
				for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
					delete attrs[key];
					hasAttrsChanged = true;
				}
			}
		}
		if (hasAttrsChanged) trigger(instance.attrs, "set", "");
	}
	function setFullProps(instance, rawProps, props, attrs) {
		const [options, needCastKeys] = instance.propsOptions;
		let hasAttrsChanged = false;
		let rawCastValues;
		if (rawProps) for (let key in rawProps) {
			if (isReservedProp(key)) continue;
			const value = rawProps[key];
			let camelKey;
			if (options && hasOwn(options, camelKey = camelize(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
			else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
			else if (!isEmitListener(instance.emitsOptions, key)) {
				if (!(key in attrs) || value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
		if (needCastKeys) {
			const rawCurrentProps = toRaw(props);
			const castValues = rawCastValues || EMPTY_OBJ;
			for (let i = 0; i < needCastKeys.length; i++) {
				const key = needCastKeys[i];
				props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
			}
		}
		return hasAttrsChanged;
	}
	function resolvePropValue(options, props, key, value, instance, isAbsent) {
		const opt = options[key];
		if (opt != null) {
			const hasDefault = hasOwn(opt, "default");
			if (hasDefault && value === void 0) {
				const defaultValue = opt.default;
				if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
					const { propsDefaults } = instance;
					if (key in propsDefaults) value = propsDefaults[key];
					else {
						const reset = setCurrentInstance(instance);
						value = propsDefaults[key] = defaultValue.call(null, props);
						reset();
					}
				} else value = defaultValue;
				if (instance.ce) instance.ce._setProp(key, value);
			}
			if (opt[0]) {
				if (isAbsent && !hasDefault) value = false;
				else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
			}
		}
		return value;
	}
	var mixinPropsCache = new WeakMap();
	function normalizePropsOptions(comp, appContext, asMixin = false) {
		const cache = asMixin ? mixinPropsCache : appContext.propsCache;
		const cached = cache.get(comp);
		if (cached) return cached;
		const raw = comp.props;
		const normalized = {};
		const needCastKeys = [];
		let hasExtends = false;
		if (!isFunction(comp)) {
			const extendProps = (raw2) => {
				hasExtends = true;
				const [props, keys] = normalizePropsOptions(raw2, appContext, true);
				extend(normalized, props);
				if (keys) needCastKeys.push(...keys);
			};
			if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
			if (comp.extends) extendProps(comp.extends);
			if (comp.mixins) comp.mixins.forEach(extendProps);
		}
		if (!raw && !hasExtends) {
			if (isObject(comp)) cache.set(comp, EMPTY_ARR);
			return EMPTY_ARR;
		}
		if (isArray(raw)) for (let i = 0; i < raw.length; i++) {
			const normalizedKey = camelize(raw[i]);
			if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
		}
		else if (raw) for (const key in raw) {
			const normalizedKey = camelize(key);
			if (validatePropName(normalizedKey)) {
				const opt = raw[key];
				const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
				const propType = prop.type;
				let shouldCast = false;
				let shouldCastTrue = true;
				if (isArray(propType)) for (let index = 0; index < propType.length; ++index) {
					const type = propType[index];
					const typeName = isFunction(type) && type.name;
					if (typeName === "Boolean") {
						shouldCast = true;
						break;
					} else if (typeName === "String") shouldCastTrue = false;
				}
				else shouldCast = isFunction(propType) && propType.name === "Boolean";
				prop[0] = shouldCast;
				prop[1] = shouldCastTrue;
				if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
			}
		}
		const res = [normalized, needCastKeys];
		if (isObject(comp)) cache.set(comp, res);
		return res;
	}
	function validatePropName(key) {
		if (key[0] !== "$" && !isReservedProp(key)) return true;
		return false;
	}
	var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
	var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
	var normalizeSlot = (key, rawSlot, ctx) => {
		if (rawSlot._n) return rawSlot;
		const normalized = withCtx((...args) => {
			return normalizeSlotValue(rawSlot(...args));
		}, ctx);
		normalized._c = false;
		return normalized;
	};
	var normalizeObjectSlots = (rawSlots, slots, instance) => {
		const ctx = rawSlots._ctx;
		for (const key in rawSlots) {
			if (isInternalKey(key)) continue;
			const value = rawSlots[key];
			if (isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
			else if (value != null) {
				const normalized = normalizeSlotValue(value);
				slots[key] = () => normalized;
			}
		}
	};
	var normalizeVNodeSlots = (instance, children) => {
		const normalized = normalizeSlotValue(children);
		instance.slots.default = () => normalized;
	};
	var assignSlots = (slots, children, optimized) => {
		for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
	};
	var initSlots = (instance, children, optimized) => {
		const slots = instance.slots = createInternalObject();
		if (instance.vnode.shapeFlag & 32) {
			const type = children._;
			if (type) {
				assignSlots(slots, children, optimized);
				if (optimized) def(slots, "_", type, true);
			} else normalizeObjectSlots(children, slots);
		} else if (children) normalizeVNodeSlots(instance, children);
	};
	var updateSlots = (instance, children, optimized) => {
		const { vnode, slots } = instance;
		let needDeletionCheck = true;
		let deletionComparisonTarget = EMPTY_OBJ;
		if (vnode.shapeFlag & 32) {
			const type = children._;
			if (type) if (optimized && type === 1) needDeletionCheck = false;
			else assignSlots(slots, children, optimized);
			else {
				needDeletionCheck = !children.$stable;
				normalizeObjectSlots(children, slots);
			}
			deletionComparisonTarget = children;
		} else if (children) {
			normalizeVNodeSlots(instance, children);
			deletionComparisonTarget = { default: 1 };
		}
		if (needDeletionCheck) {
			for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
		}
	};
	var queuePostRenderEffect = queueEffectWithSuspense;
	function createRenderer(options) {
		return baseCreateRenderer(options);
	}
	function baseCreateRenderer(options, createHydrationFns) {
		const target = getGlobalThis();
		target.__VUE__ = true;
		const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
		const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
			if (n1 === n2) return;
			if (n1 && !isSameVNodeType(n1, n2)) {
				anchor = getNextHostNode(n1);
				unmount(n1, parentComponent, parentSuspense, true);
				n1 = null;
			}
			if (n2.patchFlag === -2) {
				optimized = false;
				n2.dynamicChildren = null;
			}
			const { type, ref, shapeFlag } = n2;
			switch (type) {
				case Text:
					processText(n1, n2, container, anchor);
					break;
				case Comment:
					processCommentNode(n1, n2, container, anchor);
					break;
				case Static:
					if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
					break;
				case Fragment:
					processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					break;
				default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
				else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			}
			if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
			else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
		};
		const processText = (n1, n2, container, anchor) => {
			if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
			else {
				const el = n2.el = n1.el;
				if (n2.children !== n1.children) hostSetText(el, n2.children);
			}
		};
		const processCommentNode = (n1, n2, container, anchor) => {
			if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
			else n2.el = n1.el;
		};
		const mountStaticNode = (n2, container, anchor, namespace) => {
			[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
		};
		const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
			let next;
			while (el && el !== anchor) {
				next = hostNextSibling(el);
				hostInsert(el, container, nextSibling);
				el = next;
			}
			hostInsert(anchor, container, nextSibling);
		};
		const removeStaticNode = ({ el, anchor }) => {
			let next;
			while (el && el !== anchor) {
				next = hostNextSibling(el);
				hostRemove(el);
				el = next;
			}
			hostRemove(anchor);
		};
		const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			if (n2.type === "svg") namespace = "svg";
			else if (n2.type === "math") namespace = "mathml";
			if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else {
				const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
				try {
					if (customElement) customElement._beginPatch();
					patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				} finally {
					if (customElement) customElement._endPatch();
				}
			}
		};
		const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			let el;
			let vnodeHook;
			const { props, shapeFlag, transition, dirs } = vnode;
			el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
			if (shapeFlag & 8) hostSetElementText(el, vnode.children);
			else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
			setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
			if (props) {
				for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
				if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
				if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
			}
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
			const needCallTransitionHooks = needTransition(parentSuspense, transition);
			if (needCallTransitionHooks) transition.beforeEnter(el);
			hostInsert(el, container, anchor);
			if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
				try {
					vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
					needCallTransitionHooks && transition.enter(el);
					dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
				} finally {}
			}, parentSuspense);
		};
		const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
			if (scopeId) hostSetScopeId(el, scopeId);
			if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
			if (parentComponent) {
				let subTree = parentComponent.subTree;
				if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
					const parentVNode = parentComponent.vnode;
					setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
				}
			}
		};
		const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
			for (let i = start; i < children.length; i++) patch(null, children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		};
		const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			const el = n2.el = n1.el;
			let { patchFlag, dynamicChildren, dirs } = n2;
			patchFlag |= n1.patchFlag & 16;
			const oldProps = n1.props || EMPTY_OBJ;
			const newProps = n2.props || EMPTY_OBJ;
			let vnodeHook;
			parentComponent && toggleRecurse(parentComponent, false);
			if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
			parentComponent && toggleRecurse(parentComponent, true);
			if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
			if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
			else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
			if (patchFlag > 0) {
				if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
				else {
					if (patchFlag & 2) {
						if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
					}
					if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
					if (patchFlag & 8) {
						const propsToUpdate = n2.dynamicProps;
						for (let i = 0; i < propsToUpdate.length; i++) {
							const key = propsToUpdate[i];
							const prev = oldProps[key];
							const next = newProps[key];
							if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
						}
					}
				}
				if (patchFlag & 1) {
					if (n1.children !== n2.children) hostSetElementText(el, n2.children);
				}
			} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
			if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
				vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
				dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
			}, parentSuspense);
		};
		const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
			for (let i = 0; i < newChildren.length; i++) {
				const oldVNode = oldChildren[i];
				const newVNode = newChildren[i];
				patch(oldVNode, newVNode, oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
			}
		};
		const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
			if (oldProps !== newProps) {
				if (oldProps !== EMPTY_OBJ) {
					for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
				}
				for (const key in newProps) {
					if (isReservedProp(key)) continue;
					const next = newProps[key];
					const prev = oldProps[key];
					if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
				}
				if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
			}
		};
		const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
			const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
			let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
			if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
			if (n1 == null) {
				hostInsert(fragmentStartAnchor, container, anchor);
				hostInsert(fragmentEndAnchor, container, anchor);
				mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
				if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
			} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		};
		const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			n2.slotScopeIds = slotScopeIds;
			if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
			else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
			else updateComponent(n1, n2, optimized);
		};
		const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
			const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
			if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
			setupComponent(instance, false, optimized);
			if (instance.asyncDep) {
				parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
				if (!initialVNode.el) {
					const placeholder = instance.subTree = createVNode(Comment);
					processCommentNode(null, placeholder, container, anchor);
					initialVNode.placeholder = placeholder.el;
				}
			} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
		};
		const updateComponent = (n1, n2, optimized) => {
			const instance = n2.component = n1.component;
			if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
				updateComponentPreRender(instance, n2, optimized);
				return;
			} else {
				instance.next = n2;
				instance.update();
			}
			else {
				n2.el = n1.el;
				instance.vnode = n2;
			}
		};
		const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
			const componentUpdateFn = () => {
				if (!instance.isMounted) {
					let vnodeHook;
					const { el, props } = initialVNode;
					const { bm, m, parent, root, type } = instance;
					const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
					toggleRecurse(instance, false);
					if (bm) invokeArrayFns(bm);
					if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
					toggleRecurse(instance, true);
					if (el && hydrateNode) {
						const hydrateSubTree = () => {
							instance.subTree = renderComponentRoot(instance);
							hydrateNode(el, instance.subTree, instance, parentSuspense, null);
						};
						if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
						else hydrateSubTree();
					} else {
						if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
						const subTree = instance.subTree = renderComponentRoot(instance);
						patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
						initialVNode.el = subTree.el;
					}
					if (m) queuePostRenderEffect(m, parentSuspense);
					if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
						const scopedInitialVNode = initialVNode;
						queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
					}
					if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
					instance.isMounted = true;
					initialVNode = container = anchor = null;
				} else {
					let { next, bu, u, parent, vnode } = instance;
					{
						const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
						if (nonHydratedAsyncRoot) {
							if (next) {
								next.el = vnode.el;
								updateComponentPreRender(instance, next, optimized);
							}
							nonHydratedAsyncRoot.asyncDep.then(() => {
								queuePostRenderEffect(() => {
									if (!instance.isUnmounted) update();
								}, parentSuspense);
							});
							return;
						}
					}
					let originNext = next;
					let vnodeHook;
					toggleRecurse(instance, false);
					if (next) {
						next.el = vnode.el;
						updateComponentPreRender(instance, next, optimized);
					} else next = vnode;
					if (bu) invokeArrayFns(bu);
					if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
					toggleRecurse(instance, true);
					const nextTree = renderComponentRoot(instance);
					const prevTree = instance.subTree;
					instance.subTree = nextTree;
					patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
					next.el = nextTree.el;
					if (originNext === null) updateHOCHostEl(instance, nextTree.el);
					if (u) queuePostRenderEffect(u, parentSuspense);
					if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
				}
			};
			instance.scope.on();
			const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
			instance.scope.off();
			const update = instance.update = effect.run.bind(effect);
			const job = instance.job = effect.runIfDirty.bind(effect);
			job.i = instance;
			job.id = instance.uid;
			effect.scheduler = () => queueJob(job);
			toggleRecurse(instance, true);
			update();
		};
		const updateComponentPreRender = (instance, nextVNode, optimized) => {
			nextVNode.component = instance;
			const prevProps = instance.vnode.props;
			instance.vnode = nextVNode;
			instance.next = null;
			updateProps(instance, nextVNode.props, prevProps, optimized);
			updateSlots(instance, nextVNode.children, optimized);
			pauseTracking();
			flushPreFlushCbs(instance);
			resetTracking();
		};
		const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
			const c1 = n1 && n1.children;
			const prevShapeFlag = n1 ? n1.shapeFlag : 0;
			const c2 = n2.children;
			const { patchFlag, shapeFlag } = n2;
			if (patchFlag > 0) {
				if (patchFlag & 128) {
					patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					return;
				} else if (patchFlag & 256) {
					patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					return;
				}
			}
			if (shapeFlag & 8) {
				if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
				if (c2 !== c1) hostSetElementText(container, c2);
			} else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else unmountChildren(c1, parentComponent, parentSuspense, true);
			else {
				if (prevShapeFlag & 8) hostSetElementText(container, "");
				if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			}
		};
		const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			c1 = c1 || EMPTY_ARR;
			c2 = c2 || EMPTY_ARR;
			const oldLength = c1.length;
			const newLength = c2.length;
			const commonLength = Math.min(oldLength, newLength);
			let i;
			for (i = 0; i < commonLength; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			}
			if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
			else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
		};
		const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
			let i = 0;
			const l2 = c2.length;
			let e1 = c1.length - 1;
			let e2 = l2 - 1;
			while (i <= e1 && i <= e2) {
				const n1 = c1[i];
				const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else break;
				i++;
			}
			while (i <= e1 && i <= e2) {
				const n1 = c1[e1];
				const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
				if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else break;
				e1--;
				e2--;
			}
			if (i > e1) {
				if (i <= e2) {
					const nextPos = e2 + 1;
					const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
					while (i <= e2) {
						patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						i++;
					}
				}
			} else if (i > e2) while (i <= e1) {
				unmount(c1[i], parentComponent, parentSuspense, true);
				i++;
			}
			else {
				const s1 = i;
				const s2 = i;
				const keyToNewIndexMap = new Map();
				for (i = s2; i <= e2; i++) {
					const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
					if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
				}
				let j;
				let patched = 0;
				const toBePatched = e2 - s2 + 1;
				let moved = false;
				let maxNewIndexSoFar = 0;
				const newIndexToOldIndexMap = new Array(toBePatched);
				for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
				for (i = s1; i <= e1; i++) {
					const prevChild = c1[i];
					if (patched >= toBePatched) {
						unmount(prevChild, parentComponent, parentSuspense, true);
						continue;
					}
					let newIndex;
					if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
					else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
						newIndex = j;
						break;
					}
					if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
					else {
						newIndexToOldIndexMap[newIndex - s2] = i + 1;
						if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
						else moved = true;
						patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
						patched++;
					}
				}
				const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
				j = increasingNewIndexSequence.length - 1;
				for (i = toBePatched - 1; i >= 0; i--) {
					const nextIndex = s2 + i;
					const nextChild = c2[nextIndex];
					const anchorVNode = c2[nextIndex + 1];
					const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
					if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
					else j--;
				}
			}
		};
		const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
			const { el, type, transition, children, shapeFlag } = vnode;
			if (shapeFlag & 6) {
				move(vnode.component.subTree, container, anchor, moveType);
				return;
			}
			if (shapeFlag & 128) {
				vnode.suspense.move(container, anchor, moveType);
				return;
			}
			if (shapeFlag & 64) {
				type.move(vnode, container, anchor, internals);
				return;
			}
			if (type === Fragment) {
				hostInsert(el, container, anchor);
				for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
				hostInsert(vnode.anchor, container, anchor);
				return;
			}
			if (type === Static) {
				moveStaticNode(vnode, container, anchor);
				return;
			}
			if (moveType !== 2 && shapeFlag & 1 && transition) if (moveType === 0) if (transition.persisted && !el[leaveCbKey]) hostInsert(el, container, anchor);
			else {
				transition.beforeEnter(el);
				hostInsert(el, container, anchor);
				queuePostRenderEffect(() => transition.enter(el), parentSuspense);
			}
			else {
				const { leave, delayLeave, afterLeave } = transition;
				const remove2 = () => {
					if (vnode.ctx.isUnmounted) hostRemove(el);
					else hostInsert(el, container, anchor);
				};
				const performLeave = () => {
					const wasLeaving = el._isLeaving || !!el[leaveCbKey];
					if (el._isLeaving) el[leaveCbKey](true);
					if (transition.persisted && !wasLeaving) remove2();
					else leave(el, () => {
						remove2();
						afterLeave && afterLeave();
					});
				};
				if (delayLeave) delayLeave(el, remove2, performLeave);
				else performLeave();
			}
			else hostInsert(el, container, anchor);
		};
		const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
			const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex, memo } = vnode;
			if (patchFlag === -2) optimized = false;
			if (ref != null) {
				pauseTracking();
				setRef(ref, null, parentSuspense, vnode, true);
				resetTracking();
			}
			if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
			if (shapeFlag & 256) {
				parentComponent.ctx.deactivate(vnode);
				return;
			}
			const shouldInvokeDirs = shapeFlag & 1 && dirs;
			const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
			let vnodeHook;
			if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
			if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
			else {
				if (shapeFlag & 128) {
					vnode.suspense.unmount(parentSuspense, doRemove);
					return;
				}
				if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
				if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
				else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
				else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
				if (doRemove) remove(vnode);
			}
			const shouldInvalidateMemo = memo != null && cacheIndex == null;
			if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) queuePostRenderEffect(() => {
				vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
				shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
				if (shouldInvalidateMemo) vnode.el = null;
			}, parentSuspense);
		};
		const remove = (vnode) => {
			const { type, el, anchor, transition } = vnode;
			if (type === Fragment) {
				removeFragment(el, anchor);
				return;
			}
			if (type === Static) {
				removeStaticNode(vnode);
				return;
			}
			const performRemove = () => {
				hostRemove(el);
				if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
			};
			if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
				const { leave, delayLeave } = transition;
				const performLeave = () => leave(el, performRemove);
				if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
				else performLeave();
			} else performRemove();
		};
		const removeFragment = (cur, end) => {
			let next;
			while (cur !== end) {
				next = hostNextSibling(cur);
				hostRemove(cur);
				cur = next;
			}
			hostRemove(end);
		};
		const unmountComponent = (instance, parentSuspense, doRemove) => {
			const { bum, scope, job, subTree, um, m, a } = instance;
			invalidateMount(m);
			invalidateMount(a);
			if (bum) invokeArrayFns(bum);
			scope.stop();
			if (job) {
				job.flags |= 8;
				unmount(subTree, instance, parentSuspense, doRemove);
			}
			if (um) queuePostRenderEffect(um, parentSuspense);
			queuePostRenderEffect(() => {
				instance.isUnmounted = true;
			}, parentSuspense);
		};
		const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
			for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
		};
		const getNextHostNode = (vnode) => {
			if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
			if (vnode.shapeFlag & 128) return vnode.suspense.next();
			const el = hostNextSibling(vnode.anchor || vnode.el);
			const teleportEnd = el && el[TeleportEndKey];
			return teleportEnd ? hostNextSibling(teleportEnd) : el;
		};
		let isFlushing = false;
		const render = (vnode, container, namespace) => {
			let instance;
			if (vnode == null) {
				if (container._vnode) {
					unmount(container._vnode, null, null, true);
					instance = container._vnode.component;
				}
			} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
			container._vnode = vnode;
			if (!isFlushing) {
				isFlushing = true;
				flushPreFlushCbs(instance);
				flushPostFlushCbs();
				isFlushing = false;
			}
		};
		const internals = {
			p: patch,
			um: unmount,
			m: move,
			r: remove,
			mt: mountComponent,
			mc: mountChildren,
			pc: patchChildren,
			pbc: patchBlockChildren,
			n: getNextHostNode,
			o: options
		};
		let hydrate;
		let hydrateNode;
		if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
		return {
			render,
			hydrate,
			createApp: createAppAPI(render, hydrate)
		};
	}
	function resolveChildrenNamespace({ type, props }, currentNamespace) {
		return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
	}
	function toggleRecurse({ effect, job }, allowed) {
		if (allowed) {
			effect.flags |= 32;
			job.flags |= 4;
		} else {
			effect.flags &= -33;
			job.flags &= -5;
		}
	}
	function needTransition(parentSuspense, transition) {
		return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
	}
	function traverseStaticChildren(n1, n2, shallow = false) {
		const ch1 = n1.children;
		const ch2 = n2.children;
		if (isArray(ch1) && isArray(ch2)) for (let i = 0; i < ch1.length; i++) {
			const c1 = ch1[i];
			let c2 = ch2[i];
			if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
				if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
					c2 = ch2[i] = cloneIfMounted(ch2[i]);
					c2.el = c1.el;
				}
				if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
			}
			if (c2.type === Text) {
				if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
				c2.el = c1.el;
			}
			if (c2.type === Comment && !c2.el) c2.el = c1.el;
		}
	}
	function getSequence(arr) {
		const p = arr.slice();
		const result = [0];
		let i, j, u, v, c;
		const len = arr.length;
		for (i = 0; i < len; i++) {
			const arrI = arr[i];
			if (arrI !== 0) {
				j = result[result.length - 1];
				if (arr[j] < arrI) {
					p[i] = j;
					result.push(i);
					continue;
				}
				u = 0;
				v = result.length - 1;
				while (u < v) {
					c = u + v >> 1;
					if (arr[result[c]] < arrI) u = c + 1;
					else v = c;
				}
				if (arrI < arr[result[u]]) {
					if (u > 0) p[i] = result[u - 1];
					result[u] = i;
				}
			}
		}
		u = result.length;
		v = result[u - 1];
		while (u-- > 0) {
			result[u] = v;
			v = p[v];
		}
		return result;
	}
	function locateNonHydratedAsyncRoot(instance) {
		const subComponent = instance.subTree.component;
		if (subComponent) if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
		else return locateNonHydratedAsyncRoot(subComponent);
	}
	function invalidateMount(hooks) {
		if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
	}
	function resolveAsyncComponentPlaceholder(anchorVnode) {
		if (anchorVnode.placeholder) return anchorVnode.placeholder;
		const instance = anchorVnode.component;
		if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
		return null;
	}
	var isSuspense = (type) => type.__isSuspense;
	function queueEffectWithSuspense(fn, suspense) {
		if (suspense && suspense.pendingBranch) if (isArray(fn)) suspense.effects.push(...fn);
		else suspense.effects.push(fn);
		else queuePostFlushCb(fn);
	}
	var Fragment = Symbol.for("v-fgt");
	var Text = Symbol.for("v-txt");
	var Comment = Symbol.for("v-cmt");
	var Static = Symbol.for("v-stc");
	var blockStack = [];
	var currentBlock = null;
	function openBlock(disableTracking = false) {
		blockStack.push(currentBlock = disableTracking ? null : []);
	}
	function closeBlock() {
		blockStack.pop();
		currentBlock = blockStack[blockStack.length - 1] || null;
	}
	var isBlockTreeEnabled = 1;
	function setBlockTracking(value, inVOnce = false) {
		isBlockTreeEnabled += value;
		if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
	}
	function setupBlock(vnode) {
		vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
		closeBlock();
		if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
		return vnode;
	}
	function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
		return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
	}
	function createBlock(type, props, children, patchFlag, dynamicProps) {
		return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
	}
	function isVNode(value) {
		return value ? value.__v_isVNode === true : false;
	}
	function isSameVNodeType(n1, n2) {
		return n1.type === n2.type && n1.key === n2.key;
	}
	var normalizeKey = ({ key }) => key != null ? key : null;
	var normalizeRef = ({ ref, ref_key, ref_for }) => {
		if (typeof ref === "number") ref = "" + ref;
		return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? {
			i: currentRenderingInstance,
			r: ref,
			k: ref_key,
			f: !!ref_for
		} : ref : null;
	};
	function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
		const vnode = {
			__v_isVNode: true,
			__v_skip: true,
			type,
			props,
			key: props && normalizeKey(props),
			ref: props && normalizeRef(props),
			scopeId: currentScopeId,
			slotScopeIds: null,
			children,
			component: null,
			suspense: null,
			ssContent: null,
			ssFallback: null,
			dirs: null,
			transition: null,
			el: null,
			anchor: null,
			target: null,
			targetStart: null,
			targetAnchor: null,
			staticCount: 0,
			shapeFlag,
			patchFlag,
			dynamicProps,
			dynamicChildren: null,
			appContext: null,
			ctx: currentRenderingInstance
		};
		if (needFullChildrenNormalization) {
			normalizeChildren(vnode, children);
			if (shapeFlag & 128) type.normalize(vnode);
		} else if (children) vnode.shapeFlag |= isString(children) ? 8 : 16;
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
		return vnode;
	}
	var createVNode = _createVNode;
	function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
		if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
		if (isVNode(type)) {
			const cloned = cloneVNode(type, props, true);
			if (children) normalizeChildren(cloned, children);
			if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
			else currentBlock.push(cloned);
			cloned.patchFlag = -2;
			return cloned;
		}
		if (isClassComponent(type)) type = type.__vccOpts;
		if (props) {
			props = guardReactiveProps(props);
			let { class: klass, style } = props;
			if (klass && !isString(klass)) props.class = normalizeClass(klass);
			if (isObject(style)) {
				if (isProxy(style) && !isArray(style)) style = extend({}, style);
				props.style = normalizeStyle(style);
			}
		}
		const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
		return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
	}
	function guardReactiveProps(props) {
		if (!props) return null;
		return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
	}
	function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
		const { props, ref, patchFlag, children, transition } = vnode;
		const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
		const cloned = {
			__v_isVNode: true,
			__v_skip: true,
			type: vnode.type,
			props: mergedProps,
			key: mergedProps && normalizeKey(mergedProps),
			ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
			scopeId: vnode.scopeId,
			slotScopeIds: vnode.slotScopeIds,
			children,
			target: vnode.target,
			targetStart: vnode.targetStart,
			targetAnchor: vnode.targetAnchor,
			staticCount: vnode.staticCount,
			shapeFlag: vnode.shapeFlag,
			patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
			dynamicProps: vnode.dynamicProps,
			dynamicChildren: vnode.dynamicChildren,
			appContext: vnode.appContext,
			dirs: vnode.dirs,
			transition,
			component: vnode.component,
			suspense: vnode.suspense,
			ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
			ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
			placeholder: vnode.placeholder,
			el: vnode.el,
			anchor: vnode.anchor,
			ctx: vnode.ctx,
			ce: vnode.ce
		};
		if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
		return cloned;
	}
	function createTextVNode(text = " ", flag = 0) {
		return createVNode(Text, null, text, flag);
	}
	function createCommentVNode(text = "", asBlock = false) {
		return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
	}
	function normalizeVNode(child) {
		if (child == null || typeof child === "boolean") return createVNode(Comment);
		else if (isArray(child)) return createVNode(Fragment, null, child.slice());
		else if (isVNode(child)) return cloneIfMounted(child);
		else return createVNode(Text, null, String(child));
	}
	function cloneIfMounted(child) {
		return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
	}
	function normalizeChildren(vnode, children) {
		let type = 0;
		const { shapeFlag } = vnode;
		if (children == null) children = null;
		else if (isArray(children)) type = 16;
		else if (typeof children === "object") if (shapeFlag & 65) {
			const slot = children.default;
			if (slot) {
				slot._c && (slot._d = false);
				normalizeChildren(vnode, slot());
				slot._c && (slot._d = true);
			}
			return;
		} else {
			type = 32;
			const slotFlag = children._;
			if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
			else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1;
			else {
				children._ = 2;
				vnode.patchFlag |= 1024;
			}
		}
		else if (isFunction(children)) {
			children = {
				default: children,
				_ctx: currentRenderingInstance
			};
			type = 32;
		} else {
			children = String(children);
			if (shapeFlag & 64) {
				type = 16;
				children = [createTextVNode(children)];
			} else type = 8;
		}
		vnode.children = children;
		vnode.shapeFlag |= type;
	}
	function mergeProps(...args) {
		const ret = {};
		for (let i = 0; i < args.length; i++) {
			const toMerge = args[i];
			for (const key in toMerge) if (key === "class") {
				if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
			} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
			else if (isOn(key)) {
				const existing = ret[key];
				const incoming = toMerge[key];
				if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
				else if (incoming == null && existing == null && !isModelListener(key)) ret[key] = incoming;
			} else if (key !== "") ret[key] = toMerge[key];
		}
		return ret;
	}
	function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
		callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
	}
	var emptyAppContext = createAppContext();
	var uid = 0;
	function createComponentInstance(vnode, parent, suspense) {
		const type = vnode.type;
		const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
		const instance = {
			uid: uid++,
			vnode,
			type,
			parent,
			appContext,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			job: null,
			scope: new EffectScope(true),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: parent ? parent.provides : Object.create(appContext.provides),
			ids: parent ? parent.ids : [
				"",
				0,
				0
			],
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: normalizePropsOptions(type, appContext),
			emitsOptions: normalizeEmitsOptions(type, appContext),
			emit: null,
			emitted: null,
			propsDefaults: EMPTY_OBJ,
			inheritAttrs: type.inheritAttrs,
			ctx: EMPTY_OBJ,
			data: EMPTY_OBJ,
			props: EMPTY_OBJ,
			attrs: EMPTY_OBJ,
			slots: EMPTY_OBJ,
			refs: EMPTY_OBJ,
			setupState: EMPTY_OBJ,
			setupContext: null,
			suspense,
			suspenseId: suspense ? suspense.pendingId : 0,
			asyncDep: null,
			asyncResolved: false,
			isMounted: false,
			isUnmounted: false,
			isDeactivated: false,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null
		};
		instance.ctx = { _: instance };
		instance.root = parent ? parent.root : instance;
		instance.emit = emit.bind(null, instance);
		if (vnode.ce) vnode.ce(instance);
		return instance;
	}
	var currentInstance = null;
	var getCurrentInstance = () => currentInstance || currentRenderingInstance;
	var internalSetCurrentInstance;
	var setInSSRSetupState;
	{
		const g = getGlobalThis();
		const registerGlobalSetter = (key, setter) => {
			let setters;
			if (!(setters = g[key])) setters = g[key] = [];
			setters.push(setter);
			return (v) => {
				if (setters.length > 1) setters.forEach((set) => set(v));
				else setters[0](v);
			};
		};
		internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
		setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
	}
	var setCurrentInstance = (instance) => {
		const prev = currentInstance;
		internalSetCurrentInstance(instance);
		instance.scope.on();
		return () => {
			instance.scope.off();
			internalSetCurrentInstance(prev);
		};
	};
	var unsetCurrentInstance = () => {
		currentInstance && currentInstance.scope.off();
		internalSetCurrentInstance(null);
	};
	function isStatefulComponent(instance) {
		return instance.vnode.shapeFlag & 4;
	}
	var isInSSRComponentSetup = false;
	function setupComponent(instance, isSSR = false, optimized = false) {
		isSSR && setInSSRSetupState(isSSR);
		const { props, children } = instance.vnode;
		const isStateful = isStatefulComponent(instance);
		initProps(instance, props, isStateful, isSSR);
		initSlots(instance, children, optimized || isSSR);
		const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
		isSSR && setInSSRSetupState(false);
		return setupResult;
	}
	function setupStatefulComponent(instance, isSSR) {
		const Component = instance.type;
		instance.accessCache = Object.create(null);
		instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
		const { setup } = Component;
		if (setup) {
			pauseTracking();
			const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
			const reset = setCurrentInstance(instance);
			const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
			const isAsyncSetup = isPromise(setupResult);
			resetTracking();
			reset();
			if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
			if (isAsyncSetup) {
				setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
				if (isSSR) return setupResult.then((resolvedResult) => {
					handleSetupResult(instance, resolvedResult, isSSR);
				}).catch((e) => {
					handleError(e, instance, 0);
				});
				else instance.asyncDep = setupResult;
			} else handleSetupResult(instance, setupResult, isSSR);
		} else finishComponentSetup(instance, isSSR);
	}
	function handleSetupResult(instance, setupResult, isSSR) {
		if (isFunction(setupResult)) if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
		else instance.render = setupResult;
		else if (isObject(setupResult)) instance.setupState = proxyRefs(setupResult);
		finishComponentSetup(instance, isSSR);
	}
	var compile;
	var installWithProxy;
	function finishComponentSetup(instance, isSSR, skipOptions) {
		const Component = instance.type;
		if (!instance.render) {
			if (!isSSR && compile && !Component.render) {
				const template = Component.template || resolveMergedOptions(instance).template;
				if (template) {
					const { isCustomElement, compilerOptions } = instance.appContext.config;
					const { delimiters, compilerOptions: componentCompilerOptions } = Component;
					Component.render = compile(template, extend(extend({
						isCustomElement,
						delimiters
					}, compilerOptions), componentCompilerOptions));
				}
			}
			instance.render = Component.render || NOOP;
			if (installWithProxy) installWithProxy(instance);
		}
		{
			const reset = setCurrentInstance(instance);
			pauseTracking();
			try {
				applyOptions(instance);
			} finally {
				resetTracking();
				reset();
			}
		}
	}
	var attrsProxyHandlers = { get(target, key) {
		track(target, "get", "");
		return target[key];
	} };
	function createSetupContext(instance) {
		const expose = (exposed) => {
			instance.exposed = exposed || {};
		};
		return {
			attrs: new Proxy(instance.attrs, attrsProxyHandlers),
			slots: instance.slots,
			emit: instance.emit,
			expose
		};
	}
	function getComponentPublicInstance(instance) {
		if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
			get(target, key) {
				if (key in target) return target[key];
				else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
			},
			has(target, key) {
				return key in target || key in publicPropertiesMap;
			}
		}));
		else return instance.proxy;
	}
	function isClassComponent(value) {
		return isFunction(value) && "__vccOpts" in value;
	}
	var computed = (getterOrOptions, debugOptions) => {
		return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
	};
	var version = "3.5.38";
	var policy = void 0;
	var tt = typeof window !== "undefined" && window.trustedTypes;
	if (tt) try {
		policy = tt.createPolicy("vue", { createHTML: (val) => val });
	} catch (e) {}
	var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
	var svgNS = "http://www.w3.org/2000/svg";
	var mathmlNS = "http://www.w3.org/1998/Math/MathML";
	var doc = typeof document !== "undefined" ? document : null;
	var templateContainer = doc && doc.createElement("template");
	var nodeOps = {
		insert: (child, parent, anchor) => {
			parent.insertBefore(child, anchor || null);
		},
		remove: (child) => {
			const parent = child.parentNode;
			if (parent) parent.removeChild(child);
		},
		createElement: (tag, namespace, is, props) => {
			const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
			if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
			return el;
		},
		createText: (text) => doc.createTextNode(text),
		createComment: (text) => doc.createComment(text),
		setText: (node, text) => {
			node.nodeValue = text;
		},
		setElementText: (el, text) => {
			el.textContent = text;
		},
		parentNode: (node) => node.parentNode,
		nextSibling: (node) => node.nextSibling,
		querySelector: (selector) => doc.querySelector(selector),
		setScopeId(el, id) {
			el.setAttribute(id, "");
		},
		insertStaticContent(content, parent, anchor, namespace, start, end) {
			const before = anchor ? anchor.previousSibling : parent.lastChild;
			if (start && (start === end || start.nextSibling)) while (true) {
				parent.insertBefore(start.cloneNode(true), anchor);
				if (start === end || !(start = start.nextSibling)) break;
			}
			else {
				templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
				const template = templateContainer.content;
				if (namespace === "svg" || namespace === "mathml") {
					const wrapper = template.firstChild;
					while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
					template.removeChild(wrapper);
				}
				parent.insertBefore(template, anchor);
			}
			return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
		}
	};
	var vtcKey = Symbol("_vtc");
	function patchClass(el, value, isSVG) {
		const transitionClasses = el[vtcKey];
		if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
		if (value == null) el.removeAttribute("class");
		else if (isSVG) el.setAttribute("class", value);
		else el.className = value;
	}
	var vShowOriginalDisplay = Symbol("_vod");
	var vShowHidden = Symbol("_vsh");
	var CSS_VAR_TEXT = Symbol("");
	var displayRE = /(?:^|;)\s*display\s*:/;
	function patchStyle(el, prev, next) {
		const style = el.style;
		const isCssString = isString(next);
		let hasControlledDisplay = false;
		if (next && !isCssString) {
			if (prev) if (!isString(prev)) {
				for (const key in prev) if (next[key] == null) setStyle(style, key, "");
			} else for (const prevStyle of prev.split(";")) {
				const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
				if (next[key] == null) setStyle(style, key, "");
			}
			for (const key in next) {
				if (key === "display") hasControlledDisplay = true;
				const value = next[key];
				if (value != null) {
					if (!shouldPreserveTextareaResizeStyle(el, key, !isString(prev) && prev ? prev[key] : void 0, value)) setStyle(style, key, value);
				} else setStyle(style, key, "");
			}
		} else if (isCssString) {
			if (prev !== next) {
				const cssVarText = style[CSS_VAR_TEXT];
				if (cssVarText) next += ";" + cssVarText;
				style.cssText = next;
				hasControlledDisplay = displayRE.test(next);
			}
		} else if (prev) el.removeAttribute("style");
		if (vShowOriginalDisplay in el) {
			el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
			if (el[vShowHidden]) style.display = "none";
		}
	}
	var importantRE = /\s*!important$/;
	function setStyle(style, name, val) {
		if (isArray(val)) val.forEach((v) => setStyle(style, name, v));
		else {
			if (val == null) val = "";
			if (name.startsWith("--")) style.setProperty(name, val);
			else {
				const prefixed = autoPrefix(style, name);
				if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
				else style[prefixed] = val;
			}
		}
	}
	var prefixes = [
		"Webkit",
		"Moz",
		"ms"
	];
	var prefixCache = {};
	function autoPrefix(style, rawName) {
		const cached = prefixCache[rawName];
		if (cached) return cached;
		let name = camelize(rawName);
		if (name !== "filter" && name in style) return prefixCache[rawName] = name;
		name = capitalize(name);
		for (let i = 0; i < prefixes.length; i++) {
			const prefixed = prefixes[i] + name;
			if (prefixed in style) return prefixCache[rawName] = prefixed;
		}
		return rawName;
	}
	function shouldPreserveTextareaResizeStyle(el, key, prev, next) {
		return el.tagName === "TEXTAREA" && (key === "width" || key === "height") && isString(next) && prev === next;
	}
	var xlinkNS = "http://www.w3.org/1999/xlink";
	function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
		if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
		else el.setAttributeNS(xlinkNS, key, value);
		else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
		else el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
	}
	function patchDOMProp(el, key, value, parentComponent, attrName) {
		if (key === "innerHTML" || key === "textContent") {
			if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
			return;
		}
		const tag = el.tagName;
		if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
			const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
			const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
			if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
			if (value == null) el.removeAttribute(key);
			el._value = value;
			return;
		}
		let needRemove = false;
		if (value === "" || value == null) {
			const type = typeof el[key];
			if (type === "boolean") value = includeBooleanAttr(value);
			else if (value == null && type === "string") {
				value = "";
				needRemove = true;
			} else if (type === "number") {
				value = 0;
				needRemove = true;
			}
		}
		try {
			el[key] = value;
		} catch (e) {}
		needRemove && el.removeAttribute(attrName || key);
	}
	function addEventListener(el, event, handler, options) {
		el.addEventListener(event, handler, options);
	}
	function removeEventListener(el, event, handler, options) {
		el.removeEventListener(event, handler, options);
	}
	var veiKey = Symbol("_vei");
	function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
		const invokers = el[veiKey] || (el[veiKey] = {});
		const existingInvoker = invokers[rawName];
		if (nextValue && existingInvoker) existingInvoker.value = nextValue;
		else {
			const [name, options] = parseName(rawName);
			if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(nextValue, instance), options);
			else if (existingInvoker) {
				removeEventListener(el, name, existingInvoker, options);
				invokers[rawName] = void 0;
			}
		}
	}
	var optionsModifierRE = /(?:Once|Passive|Capture)$/;
	function parseName(name) {
		let options;
		if (optionsModifierRE.test(name)) {
			options = {};
			let m;
			while (m = name.match(optionsModifierRE)) {
				name = name.slice(0, name.length - m[0].length);
				options[m[0].toLowerCase()] = true;
			}
		}
		return [name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2)), options];
	}
	var cachedNow = 0;
	var p = Promise.resolve();
	var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
	function createInvoker(initialValue, instance) {
		const invoker = (e) => {
			if (!e._vts) e._vts = Date.now();
			else if (e._vts <= invoker.attached) return;
			const value = invoker.value;
			if (isArray(value)) {
				const originalStop = e.stopImmediatePropagation;
				e.stopImmediatePropagation = () => {
					originalStop.call(e);
					e._stopped = true;
				};
				const handlers = value.slice();
				const args = [e];
				for (let i = 0; i < handlers.length; i++) {
					if (e._stopped) break;
					const handler = handlers[i];
					if (handler) callWithAsyncErrorHandling(handler, instance, 5, args);
				}
			} else callWithAsyncErrorHandling(value, instance, 5, [e]);
		};
		invoker.value = initialValue;
		invoker.attached = getNow();
		return invoker;
	}
	var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
	var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
		const isSVG = namespace === "svg";
		if (key === "class") patchClass(el, nextValue, isSVG);
		else if (key === "style") patchStyle(el, prevValue, nextValue);
		else if (isOn(key)) {
			if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
		} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
			patchDOMProp(el, key, nextValue);
			if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
		} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))) patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
		else {
			if (key === "true-value") el._trueValue = nextValue;
			else if (key === "false-value") el._falseValue = nextValue;
			patchAttr(el, key, nextValue, isSVG);
		}
	};
	function shouldSetAsProp(el, key, value, isSVG) {
		if (isSVG) {
			if (key === "innerHTML" || key === "textContent") return true;
			if (key in el && isNativeOn(key) && isFunction(value)) return true;
			return false;
		}
		if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
		if (key === "sandbox" && el.tagName === "IFRAME") return false;
		if (key === "form") return false;
		if (key === "list" && el.tagName === "INPUT") return false;
		if (key === "type" && el.tagName === "TEXTAREA") return false;
		if (key === "width" || key === "height") {
			const tag = el.tagName;
			if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
		}
		if (isNativeOn(key) && isString(value)) return false;
		return key in el;
	}
	function shouldSetAsPropForVueCE(el, key) {
		const props = el._def.props;
		if (!props) return false;
		const camelKey = camelize(key);
		return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
	}
	var systemModifiers = [
		"ctrl",
		"shift",
		"alt",
		"meta"
	];
	var modifierGuards = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => "button" in e && e.button !== 0,
		middle: (e) => "button" in e && e.button !== 1,
		right: (e) => "button" in e && e.button !== 2,
		exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
	};
	var withModifiers = (fn, modifiers) => {
		if (!fn) return fn;
		const cache = fn._withMods || (fn._withMods = {});
		const cacheKey = modifiers.join(".");
		return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
			for (let i = 0; i < modifiers.length; i++) {
				const guard = modifierGuards[modifiers[i]];
				if (guard && guard(event, modifiers)) return;
			}
			return fn(event, ...args);
		}));
	};
	var rendererOptions = extend({ patchProp }, nodeOps);
	var renderer;
	function ensureRenderer() {
		return renderer || (renderer = createRenderer(rendererOptions));
	}
	var createApp = ((...args) => {
		const app = ensureRenderer().createApp(...args);
		const { mount } = app;
		app.mount = (containerOrSelector) => {
			const container = normalizeContainer(containerOrSelector);
			if (!container) return;
			const component = app._component;
			if (!isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
			if (container.nodeType === 1) container.textContent = "";
			const proxy = mount(container, false, resolveRootNamespace(container));
			if (container instanceof Element) {
				container.removeAttribute("v-cloak");
				container.setAttribute("data-v-app", "");
			}
			return proxy;
		};
		return app;
	});
	function resolveRootNamespace(container) {
		if (container instanceof SVGElement) return "svg";
		if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
	}
	function normalizeContainer(container) {
		if (isString(container)) return document.querySelector(container);
		return container;
	}
	var _hoisted_1 = { class: "box" };
	var _hoisted_2 = { class: "version" };
	var _hoisted_3 = { class: "old" };
	var _hoisted_4 = { class: "new" };
	var update_vue_vue_type_script_setup_true_lang_default = defineComponent({
		__name: "update",
		setup(__props) {
			const visible = ref(false);
			const oldVersion = ref("");
			const newVersion = ref("");
			function handler(e) {
				console.log("pene");
				oldVersion.value = e.detail.oldVersion;
				newVersion.value = e.detail.newVersion;
				visible.value = true;
			}
			function dismiss() {
				visible.value = false;
			}
			onMounted(() => {
				window.addEventListener("lyeh:version-mismatch", handler);
			});
			onUnmounted(() => {
				window.removeEventListener("lyeh:version-mismatch", handler);
			});
			return (_ctx, _cache) => {
				return visible.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "overlay",
					onClick: withModifiers(dismiss, ["self"])
				}, [createBaseVNode("div", _hoisted_1, [
					createBaseVNode("button", {
						class: "close",
						onClick: dismiss
					}, "×"),
					_cache[1] || (_cache[1] = createBaseVNode("h2", { class: "title" }, "Lyeh — Updated", -1)),
					createBaseVNode("p", _hoisted_2, [
						createBaseVNode("span", _hoisted_3, toDisplayString(oldVersion.value), 1),
						_cache[0] || (_cache[0] = createBaseVNode("span", { class: "arrow" }, "→", -1)),
						createBaseVNode("span", _hoisted_4, toDisplayString(newVersion.value), 1)
					])
				])])) : createCommentVNode("", true);
			};
		}
	});
	var _plugin_vue_export_helper_default = (sfc, props) => {
		const target = sfc.__vccOpts || sfc;
		for (const [key, val] of props) target[key] = val;
		return target;
	};
	var update_default = _plugin_vue_export_helper_default(update_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1fcf85f7"]]);
	var app_default = defineComponent({
		__name: "app",
		setup(__props) {
			return (_ctx, _cache) => {
				return openBlock(), createBlock(update_default);
			};
		}
	});
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_info = (() => typeof GM_info != "undefined" ? GM_info : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var privilegedFetch = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
	var banners = new Map();
	var covers = new Map();
	var coverAccent = new Map();
	var progressBarRegex = /linear-gradient\(to right,\s*[^)]+\)\s*([\d.]+%)/;
	var COOKIE_NAME = "_genius_release_opt_in_add_song";
	var MAX_AGE = 3600 * 24 * 60;
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
			if (url.pathname.startsWith("/album/")) {
				if (url.searchParams.get("react") != "1") {
					url.searchParams.set("react", "1");
					window.location.replace(url.toString());
				}
				this.mouseEvents();
			}
			if (url.pathname.startsWith("/new")) {
				console.log("al vacio", document.cookie);
				if (!new RegExp(COOKIE_NAME).test(document.cookie)) document.cookie = `${COOKIE_NAME}=1; path=/; max-age=${MAX_AGE}; Secure; SameSite=Lax`;
			}
			window.addEventListener("DOMContentLoaded", () => {
				this.observeDOM();
				this.extractSongData();
				const container = document.createElement("div");
				container.id = "lyeh";
				document.body.appendChild(container);
				createApp(app_default).mount(container);
				const cacheVersion = _GM_getValue("lyeh:version");
				const version = _GM_info.script.version;
				console.log("VERSIOOON", version, cacheVersion);
				if (!cacheVersion) _GM_setValue("lyeh:version", version);
				else {
					const cacheParts = cacheVersion.split(".");
					const cacheMajor = cacheParts[0];
					const cacheMinor = cacheParts[0];
					const cachePath = cacheParts[0];
					const versionParts = version.split(".");
					const major = versionParts[0];
					const minor = versionParts[0];
					const path = versionParts[0];
					console.log(cacheMajor, major);
					if (cacheMajor != major) {
						console.log("version missmatch");
						window.dispatchEvent(new CustomEvent("lyeh:version-mismatch", { detail: {
							oldVersion: cacheVersion,
							newVersion: version
						} }));
						_GM_setValue("lyeh:version", version);
					}
					if (cacheMinor != minor) {
						console.log("version missmatch");
						window.dispatchEvent(new CustomEvent("lyeh:version-mismatch", { detail: {
							oldVersion: cacheVersion,
							newVersion: version
						} }));
						_GM_setValue("lyeh:version", version);
					}
					if (cachePath != path) {
						console.log("version missmatch");
						window.dispatchEvent(new CustomEvent("lyeh:version-mismatch", { detail: {
							oldVersion: cacheVersion,
							newVersion: version
						} }));
						_GM_setValue("lyeh:version", version);
					}
				}
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
				for (const [_, data] of Object.entries(trackingData.entities.artists || {})) if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
				for (const [_, data] of Object.entries(trackingData.entities.user || {})) if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
				for (const [_, data] of Object.entries(trackingData.entities.songs || {})) if (data.songArtImageThumbnailUrl) {
					covers.set(data.url, data.songArtImageThumbnailUrl);
					coverAccent.set(data.url, this.getAccentCache(data.url, data.songArtImageThumbnailUrl));
				}
				for (const [_, data] of Object.entries(trackingData.entities.albums || {})) if (data.coverArtThumbnailUrl) coverAccent.set(data.url, this.getAccentCache(data.url, data.coverArtThumbnailUrl));
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
