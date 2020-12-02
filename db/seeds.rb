# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Suspect.destroy_all
Weapon.destroy_all
Alibi.destroy_all

@admin = User.create!(name: 'admin', password: '123456')

Note.create!(weapon_sharp: nil, weapon_large: nil, suspect1_clear: nil, suspect2_clear: nil, suspect3_clear: nil, suspect4_clear: nil, suspect5_clear: nil, suspect6_clear: nil, suspect7_clear: nil, suspect8_clear: nil, user: @admin)

@murderer = Suspect.create!(name: "Sir Kills-a-lot", dunnit: true)

Weapon.create!(name: 'dagger', sharp: true, large: false, suspect: @murderer)

Alibi.create!(content: "I couldn't have killed him, I was busy sleeping with his wife.", suspect: @murderer, airtight: false)

puts "#{User.count} users created"
puts "#{Note.count} notes created"
puts "#{Suspect.count} suspects created"
puts "#{Weapon.count} weapons created"
puts "#{Alibi.count} alibis created"
