const micksFriends = ['tom', 'beans', 'joe', 'jim'];
const joesFriends = ['penny', 'joe', 'tom', 'russel'];
const mutualFriends = [];
for (let i = 0; i < micksFriends.length; i++) {
    for (let j = 0; j < joesFriends.length; j++) {
        if (micksFriends[i] === joesFriends[j]) {
            mutualFriends.push(micksFriends[i])
        }
    }
};
console.log(mutualFriends);


