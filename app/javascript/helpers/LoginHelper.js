import Cookies from 'universal-cookie';



const cookie = new Cookies();

class LoginHelper {
  
  islogged = () => {
    const user_name = this.getEmail();
    
    if (!!user_name) {
      cookie.set("userName", user_name, { path: "/" });
      return true;
    } else {
      return false;
    }
  };
  
  login = user => {
    // const cookie = new Cookies();

    console.log(user)
    cookie.set("userId", user[0], { path: "/" }); //cookie.save ('userName' ,user.name, { path: '/' });
    cookie.set("userEmail", user[1], { path: "/" }); //cookie.save ('userName' ,user.name, { path: '/' });
    cookie.set("userThumb", user[2], { path: "/" });
    console.log("acesso autorizado");
    console.log(this.getEmail() + " está logado");
  };

  getThumb = () => {
    return cookie.get("userThumb");
  };

  getEmail = () => {
    return cookie.get("userEmail");
  };

  getId = () => {
    return cookie.get("userId");
  };

//   logoff = () => {
//     console.log(this.getName() + " fez Logoff");
//     cookie.remove("email", { path: "/" });
//     cookie.remove("thumb", { path: "/" });
//   };
}

export default new LoginHelper();
