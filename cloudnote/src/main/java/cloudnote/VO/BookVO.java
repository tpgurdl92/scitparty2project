package cloudnote.VO;

public class BookVO {

	private int b_num;
	private int b_pagenum;
	private int b_authornum;
	private String b_writedate;
	//b_shareox 0이면 '공유안함' 1이면 '공유함'
	private String b_shareox;
	
	public BookVO(){}
	
	
	

	public BookVO(int b_num, int b_pagenum, int b_authornum, String b_writedate, String b_shareox) {
		super();
		this.b_num = b_num;
		this.b_pagenum = b_pagenum;
		this.b_authornum = b_authornum;
		this.b_writedate = b_writedate;
		this.b_shareox = b_shareox;
	}




	public String b_getshareOX() {
		return b_shareox;
	}




	public void setb_shareOX(String b_shareox) {
		this.b_shareox = b_shareox;
	}




	public int getB_num() {
		return b_num;
	}



	public void setB_num(int b_num) {
		this.b_num = b_num;
	}



	public int getB_pagenum() {
		return b_pagenum;
	}



	public void setB_pagenum(int b_pagenum) {
		this.b_pagenum = b_pagenum;
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



	@Override
	public String toString() {
		return "BookVO [b_num=" + b_num + ", b_pagenum=" + b_pagenum + ", b_authornum=" + b_authornum + ", b_writedate="
				+ b_writedate + "]";
	}
	
	
	
}
