
from selenium import webdriver
from selenium.webdriver.common.keys import Keys #Класс Keys обеспечивает взаимодействие с командами клавиатуры, такими как RETURN, F1, ALT и т.д…
driver = webdriver.Chrome('D:\chromedriver')    # Здесь указываем именно какой драйвер мы хотим использовать

driver.get('https://bolid.ru/') # здесь будет выполняться гет запрос, т.е. он должен кудато перейти

# Дальше будем брать/искать элементы веб-интефейса
searchbox = driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div[1]/input[2]')

# Уазываем что хотим найти черерз серч-бокс
searchbox.send_keys('с2000-2')

# Нажатие на кнопку поиска
searchButton = driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div[1]/input[1]')
searchButton.click()


