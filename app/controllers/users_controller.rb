class UsersController < ApplicationController
    def index
    end
    
    def sign_up_sign_in
        status = 200
        begin 
            #byebug
            # TODO PASSAR ISSO PRO DEVISE TOMAR CONTA.
            
            if params["user"]["option"] == 1
                find_my_user = User.where(email: params["user"]["email"], encrypted_password: params["user"]["password"])
                current_user = find_my_user.first if find_my_user
                

                
            elsif params["user"]["option"] == 2 
                new_user = User.new(email: params["user"]["email"], encrypted_password: params["user"]["password"])
                current_user = new_user
                
                #Adicionando o Thumbnail
                pegando_img_src = GetThumbService.get(current_user["email"])

                current_user["avatar"] = pegando_img_src

                current_user.save

                PopulandoShelfParaUser.set(current_user)
            end
            

        rescue
           status = 500
        end
    
        render json: {status: status, current_user: [current_user.id, current_user.email, current_user.avatar]} if current_user
        render json: {status: status, current_user: []} unless current_user
    end
    

          
end
