import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accidentally or Accidentaly - Which is Correct?",
  description: "Learn the correct spelling between &apos;accidentally&apos; and &apos;accidentaly&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccidentallyVsAccidentalyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accidentally or Accidentaly</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accidentally or Accidentaly, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Accidentaly</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Accidentaly&quot; is missing the second &quot;l&quot; - it should be &quot;accidentally.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accidentally</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accidentally&quot; means happening by chance or without intention.
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
              <span className="font-bold">Accidentally</span> (adverb): In a way that happens by chance or without intention; unintentionally.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I accidentally dropped my phone.</li>
              <li>She accidentally sent the email to the wrong person.</li>
              <li>He accidentally left his keys at home.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accidentally&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Unintentional:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Unintentionally</li>
                  <li>Inadvertently</li>
                  <li>Unwittingly</li>
                  <li>Involuntarily</li>
                  <li>Unconsciously</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">By Chance:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>By chance</li>
                  <li>By mistake</li>
                  <li>By accident</li>
                  <li>Fortuitously</li>
                  <li>Serendipitously</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accidentally&quot; is the correct spelling. &quot;Accidentaly&quot; is a common misspelling—remember the double &quot;l&quot; in accidentally.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it accidentaly or accidentally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accidentally.&quot; &quot;Accidentaly&quot; is incorrect—it&apos;s missing the second &quot;l.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accidentally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌæksɪˈdɛntəli/ (ak-si-DEN-tuh-lee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accidentally mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means happening by chance or without intention; unintentionally.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accidentally and intentionally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accidentally means without intention, while intentionally means done on purpose.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accidentally be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The file was accidentally deleted&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accidentally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: accidentally deleted, accidentally sent, and accidentally left.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accidentally used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I accidentally spilled my coffee&quot; is a very common everyday expression.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the base word of accidentally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The base word is &quot;accident&quot; - accidentally is the adverbial form.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accidentally?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accidentally comes from Latin &quot;accidens&quot; meaning happening or occurring.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accidentally be used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The damage was caused accidentally&quot; is used in legal and insurance contexts.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 