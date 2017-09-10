package cloudnote.VO;

public class FriendVO {
	private String a_request_m_id;
	private String a_response_m_id;
	private String a_consent;
	private String b_request_m_id;
	private String b_response_m_id;
	private String b_consent;
	
	public FriendVO(){}
	
	
	public FriendVO(String a_request_m_id, String a_response_m_id, String a_consent, String b_request_m_id,
			String b_response_m_id, String b_consent) {
		super();
		this.a_request_m_id = a_request_m_id;
		this.a_response_m_id = a_response_m_id;
		this.a_consent = a_consent;
		this.b_request_m_id = b_request_m_id;
		this.b_response_m_id = b_response_m_id;
		this.b_consent = b_consent;
	}






	public String getA_request_m_id() {
		return a_request_m_id;
	}






	public void setA_request_m_id(String a_request_m_id) {
		this.a_request_m_id = a_request_m_id;
	}






	public String getA_response_m_id() {
		return a_response_m_id;
	}






	public void setA_response_m_id(String a_response_m_id) {
		this.a_response_m_id = a_response_m_id;
	}






	public String getA_consent() {
		return a_consent;
	}






	public void setA_consent(String a_consent) {
		this.a_consent = a_consent;
	}






	public String getB_request_m_id() {
		return b_request_m_id;
	}






	public void setB_request_m_id(String b_request_m_id) {
		this.b_request_m_id = b_request_m_id;
	}






	public String getB_response_m_id() {
		return b_response_m_id;
	}






	public void setB_response_m_id(String b_response_m_id) {
		this.b_response_m_id = b_response_m_id;
	}






	public String getB_consent() {
		return b_consent;
	}






	public void setB_consent(String b_consent) {
		this.b_consent = b_consent;
	}






	@Override
	public String toString() {
		return "FriendVO [a_request_m_id=" + a_request_m_id + ", a_response_m_id=" + a_response_m_id + ", a_consent="
				+ a_consent + ", b_request_m_id=" + b_request_m_id + ", b_response_m_id=" + b_response_m_id
				+ ", b_consent=" + b_consent + "]";
	}

	
	
	
	
	
	
}
