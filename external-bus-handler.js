// external-bus-handler.js
 (function(root) {
     root.__8x8Chat = {
         onInit: function(bus) {
bus.publish("chat:enable-proxy");

bus.subscribe("customer:message-received", function(data) {

      data.message += " (modified)";
      bus.publish("customer:send-message", data);
  });
	console.log(data);


bus.subscribe("agent:message-received", function(data) {

      data.message += " Says Jimmy";
      bus.publish("agent:send-message", data);
  });
         }
     };
 })(this);
