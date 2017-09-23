package cloudnote.VO;

import oracle.sql.BLOB;

public class PageVO {

	private int p_num;
	private int p_booknum;
	private int p_pagenum;
	private BLOB p_contents;
	private String writedate;
	
	
	public PageVO(){}
	
	
	public PageVO(int p_num, int p_booknum, int p_pagenum, BLOB p_contents, String writedate) {
		super();
		this.p_num = p_num;
		this.p_booknum = p_booknum;
		this.p_pagenum = p_pagenum;
		this.p_contents = p_contents;
		this.writedate = writedate;
	}





	public int getP_num() {
		return p_num;
	}





	public void setP_num(int p_num) {
		this.p_num = p_num;
	}





	public int getP_booknum() {
		return p_booknum;
	}





	public void setP_booknum(int p_booknum) {
		this.p_booknum = p_booknum;
	}





	public int getP_pagenum() {
		return p_pagenum;
	}





	public void setP_pagenum(int p_pagenum) {
		this.p_pagenum = p_pagenum;
	}





	public BLOB getP_contents() {
		return p_contents;
	}





	public void setP_contents(BLOB p_contents) {
		this.p_contents = p_contents;
	}





	public String getWritedate() {
		return writedate;
	}





	public void setWritedate(String writedate) {
		this.writedate = writedate;
	}





	@Override
	public String toString() {
		return "PageVO [p_num=" + p_num + ", p_booknum=" + p_booknum + ", p_pagenum=" + p_pagenum + ", p_contents="
				+ p_contents + ", writedate=" + writedate + "]";
	}
	
	
	
	}
