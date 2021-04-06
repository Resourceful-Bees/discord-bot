module.exports = {
    name: 'killbot',
    description: 'Kills running bot',
    permissions: 'ADMINISTRATOR',
    execute(message) {
        process.kill(process.pid);
    }
};