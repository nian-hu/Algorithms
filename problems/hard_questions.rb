puts "---------PROBLEM 1-----------"

# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

def coprime?(num_1, num_2)
    (2..num_1).each do |divisor|
        if num_1 % divisor == 0 && num_2 % divisor == 0
            return false
        end
    end

    true                 
end


# OFFICIAL SOLUTION

# def coprime?(num_1, num_2)
#     (2..num_1).none? { |divisor| num_1 % divisor == 0 && num_2 % divisor == 0}
# end

# in English:
# method will be true if there are NO common divisors
# so we check to see if there any common divisors 
# if there ARE common divisors, then this will happen
    # (2..num_1).none? { true }
    # .none? { true } => false
    # FALSE, these two numbers are not coprime
# if there are NO common divisors, then this will happen
    # (2..num_1).none? { false }
    # .none? { false } => true 
    # TRUE, these two numbers are indeed coprime

p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false


puts "---------PROBLEM 2-----------"

# Write a method, adult_in_group?(people), that accepts an array containing people.
# The method should return true if there is at least 1 person with an age of 18 or greater.
# The method should return false otherwise.

def adult_in_group?(people)
    people.any? do |hash|
        age = hash[:age]
        age >= 18
    end
end

# OFFICIAL SOLUTION

# def adult_in_group?(people)
#     people.any? { |person| person[:age] >= 18 }
# end

people_1 = [
    {name: "Jack", age: 17},
    {name: "Jill", age: 21},
    {name: "Alice", age: 15},
    {name: "Bob", age: 16}
]
p adult_in_group?(people_1)    # => true

people_2 = [
    {name: "Jane", age: 12},
    {name: "John", age: 13},
    {name: "Ashley", age: 10},
    {name: "Bill", age: 16}
]
p adult_in_group?(people_2)    # => false

puts "---------PROBLEM 3-----------"

# Write a method, `only_vowels?(str)`, that accepts a string as an arg.
# The method should return true if the string contains only vowels.
# The method should return false otherwise.

def only_vowels?(str)
    vowels = "aeiou"

    str.each_char do |char|
        if !vowels.include?(char)
            return false
        end
    end

    return true
end

# OFFICIAL SOLUTION

# def only_vowels?(str)
#     vowels = "aeiou"
#     str.split("").all? { |char| vowels.include?(char) }
# end

p only_vowels?("aaoeee")  # => true
p only_vowels?("iou")     # => true
p only_vowels?("cat")     # => false
p only_vowels?("over")    # => false

puts "---------PROBLEM 4-----------"

# Write a method, filter_lengths(strings, length), that accepts an array of strings
# and a length as args. The method should return an array containing the strings
# that have at least the given length. The length argument should be optional; if no length
# is passed in, then 5 should be used as the length.

def filter_lengths(strings, length=5)
    strings.select { |string| string.length >= length }
end


p filter_lengths(["pear", "dragonfruit", "fig", "clementine"], 4)   # => ["pear", "dragonfruit", "clementine"]
p filter_lengths(["pear", "dragonfruit", "fig", "clementine"])      # => ["dragonfruit", "clementine"]
p filter_lengths(["cat", "dog", "capybara", "mouse"], 7)            # => ["capybara"]
p filter_lengths(["cat", "dog", "capybara", "mouse"])               # => ["capybara", "mouse"]

puts "---------PROBLEM 5-----------"

# Write a method, max_inject(arr), that accepts any amount of numbers arguments and returns
# the largest number. Solve this using the built-in inject.

def max_inject(*arr)
    arr.inject do |max, el|
        if el > max
            el
        else
            max
        end
    end
end

p max_inject(1, -4, 0, 7, 5)  # => 7
p max_inject(30, 28, 18)      # => 30

puts "---------PROBLEM 6-----------"

# Write a method, union, that accepts any number of arrays as arguments.
# The method should return an array containing all elements of the given arrays.

def union(*arrays)
    new_arr = []
    
    arrays.each do |array|
        new_arr << array
    end

    return new_arr.flatten
end

# OFFICIAL SOLUTION

# def union(*arrays)
#     arrays.inject { |all_elements, array| all_elements + array }
# end

# HINT
# you can add up two arrays
# [1, 2, 3] + [4, 5] = [1, 2, 3, 4, 5]
# all_elements array + current array that we're iterating through

# arrays = 2D array containing all of the arrays passed through
# first array is ["x", "y"]
# all_elements = ["x", "y"]         (first ele in 2D array)
# arr = [true, false]               (second ele in 2D array)
# new_all_elements = ["x", "y", true, false]
# REPEAT 

p union(["a", "b"], [1, 2, 3]) # => ["a", "b", 1, 2, 3]
p union(["x", "y"], [true, false], [20, 21, 23]) # => ["x", "y", true, false, 20, 21, 23]

puts "---------PROBLEM 7-----------"

# Write a method, multi_dimensional_sum(array), that accepts a multidimensional array as an arg 
# and returns the sum of all numbers in the array.

def multi_dimensional_sum(array)
    flattened = array.flatten
    flattened.inject { |acc, el| acc + el }
end

# OFFICIAL SOLUTION
# def multi_dimensional_sum(array)
#     array.flatten.sum
# end

# HINT: remember array.sum = sums up everything inside a 1-D array

arr_1 = [
    [4, 3, 1],
    [8, 1],
    [2]
]

p multi_dimensional_sum(arr_1)    # => 19

arr_2 = [
    [ [3, 6], [7] ],
    [ [5, 2], 1 ]
]

p multi_dimensional_sum(arr_2)    # => 24

puts "---------PROBLEM 8-----------"

# Write a method, swapper(arr, idx_1, idx_2), that accepts an array and two indices as args.
# The method should swap the elements at the given indices and return the array.
# The method should modify the existing array and not create a new array.

def swapper(arr, idx_1, idx_2)
    arr[idx_1], arr[idx_2] = arr[idx_2], arr[idx_1]
    arr
end

p swapper(["a", "b", "c", "d"], 0, 2)               # => ["c", "b", "a", "d"]
p swapper(["a", "b", "c", "d"], 3, 1)               # => ["a", "d", "c", "b"]
p swapper(["canal", "broadway", "madison"], 1, 0)   # => ["broadway", "canal", "madison"]

puts "---------PROBLEM 9-----------"

# Write a method, is_sorted(arr), that accepts an array of numbers as an arg.
# The method should return true if the elements are in increasing order, false otherwise.
# Do not use the built-in Array#sort in your solution :)

# don't use arr.each because then you can't stop prematurely!

def is_sorted(arr)
    (0...arr.length - 1).each do |i|
        if arr[i] > arr[i + 1]         
            return false
        end
    end

    return true
end

# can rewrite as "return false if arr[i] > arr[i + 1]" (one liner)

p is_sorted([1, 4, 10, 13, 15])       # => true
p is_sorted([1, 4, 10, 10, 13, 15])   # => true
p is_sorted([1, 2, 5, 3, 4 ])         # => false

# OFFICIAL SOLUTION

def is_sorted(arr)
    (0...arr.length - 1).all? { |i| arr[i] <= arr[i + 1] }
end

puts "---------PROBLEM 10-----------"

# Reimplement the bubble sort outlined in the preceding lecture.
# The bubble_sort method should accept an array of numbers and arrange the elements in increasing order.
# The method should return the array.
# Do not use the built-in Array#sort

def bubble_sort(arr)
    is_sorted = false
    
    while !is_sorted
        is_sorted = true

        (0...arr.length - 1).each do |i|
            if arr[i] > arr[i + 1]
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_sorted = false
            end
        end
    end

    arr
end

p bubble_sort([2, 8, 5, 2, 6])      # => [2, 2, 5, 6, 8]
p bubble_sort([10, 8, 7, 1, 2, 3])  # => [1, 2, 3, 7, 8, 10]

puts "---------PROBLEM 11-----------"

# Write a method, peak_finder(arr), that accepts an array of numbers as an arg.
# The method should return an array containing all of "peaks" of the array.
# An element is considered a "peak" if it is greater than both it's left and right neighbor.
# The first or last element of the array is considered a "peak" if it is greater than it's one neighbor.

def peak_finder(arr)
    new_arr = []

    (0..arr.length - 1).each do |i|
        if (i == 0) && (arr[i] > arr[i + 1])
            new_arr << arr[0]
        elsif (i == arr.length - 1) && (arr[i] > arr[i - 1])
            new_arr << arr[-1]
        elsif (i != arr.length - 1) && (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) 
            new_arr << arr[i]
        end
    end

    return new_arr
end

p peak_finder([1, 3, 5, 4])         # => [5]
p peak_finder([4, 2, 3, 6, 10])     # => [4, 10]
p peak_finder([4, 2, 11, 6, 10])    # => [4, 11, 10]

# OFFICIAL SOLUTION

def peak_finder(arr)
    peaks = []

    arr.each_with_index do |ele, i|
        target = arr[i]
        left = arr[i - 1]
        right = arr[i + 1]

        if i == 0 && target > right
            peaks << target
        elsif i = arr.length - 1 && target > left
            peaks << target
        elsif target > left && target > right 
            peaks << target
        end
    end

    peaks
end

puts "---------PROBLEM 12 - VERY HARD-----------"

# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

# ATTEMPT ONE: USING A HASH (failed because every key is unique)
def compress_str(str)
    count = Hash.new(0)
    str.each_char { |char| count[char] += 1 }

    new_str = ""
    count.each do |char, num|
        if num > 1
            new_str += num.to_s + char
        elsif num == 1
            new_str += char
        end
    end

    new_str
end

# ATTEMPT TWO: got really close to the solution!

def compress_str(str)
    new_str = ""
    count = 1

    str.each_char.with_index do |char, i|
        if str[i] == str[i + 1]
            count += 1

            if count == 1
                new_str += str[i] 
            elsif count > 1
                new_str += count.to_s
            end
        else
            count = 1
            new_str += str[i]
        end
    end

    return new_str
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"

def compress_str(str)
    new_str = ""

    i = 0
    count = 1                   # we start counting "a"

    while i < str.length
        if str[i + 1] == str[i]
            count += 1      
        else                    # now we've reached "b"
            new_str += count.to_s + str[i]
            count = 1           # now we're counting "b"
        end

        i += 1
    end

    new_str 
end

# OFFICIAL SOLUTION

# use nested loop
# AND use a simple while loop
# why? so we can control the incrementation
# we only increment i inside the inner loop
# char variable will always hold the first char in potential streak
# inner while loop will iterate through that entire streak
# when that inner loop ends, THAT'S when we concatenate!

def compress_str(str)
    new_str = ""

    i = 0
    while i < str.length
        char = str[i]           # finding first instance of char
                                # need to find ENDING point of streak
        count = 0
        while char == str[i]    # while I'm on a streak, I want to count
            count += 1
            i += 1              # inner while loop breaks when streak ends   
        end

        if count > 1
            new_str += count.to_s + char
        else
            new_str += char  # if count is only 1, we don't want num
        end
    end

    return new_str
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"

# MY OWN BRAND NEW SOLUTION

def compress_str(str)
    compressed = ""
    count = 0 

    (0..str.length).each do |i|
        if str[i] == str[i - 1] || i == 0
            count += 1
        else
            if count > 1
                compressed += count.to_s + str[i - 1]
            else
                compressed += str[i - 1]
            end

            count = 1
        end
    end

    compressed
end

puts "---------PROBLEM 13-----------"

# Write a method, replace_char_at!(str, char, idx), that accepts a 
# string, character, and an index as arguments. 

# The method should mutate the str by replacing the 
# given idx of the str with the char. 
# The method should return the str.
# 
# Note: this method must MUTATE the input str. 
# This means that the object_id of the input string should be identical
# to the object_id of the returned string. 
# The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.

def replace_char_at!(str, char, idx)
    str[idx] = char
    str
end


str_1 = "hello"
p str_1.object_id                       # => 70120944788380
result_1 = replace_char_at!(str_1, "j", 0)
p result_1                              # => "jello"
p result_1.object_id                    # => 70120944788380


str_2 = "world"
p str_2.object_id                       # => 70120944769940
result_2 = replace_char_at!(str_2, "!", 2) 
p result_2                              # => "wo!ld"
p result_2.object_id                    # => 70120944769940

puts "---------PROBLEM 14-----------"

# Write a method, scalar_multiple!(array, multiplier), 
# that accepts an array and a number as args. 
# The method should mutate the given array by 
# multiplying all of the elements by the multiplier.
# The method should return the given array.
# 
# Note: this method must MUTATE the input array. 
# This means that the object_id of the input array should be identical
# to the object_id of the returned array. 
# The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.

def scalar_multiple!(array, multiplier)
    (0...array.length).each { |i| array[i] *= multiplier }
    array
end

array_1 = [7, 0, 4]
p array_1.object_id                             # => 70326264380840
result_1 = scalar_multiple!(array_1, 3)
p result_1                                      # => [21, 0, 12]
p result_1.object_id                            # => 70326264380840


array_2 = [90, 30, 4, 12]
p array_2.object_id                             # => 70326264378100
result_2 = scalar_multiple!(array_2, 0.5)
p result_2                                      # => [45.0, 15.0, 2.0, 6.0]
p result_2.object_id                            # => 70326264378100

# OFFICIAL SOLUTION
# I used the array.map method but didn't work because it made a new array
# if you want to MUTATE existing array, then do array.map! with exclamation
# returns the original array while modifying each individual element in array

def scalar_multiple!(array, multiplier)
    array.map! { |ele| ele * multiplier }
end

puts "---------PROBLEM 15 - VERY HARD-----------"

# Write a method, my_rotate!(array, amt), that accepts an array and a number as args.
# The method should mutate the array by rotating the elements 'amt' number of times.

# When given a positive 'amt', a single rotation will rotate right, 
# causing the first element to become the last.

# When given a negative 'amt', a single rotation will rotate left, 
# causing the last element to become the first.

def my_rotate!(array, amt)
    new_array = []

    array.each_with_index do |ele, i|
        if amt > 1
            new_i = (i + amt) % array.length
            new_ele = array[new_i] 
            new_array << new_ele
        elsif amt < 1
            new_i = (i - amt) % array.length
            new_ele = array[new_i]
            new_array << new_ele
        end
    end

    new_array
end

# OFFICIAL SOLUTION

# okay so it turns out I misunderstood the problem
# plus it appears that the problem was written wrong??

# CORRECT QUESTION

# for a positive rotation, first element becomes last
    # grab the first ele
    # add it to the end of array
# for a negative rotation, last element becomes first
    # grab the last ele
    # add it to the start of array

