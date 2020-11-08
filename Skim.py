import requests
from bs4 import BeautifulSoup


url = "https://www.walmart.ca/en/ip/tomato-roma/6000191272054"
page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find('div', attrs={'class': 'css-k008qs.e1ufqjyx0'})
#results = results.find('div', attrs={'class': 'css-5ki3bg'})
print(results)
for span in results.span.find_all('span', recursive=False):
     print(span)

#.prettify()
