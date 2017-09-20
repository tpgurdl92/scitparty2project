package cloudnote.Controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cloudnote.DAO.BookDAO;
import cloudnote.DAO.MemberDAO;
import cloudnote.VO.BookVO;
import cloudnote.VO.FriendVO;
import cloudnote.VO.MemberVO;

@Controller
public class FriendController {

	@Autowired
	MemberDAO mdao;
	@Autowired
	BookDAO bdao;
	
	@RequestMapping(value="searchfriend", method=RequestMethod.GET)
	public String SearchFriend(Model model,HttpSession session, String searchType, String keyword){
		System.out.println(searchType+"   "+keyword);
		HashMap<String, String> put =new HashMap<String, String>();
		put.put("searchType", searchType);
		put.put("keyword", keyword);
		MemberVO friend=mdao.SearchFriend(put);
		model.addAttribute("friend", friend);
		if(friend!=null){
			System.out.println(friend.getM_num()+"친구번호");
		ArrayList<BookVO> booklist= bdao.GetBookList(friend.getM_num());
		model.addAttribute("booklist", booklist);
		}
		return "friend";
	}
	
	/**
	 * ajax로 만들기. 수락버튼 누르면 신청완료로.
	 * @param session
	 * @param friend_id
	 * @return
	 */
	@RequestMapping(value="applyfriend", method=RequestMethod.GET)
	public @ResponseBody String ApplyFriend(HttpSession session, String friend_id){
		
		String applier_id=((MemberVO)session.getAttribute("member")).getM_id();
		
		System.out.println(applier_id +"  "+friend_id);
		mdao.ApplyFriend(applier_id, friend_id);
		
		return friend_id;
	}
	/**
	 * 
	 * @param session 유저확인
	 * @param friendlist 나한테 친구신청한 명단을 담을 리스트
	 * @param model 친구리스트를 담을 모델
	 * @return
	 */
	@RequestMapping(value="checkapp", method=RequestMethod.GET)
	public String CheckApplictaion(HttpSession session, ArrayList<MemberVO> applist, Model model){
		 String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		 ArrayList<FriendVO> alist= mdao.SearchApp(m_id);
		 for(FriendVO friend : alist){
			 MemberVO member =mdao.IDCheck(friend.getA_request_m_id());
			 System.out.println("리스트담기"+member);
			 applist.add(member);
		 }
		 session.setAttribute("applist", applist);
		 return "redirect:checkmyapp";
	}
	
	@RequestMapping(value="checkmyapp", method = RequestMethod.GET)
	public String CheckMyApplication(HttpSession session, ArrayList<MemberVO> myapplist){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		ArrayList<FriendVO> friendlist =mdao.SearchMyApp(m_id);
	
		 for(FriendVO friend : friendlist){
			 MemberVO member =mdao.IDCheck(friend.getB_response_m_id());
			 myapplist.add(member);
		 }
		 session.setAttribute("myapplist", myapplist);
		 return "friendmanaging";
	
	}
	
	
	@RequestMapping(value="consentfriend", method=RequestMethod.GET)
	public @ResponseBody String ConsentFriend(HttpSession session, String friend_id){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.ConsentFriend(friend_id, m_id);
		
		
		return friend_id;
	}
	//거절하기
	@RequestMapping(value="declineapp", method=RequestMethod.GET)
	public @ResponseBody String DeclineApp(HttpSession session, String friend_id){		
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.DeclineApp(friend_id, m_id);
		
		return friend_id;
	}
	
	//내가 친구 신청한 거 취소하기
	@RequestMapping(value="cancelapp", method=RequestMethod.GET)
	public String CancelApp(HttpSession session, String friend_id){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.CancelApp(m_id, friend_id);
		
		return "redirect:checkapp";
		
	}
	
	@RequestMapping(value="showfriend", method=RequestMethod.GET)
	public String ShowFriend(HttpSession session, ArrayList<MemberVO> myfriendlist){
		System.out.println("들어는 옴");
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		ArrayList<String> namelist =mdao.ShowFriend(m_id);
		for(String name : namelist){
			MemberVO member =mdao.IDCheck(name);
			System.out.println("우리는 친구"+member);
			myfriendlist.add(member);
		}
		session.setAttribute("myfriendlist", myfriendlist);
		return "myfriend";
		
	}
	
	@RequestMapping(value="byefriend", method=RequestMethod.GET)
	public String ByeFriend(HttpSession session, String friend_id){
		String m_id = ((MemberVO)session.getAttribute("member")).getM_id();
		mdao.ByeFriend(m_id, friend_id);
		
		return "";
	}
	
	
}
