package cloudnote.DAO;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cloudnote.VO.DocumentVO;

@Repository
public class DocDAO {
	
	@Autowired
	SqlSession sqlsession;
	
	
	public void DocUpload(DocumentVO doc){
		DocMapper mapper =sqlsession.getMapper(DocMapper.class);
		mapper.DocUpload(doc);
		
	}
	
	public ArrayList<DocumentVO> GetDocList(int d_m_num){
		DocMapper mapper =sqlsession.getMapper(DocMapper.class);
		ArrayList<DocumentVO> doclist =mapper.GetDocList(d_m_num);
		return doclist;
	}
}
