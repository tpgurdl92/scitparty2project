package cloudnote.DAO;

import java.util.ArrayList;

import cloudnote.VO.BookVO;
import cloudnote.VO.BookselfVO;
import cloudnote.VO.PageVO;

public interface BookMapper {

	public ArrayList<BookselfVO> GetBookself(int m_num);
	
	public ArrayList<BookVO> OpenBookself(int bookselfnum);
	
	public PageVO OpenBook(int booknum);
	
	public PageVO NextPage(int booknum, int pagenum);
	
}
