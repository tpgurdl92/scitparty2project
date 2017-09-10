package cloudnote.VO;

public class MemberVO {
	private int m_num;
	private String m_id;
	private String m_password;
	private String m_name;
	private String m_phone;
	private String m_email;
	private String m_birthdate;
	
	
	
	public MemberVO(){}
	
	public MemberVO(int m_num, String m_id, String m_password, String m_name, String m_phone, String m_email,
			String m_birthdate) {
		super();
		this.m_num = m_num;
		this.m_id = m_id;
		this.m_password = m_password;
		this.m_name = m_name;
		this.m_phone = m_phone;
		this.m_email = m_email;
		this.m_birthdate = m_birthdate;
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





	@Override
	public String toString() {
		return "MemberVO [m_num=" + m_num + ", m_id=" + m_id + ", m_password=" + m_password + ", m_name=" + m_name
				+ ", m_phone=" + m_phone + ", m_email=" + m_email + ", m_birthdate=" + m_birthdate + "]";
	}
	
	
	
}
