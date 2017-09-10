package cloudnote.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;

;

	

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
	public MemberVO SearchFriend(String m_id){
		MemberMapper mapper =sqlsession.getMapper(MemberMapper.class);
		MemberVO member =mapper.SearchFriend(m_id);
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
	
}
