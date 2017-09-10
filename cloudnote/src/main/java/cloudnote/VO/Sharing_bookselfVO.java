package cloudnote.VO;

public class Sharing_bookselfVO {

	private int s_num;
	private int s_accept_m_num;
	private int s_give_m_num;
	private String s_give_m_name;
	private int s_sharingbooknum;
	private String s_sharingbooktitle;
	
	
	public Sharing_bookselfVO(){}
	
	
	public Sharing_bookselfVO(int s_num, int s_accept_m_num, int s_give_m_num, String s_give_m_name,
			int s_sharingbooknum, String s_sharingbooktitle) {
		super();
		this.s_num = s_num;
		this.s_accept_m_num = s_accept_m_num;
		this.s_give_m_num = s_give_m_num;
		this.s_give_m_name = s_give_m_name;
		this.s_sharingbooknum = s_sharingbooknum;
		this.s_sharingbooktitle = s_sharingbooktitle;
	}





	public int getS_num() {
		return s_num;
	}





	public void setS_num(int s_num) {
		this.s_num = s_num;
	}





	public int getS_accept_m_num() {
		return s_accept_m_num;
	}





	public void setS_accept_m_num(int s_accept_m_num) {
		this.s_accept_m_num = s_accept_m_num;
	}





	public int getS_give_m_num() {
		return s_give_m_num;
	}





	public void setS_give_m_num(int s_give_m_num) {
		this.s_give_m_num = s_give_m_num;
	}





	public String getS_give_m_name() {
		return s_give_m_name;
	}





	public void setS_give_m_name(String s_give_m_name) {
		this.s_give_m_name = s_give_m_name;
	}





	public int getS_sharingbooknum() {
		return s_sharingbooknum;
	}





	public void setS_sharingbooknum(int s_sharingbooknum) {
		this.s_sharingbooknum = s_sharingbooknum;
	}





	public String getS_sharingbooktitle() {
		return s_sharingbooktitle;
	}





	public void setS_sharingbooktitle(String s_sharingbooktitle) {
		this.s_sharingbooktitle = s_sharingbooktitle;
	}





	@Override
	public String toString() {
		return "Sharing_bookselfVO [s_num=" + s_num + ", s_accept_m_num=" + s_accept_m_num + ", s_give_m_num="
				+ s_give_m_num + ", s_give_m_name=" + s_give_m_name + ", s_sharingbooknum=" + s_sharingbooknum
				+ ", s_sharingbooktitle=" + s_sharingbooktitle + "]";
	}
	
	
	
	
}
