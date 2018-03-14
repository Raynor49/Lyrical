json.track do
  json.partial! 'api/tracks/track', track: @track
  json.annotation_ids @track.annotations.pluck(:id)
end

# also send back annotations
json.annotations do
  @track.annotations.each do |annotation|
    json.set! annotation.id do
      json.partial! 'api/annotations/annotation/', annotation: annotation
    end
  end
end

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment/', comment: comment
    end
  end
end 
