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
	
	@RequestMapping(value="writenote", method=RequestMethod.GET)
	public String WriteNote(HttpSession session, Model model,String booknum){
		int m_num=((MemberVO)session.getAttribute("member")).getM_num();
		ArrayList<BookselfVO> bookselflist=bdao.GetBookselfList(m_num);
		session.setAttribute("bookselflist", bookselflist);
		return "bookshelf";
	}
	
	
	@RequestMapping(value="bookselflist", method=RequestMethod.GET)
	public String BookSelfList(HttpSession session,Model model){
		ArrayList<BookselfVO> bookselflist= bdao.GetBookselfList(((MemberVO)session.getAttribute("member")).getM_num());
		model.addAttribute("bookselflist", bookselflist);
		return "";
	}
	//책장추가하기
	
	//책장 지우기

	
	@RequestMapping(value="openbookself", method=RequestMethod.GET)
	public String OpenBookself(HttpSession session, Model model, int bookselfnum){
		ArrayList<BookVO> booklist = bdao.OpenBookself(bookselfnum);
		model.addAttribute("booklist", booklist);
		return "inBookshelf";
	}
	//기존에 있는 책 읽기모드로 열기(첫페이지로 열거당)그리고 2페이지씩 본당.
	@RequestMapping(value="openbook", method=RequestMethod.GET)
	public String OpenBook(HttpSession session, Model model,int booknum,int pagenum){
		PageVO page = bdao.OpenBook(booknum, pagenum);
		PageVO page2 =bdao.OpenBook(booknum, pagenum+1);
		BookVO book= bdao.GetBookInfo(booknum);
		model.addAttribute("book", book);
		model.addAttribute("page", page);
		model.addAttribute("2rdpage", page2);
		return "";
	}
	//기존에 있는 책 필기모드로 열기
	@RequestMapping(value="writebook", method=RequestMethod.GET)
	public String WriteBook(HttpSession session, Model model,int booknum, int bookmark){
		PageVO page = bdao.OpenBook(booknum, bookmark);
		model.addAttribute("booknum", booknum);
		model.addAttribute("page", page);
		return "";
	}
	
	@RequestMapping(value="newbookform", method=RequestMethod.GET)
	public String NewBookForm(HttpSession session, int bookselfnum){
		session.setAttribute("bookselfnum", bookselfnum);
		return "newbookform";
	}
	
	@RequestMapping(value="writenewbook", method=RequestMethod.GET)
	public String WriteNewBook(HttpSession session, BookVO book){
		int b_authornum=((MemberVO)session.getAttribute("member")).getM_num();
	//book VO에 추가정보세팅해주세요.
		book.setB_authornum(b_authornum);
	//세팅세팅	
		bdao.WriteNewBook(book);
		int booknum=bdao.GetMakedBookNum(b_authornum);
		bdao.AddPage(booknum, 1);
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
	
	@RequestMapping(value="sharedbook", method=RequestMethod.GET)
	public String SharingBox(HttpSession session){
		String m_id=((MemberVO)session.getAttribute("member")).getM_id();
		ArrayList<Integer> sharedbooklist = bdao.OpenSharedBookself(m_id);
		session.setAttribute("sharedbooklist", sharedbooklist);
		return "";
		
	}
}
