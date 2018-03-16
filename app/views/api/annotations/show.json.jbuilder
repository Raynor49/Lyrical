json.annotation do
  json.partial! 'api/annotations/annotation', annotation: @annotation
end

json.comments do
  @annotation.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
