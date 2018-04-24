'use strict';

const mysqlx = require('@mysql/xedvapi');
const options = { user: 'root', password: 'root', schema: 'mySchema' };

(async function () {
    let session;

    try {
        session = await mysqlx.getSession(options);

        const collection = await session.getSchema(options.schema).createCollection('myCollection');
        await collection.add({ name: 'foo' }).execute();
        await collection.find().fields('name').execute(console.log); // { name: 'foo' }

    } catch (err) {
        console.error(err.message);
    } finally {
        session && session.close();
    }
})();