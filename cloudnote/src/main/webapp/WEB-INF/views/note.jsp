<%@page import="com.fasterxml.jackson.annotation.JsonInclude.Include"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>D2</title>

<style type="text/css">
.all_div {
	width: 1500px;
	height: 100%;
}

.img_button1 {
	position: fixed;
	display: block;
	top: 12px;
	left: 680px;
}

.img_button2 {
	position: fixed;
	display: block;
	top: 12px;
	left: 50px;
}

.img_button3 {
	position: fixed;
	display: block;
	top: 12px;
	left: 12px;
}

.img_button4 {
	position: fixed;
	display: block;
	top: 12px;
	left: 90px;
}

.img_button5 {
	position: fixed;
	display: block;
	top: 12px;
	left: 130px;
}

.top_div {
	position: fixed;
	display: block;
	width: auto;
	height: 50px;
	top: 10px;
	left: 4%;
	top: 10px;
}

.viewForm {
	border: 1px solid green;
	color: black;
	float: left;
	width: 685px;
	height: 655px;
	margin-top: 55px;
	margin-left: 25px;
}

.writeForm {
	border: 1px solid green;
	color: black;
	float: left;
	width: 755px;
	height: 700px;
	margin-top: 10px;
	margin-left: 25px;
}

.img_button {
	float: right;

}

.filebox label {
	color: #999;
	line-height: normal;
	vertical-align: middle;
	background-color: #fdfdfd;
	cursor: pointer;
}

.filebox input[type="file"] {
	 /* 파일 필드 숨기기 */
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}
</style>
<script src="./resources/js/html2canvas.min.js"></script>
<script type="text/javascript" src="./resources/js/jquery-3.2.1.js"></script>
<script type="text/javascript">
	var viewState = '';

	$(function() {
		
		getDocList();

		$("#getWebPage").click(function() {
			var divImg = document.getElementById("viewImg");
			var divViewer = document.getElementById('sc');
			$("div").show()
			divViewer.style.display='none';
			var str = '';
			divImg.innerHTML = str;
			getWebPage();
		});
		
		$('#viewSelect').change(function(){
			var divViewer = document.getElementById('sc');
			var divImg = document.getElementById('viewImg');
			$("div").show()
			divImg.style.display='none';
			var selected = $(this).val();
			console.log(selected);
			document.getElementById("viewerjs").src = "./resources/ViewerJS/#../document/"+ selected;

	     });
	            
	
	});
	
	function upload()
	  {
		//FormData parameter에 담아줌
		var formData = new FormData();
		formData.append("upload", $('#input-file')[0].files[0]);		
	   $.ajax({
			url:'docupload',
			method:'post',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                $(result).each(function(index,item){
                	$('#viewSelect').append($('<option>', { 
                        value: item.d_savedfilename,
                        text : item.d_originalfilename 
                    }));
                });
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
		});
	   
	  }
	
	function getDocList(){
		$.ajax({
			url:'getdoclist',
			method:'get',
            success: function (result) {
                $(result).each(function(index,item){
                	$('#viewSelect').append($('<option>', { 
                        value: item.d_savedfilename,
                        text : item.d_originalfilename 
                    }));
                });
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
		});
	}

	
	function getWebPage() {
		var urlAddress = $('#url').val();
		if(urlAddress == ''){
			alert('참고할 페이지 주소를 입력하세요.');
			return;
		}	
		$('#url').val('');
		$.ajax({
			url:'screenshot',
			method:'post',
			data:{				
				URL: urlAddress
			},					
			beforeSend: function(){
				SL.helpers.PageLoader.show({
                    message: "Loading"
                });
			},
			success:function(result){
				SL.helpers.PageLoader.hide();
				var div = document.getElementById("viewImg");
				var str = result;
				cropinit(str);
			}
		});
		
	}		
	
	function capture(){
		html2canvas($("#sc"), {
			onrendered: function(canvas) {
				var img = canvas.toDataURL();
			    $("#editor").append('<div class="sl-block" data-block-type="image" data-block-id="fefdfd7419bbe0a6eaf869b7d24eac9d" style="min-width: 30px; min-height: 30px;"><div class="sl-block-content" style="z-index: 12;"><img data-src="' + img + '>');    // section2 영역에 section1 을 이미지 capture 내용이 보여짐
			}
		});
	}
	
	//텍스트가져오기
// 	function selectText() {
// 	    var selectionText = "";
	    
// 	    if (document.getSelection) {
// 	        selectionText = document.getElementById('#viewr').getSelection();
// 	    } else if (document.selection) {
	       
// 	    	selectionText = document.getElementById('#viewr').selection.createRange().text;
// 	    }
// 	     alert(selectionText);
// 	 }

// 	document.onmouseup = function() {
// 	    document.getElementById("console").innerHTML = selectText();
// 	}
</script>
</head>
<body>
	<!-- Content  -->
	<div class="all_div">
		<div class="top_div" style="font-size: 14px; background-color: white; left:0; top:12px;width:50%; height:50px;">
			<a href="/cloudnote" class="img_button3"> <img src="resources/images/home.png"></a>
			<a href="" class="img_button4"> <img src="resources/images/star.png"></a>
			<a href="" class="img_button2"> <img src="resources/images/photo-camera.png"></a>
			
			<div class="filebox preview-image img_button5">
				<form name="uploadFile" id="uploadFile" enctype="multipart/form-data">
					<label for="input-file">
						<img src="resources/images/folder.png">
					</label> 
					<input type="file" id="input-file" class="upload-hidden" onchange="upload()">
				</form>
			</div>
			<select id="viewSelect" name="viewSelect" style=" position: absolute; left: 180px;width: 180px; height: 35px; font-size: 14px;">
				<option value="noneselected">선택없음</option>
			</select>
			<div>
				<input type="text" id="url" name="URL" placeholder="https://..."
					style="position: fixed; left: 380px; width: 300px; height: 35px; font-size: 14px;">
				<button class="img_button1" id="getWebPage">
					<img src="resources/images/loupe.png">
				</button>
			</div>
		</div>
		<div id = "viewer" style="float:left;   position:absolute; left:0px; top:55px; width: 50%; height: 93%; overflow: scroll; text-align: center;">
			
			 <%@include file="newcrop.jsp" %> 
			  <div id="sc" style=" display: none;">
				<!-- <iframe id="viewerjs" style="position:absolute; left:0px; width:100%; height: 100%;" allowfullscreen="" webkitallowfullscreen=""></iframe> -->
			</div> 
			<div id="viewImg" style=" width:100%; height: 650px; display: none;"></div> -->
		</div>
		<%@include file="editor.jsp"%>
	</div>
</body>
</html>