class Suspect < ApplicationRecord
  has_one :weapon
  has_one :alibi
end
