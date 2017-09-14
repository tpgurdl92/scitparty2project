package cloudnote.Editor;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import cloudnote.Util.MediaService;




@Controller
public class EditController {

	
    @RequestMapping(value = "api/v1/decks/1049791.json", method = RequestMethod.PUT)
    public void updatePage(ModelMap model, HttpServletRequest request, HttpServletResponse response,@RequestBody String deck) {
    	String decodeResult = null;
    	try {
    		decodeResult = URLDecoder.decode(deck, "UTF-8");
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}    	
    	System.out.println("Data : " + decodeResult);
    	Long time = new Date().getTime();
    	try {
			response.getWriter().print("{\"deck\":{\"slug\":\"deck-4\",\"data_updated_at\":"+time+",\"sanitize_messages\":null}}");
		} catch (IOException e) {
			e.printStackTrace();
		}
    }
    @RequestMapping(value = "api/v1/status.json", method = RequestMethod.GET)
    public void statusPage(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	try {
    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
    	} catch (IOException e) {
    		e.printStackTrace();
    	}    	
    }
    @RequestMapping(value = "api/v1/media.json", method = RequestMethod.GET)
    public void createMedia(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String existMedia = "{\"total\":0,\"type\":\"medias\",\"results\":[],\"meta\":{}}";
    	
    	try {
    		response.getWriter().print(existMedia);
    	} catch (IOException e) {
    		e.printStackTrace();
    	}    	
    }
    @RequestMapping(value = "api/v1/media.json", method = RequestMethod.POST)
    public void uploadMedia( ModelMap model, HttpServletRequest request, HttpServletResponse response, MultipartFile file, String id, String type) {
    	MediaService mediaService = new MediaService();

    	String filename =  file.getOriginalFilename();
    	String thumbName = null;
    	String media = null;
    	File out = null;
    	File thumbFile = null;
    	String path = "C:/Users/SCITMaster/OneDrive/LastProject/MyEditor/src/main/webapp/media/";	
    	
    	//파일생성
    	try{
    		out = new File(path+filename);
    		file.transferTo(out);
    	}catch(Exception e){
    		e.printStackTrace(); 	
    	}	    	
    	
    	if(type.equals("Image")){
    		//썸네일 만들기
    		try {
    			thumbName = mediaService.makeThumbnail(out, path);
    		} catch (Exception e1) {
    			e1.printStackTrace();
    		}    		
    		//파일 바이너리로 만들기
    		String img = mediaService.fileToBinary(path, filename);
    		String thumbImg = mediaService.fileToBinary(path,thumbName);    	
    		media = "{\"id\":4116077,\"type\":"+"\""+type+"\"" +",\"url\":\"data:"+file.getContentType()+";base64,"+img+"\",\"label\":"+"\""+out.getName()+"\""+",\"inline\":false,\"thumb_url\":\"data:"+type+";base64,"+thumbImg+"\",\"content_type\":"+"\""+file.getContentType()+"\"}";
    	}
//    	else{
//    		VideoThumbTaker vtt = new VideoThumbTaker();
//    		try {
//				vtt.getThumb(path+filename, path+"screenshot_"+filename,0, 0, 1,file.getContentType());
//				File videoThumb = new File(path+"screenshot_"+filename);
//				thumbName = mediaService.makeThumbnail(videoThumb, path);
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//    		String video = mediaService.fileToBinary(path, filename);    		
//    		String screenshotVideo = mediaService.fileToBinary(path, "screenshot_"+filename);    		
//    		String thumbVideo = mediaService.fileToBinary(path, thumbName);    		
//    		media = "{\"id\":4117580,\"type\":\"Video\",\"url\":\"data:"+file.getContentType()
//    		+";base64,"+ video +"\",\"label\":\""+out.getName()
//    		+"\",\"thumb_url\":\"thumb_url\":\"data:"+type+";base64,"+thumbVideo
//    		+"\",\"status\":null,\"upload_url\":\"data:"+file.getContentType()+";base64,"+ screenshotVideo +"\"}";
//    	}    	
    	System.out.println(media);
    	try {
    		response.getWriter().print(media);
    	} catch (IOException e) {
    		e.printStackTrace();
    	} 
    }
    @RequestMapping(value = "api/v1/media/1049791.json", method = RequestMethod.GET)
    public void updateMedia(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	try {
    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
    	} catch (IOException e) {
    		e.printStackTrace();
    	}    	
    }
    @RequestMapping(value = "api/v1/tags.json", method = RequestMethod.GET)
    @ResponseBody
    public void createMediaTag(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String taglist = "{\"total\":0,\"type\":\"tags\",\"results\":[],\"meta\":{}}";
    	try {
    		response.getWriter().print(taglist);
    	} catch (IOException e) {
    		e.printStackTrace();
    	}   
    }
    
