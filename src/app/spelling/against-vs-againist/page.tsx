import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Againist or Against - Which is Correct?",
  description: "Learn the correct spelling between &apos;againist&apos; and &apos;against&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AgainstVsAgainistPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Againist or Against</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Against&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Againist</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Againist&quot; is not a valid word in English.
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
                This is the correct spelling. &quot;Against&quot; is a preposition meaning in opposition to.
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
              <span className="font-bold">Against</span> (preposition): In opposition to; contrary to; in contrast to.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>They voted against the proposal.</li>
              <li>The team played against their rivals.</li>
              <li>She leaned against the wall.</li>
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
                  <li>Counter to</li>
                  <li>In opposition to</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Opposing</li>
                  <li>Resisting</li>
                  <li>Challenging</li>
                  <li>Defying</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Against&quot; is a preposition meaning in opposition to. &quot;Againist&quot; is a common misspelling.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it againist or against?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;against.&quot; &quot;Againist&quot; is a common misspelling.</div>
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
              <div className="text-lg md:text-xl text-muted-foreground">In opposition to; contrary to; in contrast to.</div>
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
            <li><a href="/spelling/card-vs-card" className="text-blue-700 hover:text-blue-900 underline">Card vs Card</a></li>
            <li><a href="/spelling/care-vs-care" className="text-blue-700 hover:text-blue-900 underline">Care vs Care</a></li>
            <li><a href="/spelling/carry-vs-carry" className="text-blue-700 hover:text-blue-900 underline">Carry vs Carry</a></li>
            <li><a href="/spelling/case-vs-case" className="text-blue-700 hover:text-blue-900 underline">Case vs Case</a></li>
            <li><a href="/spelling/catch-vs-catch" className="text-blue-700 hover:text-blue-900 underline">Catch vs Catch</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/opposed-vs-opposed" className="text-purple-700 hover:text-purple-900 underline">Opposed vs Opposed</a></li>
            <li><a href="/spelling/contrary-vs-contrary" className="text-purple-700 hover:text-purple-900 underline">Contrary vs Contrary</a></li>
            <li><a href="/spelling/versus-vs-versus" className="text-purple-700 hover:text-purple-900 underline">Versus vs Versus</a></li>
            <li><a href="/spelling/opposing-vs-opposing" className="text-purple-700 hover:text-purple-900 underline">Opposing vs Opposing</a></li>
            <li><a href="/spelling/resisting-vs-resisting" className="text-purple-700 hover:text-purple-900 underline">Resisting vs Resisting</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/prepositions" className="text-green-700 hover:text-green-900 underline">Prepositions Guide</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 