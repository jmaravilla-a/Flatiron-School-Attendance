class Day < ApplicationRecord
    has_many :student_days
    has_many :students, through: :student_days

    
end
