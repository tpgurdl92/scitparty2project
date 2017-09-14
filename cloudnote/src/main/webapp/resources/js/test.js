var v = phantom.version;
var url = "";
if (v.major >= 2) {
    var system = require('system');
    url = system.args[1];
} else {
	url = phantom.args[0];
}


var page = require('webpage').create(); // Web Page를 Control 하기 위한 Web Page Module 객체 생성
// fixme phantomjs 2.1.1 에서 pageSize.format A4 버그 개선
var width = 1024;
page.viewportSize = {width: width, height: width * (768 / 1024)};   // PhantomJS에서 화면을 어떤 사이즈로 출력할 것인지에 대한 값 : 미디어 쿼리도 동작
page.zoomFactor = 0.85;
//	585 / width;  // A4 / 72 DPI : 585px X 842px

var pageSize = {
    format: 'A4',
    orientation: 'portrait',
    margin: {
        top: '0.5cm',
        bottom: '0.5cm',
        left: '0.5cm',
        right: '0.5cm'
    },
    footer: {
        contents : phantom.callback(function(pageNum, numPages){
            return '' +
                    '<div style="margin: 0 1cm 0 1cm; font-size: 0.9em; textAlign:center;">' +
                    '   <div style="color: black; padding:20px 20px 0 10px;">' +
                    '       <span>' + pageNum + ' / ' + numPages + '</span>' +
                    '   </div>' +
                    '</div>';
        })
    }
};
page.paperSize = pageSize;

page.onLoadFinished = function (status) {
    var zoom = page.zoomFactor;
    console.log('onLoadFinished Status: ' + status);
    page.evaluate(function (zoom) {
        document.getElementsByTagName('body')[0].style.zoom = zoom;
    }, zoom);

    setTimeout(function () {
        page.render('C://demo/temp_file/temp_my_pdf.pdf');    
        console.log('Status: ' + status);
        phantom.exit();

    }, 0);
};

page.open(url, function(status) {
	console.log('open Status: ' + status);
	page.evaluate(function () {
        // 폰트 문제로 사용가능한 폰트로 교체
        var cssCode = 'html body, html body * { font-family:"arial" !important; }';// html { zoom: 1; }
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = cssCode;
        } else {
            styleElement.appendChild(document.createTextNode(cssCode));
        }
        document.getElementsByTagName("head")[0].appendChild(styleElement);
    });
    if (status !== 'success') { // status 인자를 통해 성공, 실패여부 확인
        console.log('Cannot open webpage');
        phantom.exit();
    }
});