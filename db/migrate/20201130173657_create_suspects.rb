class CreateSuspects < ActiveRecord::Migration[6.0]
  def change
    create_table :suspects do |t|
      t.string :name
      t.references :weapon
      t.references :alibi
      t.boolean :dunnit

      t.timestamps
    end
  end
end
