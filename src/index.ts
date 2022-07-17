export enum Connection {
    HTTP = 'http',
    MQTT = 'mqtt',
   }
  
  export type Config = {
    type:string,
    url:string,
  }
  
  export class Bridge {
    private receive: Config;
  
    private report: Config;
  
    constructor(options:{
      receive:Config,
      report:Config,
    }){
      this.receive = options.receive;
      this.report = options.report;
    }
  
    public init():{message:string,receive:Config,report:Config,}{
  
      return {
        message:`start init bridge service ${Date.now()}`,
        receive:this.receive,
        report:this.report,
      };
    }
  }