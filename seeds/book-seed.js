const { Book } = require('../models');

const bookData = [
  {
    title: 'The Odyssey of Homer',
    authors: 'Homer',
    genre: 'Fiction',
    description:
      "Homer's epic chronicle of the Greek hero Odysseus' journey home from the Trojan War has inspired writers from Virgil to James Joyce. Odysseus survives storm and shipwreck, the cave of the Cyclops and the isle of Circe, the lure of the Sirens' song and a trip to the Underworld, only to find his most difficult challenge at home, where treacherous suitors seek to steal his kingdom and his loyal wife, Penelope. Favorite of the gods, Odysseus embodies the energy, intellect, and resourcefulness that were of highest value to the ancients and that remain ideals in out time. In this new verse translation, Allen Mandelbaum--celebrated poet and translator of Virgil's Aeneid and Dante's Divine Comedy --realizes the power and beauty of the original Greek verse and demonstrates why the epic tale of The Odyssey has captured the human imagination for nearly three thousand years.",
    image:
      'http://books.google.com/books/content?id=ORyo8qAA-CQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    available: true,
    user_id: 1
  },
  {
    title: 'The Plague',
    authors: 'Albert Camus',
    genre: 'Fiction',
    description:
      "'Its relevance lashes you across the face.' —Stephen Metcalf, The Los Angeles Times • “A redemptive book, one that wills the reader to believe, even in a time of despair.” —Roger Lowenstein, The Washington Post A haunting tale of human resilience and hope in the face of unrelieved horror, Albert Camus' iconic novel about an epidemic ravaging the people of a North African coastal town is a classic of twentieth-century literature. The townspeople of Oran are in the grip of a deadly plague, which condemns its victims to a swift and horrifying death. Fear, isolation and claustrophobia follow as they are forced into quarantine. Each person responds in their own way to the lethal disease: some resign themselves to fate, some seek blame, and a few, like Dr. Rieux, resist the terror. An immediate triumph when it was published in 1947, The Plague is in part an allegory of France's suffering under the Nazi occupation, and a timeless story of bravery and determination against the precariousness of human existence.",
    image:
      'http://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    available: false,
    user_id: 1
  },
  // {
  //   title: 'Ready Player Two',
  //   authors: 'Ernest Cline',
  //   genre: 'Fiction',
  //   description:
  //     '#1 NEW YORK TIMES BESTSELLER • The thrilling sequel to the beloved worldwide bestseller Ready Player One, the near-future adventure that inspired the blockbuster Steven Spielberg film. NAMED ONE OF THE BEST BOOKS OF THE YEAR BY THE WASHINGTON POST • “The game is on again. . . . A great mix of exciting fantasy and threatening fact.”—The Wall Street Journal AN UNEXPECTED QUEST. TWO WORLDS AT STAKE. ARE YOU READY? Days after winning OASIS founder James Halliday’s contest, Wade Watts makes a discovery that changes everything. Hidden within Halliday’s vaults, waiting for his heir to find, lies a technological advancement that will once again change the world and make the OASIS a thousand times more wondrous—and addictive—than even Wade dreamed possible. With it comes a new riddle, and a new quest—a last Easter egg from Halliday, hinting at a mysterious prize. And an unexpected, impossibly powerful, and dangerous new rival awaits, one who’ll kill millions to get what he wants. Wade’s life and the future of the OASIS are again at stake, but this time the fate of humanity also hangs in the balance. Lovingly nostalgic and wildly original as only Ernest Cline could conceive it, Ready Player Two takes us on another imaginative, fun, action-packed adventure through his beloved virtual universe, and jolts us thrillingly into the future once again.',
  //   image:
  //     'http://books.google.com/books/content?id=FOHtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: true,
  // },
  // {
  //   title: 'There There',
  //   authors: 'Tommy Orange',
  //   genre: 'Fiction',
  //   description:
  //     'NATIONAL BESTSELLER • PEN/HEMINGWAY AWARD WINNER • One of The New York Times 10 Best Books of the Year • A wondrous and shattering novel that follows twelve characters from Native communities: all traveling to the Big Oakland Powwow, all connected to one another in ways they may not yet realize. Among them is Jacquie Red Feather, newly sober and trying to make it back to the family she left behind. Dene Oxendene, pulling his life together after his uncle’s death and working at the powwow to honor his memory. Fourteen-year-old Orvil, coming to perform traditional dance for the very first time. Together, this chorus of voices tells of the plight of the urban Native American—grappling with a complex and painful history, with an inheritance of beauty and spirituality, with communion and sacrifice and heroism. Hailed as an instant classic, There There is at once poignant and unflinching, utterly contemporary and truly unforgettable.',
  //   image:
  //     'http://books.google.com/books/content?id=oNY0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: false,
  // },
  // {
  //   title: 'The Trial',
  //   authors: 'Franz Kafka',
  //   genre: 'Fiction',
  //   description:
  //     'The story of the mysterious indictment, trial, and reckoning forced upon Joseph K. in Franz Kafka’s The Trial is one of the twentieth century’s master parables, reflecting the central spiritual crises of modern life. Kafka’s method–one that has influenced, in some way, almost every writer of substance who followed him–was to render the absurd and the terrifying convincing by a scrupulous, hyperreal matter-of-factness of tone and treatment. He thereby imparted to his work a level of seriousness normally associated with civilization’s most cherished poems and religious texts. Translated by Willa and Edwin Muir',
  //   image:
  //     'http://books.google.com/books/content?id=8T9_cxH7z6sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: true,
  // },
  // {
  //   title: 'The House of the Spirits',
  //   authors: 'Isabel Allende',
  //   genre: 'Fiction',
  //   description:
  //     'The Trueba family embodies strong feelings. This family saga starts at the beginning of the 20th century and continues through the assassination of Allende in 1973.',
  //   image:
  //     'http://books.google.com/books/content?id=IMwoCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: true,
  // },
  // {
  //   title: 'If Beale Street Could Talk',
  //   authors: 'James Baldwin',
  //   genre: 'Fiction',
  //   description:
  //     'In this honest and stunning novel that inspired the award-winning major motion picture of the same name, James Baldwin has given America a moving story of love in the face of injustice. "A major work of Black American fiction." –The New Republic Told through the eyes of Tish, a nineteen-year-old girl, in love with Fonny, a young sculptor who is the father of her child, Baldwin’s story mixes the sweet and the sad. Tish and Fonny have pledged to get married, but Fonny is falsely accused of a terrible crime and imprisoned. Their families set out to clear his name, and as they face an uncertain future, the young lovers experience a kaleidoscope of emotions–affection, despair, and hope. In a love story that evokes the blues, where passion and sadness are inevitably intertwined, Baldwin has created two characters so alive and profoundly realized that they are unforgettably ingrained in the American psyche.',
  //   image:
  //     'http://books.google.com/books/content?id=lclWAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: false,
  // },
  // {
  //   title: 'How to Stop Time',
  //   authors: 'Matt Haig',
  //   genre: 'Fiction',
  //   description:
  //     "From the New York Times bestselling author of The Midnight Library. “A quirky romcom dusted with philosophical observations….A delightfully witty…poignant novel.” —The Washington Post “She smiled a soft, troubled smile and I felt the whole world slipping away, and I wanted to slip with it, to go wherever she was going… I had existed whole years without her, but that was all it had been. An existence. A book with no words.” Tom Hazard has just moved back to London, his old home, to settle down and become a high school history teacher. And on his first day at school, he meets a captivating French teacher at his school who seems fascinated by him. But Tom has a dangerous secret. He may look like an ordinary 41-year-old, but owing to a rare condition, he's been alive for centuries. Tom has lived history--performing with Shakespeare, exploring the high seas with Captain Cook, and sharing cocktails with Fitzgerald. Now, he just wants an ordinary life. Unfortunately for Tom, the Albatross Society, the secretive group which protects people like Tom, has one rule: Never fall in love. As painful memories of his past and the erratic behavior of the Society's watchful leader threaten to derail his new life and romance, the one thing he can't have just happens to be the one thing that might save him. Tom will have to decide once and for all whether to remain stuck in the past, or finally begin living in the present. How to Stop Time tells a love story across the ages—and for the ages—about a man lost in time, the woman who could save him, and the lifetimes it can take to learn how to live. It is a bighearted, wildly original novel about losing and finding yourself, the inevitability of change, and how with enough time to learn, we just might find happiness. Soon to be a major motion picture starring Benedict Cumberbatch.",
  //   image:
  //     'http://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: false,
  // },
  // {
  //   title: 'My Name Is Asher Lev',
  //   authors: 'Chaim Potok',
  //   genre: 'Fiction',
  //   description:
  //     'NATIONAL BESTSELLER • In this modern classic from the National Book Award–nominated author of The Chosen, a young religious artist is compulsively driven to render the world he sees and feels, even when it leads him to blasphemy. “A novel of finely articulated tragic power .... Little short of a work of genius.”—The New York Times Book Review Asher Lev is a Ladover Hasid who keeps kosher, prays three times a day and believes in the Ribbono Shel Olom, the Master of the Universe. He grows up in a cloistered Hasidic community in postwar Brooklyn, a world suffused by ritual and revolving around a charismatic Rebbe. He is torn between two identities, the one consecrated to God, the other devoted only to art and his imagination, and in time, his artistic gift threatens to estrange him from that world and the parents he adores. As it follows his struggle, My Name Is Asher Lev becomes a luminous, visionary portrait of the artist, by turns heartbreaking and exultant.',
  //   image:
  //     'http://books.google.com/books/content?id=kYcUeOR4bdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //   available: true,
  // },
  // {
  //   title: 'Future Shock',
  //   authors: 'Alvin Toffler',
  //   genre: 'Fiction',
  //   description:
  //     'Explores the nature and implications of a third wave of change that is now creating a new civilization with its own life-styles, jobs, sexual attitudes, concepts of family and love, economic structures, and political philosophies',
  //   image:
  //     'http://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //   available: false,
  // },
];

const seedProducts = () => Book.bulkCreate(bookData);

module.exports = seedProducts;
