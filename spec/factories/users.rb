# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user, :class => 'Users' do
    email "MyString"
    zip 1
  end
end
