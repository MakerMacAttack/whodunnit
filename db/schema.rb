# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_03_152514) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alibis", force: :cascade do |t|
    t.string "content"
    t.bigint "suspect_id"
    t.boolean "airtight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["suspect_id"], name: "index_alibis_on_suspect_id"
  end

  create_table "notes", force: :cascade do |t|
    t.boolean "weapon_sharp"
    t.boolean "weapon_large"
    t.boolean "suspect1_clear"
    t.boolean "suspect2_clear"
    t.boolean "suspect3_clear"
    t.boolean "suspect4_clear"
    t.boolean "suspect5_clear"
    t.boolean "suspect6_clear"
    t.boolean "suspect7_clear"
    t.boolean "suspect8_clear"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_notes_on_user_id"
  end

  create_table "suspects", force: :cascade do |t|
    t.string "name"
    t.boolean "dunnit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.bigint "suspect_id"
    t.boolean "sharp"
    t.boolean "large"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["suspect_id"], name: "index_weapons_on_suspect_id"
  end

end
