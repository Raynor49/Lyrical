class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.string :artist, null:false
      t.string :album, null:false
      t.string :genre, null:false
      t.text :lyrics, null:false
      t.integer :user_id, null:false

      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :user_id
  end
end
