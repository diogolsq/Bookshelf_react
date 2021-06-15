require 'rails_helper'

RSpec.describe User, :type => :model do 
  it "é válido quando contém o email e o thumb" do
    user = User.new(email: 'teste@gmail.com')
    expect(user).to be_invalid
  end

  it "o serviço do GetThumbService faz o request até o gravstatic e retorna a url da imagem " do
    teste = GetThumbService.get("teste@gmail.com")
    expect(teste).to match(/www.gravatar.com/)
  end
end
