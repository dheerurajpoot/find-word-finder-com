import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Abbey or Abbay - Which is Correct?",
  description: "Learn the correct spelling between &apos;abbey&apos; and &apos;abbay&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbbeyVsAbbayPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Abbey or Abbay</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Abbey or Abbay, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Abbay</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Abbay&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Abbey</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Abbey&quot; is a noun meaning a building for monks or nuns.
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
              <span className="font-bold">Abbey</span> (noun): A building or group of buildings that house monks or nuns; a monastery or convent.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The ancient abbey was built in the 12th century.</li>
              <li>Westminster Abbey is a famous landmark in London.</li>
              <li>The monks lived in the abbey for centuries.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;abbey&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Monastery</li>
                  <li>Convent</li>
                  <li>Priory</li>
                  <li>Cloister</li>
                  <li>Religious house</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Cathedral</li>
                  <li>Church</li>
                  <li>Sanctuary</li>
                  <li>Religious community</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Abbey&quot; is the correct spelling. &quot;Abbay&quot; is a common misspelling—remember, it ends with &quot;-ey&quot; not &quot;-ay&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it abbay or abbey?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;abbey.&quot; &quot;Abbay&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce abbey?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ə&apos;bændən/ (uh&apos;BAN-dun).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does abbey mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A building or group of buildings that house monks or nuns; a monastery or convent.</div>
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
            <li><a href="/spelling/abandon-vs-abandone" className="text-blue-700 hover:text-blue-900 underline">Abandon vs Abandone</a></li>
            <li><a href="/spelling/ability-vs-abillity" className="text-blue-700 hover:text-blue-900 underline">Ability vs Abillity</a></li>
            <li><a href="/spelling/absence-vs-abscence" className="text-blue-700 hover:text-blue-900 underline">Absence vs Abscence</a></li>
            <li><a href="/spelling/accept-vs-acept" className="text-blue-700 hover:text-blue-900 underline">Accept vs Acept</a></li>
            <li><a href="/spelling/access-vs-acces" className="text-blue-700 hover:text-blue-900 underline">Access vs Acces</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/church-vs-church" className="text-purple-700 hover:text-purple-900 underline">Church vs Church</a></li>
            <li><a href="/spelling/cathedral-vs-cathedral" className="text-purple-700 hover:text-purple-900 underline">Cathedral vs Cathedral</a></li>
            <li><a href="/spelling/monastery-vs-monastery" className="text-purple-700 hover:text-purple-900 underline">Monastery vs Monastery</a></li>
            <li><a href="/spelling/convent-vs-convent" className="text-purple-700 hover:text-purple-900 underline">Convent vs Convent</a></li>
            <li><a href="/spelling/sanctuary-vs-sanctuary" className="text-purple-700 hover:text-purple-900 underline">Sanctuary vs Sanctuary</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/religious-terms" className="text-green-700 hover:text-green-900 underline">Religious Terms</a></li>
            <li><a href="/grammar/building-vocabulary" className="text-green-700 hover:text-green-900 underline">Building Vocabulary</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/word-endings" className="text-green-700 hover:text-green-900 underline">Word Endings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 