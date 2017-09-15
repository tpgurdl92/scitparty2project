<html
	class="sl-root decks edit mz-applicationcache mz-history mz-localstorage mz-svg mz-opacity mz-rgba mz-backgroundsize mz-cssanimations mz-csstransforms mz-csstransforms3d mz-csstransitions mz-flexbox mz-flexboxlegacy mz-fullscreen loaded ua-windows ua-chrome has-visible-scrollbars is-editing fonts-are-ready editor-loaded-successfully"
	data-editor-version="2" data-account="default" data-visibility="all"
	data-deck-contrast="10" style="background-color: rgb(255, 255, 255);">
<head>
<meta name="viewport" content="width=1024, user-scalable=no">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>editor</title>
<meta name="description" content="Slides">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style"
	content="black-translucent">

<link rel="manifest" href="//assets.slid.es/manifest.json">

<link
	href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,600,700&amp;subset=latin,cyrillic-ext,greek-ext,greek,latin-ext,cyrillic"
	rel="stylesheet" type="text/css" data-application-font="opensans">
<link
	href="//assets.slid.es/assets/slides/slides-985765429f68a85880426345fe156653.css"
	media="all" rel="stylesheet">
<link
	href="//assets.slid.es/assets/application-5ffb60aec58ee49dea17c95752f0bf72.css"
	media="all" rel="stylesheet">
<link
	href="//assets.slid.es/assets/editor-v2-12b79795e8868f43eab26a58ae133168.css"
	media="all" rel="stylesheet">
<link
	href="//assets.slid.es/assets/deck-v2-373be343c31e7342ed6effb15e01eb48.css"
	media="all" rel="stylesheet">
<meta content="authenticity_token" name="csrf-param">
<meta content="NFu1JFq+6VTnK1dsOEB4jcTUeSnLVC3PFdjAGurnnMw="
	name="csrf-token">

<!-- 현재 마우스 위치를 알려주는 것 -->
<script async="async" src="//www.google-analytics.com/analytics.js"></script>
<script type="text/javascript">
	if (!/dnt=1/.test(window.location.search)) {
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o), m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script',
				'//www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-39670045-1', {
			'userId' : '742158'
		});
		ga('send', 'pageview');

	}
</script>


<script id="user-css-input" type="text/template"></script>
<style type="text/css"></style>
<style id="ace_editor.css">
.ace_editor {
	position: relative;
	overflow: hidden;
	font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas',
		'source-code-pro', monospace;
	direction: ltr;
	text-align: left;
}

.ace_scroller {
	position: absolute;
	overflow: hidden;
	top: 0;
	bottom: 0;
	background-color: inherit;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	cursor: text;
}

.ace_content {
	position: absolute;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	min-width: 100%;
}

.ace_dragging .ace_scroller:before {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	content: '';
	background: rgba(250, 250, 250, 0.01);
	z-index: 1000;
}

.ace_dragging.ace_dark .ace_scroller:before {
	background: rgba(0, 0, 0, 0.01);
}

.ace_selecting, .ace_selecting * {
	cursor: text !important;
}

.ace_gutter {
	position: absolute;
	overflow: hidden;
	width: auto;
	top: 0;
	bottom: 0;
	left: 0;
	cursor: default;
	z-index: 4;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}

.ace_gutter-active-line {
	position: absolute;
	left: 0;
	right: 0;
}

.ace_scroller.ace_scroll-left {
	box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
}

.ace_gutter-cell {
	padding-left: 19px;
	padding-right: 6px;
	background-repeat: no-repeat;
}

.ace_gutter-cell.ace_error {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
	background-repeat: no-repeat;
	background-position: 2px center;
}

.ace_gutter-cell.ace_warning {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
	background-position: 2px center;
}

.ace_gutter-cell.ace_info {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
	background-position: 2px center;
}

.ace_dark .ace_gutter-cell.ace_info {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
}

.ace_scrollbar {
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 6;
}

.ace_scrollbar-inner {
	position: absolute;
	cursor: text;
	left: 0;
	top: 0;
}

.ace_scrollbar-v {
	overflow-x: hidden;
	overflow-y: scroll;
	top: 0;
}

.ace_scrollbar-h {
	overflow-x: scroll;
	overflow-y: hidden;
	left: 0;
}

.ace_print-margin {
	position: absolute;
	height: 100%;
}

.ace_text-input {
	position: absolute;
	z-index: 0;
	width: 0.5em;
	height: 1em;
	opacity: 0;
	background: transparent;
	-moz-appearance: none;
	appearance: none;
	border: none;
	resize: none;
	outline: none;
	overflow: hidden;
	font: inherit;
	padding: 0 1px;
	margin: 0 -1px;
	text-indent: -1em;
	-ms-user-select: text;
	-moz-user-select: text;
	-webkit-user-select: text;
	user-select: text;
	white-space: pre !important;
}

.ace_text-input.ace_composition {
	background: inherit;
	color: inherit;
	z-index: 1000;
	opacity: 1;
	text-indent: 0;
}

