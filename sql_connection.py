from ibm_db import *


class Database():
    def __init__(self):
        self.sql_connect()
    def sql_connect(self):
        self.connection = connect('DATABASE=BLUDB;'
                     'HOSTNAME=dashdb-txn-sbox-yp-dal09-10.services.dal.bluemix.net;'  # 127.0.0.1 or localhost works if it's local
                     'PORT=50000;'
                     'PROTOCOL=TCPIP;'
                     'UID=qvv90408;'
                     'PWD=6@vhtpj31g41j5wf;', '', '')

    def sql_add(self, location, ID, LOBLAWS, METRO, SUPERSTORE, WALMART):
        statement = prepare(self.connection, "INSERT INTO \""+ location +"\" VALUES("+ID+", "+LOBLAWS+", "+METRO+", "+SUPERSTORE+", "+WALMART+");")
        execute(statement)

         #('ID', 'LOBLAWS', 'METRO', 'SUPERSTORE', 'WALMART')
    def get_all(self, location, data):
        statement ="SELECT * FROM \""+ location +"\" WHERE ID="+data+" "
        statement = exec_immediate(self.connection, statement)
        return fetch_assoc(statement)


database = Database()




# database.sql_add("001","001.1", "1.58", "1.41", "1.01","1.25")
# database.sql_add("001","001.2", "1.67", "1.12", "1.05","1.31")
# database.sql_add("001","002.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","001.1", "1.58", "1.41", "1.01","1.25")
# database.sql_add("001","003.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","004.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","005.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","006.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","007.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","008.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","009.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("001","010.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","101.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","101.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","102.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","102.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","103.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","103.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","104.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","104.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","104.3", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","105.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","105.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","106.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","106.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","107.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","107.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","108.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","108.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","109.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","109.2", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","110.1", "1.25", "1.25", "1.25","1.25")
# database.sql_add("101","110.2", "1.25", "1.25", "1.25","1.25")
