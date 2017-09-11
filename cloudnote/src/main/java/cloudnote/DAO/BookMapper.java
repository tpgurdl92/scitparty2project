package cloudnote.DAO;

import java.util.ArrayList;

import cloudnote.VO.BookselfVO;

public interface BookMapper {

	public ArrayList<BookselfVO> GetBookself(int m_num);
}
