Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/create'
      get 'users/show'
    end
  end
  devise_for :users
  root 'homepage#index' 
  get '/*path' => 'homepage#index'
end
