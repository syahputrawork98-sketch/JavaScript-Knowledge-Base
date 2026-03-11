// C13 - Example 03: guard style with &&

const user = { profile: { email: 'a@x.com' } };
const email = user && user.profile && user.profile.email;

console.log(email);
