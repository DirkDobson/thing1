class Api::TweetsController < ApplicationController
  def index
    render json: TwitterClient.timeline
  end


  def create
    TwitterClient.twee(params[:tweet])
  end
  def search
    render json: TwitterClient.by_user(params[:term])
  end
end
