// external-bus-handler.js
 (function(root) {
     root.__8x8Chat = {
         onInit: function(bus) {
bus.publish("chat:enable-proxy");

bus.subscribe("customer:message-received", function(data) {
bus.publish("customer:send-message", data);
console.log(data);
console.log(data.message);
console.log(data.id);
});

bus.subscribe("agent:message-received", function(data) {
bus.publish("agent:send-message", data);
console.log(data);
console.log(data.message);
console.log(data.id);
  });
         }
     };
 })(this);
