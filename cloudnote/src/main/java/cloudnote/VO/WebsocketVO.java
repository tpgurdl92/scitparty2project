package cloudnote.VO;

import org.springframework.web.socket.WebSocketSession;

public class WebsocketVO {
	private String roomNum;
	private WebSocketSession session;
	
	public WebsocketVO(String roomNum, WebSocketSession session) {
		super();
		this.roomNum = roomNum;
		this.session = session;
	}//cons

	public String getRoomNum() {
		return roomNum;
	}

	public void setRoomNum(String roomNum) {
		this.roomNum = roomNum;
	}

	public WebSocketSession getSession() {
		return session;
	}

	public void setSession(WebSocketSession session) {
		this.session = session;
	}

	@Override
	public String toString() {
		return "WebsocketVO [roomNum=" + roomNum + ", session=" + session + "]";
	}
	
}//class
