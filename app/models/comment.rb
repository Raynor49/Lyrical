class Comment < ApplicationRecord
  validates :user_id, :body, :commentable_id, :commentable_type, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
