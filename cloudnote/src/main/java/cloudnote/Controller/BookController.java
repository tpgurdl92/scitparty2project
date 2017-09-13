package cloudnote.Controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cloudnote.DAO.BookDAO;
import cloudnote.VO.BookVO;
import cloudnote.VO.BookselfVO;
import cloudnote.VO.MemberVO;
import cloudnote.VO.PageVO;

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
	public String OpenBookself(HttpSession session, Model model, int bookselfnum){
		ArrayList<BookVO> booklist = bdao.OpenBookself(bookselfnum);
		model.addAttribute("booklist", booklist);
		return "";
	}
	
	@RequestMapping(value="openbook", method=RequestMethod.GET)
	public String OpenBook(HttpSession session, Model model,int booknum){
		PageVO page = bdao.OpenBook(booknum);
		model.addAttribute("booknum", booknum);
		model.addAttribute("page", page);
		return "";
	}
	
	@RequestMapping(value="nextpage", method=RequestMethod.GET)
	public String NextPage(HttpSession session, Model model,int booknum , int pagenum){
		PageVO page=bdao.NextPage(booknum, pagenum);
		model.addAttribute("booknum", booknum);
		model.addAttribute("page", page);
		return "";
	}
	
	@RequestMapping(value="addpage", method=RequestMethod.GET)
	public String AddPage(HttpSession session, Model model, int booknum, int pagenum){
		return "";
	}
}
