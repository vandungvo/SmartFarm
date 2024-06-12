import sys
import Utilities.controller
import time

AIO_FEED_IDs = ["nutnhan1", "nutnhan2"]
AIO_USERNAME = "vovandung"
AIO_KEY = "aio_pdMR05OFJZvwwyIfUBqVeWfvegX1"

controller = Utilities.controller.Controller()

class Connection:
    def connected(client):
        print("Ket noi thanh cong ...")
        for topic in AIO_FEED_IDs:
            client.subscribe(topic)

    def subscribe(client , userdata , mid , granted_qos):
        print("Subscribe thanh cong ...")

    def disconnected(client):
        print("Ngat ket noi ...")
        sys.exit (1)

    def message(client , feed_id , payload):
        print("Nhan du lieu: " + payload + " , feed id:" + feed_id)
        if feed_id == "nutnhan1":
            if payload == "0":
                controller.controlMixer1("OFF")
            else:
                controller.controlMixer1("ON")
        if feed_id == "nutnhan2":
            if payload == "0":
                controller.controlMixer2("OFF")
            else:
                controller.controlMixer2("ON")