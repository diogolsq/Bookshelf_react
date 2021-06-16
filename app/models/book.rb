class Book < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :author, presence: true
    validates :description, presence: true, length: {maximum: 100}
    has_many :users, through: :shelfs

end
