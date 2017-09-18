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
	@RequestMapping(value="docupload", method=RequestMethod.POST)
	public String DocUpload(DocumentVO doc, HttpSession session, MultipartFile upload){
		int m_num=((MemberVO)session.getAttribute("member")).getM_num();
		doc.setD_m_num(m_num);
		System.out.println("업로드들어옴");
		if(!upload.isEmpty()){
			String d_savedfilename= FileService.saveFile(upload, uploadpath);
			String d_originalfilename = upload.getOriginalFilename(); 
			doc.setD_originalfilename(d_originalfilename);
			doc.setD_savedfilename(d_savedfilename);
			ddao.DocUpload(doc);
		}
		
		
		return "redirect:getdoclist";
	}
	
	//내문서 가져오기
	@RequestMapping(value="getdoclist", method=RequestMethod.GET)
	public String getDocList(HttpSession session){
		System.out.println("독리스트");
		int d_m_num=((MemberVO)session.getAttribute("member")).getM_num();
		ArrayList<DocumentVO> doclist=ddao.GetDocList(d_m_num);
		session.setAttribute("doclist", doclist);
		return "note";
	}
	
	@RequestMapping(value="getselectedfile1", method=RequestMethod.GET)
	public String getselectedfile2(DocumentVO doc ,String d_originalfilename,HttpSession session){
		int m_num=((MemberVO)session.getAttribute("member")).getM_num();
		doc.setD_m_num(m_num);
		doc.setD_originalfilename(d_originalfilename);
		System.out.println(doc);
		DocumentVO resultdoc =ddao.GetSelectedDoc(doc);
		
		session.removeAttribute("selectedfile");
	
		session.setAttribute("selectedfile", resultdoc);
	
		return "note";
	}
	
	
	
}
