
def printOddNumbers(number):
  lst=[]
  for i in range (number*2+1):
    if i%2==1:
      lst.append(i)
  
  for i in range (len(lst)+1):
    for j in range (i):
      print(lst[j], end=' ')
    print(end='\n')


def main():
  number = int(input('Enter a number:'))
  printOddNumbers(number)

main()

#O(n^2) n being the length of lst passed to the for loop (2 nested for loops each having n itterations)