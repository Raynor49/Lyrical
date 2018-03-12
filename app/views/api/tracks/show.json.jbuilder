json.partial! 'api/tracks/track', track: @track
json.annotation_ids @track.annotations.pluck(:id)

# also send back annotations
json.annotations do
  @track.annotations.each do |annotation|
    json.set! annotation.id do
      json.partial! 'api/annotations/annotation/', annotation: annotation
    end
  end
end
