package cloudnote.DAO;

import java.util.ArrayList;
import java.util.HashMap;

import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;

public interface MemberMapper {

	public MemberVO IDCheck(String m_id);
	
	public void AddMember(MemberVO member);
	
	public MemberVO Login(MemberVO member);
	
	public MemberVO SearchFriend(HashMap<String, String> put);
	
	public void ApplyFriend(String alpplier_id, String friend_id);

	//친주받은거 찾기
	public ArrayList<FriendVO> SearchApp(String m_id);
	
	//내가친추한거 찾기
	public ArrayList<FriendVO> SearchMyApp(String m_id);
	
	public void ConsentFriend(String friend_id,String m_id);
	
	//친구신청 온 거 거절하기
	public void DeclineApp(String friend_id, String m_id);
	
	//요청 보낸거 취소하기
	public void CancelApp(String m_id, String friend_id);
	
	public ArrayList<String> ShowFriend(String m_id);
	
	public void ByeFriend(String m_id, String friend_id);
	
	public void ByeFriend2(String m_id, String friend_id);

}
