// external-bus-handler.js
 (function(root) {
     root.__8x8Chat = {
         onInit: function(bus) {
bus.publish("chat:disable-proxy");
bus.subscribe("customer:message-received", function(data) {
console.log(data.message);
      // data.message contains the customer message, and data.id
      // the message ID to be sent back when proxying
  });

         }
     };
 })(this);
