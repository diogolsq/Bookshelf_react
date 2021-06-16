require 'rails_helper'

RSpec.describe Shelf, type: :model do
  it "shelf é inválido quando não contém status" do
    shelf = Shelf.new(book_id: 1, user_id: 1)
    expect(shelf).to be_invalid
  end
end
