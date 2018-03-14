class Annotation < ApplicationRecord
  validates :body, :start_index, :end_index, presence: true

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments, as: :commentable
end
