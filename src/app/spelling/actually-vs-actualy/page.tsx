import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Actualy or Actually - Which is Correct?",
  description: "Learn the correct spelling between &apos;actualy&apos; and &apos;actually&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ActuallyVsActualyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Actualy or Actually</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Actually&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Actualy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Actualy&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Actually</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Actually&quot; is an adverb meaning as the truth or facts of a situation.
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
              <span className="font-bold">Actually</span> (adverb): As the truth or facts of a situation; really; in reality.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>He actually expected me to pay for his meal.</li>
              <li>Actually, I think you&apos;re right about that.</li>
              <li>The movie was actually quite good.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;actually&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adverbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Really</li>
                  <li>In fact</li>
                  <li>Truly</li>
                  <li>Indeed</li>
                  <li>Truthfully</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>In reality</li>
                  <li>As a matter of fact</li>
                  <li>Honestly</li>
                  <li>Frankly</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Actually&quot; is an adverb meaning as the truth or facts of a situation. &quot;Actualy&quot; is a common misspelling.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it actualy or actually?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;actually.&quot; &quot;Actualy&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce actually?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæktʃuəli/ (AK-choo-uh-lee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does actually mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">As the truth or facts of a situation; really; in reality.</div>
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
            <li><Link href="/spelling/attitude-vs-attitude" className="text-blue-700 hover:text-blue-900 underline">Attitude vs Attitude</Link></li>
            <li><Link href="/spelling/attorney-vs-attorney" className="text-blue-700 hover:text-blue-900 underline">Attorney vs Attorney</Link></li>
            <li><Link href="/spelling/attract-vs-attract" className="text-blue-700 hover:text-blue-900 underline">Attract vs Attract</Link></li>
            <li><Link href="/spelling/attractive-vs-attractive" className="text-blue-700 hover:text-blue-900 underline">Attractive vs Attractive</Link></li>
            <li><Link href="/spelling/audience-vs-audience" className="text-blue-700 hover:text-blue-900 underline">Audience vs Audience</Link></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/really-vs-really" className="text-purple-700 hover:text-purple-900 underline">Really vs Really</Link></li>
            <li><Link href="/spelling/in-fact-vs-in-fact" className="text-purple-700 hover:text-purple-900 underline">In Fact vs In Fact</Link></li>
            <li><Link href="/spelling/truly-vs-truly" className="text-purple-700 hover:text-purple-900 underline">Truly vs Truly</Link></li>
            <li><Link href="/spelling/indeed-vs-indeed" className="text-purple-700 hover:text-purple-900 underline">Indeed vs Indeed</Link></li>
            <li><Link href="/spelling/truthfully-vs-truthfully" className="text-purple-700 hover:text-purple-900 underline">Truthfully vs Truthfully</Link></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><Link href="/grammar/adverbs" className="text-green-700 hover:text-green-900 underline">Adverbs Guide</Link></li>
            <li><Link href="/grammar/ly-endings" className="text-green-700 hover:text-green-900 underline">Ly Endings</Link></li>
            <li><Link href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</Link></li>
            <li><Link href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</Link></li>
            <li><Link href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 