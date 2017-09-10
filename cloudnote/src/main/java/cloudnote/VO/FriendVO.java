package cloudnote.VO;

public class FriendVO {
	private int a_request_membernum;
	private int a_response_membernum;
	private String a_consent;
	private int b_request_membernum;
	private int b_response_membernum;
	private String b_consent;
	
	public FriendVO(){}
	
	
	public FriendVO(int a_request_membernum, int a_response_membernum, String a_consent, int b_request_membernum,
			int b_response_membernum, String b_consent) {
		super();
		this.a_request_membernum = a_request_membernum;
		this.a_response_membernum = a_response_membernum;
		this.a_consent = a_consent;
		this.b_request_membernum = b_request_membernum;
		this.b_response_membernum = b_response_membernum;
		this.b_consent = b_consent;
	}




	public int getA_request_membernum() {
		return a_request_membernum;
	}




	public void setA_request_membernum(int a_request_membernum) {
		this.a_request_membernum = a_request_membernum;
	}




	public int getA_response_membernum() {
		return a_response_membernum;
	}




	public void setA_response_membernum(int a_response_membernum) {
		this.a_response_membernum = a_response_membernum;
	}




	public String getA_consent() {
		return a_consent;
	}




	public void setA_consent(String a_consent) {
		this.a_consent = a_consent;
	}




	public int getB_request_membernum() {
		return b_request_membernum;
	}




	public void setB_request_membernum(int b_request_membernum) {
		this.b_request_membernum = b_request_membernum;
	}




	public int getB_response_membernum() {
		return b_response_membernum;
	}




	public void setB_response_membernum(int b_response_membernum) {
		this.b_response_membernum = b_response_membernum;
	}




	public String getB_consent() {
		return b_consent;
	}




	public void setB_consent(String b_consent) {
		this.b_consent = b_consent;
	}




	@Override
	public String toString() {
		return "FriendVO [a_request_membernum=" + a_request_membernum + ", a_response_membernum=" + a_response_membernum
				+ ", a_consent=" + a_consent + ", b_request_membernum=" + b_request_membernum
				+ ", b_response_membernum=" + b_response_membernum + ", b_consent=" + b_consent + "]";
	}
	
	
}
