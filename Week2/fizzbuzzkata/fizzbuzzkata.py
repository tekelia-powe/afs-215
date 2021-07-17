def fizzbuzz(num):
    if num == 1:
        return "1"
    elif num == 2:
        return "2"
    elif num%5 == 0 and num%3 ==0:
        return "FizzBuzz"
    elif num == 3:
        return "Fizz"
    elif num == 5:
        return "Buzz"
    elif num % 3 == 0:
        return "Fizz"
    elif num % 5 == 0:
        return "Buzz"
    else:
        return ""


def main():
    for num in range(1,16):
        print(fizzbuzz(num))

main()