.ace_layer {
	z-index: 1;
	position: absolute;
	overflow: hidden;
	word-wrap: normal;
	white-space: pre;
	height: 100%;
	width: 100%;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	pointer-events: none;
}

.ace_gutter-layer {
	position: relative;
	width: auto;
	text-align: right;
	pointer-events: auto;
}

.ace_text-layer {
	font: inherit !important;
}

.ace_cjk {
	display: inline-block;
	text-align: center;
}

.ace_cursor-layer {
	z-index: 4;
}

.ace_cursor {
	z-index: 4;
	position: absolute;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	border-left: 2px solid;
	transform: translatez(0);
}

.ace_slim-cursors .ace_cursor {
	border-left-width: 1px;
}

.ace_overwrite-cursors .ace_cursor {
	border-left-width: 0;
	border-bottom: 1px solid;
}

.ace_hidden-cursors .ace_cursor {
	opacity: 0.2;
}

.ace_smooth-blinking .ace_cursor {
	-webkit-transition: opacity 0.18s;
	transition: opacity 0.18s;
}

.ace_editor.ace_multiselect .ace_cursor {
	border-left-width: 1px;
}

.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {
	position: absolute;
	z-index: 3;
}

.ace_marker-layer .ace_selection {
	position: absolute;
	z-index: 5;
}

.ace_marker-layer .ace_bracket {
	position: absolute;
	z-index: 6;
}

.ace_marker-layer .ace_active-line {
	position: absolute;
	z-index: 2;
}

.ace_marker-layer .ace_selected-word {
	position: absolute;
	z-index: 4;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

.ace_line .ace_fold {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: inline-block;
	height: 11px;
	margin-top: -2px;
	vertical-align: middle;
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
	background-repeat: no-repeat, repeat-x;
	background-position: center center, top left;
	color: transparent;
	border: 1px solid black;
	border-radius: 2px;
	cursor: pointer;
	pointer-events: auto;
}

.ace_dark .ace_fold {
	
}

.ace_fold:hover {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
}

.ace_tooltip {
	background-color: #FFF;
	background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));
	background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
	border: 1px solid gray;
	border-radius: 1px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	color: black;
	max-width: 100%;
	padding: 3px 4px;
	position: fixed;
	z-index: 999999;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	cursor: default;
	white-space: pre;
	word-wrap: break-word;
	line-height: normal;
	font-style: normal;
	font-weight: normal;
	letter-spacing: normal;
	pointer-events: none;
}

.ace_folding-enabled>.ace_gutter-cell {
	padding-right: 13px;
}

.ace_fold-widget {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0 -12px 0 1px;
	display: none;
	width: 11px;
	vertical-align: top;
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 3px;
	border: 1px solid transparent;
	cursor: pointer;
}

.ace_folding-enabled .ace_fold-widget {
	display: inline-block;
}

.ace_fold-widget.ace_end {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
}

.ace_fold-widget.ace_closed {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
}

.ace_fold-widget:hover {
	border: 1px solid rgba(0, 0, 0, 0.3);
	background-color: rgba(255, 255, 255, 0.2);
	box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}

.ace_fold-widget:active {
	border: 1px solid rgba(0, 0, 0, 0.4);
	background-color: rgba(0, 0, 0, 0.05);
	box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}

.ace_dark .ace_fold-widget {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}

.ace_dark .ace_fold-widget.ace_end {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}

.ace_dark .ace_fold-widget.ace_closed {
	background-image:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}

.ace_dark .ace_fold-widget:hover {
	box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
	background-color: rgba(255, 255, 255, 0.1);
}

.ace_dark .ace_fold-widget:active {
	box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}

.ace_fold-widget.ace_invalid {
	background-color: #FFB4B4;
	border-color: #DE5555;
}

.ace_fade-fold-widgets .ace_fold-widget {
	-webkit-transition: opacity 0.4s ease 0.05s;
	transition: opacity 0.4s ease 0.05s;
	opacity: 0;
}

.ace_fade-fold-widgets:hover .ace_fold-widget {
	-webkit-transition: opacity 0.05s ease 0.05s;
	transition: opacity 0.05s ease 0.05s;
	opacity: 1;
}

.ace_underline {
	text-decoration: underline;
}

.ace_bold {
	font-weight: bold;
}

.ace_nobold .ace_bold {
	font-weight: normal;
}

.ace_italic {
	font-style: italic;
}

.ace_error-marker {
	background-color: rgba(255, 0, 0, 0.2);
	position: absolute;
	z-index: 9;
}

.ace_highlight-marker {
	background-color: rgba(255, 255, 0, 0.2);
	position: absolute;
	z-index: 8;
}

.ace_br1 {
	border-top-left-radius: 3px;
}

.ace_br2 {
	border-top-right-radius: 3px;
}

