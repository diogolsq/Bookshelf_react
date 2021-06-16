class ShelvesController < ApplicationController
    def index
        status = 200
        begin
            user_id = params[:user_id].to_i

            shelves_estante = Shelf.where(user_id: user_id, status: "estante")
            shelves_lendo   = Shelf.where(user_id: user_id, status: "lendo")
            shelves_lido    = Shelf.where(user_id: user_id, status: "lido")

            books_id_estante = shelves_estante.map(&:book_id)
            books_id_lendo   = shelves_lendo.map(&:book_id)
            books_id_lido    = shelves_lido.map(&:book_id) 


            book_list_estante = []
            book_list_lendo   = []
            book_list_lido    = []
            
            books_id_estante.each {|book_id| book_list_estante << Book.find(book_id) }
            books_id_lendo.each {|book_id| book_list_lendo << Book.find(book_id) }
            books_id_lido.each {|book_id| book_list_lido << Book.find(book_id) }
        rescue
            status = 500
        end
        
        render json: {status: status, book_list_estante: book_list_estante, book_list_lendo: book_list_lendo, book_list_lido: book_list_lido}  
    
    end

   
    def save
        status = 200
        begin
            data_hash = params[:shelves].to_unsafe_h
            livros_estante = data_hash[:estante].map{|livro| livro["id"]}
            livros_lendo = data_hash[:lendo].map{|livro| livro["id"]}
            livros_lido = data_hash[:lido].map{|livro| livro["id"]}

            user_id = params[:user][:user].to_i

            livros_estante.each do |livro_id|
                shelf = Shelf.where(book_id: livro_id, user_id: user_id).first
                shelf.update_attributes(status: 'estante') if shelf
            end

            livros_lendo.each do |livro_id|
                shelf = Shelf.where(book_id: livro_id, user_id: user_id).first
                shelf.update_attributes(status: 'lendo') if shelf
            end

            livros_lido.each do |livro_id|
                #byebug
                shelf = Shelf.where(book_id: livro_id, user_id: user_id).first
                shelf.update_attributes(status: 'lido') if shelf
            end
        rescue
            status = 500
        end
        render json: {status: status}
    end


end
