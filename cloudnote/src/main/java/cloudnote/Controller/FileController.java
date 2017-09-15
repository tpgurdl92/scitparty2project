package cloudnote.Controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import cloudnote.DAO.DocDAO;
import cloudnote.Util.FileService;
import cloudnote.VO.DocumentVO;
import cloudnote.VO.MemberVO;

@Controller
public class FileController {

	@Autowired
	DocDAO ddao;
	
	//문서업로드하기
	String uploadpath ="/Users/박세혁/git/scitparty2project/cloudnote/src/main/webapp/resources/document";
	@RequestMapping(value="docupload", method=RequestMethod.GET)
	public String DocUpload(DocumentVO doc, HttpSession session, MultipartFile upload){
		int m_num=((MemberVO)session.getAttribute("member")).getM_num();
		if(!upload.isEmpty()){
			String d_savedfilename= FileService.saveFile(upload, uploadpath);
			String d_originalfilename = upload.getOriginalFilename(); 
			doc.setD_originalfilename(d_originalfilename);
			doc.setD_savedfilename(d_savedfilename);
			ddao.DocUpload(doc);
		}
		
		
		return "note";
	}
	
	//내문서 가져오기
	@RequestMapping(value="getdoclist", method=RequestMethod.GET)
	public String getDocList(HttpSession session){
		int d_m_num=((MemberVO)session.getAttribute("member")).getM_num();
		ArrayList<DocumentVO> doclist=ddao.GetDocList(d_m_num);
		session.setAttribute("doclist", doclist);
		return "note";
	}
	
	
}
