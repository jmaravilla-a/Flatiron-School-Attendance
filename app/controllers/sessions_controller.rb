class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    def create
        teacher = Teacher.find_by_username(params[:username])
        if teacher&.authenticate(params[:password])
          session[:id] = teacher.id 
          render json: teacher, status: :ok
        else 
          render json: "Invalid Credentials. Try again!", status: :unauthorized 
        end
      end
    
      def destroy
        session.delete :id
      end
end