import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Altogether or Altogather - Which is Correct?",
  description: "Learn the correct spelling between &apos;altogether&apos; and &apos;altogather&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AltogetherVsAltogatherPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Altogether or Altogather</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Altogether or Altogather, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Altogather</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Altogather&quot; is not a valid word in English.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Altogether</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Altogether&quot; is an adverb meaning completely or in total.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Altogether</span> (adverb): Completely; in total; entirely.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The train was altogether full.</li>
              <li>Altogether, we spent $500 on the project.</li>
              <li>I&apos;m altogether satisfied with the results.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;altogether&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adverbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Completely</li>
                  <li>Totally</li>
                  <li>Entirely</li>
                  <li>Wholly</li>
                  <li>Fully</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>In total</li>
                  <li>All in all</li>
                  <li>On the whole</li>
                  <li>All together</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Altogether&quot; is the correct spelling. &quot;Altogather&quot; is a common misspelling—remember, it&apos;s &quot;altogether&quot; not &quot;altogather&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it altogather or altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;altogether.&quot; &quot;Altogather&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌɔːl.təˈɡeð.ər/ (awl-tuh-GETH-er).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does altogether mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Completely; in total; entirely.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Altogether</strong> is the correct spelling with &quot;er&quot;: al-to-geth-er. It means completely or entirely. The misspelling &quot;altogather&quot; is never correct. Always use &quot;altogether&quot; when referring to something being complete or total.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/archive-vs-archieve" className="text-blue-700 hover:text-blue-900 underline">Archive vs Archieve</a></li>
            <li><a href="/spelling/acing-vs-aceing" className="text-blue-700 hover:text-blue-900 underline">Acing vs Aceing</a></li>
            <li><a href="/spelling/variance-vs-varience" className="text-blue-700 hover:text-blue-900 underline">Variance vs Varience</a></li>
            <li><a href="/spelling/apparent-vs-aparent" className="text-blue-700 hover:text-blue-900 underline">Apparent vs Aparent</a></li>
            <li><a href="/spelling/valuable-vs-valueable" className="text-blue-700 hover:text-blue-900 underline">Valuable vs Valueable</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/temperature-vs-temperatura" className="text-purple-700 hover:text-purple-900 underline">Temperature vs Temperatura</a></li>
            <li><a href="/spelling/berserk-vs-bersark" className="text-purple-700 hover:text-purple-900 underline">Berserk vs Bersark</a></li>
            <li><a href="/spelling/condemn-vs-condem" className="text-purple-700 hover:text-purple-900 underline">Condemn vs Condem</a></li>
            <li><a href="/spelling/verbiage-vs-verbage" className="text-purple-700 hover:text-purple-900 underline">Verbiage vs Verbage</a></li>
            <li><a href="/spelling/submitted-vs-submited" className="text-purple-700 hover:text-purple-900 underline">Submitted vs Submited</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 