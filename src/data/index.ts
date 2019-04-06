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
        top: number;
        right: number;
        bottom: number;
        left: number;
    }>
};

interface HistoryData {
    entries: HistoryEntry[];
}

const getTopPos = (year: number) => (2019 - year) * 1.5;

export const data: HistoryData = {
    entries:
        [ { name: 'Leonardo_da_Vinci'
          , type: HistoryEntryType.Event
          , title: 'Leonardo da Vinci'
          , date: '15 April 1452 – 2 May 1519'
          , shortDescription: 'Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography'
          , imageUrl: 'https://www.wga.hu/art/m/melzi/port_leo.jpg'
          , position:
              { left: 100
              , top: getTopPos(1452)
              }
          }

        , { name: 'Omar_Khayyam'
          , type: HistoryEntryType.Event
          , title: 'Omar Khayyam'
          , date: '18 May 1048 – 4 December 1131'
          , shortDescription: 'Persian mathematician, astronomer, and poet'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Omar_Khayyam2.JPG'
          , position:
              { left: 200
              , top: getTopPos(1048)
              }
          }

        , { name: 'Giordano_Bruno'
          , type: HistoryEntryType.Event
          , title: 'Giordano Bruno'
          , date: '1548 – 17 February 1600'
          , shortDescription: 'Italian Dominican friar, philosopher, mathematician, poet, cosmological theorist, and Hermetic occultist'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg'
          , position:
              { left: 350
              , top: getTopPos(1548)
              }
          }

        , { name: 'Isaac_Newton'
          , type: HistoryEntryType.Event
          , title: 'Isaac Newton'
          , date: '25 December 1642 – 20 March 1726/27'
          , shortDescription: 'English mathematician, physicist, astronomer, theologian, and author (described in his own day as a "natural philosopher") who is widely recognised as one of the most influential scientists of all time, and a key figure in the scientific revolution'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg'
          , position:
              { left: 50
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
              { left: 0
              , top: getTopPos(1564)
              }
          }

        , { name: 'Napoleon'
          , type: HistoryEntryType.Event
          , title: 'Napoléon Bonaparte'
          , date: '15 August 1769 – 5 May 1821'
          , shortDescription: 'French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars'
          , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/288px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg'
          , position:
              { left: 200
              , top: getTopPos(1769)
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

        ]
}