.ace_br3 {
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.ace_br4 {
	border-bottom-right-radius: 3px;
}

.ace_br5 {
	border-top-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.ace_br6 {
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}

.ace_br7 {
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}

.ace_br8 {
	border-bottom-left-radius: 3px;
}

.ace_br9 {
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br10 {
	border-top-right-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br11 {
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br12 {
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br13 {
	border-top-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br14 {
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
}

.ace_br15 {
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
}
/*# sourceURL=ace/css/ace_editor.css */
</style>
<style id="ace-tm">
.ace-tm .ace_gutter {
	background: #f0f0f0;
	color: #333;
}

.ace-tm .ace_print-margin {
	width: 1px;
	background: #e8e8e8;
}

.ace-tm .ace_fold {
	background-color: #6B72E6;
}

.ace-tm {
	background-color: #FFFFFF;
	color: black;
}

.ace-tm .ace_cursor {
	color: black;
}

.ace-tm .ace_invisible {
	color: rgb(191, 191, 191);
}

.ace-tm .ace_storage, .ace-tm .ace_keyword {
	color: blue;
}

.ace-tm .ace_constant {
	color: rgb(197, 6, 11);
}

.ace-tm .ace_constant.ace_buildin {
	color: rgb(88, 72, 246);
}

.ace-tm .ace_constant.ace_language {
	color: rgb(88, 92, 246);
}

.ace-tm .ace_constant.ace_library {
	color: rgb(6, 150, 14);
}

.ace-tm .ace_invalid {
	background-color: rgba(255, 0, 0, 0.1);
	color: red;
}

.ace-tm .ace_support.ace_function {
	color: rgb(60, 76, 114);
}

.ace-tm .ace_support.ace_constant {
	color: rgb(6, 150, 14);
}

.ace-tm .ace_support.ace_type, .ace-tm .ace_support.ace_class {
	color: rgb(109, 121, 222);
}

.ace-tm .ace_keyword.ace_operator {
	color: rgb(104, 118, 135);
}

.ace-tm .ace_string {
	color: rgb(3, 106, 7);
}

.ace-tm .ace_comment {
	color: rgb(76, 136, 107);
}

.ace-tm .ace_comment.ace_doc {
	color: rgb(0, 102, 255);
}

.ace-tm .ace_comment.ace_doc.ace_tag {
	color: rgb(128, 159, 191);
}

.ace-tm .ace_constant.ace_numeric {
	color: rgb(0, 0, 205);
}

.ace-tm .ace_variable {
	color: rgb(49, 132, 149);
}

.ace-tm .ace_xml-pe {
	color: rgb(104, 104, 91);
}

.ace-tm .ace_entity.ace_name.ace_function {
	color: #0000A2;
}

.ace-tm .ace_heading {
	color: rgb(12, 7, 255);
}

.ace-tm .ace_list {
	color: rgb(185, 6, 144);
}

.ace-tm .ace_meta.ace_tag {
	color: rgb(0, 22, 142);
}

.ace-tm .ace_string.ace_regex {
	color: rgb(255, 0, 0)
}

.ace-tm .ace_marker-layer .ace_selection {
	background: rgb(181, 213, 255);
}

.ace-tm.ace_multiselect .ace_selection.ace_start {
	box-shadow: 0 0 3px 0px white;
}

.ace-tm .ace_marker-layer .ace_step {
	background: rgb(252, 255, 0);
}

.ace-tm .ace_marker-layer .ace_stack {
	background: rgb(164, 229, 101);
}

.ace-tm .ace_marker-layer .ace_bracket {
	margin: -1px 0 0 -1px;
	border: 1px solid rgb(192, 192, 192);
}

.ace-tm .ace_marker-layer .ace_active-line {
	background: rgba(0, 0, 0, 0.07);
}

.ace-tm .ace_gutter-active-line {
	background-color: #dcdcdc;
}

.ace-tm .ace_marker-layer .ace_selected-word {
	background: rgb(250, 250, 255);
	border: 1px solid rgb(200, 200, 250);
}

.ace-tm .ace_indent-guide {
	background:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==")
		right repeat-y;
}
/*# sourceURL=ace/css/ace-tm */
</style>
<style>
.error_widget_wrapper {
	background: inherit;
	color: inherit;
	border: none
}

.error_widget {
	border-top: solid 2px;
	border-bottom: solid 2px;
	margin: 5px 0;
	padding: 10px 40px;
	white-space: pre-wrap;
}

.error_widget.ace_error, .error_widget_arrow.ace_error {
	border-color: #ff5a5a
}

.error_widget.ace_warning, .error_widget_arrow.ace_warning {
	border-color: #F1D817
}

.error_widget.ace_info, .error_widget_arrow.ace_info {
	border-color: #5a5a5a
}

.error_widget.ace_ok, .error_widget_arrow.ace_ok {
	border-color: #5aaa5a
}

.error_widget_arrow {
	position: absolute;
	border: solid 5px;
	border-top-color: transparent !important;
	border-right-color: transparent !important;
	border-left-color: transparent !important;
	top: -5px;
}
</style>
<style id="ace_searchbox">
.ace_search {
	background-color: #ddd;
	border: 1px solid #cbcbcb;
	border-top: 0 none;
	max-width: 325px;
	overflow: hidden;
	margin: 0;
	padding: 4px;
	padding-right: 6px;
	padding-bottom: 0;
	position: absolute;
	top: 0px;
	z-index: 99;
	white-space: normal;
}

.ace_search.left {
	border-left: 0 none;
	border-radius: 0px 0px 5px 0px;
	left: 0;
}

.ace_search.right {
	border-radius: 0px 0px 0px 5px;
	border-right: 0 none;
	right: 0;
}

.ace_search_form, .ace_replace_form {
	border-radius: 3px;
	border: 1px solid #cbcbcb;
	float: left;
	margin-bottom: 4px;
	overflow: hidden;
}

.ace_search_form.ace_nomatch {
	outline: 1px solid red;
}

.ace_search_field {
	background-color: white;
	border-right: 1px solid #cbcbcb;
	border: 0 none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	float: left;
	height: 22px;
	outline: 0;
	padding: 0 7px;
	width: 214px;
	margin: 0;
}

.ace_searchbtn, .ace_replacebtn {
	background: #fff;
	border: 0 none;
	border-left: 1px solid #dcdcdc;
	cursor: pointer;
	float: left;
	height: 22px;
	margin: 0;
	position: relative;
}

.ace_searchbtn:last-child, .ace_replacebtn:last-child {
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}

.ace_searchbtn:disabled {
	background: none;
	cursor: default;
}

.ace_searchbtn {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	width: 27px;
}

.ace_searchbtn.prev {
	background-image:
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);
}

.ace_searchbtn.next {
	background-image:
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);
}

.ace_searchbtn_close {
	background:
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==)
		no-repeat 50% 0;
	border-radius: 50%;
	border: 0 none;
	color: #656565;
	cursor: pointer;
	float: right;
	font: 16px/16px Arial;
	height: 14px;
	margin: 5px 1px 9px 5px;
	padding: 0;
	text-align: center;
	width: 14px;
}

.ace_searchbtn_close:hover {
	background-color: #656565;
	background-position: 50% 100%;
	color: white;
}

.ace_replacebtn.prev {
	width: 54px
}

.ace_replacebtn.next {
	width: 27px
}

.ace_button {
	margin-left: 2px;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
	opacity: 0.7;
	border: 1px solid rgba(100, 100, 100, 0.23);
	padding: 1px;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	color: black;
}

.ace_button:hover {
	background-color: #eee;
	opacity: 1;
}

.ace_button:active {
	background-color: #ddd;
}

.ace_button.checked {
	border-color: #3399ff;
	opacity: 1;
}

.ace_search_options {
	margin-bottom: 3px;
	text-align: right;
	-webkit-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
/*# sourceURL=ace/css/ace_searchbox */
</style>
<style>
.cke {
	visibility: hidden;
}
</style>
<link rel="stylesheet"
	href="https://s3.amazonaws.com/static.slid.es/fonts/montserrat/montserrat.css">
<style type="text/css" media="screen">
.uv-icon {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	position: relative;
	-moz-transition: all 300ms;
	-o-transition: all 300ms;
	-webkit-transition: all 300ms;
	transition: all 300ms;
	width: 39px;
	height: 39px;
	position: fixed;
	z-index: 100002;
	opacity: 0.8;
	-moz-transition: opacity 100ms;
	-o-transition: opacity 100ms;
	-webkit-transition: opacity 100ms;
	transition: opacity 100ms
}

.uv-icon.uv-bottom-right {
	bottom: 10px;
	right: 12px
}

.uv-icon.uv-top-right {
	top: 10px;
	right: 12px
}

.uv-icon.uv-bottom-left {
	bottom: 10px;
	left: 12px
}

.uv-icon.uv-top-left {
	top: 10px;
	left: 12px
}

.uv-icon.uv-is-selected {
	opacity: 1
}

.uv-icon svg {
	width: 39px;
	height: 39px
}

.uv-popover {
	font-family: sans-serif;
	font-weight: 100;
	font-size: 13px;
	color: black;
	position: fixed;
	z-index: 100001
}

.uv-popover-content {
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	background: white;
	position: relative;
	width: 325px;
	height: 325px;
	-moz-transition: background 200ms;
	-o-transition: background 200ms;
	-webkit-transition: background 200ms;
	transition: background 200ms
}

.uv-bottom .uv-popover-content {
	-moz-box-shadow: rgba(0, 0, 0, 0.3) 0 -10px 60px, rgba(0, 0, 0, 0.1) 0 0
		20px;
	-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 -10px 60px, rgba(0, 0, 0, 0.1)
		0 0 20px;
	box-shadow: rgba(0, 0, 0, 0.3) 0 -10px 60px, rgba(0, 0, 0, 0.1) 0 0 20px
}

.uv-top .uv-popover-content {
	-moz-box-shadow: rgba(0, 0, 0, 0.3) 0 10px 60px, rgba(0, 0, 0, 0.1) 0 0
		20px;
	-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 10px 60px, rgba(0, 0, 0, 0.1) 0
		0 20px;
	box-shadow: rgba(0, 0, 0, 0.3) 0 10px 60px, rgba(0, 0, 0, 0.1) 0 0 20px
}

.uv-left .uv-popover-content {
	-moz-box-shadow: rgba(0, 0, 0, 0.3) 10px 0 60px, rgba(0, 0, 0, 0.1) 0 0
		20px;
	-webkit-box-shadow: rgba(0, 0, 0, 0.3) 10px 0 60px, rgba(0, 0, 0, 0.1) 0
		0 20px;
	box-shadow: rgba(0, 0, 0, 0.3) 10px 0 60px, rgba(0, 0, 0, 0.1) 0 0 20px
}

.uv-right .uv-popover-content {
	-moz-box-shadow: rgba(0, 0, 0, 0.3) -10px 0 60px, rgba(0, 0, 0, 0.1) 0 0
		20px;
	-webkit-box-shadow: rgba(0, 0, 0, 0.3) -10px 0 60px, rgba(0, 0, 0, 0.1)
		0 0 20px;
	box-shadow: rgba(0, 0, 0, 0.3) -10px 0 60px, rgba(0, 0, 0, 0.1) 0 0 20px
}

.uv-ie8 .uv-popover-content {
	position: relative
}

.uv-ie8 .uv-popover-content .uv-popover-content-shadow {
	display: block;
	background: black;
	content: '';
	position: absolute;
	left: -15px;
	top: -15px;
	width: 100%;
	height: 100%;
	filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,
		MakeShadow=true, ShadowOpacity=0.30);
	z-index: -1
}

.uv-popover-tail {
	border: 9px solid transparent;
	width: 0;
	z-index: 10;
	position: absolute;
	-moz-transition: border-top-color 200ms;
	-o-transition: border-top-color 200ms;
	-webkit-transition: border-top-color 200ms;
	transition: border-top-color 200ms
}

.uv-top .uv-popover-tail {
	bottom: -20px;
	border-top: 11px solid white
}

.uv-bottom .uv-popover-tail {
	top: -20px;
	border-bottom: 11px solid white
}

.uv-left .uv-popover-tail {
	right: -20px;
	border-left: 11px solid white
}

.uv-right .uv-popover-tail {
	left: -20px;
	border-right: 11px solid white
}

.uv-popover-loading {
	background: white;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0
}

.uv-popover-loading-text {
	position: absolute;
	top: 50%;
	margin-top: -0.5em;
	width: 100%;
	text-align: center
}

.uv-popover-iframe-container {
	height: 100%
}

.uv-popover-iframe {
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	overflow: hidden
}

.uv-is-hidden {
	display: none
}

.uv-is-invisible {
	display: block !important;
	visibility: hidden !important
}

.uv-is-transitioning {
	display: block !important
}

.uv-no-transition {
	-moz-transition: none !important;
	-webkit-transition: none !important;
	-o-transition: color 0 ease-in !important;
	transition: none !important
}

.uv-fade {
	opacity: 1;
	-moz-transition: opacity 200ms ease-out;
	-o-transition: opacity 200ms ease-out;
	-webkit-transition: opacity 200ms ease-out;
	transition: opacity 200ms ease-out
}

.uv-fade.uv-is-hidden {
	opacity: 0
}

.uv-scale-top, .uv-scale-top-left, .uv-scale-top-right, .uv-scale-bottom,
	.uv-scale-bottom-left, .uv-scale-bottom-right, .uv-scale-right,
	.uv-scale-right-top, .uv-scale-right-bottom, .uv-scale-left,
	.uv-scale-left-top, .uv-scale-left-bottom, .uv-slide-top,
	.uv-slide-bottom, .uv-slide-left, .uv-slide-right {
	opacity: 1;
	-moz-transition: all 80ms ease-out;
	-o-transition: all 80ms ease-out;
	-webkit-transition: all 80ms ease-out;
	transition: all 80ms ease-out
}

.uv-scale-top.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(-15%);
	-ms-transform: scale(0.8) translateY(-15%);
	-webkit-transform: scale(0.8) translateY(-15%);
	transform: scale(0.8) translateY(-15%)
}

.uv-scale-top-left.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(-15%) translateX(-10%);
	-ms-transform: scale(0.8) translateY(-15%) translateX(-10%);
	-webkit-transform: scale(0.8) translateY(-15%) translateX(-10%);
	transform: scale(0.8) translateY(-15%) translateX(-10%)
}

.uv-scale-top-right.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(-15%) translateX(10%);
	-ms-transform: scale(0.8) translateY(-15%) translateX(10%);
	-webkit-transform: scale(0.8) translateY(-15%) translateX(10%);
	transform: scale(0.8) translateY(-15%) translateX(10%)
}

.uv-scale-bottom.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(15%);
	-ms-transform: scale(0.8) translateY(15%);
	-webkit-transform: scale(0.8) translateY(15%);
	transform: scale(0.8) translateY(15%)
}

