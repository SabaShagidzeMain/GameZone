// src/pages/api/games.js
export default function handler(req, res) {
  let games = [
    {
      id: 1,
      platform: "nintendo",
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-Adventure",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2017-03-03",
      rating: 9.7,
      thumbnail: "/images/games/legend-of-zelda/thumbnail.webp",
      disc: "/images/games/legend-of-zelda/disc.webp",
      logo: "/images/games/legend-of-zelda/logo.webp",
      additionalImages: [
        "/images/games/legend-of-zelda/additional/image1.webp",
      ],
    },
    {
      id: 2,
      platform: "ps4 ps5",
      name: "God of War",
      genre: "Action",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2018-04-20",
      rating: 9.5,
      thumbnail: "/images/games/god-of-war/thumbnail.webp",
      disc: "/images/games/god-of-war/disc.webp",
      logo: "/images/games/god-of-war/logo.webp",
      additionalImages: ["/images/games/god-of-war/additional/image1.webp"],
    },
    {
      id: 3,
      platform: "ps4 ps5 xbox",
      name: "The Witcher 3: Wild Hunt",
      genre: "RPG",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2015-05-19",
      rating: 9.8,
      thumbnail: "/images/games/the-witcher-3/thumbnail.webp",
      disc: "/images/games/the-witcher-3/disc.webp",
      logo: "/images/games/the-witcher-3/logo.webp",
      additionalImages: ["/images/games/the-witcher-3/additional/image1.webp"],
    },
    {
      id: 4,
      platform: "ps4",
      name: "Dark Souls III",
      genre: "Action RPG",
      difficulty: "Very Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2016-04-12",
      rating: 9.2,
      thumbnail: "/images/games/dark-souls-3/thumbnail.webp",
      disc: "/images/games/dark-souls-3/disc.webp",
      logo: "/images/games/dark-souls-3/logo.webp",
      additionalImages: ["/images/games/dark-souls-3/additional/image1.webp"],
    },
    {
      id: 5,
      platform: "ps4 ps5",
      name: "Overwatch",
      genre: "First-Person Shooter",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2016-05-24",
      rating: 8.9,
      thumbnail: "/images/games/overwatch/thumbnail.webp",
      disc: "/images/games/overwatch/disc.webp",
      logo: "/images/games/overwatch/logo.webp",
      additionalImages: ["/images/games/overwatch/additional/image1.webp"],
    },
    {
      id: 6,
      platform: "xbox vr",
      name: "Minecraft",
      genre: "Sandbox",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2011-11-18",
      rating: 9.3,
      thumbnail: "/images/games/minecraft/thumbnail.webp",
      disc: "/images/games/minecraft/disc.webp",
      logo: "/images/games/minecraft/logo.webp",
      additionalImages: ["/images/games/minecraft/additional/image1.webp"],
    },
    {
      id: 7,
      platform: "xbox",
      name: "Among Us",
      genre: "Party",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2018-06-15",
      rating: 8.7,
      thumbnail: "/images/games/among-us/thumbnail.webp",
      disc: "/images/games/among-us/disc.webp",
      logo: "/images/games/among-us/logo.webp",
      additionalImages: ["/images/games/among-us/additional/image1.webp"],
    },
    {
      id: 8,
      platform: "ps5",
      name: "Final Fantasy VII Remake",
      genre: "RPG",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2020-04-10",
      rating: 9.4,
      thumbnail: "/images/games/final-fantasy-7-remake/thumbnail.webp",
      disc: "/images/games/final-fantasy-7-remake/disc.webp",
      logo: "/images/games/final-fantasy-7-remake/logo.webp",
      additionalImages: [
        "/images/games/final-fantasy-7-remake/additional/image1.webp",
      ],
    },
    {
      id: 9,
      platform: "nintendo",
      name: "Stardew Valley",
      genre: "Simulation",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2016-02-26",
      rating: 9.0,
      thumbnail: "/images/games/stardew-valley/thumbnail.webp",
      disc: "/images/games/stardew-valley/disc.webp",
      logo: "/images/games/stardew-valley/logo.webp",
      additionalImages: ["/images/games/stardew-valley/additional/image1.webp"],
    },
    {
      id: 10,
      platform: "ps5",
      name: "Resident Evil Village",
      genre: "Survival Horror",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2021-05-07",
      rating: 8.8,
      thumbnail: "/images/games/resident-evil-village/thumbnail.webp",
      disc: "/images/games/resident-evil-village/disc.webp",
      logo: "/images/games/resident-evil-village/logo.webp",
      additionalImages: [
        "/images/games/resident-evil-village/additional/image1.webp",
      ],
    },
    {
      id: 11,
      platform: "ps4 ps5 xbox nintendo",
      name: "Hades",
      genre: "Rogue-like",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2018-09-17",
      rating: 9.3,
      thumbnail: "/images/games/hades/thumbnail.webp",
      disc: "/images/games/hades/disc.webp",
      logo: "/images/games/hades/logo.webp",
      additionalImages: ["/images/games/hades/additional/image1.webp"],
    },
    {
      id: 12,
      platform: "ps4 ps5",
      name: "Sekiro: Shadows Die Twice",
      genre: "Action-Adventure",
      difficulty: "Very Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2019-03-22",
      rating: 9.0,
      thumbnail: "/images/games/sekiro/thumbnail.webp",
      disc: "/images/games/sekiro/disc.webp",
      logo: "/images/games/sekiro/logo.webp",
      additionalImages: ["/images/games/sekiro/additional/image1.webp"],
    },
    {
      id: 13,
      platform: "xbox",
      name: "Call of Duty: Warzone",
      genre: "Battle Royale",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: true,
      soon: false,
      releaseDate: "2020-03-10",
      rating: 8.6,
      thumbnail: "/images/games/cod-warzone/thumbnail.webp",
      disc: "/images/games/cod-warzone/disc.webp",
      logo: "/images/games/cod-warzone/logo.webp",
      additionalImages: ["/images/games/cod-warzone/additional/image1.webp"],
    },
    {
      id: 14,
      platform: "ps4 ps5",
      name: "Fortnite",
      genre: "Battle Royale",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2017-07-25",
      rating: 8.4,
      thumbnail: "/images/games/fortnite/thumbnail.webp",
      disc: "/images/games/fortnite/disc.webp",
      logo: "/images/games/fortnite/logo.webp",
      additionalImages: ["/images/games/fortnite/additional/image1.webp"],
    },
    {
      id: 15,
      platform: "nintendo",
      name: "Animal Crossing: New Horizons",
      genre: "Simulation",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2020-03-20",
      rating: 9.6,
      thumbnail: "/images/games/animal-crossing/thumbnail.webp",
      disc: "/images/games/animal-crossing/disc.webp",
      logo: "/images/games/animal-crossing/logo.webp",
      additionalImages: [
        "/images/games/animal-crossing/additional/image1.webp",
      ],
    },
    {
      id: 16,
      platform: "ps4 ps5",
      name: "Ghost of Tsushima",
      genre: "Action-Adventure",
      difficulty: "Medium",
      desc: "This is an action game in which players assume the role of a samurai (Jin Sakai) on a quest for vengeance against Mongol invaders in 13th century Japan. Players traverse open-world environments, interact with characters, complete quests (e.g., assassination), and infiltrate enemy strongholds.",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: false,
      soon: false,
      releaseDate: "2020-07-17",
      rating: 9.4,
      thumbnail: "/images/games/ghost-of-tsushima/thumbnail.webp",
      disc: "/images/games/ghost-of-tsushima/disc.webp",
      logo: "/images/games/ghost-of-tsushima/logo.webp",
      additionalImages: [
        "/images/games/ghost-of-tsushima/additional/image1.webp",
      ],
    },
    {
      id: 17,
      platform: "ps5",
      name: "Doom Eternal",
      genre: "First-Person Shooter",
      difficulty: "Hard",
      storyDriven: false,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2020-03-20",
      rating: 9.2,
      thumbnail: "/images/games/doom-eternal/thumbnail.webp",
      disc: "/images/games/doom-eternal/disc.webp",
      logo: "/images/games/doom-eternal/logo.webp",
      additionalImages: ["/images/games/doom-eternal/additional/image1.webp"],
    },
    {
      id: 18,
      platform: "ps4 ps5 xbox",
      name: "Cyberpunk 2077",
      genre: "RPG",
      difficulty: "Medium",
      desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. Play as V, a cyberpunk mercenary, and take on the most powerful forces of the city in a fight for glory and survival.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      soon: false,
      releaseDate: "2020-12-10",
      rating: 7.4,
      thumbnail: "/images/games/cyberpunk-2077/thumbnail.webp",
      disc: "/images/games/cyberpunk-2077/disc.webp",
      logo: "/images/games/cyberpunk-2077/logo.webp",
      additionalImages: ["/images/games/cyberpunk-2077/additional/image1.webp"],
    },
    {
      id: 19,
      platform: "ps4 ps5 xbox",
      name: "Genshin Impact",
      genre: "Action RPG",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2020-09-28",
      rating: 8.6,
      thumbnail: "/images/games/genshin-impact/thumbnail.webp",
      disc: "/images/games/genshin-impact/disc.webp",
      logo: "/images/games/genshin-impact/logo.webp",
      additionalImages: ["/images/games/genshin-impact/additional/image1.webp"],
    },
    {
      id: 20,
      platform: "ps4",
      name: "The Last of Us Part II",
      genre: "Action-Adventure",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      releaseDate: "2020-06-19",
      rating: 9.0,
      thumbnail: "/images/games/last-of-us-2/thumbnail.webp",
      disc: "/images/games/last-of-us-2/disc.webp",
      logo: "/images/games/last-of-us-2/logo.webp",
      additionalImages: ["/images/games/last-of-us-2/additional/image1.webp"],
    },
    {
      id: 21,
      platform: "ps5",
      name: "WarHammer 40k: Space Marine 2",
      genre: "Action-Adventure",
      desc: "Warhammer 40,000: Space Marine 2 on Steam. Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: true,
      soon: false,
      releaseDate: "2023-11-17",
      rating: 8.0,
      thumbnail: "/images/games/warhammer-space-marine/thumbnail.webp",
      disc: "/images/games/warhammer-space-marine/disc.webp",
      logo: "/images/games/warhammer-space-marine/logo.webp",
      additionalImages: [
        "/images/games/warhammer-space-marine/additional/image1.webp",
      ],
    },
    {
      id: 22,
      platform: "ps5",
      name: "Black Myth: Wu Kong",
      genre: "Action-Adventure",
      desc: "Black Myth: Wukong is an action role-playing game. It has elements characteristic to the Soulslike subgenre. The game is played in single-player mode from a third-person perspective. The player controls a monkey protagonist referred to as the Destined One, who is based on Sun Wukong from the Journey to the West.",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: true,
      soon: false,
      releaseDate: "2023-11-22",
      rating: 8.8,
      thumbnail: "/images/games/black-myth-wukong/thumbnail.webp",
      disc: "/images/games/black-myth-wukong/disc.webp",
      logo: "/images/games/black-myth-wukong/logo.webp",
      additionalImages: [
        "/images/games/black-myth-wukong/additional/image1.webp",
        "/images/games/black-myth-wukong/additional/image1.webp",
        "/images/games/black-myth-wukong/additional/image1.webp",
      ],
    },
    {
      id: 23,
      platform: "ps5",
      name: "Marvel's Spider-Man 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask, as they balance their lives, friendships and their duty to protect those in need.",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: false,
      soon: false,
      releaseDate: "2023-10-20",
      rating: 9,
      thumbnail: "/images/games/marvel-spiderman-2/thumbnail.webp",
      disc: "/images/games/marvel-spiderman-2/disc.webp",
      logo: "/images/games/marvel-spiderman-2/logo.webp",
      additionalImages: [
        "/images/games/marvel-spiderman-2/additional/image1.webp",
      ],
    },
    {
      id: 24,
      platform: "ps5",
      name: "Star Wars: Outlaws",
      genre: "Action-Adventure",
      difficulty: "Medium",
      desc: "Star Wars Outlaws is an action-adventure game played from a third-person perspective. The player controls the scoundrel Kay Vess (voiced by Humberly Gonzalez), traversing open world environments on planets and in space while engaging in various activities.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      soon: false,
      releaseDate: "2024-08-10",
      rating: 8,
      thumbnail: "/images/games/star-wars-outlaws/thumbnail.webp",
      disc: "/images/games/star-wars-outlaws/disc.webp",
      logo: "/images/games/star-wars-outlaws/logo.webp",
      additionalImages: [
        "/images/games/star-wars-outlaws/additional/image1.webp",
      ],
    },
    {
      id: 25,
      platform: "ps5",
      name: "Dragon Age: The Veilguard",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Unite the Veilguard and defy the gods in Dragon Age™: The Veilguard, an immersive single-player RPG where you become the leader others believe in. Enter Thedas, a vibrant world of rugged wilderness, treacherous labyrinths, and glittering cities.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2024-11-15",
      rating: 8,
      thumbnail: "/images/games/dragon-age-veilguard/thumbnail.webp",
      disc: "/images/games/dragon-age-veilguard/disc.webp",
      logo: "/images/games/dragon-age-veilguard/logo.webp",
      additionalImages: [
        "/images/games/dragon-age-veilguard/additional/image1.webp",
      ],
    },
    {
      id: 26,
      platform: "ps5",
      name: "Assassin's Creed Shadows",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2025-02-10",
      rating: 8.5,
      thumbnail: "/images/games/assassins-creed-shadow/thumbnail.webp",
      disc: "/images/games/assassins-creed-shadow/disc.webp",
      logo: "/images/games/assassins-creed-shadow/logo.webp",
      additionalImages: [
        "/images/games/assassins-creed-shadow/additional/image1.webp",
      ],
    },
    {
      id: 27,
      platform: "ps5",
      name: "Helldivers 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      releaseDate: "2024-11-01",
      rating: 7,
      thumbnail: "/images/games/helldivers-2/thumbnail.webp",
      disc: "/images/games/helldivers-2/disc.webp",
      logo: "/images/games/helldivers-2/logo.webp",
      additionalImages: ["/images/games/helldivers-2/additional/image1.webp"],
    },
    {
      id: 28,
      platform: "ps5 xbox",
      name: "Dragon Ball: Sparking Zero",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      releaseDate: "2024-09-25",
      rating: 7.5,
      thumbnail: "/images/games/dragon-ball-zero/thumbnail.webp",
      disc: "/images/games/dragon-ball-zero/disc.webp",
      logo: "/images/games/dragon-ball-zero/logo.webp",
      additionalImages: [
        "/images/games/dragon-ball-zero/additional/image1.webp",
      ],
    },
    {
      id: 29,
      platform: "ps5",
      name: "until-dawn",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      releaseDate: "2024-10-30",
      rating: 7.5,
      thumbnail: "/images/games/until-dawn/thumbnail.webp",
      disc: "/images/games/until-dawn/disc.webp",
      logo: "/images/games/until-dawn/logo.webp",
      additionalImages: ["/images/games/until-dawn/additional/image1.webp"],
    },
    {
      id: 30,
      platform: "xbox",
      name: "Sid Mier's Civilization 7",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2025-01-15",
      rating: 8.5,
      thumbnail: "/images/games/civ-7/thumbnail.webp",
      disc: "/images/games/civ-7/disc.webp",
      logo: "/images/games/civ-7/logo.webp",
      additionalImages: ["/images/games/civ-7/additional/image1.webp"],
    },
    {
      id: 31,
      platform: "ps5",
      name: "Death Stranding 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2025-03-01",
      rating: 9,
      thumbnail: "/images/games/death-stranding-2/thumbnail.webp",
      disc: "/images/games/death-stranding-2/disc.webp",
      logo: "/images/games/death-stranding-2/logo.webp",
      additionalImages: [
        "/images/games/death-stranding-2/additional/image1.webp",
      ],
    },
    {
      id: 32,
      platform: "ps5 nintendo",
      name: "Lego Horizon Adventures",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      releaseDate: "2024-12-12",
      rating: 8,
      thumbnail: "/images/games/lego-horizon/thumbnail.webp",
      disc: "/images/games/lego-horizon/disc.webp",
      logo: "/images/games/lego-horizon/logo.webp",
      additionalImages: ["/images/games/lego-horizon/additional/image1.webp"],
    },
  ];

  // Featured Filtering
  const { featured } = req.query;
  if (featured === "true") {
    games = games.filter((game) => game.featured === true);
  }

  // New Filtering
  const { showNew } = req.query;
  if (showNew === "true") {
    games = games.filter((game) => game.new); // Apply new filter
  }

  // Coming Soon Filtering
  const { showComingSoon } = req.query;
  if (showComingSoon === "true") {
    games = games.filter((game) => game.coming); // Apply coming soon filter
  }

  // Return the filtered games based on the conditions (featured, new, coming)
  res.status(200).json(games);
}
