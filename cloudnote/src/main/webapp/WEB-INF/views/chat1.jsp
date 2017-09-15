<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">


      <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          ::-webkit-scrollbar {
              display:none;
          }
          .collection { cursor: pointer;}
        </style>
    </head>

    <body>
      <div class="row">
        <div class="col s3" style="padding:0; margin:0; overflow-y:auto; overflow-x:hidden; height:1080px; -ms-overflow-style: none;">
          <!-- Grey navigation panel -->
          <ul class="collection"  style="padding:0; margin:0;"></ul>
        </div>

    <div class="col s9" style="padding:0; margin:0; max-height:1080px;">
      <!-- Teal page content  -->
      <nav>
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="#!" class="breadcrumb"><span id="modifyDate"></span></a>

          </div>
        </div>
      </nav>

      <textarea style="height:1000px;" class="textarea" width="100%" rows="1000" placeholder="새로운 메모를 입력해보세요^^"></textarea>
    </div>

    <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>

    <div class="preloader-wrapper big active" style="position:absolute; z-index:1000; left:50%; top:50%; display:none;">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
  </div>

      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
		
		<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
			<script>
			var auth, database, userInfo;
			  
			 

			  // Initialize Firebase
			  var config = {
				apiKey: "AIzaSyA3aB84ETjyb8JpIkTDjocaHZB8fHiSNlk",
				authDomain: "memowebapp-6cbab.firebaseapp.com",
				databaseURL: "https://memowebapp-6cbab.firebaseio.com",
				projectId: "memowebapp-6cbab",
				storageBucket: "",
				messagingSenderId: "53038695008"
			  };
			  firebase.initializeApp(config);
			
			  
			  
			
			auth= firebase.auth();
			database = firebase.database();
			var authProvider = new firebase.auth.GoogleAuthProvider();
			
			auth.onAuthStateChanged(function(user){
				if( user){
				//인증성공
					console.log("success");
					console.log(user);
					//메모리스트 출력
					userInfo = user;
					get_memo_list();
				}else{
				//인증실패
						auth.signInWithPopup(authProvider);
				}
			
			});

			function get_memo_list(){
				var memoRef = database.ref("memos"+userInfo.uid);
				memoRef.on('child_added', on_child_added);
			}
			
			function on_child_added(data){
				/*
				{
				
					txt : '메모에 본문',
					title : '메모에 타이틀'
					updateDate : '업데이트 날짜'
					createData : '생성한 날짜'
				}
				
				
				*/
				
				
				var key = data.key;
				var memoData = data.val();
				var txt =memoData.txt;
				var title = memoData.title;
				var firstTxt = txt.substr(0,1);
				
				console.log(data.val());
				var html =
         "<li id='"+key+"' class=\"collection-item avatar\" onclick=\"fn_get_data_one(this.id);\" >" +
         "<i class=\"material-icons circle red\">" + firstTxt + "</i>" +
         "<span class=\"title\">" + title + "</span>" +
         "<p class='txt'>" + txt + "<br>" +
         "</p>" +
         "</li>";


		 $(".collection").append(html);
			}
	
		function save_data(){
				var memoRef = database.ref("memos"+userInfo.uid);
				var txt =$(".textarea").val();
				
				//push
				memoRef.push({
					txt : txt,	
					createData : new Date().getTime()
				
				});
		}


	$(function(){
		$(".textarea").blur(function(){
			save_data();
		});
	
	});
			</script>
    </body>
  </html>
