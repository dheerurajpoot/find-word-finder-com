import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appeared or Apeared - Which is Correct?",
  description: "Learn the correct spelling between &apos;appeared&apos; and &apos;apeared&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppearedVsApearedPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appeared or Apeared</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appeared or Apeared, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apeared</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apeared&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appeared</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appeared&quot; is the past tense of appear.
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
              <span className="font-bold">Appeared</span> (verb, past tense): Came into sight; became visible; seemed to be; made a public appearance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The sun appeared from behind the clouds.</li>
              <li>She appeared at the door just as we were leaving.</li>
              <li>It appeared that the meeting was cancelled.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appeared&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Showed</li>
                  <li>Emerg</li>
                  <li>Surfaced</li>
                  <li>Materialized</li>
                  <li>Arrived</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Became visible</li>
                  <li>Came into view</li>
                  <li>Showed up</li>
                  <li>Turned up</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appeared&quot; is the correct spelling. &quot;Apeared&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apeared or appeared?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appeared.&quot; &quot;Apeared&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appeared?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpɪrd/ (uh-PEERD).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appeared mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Came into sight; became visible; seemed to be; made a public appearance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appeared and showed?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appeared&quot; suggests something becoming visible naturally, while &quot;showed&quot; suggests something being revealed or displayed.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appeared be used for non-physical things?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! You can say &quot;It appeared that...&quot; to mean something seemed to be the case.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appeared?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: appeared to be, appeared out of nowhere, appeared on stage, and appeared in court.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appeared used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Appeared&quot; is commonly used in storytelling to describe characters or events coming into view.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the present tense of appeared?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The present tense is &quot;appear&quot; - meaning to become visible or present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appeared?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appeared comes from the verb &quot;appear&quot; which comes from Latin &quot;apparere&quot; meaning to become visible.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appeared be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Appeared&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 