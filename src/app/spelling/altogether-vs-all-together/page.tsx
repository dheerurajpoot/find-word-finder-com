import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Altogether vs All together - Which is Correct?",
  description: "Learn the correct spelling between &apos;altogether&apos; and &apos;all together&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AltogetherVsAllTogetherPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Altogether or All together</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Altogether or All together, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">All together</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect for the adverb meaning. &quot;All together&quot; means everyone in one place.
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
                This is the correct spelling for the adverb meaning completely or entirely.
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
              <span className="font-bold">Altogether</span> (adverb): Completely, entirely, or in total; used to emphasize the whole amount or extent.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I altogether disagree with that statement.</li>
              <li>The project cost altogether $10,000.</li>
              <li>Altogether, there were 50 people at the event.</li>
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
                  <li>Entirely</li>
                  <li>Totally</li>
                  <li>Wholly</li>
                  <li>In all</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>All in all</li>
                  <li>On the whole</li>
                  <li>Overall</li>
                  <li>Sum total</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Altogether&quot; (one word) means completely or entirely. &quot;All together&quot; (two words) means everyone in one place or at the same time.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it all together or altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are correct but have different meanings. &quot;Altogether&quot; means completely, while &quot;all together&quot; means everyone in one place.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌɔːltəˈɡeðər/ (awl-tuh-GETH-er).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does altogether mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Completely, entirely, or in total; used to emphasize the whole amount or extent.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between altogether and all together?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Altogether&quot; is an adverb meaning completely. &quot;All together&quot; is a phrase meaning everyone in one place or at the same time.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can you give examples of all together?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;We were all together at the party&quot; or &quot;Let&apos;s sing all together now.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is altogether formal or informal?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Altogether can be used in both formal and informal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: altogether different, altogether too much, and altogether now.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can altogether be used at the beginning of a sentence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Altogether, the project was a success&quot; or &quot;Altogether, we spent $500.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of altogether?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Altogether comes from Old English &quot;eall&quot; (all) + &quot;togædere&quot; (together), meaning completely or entirely.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is altogether the same as in total?</div>
              <div className="text-lg md:text-xl text-muted-foreground">They are very similar, but &quot;altogether&quot; can also mean completely or entirely, not just the sum.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 