json.annotation do
  json.partial! 'api/annotations/annotation', annotation: @annotation
  json.comment_ids @annotation.comments.pluck(:id)
end

json.comments do
  @annotation.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
