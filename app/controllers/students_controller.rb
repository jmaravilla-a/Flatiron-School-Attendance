class StudentsController < ApplicationController

    def index
        students = current_user.students
        render json: students, status: :ok
    end
    
    def show
        student = Student.all.find_by_id!(id: params[:id])
        render json: student 
    end
    
    def create
        student = Student.create!(first_name: params[:first_name], last_name: params[:last_name], teacher_id: @current_user.id)
        render json: student, status: :created
    end
    
    def destroy
        student = Student.all.find_by_id!(id: params[:id])
        student.destroy
        render json: {}, status: :ok
    end

    # private

    # def student_params
    #     params.permit(:first_name, :last_name, :teacher_id)
    # end
end
