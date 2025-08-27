import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Against or Againstt - Which is Correct?",
  description: "Learn the correct spelling between &apos;against&apos; and &apos;againstt&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AgainstVsAgainsttPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Against or Againstt</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Against or Againstt, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Againstt</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Againstt&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Against</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Against&quot; is a preposition meaning in opposition to or in contact with.
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
              <span className="font-bold">Against</span> (preposition): In opposition to; in contact with; contrary to.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The chair is against the wall.</li>
              <li>She voted against the proposal.</li>
              <li>He leaned against the tree.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;against&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Prepositions:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Opposed to</li>
                  <li>Contrary to</li>
                  <li>Versus</li>
                  <li>Touching</li>
                  <li>Opposite</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>In opposition to</li>
                  <li>In contact with</li>
                  <li>Facing</li>
                  <li>Next to</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Against&quot; is the correct spelling. &quot;Againstt&quot; is a common misspelling—remember, it only has one &quot;t&quot; at the end.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it againstt or against?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;against&quot;. &quot;Againstt&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce against?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈɡɛnst/ (uh-GENST).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does against mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">In opposition to; in contact with; contrary to.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
            <li><a href="/spelling/definitely-vs-definately" className="text-blue-700 hover:text-blue-900 underline">Definitely vs Definately</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-blue-700 hover:text-blue-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/recommend-vs-recomend" className="text-blue-700 hover:text-blue-900 underline">Recommend vs Recomend</a></li>
            <li><a href="/spelling/necessary-vs-neccessary" className="text-blue-700 hover:text-blue-900 underline">Necessary vs Neccessary</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/among-vs-amoung" className="text-purple-700 hover:text-purple-900 underline">Among vs Amoung</a></li>
            <li><a href="/spelling/between-vs-betwen" className="text-purple-700 hover:text-purple-900 underline">Between vs Betwen</a></li>
            <li><a href="/spelling/through-vs-thru" className="text-purple-700 hover:text-purple-900 underline">Through vs Thru</a></li>
            <li><a href="/spelling/without-vs-without" className="text-purple-700 hover:text-purple-900 underline">Without vs With Out</a></li>
            <li><a href="/spelling/within-vs-within" className="text-purple-700 hover:text-purple-900 underline">Within vs With In</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/prepositions" className="text-green-700 hover:text-green-900 underline">Prepositions Guide</a></li>
            <li><a href="/grammar/parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 