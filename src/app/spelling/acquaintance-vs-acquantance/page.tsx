import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acquaintance vs Acquantance - Which is Correct?",
  description: "Learn the correct spelling between &apos;acquaintance&apos; and &apos;acquantance&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcquaintanceVsAcquantancePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acquaintance or Acquantance</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Acquaintance or Acquantance, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acquantance</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acquantance&quot; is missing the &quot;i&quot; and has incorrect letter order.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Acquaintance</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Acquaintance&quot; means a person one knows slightly, but not as a close friend.
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
              <span className="font-bold">Acquaintance</span> (noun): A person one knows slightly, but not as a close friend. Knowledge or experience of something.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She was just an acquaintance from work.</li>
              <li>I have a passing acquaintance with French literature.</li>
              <li>We became acquaintances at the conference.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;acquaintance&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">People:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Contact</li>
                  <li>Connection</li>
                  <li>Associate</li>
                  <li>Colleague</li>
                  <li>Familiar</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Knowledge:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Familiarity</li>
                  <li>Understanding</li>
                  <li>Knowledge</li>
                  <li>Awareness</li>
                  <li>Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Acquaintance&quot; is the correct spelling. &quot;Acquantance&quot; is a common misspelling—remember the &quot;i&quot; and the correct letter order.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acquantance or acquaintance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;acquaintance.&quot; &quot;Acquantance&quot; is incorrect—it&apos;s missing the &quot;i&quot; and has wrong letter order.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce acquaintance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkweɪntəns/ (uh-KWAYN-tuhns).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does acquaintance mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means a person one knows slightly, but not as a close friend, or knowledge/experience of something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between acquaintance and friend?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An acquaintance is someone you know slightly, while a friend is someone you have a close relationship with.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquaintance be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;He was a business acquaintance&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with acquaintance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: casual acquaintance, mutual acquaintance, passing acquaintance, and business acquaintance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is acquaintance used in professional contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Professional acquaintance&quot; and &quot;business acquaintance&quot; are common in workplace settings.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of acquaintance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;acquaint&quot; - to make someone aware of or familiar with something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of acquaintance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquaintance comes from Old French &quot;acointance&quot; meaning knowledge or familiarity.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquaintance be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;He&apos;s just an acquaintance&quot; or &quot;We have a passing acquaintance&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 