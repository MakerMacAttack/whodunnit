class FixAlibiHeroku < ActiveRecord::Migration[6.0]
  def change
    change_column :alibis, :valid, :airtight
  end
end
