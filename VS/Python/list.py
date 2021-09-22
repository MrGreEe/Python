# Даны списки:
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# Нужно вернуть список, который состоит из элементов, общих для этих двух списков.

def big_list(): # соединение двух массивов и сортировка
    #result = list(filter(lambda elem: elem in b, a))
    #result = [elem for elem in a if elem in b]
    #result = list(set(a) & set(b))
    result = a + b
    result.sort()
    print(result)
big_list()

def listt():
    bb = list(a)
    x = len(b)
    for i in range(b):
        bb.append(i)
    print (bb)
    print (x)
#listt()    
