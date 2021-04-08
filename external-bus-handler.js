var message_bus;

(function(root) {
      root.__8x8Chat = {
          onInit: function(bus) {
          message_bus = bus;
          message_bus.publish("chat:set-system-messages", {
                  "chatEstablished": "Jimbo says Your chat session has been established."
              })
          }
      };
})(this);
