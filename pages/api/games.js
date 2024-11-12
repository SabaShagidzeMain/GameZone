// src/pages/api/games.js
export default function handler(req, res) {
  const games = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-Adventure",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/legend-of-zelda/thumbnail.webp",
      disc: "/images/games/legend-of-zelda/disc.webp",
      logo: "/images/games/legend-of-zelda/logo.webp",
      additionalImages: [
        "/images/games/legend-of-zelda/additional/image1.webp",
      ],
    },
    {
      id: 2,
      name: "God of War",
      genre: "Action",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/god-of-war/thumbnail.webp",
      disc: "/images/games/god-of-war/disc.webp",
      logo: "/images/games/god-of-war/logo.webp",
      additionalImages: ["/images/games/god-of-war/additional/image1.webp"],
    },
    {
      id: 3,
      name: "The Witcher 3: Wild Hunt",
      genre: "RPG",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/the-witcher-3/thumbnail.webp",
      disc: "/images/games/the-witcher-3/disc.webp",
      logo: "/images/games/the-witcher-3/logo.webp",
      additionalImages: ["/images/games/the-witcher-3/additional/image1.webp"],
    },
    {
      id: 4,
      name: "Dark Souls III",
      genre: "Action RPG",
      difficulty: "Very Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/dark-souls-3/thumbnail.webp",
      disc: "/images/games/dark-souls-3/disc.webp",
      logo: "/images/games/dark-souls-3/logo.webp",
      additionalImages: ["/images/games/dark-souls-3/additional/image1.webp"],
    },
    {
      id: 5,
      name: "Overwatch",
      genre: "First-Person Shooter",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/overwatch/thumbnail.webp",
      disc: "/images/games/overwatch/disc.webp",
      logo: "/images/games/overwatch/logo.webp",
      additionalImages: ["/images/games/overwatch/additional/image1.webp"],
    },
    {
      id: 6,
      name: "Minecraft",
      genre: "Sandbox",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/minecraft/thumbnail.webp",
      disc: "/images/games/minecraft/disc.webp",
      logo: "/images/games/minecraft/logo.webp",
      additionalImages: ["/images/games/minecraft/additional/image1.webp"],
    },
    {
      id: 7,
      name: "Among Us",
      genre: "Party",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/among-us/thumbnail.webp",
      disc: "/images/games/among-us/disc.webp",
      logo: "/images/games/among-us/logo.webp",
      additionalImages: ["/images/games/among-us/additional/image1.webp"],
    },
    {
      id: 8,
      name: "Final Fantasy VII Remake",
      genre: "RPG",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/final-fantasy-7-remake/thumbnail.webp",
      disc: "/images/games/final-fantasy-7-remake/disc.webp",
      logo: "/images/games/final-fantasy-7-remake/logo.webp",
      additionalImages: [
        "/images/games/final-fantasy-7-remake/additional/image1.webp",
      ],
    },
    {
      id: 9,
      name: "Stardew Valley",
      genre: "Simulation",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/stardew-valley/thumbnail.webp",
      disc: "/images/games/stardew-valley/disc.webp",
      logo: "/images/games/stardew-valley/logo.webp",
      additionalImages: ["/images/games/stardew-valley/additional/image1.webp"],
    },
    {
      id: 10,
      name: "Resident Evil Village",
      genre: "Survival Horror",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/resident-evil-village/thumbnail.webp",
      disc: "/images/games/resident-evil-village/disc.webp",
      logo: "/images/games/resident-evil-village/logo.webp",
      additionalImages: [
        "/images/games/resident-evil-village/additional/image1.webp",
      ],
    },
    {
      id: 11,
      name: "Hades",
      genre: "Rogue-like",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/hades/thumbnail.webp",
      disc: "/images/games/hades/disc.webp",
      logo: "/images/games/hades/logo.webp",
      additionalImages: ["/images/games/hades/additional/image1.webp"],
    },
    {
      id: 12,
      name: "Sekiro: Shadows Die Twice",
      genre: "Action-Adventure",
      difficulty: "Very Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/sekiro/thumbnail.webp",
      disc: "/images/games/sekiro/disc.webp",
      logo: "/images/games/sekiro/logo.webp",
      additionalImages: ["/images/games/sekiro/additional/image1.webp"],
    },
    {
      id: 13,
      name: "Call of Duty: Warzone",
      genre: "Battle Royale",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/cod-warzone/thumbnail.webp",
      disc: "/images/games/cod-warzone/disc.webp",
      logo: "/images/games/cod-warzone/logo.webp",
      additionalImages: ["/images/games/cod-warzone/additional/image1.webp"],
    },
    {
      id: 14,
      name: "Fortnite",
      genre: "Battle Royale",
      difficulty: "Medium",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/fortnite/thumbnail.webp",
      disc: "/images/games/fortnite/disc.webp",
      logo: "/images/games/fortnite/logo.webp",
      additionalImages: ["/images/games/fortnite/additional/image1.webp"],
    },
    {
      id: 15,
      name: "Animal Crossing: New Horizons",
      genre: "Simulation",
      difficulty: "Easy",
      storyDriven: false,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/animal-crossing/thumbnail.webp",
      disc: "/images/games/animal-crossing/disc.webp",
      logo: "/images/games/animal-crossing/logo.webp",
      additionalImages: [
        "/images/games/animal-crossing/additional/image1.webp",
      ],
    },
    {
      id: 16,
      name: "Ghost of Tsushima",
      genre: "Action-Adventure",
      difficulty: "Medium",
      desc: "This is an action game in which players assume the role of a samurai (Jin Sakai) on a quest for vengeance against Mongol invaders in 13th century Japan. Players traverse open-world environments, interact with characters, complete quests (e.g., assassination), and infiltrate enemy strongholds.",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: false,
      soon: false,
      thumbnail: "/images/games/ghost-of-tsushima/thumbnail.webp",
      disc: "/images/games/ghost-of-tsushima/disc.webp",
      logo: "/images/games/ghost-of-tsushima/logo.webp",
      additionalImages: [
        "/images/games/ghost-of-tsushima/additional/image1.webp",
      ],
    },
    {
      id: 17,
      name: "Doom Eternal",
      genre: "First-Person Shooter",
      difficulty: "Hard",
      storyDriven: false,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/doom-eternal/thumbnail.webp",
      disc: "/images/games/doom-eternal/disc.webp",
      logo: "/images/games/doom-eternal/logo.webp",
      additionalImages: ["/images/games/doom-eternal/additional/image1.webp"],
    },
    {
      id: 18,
      name: "Cyberpunk 2077",
      genre: "RPG",
      difficulty: "Medium",
      desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. Play as V, a cyberpunk mercenary, and take on the most powerful forces of the city in a fight for glory and survival.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/cyberpunk-2077/thumbnail.webp",
      disc: "/images/games/cyberpunk-2077/disc.webp",
      logo: "/images/games/cyberpunk-2077/logo.webp",
      additionalImages: ["/images/games/cyberpunk-2077/additional/image1.webp"],
    },
    {
      id: 19,
      name: "Genshin Impact",
      genre: "Action RPG",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: true,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/genshin-impact/thumbnail.webp",
      disc: "/images/games/genshin-impact/disc.webp",
      logo: "/images/games/genshin-impact/logo.webp",
      additionalImages: ["/images/games/genshin-impact/additional/image1.webp"],
    },
    {
      id: 20,
      name: "The Last of Us Part II",
      genre: "Action-Adventure",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      soon: false,
      thumbnail: "/images/games/last-of-us-2/thumbnail.webp",
      disc: "/images/games/last-of-us-2/disc.webp",
      logo: "/images/games/last-of-us-2/logo.webp",
      additionalImages: ["/images/games/last-of-us-2/additional/image1.webp"],
    },
    {
      id: 21,
      name: "WarHammer 40k: Space Marine 2",
      genre: "Action-Adventure",
      desc: "Warhammer 40,000: Space Marine 2 on Steam. Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.",
      difficulty: "Medium",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: true,
      soon: false,
      thumbnail: "/images/games/warhammer-space-marine/thumbnail.webp",
      disc: "/images/games/warhammer-space-marine/disc.webp",
      logo: "/images/games/warhammer-space-marine/logo.webp",
      additionalImages: [
        "/images/games/warhammer-space-marine/additional/image1.webp",
      ],
    },
    {
      id: 22,
      name: "Black Myth: Wu Kong",
      genre: "Action-Adventure",
      desc: "Black Myth: Wukong is an action role-playing game. It has elements characteristic to the Soulslike subgenre. The game is played in single-player mode from a third-person perspective. The player controls a monkey protagonist referred to as the Destined One, who is based on Sun Wukong from the Journey to the West.",
      difficulty: "Hard",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: true,
      soon: false,
      thumbnail: "/images/games/black-myth-wukong/thumbnail.webp",
      disc: "/images/games/black-myth-wukong/disc.webp",
      logo: "/images/games/black-myth-wukong/logo.webp",
      additionalImages: [
        "/images/games/black-myth-wukong/additional/image1.webp",
      ],
    },
    {
      id: 23,
      name: "Marvel's Spider-Man 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask, as they balance their lives, friendships and their duty to protect those in need.",
      storyDriven: true,
      multiplayer: false,
      featured: true,
      new: false,
      soon: false,
      thumbnail: "/images/games/marvel-spiderman-2/thumbnail.webp",
      disc: "/images/games/marvel-spiderman-2/disc.webp",
      logo: "/images/games/marvel-spiderman-2/logo.webp",
      additionalImages: [
        "/images/games/marvel-spiderman-2/additional/image1.webp",
      ],
    },
    {
      id: 24,
      name: "Star Wars: Outlaws",
      genre: "Action-Adventure",
      difficulty: "Medium",
      desc: "Star Wars Outlaws is an action-adventure game played from a third-person perspective. The player controls the scoundrel Kay Vess (voiced by Humberly Gonzalez), traversing open world environments on planets and in space while engaging in various activities.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      soon: false,
      thumbnail: "/images/games/star-wars-outlaws/thumbnail.webp",
      disc: "/images/games/star-wars-outlaws/disc.webp",
      logo: "/images/games/star-wars-outlaws/logo.webp",
      additionalImages: [
        "/images/games/star-wars-outlaws/additional/image1.webp",
      ],
    },
    {
      id: 25,
      name: "Dragon Age: The Veilguard",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Unite the Veilguard and defy the gods in Dragon Age™: The Veilguard, an immersive single-player RPG where you become the leader others believe in. Enter Thedas, a vibrant world of rugged wilderness, treacherous labyrinths, and glittering cities.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/dragon-age-veilguard/thumbnail.webp",
      disc: "/images/games/dragon-age-veilguard/disc.webp",
      logo: "/images/games/dragon-age-veilguard/logo.webp",
      additionalImages: [
        "/images/games/dragon-age-veilguard/additional/image1.webp",
      ],
    },
    {
      id: 26,
      name: "Assassin's Creed Shadows",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/assassins-creed-shadow/thumbnail.webp",
      disc: "/images/games/assassins-creed-shadow/disc.webp",
      logo: "/images/games/assassins-creed-shadow/logo.webp",
      additionalImages: [
        "/images/games/assassins-creed-shadow/additional/image1.webp",
      ],
    },
    {
      id: 27,
      name: "Helldivers 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      thumbnail: "/images/games/helldivers-2/thumbnail.webp",
      disc: "/images/games/helldivers-2/disc.webp",
      logo: "/images/games/helldivers-2/logo.webp",
      additionalImages: ["/images/games/helldivers-2/additional/image1.webp"],
    },
    {
      id: 28,
      name: "Dragon Ball: Sparking Zero",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      thumbnail: "/images/games/dragon-ball-zero/thumbnail.webp",
      disc: "/images/games/dragon-ball-zero/disc.webp",
      logo: "/images/games/dragon-ball-zero/logo.webp",
      additionalImages: [
        "/images/games/dragon-ball-zero/additional/image1.webp",
      ],
    },
    {
      id: 29,
      name: "until-dawn",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: true,
      coming: false,
      thumbnail: "/images/games/until-dawn/thumbnail.webp",
      disc: "/images/games/until-dawn/disc.webp",
      logo: "/images/games/until-dawn/logo.webp",
      additionalImages: ["/images/games/until-dawn/additional/image1.webp"],
    },
    {
      id: 30,
      name: "Sid Mier's Civilization 7",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/civ-7/thumbnail.webp",
      disc: "/images/games/civ-7/disc.webp",
      logo: "/images/games/civ-7/logo.webp",
      additionalImages: ["/images/games/civ-7/additional/image1.webp"],
    },
    {
      id: 31,
      name: "Death Stranding 2",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/death-stranding-2/thumbnail.webp",
      disc: "/images/games/death-stranding-2/disc.webp",
      logo: "/images/games/death-stranding-2/logo.webp",
      additionalImages: [
        "/images/games/death-stranding-2/additional/image1.webp",
      ],
    },
    {
      id: 32,
      name: "Lego Horizon Adventures",
      genre: "Action-Adventure",
      difficulty: "Hard",
      desc: "Experience an epic historical action-adventure story set in feudal Japan! Become a lethal shinobi Assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos. Switch seamlessly between two unlikely allies as you discover their common destiny and usher in a new era for Japan.",
      storyDriven: true,
      multiplayer: false,
      featured: false,
      new: false,
      coming: true,
      thumbnail: "/images/games/lego-horizon/thumbnail.webp",
      disc: "/images/games/lego-horizon/disc.webp",
      logo: "/images/games/lego-horizon/logo.webp",
      additionalImages: [
        "/images/games/lego-horizon/additional/image1.webp",
      ],
    },
  ];

  // Send the games data as a response
  res.status(200).json(games);
}