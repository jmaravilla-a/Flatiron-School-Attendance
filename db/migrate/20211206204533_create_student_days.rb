class CreateStudentDays < ActiveRecord::Migration[6.1]
  def change
    create_table :student_days do |t|
      t.references :student, null: false, foreign_key: true
      t.references :day, null: false, foreign_key: true
      t.boolean :present

      t.timestamps
    end
  end
end
