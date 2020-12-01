class RemoveNamefromNotes < ActiveRecord::Migration[6.0]
  def change
    remove_column :notes, :name
  end
end
