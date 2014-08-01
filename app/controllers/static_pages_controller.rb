require 'hashids'

class StaticPagesController < ApplicationController

  @@hashids = Hashids.new('salt', 8)
  
  def index
  	@ref = params[:ref]
  	if @ref 
  		@user = User.find @@hashids.decrypt(@ref)
  	end
  end

  def thanks
  	@obf_id = @@hashids.encrypt(session[:user_id])
  end
	

end
