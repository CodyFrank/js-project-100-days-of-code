Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :challenges, only: [:create, :update, :destroy]
      resources :days, except: [:new, :edit, :show]
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
