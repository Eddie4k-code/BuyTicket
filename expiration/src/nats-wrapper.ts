import nats, { Stan } from "node-nats-streaming";



//Singleton Design for Nats Client 
//This single instance will be shared.

class NatsWrapper {
    private _client?: Stan;


    get client() {
        if (!this._client) {
            throw new Error('Cannot Access Nats Client Before Connecting');
        }

        return this._client;

    }

    //Connection Settings 
    connect(clusterId: string, clientId:string, url: string) {
        this._client = nats.connect(clusterId, clientId, { url });


        return new Promise<void>((resolve, reject) => {

            this.client.on('connect', () => {
                console.log('Connected to NATS');
                resolve();
            });

            this.client.on('error', (err:any) => {

                reject(err);

            });

            


        });

      
    }





}

//The single instance.
export const natsWrapper = new NatsWrapper();