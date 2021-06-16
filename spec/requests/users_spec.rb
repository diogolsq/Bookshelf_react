require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /login" do
    it "returns http success" do
      get "/login"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST users#signup or users#signin" do
    it 'Login user com atributos válidos' do
      user = { user: {
        email: 'Testonildo',
        password: '123456',
        option: 1
      }}
      post '/users/sign_up', :params => user.to_json, :headers => { "Content-Type": "application/json" }
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
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
end
