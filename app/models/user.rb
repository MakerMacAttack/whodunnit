class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :notes, dependent: :destroy
end
