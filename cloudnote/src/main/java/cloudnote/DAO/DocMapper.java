package cloudnote.DAO;

import java.util.ArrayList;

import cloudnote.VO.DocumentVO;

public interface DocMapper {

	public void DocUpload(DocumentVO doc);
	
	public ArrayList<DocumentVO> GetDocList(int d_m_num);
}
