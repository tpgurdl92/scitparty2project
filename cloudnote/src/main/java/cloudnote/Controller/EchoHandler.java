package cloudnote.Controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import cloudnote.VO.WebsocketVO;






public class EchoHandler extends TextWebSocketHandler{
	 private List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();
	    
	    
	    private static Logger logger = LoggerFactory.getLogger(EchoHandler.class);
	    private List<WebsocketVO> testList = new ArrayList<>();
	    private String roomNum;
	    
	    /**
	     * 클라이언트 연결 이후에 실행되는 메소드
	     */
	    @Override
	    public void afterConnectionEstablished(WebSocketSession session)
	            throws Exception {
	    	//맵을 쓸때 방법
//	        sessions.put(session.getId(), session);
	        //List쓸때 방법
	    	
	        sessionList.add(session);
	        //0번째 중괄호에 session.getId()을 넣으라는뜻
	        logger.info("{} 연결됨", session.getId()); 
	        
	    }
	    
	    
	    
	    /**
	     * 클라이언트가 웹소켓 서버로 메시지를 전송했을 때 실행되는 메소드
	     */
	    @Override
	    protected void handleTextMessage(WebSocketSession session,
	            TextMessage message) throws Exception {
	    	// '방번호'라는 단어가 붙어있으면 채팅방번호로 인식하고 따로 처리한다.
	    	if(message.getPayload().contains("방번호")){
	    		roomNum = message.getPayload().replaceAll("방번호", "");
	    		WebsocketVO vo = new WebsocketVO(roomNum, session);
	    		testList.add(vo); 
	    		return;
	    	}//if
	    	
	    	for (WebsocketVO data : testList) {
	    		
	    		int index = message.getPayload().indexOf("*");
	    		String msg = message.getPayload().substring(0, index);
	    		System.out.println("msg : " + msg);
	    		if(data.getRoomNum().equals(msg)){
	    			
	    					System.out.printf("보내는 인간 : %s, 받는 인간들: %s", session.getId(), data.getSession().getId());
	    					System.out.println();
	    				if(!session.getId().equals(data.getSession().getId())){
	    					System.out.println("보냇다");
	    					data.getSession().sendMessage(new TextMessage(message.getPayload().substring(index+1)));
	    					
	    				}//innerif
	    		  
	    				
	    		}//if
			}//for
	    	
	        //0번째에 session.getId() 1번째에 message.getPayload() 넣음
	        logger.info("{}로 부터 {} 받음", session.getId(), message.getPayload());
	    //    logger.info("{}로부터 {}받음", new String[]{session.getId(),message.getPayload()});
	        
	        //연결된 모든 클라이언트에게 메시지 전송 : 리스트 방법
	  /*      for(WebSocketSession sess : sessionList){
	            sess.sendMessage(new TextMessage("echo:" + message.getPayload()));
	        }*/
	        
	        // 맵 방법.
	        /*Iterator<String> sessionIds = sessions.ketSet().iterator();
	        String sessionId = "";
	        while (sessionIds.hasNext()) {
	            sessionId = sessionIds.next();
	            sessions.get(sessionId).sendMessage(new TextMessage("echo:" + message.getPayload()));
	            
	        }*/
	        
	        //연결되어 있는 모든 클라이언트들에게 메시지를 전송한다.
//	        session.sendMessage(new TextMessage("echo:" + message.getPayload()));
	    }
	    
	    /**
	     * 클라이언트 연결을 끊었을 때 실행되는 메소드
	     */
	    @Override
	    public void afterConnectionClosed(WebSocketSession session,
	            CloseStatus status) throws Exception {
	        //List 삭제
	        sessionList.remove(session);
	        
	        //Map 삭제
//	        sessions.remove(session.getId());
	        
	        logger.info("{} 연결 끊김.", session.getId());
	    }
}//class
