package cloudnote.VO;

public class BookVO {

	private int b_num;
	private String b_title;
	private int b_authornum;
	private String b_writedate;
	private int b_bookselfnum;
	private String b_shareox;
	
	public BookVO(){}

	
	
	
	
	public BookVO(int b_num, String b_title, int b_authornum, String b_writedate, int b_bookselfnum, String b_shareox) {
		super();
		this.b_num = b_num;
		this.b_title = b_title;
		this.b_authornum = b_authornum;
		this.b_writedate = b_writedate;
		this.b_bookselfnum = b_bookselfnum;
		this.b_shareox = b_shareox;
	}





	public int getB_num() {
		return b_num;
	}





	public void setB_num(int b_num) {
		this.b_num = b_num;
	}





	public String getB_title() {
		return b_title;
	}





	public void setB_title(String b_title) {
		this.b_title = b_title;
	}





	public int getB_authornum() {
		return b_authornum;
	}





	public void setB_authornum(int b_authornum) {
		this.b_authornum = b_authornum;
	}





	public String getB_writedate() {
		return b_writedate;
	}





	public void setB_writedate(String b_writedate) {
		this.b_writedate = b_writedate;
	}





	public int getB_bookselfnum() {
		return b_bookselfnum;
	}





	public void setB_bookselfnum(int b_bookselfnum) {
		this.b_bookselfnum = b_bookselfnum;
	}





	public String getB_shareox() {
		return b_shareox;
	}





	public void setB_shareox(String b_shareox) {
		this.b_shareox = b_shareox;
	}





	@Override
	public String toString() {
		return "BookVO [b_num=" + b_num + ", b_title=" + b_title + ", b_authornum=" + b_authornum + ", b_writedate="
				+ b_writedate + ", b_bookselfnum=" + b_bookselfnum + ", b_shareox=" + b_shareox + "]";
	}


	

}