def my_rotate!(array, amt)
    if amt > 0
        amt.times do            # we want to repeat this motion amt times
            ele = array.shift   # grabs the first element and removes it
            array.push(ele)     # pushes that element to the end of array
        end
    elsif amt < 0
        (-amt).times do         # amt is a negative num, so make it positive
            ele = array.pop     # grabs the last element and removes it
            array.unshift(ele)  # unshifts that element to the start of array
        end
    end

    array
end

# REMEMBER ARRAY MANIPULATION
# add element(s) to the end using push
# remove the last element using pop
# add elements(s) to the front using unshift
# remove the first element using shift

array_1 = ["a", "b", "c", "d"]
p array_1.object_id                 # => 70354216023780
result_1 = my_rotate!(array_1, 2)
p result_1                          # => ["c", "d", "a", "b"]
p result_1.object_id                # => 70354216023780

array_2 = ["NOMAD", "SOHO", "TRIBECA"]
p array_2.object_id                 # => 70354216019660
result_2 = my_rotate!(array_2, 1)
p result_2                          # => ["SOHO", "TRIBECA", "NOMAD"]
p result_2.object_id                # => 70354216019660

array_3 = ["a", "b", "c", "d"]
p array_3.object_id                 # => 70354216016500
result_3 = my_rotate!(array_3, -3)
p result_3                          # => ["b", "c", "d", "a"]
p result_3.object_id                # => 70354216016500

puts "---------PROBLEM 16-----------"

# Write a method, ele_replace!(array, hash), that accepts an array and a hash as args.
# The method should mutate the given array by replacing elements with their corresponding values in the hash.
# The method should return the given array.
#
# Note: this method must MUTATE the input array. This means that the object_id of the input array should be identical
# to the object_id of the returned array. The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.

def ele_replace!(array, hash)
    hash.each do |key, value|
        array.each_with_index do |ele, i|
            if array[i] == key
                array[i] = value
            end
        end
    end

    array
end


array_1 = [4, 2, 0, 2]
p array_1.object_id         # => 70119569670520
result_1 = ele_replace!(array_1, {2=>"two", 0=>"zero", 5=>"five"})
p result_1                  # => [4, "two", "zero", "two"]
p result_1.object_id        # => 70119569670520


array_2 = ["Matthias", "Simcha", "Mashu", "David"]
p array_2.object_id         # => 70119569668160
result_2 = ele_replace!(array_2, "Matthias"=>"J", "Mashu"=>"D")
p result_2                  # => ["J", "Simcha", "D", "David"]
p result_2.object_id        # => 70119569668160

# OFFICIAL SOLUTION
# use array.map! method to take every ele and replace it with something else
# no need to loop through the hash either, since you already know the key (ele)
# check if the hash contains the key ele 
# if it does, then replace with value by doing hash[ele]
# if not, then simply put back in the original ele

def ele_replace!(array, hash)
    array.map! do |ele|             # use map! to mutate original array
        if hash.has_key?(ele)       # use hash.has_key?() to check if it's key
            hash[ele]               # replace ele with the corresponding value
        else
            ele                     # if it's not a key, then just leave old ele
        end
    end
end

# FASTER WAY

def ele_replace!(array, hash)
    array.map! { |ele| hash.has_key?(ele) ? hash[ele] : ele } 
end

puts "---------PROBLEM 17-----------"

# Write a method, grid(n, m), that accepts two numbers as args.
# The method should return a 2D array with n rows and m columns
# (this means that there are n subarrays, each of length m).

def grid(n, m)
    Array.new(n) { Array.new(m) }   # use {} block to make subarrays
end

result_1 = grid(2, 3)
p result_1              # => [[nil, nil, nil], [nil, nil, nil]]
result_1[0][0] = "X"
p result_1              # => [["X", nil, nil], [nil, nil, nil]]


result_2 = grid(4, 2)
p result_2              # => [[nil, nil], [nil, nil], [nil, nil], [nil, nil]]
result_2[0][0] = "Q"
p result_2              # => [["Q", nil], [nil, nil], [nil, nil], [nil, nil]]

puts "---------PROBLEM 18-----------"

# take in a string, spit out a new string 
# where every other word is lowercase/uppercase

def alternating_case(sent)
    words = sent.split(" ")
    new_words = words.map.with_index do |word, i|
        if i % 2 == 0
            word.upcase
        else
            word.downcase
        end
    end

    new_words.join(" ")
end

# FASTER WAY

def alternating_case(str)
    new_str = str.split(" ").map.with_index { |word, i| i.even? ? word.upcase : word.downcase }
    new_str.join(" ")
end

p alternating_case("hello programmers")

puts "---------PROBLEM 19-----------"

def hipsterfy(word)
    vowels = "aeiou"

    i = word.length - 1
    while i >= 0
        char = word[i]
        if vowels.include?(char)
            return word[0...i] + word[i + 1..-1]
        end
        i -= 1
    end

    word
end

p hipsterfy("cheeseburger")

# FASTER WAY

def hipsterfy(word)
    vowels = "aeiou"
    (word.length - 1).downto(0) do |i| 
        if vowels.include?(word[i])
            return word[0...i] + word[i + 1..-1]
        end
    end
    word
end

puts "---------PROBLEM 20-----------"

def vowel_counts(string)
    vowels = "aeiou"
    vowel_count = Hash.new(0)

    string.each_char do |char|
        if vowels.include?(char.downcase)
            vowel_count[char.downcase] += 1
        end
    end

    vowel_count
end

p vowel_counts("Hello there world")

# FASTER

def vowel_counts(str)
    vowels = "aeiou"
    counter = Hash.new(0)
    str.each_char { |char| counter[char.downcase] += 1 if vowels.include?(char.downcase) }
    counter
end

puts "---------PROBLEM 21-----------"

def caesar_cipher(message, n)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    # this is tedious to write, however
    # you can do a range! 
    # (4..8) is all nums from 4 to 8 inclusive
    # want all the numbers? do to_a
    # (4..8).to_a ==> [4, 5, 6, 7, 8]
    # you can have a range of LETTERS
    # ('b'..'y').to_a ==> all letters from b to y
    # ('a'..'z').to_a ==> EVERYTHING in the alphabet

    new_str = ""
    
    message.each_char do |char|
        if alphabet.include?(char)
            alpha_index = alphabet.index(char)
            new_index = (alpha_index + n) % alphabet.length
            new_char = alphabet[new_index]
            new_str += new_char
        else
            new_str += char
        end
    end

    new_str
end

p caesar_cipher("hi there world 123", 1)

# FASTER

