// external-bus-handler.js
 (function(root) {
     root.__8x8Chat = {
         onInit: function(bus) {
  message_bus.publish("chat:set-system-messages", {
      agentTyping: "(modified) Agent is typing..."
});

         }
     };
 })(this);