    @RequestMapping(value = "api/v1/tags/1049791.json", method = RequestMethod.GET)
    public void updateMediaTag(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	try {
    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
    	} catch (IOException e) {
    		e.printStackTrace();
    	}    	
    }
//    @RequestMapping(value = "api/v1/tags/1049791/add_media.json", method = RequestMethod.GET)
//    public void addMediaTag(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
//    	try {
//    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
//    	} catch (IOException e) {
//    		e.printStackTrace();
//    	}    	
//    }
//    @RequestMapping(value = "api/v1/tags/1049791/remove_media.json", method = RequestMethod.GET)
//    public void removeMediaTag(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
//    	try {
//    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
//    	} catch (IOException e) {
//    		e.printStackTrace();
//    	}    	
//    }
    @RequestMapping(value = "api/v1/media/usage.json", method = RequestMethod.GET)
    public void usageMedia(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	try {
    		response.getWriter().print("{\"user_signed_in\":true,\"app_version\":\"8ad2ea0\",\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true,\"editor_grid\":true,\"editor_snap\":true,\"developer_mode\":false,\"speaker_layout\":null,\"phone_number\":null,\"phone_country_code\":null},\"email\":\"ohara930@gmail.com\",\"notify_on_receipt\":true,\"billing_address\":null,\"editor_tutorial_completed\":true,\"manually_upgraded\":false,\"deck_user_editor_limit\":1,\"storage_used\":305055076,\"storage_limit\":262144000}}");
    	} catch (IOException e) {
    		e.printStackTrace();
    	}    	
    }
    
    @RequestMapping(value = "api/v1/decks/1049791.json", method = RequestMethod.GET)
    public void getUpdatePage(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String getupdate = "{\"id\":1049791,\"slug\":\"gfgfg\",\"title\":\"gfgfg\",\"description\":\"\",\"width\":960,\"height\":700,\"visibility\":\"all\",\"published_at\":\"2017-08-01T11:45:25.878Z\",\"sanitize_messages\":null,\"thumbnail_url\":\"https://s3.amazonaws.com/media-p.slid.es/thumbnails/4f5e75e95a8ad00ae5bbb10ad6741d1f/thumb.jpg?837810528\",\"view_count\":0,\"user\":{\"id\":742158,\"username\":\"hara\",\"name\":null,\"description\":null,\"thumbnail_url\":\"https://www.gravatar.com/avatar/c1594e33a949c29ff9dde38cc4edda24?s=140\u0026d=https%3A%2F%2Fs3.amazonaws.com%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png\",\"paid\":false,\"pro\":false,\"lite\":false,\"team_id\":null,\"settings\":{\"id\":592407,\"present_controls\":true,\"present_upsizing\":true,\"present_pointer\":false,\"present_notes\":true}},\"background_transition\":\"slide\",\"transition\":\"slide\",\"theme_id\":null,\"theme_font\":\"montserrat\",\"theme_color\":\"white-blue\",\"auto_slide_interval\":0,\"comments_enabled\":true,\"forking_enabled\":true,\"rolling_links\":false,\"center\":false,\"should_loop\":false,\"share_notes\":null,\"slide_number\":null,\"rtl\":false,\"version\":2,\"collaborative\":null,\"deck_user_editor_limit\":1,\"data_updated_at\":1505117820676,\"font_typekit\":null,\"font_google\":null}";
    	try {
    		response.getWriter().print(getupdate);
    	} catch (IOException e) {
    		e.printStackTrace();
    	}  
    }
    @RequestMapping(value = "api/v1/decks/1049791/thumbnails.json", method = RequestMethod.POST)
    public void thumbnails(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String thumbnail = "{\"error\":\"The specified resource could not be found.\"}";
    	try {
    		response.getWriter().print(thumbnail);
    	} catch (IOException e) {
    		e.printStackTrace();
    	}  
    }
    @RequestMapping(value = "media_upload", method = RequestMethod.POST)
    public void mediaUpload(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String thumbnail = "{\"error\":\"The specified resource could not be found.\"}";
    	try {
    		response.getWriter().print(thumbnail);
    	} catch (IOException e) {
    		e.printStackTrace();
    	}  
    }
    
    @RequestMapping(value = "api/v1/slide_templates.json", method = RequestMethod.GET)
    public void slide_templates(ModelMap model, HttpServletRequest request, HttpServletResponse response) {
    	String templete = "{\"total\":0,\"type\":\"templates\",\"results\":[],\"meta\":{}}";
    	try {
			response.getWriter().print(templete);
		} catch (IOException e) {
			e.printStackTrace();
		}
    }     
    
    
}
