package cloudnote.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import cloudnote.DAO.MemberDAO;
import cloudnote.Util.FileService;
import cloudnote.VO.MemberVO;

@Controller	
public class JoinController {
	
	@Autowired
	MemberDAO mdao;
	
	@RequestMapping(value="joinform", method = RequestMethod.GET)
	public String JoinForm(){
		return "joinform";
	}
	
	@RequestMapping(value="idcheck", method=RequestMethod.GET)
	public @ResponseBody String IDCheck(String m_id){
		MemberVO member=mdao.IDCheck(m_id);
		String result="";
		if(member!=null){
			result="중복된 아이디입니다.";
		}else{
			result="사용가능한 아이디입니다.";
		}
		return result;
	}
	
	String uploadpath ="/Users/박세혁/git/scitparty2project/cloudnote/src/main/webapp/resources/profileimage";
	@RequestMapping(value="addmember", method = RequestMethod.POST)
	public String AddMember(MemberVO member, MultipartFile upload){
		
		if(!upload.isEmpty()){
			System.out.println("upload 들어옴");
			String m_savedfilename = FileService.saveFile(upload, uploadpath);
			member.setM_savedfilename(m_savedfilename);
			String m_originalfilename = upload.getOriginalFilename();
			member.setM_originalfilename(m_originalfilename);
		}
		System.out.println(member.toString());
		mdao.AddMember(member);
		//인터넷창에 완료메세지 띄우는 거 해보기
		return "index";
	}
	
	
	
}
