module.exports = {
    name: 'guildMemberUpdate',
    execute(oldMember, newMember) {
        if (newMember.roles.cache.has("743493856988889190")){
            newMember.roles.add("874096203145572372").catch(() =>{});
        }else {
            newMember.roles.remove("874096203145572372").catch(() =>{});
        }
    }
}