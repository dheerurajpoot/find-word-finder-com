import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Approximately vs Aproximately - Which is Correct?",
  description: "Learn the correct spelling between &apos;approximately&apos; and &apos;aproximately&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApproximatelyVsAproximatelyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Approximately or Aproximately</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Approximately or Aproximately, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aproximately</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aproximately&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Approximately</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Approximately&quot; has double &quot;p&quot;.
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
              <span className="font-bold">Approximately</span> (adverb): About; roughly; close to but not exactly; nearly.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The meeting will last approximately two hours.</li>
              <li>There are approximately 100 people in the audience.</li>
              <li>The flight takes approximately 6 hours.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;approximately&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">About:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>About</li>
                  <li>Roughly</li>
                  <li>Nearly</li>
                  <li>Around</li>
                  <li>Close to</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Estimate:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Estimate</li>
                  <li>More or less</li>
                  <li>In the region of</li>
                  <li>Give or take</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Approximately&quot; is the correct spelling. &quot;Aproximately&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aproximately or approximately?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;approximately.&quot; &quot;Aproximately&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce approximately?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈprɒksɪmətli/ (uh-PROK-sim-uht-lee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does approximately mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">About; roughly; close to but not exactly; nearly.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between approximately and exactly?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Approximately&quot; means close to but not precise, while &quot;exactly&quot; means precisely or accurately.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approximately be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The population is approximately 50,000&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with approximately?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: approximately equal to, approximately the same, and approximately when.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is approximately used in scientific contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Scientific measurements, estimates, and calculations often use approximately.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adjective form of approximately?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective is &quot;approximate&quot; - meaning close to but not exact.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of approximately?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Approximately comes from the adjective &quot;approximate&quot; which comes from Latin &quot;approximatus&quot; meaning near.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approximately be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;It&apos;s approximately 5 miles away&quot; or &quot;I&apos;ll be there in approximately 10 minutes&quot; are common.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 