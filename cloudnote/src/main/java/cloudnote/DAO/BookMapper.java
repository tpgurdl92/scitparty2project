package cloudnote.DAO;

import java.util.ArrayList;

import cloudnote.VO.BookVO;
import cloudnote.VO.BookselfVO;
import cloudnote.VO.PageVO;

public interface BookMapper {

	public ArrayList<BookVO> GetBookList(int m_num);
	
	public ArrayList<BookselfVO> GetBookselfList(int m_num);
	
	public ArrayList<BookVO> OpenBookself(int bookselfnum);
	
	public void WriteNewBook(BookVO book);
	
	public int GetMakedBookNum(int m_num);
	
	public BookVO GetBookInfo(int booknum);
	
	public void AddPage(int booknum, int pagenum);
	
	public PageVO OpenBook(int booknum, int pagenum);
	
	public PageVO NextPage(int booknum, int pagenum);
	
	public ArrayList<Integer> OpenSharedBookself(String m_id);
	
}