def caesar_cipher(str, n)
    alpha = ("a".."z").to_a
    new_str = str.split(//).map do |char|
        if alpha.include?(char)
            alpha_index = alpha.index(char)
            new_index = (alpha_index + n) % alpha.length
            new_char = alpha[new_index]
            new_char
        else
            char
        end
    end
    new_str.join("")
end

puts "---------PROBLEM 22-----------"

# find the average of the numbers in an array
# old method

def average_array(array)
    sum = 0.0

    array.each do |ele| 
        sum += ele
    end

    return sum / array.length
end

# new method

def average_array(array)
  array.sum / array.length.to_f
end

# length of an array is always a whole number
# we want a DECIMAL result, however
# (nums.length * 1.0) manages to fix that
# to_f method transforms a number into a decimal (3.0)
# alternatively, to_i method transforms number into whole (3)

p average_array([3, 4, 5])

puts "---------PROBLEM 22-----------"

# repeat a string a certain number of times
# old method

def repeat(str, num)
    new_str = ""
    num.times { new_str += str }
    new_str
end

# new method

def repeat(string, num)
  string * num
end

p repeat("Hi", 5)

# you can take a string and multiply it by a number
# string data multiplied by number data
# ruby will interpret it as "repeat this string x num of times"
# string times number (order matters!)

puts "---------PROBLEM 23-----------"

# return a 2D array where first subarray contains elements less than num
# and second subarray contains elements greater than/equal to number

def partition(array, num)
    new_array = [] # not necessary to create this, can just return []
    first_sub = []
    second_sub = []

    array.each do |ele|
        if ele < num 
            first_sub << ele
        else
            second_sub << ele
        end
    end

    new_array << first_sub
    new_array << second_sub
    new_array
    # instead, you could just return [first_sub, second_sub]
end

p partition([1, 2, 3, 4, 5], 3)

puts "---------PROBLEM 24-----------"

# merge two hashes together into new hash
# if they have the same key, then take value from second hash

# ATTEMPT ONE (failed)
def merge(hash_1, hash_2)
    new_hash = {}

    hash_1.each do |key, value|
        if hash_2.has_key?(key)
            second_value = hash_2[key]
            new_hash[key] = second_value
        else
            first_value = hash_1[key]
            new_hash[key] = first_value
        end
    end

    new_hash
end

p merge({"a"=>10, "b"=>20}, {"c"=>30, "d"=>40, "e"=>50})
p merge({"a"=>10, "b"=>20}, {"c"=>30, "b"=>7})

# ATTEMPT TWO (worked)

def merge(hash_1, hash_2)
    new_hash = {}

     hash_1.each do |k1, v1|
        hash_2.each do |k2, v2|

            if k1 == k2
                new_hash[k2] = v2
            else
                new_hash[k1] = v1
                new_hash[k2] = v2
            end

        end
    end

    new_hash
end

p merge({"a"=>10, "b"=>20}, {"c"=>30, "d"=>40, "e"=>50})
p merge({"a"=>10, "b"=>20}, {"c"=>30, "b"=>7})

# OFFICIAL SOLUTION

def merge(hash_1, hash_2)
  new_hash = {}
  hash_1.each { |k, v| new_hash[k] = v }
  hash_2.each { |k, v| new_hash[k] = v } 
  # if key repeats, will replace with value from second hash!
  # it will overwrite any existing keys from first hash
  new_hash
end

puts "---------PROBLEM 25-----------"

# censor curse words

def remove_vowels(word)
    vowels = "aeiou"
    new_word = ""

    word.each_char do |char|
        if vowels.include?(char.downcase)
            new_word += "*"
        else
            new_word += char
        end
    end
    
    new_word
end

def censor(sent, array)
    words = sent.split(" ")
    new_words = []

    words.each do |word|
        if array.include?(word.downcase) # REMEMBER DOWNCASE 
            new_word = remove_vowels(word)
            new_words << new_word
        else
            new_words << word
        end
    end

    new_words.join(" ")
end

p censor("SHUT THE FRONT DOOR", ["door"])

# OFFICIAL SOLUTION
# you can replace each curse word using "map" method
# no need to do an "each" loop through every word

def censor(sentence, curse_words)
  new_words = sentence.split(" ").map do |word|
    if curse_words.include?(word.downcase)
      remove_vowels(word)
    else
      word
    end
  end

  new_words.join(" ")
end

puts "---------PROBLEM 26-----------"

# return true if the number is a power of two

def power_of_two?(num)
    (0...num).each do |exponent|
        if 2 ** exponent == num
            return true
        end
    end

    return false
end

p power_of_two?(1)

# OFFICIAL SOLUTION
# use a while loop to loop through every single number 
# and then redefine it (number = number * 2)

# product of two multiplied by itself repeatedly
# 2 x 2 x 2 x 2 = 16
# 16 is a power of 2
# NOT every single even number! for example, 6 is not a power of 2

def power_of_two?(num)
  product = 1           # keep multiplying this product by 2 

  while product < num   # loop breaks when product is equal to target num
                        # if num is 28, then loop breaks when product = 32
                        
    product *= 2        # redefine the product variable!
                        # as it loops, product = 1, 2, 4, 8, 16
  end

  product == num        # loop breaks, check to see if target num IS product
                        # if num IS power of two, then it will perfectly land

                        # but if num is 28, loop breaks when product is 32
                        # then we check to see if 32 is equal to 28 - FALSE
end

puts "---------PROBLEM 27-----------"

# return true if it's a palindrome

def palindrome?(string)
    string.each_char.with_index do |char, i|
        first = string[i]
        second = string[string.length - 1 - i]

        if first != second
            return false
        end 

        # another way of writing this if statement
        # if string[i] != string[-i - 1]
        # 0, -1
        # 1, -2
    end

    return true
end

p palindrome?("madam")

puts "---------PROBLEM 28-----------"

# return array of all the substrings of a string


def substrings(string)
    arr = []

    i = 0
    while i < string.length

        j = string.length
        while j > 0
            substring = string[i...j]

            if substring.length > 0
                arr << substring
            end

            j -= 1
        end
        
        i += 1
    end

    arr
end

# OFFICIAL SOLUTION
# also do a nested loop, with i = start index and j = end index
# except j STARTS at i (doesn't start at end and go backwards)

# how to approach this problem?
# choose a start and end position of a string and grab everything in middle
# using the slice method: string[start...end]
# grab start index and end index

# grab pairs of indices by using nested loops
# outer loop will iterate through start indices
# first index is always zero, go up until string.length (exclusive)

# inner loop will iterate through end indices
# we DON'T want it to start at 0!
# instead, we start it AT the start index 
# end index will either be exactly the same as start index OR afterwards
# if we start it at start_idx + 1, then we MISS the single chars ("j")

# first iteration: start is 0, end is also 0 
# in that case, the substr will yield the first character (slice from 0 to 0)

# second iteration: start is 0, end is 1
# this keeps going UNTIL the end index is all the way to the end
# once that happens, we go back to the outer loop and change start idx


def substrings(string)
  subs = []

  (0...string.length).each do |start_idx|
    (start_idx...string.length).each do |end_idx|
      subs << string[start_idx..end_idx]
    end
  end

  subs
end

######### MY PREVIOUS METHOD EXCEPT FIXED

def substrings(string)
    arr = []

    i = 0
    while i < string.length

        j = i
        while j < string.length
            substring = string[i..j]
            arr << substring

            j += 1
        end
        
        i += 1
    end

    arr
end

p substrings("jump")

puts "---------PROBLEM 29-----------"

# return array of substrings that are palindromes

def palindrome_substrings(string)
    arr = []
    substrings = substrings(string)

    substrings.each do |substring|
        if palindrome?(substring) && substring.length > 1
            arr << substring
        end
    end

    arr
end

p palindrome_substrings("abracadabra")

# OFFICIAL SOLUTION
# use "select" to pick out the substrings that are palindromes & bigger than 1

# call substrings(string) to create an array of substrings
# from this array, we can use "select" method
# we call the boolean palindrome? to choose all substrings that ARE palindromes
# the "select" method returns an array of all the substrings that pass the boolean

puts "---------QUIZ PROBLEMS-----------"

def palindrome_substrings(string)
    substrings(string).select { |substr| palindrome?(substr) && substr.length > 1 }
end

### 
def add(a, b)
    a + b
end

add(4, 5)

###

DRINK = "coffee"

def my_method(person)
    person + " loves " + DRINK
end

my_method("Andrew")


## THIS USUALLY DOESN'T WORK
# local variable
# but if u use all caps its global and DOES work

def add_element(arr)
    arr << 4
end

numbers = [1, 2, 3]
add_element(numbers)
numbers

# the array is FOREVER CHANGED

def add_five(num)
    num += 5
end

number = 10

add_five(number)

# the number is NOT forever changed

two_d = Array.new(2, [])

two_d[0] << "a"
two_d[1] << "b"

two_d

# you get [[a, b] [a, b]]


def save_last_vowels(sentence)
    words = sentence.split(" ")
    new_words = []

    words.each { |word| new_words << change_word(word) }

    new_words.join(" ")
end

def change_word(word)
    vowels = "aeiou"

    i = word.length - 1
    while i >= 0
        char = word[i]
        if vowels.include?(char)
            first_slice = word[0...i]
            second_slice = word[i..-1]
            return remove_vowels(first_slice) + second_slice
        end

        i -= 1 # remember to do this step AND to go backwards!
    end
end

def remove_vowels(str)
    vowels = "aeiou"
    new_str = ""

    str.each_char do |char|
        if !vowels.include?(char)
            new_str += char
        end
    end 

    new_str
end

p save_last_vowels("proper")

####

def anti_prime?(num)
    (1...num).each do |prev_num|
        if find_divisors(prev_num) >= find_divisors(num) # remember equal sign
            return false
        end
    end

    true
end

def find_divisors(num)
    arr = []

    (1..num).each do |divisor|
        if num % divisor == 0
            arr << divisor
        end
    end

    arr.length
end

p find_divisors(12)

## 

def is_prime?(num)
    if num < 2
        return false
    end

    (2...num).each do |factor|
        if num % factor == 0 
            return false
        end
    end

    true
end

p is_prime?(2) # true
p is_prime?(4) # false
p is_prime?(0) # false

# return an array of all prime numbers between min and max
def prime_range(min, max)
    (min..max).select { |num| is_prime?(num) }
end

p prime_range(1990, 2000) # [1993, 1997, 1999]

# return hash where each key is element of array 
# corresponding value is number of times it appears in array
def element_count(array)
    counter = Hash.new(0)
    array.each { |ele| counter[ele] += 1 }
    counter
end

p element_count(["a", "b", "c", "c"]) # {"a" => 1, "b"=>1, "c"=>2}


# mutate string by replacing chars with corresponding values in hash
def char_replace!(str, hash)
    (0..str.length - 1).each do |i|
        char = str[i]

        if hash.has_key?(char)
            str[i] = hash[char]
        end
    end

    str
end

string_1 = "hello world"
p char_replace!(string_1, {"l"=>"7", "e"=>"a", " "=>"-", "o"=>"q"})
# "ha77q-wqr7d"

# return total product of all elements multiplied together
def product_inject(array)
    array.inject { |acc, ele| acc * ele }
end

p product_inject([4, 2, 5]) # 40
p product_inject([4, 2, 5, 3]) # 120


puts "---------NTH PRIME QUESTION - FIGURE IT OUT!-----------"
# return the nth prime number sequentially

# def nth_prime(n)
#     prime_array = []
    
#     (2...2000).each do |num|
#         if is_prime?(num)
#             prime_array << num
#         end
#     end

#     prime_array[n - 1]
# end

def nth_prime(n)
    prime_array = []

    i = 0
    while prime_array.length < n    # stop the loop when arr.length < n
        if is_prime?(i)
            prime_array << i
        end
        i += 1
    end

    prime_array[n - 1]
end

p nth_prime(1) # 2
p nth_prime(2) # 3
p nth_prime(3) # 5
p nth_prime(300) # 1987

puts "---------FIRST N PRIMES - SOLUTION-----------"

def is_prime?(number)
    (2...number).each do |factor|
        return false if number % factor == 0
    end

    true
end

def first_n_primes(num_primes)
    primes = []
    num = 2
    
    while primes.length < num_primes 
        primes << num if is_prime?(num)
        num += 1
    end

    primes
end

p first_n_primes(5) # 2, 3, 5, 7, 11

puts "---------TITLEIZE-----------"

# Write a method, titleize, that accepts a string representing a title 
# and capitalizes each word in a string except 'a', 'and', 'of', 'on', or 'the'.
# The first word of the title should be capitalized no matter what.

def titleize(title)
  little_words = [ "and", "the", "over", "a", "on", "of" ]
  # you have to bring this variable INSIDE the method
  # or, if you really want it to be outside the method, LITTLE_WORDS in caps

  words = title.split(" ")

  titleized_words = words.map.with_index do |word, i|
    if i == 0 || !little_words.include?(word)
      word.capitalize 
      # ERROR: undefined method "capitalize"
      # use byebug to figure out what's going on
      # drop debugger before capitalize
      # display i: i = "jaws"
      # display word: word = 0

      # here is the error! we can't call "capitalize" on an integer
      # we mixed up the order of parameters (i, word => word, i)
    else
      word.downcase
    end
  end

  titleized_words.join(" ")
end

p titleize("war and peace") # War and Peace

puts "---------PRIME?-----------"

# Write a method, prime?, that accepts a number. It should return a boolean indicating whether or not the given number 
# is a prime. A prime number is only divisible by 1 and itself, it should have no other divisors.

def prime?(num) # remember to add question mark here!
    return false if num < 2

    (2...num).each do |factor|
        if num % factor == 0
            return false
        end
    end

    true # make sure to return true only AFTER loop ends
end

p prime?(7) # true

puts "---------LETTER COUNT-----------"

# Write a method, letter_count, that accepts a string and char as args. 
# The method should return the number of times that the char appears in the string.

def letter_count(string, char)
    count = 0 # don't start at nil, start at 0 (can't add 1 to nil!)
    string.each_char do |c| 
        count += 1 if c.downcase == char.downcase 
        # not counting things correctly, because = instead of ==
        # it's case sensitive, so make sure to downcase both
    end 
    count
end

p letter_count("MISSIPPI", "i") # 3
p letter_count("apple", "q") # 0

puts "---------MANY VOWEL WORDS-----------"

# Write a method, many_vowel_words, that accepts a sentence string as an arg. 
# The method should return a new sentence containing only the words that contain 
# two or more vowels.

def many_vowel_words(sentence)
    words = sentence.split(" ")

    new_words = words.select do |word|
        num_vowels = num_vowels(word)
        num_vowels >= 2
    end

    new_words.join(" ")
end

def num_vowels(word)
    count = 0
    word.each_char do |char|
        count += 1 if "aeiou".include?(char)
    end
    count
end

p many_vowel_words("Hello world, how are you") # Hello are you

puts "---------FUZZ BUZZ-----------"

# Write a method, fuzz_buzz, that accepts a number as an arg. 
# The method should return an array of numbers from one to the given number 
# that are not divisible by 3 or 5.

def fuzz_buzz(num)
    numbers = []

    (1..num).each do |i|
        if !(i % 3 == 0 || i % 5 == 0)
        # NOT divisible by three OR five
        # you have to write it that specific way

        # incorrect: i % 3 != 0 || i % 5 != 0
        # you can't distribute the NOT in that way

        # !(A || B) is equivalent to !A && !B
        # that's why my solution also worked
        # i % 3 != 0 && i % 5 != 0
        # you can distribute the ! but you have to flip operations

        # !(A && B) is not equivalent to !A && !B
        # when you distribute not across, you have to flip operation
        # !(A && B) == !A || !B
        # this is Morgan's Law
            
            numbers << i
        end
    end

    numbers
end

p fuzz_buzz(11) # [1, 2, 4, 7, 8, 11]

puts "---------HALF AND DOUBLE-----------"

# Write a method, half_and_double, that accepts an array of numbers as an arg. 
# The method should return a new array where every even number is divided by 2 and every odd
# number is multipled by 2.

def half_and_double(array)
    new_array = array.map do |num|
        if num % 2 == 0
            num / 2     
            # don't write "return" here, or else you immediately return the number 2
            # it will make you exit the entire map method
        else
            num * 2     
        end
    end

    new_array
end

p half_and_double([4, 5, 7, 10]) # ([2, 10, 14, 5])

puts "---------DUPE INDICES-----------"

# ATTEMPT ONE

# def dupe_indices(array)
#     repeated = Hash.new([])
#     seen = []
#     first_instance = Hash.new(0)

#     array.each_with_index do |ele, i|
#         if !seen.include?(ele)
#             seen << ele
#             first_instance[ele] += i
#         elsif seen.include?(ele)
#             repeated[ele] += [i]
#             first_index = first_instance[ele]
#             repeated[ele] += [first_index]
#         end
#     end

#     repeated
# end

# ATTEMPT TWO

# def dupe_indices(array)
#     repeated = Hash.new([])
#     seen = []

#     array.each_with_index do |ele, i|
#         if !seen.include?(ele)
#             seen << ele
#             repeated[ele] = [i]
#         elsif seen.include?(ele)
#             repeated[ele] += [i]
#         end
#     end

#     repeated
# end

## ATTEMPT THREE (WORKED)
# make two hashes using helper function

# if value.length > 1
#     make it a key in new hash

def idx_count(arr)
    counter = Hash.new([])

    arr.each_with_index do |ele, i|
        counter[ele] += [i]
    end

    counter
end

def dupe_indices(arr)
    counter_hash = idx_count(arr)
    result_hash = Hash.new([])

    counter_hash.each do |key, value|
        if value.length > 1
            result_hash[key] = value
        end
    end

    result_hash
end

p dupe_indices(["a", "b", "c", "c", "b"]) # {"b"=>[1,4], "c"=>[2,3]}
p dupe_indices(["a", "a", "c", "c", "b", "c"]) # {"a"=>[0,1], "c"=>[2,3,5]}
p dupe_indices(["a", "b", "c"]) # {}

# OFFICIAL SOLUTION

def dupe_indices(array)
    indices = Hash.new { |h, k| h[k] = [] }
        # every value of the hash has to be a unique array
        # so we need to use the block syntax 
        # must take in two block parameters, the hash and the key
        # write an expression that will set default value
        # hash[key] = []
        # so now I can make a key 
            # indices["alvin"]
        # and shovel things as a value 
            # indices["alvin"] << "z"
            # {"alvin" => ["z"]}

        # QUESTION --- IS THIS ENTIRELY NECESSARY?
        # BECAUSE IN MY SOLUTION, I DIDN'T DO THIS...STILL WORKED??
    array.each_with_index { |ele, i| indices[ele] << i }
        # iterate over the array + track index
        # we are shoveling each element's index inside the hash
        # result
            # dupe_indices(["a", "b", "n"])
            # {"a" => [0], "b" => [1, 2]}
        # however this doesn't pass rspec yet 
        # because we don't want to include chars that occur once!
    indices.select { |ele, indices| indices.length > 1 }
        # ok so apparently you can use select on a hash??
        # hash.select is ALLOWED
            # just like array.select
            # does not, however, work for strings
        # hash.select { |key, value| value.length > 1 }
end 

# MY ORIGINAL SOLUTION (EXCEPT THIS TIME I'M USING SELECT ON A HASH)

def dupe_indices(arr)
    counter = Hash.new([])

    arr.each_with_index do |ele, i|
        counter[ele] += [i]
    end

    counter.select { |key, value| value.length > 1 }
end

puts "---------LARGEST PRIME FACTOR-----------"

def is_prime?(num)
    if num < 2 
        return false
    end

    (2...num).each do |factor|
        if num % factor == 0 
            return false
        end
    end

    true
end

def largest_prime_factor(num)
    i = num
    while i >= 2
        if num % i == 0 && is_prime?(i)
            return i
        end
        i -= 1
    end
end

p largest_prime_factor(15) # 5
p largest_prime_factor(2) # 2

# OFFICIAL SOLUTION

def prime?(num)
    return false if num < 2
    (2...num).none? { |factor| num % factor == 0 }
end

def largest_prime_factor(num)
    num.downto(2) { |factor| return factor if num % factor == 0 && prime?(factor) }
end

puts "---------UNIQUE CHARS?-----------"

def unique_chars?(str)
    counter = Hash.new(0)
    
    str.each_char do |char|
        counter[char] += 1
    end

    counter.each_value do |value|
        return false if value > 1
    end

    true
end

p unique_chars?("dog") # true
p unique_chars?("bicycle") # false

# OFFICIAL SOLUTION

def unique_chars?(string)
    already_seen = []

    string.each_char do |char|
        return false if already_seen.include?(char)
        already_seen << char
    end

    true
end

puts "---------ANAGRAM ARRAYS?-----------"

def ele_count(arr)
    counter = Hash.new(0)
    
    arr.each do |ele|
        counter[ele] += 1
    end

    counter
end

def ana_array(arr_1, arr_2)
    arr1_eles = ele_count(arr_1)
    arr2_eles = ele_count(arr_2)

    if arr1_eles == arr2_eles
        return true
    else
        return false
    end
end

p ana_array(["cat", "dog", "cat"], ["dog", "cat", "cat"]) # true
p ana_array(["cat", "dog", "cat"], ["dog", "cat", "mouse"]) # false
p ana_array(["cat", "dog"], ["cat"]) # false

# OFFICIAL SOLUTION

def ele_count(arr)
    count = Hash.new(0)

    arr.each { |ele| count[ele] += 1 }

    count
end

def ana_array(arr_1, arr_2)
    count_1 = ele_count(arr_1)
    count_2 = ele_count(arr_2)
    count_1 == count_2
end

puts "---------BLOCK PROJECT PART I-----------"

# accept array of nums, return array containing even nums

def select_even_nums(arr)
    arr.select { |num| num % 2 == 0 }
end

p select_even_nums([7, 3, 2, 5, 12]) # [2, 12]

# accept array of dog hashes, return array containing dogs older than 2

def reject_puppies(dogs)
    dogs.reject { |dog| dog["age"] <= 2 }
end

dogs = [
        {"name"=>"Fido", "age"=>3},
        {"name"=>"Spot", "age"=>2},
        {"name"=>"Rex", "age"=>5},
        {"name"=>"Gizmo", "age"=>1}
    ]

p reject_puppies(dogs)
# [{"name"=>"Fido", "age"=> 3}, {"name"=>"Rex", "age"=>5}]

# accept 2D array and return number of subarrays whose elements sum to + number

def count_positive_subarrays(arr)
    arr.count { |subarray| subarray.sum > 0}
end

array = [
        [-2, 5],
        [1, -9, 1],
        [4, 7]
      ]

p count_positive_subarrays(array) # 2

# accept word and transform it by putting a "b" after every vowel + repeated vowel

def aba_translate(word)
    vowels = "aeiou"
    new_word = ""

    word.each_char do |char|
        if vowels.include?(char)
            new_word += char + "b" + char
        else 
            new_word += char 
        end
    end

    new_word
end

p aba_translate("cats") # cabats

# accept array of words and return new array where every word has been modified
# per aba translate

def aba_array(words)
    words.map { |word| aba_translate(word) }
end

p aba_array(["fly", "kite"])  # "fly", "kibitebe"
     
puts "---------BLOCK PROJECT PART II-----------"

# receives array of words
# return true when all words are properly capitalized

def all_words_capitalized?(words)
    words.all? { |word| word == word.capitalize } 
end

p all_words_capitalized?(["Follow", "the", "Yellow", "Brick", "Road"]) # false
all_words_capitalized?(["Hello", "World"]) # true

puts "----"

# receives array of urls
# return true when none of the urls end in .com, .net, .io, .org

def no_valid_url?(urls)
    urls.none? do |url|
        endings = [".com", ".net", ".io", ".org"]
        slice = url[-4..-1] # not super accurate bc endings have diff lenths
        endings.include?(slice)
    end
end

# ANOTHER APPROACH (using split)

def no_valid_url?(urls)
    urls.none? do |url|
        endings = [".com", ".net", ".io", ".org"]
        last_bit = "." + url.split(".")[-1]
        endings.include?(last_bit)
    end
end

p no_valid_url?(["appacademy.biz", "sennacy.com"]) # false
p no_valid_url?(["appacademy.biz", "awebsite.me"]) # true
puts "----"

# OFFICIAL SOLUTION

def no_valid_url?(urls)
  endings = [".com", ".net", ".io", ".org"]
  urls.none? do |url|
    endings.any? { |ending| url.end_with?(ending) }
  end
end

# receives array of student hashes
# return true when at least one student has avg grade of 75 or more

def any_passing_students?(students)
   students.any? do |student|
        grades = student[:grades]
        avg_grade = grades.sum / grades.length
        avg_grade >= 75
    end
end

students_1 = [
          { name: "Alvin", grades: [70, 50, 75] },
          { name: "Warlin", grades: [80, 99, 95] },
          { name: "Vlad", grades: [100] },
        ]

p any_passing_students?(students_1) # true
puts "----"

puts "---------PROCS PROJECT PART I-----------"

# accept array and block
# return new array where eles are results of block when passed in each ele

def my_map(arr, &prc)
    new_arr = []
    arr.each { |ele| new_arr << prc.call(ele) }
    new_arr
end

p my_map([1,2,3]) { |n| 2 * n } # 2, 4, 6

# accept array and block
# return new array where eles are eles of OG array where block resulted in true

def my_select(arr, &prc)
    new_arr = []
    arr.each { |ele| new_arr << ele if prc.call(ele) }
    new_arr
end

p my_select([6, 11, 13], &:odd?) # [11, 13]

# accept array and block
# return number rep count of eles that resulted in true when passed in block

def my_count(arr, &prc)
    count = 0
    arr.each { |ele| count += 1 if prc.call(ele) }
    count
end

p my_count(["DANIEL", "JIA", "KRITI", "dave"]) { |s| s === s.upcase } # 3

# accept array and block
# return true when at least one ele of array results in true when passed in block
# return false when all elements of array result in false

def my_any?(arr, &prc)
    arr.each { |ele| return true if prc.call(ele) }
    false
end

p my_any?(["q", "r", "s", "i"]) { |char| "aeiou".include?(char) } # true

# accept array and block
# return true when ALL elements of array result in true when passed in block
# return false when at least one ele of array results in false

def my_all?(arr, &prc)
    arr.each { |ele| return false if !prc.call(ele)}
    true
end

p my_all?([3, 5, 7, 11]) { |n| n.odd? } # true

# accept array and block
# return true when none of eles of array result in true when passed in block
# return false when at least one ele of array results in true

def my_none?(arr, &prc)
    arr.each { |ele| return false if prc.call(ele) }
    true
end

p my_none?([3, 5, 7, 11]) { |n| n.even? } # true

puts "---------PROCS PROJECT PART II-----------"

# accepts string and block
# return result of block when passed the string with chars reversed

def reverser(str, &prc)
    prc.call(str.reverse)
end

p reverser("hello") { |string| string + "!!!" }  # "olleh!!!"

# accepts string and block
# return new sentence where every word becomes result of block

def word_changer(str, &prc)
    words = str.split(" ")
    new_words = []

    words.each { |word| new_words << prc.call(word) }

    new_str = new_words.join(" ")
    new_str
end

p word_changer("goodbye moon") { |word| word.upcase + "!" } # "GOODBYE! MOON!"

# accepts number and two procs
# return the greater result of the two procs when each is passed the num

def greater_proc_value(num, prc1, prc2)
    result1 = prc1.call(num)
    result2 = prc2.call(num)

    if result1 > result2
        return result1
    elsif result2 > result1
        return result2
    end
end

times_10 = Proc.new { |n| n * 10 }
square = Proc.new { |n| n * n }
negate = Proc.new { |n| n * -1 }

p greater_proc_value(3, times_10, square) # 30

# accepts array and two procs
# return an array containing eles of original array that result in true 
# when passed into BOTH blocks

def and_selector(arr, prc1, prc2)
    arr.select { |ele| prc1.call(ele) && prc2.call(ele) }
end

even = Proc.new { |n| n.even? }
negative = Proc.new { |n| n < 0 }

p and_selector([-5, 0, -8, 8, -2], even, negative) # [-8, -2]


# accept array and two procs
# return new array where all eles at even indices are results of ele passed
# in the first proc
# and all eles at odd indices are results of ele passed in the second proc

def alternating_mapper(arr, prc1, prc2)
    arr.map.with_index do |ele, i|
        if i % 2 == 0
            prc1.call(ele)
        else 
            prc2.call(ele)
        end
    end
end

half = Proc.new { |n| n / 2.0 }
times_thousand = Proc.new { |n| n * 1000 }

p alternating_mapper([1,10,4,7,5], half, times_thousand)
# [0.5, 10000, 2.0, 7000, 2.5]

puts "---------NTH FIBONACCI-----------"

# write a method that takes in a number n 
# returns the nth number of the fibonacci sequence
# this is a sequence where first and second nums are both 1
# the next num of sequence is generated by summing up the previous two nums

# def nth_fibonacci(n)
#     arr = []

#     while arr.length < n
#         if arr.length < 2
#             arr << 1
#         else
#             last = arr[-1]
#             penultimate = arr[-2]
#             sum = last + penultimate
#             arr << sum
#         end
#     end

#     arr[n - 1]
# end

# 1, 1, 2, 3, 5, 8

def nth_fibonacci(n) # 4
    if n < 3
        return 1
    end

    first_num = 1
    second_num = 1 # 2
    third_num = 2 

    i = 3
    while i <= n
        third_num = first_num + second_num # 3
        first_num = second_num # 2
        second_num = third_num # 2
        
        i += 1
    end

    third_num # 3
end

p nth_fibonacci(1) # 1
p nth_fibonacci(2) # 1
p nth_fibonacci(3) # 2
p nth_fibonacci(4) # 3
p nth_fibonacci(25) # 75025

puts "---------GCF-----------"

# accepts array of positive numbers
# return the greatest common factor among all elements of array

# def greatest_common_factor(numbers)
#     numbers.each do |number|
#         i = number
#         while i >= 1
#             if numbers.all? { |number| number % i == 0 }
#                 return i
#             end 
#             i -= 1
#         end
#     end
# end

def greatest_common_factor(numbers)
    i = numbers.min                 # we can start at the smallest num
    
    while i >= 1
        if numbers.all? { |number| number % i == 0 }
            return i
        end 
        i -= 1
    end
end

p greatest_common_factor([8, 24, 12]) # 4
p greatest_common_factor([15, 30]) # 15
p greatest_common_factor([24, 30, 21, 7]) # 1
p greatest_common_factor([16]) # 16

puts "---------IDEAL NUMBERS-----------"

def proper_factors(num)
    arr = []
    (1...num).each do |divisor|
        if num % divisor == 0
            arr << divisor
        end
    end
    arr
end

def aliquot_sum(num)
    proper_factors(num).sum
end

def perfect_number?(num)
    num == aliquot_sum(num)
end

def ideal_numbers(n)
    arr = []

    i = 1
    while arr.length < n
        if perfect_number?(i)
            arr << i   
        end
        i += 1
    end

    arr
end

p ideal_numbers(2) # [6, 28]
p ideal_numbers(3) # [6, 28, 496]

puts "---------PROC QUESTIONS-----------"

# accept array and block
# return new array containing eles that resulted in false when passed in block

def my_reject(arr, &prc)
    new_arr = []
    arr.each do |ele| 
        if prc.call(ele) == false
            new_arr << ele
        end
    end
    new_arr
end

# accept array and block
# return true when EXACTLY ONE element of array results in true when passed in block

def my_one?(arr, &prc)
    count = 0
    arr.each do |ele|
        if prc.call(ele) == true
            count += 1
        end
    end
    count == 1
end

# accept hash and block
# return a new hash containing key/value pairs that resulted in true when passed in block

def hash_select(hash, &prc)
    new_hash = {}
    hash.each do |k, v|
        if prc.call(k, v) == true
            new_hash[k] = v
        end
    end
    new_hash
end

# accept array and two procs
# should NOT select elements that result in true for both procs
# return new array of eles that result in true when EXACTLY ONE procs results in true

def xor_select(arr, prc1, prc2)
    new_arr = []

    arr.each do |ele|
        if prc1.call(ele) == true && prc2.call(ele) == false
            new_arr << ele
        elsif prc2.call(ele) == true && prc1.call(ele) == false 
            new_arr << ele
        end
    end

    new_arr
end

# receive a value and array
# return a number representing count of procs that evaluate to true
# when passed the given value

def proc_count(num, prcs)
    count = 0
    prcs.each do |prc|
        if prc.call(num) == true
            count += 1
        end
    end
    count
end

even = Proc.new { |n| n.even? }
div_by_5 = Proc.new { |n| n % 5 == 0 }
positive = Proc.new { |n| n > 0 }

p proc_count(12, [even, div_by_5, positive]) # 2
p proc_count(-4, [even, div_by_5, positive]) # 1

puts "---------DOG CLASS PROJECT-----------"

class Dog
    def initialize(name, breed, age, bark, favorite_foods)
        @name = name
        @breed = breed 
        @age = age 
        @bark = bark 
        @favorite_foods = favorite_foods
    end

    def name
        @name
    end

    def breed
        @breed
    end

    def age 
        @age
    end

    def age=(new_num)
        @age = new_num
    end

    def bark 
        if @age > 3             # remember to use @age not just age
            @bark.upcase        # similarly, remember to do @bark
        else
            @bark.downcase
        end
    end

    def favorite_foods
        @favorite_foods
    end

    def favorite_food?(food)
        @favorite_foods.each do |fave_food|
            if fave_food.downcase == food.downcase
                return true
            end
        end
        false
    end

    # --- EASIER WAY ---

    # def favorite_food?(food_item)
    #     @favorite_foods.map(&:downcase).include?(food_item.downcase)
    # end
end

puts "---------BOOTCAMP CLASS PROJECT-----------"

class Bootcamp
    def initialize(name, slogan, student_capacity)
        @name = name
        @slogan = slogan
        @student_capacity = student_capacity
        @teachers = []
        @students = []
        @grades = Hash.new { |hash, k| hash[k] = [] }
    end

    def name
        @name
    end

    def slogan
        @slogan
    end

    def teachers
        @teachers
    end

    def students
        @students
    end

    def hire(teacher)
        @teachers << teacher
    end

    def enroll(student)
        if @students.length < @student_capacity
            @students << student 
            return true
        else 
            return false
        end
    end

    def enrolled?(student)
        return true if @students.include?(student)
        false

        # --- EASIER ---
        # @students.include?(student)
    end

    def student_to_teacher_ratio
        @students.length / @teachers.length
    end

    def add_grade(student, grade)
        if enrolled?(student)
            @grades[student] << grade
            return true
        else
            return false
        end
    end

    # -- USING SELF -- 

    # def add_grade(student, grade)
    #     if self.enrolled?(student)

    # we're calling enrolled? on the same instance of bootcamp
    # enrolled? is an instance method
    # so do self.enrolled?(student) to make explicit that we're 
    # checking THIS SPECIFIC instance of a bootcamp
    # however, this is ultimately unnecessary

    def num_grades(student)
        grades = @grades[student]
        grades.length
    end

    def average_grade(student)
        if enrolled?(student) && @grades[student].length > 0
            grades = @grades[student]
            sum = grades.sum 
            return sum / grades.length
        elsif !enrolled?(student) || @grades[student].length == 0
            return nil
        end
    end

    # --- EASIER WAY ---

    # def average_grade(student)
    #     return nil if !self.enrolled?(student) || num_grades(student).zero?
    #     @grades[student].sum / self.num_grades(student)
    # end
end

puts "---------MONKEY PATCHING-----------"

# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
    def span # return the difference between largest and smallest ele
        if self.length > 0
            sorted = self.sort
            return sorted[-1] - sorted[0]
        else
            return nil
        end
    end

    # EASIER WAY TO RETURN THE DIFFERENCE BETWEEN LARGEST AND SMALLEST

    # def span
    #     return nil if self.empty?
    #     self.max - self.min
    # end

    def average # return avg value of elements
        if self.length > 0
            self.sum * 1.0 / self.length
        else
            return nil
        end
    end

    # EASIER WAY TO TURN WHOLE NUMBER INTO DECIMAL

    # def average
    #     return nil if self.empty?
    #     self.sum / self.length.to_f
    # end

    def median # return middle ele of array/avg of 2 middle eles
        if self.length > 0
            if self.length % 2 == 0
                sorted = self.sort
                mid_index = sorted.length / 2
                other_index = mid_index - 1
                first_ele = sorted[mid_index]
                other_ele = sorted[other_index]
                return (first_ele + other_ele) * 1.0 / 2
            else 
                sorted = self.sort
                mid_index = sorted.length / 2
                return sorted[mid_index]
            end
        else
            return nil
        end
    end

    # EASIER WAY TO FIND THE MEDIAN

    # def median
    #     return nil if self.empty?

    #     mid_index = self.length / 2
    #     sorted = self.sort
    #     if self.length.odd?
    #         return sorted[mid_index]
    #     else
    #         return (sorted[mid_index - 1] + sorted[mid_index]) / 2.0
    #     end
    # end

    def counts # return hash representing count of each ele
        hash = Hash.new(0)
        self.each { |ele| hash[ele] += 1 }
        hash
    end

    def my_count(value) # return times the value appears in array
        count = 0
        self.each { |ele| count += 1 if ele == value }
        count
    end

    def my_index(value) # return smallest index where that value is found
        self.each_with_index { |ele, i| return i if ele == value }
        return nil
    end

    def my_uniq # return a new array where dupe eles are compressed
        new_arr = []

        self.each do |ele|
            if !new_arr.include?(ele)
                new_arr << ele  
            end
        end

        new_arr
    end

    # USING HASH TO FIND UNIQUE ELES
    # since keys are inherently unique
    # value is "true" here but value could be anything, doesn't matter

    # def my_uniq
    #     elements = {}
    #     self.each { |ele| elements[ele] = true }
    #     elements.keys                 
    # end

    def my_transpose # new 2D array where rows are converted to columns
        new_arr = Array.new(self.length) { Array.new(self[0].length) }
        
        self.each_with_index do |subarr, i|
            subarr.each_with_index do |ele, j|
                new_arr[i][j] = self[j][i]
            end
        end

        new_arr
    end
end

# MY TRANSPOSE

#   arr_1 = [
#           ["a", "b", "c"],        # b = arr[0][1]
#           ["d", "e", "f"],        # e = arr[1][1]
#           ["g", "h", "i"]         # h = arr[3][1]
#         ]
#         expected_1 = [
#           ["a", "d", "g"],
#           ["b", "e", "h"],        # b = arr[1][0], e = arr[1][1], h = arr[1][3]
#           ["c", "f", "i"]
#         ]

# MAKING NEW 2D ARRAY

#       grid = Array.new(3) { Array.new(4) }
#       grid[0][0] = "X"
#       [["X", nil, nil], [nil, nil, nil], [nil, nil, nil]]

# OFFICIAL WAY TO SOLVE TRANSPOSE

# def my_transpose
#     transposed = []

#     self.each_with_index do |ele1, idx1|
#       row = []

#       self.each_with_index do |ele2, idx2|
#         row << self[idx2][idx1]
#       end

#       transposed << row
#     end

#     transposed
#   end

puts "---------MONKEY PATCHING SOLUTION-----------"

class Array
  def span
    return nil if self.empty?
    self.max - self.min
  end

  def average
    return nil if self.empty?
    self.sum / self.length.to_f
  end

  def median
    return nil if self.empty?

    mid_index = self.length / 2
    sorted = self.sort
    if self.length.odd?
      return sorted[mid_index]
    else
      return (sorted[mid_index - 1] + sorted[mid_index]) / 2.0
    end
  end

  def counts
    count_hash = Hash.new(0)
    self.each { |ele| count_hash[ele] += 1 }
    count_hash
  end

  def my_count(item)
    counter = 0
    self.each { |ele| counter += 1 if ele == item }
    counter
  end

  def my_index(val)
    self.each_with_index { |ele, i| return i if ele == val }
    nil
  end

  def my_uniq
    elements = {}
    self.each { |ele| elements[ele] = true }
    elements.keys
  end

  def my_transpose
    transposed = []

    self.each_with_index do |ele1, idx1|
      row = []

      self.each_with_index do |ele2, idx2|
        row << self[idx2][idx1]
      end

      transposed << row
    end

    transposed
  end
end

puts "---------FIND HIGHEST AVG STUDENT SCORE-----------"

# write a method that accepts an array containing student hashes
# return initials of student with highest avg score

def highest_score(students)
    initials = ""
    highest_score = find_highest(students)

    students.each do |student|
        avg_score = find_avg_score(student["scores"])
        if avg_score == highest_score
            initials += get_initials(student["name"])
        end
    end

    initials
end

## 

def find_highest(students)
    max = 0
    arr = avg_scores_array(students)

    arr.each do |score|
        if score > max
            max = score
        end
    end

    max
end

##

def avg_scores_array(students)
    arr = []
    students.each do |student|
        avg_score = find_avg_score(student["scores"])
        arr << avg_score
    end
    arr
end

##

def get_initials(name)
    initials = ""
    parts = name.split(" ")
    parts.each do |part|
        initials += part[0]
    end
    initials
end

## 

def find_avg_score(array)
    sum = 0
    array.each do |num|
       sum += num 
    end
    sum / array.length
end

students_1 = [
    {"name"=>"Alvin Zablan", "scores"=>[-42, 20, 50]},
    {"name"=>"Eliot Bradshaw", "scores"=>[57, 100, 80]},
    {"name"=>"Tommy Duek", "scores"=>[90, 100]},
    {"name"=>"Fred Sladkey", "scores"=>[94, 92]}
]
p highest_score(students_1)     # => "TD"

students_2 = [
    {"name"=>"Rose Koron", "scores"=>[97, 90]},
    {"name"=>"Jeff Fiddler", "scores"=>[100, 90, 80]},
    {"name"=>"Dave Fort", "scores"=>[85, 96]},
    {"name"=>"Mary La Grange", "scores"=>[100]},
    {"name"=>"Candace Hsu", "scores"=>[89, 94]}
]
p highest_score(students_2)     # => "MLG"

puts "---------RECAP 1: ALL VOWEL PAIRS-----------"

# Write a method, all_vowel_pairs, that takes in an array of words and returns all pairs of words
# that contain every vowel. Vowels are the letters a, e, i, o, u. A pair should have its two words
# in the same order as the original array. 


def all_vowel_pairs(arr)
    vowels = ["a", "e", "i", "o", "u"]
    all_pairs = []

    (0...arr.length).each do |idx1|
        (idx1 + 1...arr.length).each do |idx2|
            word1 = arr[idx1]
            word2 = arr[idx2]
            pair = word1 + " " + word2

            all_pairs << pair if vowels.all? { |vowel| pair.include?(vowel) }
        end
    end
    
    all_pairs
end

p all_vowel_pairs(["goat", "action", "tear", "impromptu", "tired", "europe"]) 
# => ["action europe", "tear impromptu"]


puts "---------RECAP 1: HASH.MY SELECT-----------"

# Write a method, Hash#my_select, that takes in an optional proc argument
# The method should return a new hash containing the key-value pairs that return
# true when passed into the proc.
# If no proc is given, then return a new hash containing the pairs where the key is equal to the value.


class Hash
    def my_select(&prc)
        prc ||= Proc.new { |k, v| k == v }
        new_hash = {}

        self.each do |k, v|
            if prc.call(k, v)
                new_hash[k] = v
            end
        end

        new_hash
    end
end

hash_1 = {x: 7, y: 1, z: 8}
p hash_1.my_select { |k, v| v.odd? }          # => {x: 7, y: 1}

hash_2 = {4=>4, 10=>11, 12=>3, 5=>6, 7=>8}
p hash_2.my_select { |k, v| k + 1 == v }      # => {10=>11, 5=>6, 7=>8})
p hash_2.my_select                            # => {4=>4}

puts "---------RECAP 1: STRING.SUBSTRINGS-----------"

# Write a method, String#substrings, that takes in a optional length argument
# The method should return an array of the substrings that have the given length.
# If no length is given, return all substrings.
#

class String
    def substrings(length = nil)
        substrings = []
        (0...self.length).each do |start_idx|
            (start_idx...self.length).each do |end_idx|
                substr = self[start_idx..end_idx]
                substrings << substr
            end
        end

        if length == nil
            substrings
        else
            substrings.select { |substr| substr.length == length }
        end
    end
end

p "cats".substrings     # => ["c", "ca", "cat", "cats", "a", "at", "ats", "t", "ts", "s"]
p "cats".substrings(2)  # => ["ca", "at", "ts"]


puts "---------RECAP 2: MOST FREQUENT BIGRAM-----------"

# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.

def most_frequent_bigram(str)
    counter = Hash.new(0)
    (0...str.length - 1).each do |i|
        bigram = str[i] + str[i + 1]
        counter[bigram] += 1
    end
    sorted = counter.sort_by { |k, v| v }
    sorted[-1][0]
end

p most_frequent_bigram("helllllllooo thereeee") # "ll"

puts "---------RECAP 2: BUBBLE SORT-----------"

# Write a method, Array#bubble_sort, that takes in an optional proc argument.
# When given a proc, the method should sort the array according to the proc.
# When no proc is given, the method should sort the array in increasing order.

class Array
    def bubble_sort(&prc)
        prc ||= Proc.new { |a, b| a <=> b }
            # if we wanted to sort it in decreasing order
            # Proc.new { |a, b| b <=> a }
            # if we wanted to sort it in alphabetical order
            # Proc.new { |a, b| a.to_s <=> b.to_s }
        
        sorted = false 
        while !sorted
            sorted = true
            
            (0...self.length - 1).each do |i|
                if prc.call(self[i], self[i + 1]) > 0    # the first ele is bigger than second
                    self[i], self[i + 1] = self[i + 1], self[i]
                    sorted = false
                end
            end
        end

        self
    end
end

puts "---------RECAP 3: NO DUPES-----------"

# Write a method no_dupes?(arr) that accepts an array as an arg
# and returns an new array containing the elements that were not
# repeated in the array.

def no_dupes?(arr)
    counter = Hash.new(0)
    arr.each { |ele| counter[ele] += 1 }
    counter.keys.select { |key| counter[key] == 1 }
end

p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
p no_dupes?([true, true, true])            # => []

puts "---------RECAP 3: NO CONSECUTIVE REPEATS-----------"

# Write a method that accepts an array as an arg. 
# The method should return true if an element never appears 
# consecutively in the array; it should return false otherwise.

def no_consecutive_repeats?(arr)
    (0...arr.length - 1).each do |i|
        return false if arr[i] == arr[i + 1]
    end
    true
end

p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
p no_consecutive_repeats?(['x'])                              # => true

puts "---------RECAP 3: CHAR INDICES-----------"

# Write a method char_indices(str) that takes in a string as an arg.
# The method should return a hash containing characters as keys. 
# The value associated with each key should be an array containing
# the indices where that character is found.

def char_indices(str)
    hash = Hash.new { |h, k| h[k] = [] } 
    str.each_char.with_index do |char, i|
        hash[char] << i
    end
    hash
end

p char_indices('mississippi')   
# => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
p char_indices('classroom')    
 # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

puts "---------RECAP 3: LONGEST STREAK-----------"

# Write a method longest_streak(str) that accepts a string as an arg. 
# The method should return the longest streak of consecutive characters 
# in the string. If there are any ties, return the streak that occurs 
# later in the string.

def longest_streak(str)
    current = ""
    longest = ""

    (0...str.length).each do |i|
        if str[i] == str[i - 1] || i == 0
            current += str[i]
        else
            current = str[i]
        end

        longest = current if current.length >= longest.length
    end

    longest
end


p longest_streak('a')           # => 'a'
p longest_streak('accccbbb')    # => 'cccc'
p longest_streak('aaaxyyyyyzz') # => 'yyyyy
p longest_streak('aaabbb')      # => 'bbb'
p longest_streak('abc')         # => 'c'

puts "---------RECAP 3: BI PRIME-----------"

# Write a method bi_prime?(num) that accepts a number as an arg
# and returns a boolean indicating whether or not the number is a bi-prime. 
# A bi-prime is a positive integer that can be obtained by 
# multiplying two prime numbers.

# 14 is a bi-prime because 2 * 7
# 25 is a bi-prime because 5 * 5
# 24 is not a bi-prime because no two prime numbers have a product of 24

def is_prime?(num)
    return false if num < 2 
    (2...num).none? { |factor| num % factor == 0 }
end

def bi_prime?(num)
    (2...num).each do |fact1|
        (2...num).each do |fact2|
            if is_prime?(fact1) && is_prime?(fact2) && fact1 * fact2 == num
                return true
            end
        end
    end
    false
end

p bi_prime?(14)   # => true
p bi_prime?(22)   # => true
p bi_prime?(25)   # => true
p bi_prime?(94)   # => true
p bi_prime?(24)   # => false
p bi_prime?(64)   # => false

# OFFICIAL SOLUTION

def bi_prime?(num)
    prime_facts = prime_factors(num)
 
    prime_facts.any? do |a|
        b = num / a * 1.0
        prime_facts.include?(b)
    end
end

def prime?(num)
    return false if num < 2
    (2...num).none? { |i| num % i == 0}
end

def prime_factors(num)
    (2..num).select { |i| num % i == 0 && prime?(i) }
end

puts "---------RECAP 3: VIGENERE CIPHER-----------"

# A Vigenere Cipher is a Caesar cipher, but instead of a single key,
# a sequence of keys is used. For example, if we encrypt "bananasinpajamas" 
# with the key sequence 1, 2, 3, then the result would be "ccqbpdtkqqcmbodt":

# Message:  b a n a n a s i n p a j a m a s
# Keys:     1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
# Result:   c c q b p d t k q q c m b o d t

def vigenere_cipher(str, key)
    alphabet = ("a".."z").to_a
    new_str = ""

    str.each_char.with_index do |char, i|
        alpha_index = alphabet.index(char)
        num = key[i % key.length]
    
        new_alpha_index = (alpha_index + num) % alphabet.length
        new_char = alphabet[new_alpha_index]
        new_str += new_char
    end

    new_str
end

p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
p vigenere_cipher("yawn", [5, 1])             # => "dbbo"

puts "---------RECAP 3: VOWEL ROTATE-----------"

# Write a method vowel_rotate(str) that accepts a string as an arg
# and returns the string where every vowel is replaced with the 
# vowel the appears before it sequentially in the original string. 
# The first vowel of the string should be replaced with the last vowel.

def vowel_rotate(str)
    new_str = str[0..-1]
    vowels = "aeiou"
    vowel_indices = (0...new_str.length).select { |i| vowels.include?(str[i]) } # [1, 4, 6]
    new_vowel_indices = vowel_indices.rotate(-1) # [6, 1, 4]

    vowel_indices.each_with_index do |vowel_index, i|
        new_index = new_vowel_indices[i]        # 6
        new_vowel = str[new_index]              # "e"
        new_str[vowel_index] = new_vowel        # new_str[1] = "e"                       
    end

    new_str
end

p vowel_rotate('computer')      # => "cempotur"
p vowel_rotate('oranges')       # => "erongas"
p vowel_rotate('headphones')    # => "heedphanos"
p vowel_rotate('bootcamp')      # => "baotcomp"
p vowel_rotate('awesome')       # => "ewasemo"

# MY SOLUTION 

def vowel_rotate(str)
    vowels = "aeiou"
    vowels_array = vowels_array(str)
    new_str = ""

    str.each_char.with_index do |char, i|
        if vowels.include?(char)
            vowel_index = vowels_array.index(char)
            new_vowel = vowels_array[vowel_index - 1]
            new_str += new_vowel
        else
            new_str += char
        end
    end

    new_str
end

def vowels_array(str)
    vowels = "aeiou"
    arr = []

    str.each_char do |char|
        if vowels.include?(char)
            arr << char
        end
    end

    arr
end

puts "---------RECAP 3: STRING.SELECT-----------"

# Extend the string class by defining a String#select method that 
# accepts a block. The method should return a new string containing 
# characters of the original string that return true when passed 
# into the block. If no block is passed, then return the empty string. 
# Do not use the built-in Array#select in your solution.

class String
    def select(&prc)
        return "" if prc == nil

        new_str = ""
        self.each_char { |char| new_str += char if prc.call(char) }
        new_str 
    end
end

p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
p "HELLOworld".select          # => ""


puts "---------RECAP 3: STRING.MAP-----------"

# Extend the string class by defining a String#map! method 
# that accepts a block. The method should modify the existing 
# string by replacing every character with the result of 
# calling the block, passing in the original character and 
# its index. Do not use the built-in Array#map or Array#map!

class String
    def map!(&prc)
        self.each_char.with_index do |char, i|
            self[i] = prc.call(char, i)
        end
    end
end

word_1 = "Lovelace"
word_1.map! do |ch| 
    if ch == 'e'
        '3'
    elsif ch == 'a'
        '4'
    else
        ch
    end
end
p word_1        # => "Lov3l4c3"

word_2 = "Dijkstra"
word_2.map! do |ch, i|
    if i.even?
        ch.upcase
    else
        ch.downcase
    end
end
p word_2        # => "DiJkStRa"

puts "---------RECAP 3: RECURSION: MULTIPLY-----------"

# Write a method that takes in two numbers and returns their product.

def multiply(a, b)
    return a if b == 1
    return -a if b == -1

    if b > 0
        a + multiply(a, b - 1)
    elsif b < 0
        -a + multiply(a, b + 1)
    end 
end

p multiply(3, 5)        # => 15
p multiply(5, 3)        # => 15
p multiply(2, 4)        # => 8
p multiply(0, 10)       # => 0
p multiply(-3, -6)      # => 18
p multiply(3, -6)       # => -18
p multiply(-3, 6)       # => -18
p multiply(-3, -3)      # => 9

puts "---------RECAP 3: RECURSION: LUCAS SEQUENCE-----------"

# The Lucas Sequence is a sequence of numbers. 
# The first number of the sequence is 2. 
# The second number of the Lucas Sequence is 1. 
# To generate the next number of the sequence, 
# we add up the previous two numbers. 
# Like this: 2, 1, 3, 4, 7, 11, ...

# Write a method lucasSequence that accepts a number 
# representing a length as an arg. The method should return 
# an array containing the Lucas Sequence up to the given length. 
# Solve this recursively.

def lucas_sequence(n)
    return [] if n == 0
    return [2] if n == 1
    return [2, 1] if n == 2

    prev_array = lucas_sequence(n - 1)
    new_num = prev_array[-1] + prev_array[-2]
    prev_array << new_num
end

p lucas_sequence(0)   # => []
p lucas_sequence(1)   # => [2]    
p lucas_sequence(2)   # => [2, 1]
p lucas_sequence(3)   # => [2, 1, 3]
p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]
p lucas_sequence(20)  # => [2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, 521, 843, 1364, 2207, 3571, 5778, 9349]

