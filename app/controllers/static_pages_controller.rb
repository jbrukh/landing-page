require 'hashids'

class StaticPagesController < ApplicationController

  @@hashids = Hashids.new('norman mailer', 8)

  # index
  def index
  	ref = params[:ref]
    if ref
  		@ref_user = User.find @@hashids.decrypt(ref)
  	end
  	@id = session[:user_id]
  	@ref_code = @@hashids.encrypt(@id) if @id
  end

  def thanks
    @obf_id = @@hashids.encrypt(session[:user_id]) if session[:user_id]
  end

end
