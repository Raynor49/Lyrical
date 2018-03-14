@annotations.each do |annotation|
  json.set! annotation.id do
    json.partial! 'api/annotations/annotation', annotation: annotation
    json.comment_ids @annotation.comments.pluck(:id)
  end
end
