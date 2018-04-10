class Api::TracksController < ApplicationController
  before_action :require_logged_in, except: [:show, :index]

  def create
    @track = current_user.tracks.new(track_params)
      if  @track.title.length < 31 && @track.artist.length < 31 && @track.album.length < 31 && @track.lyrics.length < 10000 && @track.save
        render :show
      elsif @track.title.length >= 31 || @track.artist.length >= 31 || @track.album.length >= 31 || @track.lyrics.length >= 10000
        render json: ['Input too many characters.'], status: 422
      else
        render json: @track.errors.full_messages, status: 422
      end
  end

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.includes(:annotations).find(params[:id])
    render :show
  end

  def destroy
    @track = Track.find(params[:id])

    if @track && @track.user_id === current_user.id
      @track.destroy
      render json: {}
    else
      render json: ["Cannot destroy other user's tracks."], status: 403
    end
  end

  def update
    @track = Track.find(params[:id])

    if @track.user_id === current_user.id && @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
  def track_params
    params.require(:track).permit(:lyrics, :artist, :genre, :album, :title)
  end
end
