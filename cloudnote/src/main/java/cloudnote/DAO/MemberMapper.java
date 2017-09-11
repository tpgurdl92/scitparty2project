package cloudnote.DAO;

import java.util.ArrayList;

import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;

public interface MemberMapper {

	public MemberVO IDCheck(String m_id);
	
	public void AddMember(MemberVO member);
	
	public MemberVO Login(MemberVO member);
	
	public MemberVO SearchFriend(String m_id);
	
	public void ApplyFriend(String alpplier_id, String friend_id);

	public ArrayList<FriendVO> SearchApp(String m_id);
	
	
	public void ConsentFriend(String friend_id,String m_id);
	
	public ArrayList<String> ShowFriend(String m_id);
	
	public void ByeFriend(String m_id, String friend_id);
	
	public void ByeFriend2(String m_id, String friend_id);

}
