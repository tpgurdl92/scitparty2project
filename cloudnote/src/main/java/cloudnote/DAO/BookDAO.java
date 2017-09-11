package cloudnote.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cloudnote.VO.BookselfVO;

@Repository
public class BookDAO {
	
	@Autowired
	SqlSession sqlsession;
	
	
	public ArrayList<BookselfVO> GetBookself(int m_num){
		BookMapper mapper = sqlsession.getMapper(BookMapper.class);
		ArrayList<BookselfVO> bookselflist=mapper.GetBookself(m_num);
		return bookselflist;
		
	}
	
	
	
}
