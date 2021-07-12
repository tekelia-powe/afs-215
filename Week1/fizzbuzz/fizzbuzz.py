def fizzbuzz(num):
    if num == 1:
        return "1"
    elif num == 2:
        return "2"
    else:
        return num


def main():
    for num in range(1, 3):
        print(fizzbuzz(num))

main()