package cloudnote.Controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cloudnote.DAO.BookDAO;
import cloudnote.VO.BookselfVO;
import cloudnote.VO.MemberVO;

@Controller
public class BookController {
	
	@Autowired
	BookDAO bdao;
	
	@RequestMapping(value="bookselflist", method=RequestMethod.GET)
	public String BookSelfList(HttpSession session,Model model){
		ArrayList<BookselfVO> bookselflist= bdao.GetBookself(((MemberVO)session.getAttribute("member")).getM_num());
		model.addAttribute("bookselflist", bookselflist);
		return "";
	}
	
	
	@RequestMapping(value="openbookself", method=RequestMethod.GET)
	public String OpenBookself(HttpSession session, int bookselfnum){
		
		return "";
	}
	
	
}
