# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

day = Day.create( { date: "12/09/2019" } )
day2 = Day.create( { date: "12/10/2019" } )
challenges1 = day.challenges.build({
question: "Write a function that does the following:
  console logs the numbers from 1 to n,
  where n is the integer the function takes as its parameter
  logs fizz instead of the number for multiples of 3
  logs buzz instead of the number for multiples of 5
  logs fizzbuzz for numbers that are multiples of both 3 and 5",
solution: "This will be some user inserted code to solve the question",
description: "This is where a user will write a post or description on the
  challenge and their solving process"
})
challenges2 = day.challenges.build({
  question: "write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation.",
  solution: "solution for day 1 challenge 2",
  description: "description for day 1 challenge 2"
})

challenges3 = day2.challenges.build({
  question: "write a function that takes a string as argument and returns the number of vowels contained in that string.",
  solution: "day2 challenge 1 solution",
  description: "day 2 challenge 1 description"
})
challenges4 = day2.challenges.build({
  question: "write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.",
  solution: "day2 challenge 2 solution",
  description: "day2 challenge 2 description"
})

challenges1.save
challenges2.save
challenges3.save
challenges4.save


