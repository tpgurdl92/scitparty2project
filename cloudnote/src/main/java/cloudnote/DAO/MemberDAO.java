package cloudnote.DAO;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;


	

@Repository
public class MemberDAO {

	@Autowired
	SqlSession sqlsession;
	
	public MemberVO IDCheck(String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		MemberVO member=mapper.IDCheck(m_id);
		return member;
	}
	
	
	public void AddMember(MemberVO member){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		mapper.AddMember(member);
	}
	
	public MemberVO Login(MemberVO member){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		MemberVO resultmember =mapper.Login(member);
		return resultmember;
	}
	/**
	 * 친구찾기
	 * @param m_id
	 * @return
	 */
	public MemberVO SearchFriend(HashMap<String, String> put){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		MemberVO member =mapper.SearchFriend(put);
		return member;
	}
	
	public void ApplyFriend(String applier_id, String friend_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		mapper.ApplyFriend(applier_id, friend_id);
		
	}
	
	public ArrayList<FriendVO> SearchApp(String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		ArrayList<FriendVO> applist =mapper.SearchApp(m_id);
		return applist;
	}
	
	public ArrayList<FriendVO> SearchMyApp(String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		ArrayList<FriendVO> myapplist = mapper.SearchMyApp(m_id);
		return myapplist;
		
	}
	
	public void ConsentFriend(String friend_id, String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		mapper.ConsentFriend(friend_id, m_id);
		
	}
	
	public void DeclineApp(String friend_id, String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		mapper.DeclineApp(friend_id, m_id);
		
	}
	
	public void CancelApp(String m_id, String friend_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		mapper.CancelApp(m_id, friend_id);
	}
	
	public ArrayList<String> ShowFriend(String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		ArrayList<String> friendlist = mapper.ShowFriend(m_id);
		return friendlist;
		
	}
	
	public void ByeFriend(String m_id,String friend_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		
		mapper.ByeFriend(m_id, friend_id);
		mapper.ByeFriend2(m_id, friend_id);
	}
	
	
}
