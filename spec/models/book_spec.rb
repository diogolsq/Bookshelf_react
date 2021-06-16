require 'rails_helper'

RSpec.describe Book, type: :model do
  it "se description tiver maior que 100 caracteres será inválido" do
    book = Book.new(title:'teste', author: 'teste', description: (1..101).to_a.join(''))
    expect(book).to be_invalid
  end
end
