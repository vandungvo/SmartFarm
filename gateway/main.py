import sys
from Adafruit_IO import MQTTClient
import Utilities.controller
import time

AIO_FEED_IDs = ["relay1_mixer1", "relay2_mixer2", "relay3_mixer3", 
                "relay4_areaSelector1", "relay5_areaSelector2", "relay6_areaSelector3", 
                "relay7_pumpIn", "relay8_pumpOut",
                "sensor_humidity", "sensor_temperature"]
AIO_USERNAME = "vovandung"
AIO_KEY = ""

controller = Utilities.controller.Controller()

def connected(client):
    print("Connect successfully")
    for topic in AIO_FEED_IDs:
        client.subscribe(topic)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe successfully")

def disconnected(client):
    print("Disconnect")
    sys.exit (1)

def message(client , feed_id , payload):
    print("Data: " + payload + " , feed id:" + feed_id)
    if feed_id == "relay1_mixer1":
        if payload == "0":
            controller.controlMixer1("OFF")
        else:
            controller.controlMixer1("ON")
    if feed_id == "relay2_mixer2":
        if payload == "0":
            controller.controlMixer2("OFF")
        else:
            controller.controlMixer2("ON")
    if feed_id == "relay3_mixer3":
        if payload == "0":
            controller.controlMixer3("OFF")
        else:
            controller.controlMixer3("ON")
    if feed_id == "relay4_areaSelector1":
        if payload == "0":
            controller.selectArea1("OFF")
        else:
            controller.selectArea1("ON")
    if feed_id == "relay5_areaSelector2":
        if payload == "0":
            controller.selectArea2("OFF")
        else:
            controller.selectArea2("ON")
    if feed_id == "relay6_areaSelector3":
        if payload == "0":
            controller.selectArea3("OFF")
        else:
            controller.selectArea3("ON")
    if feed_id == "relay7_pumpIn":
        if payload == "0":
            controller.controlPumpIn("OFF")
        else:
            controller.controlPumpIn("ON")
    if feed_id == "relay8_pumpOut":
        if payload == "0":
            controller.controlPumpOut("OFF")
        else:
            controller.controlPumpOut("ON")

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()

client.loop_background()

while True:
    temperature = controller.readTemperature()
    if temperature == 404 or temperature == 400:
        temperature = 53
    else :
        temperature = temperature / 100
    client.publish("sensor_temperature", temperature)
    
    humidity = controller.readHumidity()
    if humidity == 404 or humidity == 400:
        humidity = 53
    client.publish("sensor_humidity", humidity)