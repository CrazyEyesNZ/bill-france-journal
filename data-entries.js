/* Bill France WWII Journal — original journal entries.
   Structure: [date, originalEntryText, peopleMentioned]
*/
const entryData = [
  [
    "Friday, 19 September 1941",
    "On watch today & night. Lt Barnes had supper with us. He brought along 3 pies. Quiet night no raids. Heard our bombers going over to visit jerry. Weather getting colder now. Jerseys are to been worn after Sunday optional until 12th October.",
    [
      "Barnes"
    ]
  ],
  [
    "Saturday, 20 September 1941",
    "Dull this morning but cleared up in the afternoon. Going to the Palace Theatre tonight with girl friend. Played darts won a couple of tots. Wrote letters home, sent cards. Missed the girl friend. I got lost but met her later at the ferry, proceeded to the pictures, saw George Formby in \"Spare a Copper\". Do not know what is wrong, think a lot of girl Joan. Seeing her on Monday next night off. Often wonder Leon if that fortune telling of yours will come to something.",
    [
      "Joan",
      "George Formby",
      "Leon"
    ]
  ],
  [
    "Sunday, 21 September 1941",
    "Nothing much today very quiet, duty at noon. Wrote more letters home also one to N. Z. Commissioner asking if true about going home soon, if not I sure hope to stay here a while. Quiet night no air raid this way. Raided galley.",
    [
      "William Jordan"
    ]
  ],
  [
    "Monday, 22 September 1941",
    "Lovely morning looks like corker day. Ashore at 3pm. Received parcel from Star office was sure welcome. Have a new chap on watch with me he is a beaut. Sent more letters home to workmates. Posted birthday card home to mum & Leon. Went out with Joan, back aboard 10.20pm.",
    [
      "Leon",
      "Joan"
    ]
  ],
  [
    "Tuesday, 23 September 1941",
    "Fine day again hope the same for tomorrow. Duty today have a wizard of a patrol knows nothing - made tea, put tea, sugar & milk in jug and poured cold water on lot. Played soccer for a while rather a change. Had another sun-bathe real good. Air-raid warning tonight no damage nothing dropped where we are.",
    []
  ],
  [
    "Wednesday, 24 September 1941",
    "Off 2.30pm. Met Joan went for a walk taking young nephew great kid. Went to pictures in evening saw Scatterbrain - Farmers Wife. Went for a stroll after - a great girl I think a lot of her. Very black tonight and misty.",
    [
      "Joan"
    ]
  ],
  [
    "Thursday, 25 September 1941",
    "Duty now until Sunday - meet Joan again 3pm. Had letter from Rose Australia, also from High Commissioner, answered it and volunteered for ship going home mentioned Bert to. Heard guns in the Channel must be a convoy going through. Rather misty today looks like rain soon. Ben is now Quarter Master with me and is planning to be in the same mess?",
    [
       "Joan", 
       "Rose", 
       "William Jordan", 
       "Bert", 
       "Ben"
    ]
  ],
  [
    "Friday, 26 September 1941",
    "Still have my cold glad when I lose it. Fairly tired today, watching, had only 4 hrs sleep. No rain but cool, think it will be cold tonight. Another day and night of watch duty. Bert started 3 days leave. No air raids last few days. Wrote letter to Mr Wilson M.B.M. while on duty also one to Joan in Cornwall and another to N.Z. also Edwin and Harry. Air-raid again no eggs thank goodness wonder who got them. Hope no damage done.",
    [
      "Bert",
      "Mr Wilson",
      "Joan",
      "Edwin",
      "Harry"
    ]
  ],
  [
    "Saturday, 27 September 1941",
    "Heard bombers returning home this morning. Weather misty looks like rain. Patrol just about drives me to drink. Bert on long week-end leave, gone to Torquay. Duty again today. Received pay £2-12-0 Bert more than me. Boys on the hops. Havent had a drink for two weeks. About time had some mail from home. Lads lashed me in hammock while asleep thought it a great joke had to be untied to go on watch 12pm.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 28 September 1941",
    "Raining early this morning but cleared up lovely sun shining good. Off duty 12.30pm. Have a date - took a couple photographs today. Air-raid at 10pm was walking down the road thought egg was dropping where I was. Only three dropped, one never went off, hit Commodore Hut not far from us. (Raleigh). Just left Joan when warning sounded. On board at 10.30pm.",
    [
      "Joan"
    ]
  ],
  [
    "Monday, 29 September 1941",
    "Lovely day today sun shining. Duty until tomorrow 12.30am Bert expects to have his hoppo over here soon. Discovered that 3 bombs were dropped and there is a time bomb about 400yds from the camp and it has not gone off yet hope I am not around when it does. Good clear night tonight lovely moon.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 30 September 1941",
    "Ashore at 4pm. met Joan at work. Saw her home went to pictures saw \"Tree of Liberty\". Only one air-raid tonight warning YxP no bombs dropped. Time bomb still has not gone off. Oh met Joan's mother. On board at 10.30pm. Gee weather is getting cooler now Br-r-r. Bert received cake from Nestles. I received letter from Bill and Phil.",
    [
      "Joan",
      "Bert",
      "Bill",
      "Phil"
    ]
  ],
  [
    "Wednesday, 1 October 1941",
    "Rather cool this morning. Duty at 12am. Weather fine misty of a morning. Good day but cool at night. New patrol has arrived. Sue messed up his chance of being with us darn him. On duty again at 8pm. Wrote a letter to Joan of Cornwall. Asking if she will become engaged to me at Christmas, hope I am lucky - she is a great girl.",
    [
      "Sue",
      "Joan"
    ]
  ],
  [
    "Thursday, 2 October 1941",
    "Off duty ashore at 3pm. rather dull today but not cold. Had 3 hr sleep in field. Bert has his head down now. We are disappointed in Sue not coming over. Patrol seems alright. Some coon broke the radio. --- (scribbled out) Joan and I becoming engaged at Christmas or before I leave for home. Coming back for her later. ---",
    [
      "Bert",
      "Sue"
    ]
  ],
  [
    "Friday, 3 October 1941",
    "Rather cool but nice day - on board now until Sunday - mid-day. Received letter from home, also one from Australia - Aunty Sarah - & N.Z. Friend. Have another new patrol seems alright. Lovely clear night made cocoa and tea for sentries.",
    [
      "Aunty Sarah"
    ]
  ],
  [
    "Saturday, 4 October 1941",
    "Chased the cows out. Boat from R.N.B got stuck on mud for 2 1/2 hours. Very busy morning. Ben was adrift - brought my suit off - alright that is about all. Rather dull now and cold. Bert is going ashore he received another good parcel from Nestles. also a letter from home and Don.",
    [
      "Ben",
      "Bert",
      "Don"
    ]
  ],
  [
    "Sunday, 5 October 1941",
    "Gloomy weather today started raining at 10.15am. had a few heavy showers, sun came out. Off duty at 12.30am met Joan at 2.30pm. went for stroll. Had tea met again at 5.45pm. another stroll convinced that I love her never felt this way before. On board 10.15pm.Gloomy weather today started raining at 10.15am. had a few heavy showers, sun came out. Off duty at 12.30am met Joan at 2.30pm. went for stroll. Had tea met again at 5.45pm. another stroll convinced that I love her never felt this way before. On board 10.15pm.",
    [
      "Joan"
    ]
  ],
  [
    "Monday, 6 October 1941",
    "Pretty near broke. Saving up for ring for girl friend hope for big pay Thursday. On duty 12.30pm. Weather dull may clear up. Received letter from N.Z. Commission notifying my name down for returning N.Z. Bomb was removed at 4am this morning. Bit of a panic today C.C. passed through. Gun fire today probably practice. Good weather warm sun shining. Heard German radio call about proceeding of prisoners at 7am. Air raid at 10pm.",
    []
  ],
  [
    "Tuesday, 7 October 1941",
    "Leave at 12.30am. Weather warm but dull. Met Joan went to the pictures had our first war coming home. Made it up again before we left. Nearly a month now since we met. On board at 10pm. Bert still ashore.",
    [
      "Joan",
      "Bert"
    ]
  ],
  [
    "Wednesday, 8 October 1941",
    "Misty and light rain. Usual routine of morning cleaning. On duty at 12.30am. Trainees have disagreement over food, bread mouldy and not enough ants in it. Heard & read that exchange of prisoners is finished, a complete washout. Pincher Martin duty officer tonight darn it. Had no mail for a while parcels have not come. Just listened to a broadcast from a destroyer in the Med. Air raid warning but did not come over our way.",
    [
      "Pincher Martin"
    ]
  ],
  [
    "Thursday, 9 October 1941",
    "Pay day £2-12-0 thought might be quarterly settlement see next pay day. Meeting Joan tonight. Heard more news about going home hope it is true. Rather cold today and cloudy. Bee's Knees on draft. Ben half hour adrift. Bert still draw more money than me. Jerry over again pretty low no guns fired or searchlights out. Just about shoot him down with air gun.",
    [
      "Joan",
      "Bee's Knees",
      "Ben",
      "Bert"
    ]
  ],
  [
    "Friday, 10 October 1941",
    "Start week-end leave 1530. No where to go this time, see Joan over next weekend. Went to see \"Palen Hall', Rocky Mountain Ranyo had two wets with Alex. Aboard at 10pm. Jerry over head at 12pm.",
    [
      "Joan",
      "Alex"
    ]
  ],
  [
    "Saturday, 11 October 1941",
    "Jerry over again at 6.30am nothing happened - no gun fire on each occasion. Raining like the devil heaviest I have seen so far in the town. Very dark at night now better buy a torch. Received a letter from Harry Rhodes today. He is just about O.K. Cleared up but rather cold. Another rumour about going back to N.Zs recalled.",
    [
      "Harry Rhodes"
    ]
  ],
  [
    "Sunday, 12 October 1941",
    "Struth talk about raids and warnings last night and early this morning. Sun shining lovely today. Should be at Torquay. Lost the workshop and N.Z. Badge retained badge but watch lost. Bought a torch too dark at times to see. Big fight the other night between our lads and Norwegians. Attack must have been on convoy. Channel guns were firing, flashes all over and explosions could be heard. Been firing for the last 2 or three days. Sold part of my kit old time flannels pair of boots and jumpers. 18/-. Took some photographs of Joan. Wrestled on grass and ran around. On board at 10.15pm.",
    [
      "Joan"
    ]
  ],
  [
    "Monday, 13 October 1941",
    "On duty again today. Bert received some photographs and letter from Don. Weather rather cool now. Still more rumours of ships going home. Lee has draft to Kiwi leaving next week. All N.N's recalled to barracks. Being drafted home.",
    [
      "Bert",
      "Don",
      "Lee"
    ]
  ],
  [
    "Tuesday, 14 October 1941",
    "Ashore at 5.30pm. Purchased battery & belt. Proceeded to Joan and Pictures. Night cold but clear. On board 10.15pm. Dozens of our planes passed over to visit Jerry. Usual argument on English tradition.",
    [
      "Joan"
    ]
  ],
  [
    "Wednesday, 15 October 1941",
    "Misunderstanding in mess somebody may be filled in soon, not pulling together. Fired up about payment etc. Discovered that probably before Christmas be leaving for home via America. Hope it is not long. Trip maybe 4 months. Bert & Ben sure are pleased to hear it.",
    [
      "Bert",
      "Ben"
    ]
  ],
  [
    "Thursday, 16 October 1941",
    "QMs & patrols before Pincher the cow. Everything O.K. stuck up for our rights. Rained this morning but cleared up later. Met Joan went to pictures. On board 10.30pm. Boys snoring like hell, shook them to buak down the noise.",
    [
      "Pincher",
      "Joan"
    ]
  ],
  [
    "Friday, 17 October 1941",
    "Ben and Scouse on 4 days leave. - weather not too good. Listened to news broadcast heard voices try to jam it. Did 12 hrs watch, let Bert sleep in. Air raid, looked galley for food and milk. Made coffee for sentries. Chased cows off quarter-deck. Still overcast.",
    [
      "Ben",
      "Scouse",
      "Bert"
    ]
  ],
  [
    "Saturday, 18 October 1941",
    "Weather the same showery. Bert's day off has to meet girl. Made raid on galley, procured pies, peas, coffee and milk. Gave sentries some. One fool darn near bayoneted us. - Did 8hrs watch - ashore 2.30pm Sunday to meet Joan. Boots repaired cost 7/- pretty dear. Had no mail from home. Written home.",
    [
      "Bert",
      "Joan"
    ]
  ],
  [
    "Sunday, 19 October 1941",
    "Overcast. Mishap somewhere did not see Joan must be sick had not been to good. Met Bee's Knees went and had a few wets finished up 3 parts full. Never again. In an argument - on board at 11pm. Slept like a log.",
    [
      "Joan",
      "Bee's Knees"
    ]
  ],
  [
    "Monday, 20 October 1941",
    "Still overcast - had no breakfast teased by boys. Bert gave me the bird - guessed Jo did not turn up. Argument over watches - usually is. Duty all day. Listened to fight McAvoy & Hyams. On duty again 12pm.",
    [
      "Bert",
      "Joan",
      "Jock McAvoy",
      "Jack Hyams"
    ]
  ],
  [
    "Tuesday, 21 October 1941",
    "Only air-raid warning last night. Quiet & wet. Made usual drink for Sentries. Had bacon sandwiches. Sun shining today. Off duty at 12am. Meet Joan at 6pm. hope she turns up this time if not well? Bert's request granted for 3 days leave. Still no mail. Joan turned up went to pictures. Received Tin of biscuits from home. Air raid warning.",
    [
      "Joan",
      "Bert"
    ]
  ],
  [
    "Wednesday, 22 October 1941",
    "Struth! cool this morning. Duty today. Sun shining. Hope for pay down tomorrow. More news from Commission that ships are definitely going home before Christmas. Wrote home - read - listened to radio to pan the odd hours away. Found workshop (watch) in gas-mask. Aid raid warning YaP.",
    []
  ],
  [
    "Thursday, 23 October 1941",
    "Sun shining but cold. Pay today £9-5-0. Met Joan 6.pm, obtained chocolate went to pictures saw \"1941 Broadcast\" not bad. On way aboard planes over gun-fire could be heard, and flashes seen. On board at 9.35pm. Fixed tack. Posted mail home today. Received a letter from Harry and aunt Sarah also a parcel cig & socks & soup, must write back to her. Bert also had same in my parcel. Air raid warnings YaP. & W & Y & PaW",
    [
      "Joan",
      "Harry",
      "Aunty Sarah",
      "Bert"
    ]
  ],
  [
    "Friday, 24 October 1941",
    "Sure is cool - lovely day. Bert on 4 days leave. Biscuits just about eaten. Nearly another tiff last night between Joan and I. On duty at 12.30am worked it to meet girl friend Sunday. Wrote to Harry. Received some mail from Auckland friend Iris. Jerry is over again. Clear night on duty at 8'Oclock. Wrote home.",
    [
      "Bert",
      "Joan",
      "Harry",
      "Iris"
    ]
  ],
  [
    "Saturday, 25 October 1941",
    "Not as cold today. Have forenoon watch. Went ashore for hair-cut and oil. Ring from Joan relation killed not see her til Sunday night. Raid now or planes over head - should be in shelter but darn it on watch at 4am. seven sleep. All clear again Jerry passed over. Thought he would pick tonight do not know why. Some of the P.O.s like kids feel like filling them in. Trainees were wet do not know what Black-out means.",
    [
      "Joan"
    ]
  ],
  [
    "Sunday, 26 October 1941",
    "These Scouses are hard case. Now further disturbances only one P warning. Jerry returned home no bombs dropped. Weather not as good as yesterday, cloudy. Wrote home. Now use two blankets doubtful have fire in mess. Off duty till 12pm. Ashore 6pm. read Weekly News etc. Jerry over again and dropped some eggs A.A. firing shells bursting in air. Not far from where I was with Joan, too close for mine felt concussion of bombs. It sure was fair-dinkum this time. Coming over more frequently now and longer raids. Hope I am on my way home before long. Just about fed up with this place. Have saved £9-10-0 to take. Think of going up to Manchester in a fortnight.",
    [
      "Joan"
    ]
  ],
  [
    "Monday, 27 October 1941",
    "Not so cold today, cloudy. Did some dhobying, - on watch at 12 noon. Bert returned from leave. Reckons the bombing was to close for him shrapnel was around. On duty now until Wednesday. Smoke screens laid for when being bombed, to camouflage city.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 28 October 1941",
    "Pretty good weather today. Chased cows off quarter deck. Sentry nearly shot cows thought somebody was stalking him. Just about set Police Office on fire caught it in time. Received mail from home & M.B.M Darn it air raid warning on now. Jerry paying us another visit an ideal night for him. On watch at 12pm. so I had better turn in. Hope no eggs are dropped. Bert is on watch. One plane brought down.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 29 October 1941",
    "Not seeing Joan until Tuesday night. Darn cold have fire everyday now. Sun shining but darn cold. Went to a dance \"Whitley plain\" good. Talent & dancers, must go again. Met Bert going to Palace Theatre. Saw his bus girl friend. Nearly had fight. Red & I with no badge L. Hand. Arrived on board 12pm.",
    [
      "Joan",
      "Bert",
      "Red"
    ]
  ],
  [
    "Thursday, 30 October 1941",
    "Darn near set Camp Police Office on fire just caught it in time. Pincher would have been mad. Whoa! Cold as the devil still all gathered round fire and making hot drinks. Bert went to dentist - news that pretty soon we will be on our way home thank goodness. Fed up over here. Too much red tape & tradition of the under dog. Had enlargements of photograph real good. Sent one home Air-mail! Discovered sea-gull shot wounded good idea who did it - the cow. Another air-raid on. Ben & Scouse going ashore. Struth it sure was a fair-dinkum a pretty good barrage - better than Guy Fawkes Day. It sure is not good to be in - a raid. Six times tonight.",
    [
      "Pincher",
      "Bert",
      "Ben",
      "Scouse"
    ]
  ],
  [
    "Friday, 31 October 1941",
    "Rest of night quiet. Many Happy Returns of the day, Leon, had a wet to your health. Fairly good day not as cold, sun shining. Ashore today at 6pm. Start week-end watches. My leave next week-end. Wrote home, received mail from N.Z. Danced at Mutley Plain dance hall some fine talent, Leon. On board at 12pm. Tergo on watch.",
    [
      "Leon",
      "Tergo"
    ]
  ],
  [
    "Saturday, 1 November 1941",
    "Ashore 6pm. went dancing Victory Dance. She was a beaut like Snake Pit but not so bad. You would have laughed Leon. Bert got hooped returned on 12pm. Tergo on watch, put him in my Hammock. Ben did his watch. Joe and I did 8 hrs - were we tired. Jerry was over again but not where we were.",
    [
      "Leon",
      "Bert",
      "Tergo",
      "Ben",
      "Joe"
    ]
  ],
  [
    "Sunday, 2 November 1941",
    "Good day today cold & fine. Bert O.K. after his night out. He & Red doing 8hrs tonight I relieve. Hand grenade drill today by Sub Lieutenant's. Ben and Scouse ashore have a date, gave them some rum. Have morning watch - bug eats pie, chips, soup, milk, clear quiet night no raids. Heard our bombers returning.",
    [
      "Bert",
      "Red",
      "Ben",
      "Scouse"
    ]
  ],
  [
    "Monday, 3 November 1941",
    "Cold but fine. Dhobying hammock & cover, blanket. Had siesta. Bert went to dentist. Listened into Lord Haw Haw. Jerry over again no bombs here.",
    [
      "Bert",
      "Lord Haw-Haw (William Joyce)"
    ]
  ],
  [
    "Tuesday, 4 November 1941",
    "Lot of blasting. Water leakage & not too good. 31° this morning hammock & cover frozen. Grass covered in frost. Darn cold. Leave for 4 days granted. Meet Joan tonight. Never met.  seeing her Wednesday - maybe.",
    [
      "Joan"
    ]
  ],
  [
    "Wednesday, 5 November 1941",
    "Gee it's cold. Sun shining. Air raid in vicinity. Went ashore visited the pub \"The Camel's Head\" and then \"Victory Dance\" had good time. On board 12pm. Duty 4am.",
    []
  ],
  [
    "Thursday, 6 November 1941",
    "Received mail from Harry & Star Office. the Whizz-Bang. Heard bombers returning. Planes had manoeuvres today. Loaned out some cash. On leave tomorrow. Pay £2-12-0. not so cold today a little rain & cloudy. usual routine. Be glad when on way home. Went to Victory Dance and visited \"Camels Head\" had a pretty good time.",
    [
      "Harry"
    ]
  ],
  [
    "Friday, 7 November 1941",
    "Leave 12 o'clock for Manchester. Weather good. Tiring journey glad when it was over had to stand for 5 hrs. Arrived Manchester midnight, turned in at 1.30am. rather tired.",
    []
  ],
  [
    "Saturday, 8 November 1941",
    "Had a walk around the town saw the sights properly. Had a wet in the \"Grove\" & \"Cricketer's Arms\" Returned home 4pm. Called at the Cricketer's Arms stayed there the evening had a swell time singing. Turned in pretty drunk. A good night.",
    []
  ],
  [
    "Sunday, 9 November 1941",
    "Up at noon breakfast called at the Cricketers Arms again said hello and proceeded to the town. Quiet day cold but was O.K. Had a number of dates did not fulfil one, a mess-up. Turned in at 1am. Obtained 2 films.",
    []
  ],
  [
    "Monday, 10 November 1941",
    "Said farewell to friends. Went to town. Danced at Rity rather a good place plenty of talent. Bert would have been in his element. Back for tea at 5oclock caught train at 7.10pm. Enjoyed my stay. People are a lot better than the Southerners, more friendly and jovial. Had to change trains twice. Journey back not so bad.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 11 November 1941",
    "Adrift 2hrs train late. Sorry to be back. Discovered we are the last of our batch N.Z. to be left here, the rest on way home. Boys tell me Bert has it bad has fallen hard. On duty today 12am. til 4pm. Blow the women let me get on my way home. Received cake and mail from home today. No Raids tonight - very misty.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 12 November 1941",
    "Misty this morning - cold - sun shining later on. On board today not much doing. Bert seems fair-dinkum over floosie. Rather a wild night. Thunder & lightening. 4 Balloon Barrages down in flames, eased off midnight. No raid over.",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 13 November 1941",
    "Cloudy. G.O's report today. Bert to see his floosie 1.30pm. doing 1hr for him. Loaned the boys some cash also Bert (to take his floosie out I expect). Ashore at 6pm. to pictures with Joan. Saw \"of Men & Mice\" not bad. Air-raid. Two of them while watching the picture. On board 9.45pm. Heard two tales of Hood and Bismarck. Rodney fired 350-16\" shots at Bismarck. Prince of Wales live shell in boiler.",
    [
      "Bert",
      "Joan"
    ]
  ],
  [
    "Friday, 14 November 1941",
    "Up at 8am. weather fair sun shining. Stove fixed again after 4 weeks thank goodness. Wrote to Manchester 4 weeks ago no reply yet. Still wondering when draft for home is coming seems to be certain we are going. Saw C.O. let off with a caution - put one across over \"Pincher\". Royal Oak sank while in tow. Air raid on tonight. Loaned cook 10/- security his watch. Planes in vicinity.",
    [
      "Pincher"
    ]
  ],
  [
    "Saturday, 15 November 1941",
    "Fine weather - ashore at 6p.m met Joan went to dance - met a poet - Dance not to good. Had a row with Joan. Meet again Monday 6pm. Air Raid nothing dropped here. Duty 12pm. did extra two hours for Bert. Raided galley for grub. Turned in 5.45am.",
    [
      "Joan",
      "Bert"
    ]
  ],
  [
    "Sunday, 16 November 1941",
    "Raining like the devil, - hope it clears up for tomorrow. Bert's floosie left for Bristol. He is going there next week-end for 4 days. Very quiet day not much doing. Duty at 8pm - 12 pm. Wind blowing like hell. Thunder & lightening.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 17 November 1941",
    "Still raining but not so cold. Not feeling too good. Went for a stroll in evening. Misty on board 10pm. All lights fused on board in darkness till midnight.",
    []
  ],
  [
    "Tuesday, 18 November 1941",
    "Changed watches went ashore to \"Embassy dance\" visited \"Britania Hotel\" met a swell blonde fairy and saw Bert's bus conductors, Had a swell time must visit there again. Left Joe to take his floosie home - on board at 11.30pm.",
    [
      "Bert",
      "Joe"
    ]
  ],
  [
    "Wednesday, 19 November 1941",
    "Pretty good day - does not get light until after 8am. of a morning now, - dark at 5.30pm. Weather still cool. Try for a sub tonight may go ashore. Saw Bert's floosie - one of them - not bad. Saw them home to bus. On board 12pm. One air-raid.",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 20 November 1941",
    "Weather O.K. not so cold. Pay £2.12.0 collected beans. Weekly News from Billie expect mail soon. When ashore with Joe, Ben & Sconce had a swell time met girl named Penny made a date. Caught Ben over watches ha! ha!",
    [
      "Billie",
      "Joe",
      "Ben",
      "Sconce",
      "Penny"
    ]
  ],
  [
    "Friday, 21 November 1941",
    "Bit of a thick head this morning. Raining & heaving like the devil. Cleared up 11am. sun came out. Made plans for going ashore Tuesday. Hello draft chit came in 6.30pm. Bert is on leave, cannot let him know until Tuesday - he will be surprised, Ben is. Wonder where it is to, hope for home. Discovered Jack Lynch is here looking for me. Must try and get Bert with me. On duty at 8pm - 12pm. Gunnery practice tonight in the coast. No it is not practice, shelling a convoy I think. Oo-er jerry is fair-dinkum tonight some gun fire shrapnel falling on the roof of the mess-decks, did I duck? lasted 15 mins.",
    [
      "Bert",
      "Ben",
      "Jack Lynch"
    ]
  ],
  [
    "Saturday, 22 November 1941",
    "Raining this morning. My efforts in getting Bert away with me bloomed. Recalling him from leave join ship Tuesday for N.Z. call at barracks 10am. Monday Morning. Hope that Bert does return in time to come with me. Poor Ben took it not too good. Joe and Scouse in the dumps over us going. Ashore tonight for a spree. Ben Scouse, Joe & I. Damn air-raid no machine-gunners aboard all on the spree. Met Penny, Jenny, Marie had a good time. Some Aussies starts a fight - Ben got hit on the head with a bottle, Scouse his lip cut, me a lump on my shin. Lost & found each other on board 12pm. Went to see O.O.D. Bert had not been located - the fool goodness knows what will happen now.",
    [
      "Bert",
      "Ben",
      "Joe",
      "Scouse",
      "Penny",
      "Jenny",
      "Marie"
    ]
  ],
  [
    "Sunday, 23 November 1941",
    "Fine day sun shining Bert not found yet - darn the woman. Pack kit today for leaving tomorrow. Hope Bert comes with me. Went to a lot of trouble for him. Went for a stroll with Joan. Air-raid attack hid in hedge for protection from bombs and shrapnel, plenty of A.A. fire as barrage. Saw Joan home returned aboard caught in another raid. Witnessed a dog fight between our Spitfire and Jerry bomber. Our plane brought him down in flames - big flash when hit ground. one German bailed out wounded the others perished. Still air-raid was on last about 1 hour. Coming over now more frequent. Turned in while raid was on - duty at 12pm - 4am everything all clear.",
    [
      "Bert",
      "Joan"
    ]
  ],
  [
    "Monday, 24 November 1941",
    "Kit packed caught 9.45am boat to barracks to report for draft. Said cheerio to the lads wished then all the best. Bert still adrift. Caught 2pm train for Leith Scotland. (This part crossed out, as it pertains to the next day) --went aboard HMNZS Tui. Brand new ship in-- (two pages ripped from journal).",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 25 November 1941",
    "Arrived 12.30am. awful train journey no food & sleep. Had dinner Leith Rest Home rather good. Proceeded to Leith joined ship, put Bags & Hammocks aboard. Went ashore ship is commissioned tomorrow. Had a rather good time missed Bert & Ben. Had a few wets nearly drunk took floosie home, slept ashore.",
    [
      "Bert",
      "Ben"
    ]
  ],
  [
    "Wednesday, 26 November 1941",
    "Woke up with a bit of a thick head had a reviver. Had breakfast, swell waitress served us. On board at 8.45am. Ship commissioned at 9.30am had prayers sang hymn and national anthem. Took on stores of every description and some ammunition. Sailing for N.Z. middle of January name of ship is \"Tui\" Lt. Com. Hilliard is captain. Knew him years ago. Hope he does not have it in for me or Bert as I used to act the goat when last under him. Had engine trials today. On port watch. Have hunch I will not like this ship - worth it - to get home then put in for draft. Drew first aboard new ship. Now tired after working all day. Hope to the devil Bert arrives. This is the first stage of my trip back home - the sooner we start the better. Representative for the men in canteen and welfare of the men. Turned in a 8pm.",
    [
      "Bert",
      "Lieutenant-Commander Hilliard"
    ]
  ],
  [
    "Thursday, 27 November 1941",
    "Still loading stores equipment. Im charge of Mine Sweeping gear. Bert arrived 12noon. Ben still at Trevol. Hilliard gave Bert a lecture starting to settle down now. Bert in same watch. Duty tonight, darn cold turned in early.",
    [
      "Bert",
      "Ben",
      "Hilliard"
    ]
  ],
  [
    "Friday, 28 November 1941",
    "Cold as the devil. Loaded ammunition Depth charges. Checked over M.S. gear. Not much grub just enough that is all to take hunger away. Ashore tonight. Bert is broke had tea ashore. Went to dance, struth he is dear to take ashore. Met a couple of girls made a date for Sunday afternoon. Cold as hell be glad when on our way. On board 11.30pm. Wish Harry was with us.",
    [
      "Bert",
      "Harry"
    ]
  ],
  [
    "Saturday, 29 November 1941",
    "Br-r-r. Wish I could stay in bunk for a couple more hours last up this morning. Still cleaning up getting things in place. Wrote home. No leave till 4pm. then all-night. Duty until tomorrow. Worked all day pretty hard. still not enough food. What had for a decent meal when I arrive home. Bert still writes to his fairy. Did some sewing - turned in 9pm.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 30 November 1941",
    "Church service this morning. Obtained Testament Book for souvenir. Ashore at 1pm. Met couple girls went to zoo not a bad place. Met two others at night went to Garrison Theatre not a bad concert. Weather cold as hell. On board 12pm.",
    []
  ],
  [
    "Monday, 1 December 1941",
    "Received mail all English. Bert had one from Harry, Mail to him must have gone astray. Bert had one from his fairy, in a good mood now. No cash till pay day not much grub, cold as hell. No hot water for the last week more than that Ships barber. Growing a beard. Starting a dhobying firm with \"Mo\". Gun drill today. Training again but one on board. Made heaving lines. Be glad when we sail for home. Gun trails next week. \"Moa\" has past through Halifax wish it was us. Must write to Harry now and Ben.",
    [
      "Bert",
      "Harry",
      "Mo",
      "Ben"
    ]
  ],
  [
    "Tuesday, 2 December 1941",
    "Still cleaning ship. Weather cold. Not to much grub always hungry. Mostly tinned food. When ashore for a stroll, when to pictures had some chips & a wet. Rather pleasant evening. Saving a few tots for celebrating at home, for Leon. Broke until pay-day except for money to buy something on way home. No mail from Plymouth only Ben's guess that fairy has forgotten that is good.",
    [
      "Leon",
      "Ben"
    ]
  ],
  [
    "Wednesday, 3 December 1941",
    "Still cool the sun does not rise very high. Made heaving lines & more & mixed paint. Received one letter from N.Z. and cablegram from Leon. O.K. Leon taking advice. Bert still stuck of his floosie. Perhaps just as well we are going home. Trying to get Ben up here. Nominated for ships barber, was, on ship coming over. Still no steam therefore not hot water. Heard \"Sydney\" had been sunk with all hands.",
    [
      "Leon",
      "Bert",
      "Ben"
    ]
  ],
  [
    "Thursday, 4 December 1941",
    "Still cleaning ship and stowing. Moved to Albert Dock, 1.30pm. Ashore 4.30pm had haircut by woman. Had 1/2pt & chips proceeded to a Social. Had swell time some nice girls there took one home. On board 11.15pm. Bert still ashore with floosie.",
    [
      "Bert"
    ]
  ],
  [
    "Friday, 5 December 1941",
    "Fixing mine-sweeping store. More stores aboard. Weather cold but not wet. Two destroyers being made astern of us. Still growing beard. Start dhobying firm today. Engines are working now have hot water and own electric power. Rather busy today, more stores aboard 4pm. Wind blowing today - had more gun practice. Do not like this ships company - put in for draft when I return home. Did some darning of socks. Routine not too good in two messes. Would not be surprised if there is one or two arguments aboard. Went ashore although duty - had a couple proceeded to dance in overalls. Had lot of fun. On board 2am. Bert hooped.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 6 December 1941",
    "No idea how cold it is, just about freezing - it is! Never been so cold. Wind blowing like hell & raining at intervals. Bert & I went ashore had a couple wets met a couple fairies had a swell time. Went on board at 11pm for some - ashore again had a bit more fun returned on board 2am. Did not wait for Bert kept me waiting 45 minutes so turned it in & went aboard.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 7 December 1941",
    "No afternoon leave yesterday and worked all day today. Cold as the devil. Moved ship 3 times — oiled up for going to sea. Bert obtained a sub to see a flick. Grub lately, not enough, all going crook. Did some Xmas shopping. Had some oysters that Bert had sent to him from Nestles. Issued with seaboot socks and ordinary [??], comfort funds. Heard that Japan had declared war on America. Hope this does not make any difference in us going home.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 8 December 1941",
    "Put to see at 8.50am. Went through docks. Ship manoeuvred alright. Had depth charge trials, O.K. Weather still cool. Returned to port at 5 pm. War news not too good. All more eager to get home. Went ashore to local pictures. Mail on board when I came off from home and parcel from patriotic fund of comforts. One letter from South Africa and one from Madeline & Arthur.",
    [
      "Madeline",
      "Arthur"
    ]
  ],
  [
    "Tuesday, 9 December 1941",
    "Up 6.45am scrubbed decks in dock. Food today not too good, spoilt, rice not cooked – I doctored it and then it was O.K. Burt cleaned machine guns – he is gunner aft. Moved to another dock. Cut chap's hair pronounced barber of ship. Living mostly on canned food. Rumours that we are sailing soon for home. Ducked ashore for a wet. Have a bottle of Leon's favourite, for him. No hot water again in fact none at all.",
    [
      "Bert",
      "Leon"
    ]
  ],
  [
    "Wednesday, 10 December 1941",
    "Left jetty at 9am proceeded to sea. Obtained another jersey and seaboot now. Cleaned M.S. gear. Had compass test nearly had mishap this morning. War news rather depressing, Prince of Wales and Repulse sunk, also 4 American warships. Dropped anchor at Granton, no leave tonight. Anchor watch wind is blowing rather hard. Tom Bowler game on tonight. Wrote home to Leon& Mum, Harry.",
    [
      "Leon",
      "Mum",
      "Harry"
    ]
  ],
  [
    "Thursday, 11 December 1941",
    "Weighed anchor 8.30am proceeded to sea for gunnery trials. Trials okay fired 5 shots one H.E. Machine guns A.1. Bert looks after them he is best machine-gunner aboard. Weather fairly cool - pretty rough outside wind blowing, quite a number of waves came over the bows. Burt got caught in one and was wet through. Have middle watch tonight. Received one letter from N.Z. two English. Turn in now 8pm. try my best for sleep.",
    [
      "Bert"
    ]
  ],
  [
    "Friday, 12 December 1941",
    "Started middle watch wind blowing like the devil. Scrubbed down decks. Weighed anchor tested compass, seas came over bows,- made some life lines. Passed under Firth of Forth Bridge took photograph, rather dull. Pulled in alongside \"Scarba\" Port Edgar. Lousy place here for 3 weeks. Went ashore to canteen did not drink proceeded to concert not bad at all. Met \"Sue\" on way out. All of us may go home together yet.",
    [
      "Sue"
    ]
  ],
  [
    "Saturday, 13 December 1941",
    "Scrubbed decks in dark. Rigged M.S. gear. Received pretty good mail answered back. Air-raid no damage. Bert received two letters. At this port for three weeks. Now have radio in mess. Duty today. Wrote 19 letters all told. Boys wanted me to cook-nothing doing. Raining now wind blowing. Turned in 10.30pm.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 14 December 1941",
    "Fine weather rather cold. Went to Edinburgh, tried to get in touch with Mrs Lee's sisters. Met 3 girls made a date. Had a wet met three other girls went to a show had a good time. Had to be on board 10.30pm. Leave in this port only until 10.30pm. darn it. Spoils chances of taking girls home, half hour adrift all O.K.",
    [
      "Mrs Lee"
    ]
  ],
  [
    "Monday, 15 December 1941",
    "Rigged M.S. gear. Went to see M.S. picture not bad. Duty today taught chap to splice. Went to canteen had two wets proceeded to a pantomime in port. Swell show some lovely girls, enjoyed myself immensely. Returned on board 9.30pm. One chap in cattle there coxswain is a sly devil. Read for a while turned in at 10.30pm.",
    []
  ],
  [
    "Tuesday, 16 December 1941",
    "Ship came along side not under control nearly cleaned up jetty and another ship. Asked second Lieutenant for set of hair clippers. Left duty 9 am sun shine later on but gee it was cold. Four hours on machine gun. Mine sweeping practice gear O.K. Met Lt. Palmer skipper of \"Cromarty\" fleet sweepers, had a chat. Burst pudding on gripe, coming in. Slight head ache think turn in early tonight. Wonder if there is a concert on tonight?",
    [
      "Lieutenant Palmer"
    ]
  ],
  [
    "Wednesday, 17 December 1941",
    "Left jetty 9am. proceeded to sea for Mine Sweeping Trials. Laid Dan-Buoys. Lovely day today, mild. Learnt new splice (Liverpool Salvage). Came in at 2.30pm. left again at 4pm. proceeded to the Firth of Fourth Bridge for mine watching, our return tonight. No mail today. Night is calm but a little misty. Have the middle watch 12–4 am. Had look out port at machine-gun post.",
    []
  ],
  [
    "Thursday, 18 December 1941",
    "Cold and misty during watch, had a cup of cocoa. Checked over M.S. gear for going to sea. To misty for sweeping delayed going out. Did odd jobs in sweeping store. Started dhobying firm today made 5/-.",
    []
  ],
  [
    "Friday, 19 December 1941",
    "Jetty covered with white frost first I have seen in Scotland. Loaded on board 30 casks of rum also cigarettes and ?Tiekler? Pay-day. Another day at sea M.S trials. Bert nearly had a fight. Coxswains is still a fair – cow. Lovely day sun shining and see calm. Duty tonight. Did some more Officers dhobying . Thinking seriously of going for the hook. Bert still stuck on his floozies",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 20 December 1941",
    "Ashore at 1 pm went to Edinburgh looked around Woolworths. Went and had a few wets met a chap from N.Z. with his wife, our pals arrived and few 2 hrs we had a wild time. Proceeded back to Queensferry went to Town Hall Dance had a swell time met two girls on the bus palled up and took them for a drink. Bert arrived later with a couple of A.T.S girls not bad either he had previously chiselled in on me. Took a girl home returned on board 12.30pm just about done. Mail on board from Irene, Christmas card and photograph & letter also a card for Bert from her. Boys lost football match but pinched a turkey. Turned in dead beat Bert was on board before me.",
    [
      "Bert",
      "Irene"
    ]
  ],
  [
    "Sunday, 21 December 1941",
    "Have a thick head not actually in the pink. Slight rain today. Boys asked me to clean turkey they cannot do it. Did some more dhobying now made 32/–. Turned in a little earlier tonight, feeling tired. Boys spinning yarns.",
    []
  ],
  [
    "Monday, 22 December 1941",
    "Nothing much today. Went to see a instructional picture on gunnery. I learnt a little from it, lasted all morning. Went ashore at 5.30pm bought a couple of Xmas cards one for Irene. Went to a dance had a fairly good time, one or two wets. Met a swell dancer and A.T.S. girl - not bad either. Returned on board 45 minutes adrift.",
    [
      "Irene"
    ]
  ],
  [
    "Tuesday, 23 December 1941",
    "Proceeded to sea at 9.30am for 1\" calibre aiming. Seas rough transhipped from \"Tui\" to \"Inchkeith\" in a small seaboat – talked about tossed about whew. - Did not do so bad. Returned back to our ship 5.30pm. still rough anchored at \"Dunbar\" for the night, did night shoot 4\" on way to anchorage, pretty good again. On anchor watch at 3am. Folks talk about gale strewth it was blowing - was blown over the winch once.",
    []
  ],
  [
    "Wednesday, 24 December 1941",
    "Still is rough as blazes. Doing A.A. shoot and low angle of 14 rounds. The former was alright the latter only fair. Had to take over towing of target – a devil of a job picking it up – lost a grapplin and few lines in progress – took us nearly an hour. Going like hell to be in before dark – to have a Xmas Eve and day ashore. – Seems rather doubtful – but all hope for the best. Wonder what leave we shall receive. A lot of stores have to be brought on board. Glad shooting exercise is over. Glad shooting exercise is over. The last three days have been very trying and wearying for us all. The grub while at sea has been awful, not enough, cooked badly and also tinned stuff mostly served.",
    []
  ],
  [
    "Thursday, 25 December 1941",
    "At last Christmas Day and here I am in Scotland. One of my ambitions fulfilled to have a Christmas in the British Isles. A party on tonight for all New Zealanders aboard the “Tui” some N.Z’d chap is giving it. Guess I would sooner be home for this than any-where. A Merry Christmas to all at home, hope they have a better one than me. Bottle of beer a piece from Officers, had our turkey. Skipper gave prayers and then had rounds. Received a letter from Ben he has a draft to a destroyer, also received a letter from Billie (N.Z.). Have not heard from Harry for a long time now although I write very frequently. Hope he is O.K.",
    [
      "Ben",
      "Billie",
      "Harry"
    ]
  ],
  [
    "Friday, 26 December 1941",
    "Lovely day sun shining but cold frost is thick on the jetty. Clean up for rounds of Captain of the Base for tomorrow. Went ashore tonight for 30 minutes – returned on board did some dhobying and hair-cutting. Wrote a couple of letters turned in at 11pm.",
    []
  ],
  [
    "Saturday, 27 December 1941",
    "Captain of Base rounds said our ship was too tiddly, too good for us. Left Port Edgar for Leith at 11.45am. arrive to 1.15pm. ice on water. Bert sneaked off ashore he is duty. Did a lot of dhobying and ironing, until 11.30pm – cash is creeping up also did a little hair-cutting. Turned in at 12pm.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 28 December 1941",
    "Ashore 1 pm visited Mrs Leo's sister. Bert came along to. Have a date on for tonight. Ice still to be seen on water and jetty. Had a couple of wets. Mrs Leo's sister & son great people very pleasant afternoon spent. Left at 6:30 pm to meet a couple of the boys and girls. Went to a concert, – had supper after – coffee and chips. Left the girls at 11 pm made date for another night. On board 11.45pm.",
    [
      "Bert",
      "Mrs Leo"
    ]
  ],
  [
    "Monday, 29 December 1941",
    "Cold as the devil everything just about frozen – a lovely day sun shining for a while. No water on board and no steam for 7 days boy is it cold. Make–and–mend today but am duty. Tried to have a bath at a sailor's home too late. Damn cold. Bert sneaked off ashore to meet a floozy. Hope we are ashore New Year's Eve have a swell date. Had a look at photographs of home and a talk. Boys showed photographs to each other of their wives and girlfriends – I was the only one who did not have a photograph to show – not having a girlfriend. Wrote a few letters.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 30 December 1941",
    "Still no steam and hot water – Gee it is cold. Ashore at 5pm tried to obtain a bath – walked into ladies bath ahem. Finished up no bath, – but in pub. Went to Eldorado Dance had a fair time – a few wets and a few rums. Some fair talent was there. Nearly had a fight after Burt felt a little cantankerous all ended well. On board 12 pm.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 31 December 1941",
    "Hell what luck duty – loaned Bert 25/– another chap £1.00 only two ableseaman aboard. Going to walk ashore later for a couple of wets. Rang 16 bells at midnight. Shall have to have a good time tomorrow. Raided the safe on board for a decent supper. Hope you at home have a swell time. Boys starting to come aboard first absolutely drunk.",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 1 January 1942",
    "Wished each other a Happy New Year. Went ashore at 1pm had a bath at Victoria League real good. Proceeded to Palais De Dance swell crowd the some great talent. Went to tea with a couple of girls. Obtained a few wets from Naval Club also had some rum with me. Called on another couple of girls were in bed reviving. Again went to Palais De Dance had a fair time. Came home with three girls - missed the last tram had to walk 4 miles to ship. – on board at 2am. Bert was in his bunk – he did not do too good. Oh sent a cablegram home.",
    [
      "Bert"
    ]
  ],
  [
    "Friday, 2 January 1942",
    "A little tired this morning having danced yesterday for 6 hours. Going to sea at 11am tied up at Granton leaving again tonight darn it. Did some splicing today – I don't think anyone else aboard can splice to good. Time is drawing near for 14 day of hard work a special escort. Did some more dhobying. Turned in at 11.30pm a great moonlight night.",
    []
  ],
  [
    "Saturday, 3 January 1942",
    "Anchor watches at Convoy Bay. A fair number of ships here. We are making up the escort. Now the job starts in earnest. The new jimmy aboard is a fair cow for work – rather inclined to be persa. A little rough now, there are white horses on the water. Made over another pound in dhobying. Received a letter from home, Posted October. Loss of NEPTUNE.",
    []
  ],
  [
    "Sunday, 4 January 1942",
    "Hello raining and rather rough – rigged life-lines around the ship. Only two watches 4 on 4 off. Hope we have a decent trip around the north of Scotland to Tokomaru. Pipe down at 4 pm think I will put my head down. Have a lot of work to do later on. Phew rough as hell – this North Sea is worse than it is talked about. Bert first one seasick O.K. after. Hello I injured myself again in bed rest of trip ordered to hospital when we arrive. From here on until 12th January every day was practically the same. Some swell weather was had during my stay in sick-bay.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 5 January 1942",
    "Hospital",
    []
  ],
  [
    "Tuesday, 6 January 1942",
    "Hospital",
    []
  ],
  [
    "Wednesday, 7 January 1942",
    "Hospital",
    []
  ],
  [
    "Thursday, 8 January 1942",
    "Hospital",
    []
  ],
  [
    "Friday, 9 January 1942",
    "Hospital",
    []
  ],
  [
    "Saturday, 10 January 1942",
    "Hospital",
    []
  ],
  [
    "Sunday, 11 January 1942",
    "Hospital",
    []
  ],
  [
    "Monday, 12 January 1942",
    "Discharge from hospital 1 pm on board ship 2.15pm hills topped with snow this Tobermory is an island. Boys are sure having a gruelling during the spell here. I am on light duties.",
    []
  ],
  [
    "Tuesday, 13 January 1942",
    "Action stations this morning I did not take part. Make and mend this afternoon. Finished my second episode of the letter 81 pages, also dropped Leon a short note of 12 pages, and one or two more home turned in at 11 pm received tin of Cig & tobacco from N.Z.P.F.",
    [
      "Leon"
    ]
  ],
  [
    "Wednesday, 14 January 1942",
    "Up at 6 am proceeded to sea at 8.50am. Rather a fair swell on ship rolling. Submarine attacked us (practice) and M.L. weather pretty good sun shining – still have another seven days yet. The \"Jimmy\" aboard is a fair cow. Everybody tired after days work have watch 2-5am. Turning in now.",
    []
  ],
  [
    "Thursday, 15 January 1942",
    "Returned to sea for the day had had manoeuvres again, and submarine practice attack. Cold is the devil a gale blowing. Wrote home turned in at 10.30pm.",
    []
  ],
  [
    "Friday, 16 January 1942",
    "Still blowing a gale visibility poor. Exercises all morning and lectures in the afternoon. Snowed today a little. Received a letter from M.B.M. the \"Home News\". Had to pull liberty men ashore. Cut Skipper's hair, ha! ha! Did some more dhobying . Whether calm.",
    [
      "M.B.M."
    ]
  ],
  [
    "Saturday, 17 January 1942",
    "Listened to German news on the air, Lord Haw-Haw. At sea again and did a shoot, real good. Still cold and now the hills are covered with snow. Hope to be moving from here soon for the trip home. Expect leave in Greenock. Did some dhobying now made £5-0-0 between the two of us.",
    []
  ],
  [
    "Sunday, 18 January 1942",
    "Marvellous day sun shining. More exercises, – boys just about browned off. Cleaned gun for shoot. Not much food lately and plenty of work. Must go on watch now will write home tomorrow.",
    []
  ],
  [
    "Monday, 19 January 1942",
    "Thank goodness we leave this week. Cleaned mine sweeping store. Lecture in first-aid etc, raining and blowing like hell, and going to sea for a shoot of full calibre. Shoot cancelled snowing like and & cold struth. Honestly all chocka of this place. Hope for better weather tomorrow.",
    []
  ],
  [
    "Tuesday, 20 January 1942",
    "Proceeded to sea 7.30am. Pretty good day. Submarine practice attack. Fair swell on. Just about tired out and as cold as the devil. Duty tonight. Bert not too good. All reckon it is the food that we are given.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 21 January 1942",
    "Weighed anchor 8:30am proceeded on our way to sea. Hell of a wind blowing talk about seas rough as hell. Wet through – seas over bow and stern also gunwale. Cold as hell, snowing. Emergency watches tonight. Nearly had collision lucky we got off lightly as a scrape. Tanker cleaned up another ship, too rough to tie up in port had to proceed to sea. Turned in fully dressed for emergency. Hope you are having decent weather at home. Awful here what with no leave, bad weather and awful grub. All nearly complained of crook stomach.",
    []
  ],
  [
    "Thursday, 22 January 1942",
    "Weather, today snow all around, and darn cold. Received mail from home full calibre shoot today. Leave for Greenock tomorrow. The best shoot of Tobermory Bay again at 5 pm. Night blackout drills. Wrote home.",
    []
  ],
  [
    "Friday, 23 January 1942",
    "Good last day here, sail today. Commodores inspections. Cleaned ship. Gave us a run through. Sailed at 5 pm for Greenock the first stage of our journey home. Now in the Atlantic, due in about 6 am tomorrow. Raining slightly and cold as hell snow covering the hills. On duty again at 8 pm. Boys all thankful that we have left this place wish for sailing orders for home to hurry along, very keen to be on the way home. Food is still not to good, parcels we received are a God send and very welcome.",
    []
  ],
  [
    "Saturday, 24 January 1942",
    "Arrived Greenock at 10.30am after rather good trip. Oiled in stream and then proceeded to Jetty. Went ashore 5 pm what a lot of snow and slush over our ankles. Had a few wets – this place is not too hot. I'm bored at 10 pm.",
    []
  ],
  [
    "Sunday, 25 January 1942",
    "Ashore at 3 pm still snow on the ground had a decent meal. Went for a concert. Missed last bus obtained a taxi. Plenty of floozies around, wish you were with me Leon & Harry.",
    [
      "Leon",
      "Harry"
    ]
  ],
  [
    "Monday, 26 January 1942",
    "Snowed today – painted ship – still cold. Duty tonight – on leave tomorrow for nine days, going to London, may call at Manchester. Turning in now good night.",
    []
  ],
  [
    "Tuesday, 27 January 1942",
    "On leave today. Lt Comd. Hilliard came on board. We are staying here for a month – waiting for other ships – doing envoy work. Left ship 1 pm arrived at Glasgow 2.30pm stayed overnight. Went to Laceano Dance Hall had a swell time – yes clicked Leon returned to digs at 2 am. Wacko!",
    [
      "Lt-Cdr Hilliard",
      "Leon"
    ]
  ],
  [
    "Wednesday, 28 January 1942",
    "Had another look around – left for Edinburgh 2pm for Newcastle arrived Newcastle 7.15pm – had something to then dancing at the Oxford Hall. Beard caused a small sensation had swell time. Some good Magazine Covers there Leon. Saw a couple home.",
    [
      "Leon"
    ]
  ],
  [
    "Thursday, 29 January 1942",
    "Hell cannot stay in bed after 7:30 am as bad on board. Strolled around tried to look around Vickers Armstrongs munitions works – not enough identification papers – a big place. Had a look around Newcastle Brewery – wacko! Before going there I was out with an Aussie, Canadian, two Poles, had a swell afternoon. Went dancing in the evening. Many happy returns Mum.",
    [
      "Mum"
    ]
  ],
  [
    "Friday, 30 January 1942",
    "Just strolled around again feeling rather tired. Snowing like hell & cold. Visited the Crow's Nest pub. Bert met a fair effort. Still trying to coax Bert to visit Manchester.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 31 January 1942",
    "Left for London hell what a cold journey dam freezing – only my feet are cold. Loaned my coat to a W.A.A.F & N.A.A.F.I girl the poor devils come cold. Arrived London 7:30 pm. Had a hell of a job looking for a bed. Could not obtain one so left baggage at Y.M.C.A. trying to do their best for us. Dancing at Paramount Dance Hall. – took a fairy home – not bad. Could not obtain a bed at Y.M.C.A. so had to sleep on a chair. Bert slept in a tube station. What a night! Mild and a great moon.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 1 February 1942",
    "Up at 5.45am snowing like hell, 4\" deep. Proceeded to the U.J.C. purchased a room for the night. Bought a couple of souvenirs. Had dinner at the N.Z. Forces club also tea. Met a couple of Wrens and later Jack Lynch. Palled up with a couple of W.A.A.Fs later, one was Welsh, did alright too. Leaving for Manchester tomorrow.",
    []
  ],
  [
    "Monday, 2 February 1942",
    "Arrived M/C. 5.20pm. went to Y.M.C.A. danced at the \"Pity\" after a couple of wets feeling pretty good. Met a number of floozies does not take any home Bert did. Also met a couple of \"Hotters\". In bed at midnight.",
    []
  ],
  [
    "Tuesday, 3 February 1942",
    "Decided to visit relations Bert stayed in town. Called on Gerti had dinner gave me a table cloth for mum. Called on Edwin he was out could not obtain Bills address. Visited Taylors. They were pleased – met their son. Proceeded to Harry's place only young Des home. Went to where Harry worked had a look around and then met him – was he surprised I'll say he to showed me more of the place. Introduced to the managers and big noises. Saw all at work and the procedure – some fair talent, working there. Crossley motors was the place. Also saw how the \"Ansen \" Bomber is made from the rew materials. Met Harry outside work and went home for tea. - met his mother gay sort. wondered where Bert was. Harry & I went to the Pity returned home slept there the night. Edwin is a hard-case. Said so long and went to meet Bert at the station. train went rather late so went back to Harrys. Bert was pleased to meet him. Glady was surprised us coming back as she was washing. Gave her the days rations for letting us stay over-night. Harry Bert and I then went to Belle-Vue nothing doing there. Called on Irene she pleased to see us. Back home again for tea and then a stroll around before catching the train. Harrys dad came home just before we left. Young Harry did not go to work this day had it with us. Said so-long may one day see them again. Keen on coming to N.Z. young Harry.",
    [
      "Bert",
      "Gerti",
      "Mum",
      "Edwin",
      "Bill",
      "the Taylors and their son",
      "Harry",
      "Des",
      "Harry's mother",
      "Glady",
      "Irene",
      "Harry's dad",
      "young Harry"
    ]
  ],
  [
    "Wednesday, 4 February 1942",
    "Left for Glasgow at 1.10am arriving at 10am.",
    []
  ],
  [
    "Thursday, 5 February 1942",
    "Strolled around and then went to the Paramount theatre had some fun with the \"usherettes\" made a couple of dates. Returned on board at 7.30pm browned off for the Middle Watch.",
    [
      "The usherettes"
    ]
  ],
  [
    "Friday, 6 February 1942",
    "Nothing much today second watch went on leave. Did G.M. Duties. Went dancing met a couple of fairies saw them to the bus and made a date for Sunday. On board at Midnight.",
    []
  ],
  [
    "Saturday, 7 February 1942",
    "Up at 7.30 cleaned mess usual routine. Answered mail - received tin of biscuits from Mum Bert received her parcel to. Stayed aboard wrote home. Turned in at 10.30pm.",
    [
      "Mum",
      "Bert"
    ]
  ],
  [
    "Sunday, 8 February 1942",
    "Have now a dog & cat aboard. Fair weather sun shining - snow still on ground & hills a date went to a concert not bad, could not obtain a taxi had to walk 3 miles and then go on duty until 4am.",
    []
  ],
  [
    "Monday, 9 February 1942",
    "Painted ship grey. Little rain. Dog fell overboard. Had a blind date - pretty good time. Missed last train came back to Gaurock on Newspaper Van Daily Express - onboard 5.40am. What a night.",
    []
  ],
  [
    "Tuesday, 10 February 1942",
    "Painted ship - usual routine. Having some good food lately on 14 aboard. Snowed & hail stones not much. Turned in 7pm on duty midnight, doing couple extra hours for a sub. Weather improving now, or getting climatized.",
    []
  ],
  [
    "Wednesday, 11 February 1942",
    "Still painting ship. 5 French Corvettes along side us. Weather not too bad. Went to Glasgow arrived 6.40pm had a few wets met a couple of fairies had supper. Whew what a night at a price. Had a good time though. On board at 12.30pm made quite a number of dates during the evening.",
    []
  ],
  [
    "Thursday, 12 February 1942",
    "Rather a thick head this morning usual routine. Had my head down in the afternoon. Pay-day thank goodness. Oh I am not broke but last night I had to crack the bank. Bert received a parcel from home and I the Tiki. Heard 3 German Subs destroyed trying to enter Clyde.",
    [
      "Bert"
    ]
  ],
  [
    "Friday, 13 February 1942",
    "Still painting ship - weather not bad Bert and I went ashore to Paisly & Glasgow - visited the Fun-Fair - not too good a night. On board at 12.20pm.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 14 February 1942",
    "Duty today have sub for 1hr going ashore between watch. Mishap with revolver chap pulls trigger. Visited the Queens Hotel - tried to get into a dance at 8.45pm crowd outside every dance hall - On board at 9.50pm. Duty again at 4am.",
    []
  ],
  [
    "Sunday, 15 February 1942",
    "Pipe down at 11.30am endeavoured to go ashore, Met Doris Millien Hollar Babe\" had a good afternoon and evening - missed last train went at 9.50pm instead of 11pm. Slept ashore Allied Seamans Rest. on board 7am.",
    [
      "Doris"
    ]
  ],
  [
    "Monday, 16 February 1942",
    "Fairly good weather, still painting & cleaning ship. Bert had a hectic night out. Met Doris had a couple of wets – proceeded to pictures. good evening spent. Jim & Lynn left bioscope early. On board 12.30pm. During evening argument, nearly started with English Officer would have been fight had I been on my own. Hell!",
    [
      "Bert",
      "Doris",
      "Jim",
      "Lynn"
    ]
  ],
  [
    "Tuesday, 17 February 1942",
    "Hells Bells is it cold today brr, have a darn cold, dash it. Bert also has one. Turning in early tonight darn tired.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 18 February 1942",
    "Met Doris again 6pm. takes an hour to search Glasgow. Proceeded to the \"Grant Arms\" Hotel then pictures. Caught 11pm train on board 12.30pm",
    [
      "Doris"
    ]
  ],
  [
    "Thursday, 19 February 1942",
    "Bert not on board heard he is in the colder been in a fight some Pongo pushed broken bottle in his face - had Tetikker inserted. Time now is 2pm and he is still ashore. Visited the dentist. Going out on convoy work today. More troops shipped on to transports. Weather is fine but still as cold as hell. Bert on board face bandaged. Out in Stream testing compass. Hope we do not go far I want to go ashore & look for the cur who did it to Bert. Dont blame me Mum. After some mucking around we eventually had to sail - left harbour 10pm calm and a little misty.",
    [
      "Bert",
      "Mum"
    ]
  ],
  [
    "Friday, 20 February 1942",
    "Still calm, sunny day, tired as hell. Had to scrub decks off watch, turned in at 3.20pm. up at 6.45pm had supper ready for duty at 9pm. Bert a little better today face still sore. In sight of land again. Hope to be in port again Tuesday. Bill Jordan N.Z. Comm. visiting us prior to leaving for home. Hope for weather like present for the trip. Wonder what you are doing at home.",
    [
      "Bert",
      "Bill Jordan"
    ]
  ],
  [
    "Saturday, 21 February 1942",
    "Hells Bells is it cold snowing and wind blowing like hell. Bit of a hiding today vastly different from yesterday. Bert a lot better. Hell cured beef again thats all we seem to get. Due in port at 11pm.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 22 February 1942",
    "Good day calm, cleaning up for Commissioners visit. Secure at 11.30am. Did some dhobying, stayed on board, Cold on deck, turned in 10.15pm.",
    []
  ],
  [
    "Monday, 23 February 1942",
    "Another good day cold as hell. Inoculation, put it across the doc. Received a letter from Glasgow girl wants to buy me a ring, ahem! Cecil payed us a visit. Bert gone ashore, a lot better. Wrote a few letters to girl friends.",
    [
      "Bert",
      "Cecil"
    ]
  ],
  [
    "Tuesday, 24 February 1942",
    "Good weather again - cleaning up for Bill Quidans visit. Went ashore to Dance \"Craigburn\" not bad woman not so hot. - could have taken Wren home. On board 11.45pm.",
    []
  ],
  [
    "Wednesday, 25 February 1942",
    "Final clean up. high Commissioner came aboard 1.15pm took 5 photos of him - decent sort of chap. Had inspection and then a speech from him - gave him 3 cheers. Sneaked ashore to pictures - sat aside coxwain - hell. On board 9.50pm. Hope to leave very soon now. So  long Mum & Leon All the Best.",
    [
      "Bill Jordan",
      "Mum",
      "Leon"
    ]
  ],
  [
    "Thursday, 26 February 1942",
    "Forgot to mention that I cut captains hair for the occasion also Lt Palmers of Auck. last 3 or 4 days sure were busy for me. Bill Jordan went ashore. Checked over sweeping gear prior to going out. Bert sent to hospital face rather serious. Hope he does not miss the ship. Buzz of going next week. Ashore tonight at a dance Had a pretty good time on board 30 minutes adrift.",
    [
      "Bill Jordan",
      "Bert",
      "Lt Palmer"
    ]
  ],
  [
    "Friday, 27 February 1942",
    "Went to sea - raining. Rigged sweeping gear too rough to sweep. Saw captain about staying here as Bert could not come with us - good news. Bert will make it alright. Weather cleared up good. Anchored for the night at Rothesay Bay - kept anchor watch.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 28 February 1942",
    "Did mine sweeping dropped 2 depth charges - weather not bad. In port again at 4.30pm Bert came on board just visiting. Ashore 5.30pm bought a few souvenirs - went to the Queens Hotel had a few wets, then a dance - pretty well hooped. Saw a fairy home on board just after 12pm. Realised I was a year older.",
    []
  ],
  [
    "Sunday, 1 March 1942",
    "Yes a thick head this morning think I will lay off the hops. Went to Glasgow looking for cur who cut Bert's throat - had no luck. On board at 8pm. left shielas alone. latest buzz - for home on Tuesday. Not time has come sought of feel sorry to leave, perhaps it's the love-bug at work again.",
    []
  ],
  [
    "Monday, 2 March 1942",
    "Still cold, fixed Mine Sweeping davits. Bert came on board from hospital. Ashore at 4.30pm went to pictures saw \"Andy Hardy Steps Out\". Met a couple fairies went to a party - hell what a party ha! ha! Walked back on board took me 1 hour.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 3 March 1942",
    "Wind blowing up. Dont think we will be going this week. Duty today did some dhobying - cut 1st Lieut's hair. Wrote a few letters. turned in at 10.30pm",
    []
  ],
  [
    "Wednesday, 4 March 1942",
    "Raining like the devil - have a date to - ashore at 6pm. met cobber sheilas did not turn up had a couple of wets, made a date with barmaid for Sunday. On board 10pm. turned in.",
    []
  ],
  [
    "Thursday, 5 March 1942",
    "Snowing & as cold as hell. sea rough broke line trying to pull ship in. Secured for going to sea. Duty today - did some dhobying & haircutting. Received a Christmas card from Frank. Bert had a letter from N.Z. friend, told it seems as if they are going to the extreme in blackouts, back there. Sortony turning in now 10.30pm.",
    [
      "Frank",
      "Bert"
    ]
  ],
  [
    "Friday, 6 March 1942",
    "Gave sweeping store a good clean. Snowing like the devil. Ashore at 4.50pm still snowing & cold. - bought some biscuits for men - had to present a silver fern to the girl behind counter. Ashore again at 7.30pm. gave tin of pudding & tongue to chap on gate. Had a couple wets saw barmaid - went to \"Craigburn Dance\" had a good time. Blizzard blowing in way to ship over my seaboots, never seen so much snow. When on board made supper - turned in 12.30pm.",
    []
  ],
  [
    "Saturday, 7 March 1942",
    "Still snowing not so heavy. Had a darn good snow fight. Snow came down heavy in evening. Bought stores aboard. Duty tonight did a little dhobying, read turned in at 10pm. rather tired.",
    []
  ],
  [
    "Sunday, 8 March 1942",
    "Clean snow off decks had fight with Scarba crew their skipper joined in. Divisions church service on board. No leave darn it we are going to sea. Left 4.30pm with convoy Rangitata included in convoy - passed ships laden with troops going into port. Sun shining snow makes a lovely picture on hills and mountains. Great night clear, moon shining. past destroyer & submarine. Turned in 3am tired and cold.",
    []
  ],
  [
    "Monday, 9 March 1942",
    "Lovely day sunshining had sun baths. Gun drill, abandon ship, fire stations. Fair sized ships in convoy. Few planes overhead but were ours everytime on came into view all eyes focused. Issued with skin jackets for warmth. Janky skippers of o/ ship gave a little trouble at first. All five N.Z. ships with this convoy. Calm and clear night. Up at 3am.",
    []
  ],
  [
    "Tuesday, 10 March 1942",
    "Left convoy at Lock H proceeded back night still clear ran into one shower. Had fleet manoeuvres \"Scarba\" steering gear jammed delayed us two hours. Painted deck, cut hair. On duty again 9pm Guess I will turn in now tired. Buzz leaving in about 10 days I wonder when. Guess Bert will have his birthday at sea. Plenty of ships tonight have to keep careful look out 12pm now being relieved.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 11 March 1942",
    "Clear morning sun not up yet. A real pleasure to be at sea this trip - yes still cold. Past the Isle of Craig 8.00am will be in soon. Aircraft carrier Glorious passed us. Oiled up before entering the harbour. On duty so did dhobying. Boys came of drunk bought dock, [sigma], photos with them - yes drunk! Turning now just had a bath. So-long.",
    []
  ],
  [
    "Thursday, 12 March 1942",
    "Scrubbed decks, breakfast awful. Disagreement over coxswain again. Not much doing today painted. Bert Q.M. does not like it. Going to Glasgow tonight meet a fairy. Had a pretty good time some great talent there Leen - ahem! --On board-- Lucky obtained last bed in Treas club.",
    [
      "Bert",
      "Leen"
    ]
  ],
  [
    "Friday, 13 March 1942",
    "On board 5 minutes adrift ship was just pulling out moving to another place. Went to dentist another tooth filled. Rather tired tonight did a little ironing then turned in. Bert is now solely in charge of the washing of the 4\", glad to be rid of the Q.M.s job.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 14 March 1942",
    "Made everything secure for sea, strong buzz going tomorrow. Ashore at 5pm. bought bread, milk, biscuits. Went ashore again 6pm. had a couple of wets well a few. Met the barmaid & cobber had a well time, the best in Greenock. made a date for tomorrow 6.30pm Hope it is fulfilled a great fairy, good sport.",
    []
  ],
  [
    "Sunday, 15 March 1942",
    "Gave the upper deck once over. Clean lower decks. The time has come we leave today 1800 for the trip home. Had farewell church service the crews of 5 ships. Weather report of Atlantic storms hell hope we get a decent trip. Wrote final letters to English friends. Left Greenock jetty 4.45pm proceeded to Rothesay Bay and anchored till midnight. Creating part of the convoy to the rendezvous off the coast of Ireland. Convoy consists of 40 ships escorting vessels N.Z. ships destroyers & corvettes. Duty at the anchor until 9pm. then on again as lookout at 3am. Turning in now cheerio. Hope we have a good run of fine weather.",
    []
  ],
  [
    "Monday, 16 March 1942",
    "Weather not too good visibility poor, foggy. Proceeded with convoy picked up more ships at sea from Liverpool proceeded to rendezvous for rest of convoy from Belfast. 12 cocating vessels. Weather seems to have improved a little. Now on way home do not feel thrilled about it. First port said to be St John's Newfounderland. Attacked submarine don't know whether is was sunk or got away. Off watch 12pm turned in while still having for the submarine.",
    []
  ],
  [
    "Tuesday, 17 March 1942",
    "Great day sun shining. A big swell is on ship rolling like hell. Killegrey in collision merchant ship no damage. Overcast at sundown barometer falling hope we are not in for a rough spin. One chap seasick, Bert not his best neither are a few others. Turning in now on duty at midnight. For supper salmon, and apology for soup. Hell I never want to see salmon or corned beef for ages, Hell she's rolling.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 18 March 1942",
    "Clear night more depth charges dropped this morning. Lovely day had sun bathe. Speed still 7 1/2 knots one Greek ship cannot keep up with us. Had gun practice, fire stations, etc On duty again at 6pm. Ship still rolling.",
    []
  ],
  [
    "Thursday, 19 March 1942",
    "Hells bells talk about roll the Atlantic sure can be rough Plane sighted this morning was in suspense till recognition lights were dropped. Showery and a few green ones came over the bows, one nearly wet me though. Wind dropped a little - bet a tot weather same tomorrow. - hope I lose. Turned in tired and feeling not too good.",
    []
  ],
  [
    "Friday, 20 March 1942",
    "Lost my tot weather good am pleased. More depth charges dropped last night. Gale starting blowing like hell, in for it I guess.",
    []
  ],
  [
    "Saturday, 21 March 1942",
    "Taking in seas everywhere - decks leaking, cabins wet, mess deck wet upper around in 6\" water all the time. Properly browned off wonder what a calm feels like.",
    []
  ],
  [
    "Sunday, 22 March 1942",
    "Church service - still blowing not so bad. Half way to St John's. Short of bread, food consisting of corned dog or salmon, hellish. Lovely clear night, rather a change. Duty till midnight. Raided galley.",
    []
  ],
  [
    "Monday, 23 March 1942",
    "Great day sun shining still a swell on. Mishap in galley Tank burst (water). Cut skipper's hair. Waking on ship's magazine. Good clear night.",
    []
  ],
  [
    "Tuesday, 24 March 1942",
    "Lovely day best to date. did some hair-cutting, sun-bathed. Water on board no good three boys sick. Corned dog for breakfast & dinner, big eats for supper thank goodness.",
    []
  ],
  [
    "Wednesday, 25 March 1942",
    "Being checked by submarine extra look-out stationed, cold as the devil. Foggy and fairly rough still cold. Food not bad today, pretty good. On duty 9pm - 12pm very cold watch.",
    []
  ],
  [
    "Thursday, 26 March 1942",
    "Duty 6am. great day left convoy proceeded on our own (5 ships) to St John's, expect arrive tomorrow night. Had action stations etc gun drills. Last submarine, weather hellish starting to snow & blow.",
    []
  ],
  [
    "Friday, 27 March 1942",
    "Hell's bell what wind and snow sea rough, being toned like oak. Due in tomorrow now, visibility poor decks leaking everywhere wet. About worst come upon yet.",
    []
  ],
  [
    "Saturday, 28 March 1942",
    "Sun coming out wind died down snow stopped. In port at 1.30pm calm in harbour. Shore leave no money 20cents to get ashore. Told English silver good. Bert went ashore had fair time, things dear.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 29 March 1942",
    "Sun shining good, snow all around thought we had seen last of it. Glad to be in port. Issued with 10dollars. Bert dying to be ashore again I loaned him a few bob last night. Trip took us 13 days of all kinds of weather. Buzz we leave Wednesday.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 30 March 1942",
    "General clean up, sun shining quiet ashore 4.30pm had ice cream milk shake, bought silk stockings box chocolate had good meal & apple pie. Had few wets beer no to good. Went in low dive had vile beer 10c. 4pts. Girls not so hot here. Only pictures entertainment on board 12.30pm cost us 20c each way.",
    []
  ],
  [
    "Tuesday, 31 March 1942",
    "Ashore on “Scarba” for log line, did a little shopping bought photograph album books for youngster. Heard that 3 subs were chasing us across got one of them. Nice today snowing like hell & cold. did some dhobying been made Ldg. seaman also hair-cutting. Water  frozen again. Read for awhile turned in at 10 p.m.",
    []
  ],
  [
    "Wednesday, 1 April 1942",
    "Stopped snowing, sun shining, still cold. Going ashore to spend all Canadian money that I have. Dinner today awful. Ashore 8pm. Dancing Y.M.C.A. Awful dances, big cab took no one home, could have. Bert out with cobber & 2 sheilas.",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 2 April 1942",
    "Snowing like devil gale expected talk about lines out. Duty tonight staying on board. Buzz sailing tomorrow have a few souvenirs from here still stocking cookies cover, kids books etc",
    []
  ],
  [
    "Friday, 3 April 1942",
    "Water frozen ice all around sun shining, sail today. Issued with woollen caps, books, magazines. Left jetty 10.30am good swell outside and cold as hell.",
    []
  ],
  [
    "Saturday, 4 April 1942",
    "Weather getting warmer sun shining temp 35° water 32°. Had action stations gun drill with gas masks, etc. Dinner not bad no sweet supper terrible. Temp no 42° water 34° wind down a little sea still swell. On duty at midnight hope it is warmer. We are all properly browned off with the cold. Couple of planes over, had scare for a moment thought one may have been a Jerry while in observing. Passed convoy rather big one. Great sun-set.",
    []
  ],
  [
    "Sunday, 5 April 1942",
    "Dull and raining at times. Lost one mascot the dog. Left the Labrador current & entered the Gulf Stream. Temperature rose 7degrees in 1/2 hour, 100% better now on watch. Had church service.",
    []
  ],
  [
    "Monday, 6 April 1942",
    "Great day warm and calm. Gun drill etc. Boys discarding jerseys etc. Wreckage floating around & dinghy, ship must have gone down. Real good to have decent weather.",
    []
  ],
  [
    "Tuesday, 7 April 1942",
    "Sun bathed, cut hair. Painted ship did look-out in crow's nest. Swatting up for exam. Good moonlight night. Expect to be in tomorrow afternoon wacko! For shore leave.",
    []
  ],
  [
    "Wednesday, 8 April 1942",
    "Saw land 11am. Berthed at 4pm. Pilot came aboard at St john's took us to Somerset Dockyard. Great place very attractive waters very blue. Hell duty tonight. No black-out ligths shive a real treat. Starboard watch ashore came off all drunk and showing bruises & cuts. fell over.",
    []
  ],
  [
    "Thursday, 9 April 1942",
    "Painted ship in sun very hot. Make & mend today. Went to Hamilton across the water very picturesque place was wonderful scenery, never forget the sites. No cars allowed all bicycles & horse & carts. Great colourful buildings. Bought cards bathing suit silk one, films etc. Had supper went dancing and had a few wets beer is canned drank cocktail. Canadian Clubs. Met couple fairies had a fight, slept ashore. Truly I had a wonderful night ashore a great time - made friends with a couple American sailors. Was ashore with Trapper Dan.",
    [
      "Trapper Dan"
    ]
  ],
  [
    "Friday, 10 April 1942",
    "Sun bathed, painted ship. Received the bird over new bathing suit. Cut more hair - did dhobying. Bert's ankle about the same. Is he raving to go ashore. Sleep on deck now lovely and --warm-- cool. Heard the H.M.S. Dersetshire & Cornwall sunk - hell when are we going to retaliate? also \"Carrier\" Hermes! One good thing the black-out has not started here yet. Only three on board Bert myself and cobber. Turning in now so-long.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 11 April 1942",
    "Painted ship. Swimming before dinner. Leave from 1pm had good look over town bought souvenirs. Had ice cream & apple pie - saw fight. Went dancing not bad, good supper.",
    []
  ],
  [
    "Sunday, 12 April 1942",
    "On board 8am. Discovered Bert in hospital foot being Xrayed. He will curse when told luscious fairies asking he will buy milk shakes all day.  Church service this morning choir girls best I have seen here. Had march past Comm. Salute. Turned in, in afternoon. Duty today.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 13 April 1942",
    "Still painting, rigged awning for party aboard tonight. Little rain. Ashore 4.15pm had photo taken on movie film. Strolled around town bought cards of town. Had a wet met civie went home with him had few wets and supper. Saw lot of Island on board 12.10pm turned in tired.",
    []
  ],
  [
    "Tuesday, 14 April 1942",
    "Painted hull, sun bathed. Not much for dinner. Cash running low cannot spend English £1 something wrong with engines probably stay longer now. Duty tonight cut hair, boys on other ships - turned in 10.30pm slept on deck.",
    []
  ],
  [
    "Wednesday, 15 April 1942",
    "Painted during morning. Arranged for kid's party at 4pm - 6pm. About 40 came on board, all had a good time. Went ashore with trapper met some boys who he met in Auckland off the Savanah, had a few wets. Later had a few more went to a dance was private, had a ride in a \"cabby\". pretty well pickled. Climbed fences to our bed, was locked out during evening nearly had two fights.",
    [
      "Trapper Dan"
    ]
  ],
  [
    "Thursday, 16 April 1942",
    "Hell clocks went on 1 hour had only 3 1/2 hour sleep. Rather hazy in head bought lemonade had a lot for [reveries]. Made and mend thank goodness. Went swimming. Had good supper. Turned in early. Bert is still in hospital. He has not mined much at this place.",
    []
  ],
  [
    "Friday, 17 April 1942",
    "Little rain this morning painted hull. Went ashore to dance, had swell time, pretty well hooped. On board 2.30am. Tired out.",
    []
  ],
  [
    "Saturday, 18 April 1942",
    "Bert came out of hospital 10am. Raving to go ashore. Duty today. Played gramophone sure did bring back memories. Darned tired turned in early. Wish we could send mail home. Never mind hope to see you in 3 to 4 months time.",
    [
      "Bert"
    ]
  ],
  [
    "Sunday, 19 April 1942",
    "Raining like hell, - admirals inspection. Hired bicycle went touring took photos had swell time, met fine girl & friend I met at dance. Last day in Bermuda.",
    []
  ],
  [
    "Monday, 20 April 1942",
    "Left Bermuda 955am for Jamaica. Great day - saw 2 finned shark swim by. Had sleep in afternoon. Difference keeping watches now to England & Canada. Must drop a line home from next port if possible.",
    []
  ],
  [
    "Tuesday, 21 April 1942",
    "Carrying another 3 passengers. One chap left behind has yellow jaundice. Rained like hell last night, great today had siesta in sun. Bert's foot not quite better. Had gun-drill etc. Dont know whether to go for exam or not. So-long until tomorrow.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 22 April 1942",
    "Rained like hell for a couple of hours. Sun bathed. Fired two rounds of 4\". Cut Lieut Frankham's hair & skippers. Usual routine. 11pm pinged sub. Cleared up at 9am.",
    [
      "Lieutenant Frankham"
    ]
  ],
  [
    "Thursday, 23 April 1942",
    "hot as hell. On watch 9am. Grub awful not enough bread mouldy stinks. Gum giving me trouble lack of proper food out of bread now. Hot as the devil.",
    []
  ],
  [
    "Friday, 24 April 1942",
    "Still no bread cook made some dinner time I loaf for 10 men for 24 hrs. Waters infested with subs. Depth charger dropped - 3 times today, getting common now. Cut 1st Lieut hair & skippers also some crew. Turned in dhobying time. Bert's foot just about O.K. Passed Maya island running another island afternoon.",
    [
      "Bert"
    ]
  ],
  [
    "Saturday, 25 April 1942",
    "Forgot it was Anzac Day. Passed Cuba this morning & Navassa Island after little sun-bathing. Due in tomorrow am. Hot as hades. Still going for higher rating.",
    []
  ],
  [
    "Sunday, 26 April 1942",
    "Arrived Jamaica 9.15am. Oiled proceeded to berth. Tons of fruit had first banana for over 12 months. Very hot. Darkie women swarmed on jetty for dhobying they sure can do mine. Duty today some of the boys from other ships blotto already. Sure seems a great place must purchase souvenirs. Bert out on patrol I offered to do it, nothing doing. Tropical rig worn now. Going for exam, Must turn in now have the middle.",
    [
      "Bert"
    ]
  ],
  [
    "Monday, 27 April 1942",
    "Ashore 1pm. Noticed some fair efforts. Hell what a place hopped in car with sheilas first it has ashore. Had few wets ahem! What a place the best I have been to fun for a real experience if only Leon & Harry were with me. Visited local bacchants did not in-deluge was hooped up. Bought a few souvenirs etc. A real swell time Bert went exploring for bacchantes, in St. Andrews & La Pavert.",
    [
      "Bert",
      "Leon",
      "Harry"
    ]
  ],
  [
    "Tuesday, 28 April 1942",
    "People sure turn it on for us. Invitations to swimming baths, cigar factory, Wembley hotel, etc. Visited cigar factor, had good time, bought [ptoal] strolled around went to Palm Beach what a place took some photographs ahem! A lot I can tell you about this place. Started back 9.30pm. called at Blue Peter whew! Left there then had - what a night sure enjoying myself here. Traded flannels for two baskets. A real good evening.",
    []
  ],
  [
    "Wednesday, 29 April 1942",
    "Hell have to work this afternoon am tired & broke think I'll stay aboard. Obtained 50 bunches of bananas for crew. Hell sure is hot, Bert has gone ashore for what, ha! ha! Packing off tomorrow. Think Ill hop ashore spend last 1-3 in Jamaican money.",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 30 April 1942",
    "Up at 5am. Left jetty 6am for Colon. Hellish hot sweat drips of ink. Very tired today. Have new mascot golden haired spaniel. Notice last day of another month.",
    []
  ],
  [
    "Friday, 1 May 1942",
    "Great moonlight morning saw Southern Cross. Had evaluative. Very hot. Painted ship usual routine. Siesta in afternoon.",
    []
  ],
  [
    "Saturday, 2 May 1942",
    "Doubtful if we will arrive tonight. Sanda has trouble. Hells bells just cruised around 6 knots. Passed a few ships. Rained during night first for meal.",
    []
  ],
  [
    "Sunday, 3 May 1942",
    "Arrived Colon 11.30am pilot came aboard also docker. Dropped anchor waiting for further orders. Dash it staying in stream until tomorrow.",
    []
  ],
  [
    "Monday, 4 May 1942",
    "Plenty of planes here. Tied along jetty 10am. Duty today. Oiled ship. Good reports from boys coming off. Made welcome. My turn ashore tomorrow. Have been browned off for Q.M's duties. Bert guest to canteen. Big crabs on jetty.",
    [
      "Bert"
    ]
  ],
  [
    "Tuesday, 5 May 1942",
    "Plenty of sand-flied and mosquitoes. Palled up with a couple of sergeants invited to dinner - had a great time with officers as well, great fellows. Bought souvenirs, went to night clubs saw strip tease. Had photograph taken met ship's officers had wet with them. Overstayed my leave 4 hrs.",
    []
  ],
  [
    "Wednesday, 6 May 1942",
    "Very tired this morning very little sleep. Usual routine. Friends came on board gave them souvenir coins, badge etc. Turned in at 10.10pm on duty 12pm",
    []
  ],
  [
    "Thursday, 7 May 1942",
    "Rained like the devil this morning. Having dinner at barracks. Ashore at 1pm. Invited sergeants over for my tot. Leon sure would enjoy himself here. Farewell to solders. Went to town visited night clubs saw great strip tease dances. Wacko! On board hour adrift Bert was 3hrs. Now shaved off.",
    [
      "Leon",
      "Bert"
    ]
  ],
  [
    "Friday, 8 May 1942",
    "Left jetty 8am. Travelled through canal all day berthed at Balboa 6pm. \"Chocka\" of this ship be glad when drafted off it. Wished I had of stayed in England, not fair deal.",
    []
  ],
  [
    "Saturday, 9 May 1942",
    "Raining like hell. Free ice-cream issued to us. People pro Nazi. Cut hair. Had siesta. Heard of great naval battle off Australia.",
    []
  ],
  [
    "Sunday, 10 May 1942",
    "Left jetty noon, start of second lap. Rained like hell, rather picturesque place. Chocka be glad when trip is over. Have now lost cat - have cocker spaniel O.K. Now. Riding lights on.",
    []
  ],
  [
    "Monday, 11 May 1942",
    "Little colder, rained. Tired. Action Stations",
    []
  ],
  [
    "Tuesday, 12 May 1942",
    "Bert's Birthday, still raining but warm. Had a fight.",
    [
      "Bert"
    ]
  ],
  [
    "Wednesday, 13 May 1942",
    "Sighted Mexico 5am. Shoal of sharks, drifting logs. Scarba came alongside with 1/2 day Tuna, cook spoilt it. Better weather in view.",
    []
  ],
  [
    "Thursday, 14 May 1942",
    "Dull by warm - Heat rash & mosquito bites, Still chocka worst ship been on.",
    []
  ],
  [
    "Friday, 15 May 1942",
    "Very hot sun bathed few showers. Saw turtle. Sick rating came aboard have to in Pacific, usual routine. Plenty of porpoises and turtles.",
    []
  ],
  [
    "Saturday, 16 May 1942",
    "Many sharks & Tuna, perspiring like hell. Capt rounds.",
    []
  ],
  [
    "Sunday, 17 May 1942",
    "Divisions, church; more turtles & sharks. More discontentment, snivelling. Will I get off this ship? Sun-bathed. Painted ship. Scant of food.",
    []
  ],
  [
    "Monday, 18 May 1942",
    "Plenty of porpoises - painted ship. Scarba coal on fire - Have to move sick ratings, took photographs.",
    []
  ],
  [
    "Tuesday, 19 May 1942",
    "Painted ship - eyes bloodshot - not much food. - cut hair - great weather so far. - more porpoises - a little colder tonight - due in port week today.",
    []
  ],
  [
    "Wednesday, 20 May 1942",
    "Painted ship - food pretty low 3 pieces bread 24 hrs. - food not bad this trip.",
    []
  ],
  [
    "Thursday, 21 May 1942",
    "Choppy today - painted ship - specially still - rather cool - asked for $50 next port - cold as hell on watch 9-12pm",
    []
  ],
  [
    "Friday, 22 May 1942",
    "Still darn cold - clean mess deck - paint ship. Cut hair. Sighted land Southern California at 4pm.",
    []
  ],
  [
    "Saturday, 23 May 1942",
    "Still cold - caught fish on line Tuna, went to ward-room, Have to for shams - shipping member of Sanda's crew.",
    []
  ],
  [
    "Sunday, 24 May 1942",
    "Divisions - church what a ship! Cold as the devil duty mid-day.",
    []
  ],
  [
    "Monday, 25 May 1942",
    "Expect to sight land - little warmer sun shining - have radio on good music. - planning what to do ashore, hope for good time.",
    []
  ],
  [
    "Tuesday, 26 May 1942",
    "Bathed Sam Pedro 8.30am. Sunny day warm - place seems O.K. - Duty ship today. Invitation to movie party. Great time wonderful performance - Later went to Delrio night club swell girls most beautiful have seen. On board 45min adrift went on watch 12pm. Had to draw revolver on chap & shoot real exciting night - had coffee and cakes in C.P.O's mess. Georgia Carol  Susan Foster  Joan Blake",
    [
      "Georgia Carol",
      "Susan Foster",
      "Joan Blake"
    ]
  ],
  [
    "Wednesday, 27 May 1942",
    "Ashore 4pm. Had fire eats canteen swell guys. Went to Los Angeles visited night clubs - had swell time - Bert clicked, girl had '42 Chevrolet - injured back again darn it, what tales to tell. Went to Hollywood.",
    []
  ],
  [
    "Thursday, 28 May 1942",
    "No entry",
    []
  ],
  [
    "Friday, 29 May 1942",
    "No entry",
    []
  ],
  [
    "Saturday, 30 May 1942",
    "No entry",
    []
  ],
  [
    "Sunday, 31 May 1942",
    "No entry",
    []
  ],
  [
    "Monday, 1 June 1942",
    "No entry",
    []
  ],
  [
    "Tuesday, 2 June 1942",
    "No entry",
    []
  ],
  [
    "Wednesday, 3 June 1942",
    "No entry",
    []
  ],
  [
    "Thursday, 4 June 1942",
    "No entry",
    []
  ],
  [
    "Friday, 5 June 1942",
    "No entry",
    []
  ],
  [
    "Saturday, 6 June 1942",
    "No entry",
    []
  ],
  [
    "Sunday, 7 June 1942",
    "No entry",
    []
  ],
  [
    "Monday, 8 June 1942",
    "No entry",
    []
  ],
  [
    "Tuesday, 9 June 1942",
    "No entry",
    []
  ],
  [
    "Wednesday, 10 June 1942",
    "Wednesday had such a swell time with N.Z. People I met that I was to busy to keep up my dairy. This port was the best place I have been to and had the swellest times, Hine, Wayne, Virgie, Lecter, Lil. Dave and mum.",
    [
      "Hine",
      "Wayne",
      "Virgie",
      "Lecter",
      "Lil",
      "Dave",
      "Mum"
    ]
  ],
  [
    "Thursday, 11 June 1942",
    "Left 7am returned to pick up rating off tanker for other ship Killegrey has 3 rating adrift. Turning in now tired.",
    []
  ],
  [
    "Friday, 12 June 1942",
    "Dull weather little choppy no sun. Thoughts of Long Beach. Still catching up on sleep. A.S.B.",
    []
  ],
  [
    "Saturday, 13 June 1942",
    "Picked up rest of convoy still dull, felling a little better. Min biy eats wish to be back. Hope to return one day.",
    []
  ],
  [
    "Sunday, 14 June 1942",
    "Divisions - church - boy chocka! Of old man. Still dull night blacks as devil.",
    []
  ],
  [
    "Monday, 15 June 1942",
    "Action stations - dull weather sun shone for 3 hours. Still roll on. Wrote letters to California. Weather warmer now.",
    []
  ],
  [
    "Tuesday, 16 June 1942",
    "Warm now still dull nights black. Tried gun fuses no good - had to clean shells re-fuse etc. Slept all afternoon. Short of bread.",
    []
  ],
  [
    "Wednesday, 17 June 1942",
    "Action stations - cleaned guns. Rationed on bread. Some meat rotten had to go without meals Crabs broke out hope I do not catch them. Min good food.",
    []
  ],
  [
    "Thursday, 18 June 1942",
    "Great day sun shining - had gun cleaning drill. Meals pretty good but short of bread.",
    []
  ],
  [
    "Friday, 19 June 1942",
    "Another hot day usual routine. Meals fair.",
    []
  ],
  [
    "Saturday, 20 June 1942",
    "Gun drill - rounds - chocka of this ship - Old man is wet. - Still rationed.",
    []
  ],
  [
    "Sunday, 21 June 1942",
    "Divisions church - passed Hawaii 5.30pm due in tomorrow - weather good - clear night.",
    []
  ],
  [
    "Monday, 22 June 1942",
    "Convoy went in first - weather little rough - wind blowing hard - Went to coal jetty hit jetty dent bows - Only canteen leave - went round harbour in launch saw damage to Arizona - Utah - West Virginia etc. - Gave boys some rum - Made friends had good time.",
    []
  ],
  [
    "Tuesday, 23 June 1942",
    "Cut my hand on wire - went ashore between watches bought towels, films, lotion etc. Met few more chaps showed them around ship - went to movies - had few wets. On board 11pm for Middle watch.",
    []
  ],
  [
    "Wednesday, 24 June 1942",
    "Ashore noon - went to Honolulu had swell time - bought souvenirs - met swell Hawaiian girl had photographs taken for nothing - girl took a liking to me - made date for Friday - sure am turning up. Saw Bert ashore hooped!",
    [
      "Bert"
    ]
  ],
  [
    "Thursday, 25 June 1942",
    "Slight shower - duty today - Had look over U.S.S. Enterprise\". Strolled around to coalyard.",
    []
  ],
  [
    "Friday, 26 June 1942",
    "Ashore 12 noon went to Honolulu saw Ruth - leave til 5.30pm. Had one or two drinks. Bought souvenirs - went around to San Pon.",
    [
      "Ruth"
    ]
  ],
  [
    "Saturday, 27 June 1942",
    "Duty showed sailors around ship. Took dog for a run. Party of American Naval Officers on board - drink in ward-room.",
    []
  ],
  [
    "Sunday, 28 June 1942",
    "Divisions - old man ashore. Told be home end July. Met Ruth went home with her had swell time - stayed over leave 12 hours boarded O.K. Girl sure has it bad.",
    [
      "Ruth"
    ]
  ],
  [
    "Monday, 29 June 1942",
    "Duty Q.M. Stayed in dock-yard bought a couple more towels. Weather very warm. Shifted ship Killegrey blew boiler.",
    []
  ],
  [
    "Tuesday, 30 June 1942",
    "--Called on Ruth-- Had hair-cut - few wets, Called on Ruth bought couple of souvenirs. Had bottle rum ashore. On board 6pm. Went ashore again in dockyard. Had supper aboard San-Pan.",
    [
      "Ruth"
    ]
  ],
  [
    "Wednesday, 1 July 1942",
    "--Washed down ship was under soot all over again by evening. Did haircutting loaned cash only one with money. Went to Honolulu bought gear. Had few wets photos taken. Be glad when we leave met chaps off ship just returned from Auckland. Hear shortage of cigs, matches to - must stock up-- Duty Q.M. duties Went on San Pan Had supper etc. talked for awhile.",
    []
  ],
  [
    "Thursday, 2 July 1942",
    "Went to visit sick-Bay had eye seen to, also best DR. Ashore 12.15pm. Had couple of drinks \"Zombie\" photos taken with marine. Bought stockings shirt etc. Bert wore his blue suit. Back on board 6pm. Will be glad to leave this place - more buzzes than that.",
    []
  ],
  [
    "Friday, 3 July 1942",
    "Went to sea 7.30am, took party of Americans out, show them how we work the gear on board. Did sub attack gunnery drill. Back in port 5pm. Read for awhile turned in 10pm. After cutting hair.",
    []
  ],
  [
    "Saturday, 4 July 1942",
    "Have only $1 to go ashore with. Visited Waikiki had a good time surfing etc. Watched dancing had milk shakes hamburg. Forgot pay look had job getting aboard 1 1/2hs adrift would have been more, only.",
    []
  ],
  [
    "Sunday, 5 July 1942",
    "Divisions - church old man not too good a mood - sure is wet - war is not won in divisions & rige of day. No leave for us good job said so-long to friends last night.",
    []
  ],
  [
    "Monday, 6 July 1942",
    "Left 3.15pm caught up rough sea high wind. - Some boys not too good. Groomeddog. Supper. Had Bacon egg 14 days. Egg sausages 14days now egg canned bacon. Other ships cannot make speed, what a trip - fed up of this ship. Great moonrise 2am. many stars.",
    []
  ],
  [
    "Tuesday, 7 July 1942",
    "No entry",
    []
  ],
  [
    "Wednesday, 8 July 1942",
    "No entry",
    []
  ],
  [
    "Thursday, 9 July 1942",
    "No entry",
    []
  ],
  [
    "Friday, 10 July 1942",
    "Speed 5 knots coal no good. Saw planes. 1 American Aircraft Carriers 4 cruisers. Had us guessing for awhile. Manage submarine in these waters. Food no good name each meal, before, served. Boy not too good - hot as devil.",
    []
  ],
  [
    "Saturday, 11 July 1942",
    "Left coal burners behind proceeded to Palmyra Island for ship. Hot today 95°. Few showers. Boys want hair-cut. Good to be steaming faster on our own. Washed paint & greased shrouds.",
    []
  ],
  [
    "Sunday, 12 July 1942",
    "The war ceased - \"divisions\" & church. Arrived \"Palmyra\" 8.30am - Showery hot usual routine. Pick up ship - proceeded.",
    []
  ],
  [
    "Monday, 13 July 1942",
    "Arrived Fanning Island 7am. Waited outside British Administrator went aboard merchant ship. Old man bad mood. Administrator did not come aboard. Sailed at 9.30am we turned back forgot to leave mail. Spoke chap off island Americans relieved N.Z.s. No more bread. What a ship sure glad when of it.",
    []
  ],
  [
    "Tuesday, 14 July 1942",
    "Painted mast. Wrote letters read. Crossed line 9.30pm in home waters.",
    []
  ],
  [
    "Wednesday, 15 July 1942",
    "Action stations - one or two tiffo. Sure will be fights soon. Glad when reach Suva. Saw whales - weather good. Painted top mast.",
    []
  ],
  [
    "Thursday, 16 July 1942",
    "Usual routine - painted ship, galley, Yiu not working properly: eggs again: food moderate.",
    []
  ],
  [
    "Friday, 17 July 1942",
    "Hot as hades - rained like devil at night usual routine. Little cooler.",
    []
  ],
  [
    "Saturday, 18 July 1942",
    "Showery hot still - cleaned mess deck for rounds - arguments etc. Saw whales, sharks, 2nd Lt made some scenes whew!",
    []
  ],
  [
    "Sunday, 19 July 1942",
    "Divisions, church, hot as devil showery",
    []
  ],
  [
    "Monday, 20 July 1942",
    "Cooler today rather rough seas more bows & gunwale - in port soon. Cut hair.",
    []
  ],
  [
    "Tuesday, 21 July 1942",
    "Wave came over after deck wet through pretty rough - Sighted Fiji Islands 1am little calmer. Crossed date line 9pm.",
    []
  ],
  [
    "Wednesday, 22 July 1942",
    "No entry",
    []
  ],
  [
    "Thursday, 23 July 1942",
    "Jumped a day land in sight N.Z. In Nan Passage due in tomorrow am. Increased speed. --Slackened speed--",
    []
  ],
  [
    "Friday, 24 July 1942",
    "In port 8pm fooled around. Ashore 4.30pm nothing doing worst place of all. Went dancing in jungle, fun - walked back aboard. Tried Cava. Leave midnight.",
    []
  ],
  [
    "Saturday, 25 July 1942",
    "Painted ship - rained Duty had siesta - spoke lads of \"Matai\" \"Viti\". Packed gear souvenirs etc.",
    []
  ],
  [
    "Sunday, 26 July 1942",
    "Ashore 11am dismal place nothing to see - Ran into chap of \"Matai\" old shipmate. Lucky accidentally ran into Den and his pal. - pleased see each other. Had few wets on board (rum) gave him bottle. Showed souvenirs gave him some talked of experiences etc.",
    [
      "Den"
    ]
  ],
  [
    "Monday, 27 July 1942",
    "Duty Den came aboard stayed for supper. Couple of shipmates off Matai Viti came aboard. Left Duty 9.30pm. Waited down with books etc. Wished him best of luck and quick return to N.Z.",
    [
      "Den"
    ]
  ],
  [
    "Tuesday, 28 July 1942",
    "Farewell to Suva 6.30am hope never to see place again. Weather calm expect rough seas N.Z. Boys sorting gear. Coal burners smoking a lot.",
    []
  ],
  [
    "Wednesday, 29 July 1942",
    "Misty warm seas fairly rough great moonlight night. Grub not good.",
    []
  ],
  [
    "Thursday, 30 July 1942",
    "Action stations weather darn cold nearer N.Z. Rained like devil. Scalded my eyes.",
    []
  ],
  [
    "Friday, 31 July 1942",
    "Colder. Sanda nearly out of coal 25 ton. Down to 7 knots dash it. Most likely be a day behind now. Lost Interest.",
    []
  ],
  [
    "Saturday, 1 August 1942",
    "Pretty good day. Towed Scarba. Inchkeith towed Sanda doing 3 knots. Hope do not meet a gale. Goodness knows when we will reach port.",
    []
  ],
  [
    "Sunday, 2 August 1942",
    "Divisions church: weather good in about Tuesday: still doing 3 1/2 knots.",
    []
  ],
  [
    "Monday, 3 August 1942",
    "Weather good sighted Cape Brett 6am. Muritai, James Cosgrove came to meet us took in tow of Sanda. Saw Bud on \"Muritai\". Packed souvenirs. Passed Whangarei Heads 7.30pm.",
    []
  ]
];
