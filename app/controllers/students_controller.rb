class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students, status: :ok
    end
    
    def show
        student = Student.all.find_by_id!(id: params[:id])
        render json: student 
    end
    
    def create
        student = Student.create!(student_params)
        render json: student, status: :created
    end
    
    def destroy
        student = Student.all.find_by_id!(id: params[:id])
        student.destroy
        render json: {}, status: :ok
    end

    private

    def student_params
        params.permit(:first_name, :last_name, :teacher_id)
    end
end
