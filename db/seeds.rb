puts "Seeding 🌱"

# Create Teachers

adam = Teacher.create(
    first_name: "Adam", 
    last_name: "La Rosa", 
    username: "Potato", 
    email: "potato@gmail.com",
    password: "p0tat03!"
)

# Create Students

alex = Student.create(
    first_name: "Alex", 
    last_name: "Mandalar",
    teacher_id: adam.id
)

javier = Student.create(
    first_name: "Javier", 
    last_name: "Maravilla",
    teacher_id: adam.id
)

steve = Student.create(
    first_name: "Steve", 
    last_name: "Risso",
    teacher_id: adam.id
)

yeison = Student.create(
    first_name: "Yeison", 
    last_name: "Casado",
    teacher_id: adam.id
)

connie = Student.create(
    first_name: "Conni", 
    last_name: "Kang",
    teacher_id: adam.id
)

avery = Student.create(
    first_name: "Avery", 
    last_name: "Lin",
    teacher_id: adam.id
)

todd = Student.create(
    first_name: "Todd", 
    last_name: "Krieger",
    teacher_id: adam.id
)

james = Student.create(
    first_name: "James", 
    last_name: "Brownie",
    teacher_id: adam.id
)

andrea = Student.create(
    first_name: "Andrea", 
    last_name: "Freeman",
    teacher_id: adam.id
)

aidan = Student.create(
    first_name: "Aidan", 
    last_name: "Margo",
    teacher_id: adam.id
)

daniel = Student.create(
    first_name: "Daniel", 
    last_name: "Jones",
    teacher_id: adam.id
)

sam = Student.create(
    first_name: "Sam", 
    last_name: "Bencivengo",
    teacher_id: adam.id
)

aristela = Student.create(
    first_name: "Aristela", 
    last_name: "Marku",
    teacher_id: adam.id
)

max = Student.create(
    first_name: "Max", 
    last_name: "Anselmo",
    teacher_id: adam.id
)

# Create Days

monday = Day.create(
    date: Time.new.strftime("%d/%m/%Y")
)

# Create Student_Days
Student.all.each { |s|
    StudentDay.create(present: false, day_id: monday.id, student_id: s.id)
}

puts "Done Seeding 🌱"