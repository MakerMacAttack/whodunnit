class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :name
      t.boolean :weapon_sharp
      t.boolean :weapon_large
      t.boolean :suspect1_clear
      t.boolean :suspect2_clear
      t.boolean :suspect3_clear
      t.boolean :suspect4_clear
      t.boolean :suspect5_clear
      t.boolean :suspect6_clear
      t.boolean :suspect7_clear
      t.boolean :suspect8_clear
      t.references :user

      t.timestamps
    end
  end
end
