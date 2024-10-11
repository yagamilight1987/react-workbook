export default async function Games() {
  const data = [
    {
      game_id: 20200,
      name: 'Galactic Bowling',
      release_date: 'Oct 21, 2008',
      price: 19.99,
      header_image:
        'https://cdn.akamai.steamstatic.com/steam/apps/20200/header.jpg?t=1640121033',
      genres: ['Casual', 'Indie', 'Sports'],
      positive: 6,
      negative: 11,
    },
  ];

  return <p>This is games page</p>;
}