puts "---------RECAP 3: RECURSION: PRIME FACTORIZATION-----------"

# Write a method prime_factorization(num) that accepts a number
# and returns an array representing the prime factorization 
# of the given number. This means that the array should contain
# only prime numbers that multiply together to the given num. 
# The array returned should contain numbers in ascending order. 
# Do this recursively.

def prime_factorization(num)
    # don't use an is_prime? helper function
    # we don't need it because we already did the logic (2...num).each
    
    # iterate through possible prime factors
    # start at 2 (smallest prime)

    (2...num).each do |fact|
        # let's say num = 12
        # 12 is divisible by 2 and gives us 6

        if num % fact == 0                  # fact = 2
            other_fact = num / fact         # other_fact = 6
            prime_factorization(fact)       # call it on 2
                # this will give me an array of the prime factors of 2
                # since 2 is prime, it'll just return [2]
            prime_factorization(other_fact) # also call it on 6
                # this will give me an array of the prime factors of 6
                # this will produce an array of [2, 3]

            # we need to concatenate these two arrays!
            # we can use .concat method
            return prime_factorization(factor) + prime_factorization(other_factor)

            # or we can use the splat operator like this:
            return [ *prime_factorization(fact), *prime_factorization(other_fact) ]
        end
    end

    # here is the base case
    # if the number is already prime, return the array with the num

    # why? let's stick a prime number like 11 back into prime_factorization
    # (2...11).each do |fact| so it generates (2, 3, 4, 5, 6, 7, 8, 9, 10)
    # if num % factor == 0 then do recursion
    # but wait, if num = 11, then there IS no factor that it's divisible by!
    # 11 isn't divisible by 2, 3, 4, etc.... only by 1 and itself
    # but those numbers are EXCLUDED in our loop
    # thus, it immediately exits the loop and goes straight to [num]
    # in this way, any prime number is immediately put into its own array
    # then after all our recursion calls, we concatenate those prime arrays together

    [ num ]
