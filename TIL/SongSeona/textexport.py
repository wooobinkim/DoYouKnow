import pymysql.cursors
import pymysql
import sys
import os

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

        sql = "SELECT name FROM rawdata"
# Execute the SQL command
        cursor.execute(sql)
# Fetch all the rows in a list of lists.
        results = cursor.fetchall()
        # print(results)
        if results:
            newfile = open("/home/hadoop/rawdata.txt","a+", encoding='utf-8')
            newfile.write('name'+"\n")

        for index in results:
            ltr=[]
            ltr.append(index['name'])
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