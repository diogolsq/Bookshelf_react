class User < ApplicationRecord
  has_many :books, through: :shelfs
  
  validates :avatar, presence: true
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable,
  #        :jwt_authenticatable,
  #        jwt_revocation_strategy: JWTBlacklist
end
