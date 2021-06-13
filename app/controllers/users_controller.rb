class UsersController < ApplicationController
    def index
    end
    
    def create
        status = 200
        begin 
            puts 'beep'
        rescue
        status = 500
        end
        
        render json: {status: status}
    end
    
    def show
    end
    
    def destroy
    end      
end
