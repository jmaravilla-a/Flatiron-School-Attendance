class Day < ApplicationRecord
    has_many :student_days
    has_many :students, through: :student_days
    # validates :date, format: { with: /\d{2}\/\d{2}\/\d{4}/, message: "Date must be in the following format: mm/dd/yyyy"}
    
end
