import PrivateTasks.private_task_1
import PrivateTasks.private_task_2
from Scheduler.scheduler import  *
from Utilities.softwaretimer import *
import time

scheduler = Scheduler()
scheduler.SCH_Init()

task1 = PrivateTasks.private_task_1.Task1()
task2 = PrivateTasks.private_task_2.Task2()

scheduler.SCH_Add_Task(task1.Task1_Run, 1000,2000)
scheduler.SCH_Add_Task(task2.Task2_Run, 1000,6000)

while True:
    scheduler.SCH_Update()
    scheduler.SCH_Dispatch_Tasks()

    time.sleep(0.1)