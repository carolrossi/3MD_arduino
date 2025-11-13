// PORTAS ESP32
const POT = 36;
const LED = 27; 

// CONEXÃO WIFI E MQTT
const WIFI_SSID ="WIFI_IOT";
const WIFI_PASS = "WIFI_IOT";
const MQTT_BROKER = "10.84.6.160";

// CAMINHO url
const TOPIC_POT = "LALAU/PRU";
const TOPIC_LED = "LALAU/PRULED";

let wifi = require('Wifi');
let mqtt = require("MQTT").create(MQTT_BROKER, {client_id: "mqtt do lalau e do ramon"});

pinMode(LED, "output");

wifi.connect(WIFI_SSID, {password: WIFI_PASS});
wifi.setHostname("Ramon e Lalau");

// CONECTAR WIFI
wifi.on("connected", function () {
    console.log("wifi connected");
    console.log(wifi.getStatus());

    mqtt.connect();
});

// DESCONECTAR WIFI
wifi.on("disconnected", function(){
    console.log("wifi disconnected");
    console.log("reconnecting");
});

// CONECTAR MQTT
mqtt.on("connected", function(){
    console.log("mqtt connected");
    mqtt.subscribe(TOPIC_LED)
});

// DESCONECTAR WIFI
mqtt.on("disconnected", function(){
    console.log("mqtt disconnected...");
    console.log("mqtt reconnecting");
    mqtt.connect();
});

// MESSAGE E PUBLISH MQTT
mqtt.on("message", function(topic, message){
    console.log(topic + " : " + message)
    if(topic == TOPIC_LED){
        if(message == "on")
            digitalWrite(LED, 1);

        if(message == "off")
            digitalWrite(LED, 0)
    }
});


// LEITURA POT
setInterval(function(){
    let valorPOT = analogRead(POT);
    let angulo = 270 * valorPOT;

    console.log("Angulo: " + angulo.toFixed(0));
    mqtt.publish(TOPIC_POT, angulo.toFixed(0))
}, 3000)