class Student < ApplicationRecord
  belongs_to :teacher
  has_many :student_days, dependent: :destroy 
  has_many :days, through: :student_days, dependent: :destroy
end
