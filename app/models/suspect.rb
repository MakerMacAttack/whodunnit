class Suspect < ApplicationRecord
  has_one :weapon, dependent: :destroy
  has_one :alibi, dependent: :destroy
end
