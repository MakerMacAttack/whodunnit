class FixAlibiHeroku < ActiveRecord::Migration[6.0]
  def change
    rename_column :alibis, :valid, :airtight
  end
end
