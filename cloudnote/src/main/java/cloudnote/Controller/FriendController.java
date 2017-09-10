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
	
	@RequestMapping(value="checkApp", method=RequestMethod.GET)
	public String CheckApplictaion(HttpSession session){
		 String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		 ArrayList<FriendVO> applist= mdao.SearchApp(m_id);
		 
		 return "";
	}
	
	@RequestMapping(value="consentFriend", method=RequestMethod.GET)
	public String ConsentFriend(HttpSession session, MemberVO friend){
		
		
		
		return "";
	}
	
	
	
	
	@RequestMapping(value="byefriend", method=RequestMethod.GET)
	public String ByeFriend(HttpSession session, String friendname){
		
		
		return "";
	}
	
	
}
