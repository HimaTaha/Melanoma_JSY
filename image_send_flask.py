import numpy as np
import json
import tensorflow as tf
import base64

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/CloudMelanomaData_testing", methods=['POST'])
def image_send():

    #should be image converted to base 64
    j_dict = request.json

    try:
        j_dict = json.dumps(j_dict)
        j_dict = json.loads(j_dict)
        # load is for file, loads is for string
    except ValueError:
        return send_error("Input is not JSON dictionary", 600)


    image_b64_data = j_dict['im64']

    img = base64.b64decode(image_b64_data[0])

    img_dict = {"image shape": img}

    img_send_test = jsonify(img_dict)

    return img_send_test

if __name__=="__main__":
	app.run(port="5900",host="0.0.0.0") 


