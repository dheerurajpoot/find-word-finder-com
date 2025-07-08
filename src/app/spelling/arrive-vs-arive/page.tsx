import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Arrive or Arive - Which is Correct?",
  description: "Learn the correct spelling between &apos;arrive&apos; and &apos;arive&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ArriveVsArivePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Arrive or Arive</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Arrive or Arive, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Arive</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Arive&quot; is missing the second &quot;r&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Arrive</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Arrive&quot; has double &quot;r&quot;.
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
              <span className="font-bold">Arrive</span> (verb): To reach a destination; to come to a place; to reach a conclusion or decision.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>We will arrive at the airport at 3 PM.</li>
              <li>When did you arrive home last night?</li>
              <li>After much discussion, we arrived at a solution.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;arrive&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Reach:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Reach</li>
                  <li>Come</li>
                  <li>Get to</li>
                  <li>Show up</li>
                  <li>Turn up</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Conclusion:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Reach</li>
                  <li>Come to</li>
                  <li>Decide</li>
                  <li>Conclude</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Arrive&quot; is the correct spelling. &quot;Arive&quot; is incorrect—remember the double &quot;r&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it arive or arrive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;arrive.&quot; &quot;Arive&quot; is incorrect—it&apos;s missing the second &quot;r&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce arrive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈraɪv/ (uh-RYVE).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does arrive mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To reach a destination; to come to a place; to reach a conclusion or decision.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between arrive and come?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Arrive&quot; suggests reaching a specific destination, while &quot;come&quot; is more general movement toward something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can arrive be used for conclusions?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;We arrived at a decision&quot; or &quot;They arrived at the same conclusion&quot; are common uses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with arrive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: arrive at, arrive in, arrive on time, and arrive safely.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is arrive used in travel contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Flight arrivals, arrival times, and arrival gates are very common in travel.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the noun form of arrive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun is &quot;arrival&quot; - meaning the act of arriving or reaching a destination.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of arrive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Arrive comes from Old French &quot;ariver&quot; which comes from Latin &quot;ad&quot; + &quot;ripa&quot; meaning to reach the shore.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can arrive be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The shipment will arrive tomorrow&quot; or &quot;We arrived at a solution&quot; are common business uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 