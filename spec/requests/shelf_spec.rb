require 'rails_helper'

RSpec.describe "Shelves", type: :request do
  describe "GET /kanban" do
    it "returns http success" do
      get "/kanban"
      expect(response).to have_http_status(:success)
    end
  end
end
