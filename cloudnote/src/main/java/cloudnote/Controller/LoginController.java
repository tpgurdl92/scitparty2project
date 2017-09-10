package cloudnote.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cloudnote.DAO.MemberDAO;
import cloudnote.VO.MemberVO;

@Controller
public class LoginController {
	@Autowired
	MemberDAO mdao;
	
	
	@RequestMapping(value="login", method= RequestMethod.POST)
	public String Login(MemberVO member, HttpSession session){
		member =mdao.Login(member);
		//메세지 보내기.?
		session.setAttribute("member", member);
		
		return "home";
	}
	
	
	@RequestMapping(value="logout", method=RequestMethod.GET)
	public String Logout(HttpSession session){
		session.removeAttribute("member");
		return "home";
	}
	
	

}
