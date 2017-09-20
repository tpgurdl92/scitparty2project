package cloudnote.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import cloudnote.VO.BookVO;
import cloudnote.VO.BookselfVO;
import cloudnote.VO.PageVO;


@Repository
public class BookDAO {
	
	@Autowired
	SqlSession sqlsession;
	
	
	public ArrayList<BookVO> GetBookList(int m_num){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookVO> booklist = mapper.GetBookList(m_num);
		return booklist;
	}
	
	public ArrayList<BookselfVO> GetBookselfList(int m_num){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookselfVO> bookselflist=mapper.GetBookselfList(m_num);
		return bookselflist;
		
	}
	
	public ArrayList<BookVO> OpenBookself(int bookselfnum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookVO> booklist = mapper.OpenBookself(bookselfnum);
		return booklist;
	}
	
	public void WriteNewBook(BookVO book){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		mapper.WriteNewBook(book);
	}
	
	public void AddPage(int booknum, int pagenum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		mapper.AddPage(booknum, pagenum);
	}
	
	public int GetMakedBookNum(int m_num){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		int booknum=mapper.GetMakedBookNum(m_num);
		return booknum;
	}
	
	
	public PageVO OpenBook(int booknum, int pagenum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		PageVO page =mapper.OpenBook(booknum, pagenum);
		return page;
	}
	
	public PageVO NextPage(int booknum, int pagenum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		PageVO page = mapper.NextPage(booknum, pagenum);
		return page;
	}
	
	public ArrayList<Integer> OpenSharedBookself(String m_id){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<Integer> sharedbooklist =mapper.OpenSharedBookself(m_id);
		return sharedbooklist;
	}
	
	public BookVO GetBookInfo(int booknum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		BookVO book=mapper.GetBookInfo(booknum);
		return book;
	}
	
	
}
