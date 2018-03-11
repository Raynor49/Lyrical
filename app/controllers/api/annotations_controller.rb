class Api::AnnotationsController < ApplicationController
  # def index
  #   debugger
  #   @annotations = Track.find(params[:track_id]).annotations
  #   render :index
  # end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user_id = current_user.id
    @annotation.track_id = params[:track_id]

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def update
    @annotation = Annotation.find(params[:id])

    if @annotation.user_id === current_user.id && @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation && @annotation.user_id === current_user.id
      @annotation.destroy
      render json: {}
    end
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :start_index, :end_index)
  end
end
