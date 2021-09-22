from selenium import webdriver

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.common.keys import Keys #Класс Keys обеспечивает взаимодействие с командами клавиатуры, такими как RETURN, F1, ALT и т.д…
delay = 40
driver = webdriver.Chrome('C:\chromedriver')
driver.get ('http://osm-uat-app.rt.ru:8002/nrivapp/web#/')
WebDriverWait(driver, delay).until(EC.element_to_be_clickable((By.NAME, "username"))).send_keys("Programming")
# driver.implicitly_wait(10) # seconds неявное ожидание
# login = driver.find_element_by_name('username')
# login.send_key('koliber')
password = driver.find_element_by_class_name('password')

#password = driver.find_element_by_xpath('//*[@id="ng-app"]/body/ui-view/ui-view/div/div/div[1]/form/div[3]/input[2]')
password.send_keys('1234')
logButton = driver.find_element_by_class_name('btn btn-lg btn-primary btn-block')
logButton.click()

#<input type="text" name="username" class="form-control ng-pristine ng-invalid ng-invalid-required ng-touched" placeholder="Пользователь" required="" autofocus="" ng-model="user.username">