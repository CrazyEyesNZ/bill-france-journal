/* Bill France WWII Journal — medal data
   Structured to match the standalone data-file pattern used by data-bios.js.
   Load with: <script src="data-medals.js"></script>

   Globals created:
     JOURNAL_MEDALS
     JOURNAL_MEDALS_BY_ID
     getJournalMedal(nameOrId)
*/

(function (root) {
  "use strict";

  const JOURNAL_MEDALS = [
  {
    "id": "1939-45-star",
    "name": "1939–45 Star",
    "shortName": "1939–45 Star",
    "category": "Second World War campaign star",
    "official": true,
    "order": 1,
    "image": "Medals/1939-45-Star.jpg",
    "reverseImage": null,
    "dateInstituted": "1945",
    "qualifyingPeriod": "3 September 1939 – 2 September 1945",
    "description": "The first of the eight British Commonwealth campaign stars created to recognise service during the Second World War.",
    "appearance": "A bronze six-pointed star. The circular centre bears the Royal Cypher “GRI VI”, surmounted by the Tudor Crown and surrounded by the inscription “THE 1939–1945 STAR”.",
    "ribbon": "Three equal vertical stripes of dark blue, red and light blue. Dark blue represents the Navy and Merchant Navy, red the Army, and light blue the Air Force.",
    "meaning": "Recognises sustained operational service during the Second World War. For naval personnel the normal qualification was 180 days of service afloat in operational areas; from 10 June 1940 to 8 May 1945, dangerous waters were defined as anywhere at sea.",
    "eligibility": "For Navy and Merchant Navy personnel, normally 180 days of service afloat in areas of active operations (dangerous waters), subject to the detailed wartime regulations.",
    "billConnection": "Bill’s wartime record shows extensive naval service as an Able Seaman and later Leading Seaman from 1940 onward, including substantial service afloat. His possession of the star confirms that his qualifying operational service was recognised.",
    "notes": "Second World War campaign stars issued for New Zealand service were normally unnamed.",
    "sources": [
      {
        "label": "New Zealand Defence Force — The 1939–1945 Star",
        "url": "https://www.nzdf.mil.nz/heritage-and-education/medals-and-awards/explore-medals-and-awards/the-1939-1945-star/"
      }
    ]
  },
  {
    "id": "pacific-star",
    "name": "Pacific Star",
    "shortName": "Pacific Star",
    "category": "Second World War campaign star",
    "official": true,
    "order": 2,
    "image": "Medals/Pacific-Star.jpg",
    "reverseImage": null,
    "dateInstituted": "1945",
    "qualifyingPeriod": "8 December 1941 – 2 September 1945",
    "description": "A British Commonwealth campaign star awarded for qualifying operational service in the Pacific theatre during the Second World War.",
    "appearance": "A bronze six-pointed star. Its centre carries the Royal Cypher “GRI VI” beneath the Tudor Crown, surrounded by the inscription “THE PACIFIC STAR”.",
    "ribbon": "Red, dark blue, green, yellow, green, light blue and red. Yellow represents Pacific beaches, green the jungles, while red, dark blue and light blue represent the Army, Navy and Air Force.",
    "meaning": "Recognises operational service in the Pacific theatre. Naval personnel generally had first to qualify for the 1939–45 Star before becoming eligible for the Pacific Star.",
    "eligibility": "Awarded for specified operational service in the Pacific from 8 December 1941 to 2 September 1945, with additional provisions for specified areas in Asia. Naval eligibility normally required prior qualification for the 1939–45 Star.",
    "billConnection": "Bill’s service continued through the Pacific war and his medal group contains the Pacific Star. The service ledger supplied for the journal does not by itself identify the exact voyage or operation on which his Pacific Star qualification was credited, so that point should remain open pending his full medal entitlement or service papers.",
    "notes": "The ribbon on Bill’s star matches the Pacific Star: red edges with dark blue and light blue service stripes and a green-and-yellow centre.",
    "sources": [
      {
        "label": "New Zealand Defence Force — The Pacific Star",
        "url": "https://www.nzdf.mil.nz/heritage-and-education/medals-and-awards/explore-medals-and-awards/the-pacific-star/"
      }
    ]
  },
  {
    "id": "defence-medal",
    "name": "Defence Medal",
    "shortName": "Defence Medal",
    "category": "Second World War service medal",
    "official": true,
    "order": 3,
    "image": "Medals/Defence-Medal.jpg",
    "reverseImage": "Medals/Defence-Medal-Reverse.jpg",
    "dateInstituted": "1945",
    "qualifyingPeriod": "Second World War",
    "description": "A British Commonwealth medal recognising specified non-operational military and civilian service during the Second World War, particularly service in areas exposed to enemy threat.",
    "appearance": "A circular silver-coloured medal. The obverse shows the uncrowned effigy of King George VI. The reverse shows two lions flanking an oak sapling beneath the Tudor Crown, with 1939 and 1945 to either side, waves below and the inscription “THE DEFENCE MEDAL”.",
    "ribbon": "A flame-coloured centre with green edges and two narrow black stripes. The flame and green symbolise enemy attacks on Britain, while the black stripes represent the wartime blackout.",
    "meaning": "Recognises qualifying defensive or non-operational service during the war rather than a particular combat campaign.",
    "eligibility": "Qualifying periods varied by location and duty. Examples include six months overseas in a non-operational area under air attack or threat, twelve months in certain non-operational areas not under threat, and shorter periods for specified mine and bomb disposal service.",
    "billConnection": "Bill spent a substantial period overseas during the war, including service in Britain. His possession of the Defence Medal confirms that the relevant authorities credited him with qualifying service. The precise qualifying period should be taken from his full medal entitlement record if available.",
    "notes": "No clasps or bars were issued for the Defence Medal.",
    "sources": [
      {
        "label": "New Zealand Defence Force — The Defence Medal",
        "url": "https://www.nzdf.mil.nz/heritage-and-education/medals-and-awards/explore-medals-and-awards/the-defence-medal/"
      }
    ]
  },
  {
    "id": "war-medal-1939-45",
    "name": "War Medal 1939–45",
    "shortName": "War Medal",
    "category": "Second World War war service medal",
    "official": true,
    "order": 4,
    "image": "Medals/War-Medal-1939-45.jpg",
    "reverseImage": "Medals/War-Medal-1939-45-Reverse.jpg",
    "dateInstituted": "1945",
    "qualifyingPeriod": "3 September 1939 – 2 September 1945",
    "description": "A British Commonwealth war medal awarded for full-time service during the Second World War.",
    "appearance": "A circular silver-coloured medal. The obverse bears the effigy of King George VI. The reverse depicts a triumphant lion standing over a double-headed dragon, representing victory over the Axis powers, with the dates 1939 and 1945.",
    "ribbon": "Broad red edges, then blue bands, with narrow white stripes surrounding a narrow central red stripe. The colours represent the Union Flag.",
    "meaning": "Recognises wartime service rather than service in a particular theatre. It was one of the basic service medals of the Second World War.",
    "eligibility": "Awarded to full-time members of the British Commonwealth Armed Forces for 28 days of service, operational or non-operational, in any location during the qualifying period.",
    "billConnection": "Bill served continuously for far longer than the required 28 days. His service record from August 1940 onward makes his entitlement straightforward.",
    "notes": "In the New Zealand Order of Wear it follows the Defence Medal and precedes the New Zealand War Service Medal. Bill’s red, blue and white ribbon belongs to this medal.",
    "sources": [
      {
        "label": "New Zealand Defence Force — The War Medal 1939–45",
        "url": "https://www.nzdf.mil.nz/heritage-and-education/medals-and-awards/explore-medals-and-awards/the-war-medal-1939-45/"
      }
    ]
  },
  {
    "id": "nz-war-service-medal",
    "name": "New Zealand War Service Medal",
    "shortName": "NZ War Service Medal",
    "category": "New Zealand Second World War service medal",
    "official": true,
    "order": 5,
    "image": "Medals/NZ-War-Service-Medal-Reverse.jpg",
    "reverseImage": "Medals/NZ-War-Service-Medal.jpg",
    "dateInstituted": "1948",
    "qualifyingPeriod": "3 September 1939 – 2 September 1945",
    "description": "A distinctively New Zealand medal awarded to New Zealanders who gave qualifying service during the Second World War.",
    "appearance": "A circular silver-coloured medal. The obverse bears the uncrowned effigy of King George VI. The reverse reads “FOR SERVICE TO NEW ZEALAND 1939–1945” above a fern leaf. Fern-leaf motifs also appear on the suspender.",
    "ribbon": "Black with white edges, using New Zealand’s national colours.",
    "meaning": "Recognises service specifically to New Zealand during the Second World War. It was the first distinctively New Zealand campaign medal.",
    "eligibility": "Normally 28 days of full-time service or six months of part-time service in the New Zealand Armed Forces, New Zealand National Military Reserve or Home Guard during the qualifying period.",
    "billConnection": "Bill’s full-time naval service from 1940 onward greatly exceeded the qualifying requirement.",
    "notes": "The medal was issued unnamed and has no clasps or bars.",
    "sources": [
      {
        "label": "New Zealand Defence Force — The New Zealand War Service Medal",
        "url": "https://www.nzdf.mil.nz/heritage-and-education/medals-and-awards/explore-medals-and-awards/new-zealand-war-service-medal-nzwsm/"
      }
    ]
  },
  {
    "id": "rnvr-long-service-medal",
    "name": "Royal Naval Volunteer Reserve Long Service and Good Conduct Medal",
    "shortName": "RNVR Long Service Medal",
    "category": "Naval reserve long-service medal",
    "official": true,
    "order": 6,
    "image": "Medals/RNVR-Long-Service-Medal-Reverse.jpg",
    "reverseImage": "Medals/RNVR-Long-Service-Medal.jpg",
    "dateInstituted": "1909",
    "qualifyingPeriod": "Long-service award; wartime service counted double",
    "description": "A long-service and good-conduct medal for petty officers and ratings of the Royal Naval Volunteer Reserve.",
    "appearance": "Bill’s George VI issue has the King’s effigy on the obverse. The reverse shows a warship at sea above the Latin motto “DIUTURNE FIDELIS”, meaning enduring or long-lasting faithfulness.",
    "ribbon": "For the RNVR, the post-1919 ribbon has blue edges with a broad green centre separated from the blue by narrow crimson stripes.",
    "meaning": "Recognises lengthy and satisfactory service in the Royal Naval Volunteer Reserve rather than a particular wartime campaign.",
    "eligibility": "The RNZN Museum records the medal as being awarded to RNVR petty officers and ratings after 12 or 15 years of qualifying service, with war service counting double.",
    "billConnection": "This medal belongs to Bill France and demonstrates a substantial RNVR service connection extending beyond the campaign awards. His wartime service could count at the enhanced wartime rate. His separate 1935 Auckland Navy League award also shows that his association with naval volunteer activity predates his 1940 wartime service record, although that presentation medal alone does not prove qualifying RNVR service.",
    "notes": "The red, white and blue War Medal ribbon photographed behind this medal is not the RNVR Long Service Medal ribbon. The correct RNVR ribbon is blue, crimson and green.",
    "sources": [
      {
        "label": "National Museum of the Royal New Zealand Navy — RNVR Long Service and Good Conduct Medal",
        "url": "https://medals.navymuseum.co.nz/medal/royal-naval-volunteer-reserve-long-service-and-good-conduct-medal/"
      }
    ]
  },
  {
    "id": "rnvr-1935-auckland-navy-league",
    "name": "Auckland Navy League RNVR Award, 1935",
    "shortName": "RNVR 1935 Navy League Award",
    "category": "Presentation / competition award",
    "official": false,
    "order": 7,
    "image": "Medals/RNVR-1935-Navy-League.jpg",
    "reverseImage": "Medals/RNVR-1935-Navy-League-Reverse.jpg",
    "dateInstituted": null,
    "qualifyingPeriod": "1935",
    "description": "A silver presentation award associated with the Auckland Navy League and the RNVR. Unlike Bill’s campaign and long-service medals, this is a local presentation or competition award rather than an official campaign medal.",
    "appearance": "A small wreath-shaped silver award surmounted by a naval crown. The central shield is marked “RNVR” and “1935” above crossed implements. The reverse is engraved “Pres’d by Auck. Navy League” and carries a SILVER mark.",
    "ribbon": null,
    "meaning": "The surviving object records Bill’s pre-war connection with Auckland naval volunteer activity. The exact competition or achievement for which it was presented has not yet been established.",
    "eligibility": "Not established from the medal itself. Further contemporary Navy League or RNVR records would be required to identify the precise event and award conditions.",
    "billConnection": "The award belongs to Bill France and dates from 1935, five years before the wartime service ledger begins. It is therefore useful evidence of his pre-war naval associations.",
    "notes": "The crossed implements may relate to a naval or boat-handling competition, but the precise event should not be stated as fact without documentary corroboration.",
    "sources": []
  }
];

  const JOURNAL_MEDALS_BY_ID = Object.fromEntries(
    JOURNAL_MEDALS.map((medal) => [medal.id, medal])
  );

  function normaliseMedalLookup(value) {
    return String(value ?? "")
      .trim()
      .toLocaleLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function getJournalMedal(nameOrId) {
    if (!nameOrId) return null;

    if (JOURNAL_MEDALS_BY_ID[nameOrId]) {
      return JOURNAL_MEDALS_BY_ID[nameOrId];
    }

    const wanted = normaliseMedalLookup(nameOrId);

    return JOURNAL_MEDALS.find((medal) => {
      if (normaliseMedalLookup(medal.name) === wanted) return true;
      if (normaliseMedalLookup(medal.shortName) === wanted) return true;
      if (normaliseMedalLookup(medal.id) === wanted) return true;
      return false;
    }) || null;
  }

  root.JOURNAL_MEDALS = JOURNAL_MEDALS;
  root.JOURNAL_MEDALS_BY_ID = JOURNAL_MEDALS_BY_ID;
  root.getJournalMedal = getJournalMedal;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      JOURNAL_MEDALS,
      JOURNAL_MEDALS_BY_ID,
      getJournalMedal
    };
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
