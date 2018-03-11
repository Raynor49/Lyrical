json.partial! 'api/tracks/track', track: @track
json.annotation_ids @track.annotations.pluck(:id)
