# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

day = Day.create( { date: "12/09/2019" } )

challenge = day.challenges.build({
question: "Write a function that does the following:
  console logs the numbers from 1 to n,
  where n is the integer the function takes as its parameter
  logs fizz instead of the number for multiples of 3
  logs buzz instead of the number for multiples of 5
  logs fizzbuzz for numbers that are multiples of both 3 and 5",
solution: "This will be some user inserted code to solve the question",
description: "This is where a user will write a post or description on the
  challenge and his solving process"
})
challenge.save


