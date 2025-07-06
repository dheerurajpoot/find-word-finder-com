import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Apparent vs Apparant - Which is Correct?",
  description: "Learn the correct spelling between &apos;apparent&apos; and &apos;apparant&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApparentVsApparantPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Apparent or Apparant</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Apparent or Apparant, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apparant</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apparant&quot; should be spelled with an &quot;e&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Apparent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Apparent&quot; means clearly visible or obvious.
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
              <span className="font-bold">Apparent</span> (adjective): Clearly visible or understood; obvious; seeming real or true, but not necessarily so.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>It was apparent that she was upset about the news.</li>
              <li>The apparent cause of the accident was driver fatigue.</li>
              <li>His apparent confidence hid his nervousness.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;apparent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Obvious</li>
                  <li>Clear</li>
                  <li>Evident</li>
                  <li>Visible</li>
                  <li>Seeming</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Ostensible</li>
                  <li>Presumed</li>
                  <li>Supposed</li>
                  <li>Alleged</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Apparent&quot; is the correct spelling. &quot;Apparant&quot; is incorrect—remember to include the &quot;e&quot; before the &quot;n&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apparant or apparent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;apparent.&quot; &quot;Apparant&quot; is incorrect—it should have an &quot;e&quot; before the &quot;n&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce apparent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpærənt/ (uh-PAIR-uhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does apparent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Clearly visible or understood; obvious; seeming real or true, but not necessarily so.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between apparent and obvious?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Apparent&quot; suggests something that seems true but might not be, while &quot;obvious&quot; means clearly true without doubt.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apparent be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;apparent&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with apparent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: apparent cause, apparent contradiction, apparent success, and apparent failure.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is apparent the same as evident?</div>
              <div className="text-lg md:text-xl text-muted-foreground">They are very similar, but &quot;evident&quot; suggests stronger proof, while &quot;apparent&quot; can suggest something that seems true but might be misleading.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adverb form of apparent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adverb form is &quot;apparently&quot; - meaning seemingly or evidently.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of apparent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Apparent comes from Latin &quot;apparens&quot; meaning visible or evident, from &quot;apparere&quot; (to appear).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apparent be used in scientific writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In science, &quot;apparent&quot; is often used to describe observations that seem to be true but may need further investigation.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 