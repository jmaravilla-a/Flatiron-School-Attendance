class TeachersController < ApplicationController

    def create
        teacher = Teacher.create!(student_params)
        if student.valid?
            render json: student, status: :created
        end
    end

end
