const connection = require('./api/connection');

const getAll = async () => {
    const [getAll] = await connection.execute('SELECT * FROM guia-das-matilhas.trybes');
};

module.exports = getAll;