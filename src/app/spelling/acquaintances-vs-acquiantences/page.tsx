import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acquaintances or Acquiantences - Which is Correct?",
  description: "Learn the correct spelling between &apos;acquaintances&apos; and &apos;acquiantences&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcquaintancesVsAcquiantencesPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acquaintances or Acquiantences</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Acquaintances or Acquiantences, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acquiantences</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acquiantences&quot; has the wrong letter order - it should be &quot;acquaintances.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Acquaintances</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Acquaintances&quot; is the plural form of acquaintance.
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
              <span className="font-bold">Acquaintances</span> (noun, plural): People one knows slightly, but not as close friends. Multiple persons with whom one has a casual relationship.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She has many acquaintances from her various jobs.</li>
              <li>We invited some acquaintances to the party.</li>
              <li>His acquaintances include people from different walks of life.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;acquaintances&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">People:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Contacts</li>
                  <li>Connections</li>
                  <li>Associates</li>
                  <li>Colleagues</li>
                  <li>Familiars</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Relationships:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Network</li>
                  <li>Circle</li>
                  <li>Contacts</li>
                  <li>Associations</li>
                  <li>Connections</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Acquaintances&quot; is the correct spelling. &quot;Acquiantences&quot; is a common misspelling—remember the correct letter order: a-c-q-u-a-i-n-t-a-n-c-e-s.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acquiantences or acquaintances?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;acquaintances.&quot; &quot;Acquiantences&quot; is incorrect—it has the wrong letter order.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce acquaintances?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkweɪntənsɪz/ (uh-KWAYN-tuhn-siz).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does acquaintances mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means people one knows slightly, but not as close friends - the plural form of acquaintance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between acquaintances and friends?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquaintances are people you know slightly, while friends are people you have close relationships with.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquaintances be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;He has many business acquaintances&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with acquaintances?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: casual acquaintances, mutual acquaintances, business acquaintances, and social acquaintances.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is acquaintances used in professional contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Professional acquaintances&quot; and &quot;business acquaintances&quot; are common in workplace settings.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the singular form of acquaintances?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The singular form is &quot;acquaintance&quot; - one person you know slightly.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of acquaintances?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquaintances comes from Old French &quot;acointance&quot; meaning knowledge or familiarity, with English plural ending.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquaintances be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;They&apos;re just acquaintances&quot; or &quot;I have many acquaintances&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 