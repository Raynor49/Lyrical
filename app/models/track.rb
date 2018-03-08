class Track < ApplicationRecord
  validates :title, :lyrics, :user_id, :artist, :album, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
