import pyautogui
# поместите выполняемый код из следующих примеров
pyautogui.PAUSE = 1
pyautogui.FAILSAFE = True
pyautogui.size()
width, height = pyautogui.size()
while True :
    pyautogui.moveTo(100, 100, duration=0.25)
    pyautogui.moveTo(200, 100, duration=0.25)
    pyautogui.moveTo(200, 200, duration=0.25)
    pyautogui.PAUSE = 7.5
    pyautogui.moveTo(100, 200, duration=10)