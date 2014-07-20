class User < ActiveRecord::Base
	validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, on: :create }
	validates :zip, :allow_blank => true, :length => { is: 5 }
end
