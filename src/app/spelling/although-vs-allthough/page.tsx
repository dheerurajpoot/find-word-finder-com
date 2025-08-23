import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Although or Allthough - Which is Correct?",
  description: "Learn the correct spelling between &apos;although&apos; and &apos;allthough&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AlthoughVsAllthoughPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Although or Allthough</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Although or Allthough, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Allthough</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Allthough&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Although</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Although&quot; is a conjunction meaning in spite of the fact that.
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
              <span className="font-bold">Although</span> (conjunction): In spite of the fact that; even though.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Although it was raining, we went for a walk.</li>
              <li>Although he was tired, he continued working.</li>
              <li>I enjoyed the movie, although it was quite long.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;although&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Conjunctions:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Though</li>
                  <li>Even though</li>
                  <li>While</li>
                  <li>Whereas</li>
                  <li>Despite</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>In spite of</li>
                  <li>Regardless of</li>
                  <li>Notwithstanding</li>
                  <li>Even if</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Although&quot; is the correct spelling. &quot;Allthough&quot; is a common misspelling—remember, it only has one &quot;l&quot; at the start.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it allthough or although?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;although.&quot; &quot;Allthough&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce although?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ɔːlˈðoʊ/ (awl-THOH).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does although mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">In spite of the fact that; even though.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Although</strong> is the correct spelling with single &quot;l&quot;: al-though. It means despite the fact that or even though. The misspelling &quot;allthough&quot; is never correct. Always use &quot;although&quot; when introducing a contrast or concession.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/cherry-vs-chery" className="text-blue-700 hover:text-blue-900 underline">Cherry vs Chery</a></li>
            <li><a href="/spelling/uniform-vs-unaform" className="text-blue-700 hover:text-blue-900 underline">Uniform vs Unaform</a></li>
            <li><a href="/spelling/berries-vs-berrys" className="text-blue-700 hover:text-blue-900 underline">Berries vs Berrys</a></li>
            <li><a href="/spelling/vigilance-vs-vigilence" className="text-blue-700 hover:text-blue-900 underline">Vigilance vs Vigilence</a></li>
            <li><a href="/spelling/told-vs-telled" className="text-blue-700 hover:text-blue-900 underline">Told vs Telled</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/affect-vs-effect" className="text-purple-700 hover:text-purple-900 underline">Affect vs Effect</a></li>
            <li><a href="/spelling/withhold-vs-withold" className="text-purple-700 hover:text-purple-900 underline">Withhold vs Withold</a></li>
            <li><a href="/spelling/biscuit-vs-buiscuit" className="text-purple-700 hover:text-purple-900 underline">Biscuit vs Buiscuit</a></li>
            <li><a href="/spelling/access-vs-akcess" className="text-purple-700 hover:text-purple-900 underline">Access vs Akcess</a></li>
            <li><a href="/spelling/complement-vs-compalement" className="text-purple-700 hover:text-purple-900 underline">Complement vs Compalement</a></li>
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