module.exports = {
  mongoGroup : function (config) {
    console.log("CONFIGURATION API");
    var services=[];
    for(var key in  config.types) {
      console.log("Analyzing..."+key)
      var type=config.types[key];

      var service={
        resource: '/'+key,
        apikey: '801230BJKL23Y9090DSFL123HJK09H324HV8732',
        entity_type: key,
        //trust: '8970A9078A803H3BL98PINEQRW8342HBAMS',
        cbHost: config.contextBroker.host+':'+config.contextBroker.port,
        commands: type.commands,
        lazy: type.lazy,
        attributes: type.active,
        static_attributes: []
      };
      services.push(service);
    }

    optionsCreation = {
      url: 'http://localhost:4041/iot/services',
      method: 'POST',
      json: {
        services: services
      },
      headers: {
        'fiware-service': config.service,
        'fiware-servicepath': config.subservice
      }
    };


  }
}