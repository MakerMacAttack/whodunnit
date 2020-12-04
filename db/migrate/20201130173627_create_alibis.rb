class CreateAlibis < ActiveRecord::Migration[6.0]
  def change
    create_table :alibis do |t|
      t.string :content
      t.boolean :valid

      t.timestamps
    end
  end
end
