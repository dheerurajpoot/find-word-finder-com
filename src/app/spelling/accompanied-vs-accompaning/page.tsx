import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accompanied or Accompaning - Which is Correct?",
  description: "Learn the correct spelling between &apos;accompanied&apos; and &apos;accompaning&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccompaniedVsAccompaningPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accompanied or Accompaning</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accompanied or Accompaning, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Accompaning</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Accompaning&quot; is missing the &quot;ied&quot; ending - it should be &quot;accompanied.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accompanied</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accompanied&quot; means to go somewhere with someone or to have something added.
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
              <span className="font-bold">Accompanied</span> (verb, past tense): 1) To go somewhere with someone as a companion. 2) To have something added or included with something else.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She was accompanied by her sister to the party.</li>
              <li>The speech was accompanied by music.</li>
              <li>He accompanied the singer on piano.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accompanied&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Go With:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Escorted</li>
                  <li>Joined</li>
                  <li>Followed</li>
                  <li>Attended</li>
                  <li>Chaperoned</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Added:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Supplemented</li>
                  <li>Enhanced</li>
                  <li>Complemented</li>
                  <li>Augmented</li>
                  <li>Reinforced</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accompanied&quot; is the correct spelling. &quot;Accompaning&quot; is a common misspelling—remember the &quot;ied&quot; ending for the past tense.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it accompaning or accompanied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accompanied.&quot; &quot;Accompaning&quot; is incorrect—it should have the &quot;ied&quot; ending.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accompanied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkʌmpənid/ (uh-KUM-puh-need).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accompanied mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means to go somewhere with someone as a companion, or to have something added or included.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accompanied and escorted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accompanied suggests going together as equals, while escorted implies being guided or protected by someone.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accompanied be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The presentation was accompanied by visual aids&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accompanied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: accompanied by, accompanied with, and accompanied on.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accompanied used in music contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;She accompanied the singer on guitar&quot; is a very common musical usage.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the present tense of accompanied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The present tense is &quot;accompany&quot; - to go with someone or add something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accompanied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accompanied comes from Old French &quot;acompaignier&quot; meaning to be a companion.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accompanied be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I accompanied my friend to the store&quot; is a very common everyday expression.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 