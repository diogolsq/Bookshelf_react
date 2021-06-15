class ShelvesController < ApplicationController
    def index

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

        render json: {book_list_estante: book_list_estante, book_list_lendo: book_list_lendo, book_list_lido: book_list_lido}  
    
        
    end
end
