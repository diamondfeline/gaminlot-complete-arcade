const games = [
  {
    "id": "80s-invaders",
    "title": "Space Invaders",
    "era": "1980s",
    "genre": "Space Shooter",
    "source": "Arcade Classic",
    "description": "Defend Earth from descending waves of alien invaders in this quintessential 80s arcade shooter.",
    "path": "80s/invaders-main/invaders-main/invaders.html"
  },
  {
    "id": "80s-retro-platformer",
    "title": "Retro Platformer",
    "era": "1980s",
    "genre": "Platformer",
    "source": "Arcade Classic",
    "description": "A modular retro 2D platformer full of coins, tricky obstacles, enemies, and multi-level action.",
    "path": "80s/retro-platformer-main/retro-platformer-main/index.html"
  },
  {
    "id": "00s-54321",
    "title": "54321 Puzzle Suite",
    "era": "2000s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "A collection of puzzle games including Bomb Squad, Flip Flop, Maze Runner, and Tile Slider.",
    "path": "00s/54321/index.html"
  },
  {
    "id": "00s-bubble-train",
    "title": "Bubble Train",
    "era": "2000s",
    "genre": "Action / Arcade",
    "source": "HTML5 Game",
    "description": "Aim and shoot colored bubbles onto a winding train track before time expires.",
    "path": "00s/Bubble_train/index.html"
  },
  {
    "id": "00s-don-caferino",
    "title": "Don Caferino",
    "era": "2000s",
    "genre": "Arcade / Pang",
    "source": "HTML5 Game",
    "description": "Pop and split bouncing balls with your grappling hook across charming themed levels.",
    "path": "00s/Don_caferino/index.html"
  },
  {
    "id": "00s-donkey-bolonkey",
    "title": "Donkey Bolonkey",
    "era": "2000s",
    "genre": "Arcade",
    "source": "HTML5 Game",
    "description": "Action-packed retro arcade platform challenge with smooth canvas gameplay.",
    "path": "00s/Donkey_bolonkey/index.html"
  },
  {
    "id": "00s-for-science",
    "title": "For Science",
    "era": "2000s",
    "genre": "Turn-Based Strategy",
    "source": "HTML5 Game",
    "description": "Deploy shields, lasers, and satellites to protect space stations from meteor showers.",
    "path": "00s/For_science/index.html"
  },
  {
    "id": "00s-game-of-the-goose",
    "title": "Game of the Goose",
    "era": "2000s",
    "genre": "Board Game",
    "source": "HTML5 Game",
    "description": "Digital recreation of the traditional European race board game with interactive dice.",
    "path": "00s/Game of the goose/index.html"
  },
  {
    "id": "00s-html-5-space-invaders",
    "title": "HTML5 Space Invaders",
    "era": "2000s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Classic cabinet-style space defense with shields, laser cannons, and alien waves.",
    "path": "00s/HTML-5 Space_invaders/index.html"
  },
  {
    "id": "00s-html-5-breakout",
    "title": "HTML5 Breakout",
    "era": "2000s",
    "genre": "Arcade",
    "source": "HTML5 Game",
    "description": "Deflect bouncing balls with your paddle to shatter colorful brick walls.",
    "path": "00s/HTML-5_Breakout/index.html"
  },
  {
    "id": "00s-html-5-snake",
    "title": "HTML5 Retro Snake",
    "era": "2000s",
    "genre": "Arcade / Snake",
    "source": "HTML5 Game",
    "description": "Maneuver your growing serpent around the grid collecting food without crashing.",
    "path": "00s/HTML-5_Snake/index.html"
  },
  {
    "id": "00s-netris",
    "title": "Netris",
    "era": "2000s",
    "genre": "Puzzle",
    "source": "HTML5 Game",
    "description": "Addictive block-stacking and line-clearing puzzle action.",
    "path": "00s/Netris/index.html"
  },
  {
    "id": "00s-netrok",
    "title": "Netrok",
    "era": "2000s",
    "genre": "Arcade",
    "source": "HTML5 Game",
    "description": "Fast-paced retro navigation and reflex arcade game.",
    "path": "00s/Netrok/index.html"
  },
  {
    "id": "00s-briscola",
    "title": "Briscola AI Lab",
    "era": "2000s",
    "genre": "Card Game",
    "source": "HTML5 Game",
    "description": "Traditional Italian trick-taking card game against an array of intelligent heuristic engines.",
    "path": "00s/briscola/index.html"
  },
  {
    "id": "00s-glparchis",
    "title": "GL Parchis",
    "era": "2000s",
    "genre": "Board Game",
    "source": "HTML5 Game",
    "description": "Classic Parch\u00eds board game with vibrant graphics, multiple pawns, and strategic moves.",
    "path": "00s/glparchis/index.html"
  },
  {
    "id": "00s-grugnetto",
    "title": "Grugnetto Adventure",
    "era": "2000s",
    "genre": "Platformer",
    "source": "HTML5 Game",
    "description": "Guide Grugnetto across side-scrolling worlds filled with retro sound and secrets.",
    "path": "00s/grugnetto/index.html"
  },
  {
    "id": "00s-grugnetto-goose",
    "title": "Grugnetto Goose",
    "era": "2000s",
    "genre": "Board Game",
    "source": "HTML5 Game",
    "description": "Charming Grugnetto-themed board race with custom dice and whimsical boards.",
    "path": "00s/grugnetto goose/index.html"
  },
  {
    "id": "00s-hextris",
    "title": "Hextris",
    "era": "2000s",
    "genre": "Puzzle / Arcade",
    "source": "HTML5 Game",
    "description": "Rotate the hexagonal core to match fast-approaching colored lines in full 360 degrees.",
    "path": "00s/hextris/index.html"
  },
  {
    "id": "00s-klondike",
    "title": "Klondike Solitaire",
    "era": "2000s",
    "genre": "Card Game",
    "source": "HTML5 Game",
    "description": "Timeless single-player card game with classic draw-one and draw-three mechanics.",
    "path": "00s/klondike/index.html"
  },
  {
    "id": "00s-naval-battle",
    "title": "Naval Battle",
    "era": "2000s",
    "genre": "Strategy",
    "source": "HTML5 Game",
    "description": "Call tactical grid coordinates and sink the enemy fleet before yours is destroyed.",
    "path": "00s/naval battle/index.html"
  },
  {
    "id": "00s-njam",
    "title": "Njam",
    "era": "2000s",
    "genre": "Arcade / Maze",
    "source": "HTML5 Game",
    "description": "Pacman-inspired maze muncher with multiplayer options and custom powerups.",
    "path": "00s/njam/index.html"
  },
  {
    "id": "00s-noca-pinball",
    "title": "Noca Pinball",
    "era": "2000s",
    "genre": "Arcade / Pinball",
    "source": "HTML5 Game",
    "description": "Retro mechanical pinball simulator with realistic physics, bumpers, and high scores.",
    "path": "00s/noca-pinball/index.html"
  },
  {
    "id": "00s-psypong3d",
    "title": "PsyPong 3D",
    "era": "2000s",
    "genre": "Sports / 3D Arcade",
    "source": "HTML5 Game",
    "description": "High-energy 3D perspective table tennis paddle showdown.",
    "path": "00s/psypong3d/index.html"
  },
  {
    "id": "00s-react-simple-snake",
    "title": "Simple Snake React",
    "era": "2000s",
    "genre": "Arcade / Snake",
    "source": "HTML5 Game",
    "description": "Clean, responsive modern snake game built with smooth controls.",
    "path": "00s/react simple snake/index.html"
  },
  {
    "id": "00s-terramancers",
    "title": "Terramancers",
    "era": "2000s",
    "genre": "Strategy / Simulation",
    "source": "HTML5 Game",
    "description": "Harness elemental powers and craft terrain in this strategic worldbuilder.",
    "path": "00s/terramancers/index.html"
  },
  {
    "id": "00s-wok",
    "title": "Wok",
    "era": "2000s",
    "genre": "Arcade",
    "source": "HTML5 Game",
    "description": "Fast-paced kitchen-action arcade cooking challenge.",
    "path": "00s/wok/index.html"
  },
  {
    "id": "00s-yanoid",
    "title": "Yanoid Arkanoid",
    "era": "2000s",
    "genre": "Arcade",
    "source": "HTML5 Game",
    "description": "Modern homage to Arkanoid with powerups, bricks, and high-velocity deflection.",
    "path": "00s/yanoid/index.html"
  },
  {
    "id": "90s-2048",
    "title": "2048",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in 2048.",
    "path": "90s/2048.html"
  },
  {
    "id": "90s-8bit-quest",
    "title": "8-Bit Quest",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in 8-Bit Quest.",
    "path": "90s/8bit-quest.html"
  },
  {
    "id": "90s-arcade-classic",
    "title": "Arcade Classic",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Arcade Classic.",
    "path": "90s/Arcade_classic.html"
  },
  {
    "id": "90s-asteroids",
    "title": "Asteroids",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Asteroids.",
    "path": "90s/Asteroids.html"
  },
  {
    "id": "90s-aurora-dance",
    "title": "Aurora Dance",
    "era": "1990s",
    "genre": "Rhythm / Action",
    "source": "HTML5 Game",
    "description": "Synchronize your inputs with chiptune soundtracks in Aurora Dance.",
    "path": "90s/Aurora_dance.html"
  },
  {
    "id": "90s-block-squad",
    "title": "Block Squad",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Block Squad.",
    "path": "90s/Block_squad.html"
  },
  {
    "id": "90s-bounce-palace",
    "title": "Bounce Palace",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Bounce Palace.",
    "path": "90s/Bounce_palace.html"
  },
  {
    "id": "90s-bullet-hell",
    "title": "Bullet Hell",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Bullet Hell.",
    "path": "90s/Bullet_hell.html"
  },
  {
    "id": "90s-cartridge-dash",
    "title": "Cartridge Dash",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Cartridge Dash.",
    "path": "90s/Cartridge_dash.html"
  },
  {
    "id": "90s-cassette-quest",
    "title": "Cassette Quest",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Cassette Quest.",
    "path": "90s/Cassette_quest.html"
  },
  {
    "id": "90s-chain-reaction",
    "title": "Chain Reaction",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Chain Reaction.",
    "path": "90s/Chain_reaction.html"
  },
  {
    "id": "90s-chip-tune-battle",
    "title": "Chip Tetrominoune Battle",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Chip Tetrominoune Battle.",
    "path": "90s/Chip_tune_battle.html"
  },
  {
    "id": "90s-chrono-chip",
    "title": "Chrono Chip",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Chrono Chip.",
    "path": "90s/Chrono_chip.html"
  },
  {
    "id": "90s-cipher-crack",
    "title": "Cipher Crack",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Cipher Crack.",
    "path": "90s/Cipher_crack.html"
  },
  {
    "id": "90s-code-runner",
    "title": "Code Runner",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Code Runner.",
    "path": "90s/Code_runner.html"
  },
  {
    "id": "90s-color-match",
    "title": "Color Match",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Color Match.",
    "path": "90s/Color_match.html"
  },
  {
    "id": "90s-combo-master",
    "title": "Combo Master",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Combo Master.",
    "path": "90s/Combo_master.html"
  },
  {
    "id": "90s-crystal-dash",
    "title": "Crystal Dash",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Crystal Dash.",
    "path": "90s/Crystal_Dash.html"
  },
  {
    "id": "90s-crystal-fusion",
    "title": "Crystal Fusion",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Crystal Fusion.",
    "path": "90s/Crystal_fusion.html"
  },
  {
    "id": "90s-cyber-breach",
    "title": "Cyber Breach",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Cyber Breach.",
    "path": "90s/Cyber_breach.html"
  },
  {
    "id": "90s-cyber-rush",
    "title": "Cyber Rush",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Cyber Rush.",
    "path": "90s/Cyber_rush.html"
  },
  {
    "id": "90s-data-surge",
    "title": "Data Surge",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Data Surge.",
    "path": "90s/Data_Surge.html"
  },
  {
    "id": "90s-digital-maze",
    "title": "Digital Maze",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Digital Maze.",
    "path": "90s/Digital_maze.html"
  },
  {
    "id": "90s-earth-digger",
    "title": "Earth Digger",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Earth Digger.",
    "path": "90s/Earth_digger.html"
  },
  {
    "id": "90s-earthquake-survival",
    "title": "Earthquake Survival",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Earthquake Survival.",
    "path": "90s/Earthquake_survival.html"
  },
  {
    "id": "90s-echo-sync",
    "title": "Echo Sync",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Echo Sync.",
    "path": "90s/Echo_sync.html"
  },
  {
    "id": "90s-eclipse-runner",
    "title": "Eclipse Runner",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Eclipse Runner.",
    "path": "90s/Eclipse_runner.html"
  },
  {
    "id": "90s-t",
    "title": "Tetromino",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetromino.",
    "path": "90s/T.html"
  },
  {
    "id": "90s-agar",
    "title": "Agar",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Agar.",
    "path": "90s/agar.html"
  },
  {
    "id": "90s-apex-predator",
    "title": "Apex Predator",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Apex Predator.",
    "path": "90s/apex-predator.html"
  },
  {
    "id": "90s-apex-predetor",
    "title": "Apex Predetor",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Apex Predetor.",
    "path": "90s/apex_predetor.html"
  },
  {
    "id": "90s-arcade-fever",
    "title": "Arcade Fever",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Arcade Fever.",
    "path": "90s/arcade-fever.html"
  },
  {
    "id": "90s-aurora-burst",
    "title": "Aurora Burst",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Aurora Burst.",
    "path": "90s/aurora-burst.html"
  },
  {
    "id": "90s-aurora-brust",
    "title": "Aurora Brust",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Aurora Brust.",
    "path": "90s/aurora_brust.html"
  },
  {
    "id": "90s-binary-blast",
    "title": "Binary Blast",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Binary Blast.",
    "path": "90s/binary-blast.html"
  },
  {
    "id": "90s-breakout",
    "title": "Breakout",
    "era": "1990s",
    "genre": "Arcade / Brick Breaker",
    "source": "HTML5 Game",
    "description": "Shatter bricks and maintain the ball rally with your paddle in Breakout.",
    "path": "90s/breakout.html"
  },
  {
    "id": "90s-brick-blaster",
    "title": "Brick Blaster",
    "era": "1990s",
    "genre": "Arcade / Brick Breaker",
    "source": "HTML5 Game",
    "description": "Shatter bricks and maintain the ball rally with your paddle in Brick Blaster.",
    "path": "90s/brick-blaster.html"
  },
  {
    "id": "90s-chrono-jump",
    "title": "Chrono Jump",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Chrono Jump.",
    "path": "90s/chrono-jump.html"
  },
  {
    "id": "90s-fast-reflex",
    "title": "Fast Reflex",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Fast Reflex.",
    "path": "90s/fast-reflex.html"
  },
  {
    "id": "90s-flappy-fall",
    "title": "Flappy Fall",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Flappy Fall.",
    "path": "90s/flappy-fall.html"
  },
  {
    "id": "90s-flappy",
    "title": "Flappy",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Flappy.",
    "path": "90s/flappy.html"
  },
  {
    "id": "90s-flow-state",
    "title": "Flow State",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Flow State.",
    "path": "90s/flow-state.html"
  },
  {
    "id": "90s-forest-guardian",
    "title": "Forest Guardian",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Forest Guardian.",
    "path": "90s/forest-guardian.html"
  },
  {
    "id": "90s-frogger",
    "title": "Frogger",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Frogger.",
    "path": "90s/frogger.html"
  },
  {
    "id": "90s-frost-maze",
    "title": "Frost Maze",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Frost Maze.",
    "path": "90s/frost-maze.html"
  },
  {
    "id": "90s-gravity-ball",
    "title": "Gravity Ball",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Gravity Ball.",
    "path": "90s/gravity-ball.html"
  },
  {
    "id": "90s-hanoi",
    "title": "Hanoi",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Hanoi.",
    "path": "90s/hanoi.html"
  },
  {
    "id": "90s-hexagon-defense",
    "title": "Hexagon Defense",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Hexagon Defense.",
    "path": "90s/hexagon-defense.html"
  },
  {
    "id": "90s-inferno-dash",
    "title": "Inferno Dash",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Inferno Dash.",
    "path": "90s/inferno-dash.html"
  },
  {
    "id": "90s-infinity-burst",
    "title": "Infinity Burst",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Infinity Burst.",
    "path": "90s/infinity-burst.html"
  },
  {
    "id": "90s-jump-quest",
    "title": "Jump Quest",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Jump Quest.",
    "path": "90s/jump-quest.html"
  },
  {
    "id": "90s-laser-defender",
    "title": "Laser Defender",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Laser Defender.",
    "path": "90s/laser-defender.html"
  },
  {
    "id": "90s-laser-grid",
    "title": "Laser Grid",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Laser Grid.",
    "path": "90s/laser-grid.html"
  },
  {
    "id": "90s-lightning-strike",
    "title": "Lightning Strike",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Lightning Strike.",
    "path": "90s/lightning-strike.html"
  },
  {
    "id": "90s-logic-gate",
    "title": "Logic Gate",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Logic Gate.",
    "path": "90s/logic-gate.html"
  },
  {
    "id": "90s-marble-run",
    "title": "Marble Run",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Marble Run.",
    "path": "90s/marble-run.html"
  },
  {
    "id": "90s-math-marathon",
    "title": "Math Marathon",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Math Marathon.",
    "path": "90s/math-marathon.html"
  },
  {
    "id": "90s-matrix-trace",
    "title": "Matrix Tetrominorace",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Matrix Tetrominorace.",
    "path": "90s/matrix-trace.html"
  },
  {
    "id": "90s-memory",
    "title": "Memory",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Memory.",
    "path": "90s/memory.html"
  },
  {
    "id": "90s-meteor-strike",
    "title": "Meteor Strike",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Meteor Strike.",
    "path": "90s/meteor-strike.html"
  },
  {
    "id": "90s-minesweeper",
    "title": "Minesweeper",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Minesweeper.",
    "path": "90s/minesweeper.html"
  },
  {
    "id": "90s-minimalist-zen",
    "title": "Minimalist Zen",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Minimalist Zen.",
    "path": "90s/minimalist-zen.html"
  },
  {
    "id": "90s-nature-collector",
    "title": "Nature Collector",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Nature Collector.",
    "path": "90s/nature-collector.html"
  },
  {
    "id": "90s-nebula-collector",
    "title": "Nebula Collector",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Nebula Collector.",
    "path": "90s/nebula-collector.html"
  },
  {
    "id": "90s-neon-portal",
    "title": "Neon Portal",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Neon Portal.",
    "path": "90s/neon-portal.html"
  },
  {
    "id": "90s-neon-surge",
    "title": "Neon Surge",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Neon Surge.",
    "path": "90s/neon-surge.html"
  },
  {
    "id": "90s-nexus-blocks",
    "title": "Nexus Blocks",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Nexus Blocks.",
    "path": "90s/nexus-blocks.html"
  },
  {
    "id": "90s-nexus-painter",
    "title": "Nexus Painter",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Nexus Painter.",
    "path": "90s/nexus-painter.html"
  },
  {
    "id": "90s-nova-strike",
    "title": "Nova Strike",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Nova Strike.",
    "path": "90s/nova-strike.html"
  },
  {
    "id": "90s-ocean-explorer",
    "title": "Ocean Explorer",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Ocean Explorer.",
    "path": "90s/ocean-explorer.html"
  },
  {
    "id": "90s-orbit-defender",
    "title": "Orbit Defender",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Orbit Defender.",
    "path": "90s/orbit-defender.html"
  },
  {
    "id": "90s-pacman",
    "title": "Pacman",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Pacman.",
    "path": "90s/pacman.html"
  },
  {
    "id": "90s-phantom-path",
    "title": "Phantom Path",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Phantom Path.",
    "path": "90s/phantom-path.html"
  },
  {
    "id": "90s-ping-pong-2p",
    "title": "Ping Pong 2P",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Ping Pong 2P.",
    "path": "90s/ping-pong-2p.html"
  },
  {
    "id": "90s-pixel-blast",
    "title": "Pixel Blast",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Pixel Blast.",
    "path": "90s/pixel-blast.html"
  },
  {
    "id": "90s-pixel-painter",
    "title": "Pixel Painter",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Pixel Painter.",
    "path": "90s/pixel-painter.html"
  },
  {
    "id": "90s-pixel-perfect",
    "title": "Pixel Perfect",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Pixel Perfect.",
    "path": "90s/pixel-perfect.html"
  },
  {
    "id": "90s-plasma-collector",
    "title": "Plasma Collector",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Plasma Collector.",
    "path": "90s/plasma-collector.html"
  },
  {
    "id": "90s-pong",
    "title": "Pong",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Pong.",
    "path": "90s/pong.html"
  },
  {
    "id": "90s-prism-match",
    "title": "Prism Match",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Prism Match.",
    "path": "90s/prism-match.html"
  },
  {
    "id": "90s-pulse-beat",
    "title": "Pulse Beat",
    "era": "1990s",
    "genre": "Rhythm / Action",
    "source": "HTML5 Game",
    "description": "Synchronize your inputs with chiptune soundtracks in Pulse Beat.",
    "path": "90s/pulse-beat.html"
  },
  {
    "id": "90s-pulse-runner",
    "title": "Pulse Runner",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Pulse Runner.",
    "path": "90s/pulse-runner.html"
  },
  {
    "id": "90s-puzzle-match",
    "title": "Puzzle Match",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Puzzle Match.",
    "path": "90s/puzzle-match.html"
  },
  {
    "id": "90s-quake-runner",
    "title": "Quake Runner",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Quake Runner.",
    "path": "90s/quake-runner.html"
  },
  {
    "id": "90s-quantum-sync",
    "title": "Quantum Sync",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Quantum Sync.",
    "path": "90s/quantum-sync.html"
  },
  {
    "id": "90s-quick-tap",
    "title": "Quick Tetrominoap",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Quick Tetrominoap.",
    "path": "90s/quick-tap.html"
  },
  {
    "id": "90s-resonance-grid",
    "title": "Resonance Grid",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Resonance Grid.",
    "path": "90s/resonance-grid.html"
  },
  {
    "id": "90s-retro-racer",
    "title": "Retro Racer",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Retro Racer.",
    "path": "90s/retro-racer.html"
  },
  {
    "id": "90s-rhythm-master",
    "title": "Rhythm Master",
    "era": "1990s",
    "genre": "Rhythm / Action",
    "source": "HTML5 Game",
    "description": "Synchronize your inputs with chiptune soundtracks in Rhythm Master.",
    "path": "90s/rhythm-master.html"
  },
  {
    "id": "90s-rhythm-tap",
    "title": "Rhythm Tetrominoap",
    "era": "1990s",
    "genre": "Rhythm / Action",
    "source": "HTML5 Game",
    "description": "Synchronize your inputs with chiptune soundtracks in Rhythm Tetrominoap.",
    "path": "90s/rhythm-tap.html"
  },
  {
    "id": "90s-riddle-realm",
    "title": "Riddle Realm",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Riddle Realm.",
    "path": "90s/riddle-realm.html"
  },
  {
    "id": "90s-rotator",
    "title": "Rotator",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Rotator.",
    "path": "90s/rotator.html"
  },
  {
    "id": "90s-sequence-solver",
    "title": "Sequence Solver",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Sequence Solver.",
    "path": "90s/sequence-solver.html"
  },
  {
    "id": "90s-shadow-dash",
    "title": "Shadow Dash",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Shadow Dash.",
    "path": "90s/shadow-dash.html"
  },
  {
    "id": "90s-simon",
    "title": "Simon",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Simon.",
    "path": "90s/simon.html"
  },
  {
    "id": "90s-sky-flyer",
    "title": "Sky Flyer",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Sky Flyer.",
    "path": "90s/sky-flyer.html"
  },
  {
    "id": "90s-snake",
    "title": "Snake",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Snake.",
    "path": "90s/snake.html"
  },
  {
    "id": "90s-sokoban",
    "title": "Sokoban",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Sokoban.",
    "path": "90s/sokoban.html"
  },
  {
    "id": "90s-solar-flare",
    "title": "Solar Flare",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Solar Flare.",
    "path": "90s/solar-flare.html"
  },
  {
    "id": "90s-space-invaders",
    "title": "Space Invaders",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Space Invaders.",
    "path": "90s/space-invaders.html"
  },
  {
    "id": "90s-space-maze",
    "title": "Space Maze",
    "era": "1990s",
    "genre": "Puzzle / Logic",
    "source": "HTML5 Game",
    "description": "Solve engaging challenges, match blocks, and test your mind in Space Maze.",
    "path": "90s/space-maze.html"
  },
  {
    "id": "90s-spectrum-runner",
    "title": "Spectrum Runner",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Spectrum Runner.",
    "path": "90s/spectrum-runner.html"
  },
  {
    "id": "90s-surge-defender",
    "title": "Surge Defender",
    "era": "1990s",
    "genre": "Space Shooter",
    "source": "HTML5 Game",
    "description": "Intense projectile dodging and wave blasting in Surge Defender.",
    "path": "90s/surge-defender.html"
  },
  {
    "id": "90s-synth-wave",
    "title": "Synth Wave",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Synth Wave.",
    "path": "90s/synth-wave.html"
  },
  {
    "id": "90s-tempest-surge",
    "title": "Tetrominoempest Surge",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetrominoempest Surge.",
    "path": "90s/tempest-surge.html"
  },
  {
    "id": "90s-tetris",
    "title": "Tetrominoetris",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetrominoetris.",
    "path": "90s/tetris.html"
  },
  {
    "id": "90s-tidal-wave",
    "title": "Tetrominoidal Wave",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetrominoidal Wave.",
    "path": "90s/tidal-wave.html"
  },
  {
    "id": "90s-time-racer",
    "title": "Tetrominoime Racer",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Tetrominoime Racer.",
    "path": "90s/time-racer.html"
  },
  {
    "id": "90s-titan-clash",
    "title": "Tetrominoitan Clash",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetrominoitan Clash.",
    "path": "90s/titan-clash.html"
  },
  {
    "id": "90s-tornado-vortex",
    "title": "Tetrominoornado Vortex",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Tetrominoornado Vortex.",
    "path": "90s/tornado-vortex.html"
  },
  {
    "id": "90s-tsunami-escape",
    "title": "Tetrominosunami Escape",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Tetrominosunami Escape.",
    "path": "90s/tsunami-escape.html"
  },
  {
    "id": "90s-vaporwave-escape",
    "title": "Vaporwave Escape",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Vaporwave Escape.",
    "path": "90s/vaporwave-escape.html"
  },
  {
    "id": "90s-velocity-zero",
    "title": "Velocity Zero",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Velocity Zero.",
    "path": "90s/velocity-zero.html"
  },
  {
    "id": "90s-void-collector",
    "title": "Void Collector",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Void Collector.",
    "path": "90s/void-collector.html"
  },
  {
    "id": "90s-void-escape",
    "title": "Void Escape",
    "era": "1990s",
    "genre": "Runner / Racing",
    "source": "HTML5 Game",
    "description": "High-speed dodging and rapid-fire navigation in Void Escape.",
    "path": "90s/void-escape.html"
  },
  {
    "id": "90s-void-jumper",
    "title": "Void Jumper",
    "era": "1990s",
    "genre": "Platformer / Arcade",
    "source": "HTML5 Game",
    "description": "Overcome tricky terrain, enemies, and collectibles in Void Jumper.",
    "path": "90s/void-jumper.html"
  },
  {
    "id": "90s-volcanic-eruption",
    "title": "Volcanic Eruption",
    "era": "1990s",
    "genre": "Retro Action",
    "source": "HTML5 Game",
    "description": "Classic 90s-inspired retro gameplay in Volcanic Eruption.",
    "path": "90s/volcanic-eruption.html"
  },
  {
    "id": "90s-whack-a-mole",
    "title": "Whack A Mole",
    "era": "1990s",
    "genre": "Arcade Action",
    "source": "HTML5 Game",
    "description": "Pure cabinet-style reflex challenges and high-score chasing in Whack A Mole.",
    "path": "90s/whack-a-mole.html"
  }
];

