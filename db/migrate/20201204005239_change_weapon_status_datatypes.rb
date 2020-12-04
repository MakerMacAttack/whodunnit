class ChangeWeaponStatusDatatypes < ActiveRecord::Migration[6.0]
  def change
    remove_column :notes, :weapon_large
    remove_column :notes, :weapon_sharp
  end
end
