import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Approve vs Aprove - Which is Correct?",
  description: "Learn the correct spelling between &apos;approve&apos; and &apos;aprove&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApproveVsAprovePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Approve or Aprove</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Approve or Aprove, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aprove</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aprove&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Approve</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Approve&quot; has double &quot;p&quot;.
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
              <span className="font-bold">Approve</span> (verb): To officially agree to or accept something; to give permission or consent; to think favorably of.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The board approved the new budget.</li>
              <li>I approve of your decision to study abroad.</li>
              <li>The committee approved the proposal unanimously.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;approve&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Agree:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Agree</li>
                  <li>Accept</li>
                  <li>Consent</li>
                  <li>Endorse</li>
                  <li>Sanction</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Support:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Support</li>
                  <li>Back</li>
                  <li>Authorize</li>
                  <li>Ratify</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Approve&quot; is the correct spelling. &quot;Aprove&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aprove or approve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;approve.&quot; &quot;Aprove&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce approve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpruːv/ (uh-PROOV).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does approve mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To officially agree to or accept something; to give permission or consent; to think favorably of.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between approve and agree?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Approve&quot; is more formal and official, while &quot;agree&quot; is more general and can be informal.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approve be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The manager approved the expense report&quot; is a common business phrase.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with approve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: approve of, approve for, approve by, and approve unanimously.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is approve used in formal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Official approval, regulatory approval, and board approval are very formal terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the noun form of approve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun is &quot;approval&quot; - meaning the act of officially agreeing to or accepting something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of approve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Approve comes from Latin &quot;approbare&quot; meaning to prove or confirm, from &quot;ad&quot; + &quot;probare&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approve be used in personal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I approve of your choice&quot; or &quot;My parents approved of my decision&quot; are common personal uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 