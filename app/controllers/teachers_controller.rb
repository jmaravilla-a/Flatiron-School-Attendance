class TeachersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        teacher = Teacher.create!(teacher_params)
        if teacher.valid?
            session[:id] = teacher.id
            render json: teacher, status: :created
        end
    end

    private

    def teacher_params
        params.permit(:first_name, :last_name, :username, :email, :password)
    end



end