end

# SIMPLY WRITTEN

def prime_factorization(num)
  (2...num).each do |factor|
    if num % factor == 0
      other_factor = num / factor
      return prime_factorization(factor) + prime_factorization(other_factor)
    end
  end

  [num]
end

p prime_factorization(12)     # => [2, 2, 3]      
p prime_factorization(24)     # => [2, 2, 2, 3]
p prime_factorization(25)     # => [5, 5]        
p prime_factorization(60)     # => [2, 2, 3, 5]
p prime_factorization(7)      # => [7]
p prime_factorization(11)     # => [11]
p prime_factorization(2017)   # => [2017]

puts "-------RECURSION PROBLEMS-------"

puts "---------POW---------"

# Write a method, pow(base, exponent), that takes in two numbers.
# The method should calculate the base raised to the exponent power.
# You can assume the exponent is always positive.
#
# Solve this recursively!
#

def pow(base, exponent)
    return 1 if exponent == 0
    base * pow(base, exponent - 1)
end

p pow(2, 0) # => 1
p pow(2, 1) # => 2
p pow(2, 5) # => 32
p pow(3, 4) # => 81
p pow(4, 3) # => 64

puts "---------LUCAS NUMBER---------"

# Write a method, lucas_number(n), that takes in a number.
# The method should return the n-th number of the Lucas Sequence.
# The 0-th number of the Lucas Sequence is 2.
# The 1-st number of the Lucas Sequence is 1
# To generate the next number of the sequence, we add up the previous two numbers.
#
# For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
#
# Solve this recursively!
#
# Examples:
#

