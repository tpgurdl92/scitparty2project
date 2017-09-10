package cloudnote.VO;

public class BookVO {

	private int b_num;
	private int b_pagenum;
	private int b_authornum;
	private String b_writedate;
	
	
	public BookVO(){}
	
	public BookVO(int b_num, int b_pagenum, int b_authornum, String b_writedate) {
		super();
		this.b_num = b_num;
		this.b_pagenum = b_pagenum;
		this.b_authornum = b_authornum;
		this.b_writedate = b_writedate;
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
