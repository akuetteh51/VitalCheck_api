import pymysql

conn = pymysql.connect(host="localhost", port=3306, user="root", passwd="", db="VitaCheck")

cur = conn.cursor()

with conn:
    with cur as cursor:
        # Create a new record
        sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
        cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

    # connection is not autocommit by default. So you must commit to save
    # your changes.
    conn.commit()

    with conn.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('webmaster@python.org',))
        result = cursor.fetchone()
        print(result)

print(cur.description)
print()

for row in cur:
    print(row)

cur.close()
