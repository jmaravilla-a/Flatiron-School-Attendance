class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
  # has_one :teacher
  # has_one :day, through: :student_day
  # has_many :student_days
end