.uv-scale-bottom-left.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(15%) translateX(-10%);
	-ms-transform: scale(0.8) translateY(15%) translateX(-10%);
	-webkit-transform: scale(0.8) translateY(15%) translateX(-10%);
	transform: scale(0.8) translateY(15%) translateX(-10%)
}

.uv-scale-bottom-right.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateY(15%) translateX(10%);
	-ms-transform: scale(0.8) translateY(15%) translateX(10%);
	-webkit-transform: scale(0.8) translateY(15%) translateX(10%);
	transform: scale(0.8) translateY(15%) translateX(10%)
}

.uv-scale-right.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(15%);
	-ms-transform: scale(0.8) translateX(15%);
	-webkit-transform: scale(0.8) translateX(15%);
	transform: scale(0.8) translateX(15%)
}

.uv-scale-right-top.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(15%) translateY(-10%);
	-ms-transform: scale(0.8) translateX(15%) translateY(-10%);
	-webkit-transform: scale(0.8) translateX(15%) translateY(-10%);
	transform: scale(0.8) translateX(15%) translateY(-10%)
}

.uv-scale-right-bottom.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(15%) translateY(10%);
	-ms-transform: scale(0.8) translateX(15%) translateY(10%);
	-webkit-transform: scale(0.8) translateX(15%) translateY(10%);
	transform: scale(0.8) translateX(15%) translateY(10%)
}

