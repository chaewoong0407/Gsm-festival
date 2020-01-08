from bs4 import BeautifulSoup
import urllib.request
import re
from datetime import datetime

now = datetime.now()
i = now.month
a = now.year
base_url = 'http://www.gsm.hs.kr/xboard/board.php?mode=list&tbnum=4&sCat=0&page=1&keyset=&searchword=&mode1=&sYear=2019&sMonth=12&sDay=&sYear=' + \
    str(a)+'&sMonth='
with open("C:/Users/user/Desktop/Web/gsm/gsm-guide/cal.txt", 'w', encoding="utf-8") as f:
    html = urllib.request.urlopen("{}{:02}".format(base_url, i)).read()
    soup = BeautifulSoup(html, 'html.parser')
    month = soup.find_all('ul', {'class': 'day'})
    calendar = []
    for week in month:
        days = week.find_all("li")
        for day in days:
            calendar.append(day.text.replace('\xa0', '').replace('\n', ''))

    while '' in calendar:
        calendar.remove('')

    item = calendar[now.day-1].split("-")
    if len(item) == 2:
        print(item[1])
        f.write(str(item[1]))
    else:
        print('오늘 일정 없음')
        f.write('오늘 일정 없음')







