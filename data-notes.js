/* Bill France WWII Journal — research notes and hyperlinks.
   Structure: [date, note, hyperlink]
*/
const noteData = [
  [
    "Friday, 19 September 1941",
    "“Jerry” — common British wartime slang for the Germans or Germany.",
    ""
  ],
  [
    "Saturday, 20 September 1941",
    "Spare a Copper 20 September 1941 - 20 October 1941 Plymouth, England\n\n*Spare a Copper* — a 1940 British comedy starring George Formby.",
    "https://en.wikipedia.org/wiki/Palace_Theatre,_Plymouth"
  ],
  [
    "Sunday, 21 September 1941",
    "William Joseph Jordan was New Zealand’s High Commissioner in London during the war.",
    ""
  ],
  [
    "Monday, 22 September 1941",
    "“Star office” likely refers to Bill’s former workplace at the Auckland Star.",
    ""
  ],
  [
    "Tuesday, 23 September 1941",
    "",
    ""
  ],
  [
    "Wednesday, 24 September 1941",
    "Scatterbrain; The Farmers Wife",
    ""
  ],
  [
    "Thursday, 25 September 1941",
    "Joan, Rose, William Jordan, Bert, Ben",
    ""
  ],
  [
    "Friday, 26 September 1941",
    "",
    ""
  ],
  [
    "Saturday, 27 September 1941",
    "",
    ""
  ],
  [
    "Sunday, 28 September 1941",
    "",
    ""
  ],
  [
    "Monday, 29 September 1941",
    "Delayed-action bombs were fitted to explode some time after impact rather than immediately, leaving an area dangerous until the bomb detonated or was made safe.",
    ""
  ],
  [
    "Tuesday, 30 September 1941",
    "Tree of Liberty",
    ""
  ],
  [
    "Wednesday, 1 October 1941",
    "Moa, the first to be commissioned, started life as HMS Moa. Kiwi and Tui, commissioned after the Royal New Zealand Navy came into being on 1 October, were HMNZ ships from the start.",
    ""
  ],
  [
    "Thursday, 2 October 1941",
    "",
    ""
  ],
  [
    "Friday, 3 October 1941",
    "",
    ""
  ],
  [
    "Saturday, 4 October 1941",
    "Trevol was a naval training camp in the Plymouth area. “Adrift” was naval usage for being late or absent when required. R.N.B. refers to the Royal Naval Barracks.",
    ""
  ],
  [
    "Sunday, 5 October 1941",
    "",
    ""
  ],
  [
    "Monday, 6 October 1941",
    "“C.C.” is uncertain. One possibility is the C-in-C (Commander-in-Chief), Plymouth, Admiral Sir Charles Forbes; this remains an interpretation rather than a confirmed identification.",
    ""
  ],
  [
    "Tuesday, 7 October 1941",
    "Bill’s “first war” with Joan appears to mean their first argument or falling-out.",
    ""
  ],
  [
    "Wednesday, 8 October 1941",
    "The prisoner exchange Bill called a “complete washout” was the proposed exchange of wounded British and German prisoners that broke down in October 1941. “Pincher” was a traditional Royal Navy nickname for a man surnamed Martin.",
    ""
  ],
  [
    "Thursday, 9 October 1941",
    "Payday - £2-12-0\n\n“On draft” meant under orders for posting or transfer. “Adrift” meant late or absent when required.",
    ""
  ],
  [
    "Friday, 10 October 1941",
    "The film title in Bill’s handwriting is uncertain. It appears to include *Rocky Mountain Rangers*, a 1940 western; the preceding words remain unclear.",
    ""
  ],
  [
    "Saturday, 11 October 1941",
    "",
    ""
  ],
  [
    "Sunday, 12 October 1941",
    "",
    ""
  ],
  [
    "Monday, 13 October 1941",
    "",
    ""
  ],
  [
    "Tuesday, 14 October 1941",
    "",
    ""
  ],
  [
    "Wednesday, 15 October 1941",
    "",
    ""
  ],
  [
    "Thursday, 16 October 1941",
    "",
    ""
  ],
  [
    "Friday, 17 October 1941",
    "Radio jamming was used during the war to interfere with enemy broadcasts; Bill believed the voices he heard were an attempt to jam the transmission.",
    ""
  ],
  [
    "Saturday, 18 October 1941",
    "",
    ""
  ],
  [
    "Sunday, 19 October 1941",
    "",
    ""
  ],
  [
    "Monday, 20 October 1941",
    "Bill was listening to the Jock McAvoy–Jack Hyams boxing match. McAvoy won their ten-round contest on points.",
    ""
  ],
  [
    "Tuesday, 21 October 1941",
    "",
    ""
  ],
  [
    "Wednesday, 22 October 1941",
    "",
    ""
  ],
  [
    "Thursday, 23 October 1941",
    "Pay today £9-5-0",
    ""
  ],
  [
    "Friday, 24 October 1941",
    "",
    ""
  ],
  [
    "Saturday, 25 October 1941",
    "",
    ""
  ],
  [
    "Sunday, 26 October 1941",
    "Scouses, or people from Liverpool",
    ""
  ],
  [
    "Monday, 27 October 1941",
    "Smoke screens were used during air raids to obscure cities, dockyards and other targets from attacking aircraft.",
    ""
  ],
  [
    "Tuesday, 28 October 1941",
    "",
    ""
  ],
  [
    "Wednesday, 29 October 1941",
    "",
    ""
  ],
  [
    "Thursday, 30 October 1941",
    "",
    ""
  ],
  [
    "Friday, 31 October 1941",
    "Leons Birthday",
    ""
  ],
  [
    "Saturday, 1 November 1941",
    "",
    ""
  ],
  [
    "Sunday, 2 November 1941",
    "",
    ""
  ],
  [
    "Monday, 3 November 1941",
    "Lord Haw-Haw was the nickname given to William Joyce, an American-born British fascist and Nazi propaganda broadcaster during World War II. He was known for his broadcasts from Nazi Germany aimed at demoralizing the British people and encouraging them to surrender. Joyces broadcasts were highly controversial, and he was considered a traitor by many in Britain. He was eventually captured by British authorities and executed for treason in 1946.",
    ""
  ],
  [
    "Tuesday, 4 November 1941",
    "",
    ""
  ],
  [
    "Wednesday, 5 November 1941",
    "The Camel's Head — a well-established public house on Wolseley Road in the Camel's Head area of Plymouth, near Devonport Dockyard. The pub dated from the nineteenth century and was still operating during the war. Nearby Camel's Head Halt railway station, itself named after the pub, was still open when Bill visited in November 1941.",
    ""
  ],
  [
    "Thursday, 6 November 1941",
    "It was The Waitemata Whizz-bang, described by the National Library of New Zealand as the official organ of the Auckland Star Sports and Social Club. The surviving run begins with Volume 1, No. 1 in September 1940 and continues through August 1944.",
    ""
  ],
  [
    "Friday, 7 November 1941",
    "7 November 1941 - 10 November 1941 To Manchester.\nPlymouth to Manchester was a substantial wartime rail journey of roughly 250 miles. Bill's departure at noon and arrival at midnight meant the journey took about 12 hours.",
    ""
  ],
  [
    "Saturday, 8 November 1941",
    "The Grove and Cricketers Arms — both were Manchester public-house names, with several possible establishments carrying these names. A Grove Inn on Ashton New Road, Clayton, and a Cricketers Arms on nearby Bradford Road are plausible candidates.",
    ""
  ],
  [
    "Sunday, 9 November 1941",
    "",
    ""
  ],
  [
    "Monday, 10 November 1941",
    "",
    ""
  ],
  [
    "Tuesday, 11 November 1941",
    "",
    ""
  ],
  [
    "Wednesday, 12 November 1941",
    "Barrage balloons — large tethered balloons used as an air defence measure, forcing attacking aircraft to fly higher and making low-level attacks more hazardous. Bill's statement that four came down in flames is striking, particularly because he explicitly says there was no raid. In the context of the thunderstorm, this suggests their loss may have been weather-related rather than enemy action, although the journal doesn't establish the cause.",
    ""
  ],
  [
    "Thursday, 13 November 1941",
    "HMS Rodney — Rodney's official gunnery report records 378 16-inch shells fired at Bismarck during the final action on 27 May 1941.\n\nDuring the 24 May battle, Prince of Wales was struck by an unexploded 15-inch shell from Bismarck below the waterline. The shell remained lodged in the ship and was discovered and removed later. Admiralty damage records also show serious damage to the air intake of X Boiler Room, including damage to a boiler-room fan and oil cooler.",
    "HMS Prince of Wales https://en.wikipedia.org/wiki/HMS_Prince_of_Wales_(53)"
  ],
  [
    "Friday, 14 November 1941",
    "Royal Oak — this cannot be the battleship HMS Royal Oak, which had been sunk at Scapa Flow in October 1939. Bill must be referring to another vessel named Royal Oak. Its identity remains unresolved.",
    ""
  ],
  [
    "Saturday, 15 November 1941",
    "",
    ""
  ],
  [
    "Sunday, 16 November 1941",
    "",
    ""
  ],
  [
    "Monday, 17 November 1941",
    "",
    ""
  ],
  [
    "Tuesday, 18 November 1941",
    "“Fairy” had meanings in 1941 that are quite different from the meaning most readers would assume today. Bill appears to use the word as a complimentary description of an attractive young woman. His “swell blonde fairy” was evidently a blonde woman he met during his night out.",
    ""
  ],
  [
    "Wednesday, 19 November 1941",
    "",
    ""
  ],
  [
    "Thursday, 20 November 1941",
    "",
    ""
  ],
  [
    "Friday, 21 November 1941",
    "",
    ""
  ],
  [
    "Saturday, 22 November 1941",
    "",
    ""
  ],
  [
    "Sunday, 23 November 1941",
    "German bomber shot down — Bill appears to have witnessed the destruction of Junkers Ju 88A-4 4D+GS of 8./KG 30, which crashed at Porsham Farm, Tamerton Foliot, near Plymouth, at about 8.43pm on 23 November 1941. Bill identified the attacking fighter as a Spitfire, but records identify it as a Beaufighter Mk IIF of No. 307 Polish Night Fighter Squadron, flown by P/O Dziegielewski with P/O Swierz. The Ju 88 caught fire following the attack and broke up when it crashed, matching Bill's description of seeing it come down in flames followed by a large flash. Bill believed only one German had escaped, but later records indicate that the crew bailed out and survived, two of them wounded.",
    "https://uploads-ssl.webflow.com/5a3134b40672a700015a5d31/5e6b8ce46997b315454cf5e0_LCA9samplepages1.pdf"
  ],
  [
    "Monday, 24 November 1941",
    "",
    ""
  ],
  [
    "Tuesday, 25 November 1941",
    "Leith Rest Home — likely a wartime facility providing meals and rest for servicemen. This is worth investigating more closely to identify the establishment and its location.",
    ""
  ],
  [
    "Wednesday, 26 November 1941",
    "Commissioning of Tui — HMNZS Tui was formally commissioned into the Royal New Zealand Navy at Leith on 26 November 1941. Bill records the ceremony beginning at 9.30am, with prayers, a hymn and the National Anthem. Although now officially in naval service, Tui was still being prepared: stores and ammunition were taken aboard and engine trials were conducted that same day. The ship was not recorded as completed by her builders until 5 December. Official RNZN records name Lieutenant-Commander J. G. Hilliard as Tui's first commanding officer.",
    ""
  ],
  [
    "Thursday, 27 November 1941",
    "",
    ""
  ],
  [
    "Friday, 28 November 1941",
    "",
    ""
  ],
  [
    "Saturday, 29 November 1941",
    "",
    ""
  ],
  [
    "Sunday, 30 November 1941",
    "",
    ""
  ],
  [
    "Monday, 1 December 1941",
    "Moa through Halifax — this is an important marker in the Bird-class ships' movements. Moa, the first of the three sister ships completed, was already making her voyage towards New Zealand while Tui was still preparing and conducting trials in Scotland.\n\n“Dhobying” was naval slang for washing clothes; Bill and Mo appear to have been taking in washing for other men aboard.",
    ""
  ],
  [
    "Tuesday, 2 December 1941",
    "",
    ""
  ],
  [
    "Wednesday, 3 December 1941",
    "HMAS Sydney — the Australian light cruiser had been lost after her engagement with the German auxiliary cruiser Kormoran on 19 November 1941. All 645 members of Sydney's crew were lost. The loss was not publicly announced immediately because Sydney was overdue and searches were initially underway.",
    ""
  ],
  [
    "Thursday, 4 December 1941",
    "Albert Dock — Tui's move at 1.30pm is the first recorded movement of the ship since Bill joined her. Albert Dock was part of the extensive Leith dock complex, so this was a shift within the port rather than Tui leaving Leith.",
    ""
  ],
  [
    "Friday, 5 December 1941",
    "There are, however, two particularly strong candidates for what Bill saw:\n\nHMS Ness (K219) and HMS Nith (K215).\n\nBoth were new River-class frigates being built by Henry Robb at Leith, and remarkably, they had been laid down almost together:\n\nNess — laid down 3 September 1941\nNith — laid down 5 September 1941\n\nSo on 5 December 1941, both ships had been under construction for almost exactly three months. Ness wasn't launched until 30 July 1942 and Nith until 25 September 1942, meaning that when Bill saw them they would still have been two large warship hulls taking shape on adjacent building berths.",
    ""
  ],
  [
    "Saturday, 6 December 1941",
    "",
    ""
  ],
  [
    "Sunday, 7 December 1941",
    "Oysters from Nestlé — The handwriting appears to read *oysters*. This need not imply fresh oysters sent unrefrigerated from New Zealand. Tinned foods were routinely suitable for wartime parcels. The precise nature and origin of the Nestlé parcel have not yet been independently established.\n\nJapan and America — Bill's statement is especially interesting because of the timing. Japan attacked Pearl Harbor on 7 December 1941 Hawaiian and American time, but because of the International Date Line it was already 8 December in Japan. Japanese Imperial Headquarters announced that war had begun at dawn on 8 December Japanese time. The United States formally declared war on Japan on 8 December. Bill's wording records the news as he understood it in Scotland rather than providing a precise diplomatic chronology.\n\nHis final comment is significant in the context of the preceding entries. Since receiving his draft in Plymouth, Bill had repeatedly anticipated returning to New Zealand. The outbreak of war between Japan and the United States introduced an entirely new threat in the Pacific, and his immediate reaction was to wonder whether it would interfere with getting home.",
    "https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/m/magic-background-pearl-harbor-vol4.html"
  ],
  [
    "Monday, 8 December 1941",
    "The National Patriotic Fund Board had been established shortly after the outbreak of war to coordinate welfare and comforts for New Zealand servicemen. Its official responsibilities specifically included supplying comforts to naval, military and air-force personnel overseas. Provincial patriotic councils raised funds and prepared gift parcels, while national organisations arranged their distribution.\n\nFor naval personnel, this was a substantial programme. Comforts included things such as woollen clothing, cigarettes and tobacco, food, books and magazines, playing cards and other recreational items. Later official reports specifically describe regular supplies being sent to New Zealand naval personnel overseas.\n\nImportantly for Bill, the system specifically catered for New Zealand servicemen in Britain, many of whom were serving within Royal Navy and RAF establishments rather than concentrated in New Zealand units. Parcels were sent from New Zealand to the New Zealand organisation in Britain and then individually addressed to servicemen.",
    "https://paperspast.natlib.govt.nz/parliamentary/AJHR1941-I.2.2.5.28?items_per_page=100&page=6&query=commercial&snippet=true&sort_by=bySH.rev"
  ],
  [
    "Tuesday, 9 December 1941",
    "",
    ""
  ],
  [
    "Wednesday, 10 December 1941",
    "Compass test — probably compass adjustment or swinging ship. A newly commissioned vessel needed its magnetic compass checked and corrected for deviations caused by the ship's own steel structure and electrical equipment. This normally involved manoeuvring the vessel through different headings and comparing the compass readings against known bearings. Bill's mention of a near mishap may therefore relate to the manoeuvring, but he doesn't explain it.\n\nGranton — Granton lies on the Firth of Forth, west of Leith. Tui anchoring there indicates that she remained in the immediate Edinburgh/Forth area after the day's trials rather than returning to her previous berth at Leith.\n\nPrince of Wales and Repulse — both ships were sunk by Japanese aircraft off Malaya on 10 December 1941, with Prince of Wales and Repulse forming the core of Force Z. Bill recording their loss on the same date shows just how quickly the news reached Tui. This also explains his description of the war news as depressing: major British capital ships had been destroyed just as Japan's offensive was expanding across the Pacific and Southeast Asia.\n\nTom Bowler — a popular servicemen's number game closely related to, or an early form of, Housey-Housey/Bingo. Players used numbered boards while numbers were randomly drawn, with prizes commonly awarded to winners. Bill's entry therefore records an organised game of bingo-like entertainment aboard Tui while the crew were confined to the ship at Granton",
    "https://en.wikipedia.org/wiki/HMS_Prince_of_Wales_(53)https://en.wikipedia.org/wiki/HMS_Repulse_(1916)"
  ],
  [
    "Thursday, 11 December 1941",
    "",
    ""
  ],
  [
    "Friday, 12 December 1941",
    "HMNZS Scarba (T155) — one of four Isles-class anti-submarine/minesweeping trawlers acquired in Britain for the RNZN, together with Inchkeith, Sanda and Killegray. Scarba was herself newly commissioned and preparing for eventual service in New Zealand waters. On 12 December Tui berthed alongside her at Port Edgar, placing two newly acquired RNZN minesweepers together during their working-up period in Scotland. Scarba was commanded by Lieutenant-Commander Peter Phipps DSC, who later became Chief of Naval Staff.",
    "https://navymuseum.co.nz/explore/by-collections/ships/inchkeith-isles-class-minesweeper/"
  ],
  [
    "Saturday, 13 December 1941",
    "",
    ""
  ],
  [
    "Sunday, 14 December 1941",
    "",
    ""
  ],
  [
    "Monday, 15 December 1941",
    "one of the sailors is in the cattle (brig or jail) and that the coxswain (a senior sailor who steers the ship) is a \"sly devil\" (likely a joking or teasing comment).",
    ""
  ],
  [
    "Tuesday, 16 December 1941",
    "HMS Cromarty (J09) — a newly commissioned Bangor-class fleet minesweeper of the Royal Navy's 14th Minesweeping Flotilla. Her commanding officer was Lieutenant Charles George “Bunty” Palmer RNZNVR, a New Zealander who had been appointed to Cromarty in October 1941 and was the first RNVR lieutenant to command a fleet minesweeper. Bill met Palmer at Port Edgar while Tui was undergoing minesweeping training and spent some time talking with him. Cromarty later served in the Mediterranean and Madagascar operations before being sunk by a mine in October 1943.\n\n“Burst pudding on gripe” — both are genuine seamanship terms. A pudding was a thick rope or fibre pad used as a fender to protect a vessel or boat from chafing and impact, while a gripe could refer to the securing gear used to restrain a ship's boat. Bill appears to record damage to this protective or securing arrangement while coming in. The exact equipment involved cannot be determined from the entry alone.",
    "https://navymuseum.co.nz/explore/by-themes/world-war-two-by-themes/commander-charles-palmer/"
  ],
  [
    "Wednesday, 17 December 1941",
    "Dan buoys — temporary marker buoys extensively used in minesweeping. They consisted of a tall pole or spar held upright by a weighted base and float, usually carrying a flag or other marker at the top. Sweepers laid them to mark swept channels, boundaries, turns or the positions of mines and other important points during an operation.",
    ""
  ],
  [
    "Thursday, 18 December 1941",
    "",
    ""
  ],
  [
    "Friday, 19 December 1941",
    "Tickler — Royal Navy slang for duty-free tobacco supplied to sailors in tins, particularly tobacco for hand-rolled cigarettes or pipes. Bill's reference to rum, cigarettes and Tickler being loaded aboard therefore records Tui taking aboard part of her alcohol and tobacco supplies. The naval nickname appears to have originated from the well-known Tickler's jam tins supplied to servicemen during the First World War.",
    ""
  ],
  [
    "Saturday, 20 December 1941",
    "Queensferry — this is South Queensferry, immediately beside Port Edgar. Bill's wording shows the distinction clearly: he travelled into Edinburgh for the afternoon and later returned to Queensferry for the evening.\n\nA.T.S. girls — members of the Auxiliary Territorial Service, the women's branch of the British Army. With wartime military establishments throughout the Forth area, it would not have been unusual for Bill and Bert to encounter ATS personnel socially.",
    ""
  ],
  [
    "Sunday, 21 December 1941",
    "",
    ""
  ],
  [
    "Monday, 22 December 1941",
    "",
    ""
  ],
  [
    "Tuesday, 23 December 1941",
    "1-inch calibre aiming — sub-calibre gunnery practice using a 1-inch aiming rifle fitted to a larger naval gun. It allowed the gun crew to practise laying, aiming and firing using inexpensive 1-inch ammunition rather than repeatedly firing full-calibre rounds. Bill's exercise was followed that evening by a live 4-inch night shoot, showing the progression from aiming practice to firing Tui's main gun.\n\n4-inch night shoot — live-fire practice with Tui's main 4-inch (102 mm) gun, carried out after dark while proceeding towards the Dunbar anchorage. Earlier that day the crew had undertaken 1-inch aiming practice, so the night shoot provided further training with the ship's full-calibre main armament under more difficult nighttime conditions. Bill considered the results satisfactory.",
    ""
  ],
  [
    "Wednesday, 24 December 1941",
    "",
    ""
  ],
  [
    "Thursday, 25 December 1941",
    "",
    ""
  ],
  [
    "Friday, 26 December 1941",
    "",
    ""
  ],
  [
    "Saturday, 27 December 1941",
    "“Too tiddly, too good for us” — tiddly was Royal Navy slang for exceptionally smart, neat or shipshape. The Captain of the Base was therefore commenting favourably on Tui's appearance after the crew's preparations the previous day.",
    ""
  ],
  [
    "Sunday, 28 December 1941",
    "14 December 1941: revisit “Mrs Lee’s sisters”. The 28 December entry may indicate that the surname is actually Leo, and that Bill was visiting one particular sister and her son.",
    ""
  ],
  [
    "Monday, 29 December 1941",
    "",
    ""
  ],
  [
    "Tuesday, 30 December 1941",
    "",
    ""
  ],
  [
    "Wednesday, 31 December 1941",
    "Sixteen bells — particularly interesting. Ordinarily a ship's bell followed an eight-bell watch cycle, so sixteen bells was exceptional. Sixteen bells at midnight is a Royal Navy New Year tradition, with sixteen strokes marking the passing of the old year and arrival of the new. Bill's wording indicates Tui observed that naval custom.",
    ""
  ],
  [
    "Thursday, 1 January 1942",
    "Victoria League — this identification fits extremely well. The Victoria League specifically provided hospitality for servicemen from across the British Empire/Commonwealth. During the Second World War it provided Commonwealth servicemen in Britain with about 1.25 million beds and four million meals; it also had a history of operating clubs and hostels in Edinburgh. Bill, as a New Zealand serviceman, was exactly the clientele it served.\n\nPalais de Danse — we can now identify this venue confidently. It was the Palais de Danse at Fountainbridge, Edinburgh. The large ballroom had opened there in 1920 and was one of Edinburgh's major dance venues. From the 1930s it was particularly popular and could accommodate crowds of around 900 on its large sprung dance floor. It also had a revolving stage allowing bands to change without interrupting the dancing.",
    ""
  ],
  [
    "Friday, 2 January 1942",
    "",
    ""
  ],
  [
    "Saturday, 3 January 1942",
    "HMS Neptune — the New Zealand-crewed cruiser Neptune was lost in the Mediterranean during the night of 18–19 December 1941, after entering an Italian minefield off Tripoli. She struck multiple mines and sank with catastrophic loss of life; only one man survived. The loss had particular significance for New Zealand because 150 New Zealanders were among those killed. Bill recording it on 3 January likely marks when the news reached him rather than the date of the sinking.",
    ""
  ],
  [
    "Sunday, 4 January 1942",
    "",
    ""
  ],
  [
    "Monday, 5 January 1942",
    "",
    ""
  ],
  [
    "Tuesday, 6 January 1942",
    "",
    ""
  ],
  [
    "Wednesday, 7 January 1942",
    "",
    ""
  ],
  [
    "Thursday, 8 January 1942",
    "",
    ""
  ],
  [
    "Friday, 9 January 1942",
    "",
    ""
  ],
  [
    "Saturday, 10 January 1942",
    "",
    ""
  ],
  [
    "Sunday, 11 January 1942",
    "",
    ""
  ],
  [
    "Monday, 12 January 1942",
    "",
    ""
  ],
  [
    "Tuesday, 13 January 1942",
    "",
    ""
  ],
  [
    "Wednesday, 14 January 1942",
    "M.L. — almost certainly Motor Launch. Motor launches were extensively used in coastal and anti-submarine work. The wording “Submarine attacked us (practice) and M.L.” most naturally means that the exercise submarine attacked both Tui and a motor launch participating in the exercise.\n\nThe “Jimmy” — naval slang for the First Lieutenant, responsible for much of the ship's day-to-day organisation and discipline. Bill had already complained on 3 January that the new Jimmy was “a fair cow for work.” This entry confirms that his opinion had not improved.",
    ""
  ],
  [
    "Thursday, 15 January 1942",
    "",
    ""
  ],
  [
    "Friday, 16 January 1942",
    "",
    ""
  ],
  [
    "Saturday, 17 January 1942",
    "Lord Haw-Haw was the nickname given in Britain to English-speaking broadcasters who transmitted Nazi propaganda from Germany during the Second World War. The name became particularly associated with William Joyce, a British fascist who broadcast regularly from Germany. His programmes, usually introduced as “Germany Calling,” mixed war news with propaganda intended to undermine British morale. Despite this, many British and Commonwealth servicemen listened out of curiosity and entertainment, often treating Joyce with ridicule rather than taking his broadcasts seriously.",
    ""
  ],
  [
    "Sunday, 18 January 1942",
    "",
    ""
  ],
  [
    "Monday, 19 January 1942",
    "",
    ""
  ],
  [
    "Tuesday, 20 January 1942",
    "",
    ""
  ],
  [
    "Wednesday, 21 January 1942",
    "",
    ""
  ],
  [
    "Thursday, 22 January 1942",
    "",
    ""
  ],
  [
    "Friday, 23 January 1942",
    "",
    ""
  ],
  [
    "Saturday, 24 January 1942",
    "",
    ""
  ],
  [
    "Sunday, 25 January 1942",
    "",
    ""
  ],
  [
    "Monday, 26 January 1942",
    "",
    ""
  ],
  [
    "Tuesday, 27 January 1942",
    "Locarno Dance Hall — the Locarno Ballroom on Sauchiehall Street, Glasgow, opened in 1926 in the former Charing Cross Electric Theatre. It was regarded as one of Glasgow's leading dance venues and became particularly popular with servicemen during the Second World War. Bill's enthusiastic account of having a “swell time,” successfully “clicking” with a girl and not returning to his digs until 2 a.m. fits the Locarno's wartime role as one of the city's major social venues.\n\nLt-Cdr J. G. Hilliard — John George “Jack” Hilliard (1908– ), RNZNVR, Tui's first commanding officer. Hilliard had served in Britain since 1940 and previously commanded the minesweeping trawler HMS Blackthorn on Channel convoy duties. On 27 January his arrival aboard coincided with the crew learning that Tui would remain for approximately another month while waiting for other ships and undertaking convoy work.",
    "https://navymuseum.co.nz/uncategorised/jack-hilliard/, https://theglasgowstory.com/image/?inum=TGSA00884"
  ],
  [
    "Wednesday, 28 January 1942",
    "Oxford Hall → Oxford Galleries: Bill's “Oxford Hall” is almost certainly the Oxford Galleries, the major Newcastle dance hall on New Bridge Street. Newcastle's Historic Environment Record identifies it specifically as a dance hall built by City Amusements in the 1920s.",
    ""
  ],
  [
    "Thursday, 29 January 1942",
    "Vickers-Armstrongs munitions works — almost certainly the vast Vickers-Armstrongs Elswick Works in Newcastle upon Tyne, one of Britain's major armaments manufacturing complexes. During the Second World War the works manufactured munitions and heavy weaponry, including mortar bombs and naval guns.\n\nNewcastle Brewery — almost certainly Newcastle Breweries Ltd's Tyne Brewery at Corporation Street/Bath Lane. Founded in 1870 and operated by Newcastle Breweries from 1890, it was a substantial brewing and bottling complex by 1942. It was also the brewery where Newcastle Brown Ale, introduced in 1927, was produced.",
    ""
  ],
  [
    "Friday, 30 January 1942",
    "Crow's Nest pub — almost certainly the Crow's Nest Hotel at 137 Percy Street, Newcastle upon Tyne, a long-established city-centre public house. The present building dates from 1902, although a Crow's Nest had existed on Percy Street since at least the mid-19th century.",
    ""
  ],
  [
    "Saturday, 31 January 1942",
    "WAAF — Women's Auxiliary Air Force, established in June 1939 to serve alongside the RAF. Its members undertook a wide range of wartime ground duties including administration, communications, meteorology and maintenance.\n\nNAAFI — Navy, Army and Air Force Institutes, an organisation providing canteens, shops, clubs and recreational facilities for British and Commonwealth service personnel.\n\nYMCA — Young Men's Christian Association, which operated hostels, canteens and recreational facilities for servicemen throughout Britain during the war. Bill was unable to obtain a bed at the London YMCA but was able to leave his baggage there.\n\nParamount Dance Hall — the Paramount on Tottenham Court Road, London, a major Mecca dance hall and one of London's prominent wartime dancing venues. It was already well established before the war and hosted Britain's first high-profile jitterbug competition in November 1939. During the 1940s it became known for swing and jitterbug dancing and attracted a diverse wartime clientele.",
    ""
  ],
  [
    "Sunday, 1 February 1942",
    "U.J.C. — Union Jack Club, a large servicemen's club and residential establishment beside Waterloo Station. It was specifically established to provide club facilities and inexpensive accommodation for enlisted servicemen. By 1939 it had 1,018 beds. \n\nNew Zealand Forces Club — 4–6 Charing Cross Road, near Leicester Square, opened in August 1940 as a London club for New Zealand servicemen. It had opened in August 1940 and became a central meeting and welfare point for New Zealand servicemen in London. It provided meals and a social meeting place rather than sleeping accommodation. \n\nWrens — members of the Women's Royal Naval Service (WRNS). The British WAAF had been established in June 1939 to serve alongside the RAF. By 1942 its members were undertaking a very broad range of duties, including administration, communications, meteorology, maintenance and numerous other ground roles. Eventually more than a quarter of a million women served in the organisation.",
    ""
  ],
  [
    "Monday, 2 February 1942",
    "",
    ""
  ],
  [
    "Tuesday, 3 February 1942",
    "Crossley Motors: Crossley Motors was a major Manchester engineering and vehicle manufacturer. During the Second World War its production was heavily directed towards the war effort, including military vehicles and aircraft-related manufacturing.\n\nAvro Anson: The Avro Anson was a British twin-engined aircraft originally developed for maritime reconnaissance. By the war it was produced in very large numbers and became particularly important as a training aircraft for aircrew under the British Commonwealth Air Training Plan.\n\nBelle Vue: Belle Vue in Manchester was a large and well-known entertainment complex, with amusement attractions, gardens, sporting facilities, dance halls and other entertainment.",
    ""
  ],
  [
    "Wednesday, 4 February 1942",
    "Manchester to Glasgow: The journey took approximately 8 hours 50 minutes, considerably longer than normal peacetime services. Wartime rail travel was frequently slowed by heavy military and freight traffic, altered timetables and operational priorities.",
    ""
  ],
  [
    "Thursday, 5 February 1942",
    "Paramount Theatre: The Paramount in Glasgow was a large cinema on Renfield Street, opened in 1934. It later became the Odeon.\n\nUsherettes: Female cinema attendants who showed patrons to their seats and performed other front-of-house duties. Bill evidently enjoyed their company and arranged a couple of dates.",
    ""
  ],
  [
    "Friday, 6 February 1942",
    "G.M. duties: Almost certainly General Mess duties, routine shipboard work associated with the mess and domestic duties aboard ship.",
    ""
  ],
  [
    "Saturday, 7 February 1942",
    "",
    ""
  ],
  [
    "Sunday, 8 February 1942",
    "",
    ""
  ],
  [
    "Monday, 9 February 1942",
    "",
    ""
  ],
  [
    "Tuesday, 10 February 1942",
    "",
    ""
  ],
  [
    "Wednesday, 11 February 1942",
    "French corvettes: Greenock was an important base for the Free French Naval Forces, including six Flower-class corvettes employed on North Atlantic convoy escort: Aconit, Alysse, Lobelia, Mimosa, Renoncule and Roselys. Remarkably, Alysse had been torpedoed by U-654 while escorting convoy ON-60 on 9 February 1942, only two days before this entry, with 36 of her crew killed. This left five surviving corvettes in the group—the same number Bill saw alongside Tui. These may therefore have been Aconit, Lobelia, Mimosa, Renoncule and Roselys, although their individual presence alongside Tui on 11 February has not yet been confirmed",
    "https://www.1dfl-le-blog.fr/2017/09/14/les-forces-navales-francaises-libres-en-ecosse-1946-2016-a131662512/"
  ],
  [
    "Thursday, 12 February 1942",
    "Three German submarines: Bill heard that three German submarines had been destroyed while attempting to enter the Clyde. No corresponding action has been found in the surviving operational record, and there is no evidence that three U-boats were destroyed in the Clyde at this time. The story was therefore almost certainly a wartime rumour circulating among the ships and naval establishments in the area. Bill's wording—“Heard 3 German Subs destroyed trying to enter Clyde”—also suggests that he was repeating information he had received rather than describing an event known to him firsthand.",
    ""
  ],
  [
    "Friday, 13 February 1942",
    "",
    ""
  ],
  [
    "Saturday, 14 February 1942",
    "Queen's Hotel: Probably the Queen's Hotel on East Clyde Street, Helensburgh, a prominent seafront hotel overlooking the Clyde. Originally established as the Baths Inn by steamship pioneer Henry Bell and his wife Margaret in the early nineteenth century, it later became the Queen's Hotel and was still operating during the Second World War. Its location on the Clyde makes it a plausible destination for Bill while ashore, although the identification is not yet certain.",
    "https://www.helensburgh-heritage.co.uk/index.php?Itemid=549&catid=10032&id=952%3Agaps-in-hotel-history&option=com_content&view=article"
  ],
  [
    "Sunday, 15 February 1942",
    "“Pipe down”: A naval pipe or order marking the end of work or the beginning of a period when the men were released from routine duties. Here it appears to have marked the point at which Bill was able to go ashore.\n\nMillion Dollar Baby: A 1941 Warner Bros romantic comedy starring Priscilla Lane, Jeffrey Lynn and Ronald Reagan. The handwriting appears to give the title as “Million Dollar Babe/Baby”. Its position immediately after Bill meets Doris strongly suggests that this was the film they saw together rather than a nickname for Doris.\n\nAllied Seamen's Rest: Probably a reference to the wartime Recreation Centre for Allied Seamen at 297 Argyle Street, Glasgow, which provided facilities for the large numbers of Allied and foreign sailors passing through the Clyde. Glasgow also had several other wartime seamen's clubs and hostels, so the identification cannot yet be considered certain. Contemporary reports note that accommodation for seamen was particularly scarce at weekends.",
    "https://en.wikipedia.org/wiki/Million_Dollar_Baby_(1941_film)"
  ],
  [
    "Monday, 16 February 1942",
    "“Bioscope”: An older term for a cinema or motion-picture show. Here it appears that Jim and Lynn left the pictures early.",
    ""
  ],
  [
    "Tuesday, 17 February 1942",
    "",
    ""
  ],
  [
    "Wednesday, 18 February 1942",
    "Grant Arms: Probably the Grant Arms on Argyle Street in central Glasgow, close to Glasgow Central Station. A public house had occupied the site since 1864, although it traded under several different names over its history. Its location fits Bill's evening particularly well, as he later caught the 11 p.m. train.",
    "https://www.oldglasgowpubs.co.uk/grantarms.html"
  ],
  [
    "Thursday, 19 February 1942",
    "“Pongo”: British naval slang for a soldier, particularly a member of the Army. In this context, Bill appears to be identifying Bert’s assailant as a soldier.",
    ""
  ],
  [
    "Friday, 20 February 1942",
    "Bill Jordan: William Joseph Jordan (1879–1959) was New Zealand’s High Commissioner in London from 1936 to 1951. A former First World War soldier and Labour MP, he took an active interest in New Zealand servicemen stationed in Britain during the Second World War and regularly visited New Zealand units and personnel. Bill’s reference to Jordan visiting Tui before leaving for home is consistent with this wartime role.",
    ""
  ],
  [
    "Saturday, 21 February 1942",
    "",
    ""
  ],
  [
    "Sunday, 22 February 1942",
    "",
    ""
  ],
  [
    "Monday, 23 February 1942",
    "",
    ""
  ],
  [
    "Tuesday, 24 February 1942",
    "Craigburn: A dance hall at Gourock, adjoining Greenock on the Clyde. Later recollections describe Craigburn as a purpose-built dance hall with a sprung floor that attracted dancers from the surrounding area. The location fits Bill's movements while the ship was based in the Greenock area.",
    ""
  ],
  [
    "Wednesday, 25 February 1942",
    "Coxswain: A senior rating responsible for discipline and the day-to-day organisation of the ship’s lower deck. Bill’s reaction suggests that unexpectedly finding himself beside the coxswain while he had “sneaked ashore” was uncomfortable, although he gives no further explanation.",
    ""
  ],
  [
    "Thursday, 26 February 1942",
    "Lt Palmer",
    "https://navymuseum.co.nz/explore/by-collections/oral-histories/palmer-cdr-c-g-d-s-o-m-i-d/"
  ],
  [
    "Friday, 27 February 1942",
    "Rothesay Bay: A sheltered bay off the town of Rothesay on the Isle of Bute, in the Firth of Clyde, about 30 miles west of Glasgow. During the Second World War the Clyde was a major naval training and assembly area, and Rothesay Bay provided a convenient anchorage for vessels operating in the surrounding waters.",
    ""
  ],
  [
    "Saturday, 28 February 1942",
    "",
    ""
  ],
  [
    "Sunday, 1 March 1942",
    "",
    ""
  ],
  [
    "Monday, 2 March 1942",
    "Minesweeping davits: Davits were projecting arms used to support, deploy and recover equipment over the side of a vessel. The minesweeping davits formed part of the gear used in handling the wires and associated equipment required for sweeping mines.\n\nAndy Hardy Steps Out: Bill is referring to Life Begins for Andy Hardy (1941), an MGM comedy-drama starring Mickey Rooney as Andy Hardy. The British release title was Andy Hardy Steps Out.",
    ""
  ],
  [
    "Tuesday, 3 March 1942",
    "",
    ""
  ],
  [
    "Wednesday, 4 March 1942",
    "",
    ""
  ],
  [
    "Thursday, 5 March 1942",
    "",
    ""
  ],
  [
    "Friday, 6 March 1942",
    "",
    ""
  ],
  [
    "Saturday, 7 March 1942",
    "",
    ""
  ],
  [
    "Sunday, 8 March 1942",
    "RMS Rangitata: A 16,737-ton New Zealand Shipping Company passenger liner, completed in 1929 for the Britain–New Zealand service. During the Second World War she was requisitioned for wartime transport duties and carried troops as well as passengers and cargo. Bill encountered Rangitata as part of the convoy leaving the Clyde on 8 March 1942.",
    "https://en.wikipedia.org/wiki/RMS_Rangitata"
  ],
  [
    "Monday, 9 March 1942",
    "Five New Zealand ships",
    ""
  ],
  [
    "Tuesday, 10 March 1942",
    "",
    ""
  ],
  [
    "Wednesday, 11 March 1942",
    "Aircraft carrier Glorious: Bill identifies the passing aircraft carrier as Glorious. This cannot have been HMS Glorious, which had been sunk by the German battlecruisers Scharnhorst and Gneisenau on 8 June 1940. Either Bill misidentified the carrier or the name has been misread; the entry is retained as he wrote it.glorious - this is weird because the Glorious was sunk 8 June 1940 in the North Sea",
    "https://en.wikipedia.org/wiki/HMS_Glorious"
  ],
  [
    "Thursday, 12 March 1942",
    "Q.M.: Quartermaster. A naval rating assigned responsibility for duties associated with the ship’s helm, gangway and watchkeeping. Bert was apparently serving as Quartermaster on this occasion and was not enjoying the duty.\n\nSeven Seas Club: A wartime seamen's club in Glasgow providing inexpensive accommodation and recreation for visiting sailors. A 1941 government report recorded that the club had 120 beds and a restaurant and had been established since the outbreak of the war. Bill was lucky to secure its last available bed after his night out in Glasgow.",
    "https://moidigital.ac.uk/reports/home-intelligence-reports/home-intelligence-weekly-reports-inf-1-292-1-1/idm140465725986288/"
  ],
  [
    "Friday, 13 March 1942",
    "",
    ""
  ],
  [
    "Saturday, 14 March 1942",
    "",
    ""
  ],
  [
    "Sunday, 15 March 1942",
    "Convoy - On 15 March 1942 Sanda left Greenock with her sister ships HMNZS Inchkeith, Killegray, Scarba. They were accompanied by HMNZS Tui. The next day they joined a convoy (ONS76) sailing west to Canada as escorts. After leaving the Convoy as it approached St Johns Newfoundland, the flotilla arrived at Bermuda on 8 April 1942",
    ""
  ],
  [
    "Monday, 16 March 1942",
    "Submarine attack: While proceeding towards the convoy rendezvous on 16 March, Bill recorded that a submarine was attacked and that the search for it was still continuing when he went off watch. He did not know whether it had been sunk or escaped. No identification of the submarine has been established.",
    ""
  ],
  [
    "Tuesday, 17 March 1942",
    "",
    ""
  ],
  [
    "Wednesday, 18 March 1942",
    "",
    ""
  ],
  [
    "Thursday, 19 March 1942",
    "“Green ones”: Sailors' expression for substantial seas or waves breaking over the ship. Bill's reference to several coming over the bows shows that conditions were rough enough for water to be breaking across the forward part of the vessel.",
    ""
  ],
  [
    "Friday, 20 March 1942",
    "",
    ""
  ],
  [
    "Saturday, 21 March 1942",
    "Taking in seas: Seawater was repeatedly coming aboard as the ship drove through the heavy Atlantic weather. Bill’s description of leaking decks, wet accommodation and six inches of water on the upper deck shows how thoroughly the rough conditions were affecting the small vessel.",
    ""
  ],
  [
    "Sunday, 22 March 1942",
    "",
    ""
  ],
  [
    "Monday, 23 March 1942",
    "",
    ""
  ],
  [
    "Tuesday, 24 March 1942",
    "Water on board: Bill’s comment that the water was “no good,” together with three men becoming sick, suggests a problem with the ship’s fresh-water supply. This may be connected with the galley water tank that burst the previous day, although Bill does not explicitly link the two events.",
    ""
  ],
  [
    "Wednesday, 25 March 1942",
    "“Being checked by submarine”: Bill understood that a submarine was watching or shadowing them, prompting extra lookouts to be stationed. German records confirm that U-507 had located and attempted to attack Convoy ONS 76 earlier in the crossing, on 18–19 March, but no German submarine has yet been identified as shadowing Bill’s ships on 25 March. The warning may therefore have resulted from a suspected contact or other indication of submarine activity.",
    ""
  ],
  [
    "Thursday, 26 March 1942",
    "Leaving the convoy: The five New Zealand ships — Tui, Sanda, Inchkeith, Killegray and Scarba — detached from Convoy ONS 76 on 26 March and continued independently towards St John’s, Newfoundland.",
    ""
  ],
  [
    "Friday, 27 March 1942",
    "",
    ""
  ],
  [
    "Saturday, 28 March 1942",
    "English silver: British silver coinage was apparently accepted locally, useful to the New Zealand sailors who arrived without Canadian or Newfoundland currency. Newfoundland was still a separate Dominion at this time and did not join Canada until 1949.",
    ""
  ],
  [
    "Sunday, 29 March 1942",
    "",
    ""
  ],
  [
    "Monday, 30 March 1942",
    "",
    ""
  ],
  [
    "Tuesday, 31 March 1942",
    "Leading Seaman: The entry appears to say Bill had been made Leading Seaman, an advancement from Able Seaman. This is worth checking against his service record.\n\nThree submarines: Bill’s comment that he had heard “3 subs were chasing us across” can be closely matched to German records of the attempt to attack his convoy, ON/ONS 76. The five New Zealand ships — Tui, Sanda, Inchkeith, Killegray and Scarba — had joined the westbound convoy on 16 March and remained with it until detaching for St John’s on 26 March.\n\nThe first submarine incident in Bill’s journal occurred on 16 March, while the convoy was still assembling. He wrote that they had “attacked submarine” and did not know whether it had been sunk or escaped; when he went off watch the hunt was still continuing. This contact cannot presently be identified with U-507, because the German record does not place U-507 in contact with ON/ONS 76 until two days later. It is therefore best treated as a separate suspected submarine contact.\n\nOn 18 March, the same day Bill wrote that “more depth charges [were] dropped this morning,” U-507, commanded by Kapitänleutnant Harro Schacht, sighted ON/ONS 76. U-507 was itself making a passage towards France. After reporting the convoy, it attempted to maintain contact while German U-boat command directed U-506, U-593 and U-753 towards it. Thus there really were three additional U-boats being sent to converge on Bill’s convoy, which provides a particularly strong explanation for the information Bill heard at St John’s that “3 subs were chasing us across.”\n\nDuring 18–20 March, U-507 was unable to hold the convoy continuously long enough for the other three submarines to concentrate against it. Nevertheless, U-507 did make an attack on 19 March. German records state that the attack was made from excessive range and was unsuccessful; other German records indicate that its torpedoes either detonated prematurely or failed to detonate. No merchant ship in ON/ONS 76 was sunk.\n\nThe timing corresponds closely with Bill’s journal. On 19 March he described the heavy Atlantic swell and an aircraft identification scare. On 20 March he wrote that “more depth charges [were] dropped last night.” These depth charges therefore fall within the same period in which U-507 was known to be attempting to attack and maintain contact with the convoy. It cannot be established from the available records that the depth charges Bill heard were specifically directed at U-507, but the chronological connection is strong.\n\nThe German U-boat command diary shows that the hunt for the convoy continued. On 19 March, U-506, U-507 and U-753 were ordered to search on separate west and south-west courses, while U-593 was also involved in the operation. The four boats were ordered to continue searching until after dark on 20 March. On 20 March, with the convoy still not relocated, the operation was broken off: U-506, U-507 and U-753 resumed their passages towards western France, while U-593 remained in its previous operational area. The German diary recorded no success against the convoy.\n\nThis means Bill’s later entries on 25 March — “being checked by submarine, extra look-out stationed” — and 26 March — “last submarine” — should not automatically be attributed to U-507, U-506, U-593 or U-753. The documented German attempt to concentrate those boats against ON/ONS 76 had ended by 20 March. Bill’s later warnings may have resulted from other suspected contacts, intelligence warnings or submarine alarms aboard the convoy.\n\nOn 26 March, Tui, Sanda, Inchkeith, Killegray and Scarba detached from ON/ONS 76 and proceeded independently towards St John’s, exactly as Bill wrote that day. They reached St John’s on 28 March.\n\nBill’s additional statement on 31 March, “got one of them,” does not appear to have been correct. None of the four submarines documented in the German operation against ON/ONS 76 — U-507, U-506, U-593 or U-753 — was destroyed during this encounter. The German records explicitly record the operation as unsuccessful. Bill was therefore probably repeating information that had reached the crews after their arrival at St John’s, rather than reporting a confirmed sinking.\n\nThat gives the reader a useful timeline:\n\n16 Mar — Bill's unidentified submarine attack/hunt\n18 Mar — U-507 finds the convoy; Bill hears more depth charges\n18–19 Mar — U-506, U-593 and U-753 ordered towards the convoy\n19 Mar — U-507 attacks unsuccessfully\nNight 19/20 Mar — Bill hears more depth charges\n20 Mar — German search continues, then is abandoned\n25 Mar — Bill reports another submarine warning; not established as one of these boats\n26 Mar — five NZ ships detach for St John’s\n28 Mar — Bill reaches St John’s\n31 Mar — Bill learns that “3 subs were chasing us across” and hears the incorrect report that one had been destroyed.",
    ""
  ],
  [
    "Wednesday, 1 April 1942",
    "",
    ""
  ],
  [
    "Thursday, 2 April 1942",
    "",
    ""
  ],
  [
    "Friday, 3 April 1942",
    "",
    ""
  ],
  [
    "Saturday, 4 April 1942",
    "Temperatures: Bill gives both air and sea temperatures, apparently in Fahrenheit. His morning readings of 35°F (1.7°C) air and 32°F (0°C) water show that they were still in extremely cold conditions after leaving Newfoundland. Later the air had risen to 42°F (5.6°C) and the sea to 34°F (1.1°C). The gradual rise fits their progress south from St John’s towards Bermuda.",
    ""
  ],
  [
    "Sunday, 5 April 1942",
    "",
    ""
  ],
  [
    "Monday, 6 April 1942",
    "Wreckage and dinghy: Bill's description may relate to the British merchant ship Loch Don, sunk by U-202 at 23.14 on 1 April 1942, at 37°05′N, 61°40′W, about 500 nautical miles north-northeast of Bermuda. Three of her 47 crew were killed and 44 survived. Contemporary accounts confirm that the sinking left wreckage and lifeboats in the water. Bill's ships left St John's on 3 April and were steaming south towards Bermuda; after entering the Gulf Stream on 5 April, Bill saw floating wreckage and a dinghy on 6 April and concluded that a ship had gone down. The date and position of the Loch Don sinking make her a strong candidate for the wreckage he encountered, although without a recorded position for Bill's ships on 6 April the identification cannot be confirmed.",
    "https://uboat.net/allies/merchants/ship/1492.html"
  ],
  [
    "Tuesday, 7 April 1942",
    "“Swatting up”: British and Commonwealth slang for studying intensively in preparation for an examination. The examination was probably connected with Bill’s advancement in naval rating. His entry of 31 March appears to say that he had been made Leading Seaman, making the reference to an examination particularly significant. The exact examination should remain unidentified until further evidence appears in the journal or his service record.",
    ""
  ],
  [
    "Wednesday, 8 April 1942",
    "Pilot: A harbour pilot is an experienced local mariner who boards an arriving ship and guides it safely into or out of port. Pilots have detailed knowledge of local channels, reefs, shoals, tides and currents that the ship’s own officers may not possess. The ship remains under the command of its captain, but the pilot advises on—or directs—the navigation through the difficult local waters. At Bermuda, this was particularly important because the islands are surrounded by extensive reefs and vessels had to follow defined channels. Bill appears to record that a pilot came aboard at St George’s and took them through to Somerset Dockyard.",
    ""
  ],
  [
    "Thursday, 9 April 1942",
    "Trapper Dan: A named companion who went ashore with Bill. Bill has referred to Trapper Dan earlier in the journal, but his full identity has not yet been established. This entry should be added to his eventual biography as evidence that he was still travelling with Bill during the Bermuda stage of the voyage.",
    ""
  ],
  [
    "Friday, 10 April 1942",
    "HMS Dorsetshire and HMS Cornwall: The news was extremely recent. The two Royal Navy County-class heavy cruisers had been sunk only five days earlier, on 5 April 1942, during the Japanese Indian Ocean raid. They had left Colombo on the evening of 4 April to join Admiral Sir James Somerville’s Eastern Fleet. On the afternoon of 5 April they were found by Japanese aircraft and attacked by more than fifty carrier-based dive-bombers. Both cruisers were overwhelmed and sank within minutes.\n\nThe timing is particularly useful in Bill’s journal. On 5 April, while Tui was entering the Gulf Stream on the other side of the world, Dorsetshire and Cornwall were being sunk in the Indian Ocean. By 10 April, after Bill had reached Bermuda, news of their loss had reached the New Zealand sailors. His immediate reaction — “hell when are we going to retaliate?” — shows how strongly the rapid Japanese advances and Royal Navy losses were being felt even among sailors serving in the Atlantic.\n\nHMS Hermes: Bill’s next reference appears to be to the aircraft carrier HMS Hermes. This news was even fresher. Hermes, the Royal Navy’s first purpose-built aircraft carrier, was sunk by Japanese carrier aircraft off Ceylon on 9 April 1942 — only the day before Bill wrote this entry. The fact that Bill had already heard about the loss in Bermuda on 10 April shows how rapidly major wartime naval news was circulating.\n\nThese losses were all part of the Japanese Indian Ocean raid of March–April 1942, during which Vice-Admiral Chūichi Nagumo’s carrier force struck British bases and shipping around Ceylon and attempted to destroy elements of the Eastern Fleet. The raid cost the British the carrier Hermes, the heavy cruisers Dorsetshire and Cornwall, other warships and numerous merchant vessels. Bill was therefore reacting not to isolated sinkings, but to a major Japanese offensive against British naval power in the Indian Ocean.",
    "https://en.wikipedia.org/wiki/HMS_Dorsetshire_(40); https://en.wikipedia.org/wiki/HMS_Cornwall_(56); https://en.wikipedia.org/wiki/HMS_Hermes_(95)"
  ],
  [
    "Saturday, 11 April 1942",
    "",
    ""
  ],
  [
    "Sunday, 12 April 1942",
    "Bert in hospital: Bert’s injury had persisted for several days. On 10 April, Bill wrote that Bert’s ankle was “about the same” and that he was raving to get ashore. By the morning of 12 April, he was in hospital having his foot X-rayed. The journal has not yet explained how the injury occurred or whether the X-ray revealed a fracture.",
    ""
  ],
  [
    "Monday, 13 April 1942",
    "",
    ""
  ],
  [
    "Tuesday, 14 April 1942",
    "",
    ""
  ],
  [
    "Wednesday, 15 April 1942",
    "USS Savannah: The “Savanah” was almost certainly the American light cruiser USS Savannah (CL-42). She visited Auckland from 17–20 March 1941 with USS Brooklyn and four American destroyers, when large numbers of the crews were given shore leave. Bill says that Trapper Dan had met some of Savannah’s sailors in Auckland. By April 1942 Savannah was serving in the Atlantic and using Bermuda as a base, explaining how Trapper encountered some of the same American sailors there on 15 April.",
    ""
  ],
  [
    "Thursday, 16 April 1942",
    "",
    ""
  ],
  [
    "Friday, 17 April 1942",
    "",
    ""
  ],
  [
    "Saturday, 18 April 1942",
    "",
    ""
  ],
  [
    "Sunday, 19 April 1942",
    "",
    ""
  ],
  [
    "Monday, 20 April 1942",
    "",
    ""
  ],
  [
    "Tuesday, 21 April 1942",
    "",
    ""
  ],
  [
    "Wednesday, 22 April 1942",
    "Lieutenant Frankham: Probably James Clayton Frankham of Auckland, one of the New Zealand naval candidates sent overseas in early 1941 for service with the Royal Navy under Scheme A. He appears here aboard Tui during the voyage from Bermuda to Jamaica, possibly as one of the additional passengers Bill mentioned on 21 April.\n\n“Pinged sub”: Ping was naval slang associated with ASDIC, the British underwater detection system later generally known as sonar. An ASDIC transmitter sent a sound pulse through the water; an underwater object could return an echo, or “ping”, allowing an operator to estimate its bearing and range. Bill’s wording therefore indicates that the ship obtained an ASDIC contact believed to be a submarine at about 11 p.m. It does not by itself establish that an enemy submarine was actually present.",
    ""
  ],
  [
    "Thursday, 23 April 1942",
    "",
    ""
  ],
  [
    "Friday, 24 April 1942",
    "Submarine activity: Bill’s comment that the waters were “infested with subs” was well founded. German U-boats were operating heavily around the Bahamas and approaches to the Caribbean in the spring of 1942. Only four days earlier, on 20 April, U-154 had sunk the merchant ship Vineland about 90 miles north of Mayaguana and North Caicos.",
    ""
  ],
  [
    "Saturday, 25 April 1942",
    "Anzac Day: 25 April commemorated the landing of the Australian and New Zealand Army Corps at Gallipoli in 1915",
    ""
  ],
  [
    "Sunday, 26 April 1942",
    "During World War II, oiling a ship before going into harbor referred to the process of refueling and resupplying the ship with essential provisions such as food, water, and ammunition before entering a port or harbor. Ships needed to have enough fuel and supplies to complete their missions, and ports and harbors were often the only places where they could be resupplied. Therefore, it was crucial for ships to be fully stocked and fueled before entering a harbor to ensure that they had the necessary resources to continue their operations. Oil tankers would typically meet naval vessels at sea to transfer oil, fuel, and other supplies. This process was known as \"oiling\" or \"replenishing at sea.\" Once the ship had been resupplied, it could then proceed into the harbor to complete its mission or undergo repairs.\n\n“Blotto”: British and Commonwealth slang for very drunk. Some men from the other New Zealand ships had evidently wasted little time beginning their shore leave.",
    ""
  ],
  [
    "Monday, 27 April 1942",
    "“Bacchantes”: Literally, bacchante meant a female follower of Bacchus and, by extension, a drunken or riotous woman. Contemporary dictionaries defined it specifically as a female term associated with drinking and revelry. In Bill’s context—“visited local bacchantes did not indulge” and Bert later “went exploring for bacchantes”—he is almost certainly using it euphemistically for prostitutes or women available for sex. His statement that he “did not indulge” reinforces that interpretation.",
    ""
  ],
  [
    "Tuesday, 28 April 1942",
    "",
    ""
  ],
  [
    "Wednesday, 29 April 1942",
    "“1-3”: This is most naturally read as 1/3 — one shilling and threepence (1s 3d). Jamaica used Jamaican pounds, shillings and pence at this time, on the sterling system. One shilling and threepence was 15 pence in pre-decimal currency. If the original handwriting actually shows “1-3,” this was a conventional way of writing 1s 3d.",
    ""
  ],
  [
    "Thursday, 30 April 1942",
    "",
    ""
  ],
  [
    "Friday, 1 May 1942",
    "Southern Cross: The constellation Crux, one of the most familiar features of the southern sky and especially significant to New Zealanders. During the voyage from Jamaica towards Panama, Bill was far enough south for the Southern Cross to be visible low above the southern horizon. After more than a year away from New Zealand and many months in northern latitudes, seeing it again would have been a familiar sight associated with the Southern Hemisphere.",
    ""
  ],
  [
    "Saturday, 2 May 1942",
    "Sanda was coal-fired and normally capable of only 8.5–10 knots, whereas Tui was oil-fired and capable of around 13 knots. Thus if the five vessels were remaining together, a problem aboard Sanda could readily reduce the entire group's speed to Bill's reported six knots.",
    "https://navymuseum.co.nz/explore/by-collections/ships/sanda-isles-class-vessel/"
  ],
  [
    "Sunday, 3 May 1942",
    "",
    ""
  ],
  [
    "Monday, 4 May 1942",
    "Aircraft at Colón: The Panama Canal was of major strategic importance during the Second World War and was heavily defended. The United States maintained a substantial military and air presence in the Canal Zone, accounting for the large number of aircraft Bill noticed.",
    ""
  ],
  [
    "Tuesday, 5 May 1942",
    "",
    ""
  ],
  [
    "Wednesday, 6 May 1942",
    "",
    ""
  ],
  [
    "Thursday, 7 May 1942",
    "",
    ""
  ],
  [
    "Friday, 8 May 1942",
    "“Chocka”: Wartime Royal Navy slang meaning fed up or browned off. The contemporary 1943 dictionary Service Slang defines chocker as “the sailor’s way of saying he is fed up or browned off.” Bill's spelling chocka was another form of the same expression. His following remarks—that he would be glad to be drafted off the ship, wished he had stayed in England, and felt he had received a “not fair deal”—leave little doubt that this is the meaning he intended.",
    ""
  ],
  [
    "Saturday, 9 May 1942",
    "“People pro Nazi”: Bill evidently encountered—or formed the impression that he encountered—people in Panama with pro-Nazi sympathies. Such sympathies were not imaginary: former president Arnulfo Arias had been accused by contemporary American observers of pro-Axis leanings, and German commercial interests and some Nazi sympathisers were present in Panama before the United States entered the war. However, this should not be taken to mean that Panamanians generally were pro-Nazi. Arias had been removed from office in October 1941, and by May 1942 Panama was at war with Germany and cooperating closely with the United States in defending the Canal and suppressing Axis activity.\n\n“Great naval battle off Australia”: This can be identified confidently as the Battle of the Coral Sea, fought 4–8 May 1942 between Allied and Japanese naval forces northeast of Australia. The timing is particularly precise: the decisive carrier action had taken place only the previous day, 8 May, and newspapers in Australia and New Zealand were carrying reports of the battle on 9 May.\n\nThe battle centred on a Japanese attempt to capture Port Moresby in New Guinea by sea. Allied forces included the American aircraft carriers USS Lexington and USS Yorktown and a cruiser force containing HMAS Australia and HMAS Hobart. On 7 May Allied aircraft sank the Japanese light carrier Shōhō. On 8 May the opposing carrier forces struck each other without the surface fleets ever coming within sight of one another. Lexington was lost, while the Japanese carrier Shōkaku was badly damaged.\n\nAlthough early wartime reports greatly exaggerated Japanese losses, the strategically important result was that the planned seaborne invasion of Port Moresby was abandoned. The battle was also historically significant as the first major naval battle fought primarily by aircraft in which the opposing fleets did not directly sight one another.",
    "https://en.wikipedia.org/wiki/Battle_of_the_Coral_Sea#:~:text=The%20Battle%20of%20the%20Coral,the%20United%20States%20and%20Australia."
  ],
  [
    "Sunday, 10 May 1942",
    "",
    ""
  ],
  [
    "Monday, 11 May 1942",
    "",
    ""
  ],
  [
    "Tuesday, 12 May 1942",
    "Bert's Birthday",
    ""
  ],
  [
    "Wednesday, 13 May 1942",
    "",
    ""
  ],
  [
    "Thursday, 14 May 1942",
    "",
    ""
  ],
  [
    "Friday, 15 May 1942",
    "",
    ""
  ],
  [
    "Saturday, 16 May 1942",
    "Captain's rounds: A formal inspection of the ship by the commanding officer, generally accompanied by other officers or senior ratings. The inspection could cover the men's living spaces, mess decks and other parts of the vessel, checking cleanliness, order and the general condition of the ship.",
    ""
  ],
  [
    "Sunday, 17 May 1942",
    "",
    ""
  ],
  [
    "Monday, 18 May 1942",
    "",
    ""
  ],
  [
    "Tuesday, 19 May 1942",
    "",
    ""
  ],
  [
    "Wednesday, 20 May 1942",
    "",
    ""
  ],
  [
    "Thursday, 21 May 1942",
    "",
    ""
  ],
  [
    "Friday, 22 May 1942",
    "",
    ""
  ],
  [
    "Saturday, 23 May 1942",
    "Wardroom: The officers' mess and communal dining space aboard a naval vessel. Bill's wording suggests that the tuna he caught was taken to the wardroom, rather than being used in the ratings' mess.",
    ""
  ],
  [
    "Sunday, 24 May 1942",
    "",
    ""
  ],
  [
    "Monday, 25 May 1942",
    "",
    ""
  ],
  [
    "Tuesday, 26 May 1942",
    "Club Del Rio in San Pedro. The club was operating during this period and is documented both before and after Bill's May 1942 visit. It occupied the former Victoria Theatre on West 6th Street in San Pedro.\n\nC.P.O.'s mess: The Chief Petty Officers' mess, the separate mess and social space for Chief Petty Officers",
    ""
  ],
  [
    "Wednesday, 27 May 1942",
    "",
    ""
  ],
  [
    "Thursday, 28 May 1942",
    "",
    ""
  ],
  [
    "Friday, 29 May 1942",
    "",
    ""
  ],
  [
    "Saturday, 30 May 1942",
    "",
    ""
  ],
  [
    "Sunday, 31 May 1942",
    "",
    ""
  ],
  [
    "Monday, 1 June 1942",
    "",
    ""
  ],
  [
    "Tuesday, 2 June 1942",
    "",
    ""
  ],
  [
    "Wednesday, 3 June 1942",
    "",
    ""
  ],
  [
    "Thursday, 4 June 1942",
    "",
    ""
  ],
  [
    "Friday, 5 June 1942",
    "",
    ""
  ],
  [
    "Saturday, 6 June 1942",
    "",
    ""
  ],
  [
    "Sunday, 7 June 1942",
    "",
    ""
  ],
  [
    "Monday, 8 June 1942",
    "",
    ""
  ],
  [
    "Tuesday, 9 June 1942",
    "",
    ""
  ],
  [
    "Wednesday, 10 June 1942",
    "",
    ""
  ],
  [
    "Thursday, 11 June 1942",
    "",
    ""
  ],
  [
    "Friday, 12 June 1942",
    "“A.S.B.”: Meaning uncertain. Although anti-submarine bombs existed during the Second World War, contemporary British terminology normally called them A.S. bombs, and they were principally aircraft weapons. A.S.B. has not been established as the standard Royal Navy abbreviation for such a weapon, making that interpretation unlikely in this context. The initials may instead represent a shipboard duty, exercise or personal shorthand; further occurrences may resolve the meaning.",
    ""
  ],
  [
    "Saturday, 13 June 1942",
    "",
    ""
  ],
  [
    "Sunday, 14 June 1942",
    "",
    ""
  ],
  [
    "Monday, 15 June 1942",
    "",
    ""
  ],
  [
    "Tuesday, 16 June 1942",
    "",
    ""
  ],
  [
    "Wednesday, 17 June 1942",
    "“Crabs broke out”: Crabs is the common slang term for pubic lice (Pthirus pubis). Bill's wording indicates that an infestation had appeared among members of the ship's company. Close living quarters, shared bedding or clothing could facilitate their spread, although pubic lice are most commonly transmitted through close bodily or sexual contact.",
    ""
  ],
  [
    "Thursday, 18 June 1942",
    "",
    ""
  ],
  [
    "Friday, 19 June 1942",
    "",
    ""
  ],
  [
    "Saturday, 20 June 1942",
    "",
    ""
  ],
  [
    "Sunday, 21 June 1942",
    "",
    ""
  ],
  [
    "Monday, 22 June 1942",
    "Hit jetty – dented bows: Tui struck the coal jetty while entering or berthing, denting her bow. Bill does not indicate how serious the damage was or whether the strong wind contributed to the accident.\n\nPearl Harbor: Bill arrived only six and a half months after the Japanese attack of 7 December 1941. Much of the physical aftermath was therefore still visible around the harbour.\n\nUSS Arizona: Arizona remained where she had sunk during the attack, after the explosion of her forward magazines destroyed much of the ship.\n\nUSS Utah: Utah had capsized during the attack and remained lying on her side in Pearl Harbor.\n\nUSS West Virginia: West Virginia had been sunk at her berth during the attack but was refloated on 17 May 1942, only five weeks before Bill arrived. She was undergoing salvage and repair work at Pearl Harbor during his visit.\n\nCanteen leave: Bill's shore access was restricted to the canteen, rather than general leave around Honolulu.",
    ""
  ],
  [
    "Tuesday, 23 June 1942",
    "",
    ""
  ],
  [
    "Wednesday, 24 June 1942",
    "",
    ""
  ],
  [
    "Thursday, 25 June 1942",
    "USS Enterprise (CV-6): This is a particularly significant encounter. Enterprise had returned to Pearl Harbor on 15 June 1942, only ten days before Bill went aboard, following her central role in the Battle of Midway, 4–6 June. Her dive-bombers had taken part in the attacks that destroyed the Japanese carriers Kaga and Akagi and contributed to the destruction of Hiryū. Enterprise herself had escaped the battle undamaged.\n\nCoal yard: The coal-handling area at Pearl Harbor. This also fits Tui's movements around the coal jetty, which Bill had mentioned when the ship arrived on 22 June. Although Tui herself was oil-fired, the accompanying Isles-class trawlers—Sanda, Scarba, Killegray and Inchkeith—were coal-fired and required substantial coal supplies during the voyage.",
    ""
  ],
  [
    "Friday, 26 June 1942",
    "",
    ""
  ],
  [
    "Saturday, 27 June 1942",
    "",
    ""
  ],
  [
    "Sunday, 28 June 1942",
    "“Old man”: Bill's usual expression for the ship's commanding officer.\n\nTui's repairs: An independent Pearl Harbor Navy Yard war diary records that on 28 June 1942 HMNZS Tui “Completed repairs and departed.” This is particularly interesting following Bill's entry of 22 June, when the ship hit the coal jetty and dented her bows. The record confirms that repairs were undertaken during the Pearl Harbor stay, although it does not by itself establish that they were specifically repairs to the damaged bows.",
    ""
  ],
  [
    "Monday, 29 June 1942",
    "29 June — Bill: “Killegray blew boiler.”\n30 June — US Navy Yard: Killegray arrives at Berth 6 for main-engine, pump and other repairs.\n6 July — flotilla departs: Killegray cannot accompany them because of boiler trouble.\n9 August — Navy Yard: Killegray finally recorded “Completed.”\n\n“Killegray blew boiler”: This was a genuine machinery casualty rather than routine boiler maintenance. Bill wrote this on 29 June, and the Pearl Harbor Navy Yard diary records HMNZS Killegray arriving at Berth 6 the following day for repairs to her main engine, pumps and other machinery. The fault proved serious enough that Killegray was unable to leave Pearl Harbor with the other New Zealand ships on 6 July; the RNZN Museum specifically attributes this to boiler trouble. Navy Yard records did not list her repairs as completed until 9 August 1942. The exact component that failed has not yet been identified.",
    ""
  ],
  [
    "Tuesday, 30 June 1942",
    "“San-Pan”: Almost certainly sampan, also historically written sanpan, rather than the name of a ship. Honolulu had a substantial fleet of locally built Japanese-style fishing sampans, some 75–90 feet long or more. After the attack on Pearl Harbor, many were detained or requisitioned, and some were converted for US patrol duties. Bill had apparently already visited the same or another sampan on 26 June, and on 30 June he had supper aboard one. The particular vessel has not yet been identified.",
    ""
  ],
  [
    "Wednesday, 1 July 1942",
    "Rewritten entry: Bill originally began a substantially longer entry for 1 July on the preceding page, but crossed out the entire entry and started the date again on the next page. The crossed-out version contains additional details about his day but has not been incorporated into the narrative because Bill deliberately discarded that version.\n\n--Washed down ship was under soot all over again by evening. Did haircutting loaned cash only one with money. Went to Honolulu bought gear. Had few wets photos taken. Be glad when we leave met chaps off ship just returned from Auckland. Hear shortage of cigs, matches to - must stock up-- crossed out section.",
    ""
  ],
  [
    "Thursday, 2 July 1942",
    "",
    ""
  ],
  [
    "Friday, 3 July 1942",
    "",
    ""
  ],
  [
    "Saturday, 4 July 1942",
    "A pay book was the sailor's personal record/document associated with his naval pay. In this context, forgetting it seems to have caused Bill difficulty when trying to get back into the naval area or aboard his ship.",
    ""
  ],
  [
    "Sunday, 5 July 1942",
    "“War is not won in divisions & rig of day”: A pointed criticism of naval routine and discipline. Divisions involved mustering the ship's company for inspection, while rig of the day prescribed the uniform to be worn. Bill evidently thought too much importance was being placed on such formalities compared with the practical business of fighting the war.\n\n“Old man”: Bill's usual term for the commanding officer. His comment about the old man's mood immediately precedes his criticism of divisions and dress, although he does not explicitly say that the captain was responsible for his frustration.",
    ""
  ],
  [
    "Monday, 6 July 1942",
    "“Corned dog”: Naval slang for corned beef, particularly the tinned corned beef that was a staple of service rations. Bill's use of the unflattering expression fits the food complaint that follows, in which he lists weeks of repetitive bacon, eggs and sausages.",
    ""
  ],
  [
    "Tuesday, 7 July 1942",
    "",
    ""
  ],
  [
    "Wednesday, 8 July 1942",
    "",
    ""
  ],
  [
    "Thursday, 9 July 1942",
    "",
    ""
  ],
  [
    "Friday, 10 July 1942",
    "American aircraft carriers and cruisers: The American force Bill saw between 7 and 10 July can be identified with considerable confidence as, or at least included, USS Saratoga and Task Force 11. Saratoga had left Pearl Harbor on 7 July 1942, accompanied by the heavy cruisers Astoria, Vincennes, Minneapolis and New Orleans, destroyers and supporting vessels. On 8 July the force exercised off Hawaii before continuing south. Contemporary records place it on Bill's general route and record a speed of only 5.4 knots that evening, remarkably close to Bill's “Speed 5 knots.” Bill's reference to “aircraft carriers [and] 7 cruisers” does not exactly match Task Force 11's composition, so he may have miscounted distant vessels or seen more than one American formation during the four days covered by this entry.\n\nThe timing makes the encounter particularly significant. Saratoga and her escorts were heading south as part of the forces assembling for Operation Watchtower, the invasion of Guadalcanal and Tulagi on 7 August 1942, the first major Allied offensive against Japan in the Pacific. Saratoga would provide air support for the landings alongside Enterprise and Wasp. Bill had already visited Enterprise at Pearl Harbor on 25 June, so within a few weeks he encountered two of the three American carriers that would support the Guadalcanal invasion.\n\nSeveral of the cruisers Bill probably saw were also about to play major roles in the Guadalcanal campaign. USS Astoria and USS Vincennes were both sunk by Japanese forces at the Battle of Savo Island on 9 August 1942, only about a month after Bill saw the task force. Astoria lost 219 men and Vincennes 332. USS New Orleans survived Savo Island but was catastrophically damaged at the Battle of Tassafaronga on 30 November 1942, when a Japanese torpedo blew off her bow forward of No. 2 turret; despite the damage, she survived and was eventually repaired. USS Minneapolis was also struck by two torpedoes at Tassafaronga and suffered severe bow damage, but likewise survived. All four cruisers therefore became heavily involved in the bitter fighting around Guadalcanal soon after Bill's encounter.\n\nSaratoga herself survived the war despite being torpedoed by a Japanese submarine in August 1942 and later damaged by kamikaze attacks at Iwo Jima. She earned seven battle stars for her wartime service and was eventually used as a target during the Operation Crossroads atomic-bomb tests at Bikini Atoll in 1946, sinking after the underwater Baker test.\n\nBill's brief remark that the American ships “had us guessing for awhile” therefore captures an encounter with a powerful US naval force on its way toward one of the major turning points of the Pacific War, although he could not have known what operation the ships were preparing for at the time.",
    ""
  ],
  [
    "Saturday, 11 July 1942",
    "The “coal burners” were the remaining Isles-class vessels HMNZS Sanda, Scarba and Inchkeith. Killegray had already been left at Pearl Harbor with boiler trouble. Bill's satisfaction at being able to steam faster shows how frustrating the slow progress of the preceding days had become.",
    ""
  ],
  [
    "Sunday, 12 July 1942",
    "A restricted naval base: Palmyra had been placed under the control of the U.S. Navy in 1941 and the surrounding waters designated the Palmyra Island Naval Defensive Sea Area. Entry by vessels other than U.S. public vessels required Navy authorisation. Bill's arrival was therefore at an active American military installation rather than simply an isolated Pacific island.\n\n“Pick up ship”: The vessel can be identified as the American transport Majaba. RNZN records state that the New Zealand flotilla left Pearl Harbor on 6 July for Palmyra, where Majaba was waiting to be escorted south to Fanning Island and then Suva.",
    ""
  ],
  [
    "Monday, 13 July 1942",
    "“Americans relieved N.Z.s”: This is an important detail. New Zealand forces had been involved in the wartime defence of Fanning Island, owing particularly to its strategic cable station and position on Pacific communications routes. Bill learned from a man from the island that American personnel had now relieved the New Zealanders. His entry therefore captures the wider transfer of responsibility occurring across parts of the South and Central Pacific as rapidly expanding American forces assumed positions that New Zealand troops had helped defend earlier in the war.",
    ""
  ],
  [
    "Tuesday, 14 July 1942",
    "No crossing-the-line ceremony: Naval tradition often marked a sailor's first crossing of the Equator with a “crossing the line” ceremony involving Neptune and various initiations. Bill mentions only the time of the crossing and gives no indication of such a ceremony. This would also not have been his first crossing of the Equator during his wartime travels.",
    ""
  ],
  [
    "Wednesday, 15 July 1942",
    "",
    ""
  ],
  [
    "Thursday, 16 July 1942",
    "Galley fire: The galley was the ship's kitchen. Its fire or cooking equipment was not working properly, which would have restricted what the cook could prepare. Bill does not identify the fault or say whether it was subsequently repaired.",
    ""
  ],
  [
    "Friday, 17 July 1942",
    "",
    ""
  ],
  [
    "Saturday, 18 July 1942",
    "“made some scenes” would mean the Second Lieutenant caused or engaged in some conspicuous arguments/disturbances, with “whew!” expressing Bill's reaction to them. It may therefore be directly connected with the arguments he had just mentioned.",
    ""
  ],
  [
    "Sunday, 19 July 1942",
    "",
    ""
  ],
  [
    "Monday, 20 July 1942",
    "Gunwale: The upper edge of the side of a ship or boat. In rough conditions, seas breaking over the bow could send water across the deck and over the gunwales.",
    ""
  ],
  [
    "Tuesday, 21 July 1942",
    "International Date Line: Crossing the date line westward required the ship to advance the calendar by one day. Consequently, after Tuesday 21 July came Thursday 23 July, with Wednesday 22 July effectively disappearing from Bill's calendar. This is worth watching closely in the next journal entry, as Bill may explicitly skip the 22nd or explain the adjustment.",
    ""
  ],
  [
    "Wednesday, 22 July 1942",
    "",
    ""
  ],
  [
    "Thursday, 23 July 1942",
    "“Jumped a day”: The ship had crossed the International Date Line at 9 p.m. on 21 July, advancing the calendar directly to 23 July and skipping Wednesday, 22 July.\n\nNanuku Passage: A navigable passage through the northeastern Fiji Islands and part of the approach towards Suva for vessels arriving from the Central Pacific. Its location fits the flotilla's southward route from Fanning Island towards Suva.\n\nCrossed-out text: “Slackened speed” was crossed out and is therefore not included in the narrative.",
    ""
  ],
  [
    "Friday, 24 July 1942",
    "Kava: Bill's “Cava” was kava, the traditional Pacific drink made from the root of Piper methysticum. In Fiji it is commonly called yaqona and has an important ceremonial and social role.",
    ""
  ],
  [
    "Saturday, 25 July 1942",
    "HMNZS Matai and Viti: Both were New Zealand naval vessels operating from Fiji in 1942. Matai and Viti carried out anti-submarine patrols and escorted troop and supply shipping around Fiji. Bill's reference to the “lads of Matai Viti” therefore refers to sailors from the two separate ships, both of which were at Suva during this period. Tui would return to Suva in September to relieve Matai.",
    ""
  ],
  [
    "Sunday, 26 July 1942",
    "",
    ""
  ],
  [
    "Monday, 27 July 1942",
    "",
    ""
  ],
  [
    "Tuesday, 28 July 1942",
    "",
    ""
  ],
  [
    "Wednesday, 29 July 1942",
    "",
    ""
  ],
  [
    "Thursday, 30 July 1942",
    "",
    ""
  ],
  [
    "Friday, 31 July 1942",
    "Sanda's coal: Sanda was one of the coal-fired Isles-class minesweepers making the voyage to New Zealand with Tui. With only 25 tons of coal remaining, conserving her dwindling supply was becoming important as the ships approached New Zealand.",
    ""
  ],
  [
    "Saturday, 1 August 1942",
    "Coal shortage and towing: The flotilla's long-running coal difficulties became critical about 300 miles (480 km) from Auckland. RNZN records confirm that the poor-quality coal carried by the Isles-class minesweepers caused Sanda to run out during the passage from Suva and that Inchkeith took her in tow on 1 August, exactly matching Bill's entry. Other accounts record that both Sanda and Scarba ran short and had to be towed; Bill provides the more precise first-hand detail that Tui towed Scarba, while Inchkeith towed Sanda. With the two towing combinations making only three knots, their arrival was substantially delayed.",
    ""
  ],
  [
    "Sunday, 2 August 1942",
    "",
    ""
  ],
  [
    "Monday, 3 August 1942",
    "HMNZS Muritai: Muritai was a former passenger vessel requisitioned by the New Zealand Navy and employed as an auxiliary minesweeper. Her arrival was particularly useful because Sanda had exhausted her coal supply during the passage from Suva. Inchkeith had been towing Sanda since 1 August; Muritai now relieved her of the tow for the final passage towards Auckland.\n\nHMNZS James Cosgrove: James Cosgrove was another New Zealand auxiliary minesweeper. Her appearance with Muritai shows that vessels of the local minesweeping force had been sent out to meet the returning ships as they approached the New Zealand coast.",
    ""
  ]
];