.uv-scale-left.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(-15%);
	-ms-transform: scale(0.8) translateX(-15%);
	-webkit-transform: scale(0.8) translateX(-15%);
	transform: scale(0.8) translateX(-15%)
}

.uv-scale-left-top.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(-15%) translateY(-10%);
	-ms-transform: scale(0.8) translateX(-15%) translateY(-10%);
	-webkit-transform: scale(0.8) translateX(-15%) translateY(-10%);
	transform: scale(0.8) translateX(-15%) translateY(-10%)
}

.uv-scale-left-bottom.uv-is-hidden {
	opacity: 0;
	-moz-transform: scale(0.8) translateX(-15%) translateY(10%);
	-ms-transform: scale(0.8) translateX(-15%) translateY(10%);
	-webkit-transform: scale(0.8) translateX(-15%) translateY(10%);
	transform: scale(0.8) translateX(-15%) translateY(10%)
}

.uv-slide-top.uv-is-hidden {
	-moz-transform: translateY(-100%);
	-ms-transform: translateY(-100%);
	-webkit-transform: translateY(-100%);
	transform: translateY(-100%)
}

.uv-slide-bottom.uv-is-hidden {
	-moz-transform: translateY(100%);
	-ms-transform: translateY(100%);
	-webkit-transform: translateY(100%);
	transform: translateY(100%)
}

