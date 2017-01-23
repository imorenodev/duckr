export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Tyler McGinnis',
        avatar: 'https://secure.gravatar.com/avatar/ed96b7c1cccc9cd14ca1144359c03b3c',
        uid: 'tylermcginnis'
      });
    }, 2000);
  });
};
