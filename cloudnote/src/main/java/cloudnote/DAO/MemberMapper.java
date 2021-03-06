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

}
