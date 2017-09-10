package cloudnote.VO;

public class BookselfVO {

	private int bs_num;
	private int bs_membernum;
	private int bs_booknum;
	
	
	
	public BookselfVO(){}
	
	public BookselfVO(int bs_num, int bs_membernum, int bs_booknum) {
		super();
		this.bs_num = bs_num;
		this.bs_membernum = bs_membernum;
		this.bs_booknum = bs_booknum;
	}





	public int getBs_num() {
		return bs_num;
	}





	public void setBs_num(int bs_num) {
		this.bs_num = bs_num;
	}





	public int getBs_membernum() {
		return bs_membernum;
	}





	public void setBs_membernum(int bs_membernum) {
		this.bs_membernum = bs_membernum;
	}





	public int getBs_booknum() {
		return bs_booknum;
	}





	public void setBs_booknum(int bs_booknum) {
		this.bs_booknum = bs_booknum;
	}





	@Override
	public String toString() {
		return "BookselfVO [bs_num=" + bs_num + ", bs_membernum=" + bs_membernum + ", bs_booknum=" + bs_booknum + "]";
	}
	
	
	
}
