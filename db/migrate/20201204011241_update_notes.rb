class UpdateNotes < ActiveRecord::Migration[6.0]
  def change
    add_reference :weapons, :suspect, index:true
    add_reference :alibis, :suspect, index:true
    add_foreign_key :weapons, :suspects
    add_foreign_key :alibis, :suspects
  end
end
