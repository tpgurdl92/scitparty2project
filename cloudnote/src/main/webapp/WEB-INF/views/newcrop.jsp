<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
#drawCanvas {
   position: relative;
   border: 1px solid #000;
   
}
</style>
<style type="text/css">
 .table {
        display: table;
        border-collapse: separate;
        border-spacing: 10px 50px;
    }
    .tableRow {
        display: table-row;
    }
    .tableCell {
        display: table-cell;
        vertical-align: top;
    }
    .box {
        border: 10px solid rgba(238, 238, 238, 0.6);
        background-color: rgba(238, 238, 238, 0.2);
    }
</style>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="./resources/js/tesseract.js"></script>

<script src="./resources/js/imgcrop.js"></script>

<script >
//지영이가 짠 필기인식 코드
if (window.addEventListener) {
      window.addEventListener('load', InitEvent, false);
   }

   var canvas, context, tool;

   function InitEvent (){
      //Canvas 객체를 탐색한다.
      canvas = document.getElementById('drawCanvas');
        if (!canvas) {
          alert('캔버스 객체를 찾을 수 없음');
          return;
        }
        if (!canvas.getContext) {
            alert('Drawing Contextf를 찾을 수 없음');
            return;
        }
      //2D Canvas Context를 가져온다.
      context = canvas.getContext('2d');
      if (!context) {
         alert('getContext() 함수를 호출 할 수 없음');
         return;
      }

      //tool_pencil 함수의 인스턴스를 생성한다.
      tool = new tool_pencil();

      //Canvas에 mousedown, mousemove, mouseup 이벤트 리스너를 추가한다.
      canvas.addEventListener('mousedown', ev_canvas, false);
      canvas.addEventListener('mousemove', ev_canvas, false);
      canvas.addEventListener('mouseup', ev_canvas, false);
   }
   
   //마우스 이동을 추적하여 그리기 작업을 수행한다.
   function tool_pencil() {
      var tool = this;
      this.started = false;
      
      //마우스를 누를때 그리기 작업을 시작한다.
      this.mousedown = function(ev) {
    	
         context.beginPath();
         context.moveTo(ev._x, ev._y);
         tool.started = true;
      };
      
      //마우스가 이동할 때(mousemove)마다 호출 된다.
      this.mousemove = function(ev) {
         if(tool.started) {
            context.lineTo(ev._x, ev._y);
            context.stroke();
         }
      };
      
      //마우스 좌측 버튼을 놓았을 때(mouseup) 호출 된다.
      this.mouseup = function(ev) {
         if(tool.started) {
            tool.mousemove(ev);
            tool.started = false;
         }
      };      
   }
   
   //canvas요소 내의 좌표를 결정한다.
   function ev_canvas(ev) {
      if(ev.layerX || ev.layerX == 0) {
         //Firefox 브라우저
         ev._x = ev.layerX;
         ev._y = ev.layerY;
      }
      else if(ev.offsetX || ev.offsetX == 0) {
         //Opera 브라우저
         ev._x = ev.offsetX;
         ev._y = ev.offsetY;
      }
      
      //tool의 이벤트 핸들러 호출한다.
      var func = tool[ev.type];
      if(func) {
         func(ev);
      }
   }

   //캔버스 데이터 보내는 함수
	function toDataURL() {
      var myImage = document.getElementById('myImage');
      myImage = canvas.toDataURL();
      runOCR(myImage);
   }
   

//이미지 select

	//이미지크로퍼!
	




 function runOCR(gg) {
    alert(gg);
	Tesseract.recognize(gg)
         .then(function(result) {
            document.getElementById("ocr_results")
                    .innerText = result.text;
         }).progress(function(result) {
            document.getElementById("ocr_status")
                    .innerText = result["status"] + " (" +
                        (result["progress"] * 100) + "%)";
        }).catch(function(err){
        	doucumnet.getElementById("ocr_err")
        	.innerText = console(err);
        });
}
	 



</script>


<body> 
 <div class="table">
                    
                        <input type="button" id="cropBttn" value="OCR">
                        <input type="button" id="ocrBttn" value="캡쳐">
                  
            <div class="tableRow">
                <div class="tableCell box">
                    <canvas id="panel" width="380" height="380"></canvas>
                    <canvas id="panel1" width="380" heigth="380"></canvas>
                </div>
                	<div id="container">
      				<canvas id="drawCanvas" width="400" height="300"></canvas>
  				 </div>  
  				 	<button onclick="toDataURL()">이미지로 변환</button>
   	
            </div>
        </div>
<div id="ocr_results"> </div>
<div id="ocr_status"> </div>
<div id="ocr_err"></div>

</body>
</html>