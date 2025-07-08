import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accrued or Acrued - Which is Correct?",
  description: "Learn the correct spelling between &apos;accrued&apos; and &apos;acrued&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccruedVsAcruedPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accrued or Acrued</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accrued or Acrued, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acrued</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acrued&quot; is missing the second &quot;c&quot; - it should be &quot;accrued.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accrued</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accrued&quot; means accumulated or gathered over time.
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
              <span className="font-bold">Accrued</span> (verb, past tense): Accumulated or gathered over time. To increase or accumulate gradually.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Interest has accrued on the loan.</li>
              <li>Vacation time accrued during the year.</li>
              <li>The benefits accrued over several months.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accrued&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Financial:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Accumulated</li>
                  <li>Earned</li>
                  <li>Collected</li>
                  <li>Gathered</li>
                  <li>Amassed</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">General:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Increased</li>
                  <li>Grown</li>
                  <li>Built up</li>
                  <li>Developed</li>
                  <li>Expanded</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accrued&quot; is the correct spelling. &quot;Acrued&quot; is a common misspelling—remember the double &quot;c&quot; in accrued.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acrued or accrued?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accrued.&quot; &quot;Acrued&quot; is incorrect—it&apos;s missing the second &quot;c.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accrued?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkruːd/ (uh-KROOD).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accrued mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means accumulated or gathered over time, especially in financial contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accrued and earned?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accrued refers to accumulation over time, while earned specifically refers to receiving payment for work.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accrued be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Interest has accrued on the account&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accrued?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: accrued interest, accrued benefits, accrued vacation, and accrued expenses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accrued used in financial contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Accrued&quot; is commonly used in accounting, banking, and financial reporting.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of accrued?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;accrue&quot; - to accumulate or gather over time.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accrued?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accrued comes from Latin &quot;accrescere&quot; meaning to grow or increase.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accrued be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Benefits have accrued&quot; or &quot;Interest accrued&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 