def lucas_number(n)
    return 2 if n == 0
    return 1 if n == 1
    lucas_number(n - 1) + lucas_number(n - 2)
end

p lucas_number(0)   # =>    2
p lucas_number(1)   # =>    1
p lucas_number(2)   # =>    3
p lucas_number(3)   # =>    4
p lucas_number(5)   # =>    11
p lucas_number(9)   # =>    76

puts "---------SUM ARRAY---------"

# Write a method, sum_array(array), that takes in an array of numbers.
# The method should return the total sum of the elements.
# 
# Solve this recursively!
#
# Examples:
#

def sum_array(array)
    return 0 if array.length == 0
    array[-1] + sum_array(array[0...array.length - 1])
end

p sum_array([])             # => 0
p sum_array([5])            # => 5
p sum_array([5, 2])         # => 7
p sum_array([4, 10, -1, 2]) # => 15

puts "---------REVERSE STRING---------"

# Write a method, reverse_string(str), that takes in a string.
# The method should return the string with it's characters in reverse order.
#
# Solve this recursively!
#
# Examples:
# 

def reverse_string(str)
    return "" if str.length == 0
    str[-1] + reverse_string(str[0...-1])
end

p reverse_string("")            # => ""
p reverse_string("c")           # => "c"
p reverse_string("internet")    # => "tenretni"
p reverse_string("friends")     # => "sdneirf"

puts "---------FLATTENED---------"

# A 1-dimensional array is also known as a flattened array.
# Write a method, flatten(data), that accepts a single argument. The
# method should take in an array of any dimension and return the flattened
# version of that array. Solve this recursively.
#   
# Hint:
#  - if the argument is not an array, then we have reached the base case
#  - look up the documentation for how to check if data is an array or not
#
# Examples:
#
# array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
# flatten(array_1)      # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
#
# array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
# flatten(array_2)      # => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
#
# flatten('base case')  # => [ 'base case' ]
#
# Another Hint:
#
# From the last example, you may be confused. We said that the method takes
# in an array as an arg, but we passed it a string?
# If data is not an array, then we can consider it as a 0-dimensional array.
#     0-dimensional array: 'some data'
#     1-dimensional array: ['some data']
#     2-dimensional array: [['some data']]
#     3-dimensional array: [[['some data']]]
def flatten(data)
    return [data] if data.kind_of?(Array) == false
    if data.kind_of?(Array) == true
        arr = []
        data.each do |ele|
            flattened = flatten(ele)
            arr += flattened
        end
    end
    arr
end

# OTHER SOLUTION

def flatten(data)
  return [data] if !data.is_a?(Array)
  return [] if data == nil || data == [] 
  return flatten(data.shift) + flatten(data)
end

array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
p flatten(array_1)      
# => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
p flatten(array_2)      
# => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

p "---------WEEK 1: ENUMERABLES EXERCISE------------"

class Array
    def my_each(&prc)
        self.length.times { |i| prc.call(self[i]) }
        self
    end

    def my_select(&prc)
        new_arr = []
        self.my_each do |ele|
            if prc.call(ele)
                new_arr << ele 
            end
        end
        new_arr
    end

    def my_reject(&prc)
        new_arr = []
        self.my_each do |ele|
            if !prc.call(ele)
                new_arr << ele
            end
        end
        new_arr
    end

    def my_any?(&prc)
        self.my_each do |ele|
            if prc.call(ele)
                return true
            end
        end
        false
    end

    def my_all?(&prc)
        self.my_each do |ele|
            if !prc.call(ele)
                return false
            end
        end
        true
    end

    # my_flatten should return all elements of the array into a new, 
    # one-dimensional array. Hint: use recursion!

    def my_flatten
        flattened = []
        self.each do |ele|
            if !ele.is_a?(Array)
                flattened << ele
            else
                flattened += ele.my_flatten
            end
        end

        flattened 
    end

    # Write my_zip to take any number of arguments. 
    # It should return a new array containing self.length elements.
    # Each element of the new array should be an array with a length
    # of the input arguments + 1 and contain the merged elements at that index.
    # If the size of any argument is less than self, nil is returned for that location.

    def my_zip(*arg)
        new_arr = Array.new(self.length) { Array.new(arg.length + 1, nil) }

        self.each_with_index do |ele, i|
            new_arr[i][0] = ele
        end

        arg.each_with_index do |arr, idx1|          
            arr.each_with_index do |ele, idx2|      
                if idx2 < self.length                   # if !idx2 > self.length 
                                                        # didn't work because !2 becomes false     
                    new_arr[idx2][idx1 + 1] = ele
                end
            end
        end

        new_arr
    end


    # Write a method my_rotate that returns self rotated. 
    # By default, the array should rotate by one element. 
    # If a negative value is given, the array is rotated i
    # n the opposite direction.


    def my_rotate(num = 1)
        if num > 0
            num.times { self.push(self.shift) }
        elsif num < 0
            num.times { self.unshift(self.pop) }
        end
        self
    end

    # my_join returns a single string containing all the elements of the array,
    # separated by the given string separator. If no separator is given, 
    # an empty string is used.

    def my_join(str = "")
        new_str = ""
        self.each_with_index do |char, i|
            if i == self.length - 1
                new_str += char
            else
                new_str += char + str
            end
        end
        new_str
    end

    # Write a method that returns a new array containing all 
    # the elements of the original array in reverse order.

    def my_reverse
        new_arr = []
        self.each do |ele|
            new_arr.unshift(ele)
        end
        new_arr
    end
end

p "---------WEEK 1: RECURSION EXERCISE------------"

p "---------SUM TO-----------"

# Write a function sum_to(n) that uses recursion 
# to calculate the sum from 1 to n (inclusive of n).

def sum_to(n)
    return 1 if n == 1
    return nil if n < 1

    n + sum_to(n - 1)
end

p sum_to(3) # ==> returns 6
p sum_to(4) # => returns 10
p sum_to(5)  # => returns 15
p sum_to(1)  # => returns 1
p sum_to(9)  # => returns 45
p sum_to(-8)  # => returns nil

p "---------ADD NUMBERS-----------"

# Write a function add_numbers(nums_array) that takes in an 
# array of Integers and returns the sum of those numbers. 
# Write this method recursively.

def add_numbers(nums_array)
    return nums_array[0] if nums_array.length == 1
    return nil if nums_array.empty?

    nums_array.pop + add_numbers(nums_array)
end

p add_numbers([3]) # => returns 3
p add_numbers([3, 4]) # => returns 7
p add_numbers([3, 4, 2]) # => returns 9
p add_numbers([1,2,3,4]) # => returns 10
p add_numbers([-80,34,7]) # => returns -39
p add_numbers([]) # => returns nil

p "---------GAMMA FUNCTION-----------"

# Let's write a method that will solve Gamma Function 
# recursively. The Gamma Function is defined Γ(n) = (n-1)!.

def gamma_fnc(num)
    return 1 if num == 1
    return nil if num < 1

    (num - 1) * gamma_fnc(num - 1)
end

p gamma_fnc(0)  # => returns nil
p gamma_fnc(1)  # => returns 1
p gamma_fnc(2)  # => returns 1 (1)
p gamma_fnc(3)  # => returns 2 (2 * 1)
p gamma_fnc(4)  # => returns 6 (3 * 2 * 1)
p gamma_fnc(8)  # => returns 5040

p "---------ICE CREAM SHOP-----------"

# Write a function ice_cream_shop(flavors, favorite) that takes
# in an array of ice cream flavors available at the ice cream shop,
# as well as the user's favorite ice cream flavor. Recursively
# find out whether or not the shop offers their favorite flavor.

def ice_cream_shop(flavors, favorite)
    return true if flavors[0] == favorite
    return false if flavors.empty?

    ice_cream_shop(flavors.drop(1), favorite)
end

p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  
# => returns false
p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  
# => returns true
p ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio') 
# => returns false
p ice_cream_shop(['moose tracks'], 'moose tracks') 
# => returns true
p ice_cream_shop([], 'honey lavender')  
# => returns false

p "---------REVERSE-----------"

# Write a function reverse(string) that takes in 
# a string and returns it reversed.

def reverse(str)
    return "" if str.empty?
    return str if str.length == 1       # this base case is unnecessary

    str[-1] + reverse(str[0...-1])
end

p reverse("house") # => "esuoh"
p reverse("dog") # => "god"
p reverse("atom") # => "mota"
p reverse("q") # => "q"
p reverse("id") # => "di"
p reverse("") # => ""

