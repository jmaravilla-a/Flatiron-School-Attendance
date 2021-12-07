class Student < ApplicationRecord
  belongs_to :teacher
  has_many :student_days
  has_many :days, through: :student_day
end
