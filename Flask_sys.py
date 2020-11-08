from flask import *
from Main import *

app = Flask(__name__)

app.config["DEBUG"] = True
@app.route('/sender', methods=['GET'])
def home():

    data = request.args.get("send")
    print(data)
    print("OK")
    return jsonify(sort_data(data))


def sort_data(data):
    list = []
    for i in data.split(","):
        print(i)
        x = i.split(":")
        list.append([str(x[0]), x[1]])
    best_option = best_store()
    final = best_option.data_handle(list)
    return final

if __name__ == "__main__":
    app.run()
