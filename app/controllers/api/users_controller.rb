class Api::UsersController < ApplicationController
	def create
		@user = User.new(:email => params[:email])
		if @user.save then
			session[:user_id] = @user.id
			render :json => @user
		else
			render :json => @user.errors.full_messages, :status => 422
		end
	end
end
