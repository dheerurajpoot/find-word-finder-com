import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Approval or Aproval - Which is Correct?",
  description: "Learn the correct spelling between &apos;approval&apos; and &apos;aproval&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApprovalVsAprovalPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Approval or Aproval</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Approval or Aproval, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aproval</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aproval&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Approval</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Approval&quot; has double &quot;p&quot;.
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
              <span className="font-bold">Approval</span> (noun): The act of officially agreeing to or accepting something; permission or consent.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The project received approval from the board.</li>
              <li>She nodded in approval of the plan.</li>
              <li>We need your approval before proceeding.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;approval&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Agreement:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Agreement</li>
                  <li>Consent</li>
                  <li>Permission</li>
                  <li>Acceptance</li>
                  <li>Endorsement</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Support:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Support</li>
                  <li>Backing</li>
                  <li>Authorization</li>
                  <li>Sanction</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Approval&quot; is the correct spelling. &quot;Aproval&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aproval or approval?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;approval.&quot; &quot;Aproval&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce approval?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpruːvəl/ (uh-PROO-vuhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does approval mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The act of officially agreeing to or accepting something; permission or consent.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between approval and permission?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Approval&quot; suggests positive agreement, while &quot;permission&quot; is more about allowing something to happen.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approval be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The proposal needs approval from management&quot; is a common business phrase.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with approval?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: approval of, approval for, final approval, and pending approval.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is approval used in formal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Official approval, regulatory approval, and board approval are very formal terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of approval?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;approve&quot; - meaning to officially agree to or accept something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of approval?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Approval comes from the verb &quot;approve&quot; which comes from Latin &quot;approbare&quot; meaning to prove or confirm.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can approval be used in personal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Parental approval, peer approval, and social approval are common in personal relationships.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 