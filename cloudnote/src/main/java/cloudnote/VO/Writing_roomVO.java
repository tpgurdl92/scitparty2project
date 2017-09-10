package cloudnote.VO;

public class Writing_roomVO {

	private int wr_roomnum;
	private String wr_roomtitle;
	private String wr_password;
	
	
	public Writing_roomVO(){}
	
	
	public Writing_roomVO(int wr_roomnum, String wr_roomtitle, String wr_password) {
		super();
		this.wr_roomnum = wr_roomnum;
		this.wr_roomtitle = wr_roomtitle;
		this.wr_password = wr_password;
	}





	public int getWr_roomnum() {
		return wr_roomnum;
	}





	public void setWr_roomnum(int wr_roomnum) {
		this.wr_roomnum = wr_roomnum;
	}





	public String getWr_roomtitle() {
		return wr_roomtitle;
	}





	public void setWr_roomtitle(String wr_roomtitle) {
		this.wr_roomtitle = wr_roomtitle;
	}





	public String getWr_password() {
		return wr_password;
	}





	public void setWr_password(String wr_password) {
		this.wr_password = wr_password;
	}





	@Override
	public String toString() {
		return "Writing_roomVO [wr_roomnum=" + wr_roomnum + ", wr_roomtitle=" + wr_roomtitle + ", wr_password="
				+ wr_password + "]";
	}
	
	
	
}
