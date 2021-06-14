module PopulandoShelfParaUser
    class << self
        def set user
        
            books = Books.all

            book_id_list = books.map(&:id)
            
            book_id_list each do |book_id|
                shelf = Shelf.new(status: "estante", user_id: user.id, book_id: book_id)
                shelf.save
            end
            
        end
    end
end