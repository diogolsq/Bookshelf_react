Rails.application.routes.draw do
  
  devise_for :users
  
  post 'users/sign_up' => 'users#sign_up_sign_in'
  get 'users/show'
  root 'homepage#index' 
  get '/*path' => 'homepage#index'
end
