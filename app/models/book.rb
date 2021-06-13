class Book < ApplicationRecord
    validates :title, presence: true
    validates :author, presence: true

    has_many :users, through: :shelfs

end
