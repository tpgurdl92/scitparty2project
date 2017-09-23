package cloudnote.Editor;

import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;



import cloudnote.DAO.DocDAO;
import cloudnote.Util.FileService;
import cloudnote.VO.BookVO;
import cloudnote.VO.DocumentVO;
import cloudnote.VO.MemberVO;

@Controller
public class ViewerController {

	@Autowired
	DocDAO ddao;
	
	//문서업로드하기
	String uploadpath ="/Users/SCITMaster/git/scitparty2project/cloudnote/src/main/webapp/resources/document";
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
	@ResponseBody
	public ArrayList<DocumentVO> getDocList(HttpSession session, ModelMap model){
		int d_m_num=((MemberVO)session.getAttribute("member")).getM_num();
		ArrayList<DocumentVO> doclist=ddao.GetDocList(d_m_num);		
		return doclist;
	}
	
	@RequestMapping(value="getselectedfile1", method=RequestMethod.GET)
	public String getselectedfile2(@RequestParam String d_originalfilename,HttpSession session){
		int m_num=((MemberVO)session.getAttribute("member")).getM_num();
		DocumentVO doc = new DocumentVO();
		doc.setD_m_num(m_num);
		doc.setD_originalfilename(d_originalfilename);
		System.out.println(doc);
		return "note";
	}
	
	
	
}
