class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.text :body
      t.integer :track_id, null:false
      t.integer :user_id, null:false
      t.integer :start_index, null:false
      t.integer :end_index, null:false

      t.timestamps
    end
    add_index :annotations, :track_id
  end
end
