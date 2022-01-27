class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @comments = Comment.all
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
  end

  def show
    # @comment = Comment.find(params[:id])
    render json: Comment.where(exercise_id: params[:id])
  end

  private
    def comment_params
      params.require(:comment).permit(:User, :body, :exercise_id)
    end
end
