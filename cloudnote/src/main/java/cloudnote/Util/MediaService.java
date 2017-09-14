package cloudnote.Util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Base64.Encoder;

import javax.imageio.ImageIO;

import org.imgscalr.Scalr;

public class MediaService {

	public MediaService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String makeThumbnail(File file, String path) throws Exception { 
		// 저장된 원본파일로부터 BufferedImage 객체를 생성합니다. 
        BufferedImage srcImg = ImageIO.read(file);
		// 썸네일의 너비와 높이 입니다. 
		int dw = 144, dh = 130; 
		// 원본 이미지의 너비와 높이 입니다. 
		int ow = srcImg.getWidth(); 
		int oh = srcImg.getHeight(); 
		// 원본 너비를 기준으로 하여 썸네일의 비율로 높이를 계산합니다. 
		int nw = ow; int nh = (ow * dh) / dw; 
		// 계산된 높이가 원본보다 높다면 crop이 안되므로 
		// 원본 높이를 기준으로 썸네일의 비율로 너비를 계산합니다. 
		if(nh > oh) { 
			nw = (oh * dw) / dh; nh = oh; 	
		} 
		// 계산된 크기로 원본이미지를 가운데에서 crop 합니다. 
		BufferedImage cropImg = Scalr.crop(srcImg, (ow-nw)/2, (oh-nh)/2, nw, nh); 
		// crop된 이미지로 썸네일을 생성합니다. 
		BufferedImage destImg = Scalr.resize(cropImg, dw, dh); 
		// 썸네일을 저장합니다. 이미지 이름 앞에 "THUMB_" 를 붙여 표시했습니다. 
		String thumbName = "THUMB_" + file.getName();
		File thumbFile = new File(path + thumbName);
		int pos = thumbName.lastIndexOf( "." );
		String ext = thumbName.substring( pos + 1 );
		ImageIO.write(destImg, ext, thumbFile);
		thumbFile.createNewFile();
		return thumbName;
	}
	
	public String fileToBinary(String path, String filename)
    {						
		byte[] buf = null;
		try {
			File file = new File(path+filename);
			//이미지 파일 전송을 위해 byte[]로 변환
			FileInputStream in = new FileInputStream(file);
			System.out.println(file.length());
			ByteArrayOutputStream bout = new ByteArrayOutputStream();			
			byte[] by = new byte[(int)file.length()];
			int len = 0;					
			while( (len=in.read(by)) != -1)	bout.write(by, 0, len);
			// byte[] 로 변환 
			buf = bout.toByteArray();
	       
			bout.close();
			in.close();						
		} catch (IOException e) {
			e.printStackTrace();
		}
		 Encoder encoder = Base64.getEncoder();
	     String encodedString = encoder.encodeToString(buf);
        return encodedString;
    }

}
