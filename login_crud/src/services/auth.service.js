import httpService from "@/utils/axios";
import { deleteCookie, getCookie } from "cookies-next";

class AuthService {
  register(registerForm) {
    return httpService.post("/register", registerForm);
  }
  login(username, password) {
    const schema = {
      username: username,
      password: password,
    };
    return httpService.post("/login", schema);
  }
  logout() {
    localStorage.removeItem(process.env.TOKEN_NAME);
    localStorage.removeItem("user");
    deleteCookie(process.env.TOKEN_NAME, {});
    window.location.replace(process.env.REDIRECT_TO_LOGIN);
  }
}

export const authService = new AuthService();
