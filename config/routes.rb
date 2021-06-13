Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      get 'users/create'
      get 'users/show'
      get 'users/destroy'
    end
  end
  devise_for :users
  root 'homepage#index' 
end
