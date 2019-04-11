enum HistoryEntryType {
    Event
};

export interface HistoryEntry {
    type: HistoryEntryType;
    name: string;
    title: string;
    date: string;
    shortDescription: string;
    imageUrl: string;
    // NOTE: temporary we're giving location manually
    position: Partial<{
        top: number | string;
        right: number | string;
        bottom: number | string;
        left: number | string;
    }>
};

interface HistoryData {
    entries: HistoryEntry[];
}

const getTopPos = (year: number) => (2019 - year) * 1.5;

export const data: HistoryData = {
    entries:
        [ { name: 'Soviet_Union'
          , type: HistoryEntryType.Event
          , title: 'USSR'
          , date: '1922 – 1991'
          , shortDescription: ''
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg'
          , position:
              { right: '11%'
              , top: getTopPos(1922)
              }
          }

        , { name: 'United_States'
          , type: HistoryEntryType.Event
          , title: 'USA'
          , date: 'July 4, 1776'
          , shortDescription: ''
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
          , position:
              { left: '5%'
              , top: getTopPos(1776)
              }
          }

        , { name: 'World_War_I'
          , type: HistoryEntryType.Event
          , title: 'World War I'
          , date: '28 July 1914 – 11 November 1918'
          , shortDescription: 'Also known as the First World War or the Great War, was a global war originating in Europe that lasted from 28 July 1914 to 11 November 1918. Contemporaneously described as "the war to end all wars", it led to the mobilisation of more than 70 million military personnel, including 60 million Europeans, making it one of the largest wars in history. It is also one of the deadliest conflicts in history, with an estimated nine million combatants and seven million civilian deaths as a direct result of the war, while resulting genocides and the 1918 influenza pandemic caused another 50 to 100 million deaths worldwide.'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/WWImontage.jpg'
          , position:
              { left: '5%'
              , top: getTopPos(1914)
              }
          }

        , { name: 'World_War_II'
          , type: HistoryEntryType.Event
          , title: 'World War II'
          , date: '1 September 1939 – 2 September 1945'
          , shortDescription: `also known as the Second World War, was a global war that lasted from 1939 to 1945. The vast majority of the world's countries—including all the great powers—eventually formed two opposing military alliances: the Allies and the Axis. A state of total war emerged, directly involving more than 100 million people from over 30 countries. The major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. World War II was the deadliest conflict in human history, marked by 50 to 85 million fatalities, most of whom were civilians in the Soviet Union and China. It included massacres, the genocide of the Holocaust, strategic bombing, premeditated death from starvation and disease, and the only use of nuclear weapons in war`
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Infobox_collage_for_WWII.PNG'
          , position:
              { left: '25%'
              , top: getTopPos(1939)
              }
          }
        , { name: 'Omar_Khayyam'
          , type: HistoryEntryType.Event
          , title: 'Omar Khayyam'
          , date: '18 May 1048 – 4 December 1131'
          , shortDescription: 'Persian mathematician, astronomer, and poet'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Omar_Khayyam2.JPG/440px-Omar_Khayyam2.JPG'
          , position:
              { right: '25%'
              , top: getTopPos(1048)
              }
          }

        , { name: 'Isaac_Newton'
          , type: HistoryEntryType.Event
          , title: 'Isaac Newton'
          , date: '25 December 1642 – 20 March 1726/27'
          , shortDescription: 'English mathematician, physicist, astronomer, theologian, and author (described in his own day as a "natural philosopher") who is widely recognised as one of the most influential scientists of all time, and a key figure in the scientific revolution'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg'
          , position:
              { left: '25%'
              , top: getTopPos(1642)
              }
          }

        , { name: 'William_Shakespeare'
          , type: HistoryEntryType.Event
          , title: 'William Shakespeare'
          , date: 'bapt. 26 April 1564 – 23 April 1616'
          , shortDescription: `English poet, playwright and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist`
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/375px-Shakespeare.jpg'
          , position:
              { left: '28%'
              , top: getTopPos(1564)
              }
          }

        , { name: 'Giordano_Bruno'
          , type: HistoryEntryType.Event
          , title: 'Giordano Bruno'
          , date: '1548 – 17 February 1600'
          , shortDescription: 'Italian Dominican friar, philosopher, mathematician, poet, cosmological theorist, and Hermetic occultist'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg'
          , position:
              { left: '40%'
              , top: getTopPos(1548)
              }
          }

        , { name: 'Steam_engine'
          , type: HistoryEntryType.Event
          , title: 'Steam engine'
          , date: '1712'
          , shortDescription: ''
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/JamesWattEngine.jpg/640px-JamesWattEngine.jpg'
          , position:
              { left: '35%'
              , top: getTopPos(1712)
              }
          }

        , { name: 'Steam_locomotive'
          , type: HistoryEntryType.Event
          , title: 'Steam locomotive'
          , date: '1802'
          , shortDescription: ''
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/California_Western_Railroad_Locomotive_45.jpg/440px-California_Western_Railroad_Locomotive_45.jpg'
          , position:
              { left: '30%'
              , top: getTopPos(1802)
              }
          }

        , { name: 'Napoleon'
          , type: HistoryEntryType.Event
          , title: 'Napoléon Bonaparte'
          , date: '15 August 1769 – 5 May 1821'
          , shortDescription: 'French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/288px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg'
          , position:
              { left: '33%'
              , top: getTopPos(1769)
              }
          }

        , { name: 'Albert_Einstein'
          , type: HistoryEntryType.Event
          , title: 'Albert Einstein'
          , date: '14 March 1879 – 18 April 1955'
          , shortDescription: 'German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science. He is best known to the general public for his mass–energy equivalence formula E = mc2'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
          , position:
              { left: '11%'
              , top: getTopPos(1879)
              }
          }

        , { name: 'Dante_Alighieri'
          , type: HistoryEntryType.Event
          , title: 'Dante Alighieri'
          , date: '1265 – 1321'
          , shortDescription: 'Italian poet during the Late Middle Ages. His Divine Comedy, originally called "Comedìa" and later christened Divina by Giovanni Boccaccio, is widely considered the most important poem of the Middle Ages and the greatest literary work in the Italian language.'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Portrait_de_Dante.jpg'
          , position:
              { left: '40%'
              , top: getTopPos(1265)
              }
          }

        , { name: 'Michael_Faraday'
          , type: HistoryEntryType.Event
          , title: 'Michael Faraday'
          , date: '22 September 1791 – 25 August 1867'
          , shortDescription: 'English scientist who contributed to the study of electromagnetism and electrochemistry. His main discoveries include the principles underlying electromagnetic induction, diamagnetism and electrolysis'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/M_Faraday_Th_Phillips_oil_1842.jpg'
          , position:
              { left: '15%'
              , top: getTopPos(1791)
              }
          }

        , { name: 'Gilgamesh'
          , type: HistoryEntryType.Event
          , title: 'Gilgamesh'
          , date: 'probably between 2800 and 2500 BCE'
          , shortDescription: 'Was a historical king of the Sumerian city-state of Uruk, a major hero in ancient Mesopotamian mythology, and the protagonist of the Epic of Gilgamesh, an epic poem written in Akkadian during the late second millennium BCE'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg/440px-Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg'
          , position:
              { left: '50%'
              , top: getTopPos(-2800)
              }
          }

        , { name: 'Lion-man'
          , type: HistoryEntryType.Event
          , title: 'Lion-man'
          , date: '~ 33,000 – 38,000'
          , shortDescription: 'The lion-headed figurine is the oldest-known zoomorphic (animal-shaped) sculpture in the world, and the oldest-known uncontested example of figurative art. It has been determined by carbon dating of the layer in which it was found to be between 35,000 and 40,000 years old, and therefore is associated with the archaeological Aurignacian culture of the Upper Paleolithic. It was carved out of mammoth ivory using a flint stone knife. Seven parallel, transverse, carved gouges are on the left arm.'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Loewenmensch1.jpg/480px-Loewenmensch1.jpg'
          , position:
              { left: '33%'
              , top: getTopPos(-33000)
              }
          }

        , { name: 'Incandescent_light_bulb'
          , type: HistoryEntryType.Event
          , title: 'Light bulb'
          , date: 'Around 1880s'
          , shortDescription: ''
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Livermore_Centennial_Light_Bulb.jpg/266px-Livermore_Centennial_Light_Bulb.jpg'
          , position:
              { left: '40%'
              , top: getTopPos(1880)
              }
          }

        , { name: 'Printing_press'
          , type: HistoryEntryType.Event
          , title: 'Printing press'
          , date: '1440'
          , shortDescription: `Johannes Gutenberg, a goldsmith by profession, developed, circa 1439, a printing system by adapting existing technologies to printing purposes, as well as making inventions of his own. His newly devised hand mould made possible the precise and rapid creation of metal movable type in large quantities. Movable type had been hitherto unknown in Europe. In Europe, the two inventions, the hand mould and the printing press, together drastically reduced the cost of printing books and other documents, particularly in short print runs.`
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chodowiecki_Basedow_Tafel_21_c_Z.jpg/622px-Chodowiecki_Basedow_Tafel_21_c_Z.jpg'
          , position:
              { left: '24%'
              , top: getTopPos(1440)
              }
          }

        , { name: 'Alexander_the_Great'
          , type: HistoryEntryType.Event
          , title: 'Alexander the Great'
          , date: '20/21 July 356 BCE – 10/11 June 323 BCE'
          , shortDescription: `A king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty. He was born in Pella in 356 BCE and succeeded his father Philip II to the throne at the age of 20. He spent most of his ruling years on an unprecedented military campaign through Asia and northeast Africa, and by the age of thirty he had created one of the largest empires of the ancient world, stretching from Greece to northwestern India. He was undefeated in battle and is widely considered one of history's most successful military commanders.`
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/AlexandreLouvre.jpg/340px-AlexandreLouvre.jpg'
          , position:
              { left: '40%'
              , top: getTopPos(-356)
              }
          }

        , { name: 'Scientific_Revolution'
          , type: HistoryEntryType.Event
          , title: 'Scientific Revolution'
          , date: '~ 1543'
          , shortDescription: 'The Scientific Revolution was a series of events that marked the emergence of modern science during the early modern period, when developments in mathematics, physics, astronomy, biology (including human anatomy) and chemistry transformed the views of society about nature'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CMB_Timeline300_no_WMAP.jpg/520px-CMB_Timeline300_no_WMAP.jpg'
          , position:
              { left: '5%'
              , top: getTopPos(1543)
              }
          }

        , { name: 'Renaissance'
          , type: HistoryEntryType.Event
          , title: 'Renaissance'
          , date: '~ 14th – 17th centuries'
          , shortDescription: 'a period in European history, covering the span between the 14th and 17th centuries and marking the transition from the Middle Ages to modernity. The traditional view focuses more on the early modern aspects of the Renaissance and argues that it was a break from the past, but many historians today focus more on its medieval aspects and argue that it was an extension of the middle ages'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg'
          , position:
              { left: '33%'
              , top: getTopPos(1350)
              }
          }

        , { name: 'Metropolitan_Railway'
          , type: HistoryEntryType.Event
          , title: 'Metropolitan Railway'
          , date: '1863'
          , shortDescription: `The Metropolitan Railway was a passenger and goods railway that served London from 1863 to 1933. It opened to the public on 10 January 1863 with gas-lit wooden carriages hauled by steam locomotives, the world's first passenger-carrying designated underground railway.`
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metropolitan_Underground_Railway_stations.jpg/440px-Metropolitan_Underground_Railway_stations.jpg'
          , position:
              { left: '26%'
              , top: getTopPos(1863)
              }
          }

        , { name: ''
          , type: HistoryEntryType.Event
          , title: ''
          , date: ''
          , shortDescription: ''
          , imageUrl: ''
          , position:
              { left: 0
              , top: getTopPos(0)
              }
          }

        // on top of em all
        , { name: 'Leonardo_da_Vinci'
          , type: HistoryEntryType.Event
          , title: 'Leonardo da Vinci'
          , date: '15 April 1452 – 2 May 1519'
          , shortDescription: 'Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg/440px-Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg'
          , position:
              { left: '40%'
              , top: getTopPos(1452)
              }
          } 
        ]
}