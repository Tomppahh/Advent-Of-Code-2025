def AOC_part1():
    print("starting")
    sum_of_abs = 0
    left_vector = []
    right_vector = []
    with open("AOC1.txt", "r") as AOCfile:
        for line in AOCfile:
            line = line.strip()
            both_numbers = line.split("   ")
            left_number = both_numbers[0]
            right_number = both_numbers[1]
            left_vector.append(int(left_number))
            right_vector.append(int(right_number))
    right_vector.sort()
    left_vector.sort()
    for left, right in zip(left_vector, right_vector):
        sum_of_abs += abs(left - right)
    print(f"AOC1 PART 1 Result: {sum_of_abs}\n")  
    return left_vector, right_vector

def AOC_part2(left_vector, right_vector):
    print("Starting part 2\n")
    
    similarity_score = 0
    for number in left_vector:
        count = right_vector.count(number)
        similarity_score += count * number
    print(f"AOC2 PART 2 Result: {similarity_score}\n")



def main():
    left_vector, right_vector =  AOC_part1()
    AOC_part2(left_vector, right_vector)


main()
