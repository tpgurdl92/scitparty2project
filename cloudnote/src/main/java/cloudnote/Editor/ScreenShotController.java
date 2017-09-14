package cloudnote.Editor;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ScreenShotController {

	protected final static Log logger = LogFactory.getLog(ScreenShotController.class);
    private static PhantomJSDriverService service;
    private WebDriver webDriver;
    protected static DesiredCapabilities dCaps;
    
    
	@RequestMapping(value = "/screenshot", method = RequestMethod.POST)
	public String showSupplementsPage(ModelMap model, HttpServletRequest request, HttpServletResponse response,
			String URL, String selected) {
		
		
		if (selected.equals("pdf")) makePdf(URL);
		else makePng(URL);
		
		return "screenshot";
	}
	
	private void makePng(String URL){
		service = new PhantomJSDriverService.Builder()
                .usingPhantomJSExecutable(new File("C://demo/phantomjs.exe"))
                .usingAnyFreePort().build();
        try {
            service.start();
        } catch (IOException e) {
            e.printStackTrace();
        }	
     
        dCaps = new DesiredCapabilities();
        dCaps.setJavascriptEnabled(true);
        dCaps.setCapability("takesScreenshot", true);

        webDriver = new RemoteWebDriver(service.getUrl(), dCaps);
        webDriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

       long iStart = System.currentTimeMillis();
        webDriver.get(URL);

        webDriver = new Augmenter().augment(webDriver);
        File srcFile = ((TakesScreenshot) webDriver)
                .getScreenshotAs(OutputType.FILE);
        System.out.println("File:" + srcFile);
        try {
            copyFile(srcFile, new File("C://demo/screenshots/pic.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Single Page Time:"
                + (System.currentTimeMillis() - iStart));

        webDriver.quit();
        service.stop();
	}
	
	private void makePdf(String URL){
		try {
			// Set URL INFO
			String FILE_NAME = "my_pdf";		
			
			StringBuffer buffer = new StringBuffer("cd\\ ");
			buffer.append(System.getProperty("line.separator"));
			buffer.append("cd demo ");
			buffer.append(System.getProperty("line.separator"));
			buffer.append("phantomjs test.js " + URL);
			buffer.append(System.getProperty("line.separator"));
			buffer.append(" exit");			
			

			// Delete Content From JS File
			File writer = new File("C://demo/my.bat");
			writer.delete();

			BufferedWriter bw = new BufferedWriter(new FileWriter("C://demo/my.bat", true));
			bw.write(buffer.toString());
			bw.close();

			System.out.println("PDF URL: C:/demo/temp_file/" + FILE_NAME + ".pdf");

			// Execute command
			String command = "cmd /c start C:/demo/my.bat";

			Process child = Runtime.getRuntime().exec(command);

			// Get output stream to write from it
			OutputStream out = child.getOutputStream();

			out.write("cd C:/ /r/n".getBytes());
			out.flush();
			out.write("dir /r/n".getBytes());
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void copyFile(File source, File dest) throws IOException {
	    InputStream is = null;
	    OutputStream os = null;
	    try {
	        is = new FileInputStream(source);
	        os = new FileOutputStream(dest);
	        byte[] buffer = new byte[1024];
	        int length;
	        while ((length = is.read(buffer)) > 0) {
	            os.write(buffer, 0, length);
	        }
	    } finally {
	        is.close();
	        os.close();
	    }
	}
}
