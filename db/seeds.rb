require 'open-uri'
require 'json'

require 'net/http'



puts 'Fazendo Request para fakerapi para popular o DB '

url = 'https://fakerapi.it/api/v1/books?_quantity=10'


# Para Rubys versions mais novos
#book_serialized = URI.open(url).read
#...

# Para meu Ruby velhinho.

url = URI.parse(url)


result = Net::HTTP.get(url)

books_json = JSON.parse(result)

books = books_json["data"]
index = 1
books.each do |book|
    #Além da validação de title único, eu vou passar um first_or_create para evitar que tenha valores repetidos no meu banco.
    new_book =  Book.where(
        title: book["title"], author: book["author"], genre: book["genre"], 
        description: book["description"][0..99], image: book["image"], published: book["published"], 
        publisher: book["publisher"]).first_or_create


    puts "colocado #{index} novos valores no banco"    
    index += 1
end

puts "Seed finalizada"

