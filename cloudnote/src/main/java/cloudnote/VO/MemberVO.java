package cloudnote.VO;

public class MemberVO {
	private int m_num;
	private String m_id;
	private String m_password;
	private String m_name;
	private String m_phone;
	private String m_email;
	private String m_birthdate;
	private String m_originalfilename;
	private String m_savedfilename;
	
	
	public MemberVO(){}


	
	//논리명 = 테이블에 대한 설명.
	
	public MemberVO(int m_num, String m_id, String m_password, String m_name, String m_phone, String m_email,
			String m_birthdate, String m_originalfilename, String m_savedfilename) {
		super();
		this.m_num = m_num;
		this.m_id = m_id;
		this.m_password = m_password;
		this.m_name = m_name;
		this.m_phone = m_phone;
		this.m_email = m_email;
		this.m_birthdate = m_birthdate;
		this.m_originalfilename = m_originalfilename;
		this.m_savedfilename = m_savedfilename;
	}





	public int getM_num() {
		return m_num;
	}





	public void setM_num(int m_num) {
		this.m_num = m_num;
	}





	public String getM_id() {
		return m_id;
	}





	public void setM_id(String m_id) {
		this.m_id = m_id;
	}





	public String getM_password() {
		return m_password;
	}





	public void setM_password(String m_password) {
		this.m_password = m_password;
	}





	public String getM_name() {
		return m_name;
	}





	public void setM_name(String m_name) {
		this.m_name = m_name;
	}





	public String getM_phone() {
		return m_phone;
	}





	public void setM_phone(String m_phone) {
		this.m_phone = m_phone;
	}





	public String getM_email() {
		return m_email;
	}





	public void setM_email(String m_email) {
		this.m_email = m_email;
	}





	public String getM_birthdate() {
		return m_birthdate;
	}





	public void setM_birthdate(String m_birthdate) {
		this.m_birthdate = m_birthdate;
	}





	public String getM_originalfilename() {
		return m_originalfilename;
	}





	public void setM_originalfilename(String m_originalfilename) {
		this.m_originalfilename = m_originalfilename;
	}





	public String getM_savedfilename() {
		return m_savedfilename;
	}





	public void setM_savedfilename(String m_savedfilename) {
		this.m_savedfilename = m_savedfilename;
	}





	@Override
	public String toString() {
		return "MemberVO [m_num=" + m_num + ", m_id=" + m_id + ", m_password=" + m_password + ", m_name=" + m_name
				+ ", m_phone=" + m_phone + ", m_email=" + m_email + ", m_birthdate=" + m_birthdate
				+ ", m_originalfilename=" + m_originalfilename + ", m_savedfilename=" + m_savedfilename + "]";
	}


	
	
	
	
}
