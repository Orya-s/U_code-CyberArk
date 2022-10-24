import pymysql 

# connection = pymysql.connect(
#     host="<url of the DB>",
#     user="<username>",
#     password="<password>",
#     db="<DB name>",
#     charset="utf8",
#     cursorclass=pymysql.cursors.DictCursor
# )

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",    # Database
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

if connection.open:   
    print("The connection is open")
    
    

with connection.cursor() as cursor:
    query = "SELECT * FROM company"
    cursor.execute(query)
    result = cursor.fetchall()
    print(result)
