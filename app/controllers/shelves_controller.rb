class ShelvesController < ApplicationController
    def index
        status = 200
        begin
            book_list_estante, book_list_lendo, book_list_lido = GetBooksToDisplayService.get(params)
        rescue
            status = 500
        end
        
        render json: {status: status, book_list_estante: book_list_estante, book_list_lendo: book_list_lendo, book_list_lido: book_list_lido}  
    
    end

   
    def save
        status = 200
        begin
            SaveBooksIntoShelfService.save(params)
        rescue
            status = 500
        end
        render json: {status: status}
    end


end
