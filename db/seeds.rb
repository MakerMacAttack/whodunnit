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

# Note.create!(weapon_sharp: -1, weapon_large: 1, suspect1_clear: nil, suspect2_clear: nil, suspect3_clear: nil, suspect4_clear: nil, suspect5_clear: nil, suspect6_clear: nil, suspect7_clear: nil, suspect8_clear: nil, user: @admin)
# Note.create!(weapon_sharp: 1, weapon_large: -1, suspect1_clear: nil, suspect2_clear: nil, suspect3_clear: nil, suspect4_clear: nil, suspect5_clear: nil, suspect6_clear: nil, suspect7_clear: nil, suspect8_clear: nil, user: @admin)

@dagger = Suspect.create!(name: "Sir Kills-a-lot", dunnit: false)
@icepick = Suspect.create!(name: "Red Herring", dunnit: false)
@katana = Suspect.create!(name: "Sister Mary Rose", dunnit: false)
@guillotine = Suspect.create!(name: "Marie LaTorte", dunnit: false)
@knuckles = Suspect.create!(name: "Miles the Prowler", dunnit: false)
@billiard = Suspect.create!(name: "Misao Aiko", dunnit: false)
@bat = Suspect.create!(name: "Liuetenant Price", dunnit: false)
@pipe = Suspect.create!(name: "Officer Rick", dunnit: false)

Weapon.create!(name: 'Dagger', sharp: true, large: false, suspect: @dagger)
Weapon.create!(name: 'Ice Pick', sharp: true, large: false, suspect: @icepick)
Weapon.create!(name: 'Katana', sharp: true, large: true, suspect: @katana)
Weapon.create!(name: 'Guillotine', sharp: true, large: true, suspect: @guillotine)
Weapon.create!(name: 'Brass Knuckles', sharp: false, large: false, suspect: @knuckles)
Weapon.create!(name: 'Billiard Ball', sharp: false, large: false, suspect: @billiard)
Weapon.create!(name: 'Baseball Bat', sharp: false, large: true, suspect: @bat)
Weapon.create!(name: 'Lead Pipe', sharp: false, large: true, suspect: @pipe)

Alibi.create!(content: "I couldn't have killed him, I was busy sleeping with his wife.", suspect: @dagger, airtight: false)
Alibi.create!(content: "Nah fam, I was tutoring blind orphan puppies", suspect: @icepick, airtight: true)
Alibi.create!(content: "Can't be me, I was killing someone else across town at the time.", suspect: @katana, airtight: false)
Alibi.create!(content: "Nope. Murder gives me hives.", suspect: @guillotine, airtight: true)
Alibi.create!(content: "I didn't do it, it was the day of my regatta.", suspect: @knuckles, airtight: false)
Alibi.create!(content: "I was at Disneyworld.", suspect: @billiard, airtight: true)
Alibi.create!(content: "I was playing the Rugby World Cup at the time.", suspect: @bat, airtight: false)
Alibi.create!(content: "I wouldn't have killed him now, he's putting me in his will next week!", suspect: @pipe, airtight: true)

puts "#{User.count} users created"
puts "#{Note.count} notes created"
puts "#{Suspect.count} suspects created"
puts "#{Weapon.count} weapons created"
puts "#{Alibi.count} alibis created"
