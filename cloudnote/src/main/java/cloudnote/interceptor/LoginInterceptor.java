package cloudnote.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterceptor extends HandlerInterceptorAdapter{

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
		throws Exception {
			
		HttpSession session = request.getSession();
		String userid= (String)session.getAttribute("loginId");
		
		if(userid==null){
			response.sendRedirect(request.getContextPath()+"/");
			return false;
		}
		
		
		
		
		return super.preHandle(request, response, handler);
	}
}
