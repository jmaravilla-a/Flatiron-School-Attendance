class StudentsController < ApplicationController

    def index
        students = current_user.students
        render json: students.order(last_name: :asc), status: :ok
    end
    
    def create
        student = Student.new(student_params)
        student.teacher = @current_user
        student.save!
        render json: student, status: :created
    end

    def update 
        student = Student.find_by!(id: params[:id])
        student.update!(student_params)
        render json: student, status: :ok
    end
    
    def destroy
        student = @current_user.students.all.find_by_id!(params[:id])
        # byebug
        student.destroy
        render json: {}, status: :ok
    end



    private

    def student_params
        params.permit(:first_name, :last_name)
    end
end
