<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
<style type="text/css">
.test {
	position: relative;
	width:40%;
	height: 40%; 
	left: 0;
	top: 0;
	overflow: scroll;
}
</style>





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="./resources/js/html2canvas.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#fileselect').change(function(){
			var selected = $(this).val();
			alert(selected);
			location.href="getselectedfile1?filename="+selected;
			 /* $.ajax({
				url: 'getselectedfile',
				mehtod: 'get',
				data:{
					filename: selected
				},
				success: function(result){
					alert('입력'+result);
					$('#viewer').attr('src','./resources/ViewerJS/#../ViewerJS/'+result);
					alert('입력 완료');
				}
				 
				
				
			}); */
			
		});
	});

	function capture(){
		alert('imin');
		html2canvas($("#sc"), {
			  onrendered: function(canvas) {

			    var img = canvas.toDataURL();
			    alert(img);
			    
			    // img 데이터 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAALnCAYAAACncBEoAAAgAElEQ…GgcaASBzQgt/fw3lcJZgPTONA40DjQOLALONCXYfjy/w8Gd/MrFODziAAAAABJRU5ErkJggg==" 

			    $("#sc").html('<img src=' + img + '>');    // section2 영역에 section1 을 이미지 capture 내용이 보여짐
			    
			  

			  }
			});
	}

</script>
</head>
<body><a></a>

<select id="fileselect">
	
	<c:forEach var="file" items="${filelist}">
		<option>
			${file.originalfilename }
		</option>
	</c:forEach>	
</select>
<!-- ./resources/ViewerJS/#../ViewerJS/오하라.odt ${selectedfile.originalfilename} -->
<div id="sc">
<iframe id="viewer" src="./resources/ViewerJS/#../ViewerJS/${selectedfile.savedfilename}" width="800" height="1000" allowfullscreen="" webkitallowfullscreen=""></iframe>
${selectedfile.savedfilename}
</div>
<a href="./resources/ViewerJS/Spring도서관리.pdf">으악</a>
<form action="addfile" method ="post" enctype="multipart/form-data">
	<table>
		<tr>
			<td>파일</td>
			<td>
				<input type="file" name="upload"> 
			</td>
			<td>
				<input type="submit" value="제출">
			</td>
		</tr>
	</table>
</form>
<a href="javascript:capture()">캡챠</a>
</body>
</html>