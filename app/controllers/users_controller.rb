class UsersController < ApplicationController
    def index
    end
    
    def sign_up_sign_in
        status = 200
        begin 
            #byebug
            # TODO PASSAR ISSO PRO DEVISE TOMAR CONTA.
            
            if params["user"]["option"] == 1
                #byebug
                find_my_user = User.where(email: params["user"]["email"], encrypted_password: params["user"]["password"])
                current_user = find_my_user.first if find_my_user
                

                
            elsif params["user"]["option"] == 2 
                #byebug
                new_user = User.new(email: params["user"]["email"], encrypted_password: params["user"]["password"])
                new_user.save!
                current_user = new_user
                
                #Adicionando o Thumbnail
                pegando_img_src = GetThumbService.get(current_user["email"])

                #byebug
                current_user["avatar"] = pegando_img_src

                current_user.save!
            end
            
            #byebug

        rescue
           status = 500
        end
        #byebug
        @current_user = current_user
        render json: {status: status, current_user: [current_user.email, current_user.avatar]}
    end
    

          
end