p "---------PRACTICE ASSESSMENT GENERATOR------------"

p "---------RECURSIVE EXPONENT------------"

# Write a method that returns b^n recursively. 
# Your solution should accept negative values for n.
def exponent(b, n)
  return 1 if n == 0

  if n > 0
    b * exponent(b, n - 1)
  elsif n < 0
    (1 / b.to_f ) * exponent(b, n + 1)                  # or 1.0/b
  end
end

p exponent(2, 0) # 1
p exponent(5,3) # 125
p exponent(2, -3) # 1/8.0

# 2^ -2 = 1/4.0
# 2^ -1 = 1/2.0

p "---------RECURSIVE FACTORIAL------------"


# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.
def factorials_rec(num)
  return [1] if num == 1

  prev_array = factorials_rec(num - 1) 
  new_num = (num - 1) * prev_array[-1]     # or prev_array.last to grab last ele
  prev_array << new_num
end

p factorials_rec(1) # [1]
p factorials_rec(2) # [1, 1]
p factorials_rec(6) # [1, 1, 2, 6, 24, 120]
# 1 * 1               num = 2
# 2 * 1 * 1           num = 3 
# 3 * 2 * 1 * 1       num = 4
# 4 * 3 * 2 * 1 * 1 

p "---------HASH MERGE------------"

class Hash
  # Write a version of merge. This should NOT modify the original hash and 
  # return a combined version of both hashes.
  def my_merge(other_hash)
    new_hash = {}
    self.each do |k1, v1|
      other_hash.each do |k2, v2|
        if !other_hash.has_key?(k1)
          new_hash[k1] = v1
          new_hash[k2] = v2
        else
          new_hash[k2] = v2  
        end
      end
    end
    new_hash
  end
end

# OFFICIAL SOLUTION
# use self.dup in order to duplicate the original hash

class Hash
  def my_merge(other_hash)
    duped_hash = self.dup

    other_hash.each do |k, v|
      duped_hash[k] = v         # this will replace the k's original v with new v
    end

    duped_hash
  end
end

p "---------SYMMETRIC SUBSTRINGS------------"


class String
  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.
  def symmetric_substrings
    substrings = []
    (0...self.length).each do |idx1|
      (idx1...self.length).each do |idx2|
        sub = self[idx1..idx2]
        substrings << sub if sub.length > 1
      end
    end

    palindromes = []
    substrings.each do |sub|
      if sub.reverse == sub
        palindromes << sub
      end
    end
    palindromes
  end
end

# OFFICIAL SOLUTION (combines the two loops into one)

class String
  def symmetric_substrings
    symm_subs = []

    self.length.times do |start_pos|                    # what's up with .times?
      (2..(self.length - start_pos)).to_a.each do |end_pos|     # what's going on here?
        substr = self[start_pos...(start_pos + end_pos)]
        symm_subs << substr if substr == substr.reverse
      end
    end

    symm_subs
  end
end

p "---------ARRAY PROC STUFF------------"


class Array
  def my_each(&prc)
    self.map do |ele|
      prc.call(ele)
    end
  end

  def my_each_with_index(&prc)
    self.map.with_index do |ele, i|
      prc.call(ele, i)
    end
  end
end

# OFFICIAL SOLUTION

class Array
  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end
    self
  end

  def my_each_with_index(&prc)
    i = 0
    while i < self.length
      prc.call(self[i], i)
      i += 1
    end
    self
  end
end

# ---------

class Array
  def my_any?(&prc)
    self.each do |ele|
      return true if prc.call(ele)
    end
    false
  end
end

p "---------JUMBLE SORT------------"

# Write a method that takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'


def jumble_sort(str, alphabet = nil)
  alphabet = alphabet || ("a".."z").to_a
  new_str = Array.new(str.length)

  str.each_char do |char| 
    alpha_index = alphabet.index(char)
    if new_str[alpha_index] == nil
      new_str[alpha_index] = char
    else
      new_str[alpha_index + 1] = char  
    end
  end

  new_str.join("")
end

# OFFICIAL SOLUTION
# very similar logic to bubble sort!

def jumble_sort(str, alphabet = nil)
  alphabet ||= ('a'..'z').to_a

  sorted = false
  until sorted              # or while !sorted
    sorted = true
    (0...str.length - 1).to_a.each do |i|                   # .to_a not necessary
      if alphabet.index(str[i]) > alphabet.index(str[i + 1])
        str[i], str[i + 1] = str[i + 1], str[i]
        sorted = false
      end
    end
  end
  str
end

p "---------STRING INCLUDE KEY (RECURSIVE)------------"

# Write a recursive method that takes in a string to search and a key string.
# Return true if the string contains all of the characters in the key
# in the same order that they appear in the key.
#
# string_include_key?("cadbpc", "abc") => true
# string_include_key("cba", "abc") => false


# OFFICIAL SOLUTION

def string_include_key?(string, key) 
  return true if key.length == 0
  # return false if string.length == 0

  next_key_char = key.chars.first           
  key_index = string.index(next_key_char)

  return false if key_index.nil?
  string_include_key?(string[key_index+1..-1], key[1..-1])
end

string_include_key?("cadbpc", "abc") => true


p "---------RECURSIVE SUM------------"

def rec_sum(nums)    
  # [1, 2, 3] sum is 6    
  # [1, 2] sum was 3

  return 0 if nums.length == 0
  prev_sum = rec_sum(nums[0..-2])
  prev_sum + nums.last
end

arr = [1,2,3,4]
p rec_sum(arr) # 10

# OFFICIAL SOLUTION

def rec_sum(nums)
  return 0 if nums.empty?
  nums[0] + rec_sum(nums.drop(1))      
             # .drop will drop the first n elements and return the rest 

end

# ANOTHER SOLUTION

def rec_sum(nums)
  return 0 if nums.empty?
  nums.pop + rec_sum(nums)
end

p "---------MEDIAN ARRAY------------"

# Write a method that returns the median of elements in an array
# If the length is even, return the average of the middle two elements
class Array 
  def median
    return nil if self.length == 0
    sorted = self.sort              # remember to sort them in order first!

    mid_index = self.length / 2
    if self.length.even?
      # self = [3, 2, 6, 7]
      # sorted = [2, 3, 6, 7]
      (sorted[mid_index - 1] + sorted[mid_index]) / 2.0
    else 
      sorted[mid_index]
    end
  end
end

p "---------TITLEIZE (HARDER)------------"

# Write a method that capitalizes each word in a string like a book title
# Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
def titleize(title)
  exceptions = ["a", "and", "of", "over", "the"]
  words = title.split(" ")
  new_words = []

  words.each_with_index do |word, i|
    if !exceptions.include?(word) || i == 0
      new_word = word[0].upcase + word[1..-1].downcase # or word.capitalize
      new_words << new_word
    else
      new_word = word.downcase
      new_words << new_word
    end
  end

  new_words.join(" ")
end

p titleize("the bridge over the river kwai")
# "The Bridge over the River Kwai"

p "---------DEEP DUP (RECURSION)------------"

# Using recursion and the is_a? method, write an Array#deep_dup method that will
# perform a "deep" duplication of the interior arrays.

def deep_dup(arr)
  arr.map do |ele| 
    if ele.is_a?(Array)
      deep_dup(ele)
    else 
      ele
    end
  end
end

arr = [
      ["nuts", "bolts", "washers"],
      ["capacitors", "resistors", "inductors"]
    ]

p deep_dup(arr)

p "---------PIG LATIN------------"

# Write a method that translates a sentence into pig latin. You may want a helper method.

## Rules
# Pig latin translation uses the following rules:
# - for words that start with a vowel, add 'ay' to the end
# - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'
# - 'qu' counts as a consonant (see third example)

## Examples


def transform(word)
  vowels = "aeiou"

  word.each_char.with_index do |char, i|
    if word[i] == "q" && word[i + 1] == "u"
      return word[i + 2..-1] + word[0...i + 2] + "ay"
    elsif vowels.include?(char)
      return word[i..-1] + word[0...i] + "ay"
    end
  end
end

def change_word(word)
  vowels = "aeiou"
  first_letter = word[0]
  new_word = ""

  if vowels.include?(first_letter)
    new_word = word + "ay"
  else
    new_word = transform(word)
  end
end


def pig_latinify(sentence)
  words = sentence.split(" ")
  new_words = []

  words.each do |word|
    new_word = change_word(word)
    new_words << new_word
  end

  new_words.join(" ")
end

p pig_latinify('apple')             #=> 'appleay'
p pig_latinify('quick')             #=> 'ickquay'
p pig_latinify('square')            #=> 'aresquay'

p "---------PERMUTATIONS------------"

# Write a recursive method that returns all of the permutations of an array


def permutations(array)
  return [array] if array.length <= 1

  last = array.pop              # last = 3
  perms = permutations(array)   # 2D array containing permutated arrays [1, 2], [2, 1]
  all_perms = []                # this will store all of our permutated arrays

  perms.each do |perm|          # outer loop: grabs every permutated array
    (0..perm.length).each do |i|# inner loop: grabs every index in the array, including the one that hangs off the end
      all_perms << perm[0...i] + [last] + perm[i..-1]
    end
  end
  all_perms
end

p permutations([1,2,3])
# should return => [
#  [1, 2, 3],
#  [1, 3, 2],
#  [2, 1, 3],
#  [2, 3, 1],
#  [3, 1, 2],
#  [3, 2, 1]
# ]

p "---------ZIP ARRAYS------------"

class Array

  def my_zip(*arrays)
    result = []

    (0...self.length).each do |i|
      subarr = [self[i]]           # when i is 0, subarr = [1]

      arrays.each do |array|       # when i is 0, array is [4, 5, 6]
        subarr << array[i]         # [1] << 4 
                                   # after two iterations, subarr = [1, 4, 7]
      end

      result << subarr            # when iterations are done, [1, 4, 7] is shoveled into []
    end
    
    result
  end
end

p [1,2,3].my_zip([4,5,6], [7,8,9]) # => [[1,4,7], [2,5,8], [3,6,9]]

p "---------ANAGRAMS------------"


# Write a function anagrams(str1, str2) that takes in two words and returns a boolean
# indicating whether or not the words are anagrams. Anagrams are words that
# contain the same characters but not necessarily in the same order. Solve this
# without using Array#sort
def anagrams(str1, str2)
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)

  str1.each_char do |char|
    hash1[char] += 1
  end

  str2.each_char do |char|
    hash2[char] += 1
  end

  hash1 == hash2
end

p anagrams('abc', 'aba') # false
p anagrams('abc', 'cbaa') # false
p anagrams('abc', 'cba') # true


p "---------SUBWORDS---------"

# Write a method that returns an array of all the subwords 
# of the string that appear in the dictionary argument. 
# The method does NOT return any duplicates.
class String
  def real_words_in_string(dictionary)
    subwords = []
    dictionary.each do |word|
      if self.include?(word)
        subwords << word
      end
    end
    subwords
  end
end

dictionary = ["bears", "ear", "a", "army"]
p "erbearsweatmyajs".real_words_in_string(dictionary) 
# ["bears", "ear", "a"]

p "---------LONGEST PALINDROME---------"


# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the length of the longest palindrome in
# a given string. If there is no palindrome longer than two letters, return false.
def longest_palindrome(string)
  current = 0
  longest = 0

  (0...string.length).each do |start_idx|
    (0...string.length).each do |end_idx|
      chunk = string[start_idx..end_idx]
      if chunk.length > 2 && chunk == chunk.reverse
        current = chunk.length

        if current > longest
          longest = current
        end
      end
    end
  end

  if longest > 0
    return longest
  else
    return false
  end

end

p "--------CAESAR CIPHER--------"

# Back in the good old days, you used to be able to write a darn near
# uncrackable code by simply taking each letter of a message and incrementing it
# by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
# to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
# will take a message and an increment amount and outputs the encoded message.
# Assume lowercase and no punctuation. Preserve spaces.
#
# To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
# the position of a letter in the array, you may use `Array#find_index`.
def caesar_cipher(str, shift)
  alphabet = ("a".."z").to_a
  new_str = ""

  str.each_char do |char|
    if alphabet.include?(char)
      alpha_index = alphabet.index(char)
      new_alpha_index = (alpha_index + shift) % 26
      new_char = alphabet[new_alpha_index]
      new_str += new_char
    else
      new_str += char
    end
  end

  new_str
end

p caesar_cipher("catz hatz", 2) # "ecvb jcvb"

p "-------SUBSETS (RECURSIVE)--------"

# Returns all subsets of an array
# do this recursively
def subsets(array)
  return [[]] if array.empty?
  
  last = array[-1]
  prev_array = subsets(array[0..-2])    # 2D array
  subsets = []

  prev_array.each do |subarray|
    subsets << subarray + [last]
  end

  subsets + prev_array
end

p subsets([1, 2, 3])
# [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


p "-------UPCASE STRING (RECURSIVE)--------"

def upcase(str)
    return str.upcase if str.length <= 1
    str[0].upcase + upcase(str[1..-1])
end

p "-------REVERSE STRING (RECURSIVE)--------"

def reverse(str)
    return str[-1] if str.length <= 1
    str[-1] + reverse(str[0..-2])
end

p "-------FIRST EVEN NUMBERS SUM (RECURSIVE)--------"

# Write a recursive method that returns the sum of the first n even numbers
# recursively. Assume n > 0.
def first_even_numbers_sum(n)
  return 2 if n == 1

  evens = []
  i = 2
  while evens.length < n
    evens << i
    i += 2
  end
  nth_even = evens[n - 1]

  nth_even + first_even_numbers_sum(n - 1)
end

p first_even_numbers_sum(1)   # 2
p first_even_numbers_sum(2)   # 6  
p first_even_numbers_sum(3)   # 12

# OFFICIAL SOLUTION
# the nth even number is just 2 * n!

def first_even_numbers_sum(n)
  return 2 if n == 1
  nth_even = 2 * n
  nth_even + first_even_numbers_sum(n-1)
end

p "-------DIGITAL ROOT--------"

# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". **Do not use string conversion within your method.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.

# RECURSIVE (USING STRING CONVERSION)

def digital_root(num)
    arr = num.to_s.split("").map { |str| str.to_i }
    return arr[0] if arr.length == 1

    if arr.sum < 10
        return arr.sum
    else
        digital_root(arr.sum)
    end
end

p digital_root(9)                   # 9
p digital_root(4322)                # 2

# OFFICIAL SOLUTION (NO STRING CONVERSION)
# test case: 4322

def digital_root(num)
    while num >= 10
        num = digital_root_step(num)        
    end

    num
end

def digital_root_step(num)
    root = 0
    while num > 0                           
        root += (num % 10)          
        num /= 10                   
    end 
    root                                                  
end

