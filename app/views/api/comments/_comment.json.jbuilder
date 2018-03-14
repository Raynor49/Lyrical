json.extract! comment, :id, :body, :commentable_id, :user_id, :commentable_type
json.author comment.user.username
