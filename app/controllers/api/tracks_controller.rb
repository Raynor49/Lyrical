class Api::TracksController < ApplicationController
  before_action :require_logged_in, except: [:show, :index]

  def create
    @track = current_user.tracks.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def destroy
    @track = Track.find(params[:id])

    if @track && @track.user_id === current_user.id
      @track.destroy
      render :index
    else
      render json: ["Destroy your own tracks, jabroni"], status: 403
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