.uv-slide-left.uv-is-hidden {
	-moz-transform: translateX(-100%);
	-ms-transform: translateX(-100%);
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%)
}

.uv-slide-right.uv-is-hidden {
	-moz-transform: translateX(100%);
	-ms-transform: translateX(100%);
	-webkit-transform: translateX(100%);
	transform: translateX(100%)
}
</style>
<style></style>
<style id="user-css-output" type="text/css"></style>
<script src="./resources/js/jquery-3.2.1.js"></script>
<script src="//assets.slid.es/ckeditor/ckeditor.js?t=1"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/config.js?t=04112016"></script>
<link rel="stylesheet" type="text/css"
	href="https://assets.slid.es/ckeditor/skins/bootstrapck/editor.css?t=04112016">
<script type="text/javascript" src="https://assets.slid.es/ckeditor/lang/en.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/styles.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/link/plugin.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/font/plugin.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/panelbutton/plugin.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/colorbutton/plugin.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/font/lang/en.js?t=04112016"></script>
<script type="text/javascript" src="https://assets.slid.es/ckeditor/plugins/colorbutton/lang/en.js?t=04112016"></script>
</head>
<body style="background-color: rgb(255, 255, 255); min-width: 1220px;">

	<div class="page-loader frozen">
		<div class="page-loader-inner">
			<div class="page-loader-spinner"></div>
			<p class="page-loader-message">Loading</p>
		</div>
	</div>

	<div class="page-wrapper">

		<div class="preview-controls">
			<button
				class="button preview-controls-button preview-controls-exit grey l"
				data-tooltip="Resume editing" data-tooltip-direction="b"
				data-tooltip-delay="1000">
				<span class="icon i-pen-alt2"></span>
			</button>
		</div>

		<div class="sidebar">

			<div class="primary">
				<button class="button preview" data-tooltip-delay="500"
					data-tooltip-alignment="r" data-tooltip="Preview (CTRL + F)">
					<span class="icon i-eye"></span>
				</button>
				<button class="button undo disabled" data-tooltip-delay="500"
					data-tooltip-alignment="r" data-tooltip="Undo (CTRL + Z)">
					<span class="icon i-undo"></span>
				</button>
				<button class="button save disabled is-saved"
					data-tooltip-delay="500" data-tooltip-alignment="r"
					data-tooltip="Latest changes are saved">
					<span class="icon download i-disk"></span> 
					<span class="icon check i-checkmark"></span> 
					<span class="spinner centered" data-spinner-radius="7" data-spinner-length="4" data-spinner-width="2" data-spinner-color="#bbbbbb" data-spinner-state="spinning">
					
						<div class="" style="position: relative; width: 0px; z-index: auto; left: 13px; top: 13px;" role="progressbar">
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-0-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(0deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-1-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(30deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-2-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(60deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-3-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(90deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-4-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(120deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-5-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(150deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-6-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(180deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-7-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(210deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-8-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(240deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-9-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(270deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-10-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(300deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
							<div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-11-12 1s linear infinite;">
								<div style="position: absolute; width: 6px; height: 2px; background: rgb(187, 187, 187); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(330deg) translate(7px, 0px); border-radius: 1px;"></div>
							</div>
						</div>
					</span>
				</button>
			</div>

			<div class="secondary" style="max-height: 474px;">				
				<button class="button arrange no-arrow"
					data-tooltip="Arrange slides" data-tooltip-alignment="r">
					<span class="icon i-layers"></span><span class="close icon i-x"></span>
				</button>				
			</div>

			<div class="scroll-shadow-top" style="opacity: 0; top: 200.2px;"></div>
			<div class="scroll-shadow-bottom" style="opacity: 1; bottom: 52px;"></div>

			


		</div>

		

		<article class="projector">
			<div
				class="reveal-viewport   theme-font-montserrat theme-color-white-blue">
				<div class="reveal slide ready" role="application"
					data-transition-speed="default" data-background-transition="slide">
					<div class="slides" style="width: 960px; height: 700px;">
						
						<section data-id="e87bc4f91a847a05ec7eaaf4e13e53b2"
							class="present" style="display: block;">
							<div class="sl-block" data-block-type="text"
								style="width: 806px; left: 77px; top: 331px; height: auto;"
								data-block-id="be541f9822ab6b5d0dc7ae66e7f44d19">
								<div class="sl-block-content" data-placeholder-tag="h1"
									data-placeholder-text="Title Text" style="z-index: 10;"
									dir="ui">
									<p>Hello World</p>
								</div>
							</div>
						</section>
						
					</div>
					<div class="backgrounds">
						<div class="slide-background present" data-loaded="true"
							style="display: block;"></div>
					</div>
					<div class="progress" style="display: none;">
						<span></span>
					</div>
					<aside class="controls" data-controls-layout="bottom-right"
						data-controls-back-arrows="visible" style="display: block;">
						<button class="navigate-left" aria-label="previous slide"
							disabled="disabled">
							<div class="controls-arrow"></div>
						</button>
						<button class="navigate-right" aria-label="next slide"
							disabled="disabled">
							<div class="controls-arrow"></div>
						</button>
						<button class="navigate-up" aria-label="above slide"
							disabled="disabled">
							<div class="controls-arrow"></div>
						</button>
						<button class="navigate-down" aria-label="below slide"
							disabled="disabled">
							<div class="controls-arrow"></div>
						</button>
					</aside>
					<div class="slide-number" style="display: none;"></div>
					<div class="speaker-notes" data-prevent-swipe="" tabindex="0"></div>
					<div class="pause-overlay"></div>
					<div id="aria-status-div" aria-live="polite" aria-atomic="true"
						style="position: absolute; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px);">
						Hello World</div>
					<div class="sl-block-grid">
						<canvas class="sl-block-grid-inner" width="960" height="700"
							style="left: 10px; top: 13px; width: 960px; height: 700px;"></canvas>
					</div>
				</div>
			</div>

			<div class="icon add-horizontal-slide show"
				data-tooltip="Add new slide<br>(Hold shift for blank)"
				data-tooltip-alignment="l" data-tooltip-delay="1500">
				<span class="icon i-plus"></span>
			</div>
			<div class="icon add-vertical-slide show"
				data-tooltip="Add new slide<br>(Hold shift for blank)"
				data-tooltip-alignment="t" data-tooltip-delay="1500">
				<span class="icon i-plus"></span>
			</div>
			<div class="slide-options" data-alignment="l"
				style="left: 10px; top: 13px;">

			</div>
		</article>

	</div>

	<script>
		var SLConfig = {
			"current_user" : {
				"id" : 742158,
				"username" : "hara",
				"name" : null,
				"settings" : {
					"id" : 592407,
					"present_controls" : true,
					"present_upsizing" : true,
					"present_pointer" : false,
					"present_notes" : true,
					"editor_grid" : true,
					"editor_snap" : true,
					"developer_mode" : false,
					"speaker_layout" : null,
					"phone_number" : null,
					"phone_country_code" : null
				},
				"notify_on_receipt" : true,
				"manually_upgraded" : false,
				"deck_user_editor_limit" : 1,
				"storage_used" : 0,
				"storage_limit" : 262144000
			},
			"deck" : {
				"id" : 1049791,
				"slug" : "gfgfg",
				"title" : "gfgfg",
				"description" : "",
				"width" : 960,
				"height" : 700,
				"visibility" : "all",
				"published_at" : "2017-08-01T11:45:25.878Z",
				"sanitize_messages" : null,
				"thumbnail_url" : "https://s3.amazonaws.com/media-p.slid.es/thumbnails/4f5e75e95a8ad00ae5bbb10ad6741d1f/thumb.jpg?781631753",
				"view_count" : 0,
				"user" : {
					"id" : 742158,
					"username" : "hara",
					"name" : null,
					"description" : null,
					"thumbnail_url" : "https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png",
					"paid" : false,
					"pro" : false,
					"lite" : false,
					"team_id" : null,
					"settings" : {
						"id" : 592407,
						"present_controls" : true,
						"present_upsizing" : true,
						"present_pointer" : false,
						"present_notes" : true
					}
				},
				"background_transition" : "slide",
				"transition" : "slide",
				"theme_id" : null,
				"theme_font" : "montserrat",
				"theme_color" : "white-blue",
				"auto_slide_interval" : 0,
				"comments_enabled" : true,
				"forking_enabled" : true,
				"rolling_links" : false,
				"center" : false,
				"should_loop" : false,
				"share_notes" : null,
				"slide_number" : null,
				"rtl" : false,
				"version" : 2,
				"collaborative" : null,
				"deck_user_editor_limit" : 1,
				"data_updated_at" : 1503461710928,
				"font_typekit" : null,
				"font_google" : null,
				"notes" : {}
			}
		};
	</script>
	<script defer="defer"
		src="./resources/js/application.js"></script>
	<script defer="defer"
		src="./resources/js/editor.js"></script>
	<script defer="defer"
		src="./resources/js/deck.js"></script>

	<div class="css-editor">
		<header>
			<p>Enter custom styles using LESS or plain CSS. All selectors are
				automatically prefixed with .reveal on save.</p>
			<div class="header-buttons">
				<a class="button outline"
					href="http://help.slides.com/knowledgebase/articles/253052-css-editor-pro-"
					target="_blank">Learn more and see examples</a>
				<button class="button outline float-right insert-image"
					data-tooltip="Insert image URL">
					<span class="icon i-picture"></span>
				</button>
				<button class="button outline float-right custom-fonts"
					data-tooltip="Load custom fonts">
					<span class="icon i-type"></span>
				</button>
			</header>
		</div>
		<div class="contents">
			<div id="ace-less" class="editor"></div>
			<div class="error"></div>
		</div>
		<footer>
			<button class="button cancel negative grey xl">Cancel</button>
			<button class="button save positive xl">OK</button>
		</footer>
		<div class="resizer"></div>
	</div>
	<div class="toolbars visible" style="position:relative; top:0px; left:0px">
		<div class="toolbars-inner">
			<div class="toolbars-scroller" style="transform: translateX(0px);">
				<div class="toolbar visible" data-type="add" style="left: 0px;">
					<div class="toolbar-list">
						<div class="toolbar-add-block-option" data-block-type="text">
							<span class="toolbar-add-block-option-icon icon i-type"></span><span
								class="toolbar-add-block-option-label">Text</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="image">
							<span class="toolbar-add-block-option-icon icon i-picture"></span><span
								class="toolbar-add-block-option-label">Image</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="video">
							<span class="toolbar-add-block-option-icon icon i-video-camera"></span><span
								class="toolbar-add-block-option-label">Video</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="shape">
							<span class="toolbar-add-block-option-icon icon i-shapes"></span><span
								class="toolbar-add-block-option-label">Shape</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="line">
							<span class="toolbar-add-block-option-icon icon i-"></span><span
								class="toolbar-add-block-option-label">Line</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="iframe">
							<span class="toolbar-add-block-option-icon icon i-browser"></span><span
								class="toolbar-add-block-option-label">Iframe</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="table">
							<span class="toolbar-add-block-option-icon icon i-table"></span><span
								class="toolbar-add-block-option-label">Table</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="code">
							<span class="toolbar-add-block-option-icon icon i-file-css"></span><span
								class="toolbar-add-block-option-label">Code</span>
						</div>
						<div class="toolbar-add-block-option" data-block-type="math">
							<span class="toolbar-add-block-option-icon icon i-divide"></span><span
								class="toolbar-add-block-option-label">Math</span>
						</div>
					</div>
					<div class="sl-scroll-shadow-top"
						style="height: 10px; opacity: 0; top: 0px;"></div>
					<div class="sl-scroll-shadow-bottom"
						style="height: 10px; opacity: 1; bottom: 0px;"></div>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>