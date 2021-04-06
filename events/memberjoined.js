module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        if (member.guild.id === "738561073916936333" && !member.user.bot){
            member.roles.add("747019602860441630").catch(err => {})
        }
    }
};