require 'rails_helper'

RSpec.describe Shelf, type: :model do
  it "shelf é inválido quando não contém status" do
    shelf = Shelf.new(book_id: 1, user_id: 1)
    expect(shelf).to be_invalid
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
