//import modules
import {MongoClient} from 'mongodb';
import config from './config';

const withDB = async (operation, dbname, res) => {
    try {
        const client = await MongoClient.connect(config.url, { useUnifiedTopology: true });
        const db = client.db(dbname);
    
        await operation(db)
          
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }

}
export default withDB;