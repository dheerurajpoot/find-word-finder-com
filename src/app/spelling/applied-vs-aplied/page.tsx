import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Applied vs Aplied - Which is Correct?",
  description: "Learn the correct spelling between &apos;applied&apos; and &apos;aplied&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppliedVsApliedPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Applied or Aplied</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Applied or Aplied, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aplied</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aplied&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Applied</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Applied&quot; is the past tense of apply.
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
              <span className="font-bold">Applied</span> (verb, past tense): Put to use; made a formal request; put on or spread; used in a practical way.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I applied for the job last week.</li>
              <li>She applied the theory to solve the problem.</li>
              <li>He applied sunscreen before going outside.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;applied&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Used</li>
                  <li>Put</li>
                  <li>Spread</li>
                  <li>Requested</li>
                  <li>Utilized</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Implemented</li>
                  <li>Employed</li>
                  <li>Submitted</li>
                  <li>Administered</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Applied&quot; is the correct spelling. &quot;Aplied&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aplied or applied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;applied.&quot; &quot;Aplied&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce applied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈplaɪd/ (uh-PLYD).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does applied mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Put to use; made a formal request; put on or spread; used in a practical way.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between applied and used?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Applied&quot; suggests putting something to a specific use or purpose, while &quot;used&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can applied be used for job requests?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I applied for the job&quot; means you submitted a formal request for employment.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with applied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: applied for, applied to, applied science, and applied mathematics.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is applied used in academic contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Applied sciences, applied research, and applied mathematics are common academic terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the present tense of applied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The present tense is &quot;apply&quot; - meaning to put to use or make a request.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of applied?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Applied comes from the verb &quot;apply&quot; which comes from Latin &quot;applicare&quot; meaning to attach or apply.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can applied be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Applied research, applied technology, and applied strategies are common in business.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 