class StudentDaySerializer < ActiveModel::Serializer
  attributes :id, :present
  has_one :student
  has_one :day
end
