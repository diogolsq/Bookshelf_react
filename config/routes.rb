Rails.application.routes.draw do
  
  devise_for :users
  
  root 'homepage#index' 
  get 'shelfs/books/:user_id'   =>  'shelves#index'
  
  post 'users/sign_up' => 'users#sign_up_sign_in'
  
  get '/*path' => 'homepage#index'

end
