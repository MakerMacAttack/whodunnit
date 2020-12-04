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

@admin = User.create!(username: 'admin', password: '123456') 
User.create!(username: 'secondary', password: '654321')

Note.create!(weapon_sharp: -1, weapon_large: 1, suspect1_clear: nil, suspect2_clear: nil, suspect3_clear: nil, suspect4_clear: nil, suspect5_clear: nil, suspect6_clear: nil, suspect7_clear: nil, suspect8_clear: nil, user: @admin)
Note.create!(weapon_sharp: 1, weapon_large: -1, suspect1_clear: nil, suspect2_clear: nil, suspect3_clear: nil, suspect4_clear: nil, suspect5_clear: nil, suspect6_clear: nil, suspect7_clear: nil, suspect8_clear: nil, user: @admin)

@murderer = Suspect.create!(name: "Sir Kills-a-lot", dunnit: true)
@innocent = Suspect.create!(name: "Red Herring", dunnit: false)

Weapon.create!(name: 'dagger', sharp: true, large: false, suspect: @murderer)
Weapon.create!(name: 'baseball bat', sharp: false, large: true, suspect: @innocent)

Alibi.create!(content: "I couldn't have killed him, I was busy sleeping with his wife.", suspect: @murderer, airtight: false)
Alibi.create!(content: "Nah fam, I was tutoring blind orphan puppies", suspect: @innocent, airtight: true)

puts "#{User.count} users created"
puts "#{Note.count} notes created"
puts "#{Suspect.count} suspects created"
puts "#{Weapon.count} weapons created"
puts "#{Alibi.count} alibis created"
