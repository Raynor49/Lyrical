Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:new, :edit] do
      resources :annotations, only: [:create]
    end
    resources :annotations, only: [:show, :destroy, :update]
  end
  root "static_pages#root"
end
