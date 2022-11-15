class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(session[:user_id])
    if user
      render json: user
    else
      render json: { error: "User not created" }, status: :unprocessable_entity
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.error.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    if user
      user.update(user_params)
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :name, :email)
  end
end
