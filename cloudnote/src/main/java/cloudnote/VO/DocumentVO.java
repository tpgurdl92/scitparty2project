package cloudnote.VO;

public class DocumentVO {

	private int d_num;
	private String d_originalfilename;
	private String d_savedfilename;
	private	int d_m_num;
	
	
	
	
	
	public int getD_num() {
		return d_num;
	}





	public void setD_num(int d_num) {
		this.d_num = d_num;
	}





	public String getD_originalfilename() {
		return d_originalfilename;
	}





	public void setD_originalfilename(String d_originalfilename) {
		this.d_originalfilename = d_originalfilename;
	}





	public String getD_savedfilename() {
		return d_savedfilename;
	}





	public void setD_savedfilename(String d_savedfilename) {
		this.d_savedfilename = d_savedfilename;
	}





	public int getD_m_num() {
		return d_m_num;
	}





	public void setD_m_num(int d_m_num) {
		this.d_m_num = d_m_num;
	}





	@Override
	public String toString() {
		return "DocumentVO [d_num=" + d_num + ", d_originalfilename=" + d_originalfilename + ", d_savedfilename="
				+ d_savedfilename + ", d_m_num=" + d_m_num + "]";
	}
	
	
	
}
