Rails.application.routes.draw do
  
  resources :teachers, only: [:create]
  resources :students, only: [:index, :show, :create, :destroy]
  resources :sessions, only: [:create]
  # resources :student_days
  resources :days

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