let currentEra = 'all';

const info = [
  'WELCOME TO GAMINLOT RETRO ARCADE!',
  'EXPLORE TIMELESS HITS FROM THE 80s, 90s, AND 2000s.',
  'TIP: FILTER DECADES ON THE LEFT MENU TO EXPLORE BY ERA.',
  'CLICK ANY GAME CARD TO VIEW DETAILS OR HIT PLAY DIRECTLY!'
];

document.getElementById('info').textContent = info[Math.floor(Math.random() * info.length)];

const eraTitles = {
  'all': 'Nostalgic Games from the last decades.',
  '1970s': '70s GAME ARCHIVE',
  '1980s': '80s GAME ARCHIVE',
  '1990s': '90s GAME ARCHIVE',
  '2000s': '00s GAME ARCHIVE'
};

const eraCrumbs = {
  'all': 'HOME &gt; ALL GAMES',
  '1970s': 'HOME &gt; 1970s GAMES',
  '1980s': 'HOME &gt; 1980s GAMES',
  '1990s': 'HOME &gt; 1990s GAMES',
  '2000s': 'HOME &gt; 2000s GAMES'
};

document.querySelectorAll('.era').forEach(b => b.onclick = () => {
  document.querySelectorAll('.era').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  currentEra = b.dataset.era;
  
  const headingElem = document.getElementById('archive-heading');
  if (headingElem) {
    headingElem.textContent = eraTitles[currentEra] || 'GAME ARCHIVE';
  }
  const crumbElem = document.getElementById('crumb');
  if (crumbElem) {
    crumbElem.innerHTML = eraCrumbs[currentEra] || 'HOME &gt; GAMES';
  }
  
  render();
});

