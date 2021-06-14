import { Cookies } from "react-cookie";

class LoginHelper {
  islogged = () => {
    const user_name = this.getEmail();

    if (!!user_name) {
      cookie.save("userName", user_name, { path: "/" });
      return true;
    } else {
      return false;
    }
  };

  login = user => {
    console.log(user)
    cookie.save("userId", user["id"], { path: "/" }); //cookie.save ('userName' ,user.name, { path: '/' });
    cookie.save("userEmail", user["name"], { path: "/" }); //cookie.save ('userName' ,user.name, { path: '/' });
    cookie.save("userThumb", user["login"], { path: "/" });
    console.log("acesso autorizado");
    console.log(this.getEmail() + " está logado");
  };

  getThumb = () => {
    return cookie.load("Thumb");
  };

  getEmail = () => {
    return cookie.load("Email");
  };

  getId = () => {
    return cookie.load("Id");
  };

//   logoff = () => {
//     console.log(this.getName() + " fez Logoff");
//     cookie.remove("email", { path: "/" });
//     cookie.remove("thumb", { path: "/" });
//   };
}

export default new LoginHelper();
