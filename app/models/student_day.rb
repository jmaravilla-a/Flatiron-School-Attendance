class StudentDay < ApplicationRecord
  belongs_to :student
  belongs_to :day
end
