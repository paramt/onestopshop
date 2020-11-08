from sql_connection import *
from operator import itemgetter
from flask import *
#connect to the database
database = Database()
#database.sql_add('001', "001.08", "1.25", "100.25", "150.10","92.50")
# print(database.get_all('001', "001.08"))



class best_store():
    def __init__(self):
        self.walmart, self.Superstore, self.Loblaws, self.Metro = ["walmart"], ["Superstore"], ["Loblaws"], ["Metro"]
        self.walmart_item, self.Superstore_item, self.Loblaws_item, self.Metro_item = {}, {}, {},{}
        self.walmart_total_cost = 0
        self.superstore_total_cost = 0
        self.loblaws_total_cost =0
        self.metro_total_cost = 0


    def data_handle(self, list):
        self.list = list
        for  i in range(len(self.list)):
            value = self.get_type(str(self.list[i][0]), str(self.list[i][1]))
            if value  == False:
                return None
            self.walmart_item[str(self.list[i][1])] =  float(value["WALMART"])
            self.Loblaws_item[str(self.list[i][1])] =  float(value["LOBLAWS"])
            self.Metro_item[str(self.list[i][1])] =  float(value["METRO"])
            self.Superstore_item[str(self.list[i][1])] =  float(value["SUPERSTORE"])
            self.loblaws_total_cost+= float(value["LOBLAWS"])
            self.metro_total_cost += float(value["METRO"])
            self.superstore_total_cost += float(value["SUPERSTORE"])
            self.walmart_total_cost += float(value["WALMART"])
        self.values = [self.walmart_total_cost, self.superstore_total_cost, self.metro_total_cost, self.loblaws_total_cost]
        self.best=[]
        for i in self.values:
            i = "{:,.2f}".format(i)
            self.best.append(i)

        self.walmart.append(self.best[0])
        self.Loblaws.append(self.best[3])
        self.Superstore.append(self.best[1])
        self.Metro.append(self.best[2])
        self.walmart.append(self.walmart_item)
        self.Loblaws.append(self.Loblaws_item)
        self.Superstore.append(self.Superstore_item)
        self.Metro.append(self.Metro_item)
        self.final =[self.walmart,self.Loblaws, self.Superstore, self.Metro]
        self.final.sort(key=itemgetter(1))
        return self.final

    def get_type(self, iid, id):
        return database.get_all(str(iid), str(id))




# list = [["001","001.1"], ["001","001.2"], ["101","103.1"], ["101","104.1"], ["101","105.1"]]
# best_option = best_store(list)