function render() {
  let q = document.getElementById('search').value.toLowerCase().trim();
  let a = games.filter(g => 
    (currentEra === 'all' || g.era === currentEra) && 
    (g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q))
  );

  grid.innerHTML = a.map(g => `
    <article class="card">
      <div class="thumb"><b>${g.title.toUpperCase()}</b></div>
      <h3>${g.title}</h3>
      <p>${g.era} | ${g.genre}</p>
      <button onclick="openDetails('${g.id}')">VIEW GAME</button>
    </article>
  `).join('');

  count.textContent = a.length;
  result.textContent = `${a.length} GAME${a.length === 1 ? '' : 'S'} FOUND`;
  empty.classList.toggle('hidden', a.length !== 0);
}

function openDetails(id) {
  let g = games.find(x => x.id === id);
  if (!g) return;
  dt.textContent = g.title;
  dd.textContent = g.description;
  de.textContent = g.era;
  dg.textContent = g.genre;
  ds.textContent = g.source;
  const previewTitle = document.getElementById('dp-title');
  if (previewTitle) {
    previewTitle.textContent = g.title.toUpperCase();
  }
  play.onclick = () => location.href = g.path;
  details.classList.remove('hidden');
}

function closeDetails() {
  details.classList.add('hidden');
}

function toggleMap() {
  map.classList.toggle('hidden');
}

render();
