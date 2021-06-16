require 'rails_helper'

RSpec.describe Book, type: :model do
  it "se description tiver maior que 100 caracteres será inválido" do
    book = Book.new(title:'teste', author: 'teste', description: (1..101).to_a.join(''))
    expect(book).to be_invalid
  end
  
  it 'Sign UP user com atributos válidos' do
    user = { user: {
      email: 'Testonildo',
      password: '123456',
      password_confirmation:'123456',
      option: 2
    }}
    post '/users/sign_up', :params => user.to_json, :headers => { "Content-Type": "application/json" }
    json = JSON.parse(response.body)
    expect(response).to have_http_status(200)
  end
end
