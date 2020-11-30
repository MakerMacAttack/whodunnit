class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.boolean :sharp
      t.boolean :large

      t.timestamps
    end
  end
end