# any number modded by 10 gives you the last digit
    # 4322 % 10 == 2
    # 423 % 10 == 3
# any number divided by 10 gives you the number minus last digit
    # 4322 / 10 = 432
    # 423 / 10 = 42

# ANOTHER OFFICIAL SOLUTION (NO HELPER FUNCTION)

def digital_root(num)
    digits = []

    while num > 0
        digits << num % 10
        num /= 10
    end

    digit_sum = digits.inject(&:+)              # what is this?

    digit_sum >= 10 ? digit_root(digit_sum) : digit_sum
end

# MAGICAL SOLUTION (I don't understand this at all)

def digital_root(num)
    num < 10 ? num : digital_root(digital_root(num / 10) + (num % 10))
end

# base case is when num is less than 10
# example: 852
# 852 / 10 = 85
# 852 % 10 = 2

#           8 5 2
#          8 5  + 2 
#        8 + 5    + 2

def digital_root(num)
    return num if num < 10
    digital_root(digital_root(num / 10) + num % 10)
                                # this will always hit the base case! 
                                # don't need to call recursive this one
end


p "-------ARRAY DUPS--------"

# Write an Array#dups method that will return a hash containing the indices of all
# duplicate elements. The keys are the duplicate elements; the values are
# arrays of their indices in ascending order

class Array
  def dups
    hash = Hash.new { |h, k| h[k] = [] }
    self.each_with_index do |ele, i|
      hash[ele] << i
    end
    hash.select { |k, v| v.length > 1 }
  end
end

p [1, 3, 4, 3, 0, 3, 0].dups #=> { 3 => [1, 3, 5], 0 => [4, 6] }

p "-------FIRST NUM PRIMES--------"

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.
def is_prime?(num)
  return false if num < 2
  (2...num).none? { |factor| num % factor == 0 }
end

def primes(num)
  primes = []

  i = 2
  until primes.length >= num
    primes << i if is_prime?(i)
    i += 1
  end

  primes
end

p "----------TWO SUM--------"

class Array
  # Write a method, `Array#two_sum`, that finds all pairs of positions where the
  # elements at those positions sum to zero. The method should return a nested 
  # array of positions.

  # NB: ordering matters. We want each of the pairs to be sorted smaller index
  # before bigger index. We want the array of pairs to be sorted
  # "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)
  def two_sum
    pairs = []

    (0...self.length).each do |i|
      (i + 1...self.length).each do |j|   # start at i + 1 and iterate all the way to end
        if self[i] + self[j] == 0
          pairs << [i, j]
        end
      end
    end

    pairs.sort
  end
end

p [5, 1, -7, -5].two_sum # [[0, 3]]
p [5, -1, -5, 1].two_sum # [[0, 2], [1, 3]]

p "----------FIBS SUM--------"

# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0.

# fibs_sum(n - 1) + fib(n)
# how do we get fib(n)?
# fib(n) deconstructs into fib(n - 1) + fib(n - 2)
# fib(n - 1) deconstructs into fib(n - 2) + fib(n - 3)
# so then we have two fib(n - 2)'s hanging out which we combine
# the extra one is ALWAYS second to the end

# we also have an extra hanging out
# which keeps deconstructing until we hit fib(1)
# fib(1) is our base case, we know that that's 1
# but we have an extra fib(2) hanging out 
# fib(1) all the way to fib(n - 2) is just the same thing as fib_sum(n - 2)
# but we have to account for the extra fib(2) which always evaluates to 1

def fibs_sum(n)
  return 0 if n == 0
  return 1 if n == 1
  
  (fibs_sum(n - 2) + 1) + fibs_sum(n - 1)
  # if we are trying to find the nth fib number from fibs_sum(n) method
  # then we need to do fibs_sum(n - 2) + 1
end

# 1, 1, 2, 3, 5, 8
p fibs_sum(1) # 1             # 1     
p fibs_sum(2) # 2 (1 + 1)     # 1     
p fibs_sum(3) # 4 (2 + 2)     # 2     # n - 2 gives us 4
p fibs_sum(4) # 7 (4 + 3)     # 3     # n - 1 gives us 7
p fibs_sum(5) # 12 (7 + 5)    # 5     # we wanna get 12 from 7 + 5 (5 is 4 + 1)
p fibs_sum(6) # 20 (12 + 8)   # 8

p "-------MY FLATTENED / MY CONTROLLED FLATTEN--------"

class Array
  # Takes a multi-dimentional array and returns a single array of all the elements
  # [1,[2,3], [4,[5]]].my_flatten => [1,2,3,4,5]
  def my_flatten 
    flattened = []
    self.each do |ele|
      if ele.is_a?(Array)
        flattened << ele
      else
        flattened += my_flatten(ele)
      end
    end
    flattened
  end

  # Write a version of flatten that only flattens n levels of an array.
  # E.g. If you have an array with 3 levels of nested arrays, and run
  # my_flatten(1), you should return an array with 2 levels of nested
  # arrays
  #
  # [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,[5]]
  def my_controlled_flatten(n) 
    return self if n == 0
          # our special control base case
          # base case is when n = 0, we return the entire array
          # the difference is the base case
    flattened = []

    self.each do |ele|
      if ele.is_a?(Array)
        flattened += ele.my_controlled_flatten(n - 1) 
          # it's already been flattened
          # this is the flattening process!
          # [1] + [2, 3] = [1, 2, 3]
          # so then if n = 3, then we recursively call it twice
          # and then we concatenate it (and that's the third flatten)
      else
        flattened << ele
        # our normal flattened base case
      end
    end
    flattened
  end
end

# flatten([2, [3]], 1) 
# the n goes down from 1 to 0
# so we return [3]
# and then we concatenate them
# [2] + [3]
# [2, 3]

p [1, [2, [3, 4, [5]]]].my_controlled_flatten(2) 
#=> [1,2,3,4,[5]]

# check if it's an array
# iterate over the array
# flattened = []
# grab the first element and it's a 1 
# check if it's an array
# it's not an array so we shovel it in 
# flattened = [1]
# on the next iteration we get [2, [3, 4, [5]]
# we call flattened on that
# [1] + (flattened([2, [3, 4, [5]]), 1)
    # the n went down from 2 to 1
    # as soon as n hits 0, we hit the base case
# LEVEL TWO: flattened([2, [3, 4, [5]]), 1
# two is a number so we shovel it in
# [2] + flattened([3, 4, [5]], 0)
    # n = 0
    # we hit the base case
    # so return [3, 4, [5]]
    # we concatenate it with [2]
    # we get [2, 3, 4, [5]]



p "-------IMPORTANT! MERGE SORT--------"

# there are two stacks because we only divide twice
# first we split and then we merge
# diamond shape 

#       [3, 2, 1, 4]
#   [3, 2]        [1, 4]
# [3] [2]           [1] [4]
#   [2, 3]         [1, 4]
#       [1, 2, 3, 4]


def merge_sort(arr)         # [3, 2, 1, 4]          2) [3, 2]
    return arr if arr.length <= 1

    midpoint = arr.length / 2       # midpoint = 2      2) midpoint = 1
    left = merge_sort(arr.take(midpoint))       # 1) [3, 2] gets merge sorted     2) left = merge_sort([3]) = [3]
    right = merge_sort(arr.drop(midpoint))      # 2) right = merge_sort([2]) = [2]

    merged = []                                 # 2) left = [3] and right = [2]

    until left.empty? || right.empty?           
        if left.first <= right.first            
            merged << left.shift
        elsif left.first > right.first          # 2) merged = [2]
            merged << right.shift               # 2) right = []
        end
    end

    merged + left + right                       # 2) [2] + [3] + [] returns [2, 3] -- now we go back to stack 1
    # merged = all the stuff that has been shoveled in
    # left = empty 
    # right = stuff that doesn't need to be compared bc we already know it's sorted
    # and the stuff in the right is ALWAYS bigger than the stuff in merged 
end 

p merge_sort([3, 2, 1, 4]) 
# [1, 2, 3, 4]

p "-------IMPORTANT! MERGE SORT WITH PROC--------"

class Array
  # Write an Array#merge_sort method; it should not modify the original array.
  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return self if self.length <= 1
    midpoint = self.length / 2 
    merged = []

    left = self.take(midpoint).merge_sort(&prc)
    right = self.drop(midpoint).merge_sort(&prc)

    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) > 0
        merged << right.shift
      elsif prc.call(left[0], right[0]) <= 0
        merged << left.shift
      end
    end

    merged + left + right
  end
end

p "-------IMPORTANT! QUICK SORT--------"
# this sorts while it splits

def quick_sort(arr)
    return arr if arr.length <= 1

    pivot = arr[0]
    left_side = arr[1..-1].select { |ele| ele < pivot }
    right_side = arr[1..-1].select { |ele| ele >=  pivot } # put dupes on only one side!

    quick_sort(left_side) + [pivot] + quick_sort(right_side)
end

p quick_sort([3, 2, 1, 4]) 
# [1, 2, 3, 4]

p "-------IMPORTANT! QUICK SORT WITH PROC--------"

# Monkey patch the array class quick sort method. The method should be able to 
# accept a block.
class Array
  def my_quick_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return self if self.length <= 1

    pivot = self[0]
    left = self[1..-1].select { |ele| prc.call(ele, pivot) <= 0 } # don't put "pivot" inside the ||
    right = self[1..-1].select { |ele| prc.call(ele, pivot) > 0 }

    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
  end
end

p "-------IMPORTANT! BINARY SEARCH--------"

# def bsearch(arr, target)
#     midpoint = arr.length / 2
#     return midpoint if arr[midpoint] == target
#     return nil if arr.length == 1 && arr[midpoint] != target
 
#     left = arr.take(midpoint)
#     right = arr.drop(midpoint)

#     if arr[midpoint] > target 
#         bsearch(left, target)
#     elsif arr[midpoint] < target
#         bsearch(right, target)
#     end
# end

#####

# the left side is different because the index always starts at zero

# we are only checking one side at a time, as long as one side evaluates to nil
# we know we are done


def bsearch(arr, target)
    return nil if arr.empty?
 
    midpoint = arr.length / 2       # [5, 9] midpoint = 1
    if arr[midpoint] > target           # is 9 bigger than 5? yes
        bsearch(arr.take(midpoint), target)     # 2) do bsearch on [5], we get 0 
                                                # then we go back up one stack higher
    elsif arr[midpoint] < target
        # when searching on right side, remember arr.drop(midpoint) INCLUDES 
        # the midpoint value itself: [1, 2] and [3, 4, 5] if midpoint = 2
        # so you have to offset it by one by doing arr.drop(midpoint + 1)
        # that way, we get [1, 2] and [4, 5]
        subanswer = bsearch(arr.drop(midpoint + 1), target)
        # 3) subanswer = 0

        # what on earth is happening here in this if/else statement?

        if subanswer.nil?         # the number doesn't even exist      
            return nil          # this is we don't find anything in any small block of array
                            # we just immediately return nil
                            # we don't want to do the whole addition of midpoint + 1 + answer
        else
            (midpoint + 1) + subanswer      # midpoint = 2
                                # 2 + 1 + 0 = 3 
                                # on the left side, it would be 0 + subanswer (bc it starts at 0)
        end

    elsif arr[midpoint] == target
        midpoint                    # arr[0] = 5 becasue the arr = [5]
                                        # 1) return 0
    end
end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3 
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

p "-------IMPORTANT! BINARY SEARCH IN A CLASS--------"

class Array
  def my_bsearch(target)
    return nil if self.empty?
    midpoint = self.length / 2

    if self[midpoint] == target
      return midpoint
    elsif self[midpoint] >= target
      left = self.take(midpoint)
      left.my_bsearch(target)
    elsif self[midpoint] < target
      right = self.drop(midpoint + 1)
      search_res = right.my_bsearch(target)
      if search_res.nil?
        return nil
      else
        (midpoint + 1) + search_res
      end
    end
  end
end

p "-------IMPORTANT! BUBBLE SEARCH WITH A PROC--------"

class Array
  # Write an Array method that returns the same array bubble-sorted.
  # Do NOT call the built-in Array#sort method in your implementation. 
  def bubble_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    
    sorted = false
    while !sorted
      sorted = true
      (0...self.length - 1).each do |i|
        if prc.call(self[i], self[i + 1]) > 0
          self[i], self[i + 1] = self[i + 1], self[i]
          sorted = false
        end
      end
    end
    self
  end

end

p "---------PRACTICE TEST 1----------"

p "---------MY INJECT----------"


class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(acc = nil, &prc)

    if acc == nil
      acc = self[0]
      (1...self.length).each do |i|
        acc = prc.call(acc, self[i]) 
      end
    else 
      (0...self.length).each do |i|
        acc = prc.call(acc, self[i]) 
      end
    end

    acc

  end
end

# ([1, 2, 3].my_inject(1) { |acc, x| acc + x })       # 7
([1, 2, 3].my_inject { |acc, x| acc + x })          # 6

p "---------FIRST NUM PRIMES----------"


# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def is_prime?(num)
  return false if num < 2
  (2...num).none? { |fact| num % fact == 0 }
end

def primes(num)
  primes = []

  i = 2
  while primes.length < num
    if is_prime?(i)
      primes << i
    end
    i += 1
  end

  primes
end

p "---------FIRST NUM FACTORIALS----------"


# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1] if num == 1
  prev = factorials_rec(num - 1)
  next_num = (num - 1) * prev[-1]
  prev << next_num
end

factorials_rec(1)   # 1
factorials_rec(2)   # 1
factorials_rec(3)   # 2 x 1 = 2         [1, 1, 2]
factorials_rec(4)   # 3 x 2 x 1 = 6     [1, 1, 2, 6]
factorials_rec(6)   #                   [1, 1, 2, 6, 24, 120]

p "---------DUPLICATE HASH----------"


class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    hash = Hash.new { |h, k| h[k] = [] }
    self.each_with_index do |ele, i|
      hash[ele] << i
    end
    hash.select { |k, v| v.length > 1 }
  end
end

p "---------SYMMETRIC SUBSTRINGS----------"


class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  def symmetric_substrings
    substrings = []
    (0...self.length).each do |start_idx|
      (start_idx...self.length).each do |end_idx|
        substr = self[start_idx..end_idx]
        if substr == substr.reverse && substr.length > 1
          substrings << substr
        end
      end
    end
    substrings
  end

end

p "---------MERGE SORT----------"


class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    return self if self.length <= 1

    mid = self.length / 2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    prc ||= Proc.new { |a, b| a <=> b }
    merged = []
    
    until left.empty? || right.empty?
      if prc.call(left.first, right.first) <= 0
        merged << left.shift 
      elsif prc.call(left.first, right.first) > 0
        merged << right.shift
      end
    end

    merged + left + right 
  end
end

