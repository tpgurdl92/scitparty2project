package cloudnote.VO;

public class BookselfVO {

	private int bs_num;
	private String bs_title;
	private int bs_membernum;
	
	
	
	public BookselfVO(){}



	public BookselfVO(int bs_num, String bs_title, int bs_membernum) {
		super();
		this.bs_num = bs_num;
		this.bs_title = bs_title;
		this.bs_membernum = bs_membernum;
	}



	public int getBs_num() {
		return bs_num;
	}



	public void setBs_num(int bs_num) {
		this.bs_num = bs_num;
	}



	public String getBs_title() {
		return bs_title;
	}



	public void setBs_title(String bs_title) {
		this.bs_title = bs_title;
	}



	public int getBs_membernum() {
		return bs_membernum;
	}



	public void setBs_membernum(int bs_membernum) {
		this.bs_membernum = bs_membernum;
	}



	@Override
	public String toString() {
		return "BookselfVO [bs_num=" + bs_num + ", bs_title=" + bs_title + ", bs_membernum=" + bs_membernum + "]";
	}
	
	
	
}
