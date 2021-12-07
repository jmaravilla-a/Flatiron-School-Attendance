class DaysController < ApplicationController


    def index
        render json: Day.all
    end
    # On landing page, check if an instance of day exists
    # If an instance of day exists, show all the students
    # 

end
