from datetime import datetime, timedelta
from random import uniform

def genData(curTime):
    print(str(curTime) + " "+ str(format(uniform(0, 100.0), '.2f')))


startTime = datetime(2020, 7, 10)
endTime = datetime(2020, 7, 12)

timeSeconds = startTime
timeMinutes = startTime

print("TIME SECONDS")
print("****************************")
while timeSeconds <= endTime:
    timeSeconds += timedelta(seconds=5)
    genData(timeSeconds)


print("****************************")

print("TIME MINUTES")
print("----------------------------")

while timeSeconds <= endTime:
    timeMinutes += timedelta(minutes=1)
    genData(timeMinutes)

print("----------------------------")
