import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spelling",
  description: "Explore common spelling confusions and learn the correct forms. Click any card to see detailed explanations, examples, and tips.",
};

// Auto-generated from attached folder structure
const spellingPages = [
  "tyranny-vs-tyranny",
  "tyranny-vs-tyrany",
  "surprise-vs-surprize",
  "threshold-vs-threshhold",
  "tomorrow-vs-tommorow",
  "tongue-vs-tounge",
  "receive-vs-recieve",
  "recommend-vs-reccomend",
  "referred-vs-refered",
  "relevant-vs-relevent",
  "sacrifice-vs-sacrafice",
  "separate-vs-seperate",
  "successful-vs-successfull",
  "prejudice-vs-prejiduce",
  "principal-vs-principle",
  "pronunciation-vs-pronounciation",
  "publicly-vs-publically",
  "questionnaire-vs-questionaire",
  "pastime-vs-pasttime",
  "pavilion-vs-pavillion",
  "persistent-vs-persistant",
  "playwright-vs-playwrite",
  "possession-vs-posession",
  "maneuver-vs-manoeuvre",
  "memento-vs-momento",
  "misspell-vs-mispell",
  "noticeable-vs-noticable",
  "occasion-vs-ocassion",
  "occurrence-vs-occurence",
  "grateful-vs-greatful",
  "hierarchy-vs-heirarchy",
  "independent-vs-independant",
  "judgment-vs-judgement",
  "knowledgeable-vs-knowledgable",
  "liaison-vs-liason",
  "fascinating-vs-facinating",
  "february-vs-febuary",
  "finally-vs-finaly",
  "fluorescent-vs-flourescent",
  "foreign-vs-foriegn",
  "forty-vs-fourty",
  "friend-vs-freind",
  "definitely-vs-definately",
  "disappear-vs-dissapear",
  "disappoint-vs-dissapoint",
  "embarrass-vs-embarass",
  "environment-vs-enviroment",
  "existence-vs-existance",
  "familiar-vs-familar",
  "calendar-vs-calender",
  "cemetery-vs-cemetary",
  "changeable-vs-changable",
  "collectible-vs-collectable",
  "column-vs-collumn",
  "committed-vs-commited",
  "committee-vs-commitee",
  "appreciate-vs-apreciate",
  "argument-vs-arguement",
  "athlete-vs-athelete",
  "attendance-vs-attandance",
  "beginning-vs-beginnig",
  "believe-vs-belive",
  "business-vs-buisness",
  "altogether-vs-altogedr",
  "altogether-vs-altogther",
  "amateur-vs-amature",
  "analysis-vs-analisis",
  "analyze-vs-analyse",
  "apology-vs-appology",
  "apparent-vs-aparent",
  "appetite-vs-apetite",
  "already-vs-allready",
  "although-vs-allthough",
  "altogether-vs-alltogether",
  "altogether-vs-altogather",
  "altogether-vs-altogeder",
  "altogether-vs-altogedher",
  "agriculture-vs-aggriculture",
  "alcohol-vs-alchohol",
  "allege-vs-allegee",
  "allot-vs-alot",
  "almost-vs-allmost",
  "address-vs-adress",
  "against-vs-againist",
  "against-vs-againstt",
  "aggressive-vs-agressive",
  "agility-vs-agilty",
  "agony-vs-aggony",
  "acquaintance-vs-acquaintence",
  "acquire-vs-aquire",
  "across-vs-acros",
  "action-vs-actoin",
  "activity-vs-activty",
  "actually-vs-actualy",
  "addition-vs-additon",
  "accuracy-vs-accuraccy",
  "accuracy-vs-accurasy",
  "achieve-vs-acheive",
  "achievement-vs-acheivement",
];

function prettify(name: string) {
  return name
    .replace(/-/g, " ")
    .replace(/\bvs\b/i, "or")
    .replace(/\b(\w)/g, (m) => m.toUpperCase());
}

const pastelColors = [
  "bg-pink-200", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-green-300", "bg-pink-100", "bg-yellow-200", "bg-purple-200"
];

// Sort alphabetically by prettified title
const sortedPages = spellingPages.slice().sort((a, b) => {
  const titleA = prettify(a);
  const titleB = prettify(b);
  return titleA.localeCompare(titleB);
});

export default function SpellingPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Featured</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedPages.map((folder, i) => (
          <Link
            key={folder}
            href={`/spelling/${folder}`}
            className={`rounded-xl p-6 flex flex-col items-start justify-between min-h-[120px] transition-shadow shadow-sm hover:shadow-lg ${pastelColors[i % pastelColors.length]}`}
          >
            <div className="flex items-center mb-4">
              {/* Ribbon/medal icon */}
              <span className="inline-block w-8 h-8 mr-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/><path d="M8 15l-2 6 6-3 6 3-2-6" stroke="#6366f1" strokeWidth="2" fill="none"/></svg>
              </span>
            </div>
            <div className="text-xl font-semibold text-black mb-2">
              {prettify(folder)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 