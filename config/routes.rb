Rails.application.routes.draw do
  
  devise_for :users
  
  post 'users/sign_up' => 'users#create'
  get 'users/show'
  root 'homepage#index' 
  get '/*path' => 'homepage#index'
end
