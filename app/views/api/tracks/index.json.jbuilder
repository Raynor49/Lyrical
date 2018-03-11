
@tracks.each do |track|
  json.set! track.id do
    json.partial! '/api/tracks/track', track: track
    json.annotation_ids track.annotations.pluck(:id)
  end
end
