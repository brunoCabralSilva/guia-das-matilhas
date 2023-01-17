const connection = require('./connection');

const getAll = async () => {
    const [get] = await connection.execute('SELECT * FROM guia-das-matilhas.trybes');
};

module.exports = getAll;