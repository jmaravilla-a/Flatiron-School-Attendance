class SessionsController < ApplicationController
    before_action :authenticate_user
    
    def create
        teacher = Teacher.find_by_username(params[:username])
        if user&.authenticate(params[:password])
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