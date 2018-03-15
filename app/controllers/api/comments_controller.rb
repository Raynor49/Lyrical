class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  def index
    if params[:track_id]
      @track_or_ann = Track.find(params[:track_id])
    elsif params[:annotation_id]
      @track_or_ann = Annotation.find(params[:annotation_id])
    else
      render json: ['No track, no annotation'], status: 422
    end

    @comments = @track_or_ann.comments
    render :index
  end

  def create
    if params[:track_id]
      @track_or_ann = Track.find(params[:track_id])
    elsif params[:annotation_id]
      @track_or_ann = Annotation.find(params[:annotation_id])
    else
      render json: ['No track, no annotation'], status: 422
    end

    @comment = @track_or_ann.comments.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment && @comment.user_id == current_user.id
      @comment.destroy
      render json: {}
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
