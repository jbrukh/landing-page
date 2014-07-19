class Api::UsersController < ApplicationController
	def create
		@user = User.new(params[:email])
		if @user.save then
			render :json => @user
		else
			render :json => @user.errors.full_messages, status => 422
		end
	end
end
