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
	
	
	public ArrayList<BookselfVO> GetBookself(int m_num){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookselfVO> bookselflist=mapper.GetBookself(m_num);
		return bookselflist;
		
	}
	
	public ArrayList<BookVO> OpenBookself(int bookselfnum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookVO> booklist = mapper.OpenBookself(bookselfnum);
		return booklist;
	}
	
	public PageVO OpenBook(int booknum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		PageVO page =mapper.OpenBook(booknum);
		return page;
	}
	
	public PageVO NextPage(int booknum, int pagenum){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		PageVO page = mapper.NextPage(booknum, pagenum);
		return page;
	}
	
	
	
}
