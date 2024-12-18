import type { Meta, StoryObj } from '@storybook/react';
import GameDetail from '.';

const meta: Meta<typeof GameDetail> = {
  component: GameDetail,
};

export default meta;

type Story = StoryObj<typeof GameDetail>;

export const Basic: Story = {
  render: () => <GameDetail detail={detail} />,
};

const detail = {
  game_id: 2238430,
  name: 'Mon-Yu: Defeat Monsters And Gain Strong Weapons And Armor. You May Be Defeated, But Don’t Give Up. Become Stronger. I Believe There Will Be A Day When The Heroes Defeat The Devil King.',
  release_date: 'Sep 21, 2023',
  required_age: 0,
  price: 49.99,
  dlc_count: 0,
  detailed_description:
    'Defeat the Devil Kings! You have been guided to the land of fairies where the Dragon King’s Tower housed the hidden treasures that had brought peace to the land. But one day, the Seven Devil Kings stole all of the treasures, and used their powers to turn the tower into a terrible dungeon! It is up to you to recover the hidden treasures from the Devil Kings, and restore peace to the land! Mon-Yu is a turned-based dungeon crawler RPG in the tradition of the original Wizardry. Players can create their own team of heroes from various different classes, and choose an avatar for each hero from a wide selection of different portraits. The demons and monsters that you defeat along the way will drop new weapons and armor for you to use. As your heroes level up, learn new skills, and watch your weapons and armor level up alongside you! Strive to create the strongest team of heroes you can, and defeat the Devil Kings - no matter how many times you die!',
  about_the_game:
    'Defeat the Devil Kings! You have been guided to the land of fairies where the Dragon King’s Tower housed the hidden treasures that had brought peace to the land. But one day, the Seven Devil Kings stole all of the treasures, and used their powers to turn the tower into a terrible dungeon! It is up to you to recover the hidden treasures from the Devil Kings, and restore peace to the land! Mon-Yu is a turned-based dungeon crawler RPG in the tradition of the original Wizardry. Players can create their own team of heroes from various different classes, and choose an avatar for each hero from a wide selection of different portraits. The demons and monsters that you defeat along the way will drop new weapons and armor for you to use. As your heroes level up, learn new skills, and watch your weapons and armor level up alongside you! Strive to create the strongest team of heroes you can, and defeat the Devil Kings - no matter how many times you die!',
  short_description:
    'Defeat the Devil Kings! You have been guided to the land of fairies where the Dragon King’s Tower housed the hidden treasures that had brought peace to the land. But one day, the Seven Devil Kings stole all of the treasures, and used their powers to turn the tower into a terrible dungeon!',
  reviews: '',
  header_image: '/images/card-detail.jpg',
  website: '',
  support_url: '',
  support_email: 'support@aksysgames.com',
  windows: true,
  mac: false,
  linux: false,
  metacritic_score: 0,
  metacritic_url: '',
  achievements: 22,
  recommendations: 0,
  notes: '',
  supported_languages: ['English', 'Japanese'],
  full_audio_languages: ['Japanese'],
  packages: [
    {
      title:
        'Buy Mon-Yu: Defeat Monsters And Gain Strong Weapons And Armor. You May Be Defeated, But Don’t Give Up. Become Stronger. I Believe There Will Be A Day When The Heroes Defeat The Devil King.',
      description: '',
      subs: [
        {
          text: 'Mon-Yu - $49.99',
          description: '',
          price: 49.99,
        },
      ],
    },
  ],
  developers: ['EXPERIENCE', 'Poppy Works'],
  publishers: ['Aksys Games'],
  categories: ['Single-player', 'Steam Achievements', 'Full controller support'],
  genres: ['RPG'],
  screenshots: ['/images/card-detail.jpg', '/images/card-detail.jpg', '/images/card-detail.jpg', '/images/card-detail.jpg', '/images/card-detail.jpg'],
  movies: ['http://cdn.akamai.steamstatic.com/steam/apps/256956887/movie_max.mp4?t=1689231620'],
  user_score: 0,
  score_rank: '',
  positive: 5,
  negative: 2,
  estimated_owners: '0 - 20000',
  average_playtime_forever: 0,
  average_playtime_2weeks: 0,
  median_playtime_forever: 0,
  median_playtime_2weeks: 0,
  peak_ccu: 2,
  tags: {
    RPG: 63,
    JRPG: 37,
    'Dungeon Crawler': 35,
    '2D': 31,
    Fantasy: 29,
    'Character Customization': 23,
    Singleplayer: 21,
  },
};
