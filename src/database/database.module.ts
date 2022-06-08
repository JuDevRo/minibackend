import {Module, Global} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import { MongoClient } from 'mongodb';


  //const lobbysCollection = database.collection('lobbys');
  //const lobbys = await lobbysCollection.find().toArray();
  //console.log(lobbys);

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://miniback.vhka2.mongodb.net', {
            user: 'JuDevRo',
            pass: 'root',
            dbName: 'miniback'
        }),
    ],
    providers: [
        {
            provide: 'MONGO',
            useFactory: async () => {
                const uri = 'mongodb+srv://JuDevRo:root@miniback.vhka2.mongodb.net/?retryWrites=true&w=majority'
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db('miniback');
                return database;
            },
        },
    ],
    exports: ['MONGO', MongooseModule],
})

export class DatabaseModule {}