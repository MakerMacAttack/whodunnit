class FixNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :weapon_sharp, :integer
    add_column :notes, :weapon_large, :integer
  end
end
