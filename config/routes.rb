Rails.application.routes.draw do
  
  devise_for :users
  
  root 'homepage#index' 
  get '/*path' => 'homepage#index'
  
  post 'users/sign_up' => 'users#sign_up_sign_in'
  
  get 'shelfs/books'   =>  'shelfs#index'

end
