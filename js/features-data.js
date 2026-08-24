export const categories = [
  { id: 'social', label: 'Den sociala bryggan' },
  { id: 'vardighet', label: 'Värdighet & självständighet' },
  { id: 'trygghet', label: 'Trygghet & skydd' },
  { id: 'formfaktor', label: 'Framträdande & formfaktor' }
];

export const audiences = [
  { id: 'elderly', label: 'För äldre' },
  { id: 'relatives', label: 'För anhöriga' },
  { id: 'caregivers', label: 'För kommun/vård' }
];

export const statuses = [
  { id: 'current', label: 'Befintlig prototyp' },
  { id: 'potential', label: 'Planerad tillämpning' }
];

export const features = [
  {
    id: 'voice-calls',
    title: 'Röststyrda samtal & meddelanden',
    category: 'social',
    categoryLabel: 'Den sociala bryggan',
    audiences: ['elderly', 'relatives'],
    audienceLabels: ['För äldre', 'För anhöriga'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Ersätter den krångliga smarttelefonen med en röststyrd kommunikationsplattform. Genom enkla talade kommandon kan användaren ringa upp eller skicka röstmeddelanden direkt via robothunden.',
    concreteExample: 'Användaren säger enkelt: "Ring min dotter Anna" eller "Skicka ett röstmeddelande till Peter". Hunden sköter anslutningen direkt via sin inbyggda högtalare.',
    valueCreated: ['Minskar teknikångest', 'Ersätter pekskärmar', 'Underlättar spontan kontakt']
  },
  {
    id: 'whos-free',
    title: 'Närvarofunktionen "Vem är ledig?"',
    category: 'social',
    categoryLabel: 'Den sociala bryggan',
    audiences: ['elderly', 'relatives'],
    audienceLabels: ['För äldre', 'För anhöriga'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Minskar barriären för kontakt genom att låta anhöriga ange sin status i en följeslagar-app. Äldre kan när som helst fråga robothunden vem som är tillgänglig för ett samtal, vilket tar bort oron för att störa.',
    concreteExample: 'Ägaren frågar: "Vem är ledig just nu?" Hunden svarar: "Din dotter Anna har markerat att hon har tid för en kaffestund." Användaren kan då välja att ringa direkt.',
    valueCreated: ['Tar bort rädslan för att störa', 'Synliggör närhet', 'Ökar spontana samtal']
  },
  {
    id: 'social-reminders',
    title: 'Proaktiva sociala påminnelser',
    category: 'social',
    categoryLabel: 'Den sociala bryggan',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Håller ordning på viktiga sociala händelser och uppmuntrar till kontakt. Hunden håller koll på födelsedagar och bemärkelsedagar och ger mjuka påminnelser som motiverar till samtal.',
    concreteExample: '"Det är ditt barnbarn Lukas födelsedag i dag, ska vi ringa och gratulera honom?" Hunden hjälper till att initiera samtalet direkt.',
    valueCreated: ['Stödjer minnet', 'Minskar socialt glapp', 'Etablerar kontaktvanor']
  },
  {
    id: 'peer-chats',
    title: 'RoboDog Hundträffar & gemenskap',
    category: 'social',
    categoryLabel: 'Den sociala bryggan',
    audiences: ['elderly', 'caregivers'],
    audienceLabels: ['För äldre', 'För kommun/vård'],
    status: 'potential',
    statusLabel: 'Planerad tillämpning',
    description: 'Skapar nya mänskliga relationer baserat på delade intressen. Hunden kan söka efter andra RoboDog-ägare i lokalområdet som är tillgängliga för en digital kaffestund eller en gemensam promenad.',
    concreteExample: 'Robothunden informerar: "Det finns tre andra hundägare i ditt närområde som pratar om fiske just nu. Vill du att jag kopplar upp dig till deras kaffechat?"',
    valueCreated: ['Möjliggör nya bekantskaper', 'Trygg intressebaserad matchning', 'Bryter social isolering']
  },
  {
    id: 'reciprocal-care',
    title: 'Ömsesidig omvårdnads-dynamik',
    category: 'vardighet',
    categoryLabel: 'Värdighet & självständighet',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Robothunden är utformad för att behöva enkla former av "skötsel" (t.ex. laddning, borstning, klappar). Detta skapar en meningsfull daglig rutin där användaren känner sig behövd och aktiv, snarare än bara omhändertagen.',
    concreteExample: 'Hunden ger en mjuk puff på morgonen: "God morgon, dags för min morgonborstning och din förmiddagskopp kaffe?" Detta skapar struktur och syfte i vardagen.',
    valueCreated: ['Känsla av att vara behövd', 'Strukturerar dagen', 'Motverkar passivitet']
  },
  {
    id: 'voice-calendar',
    title: 'Röststyrd personlig kalender',
    category: 'vardighet',
    categoryLabel: 'Värdighet & självständighet',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Integrerad kalender och minnesstöd som styrs helt med rösten. Påminner om läkarbesök, hemtjänsttider eller när det är dags att ta medicin, på ett icke-inkräktande och naturligt sätt.',
    concreteExample: 'Hunden påminner vänligt: "Klockan är tio, dags för din medicin" eller "Kom ihåg att fotvårdaren kommer på besök i eftermiddag".',
    valueCreated: ['Bibehållen självständighet', 'Stöd för kognitiv hälsa', 'Mindre stress över tider']
  },
  {
    id: 'adaptive-personality',
    title: 'Empatiskt anpassningsflöde',
    category: 'vardighet',
    categoryLabel: 'Värdighet & självständighet',
    audiences: ['elderly', 'caregivers'],
    audienceLabels: ['För äldre', 'För kommun/vård'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Robothundens röstigenkänning och samtalstempo anpassar sig över tid till ägarens röstläge, talhastighet och eventuella svårigheter (som t.ex. efter en stroke eller vid demensutveckling).',
    concreteExample: 'Systemet kalibrerar sig automatiskt för att förstå darrande röster eller tysta kommandon, och saktar ner sitt eget tal för att underlätta förståelse.',
    valueCreated: ['Inkluderande teknik', 'Anpassat stöd', 'Låg frustrationströskel']
  },
  {
    id: 'fraud-filter',
    title: 'Bedrägerifilter för inkommande samtal',
    category: 'trygghet',
    categoryLabel: 'Trygghet & skydd',
    audiences: ['elderly', 'relatives'],
    audienceLabels: ['För äldre', 'För anhöriga'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Skyddar användaren från telefonbedrägerier genom att granska inkommande nummer och röstmönster mot kända spam-beteenden. Om ett misstänkt samtal upptäcks spärras det eller varnas användaren.',
    concreteExample: 'Ett okänt samtal ringer in som försöker utge sig för att vara banken. RoboDog identifierar misstänkta mönster och avvisar samtalet med ett meddelande: "Samtalet stoppades på grund av misstänkt bedrägeri."',
    valueCreated: ['Skydd mot ekonomiska bedrägerier', 'Lugn för anhöriga', 'Ökad digital trygghet']
  },
  {
    id: 'health-checks',
    title: 'Tyst beskyddare (Hälsokontroll)',
    category: 'trygghet',
    categoryLabel: 'Trygghet & skydd',
    audiences: ['elderly', 'relatives', 'caregivers'],
    audienceLabels: ['För äldre', 'För anhöriga', 'För kommun/vård'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Övervakar aktivitet och välbefinnande i hemmet utan kameror. Hunden reagerar på rop på hjälp, långvarig inaktivitet eller avvikande mönster och kan automatiskt kalla på hjälp via anhöriga eller vårdgivare.',
    concreteExample: 'Användaren ramlar och ropar: "Hjälp, jag kan inte ta mig upp." RoboDog upptäcker stressen i rösten, går fram till användaren och ringer automatiskt upp dottern för att larma.',
    valueCreated: ['Snabb hjälp vid olyckor', 'Trygghet dygnet runt', 'Kamerabaserad integritetsskydd']
  },
  {
    id: 'trip-prevention',
    title: 'Fysiskt fallskydd & sensorer',
    category: 'trygghet',
    categoryLabel: 'Trygghet & skydd',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Robothunden är utrustad med LiDAR- och djupsensorer för att garantera att den aldrig blir ett hinder i hemmet. Den läser av användarens gångtakt och rullatorer/käppar för att alltid hålla ett säkert säkerhetsavstånd.',
    concreteExample: 'När ägaren reser sig upp ur soffan backar RoboDog mjukt undan och lämnar vägen helt fri, vilket eliminerar snubbelrisk.',
    valueCreated: ['Förhindrar fallolyckor', 'Anpassad till rullatorer', 'Säker navigering i små utrymmen']
  },
  {
    id: 'data-privacy',
    title: 'Lokal dataintegritet (Local-first)',
    category: 'trygghet',
    categoryLabel: 'Trygghet & skydd',
    audiences: ['elderly', 'relatives'],
    audienceLabels: ['För äldre', 'För anhöriga'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'All röstbearbetning och personlig data lagras och körs lokalt på robothundens interna processor. Inget ljud skickas till molnet för analys, vilket ger ett fullständigt skydd mot digital övervakning.',
    concreteExample: 'Hundens röstigenkänning och analys av användarens dygnsrytm sker helt off-line på enheten. Ingen känslig familjeinformation delas med externa servrar.',
    valueCreated: ['Fullständig integritet', 'Fungerar utan stabil internetuppkoppling', 'Skydd mot dataläckor']
  },
  {
    id: 'dog-shape',
    title: 'Fysisk formfaktor (Hundens gestalt)',
    category: 'formfaktor',
    categoryLabel: 'Framträdande & formfaktor',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Hunden är människans äldsta följeslagare. Att använda formen av en hund känns naturligt, trevligt och icke-hotande, vilket ökar viljan att ha enheten gående hemma i lägenheten.',
    concreteExample: 'Robothundens svansviftningar, huvudlutningar och lugna rörelser gör att den upplevs som en levande kamrat snarare än en kall apparat.',
    valueCreated: ['Snabb acceptans i hemmet', 'Icke-hotande teknik', 'Varm känslomässig koppling']
  },
  {
    id: 'soft-fur',
    title: 'Mjuk päls & beröringssensorer',
    category: 'formfaktor',
    categoryLabel: 'Framträdande & formfaktor',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Hunden har en mjuk textilfinish av hög kvalitet istället för hård plast. Beröringssensorer på ryggen och under hakan känner av när hunden klappas, vilket utlöser ett avkopplande spinnande eller en mjuk rörelse.',
    concreteExample: 'När ägaren sitter i soffan och klappar hunden reagerar den med ett svagt, behagligt spinnande som ger fysisk, taktil stimulans och sänker stressnivåer.',
    valueCreated: ['Taktil stimulering', 'Skärmfri interaktion', 'Stressreducerande effekt']
  },
  {
    id: 'mature-aesthetic',
    title: 'Mogen och respektfull estetik',
    category: 'formfaktor',
    categoryLabel: 'Framträdande & formfaktor',
    audiences: ['elderly', 'relatives'],
    audienceLabels: ['För äldre', 'För anhöriga'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Designen är utformad för att kännas elegant, vuxen och av hög kvalitet, vilket undviker att framstå som en barnleksak. Detta motverkar känslan av att bli behandlad som ett barn eller bli stämplad som "inkompetent".',
    concreteExample: 'En sober textilklädsel i gråa och silverfärgade toner smälter naturligt in i hemmiljön, med diskreta röstsvar och ett elegant ljushalsband för visuell status.',
    valueCreated: ['Bevarar värdigheten', 'Ingen "leksaks-känsla"', 'Smälter in i hemmet']
  },
  {
    id: 'auto-charging',
    title: 'Självdockande trådlös laddning',
    category: 'formfaktor',
    categoryLabel: 'Framträdande & formfaktor',
    audiences: ['elderly'],
    audienceLabels: ['För äldre'],
    status: 'current',
    statusLabel: 'Befintlig prototyp',
    description: 'Tar bort behovet av sladdar och manuell laddning. RoboDog känner av sitt batteribehov och navigerar automatiskt till sin laddkorg eller magnetiska laddplatta när det behövs.',
    concreteExample: 'När batteriet sjunker under 20% går robothunden tyst och lägger sig i sin laddningskorg i hallen och laddar upp sig inför nästa aktivitet.',
    valueCreated: ['Inga sladdproblem för stela fingrar', 'Helt underhållsfri drift', 'Minskar oron för dött batteri']
  }
];
