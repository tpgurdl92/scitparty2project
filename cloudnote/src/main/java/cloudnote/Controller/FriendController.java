package cloudnote.Controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cloudnote.DAO.MemberDAO;
import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;

@Controller
public class FriendController {

	@Autowired
	MemberDAO mdao;
	
	@RequestMapping(value="searchfriend", method=RequestMethod.GET)
	public String SearchFriend(Model model,HttpSession session, String m_id){
		MemberVO friend=mdao.SearchFriend(m_id);
		model.addAttribute("frined", friend);
		return "";
	}
	
	/**
	 * ajax로 만들기. 수락버튼 누르면 신청완료로.
	 * @param session
	 * @param friend_id
	 * @return
	 */
	@RequestMapping(value="applyfriend", method=RequestMethod.GET)
	public @ResponseBody String ApplyFriend(HttpSession session, String friend_id){

		String applier_id=session.getId();
		mdao.ApplyFriend(applier_id, friend_id);
		
		return "신청완료";
	}
	/**
	 * 
	 * @param session 유저확인
	 * @param friendlist 나한테 친구신청한 명단을 담을 리스트
	 * @param model 친구리스트를 담을 모델
	 * @return
	 */
	@RequestMapping(value="checkApp", method=RequestMethod.GET)
	public String CheckApplictaion(HttpSession session, ArrayList<MemberVO> friendlist, Model model){
		 String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		 ArrayList<FriendVO> applist= mdao.SearchApp(m_id);
		 for(FriendVO friend : applist){
			 MemberVO member =mdao.IDCheck(friend.getA_request_m_id());
			 friendlist.add(member);
		 }
		 model.addAttribute("friendlist", friendlist);
		 return "";
	}
	
	@RequestMapping(value="consentFriend", method=RequestMethod.GET)
	public String ConsentFriend(HttpSession session, String friend_id){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.ConsentFriend(friend_id, m_id);
		
		
		return "";
	}
	
	@RequestMapping(value="showfriend", method=RequestMethod.GET)
	public String ShowFriend(HttpSession session, ArrayList<MemberVO> friendlist){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		ArrayList<String> namelist =mdao.ShowFriend(m_id);
		for(String name : namelist){
			MemberVO member =mdao.IDCheck(name);
			friendlist.add(member);
		}
		return "";
		
	}
	
	@RequestMapping(value="byefriend", method=RequestMethod.GET)
	public String ByeFriend(HttpSession session, String friend_id){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.ByeFriend(m_id, friend_id);
		
		return "";
	}
	
	
}
