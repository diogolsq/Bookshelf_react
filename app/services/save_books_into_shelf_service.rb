module SaveBooksIntoShelfService
    class << self
        def save params
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
            
        end
    end
end