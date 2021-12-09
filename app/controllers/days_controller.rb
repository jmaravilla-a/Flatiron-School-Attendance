class DaysController < ApplicationController

    def potato
        # check for the instance of the day in question. 
        day = Day.find_by!() 
        # if it exists, return the students for that day. 
        # otherwise, create a new instance of day along with new instances of student_days for all the students. 
    end
end
