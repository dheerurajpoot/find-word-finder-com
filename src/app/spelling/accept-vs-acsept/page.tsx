import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accept vs Acsept - Which is Correct?",
  description: "Learn the correct spelling between &apos;accept&apos; and &apos;acsept&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcceptVsAcseptPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accept or Acsept</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accept or Acsept, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acsept</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acsept&quot; has the wrong letter order - it should be &quot;accept.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accept</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accept&quot; means to receive willingly or agree to something.
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
              <span className="font-bold">Accept</span> (verb): To receive willingly or agree to something. To take or receive something offered.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I accept your apology.</li>
              <li>She accepted the job offer.</li>
              <li>They accepted the terms of the agreement.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accept&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Receive:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Receive</li>
                  <li>Take</li>
                  <li>Welcome</li>
                  <li>Embrace</li>
                  <li>Adopt</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Agree:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Agree</li>
                  <li>Consent</li>
                  <li>Approve</li>
                  <li>Allow</li>
                  <li>Permit</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accept&quot; is the correct spelling. &quot;Acsept&quot; is a common misspelling—remember the correct letter order: a-c-c-e-p-t.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acsept or accept?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accept.&quot; &quot;Acsept&quot; is incorrect—it has the wrong letter order.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accept?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əkˈsɛpt/ (uhk-SEPT).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accept mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means to receive willingly, agree to something, or take something that is offered.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accept and except?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accept means to receive or agree, while except means to exclude or leave out.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accept be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I accept the terms and conditions&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accept?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: accept responsibility, accept an offer, accept defeat, and accept the consequences.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accept used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Accept the proposal&quot; and &quot;accept the invitation&quot; are common business uses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the noun form of accept?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun is &quot;acceptance&quot; - the act of accepting or being accepted.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accept?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accept comes from Latin &quot;acceptare&quot; meaning to take or receive willingly.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accept be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I accept your apology&quot; or &quot;She accepted the gift&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 