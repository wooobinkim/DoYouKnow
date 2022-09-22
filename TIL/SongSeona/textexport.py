import pymysql.cursors
import pymysql
import sys
import os
from datetime import datetime

date="2022-08-01"
nation_id=1
category_id=2

date_obj = datetime.strptime(date,"%Y-%m-%d")
# Open database connection
connection = pymysql.connect(
    user='b208', 
    passwd='b208root', 
    host='43.201.37.208', 
    db='DoYouKnow', 
    charset='utf8',
    cursorclass=pymysql.cursors.DictCursor
)
# prepare a cursor object using cursor() method
with connection.cursor() as cursor:
# Prepare SQL query to select a record into the database.
    try:

        sql = "SELECT * FROM rawdata where data_date=%s and nation_id = %s and category_id = %s"
# Execute the SQL command
        val = (date_obj,nation_id,category_id)
        cursor.execute(sql,val)
# Fetch all the rows in a list of lists.
        results = cursor.fetchall()
        # print(results)
        path = "/home/hadoop/Project/data/"+str(date)+"_"+str(nation_id)+"_"+str(category_id)+".txt"
        if results:
            newfile = open(path,"a+", encoding='utf-8')

        for index in results:
            ltr=[]
            ltr.append(index['name'])
            ltr.append(',')
            ltr.append(index['data_date'])
            ltr.append(',')
            ltr.append(index['nation_id'])
            ltr.append(',')
            ltr.append(index['category_id'])
            lenltr=len(ltr)
            for i in range(lenltr):
                newfile.write('{}'.format(ltr[i]))
            newfile.write("\n")


# # Now print fetched result
        #print("ename=%s,empno=%d,job=%d,hiredate=%d,comm=%s,sal=%d,deptno=%d,mgr=%d" %(ename, empno, job, hiredate, comm, sal, deptno, mgr))
        # print(index)
    except:
        print ("Error: unable to fecth data")
# disconnect from server
connection.close()
newfile.close()