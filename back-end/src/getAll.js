const connection = require('./api/connection');

const getAll = async () => {
    const [get] = await connection.execute('SELECT * FROM trybes');
};

module.exports = getAll;