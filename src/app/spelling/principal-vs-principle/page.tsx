import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Principal or Principle - Which is Correct?",
  description: "Learn the correct spelling and usage between &apos;principal&apos; and &apos;principle&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function PrincipalVsPrinciplePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Principal or Principle</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
        Principal or Principle are commonly confused words due to their similar spelling and pronunciation.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Principal</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Principal&quot; refers to a person with the highest authority or something of primary importance.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-blue-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">Principle</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Principle&quot; refers to a fundamental truth, law, or standard.
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
              <span className="font-bold">Principal</span> (noun, adjective): The person with the highest authority or most important position; or something of primary importance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The school principal gave a speech.</li>
              <li>The principal reason for the change was safety.</li>
              <li>She is the principal investigator on the project.</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Principle</span> (noun): A fundamental truth, law, or standard that guides behavior or reasoning; a basic belief or rule.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She acted on the principle of honesty.</li>
              <li>The basic principles of physics are universal.</li>
              <li>He refused to compromise his principles.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Principal:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Head</li>
                  <li>Chief</li>
                  <li>Main</li>
                  <li>Primary</li>
                  <li>Leader</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Principle:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Rule</li>
                  <li>Standard</li>
                  <li>Doctrine</li>
                  <li>Value</li>
                  <li>Belief</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Principal&quot; is usually a person or something of main importance (think: &quot;the principal is your pal&quot;). &quot;Principle&quot; is a rule or belief. They sound similar but have different meanings and uses.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the difference between principal and principle?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Principal&quot; refers to a person in authority or something of main importance. &quot;Principle&quot; refers to a fundamental rule or belief.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce principal and principle?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are pronounced /ˈprɪn.sə.pəl/ (PRIN-suh-puhl), but their meanings differ.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">When should I use principal vs. principle?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Use &quot;principal&quot; for a person or something of main importance; use &quot;principle&quot; for a rule, law, or belief.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 