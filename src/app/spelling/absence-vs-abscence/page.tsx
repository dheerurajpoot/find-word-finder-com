import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absence or Abscence - Which is Correct?",
  description: "Learn the correct spelling between &apos;absence&apos; and &apos;abscence&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsenceVsAbscencePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absence or Abscence</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Absence or Abscence, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Abscence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Abscence&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absence&quot; is a noun meaning the state of being away.
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
              <span className="font-bold">Absence</span> (noun): The state of being away from a place or person; lack; nonattendance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>His absence from the meeting was noticed.</li>
              <li>The absence of evidence made the case difficult.</li>
              <li>She was marked absent from school.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absence&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Nonattendance</li>
                  <li>Missing</li>
                  <li>Lack</li>
                  <li>Omission</li>
                  <li>Vacancy</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Not present</li>
                  <li>Away from</li>
                  <li>Missing from</li>
                  <li>Out of</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absence&quot; is the correct spelling. &quot;Abscence&quot; is a common misspelling—remember, it has &quot;s&quot; before &quot;c&quot; not &quot;c&quot; before &quot;s&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it abscence or absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absence.&quot; &quot;Abscence&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ə&apos;æbsəns/ (uh-AB-suhns).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absence mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The state of being away from a place or person; lack; nonattendance.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/abbey-vs-abbay" className="text-blue-700 hover:text-blue-900 underline">Abbey vs Abbay</a></li>
            <li><a href="/spelling/abandon-vs-abandun" className="text-blue-700 hover:text-blue-900 underline">Abandon vs Abandun</a></li>
            <li><a href="/spelling/ability-vs-abillity" className="text-blue-700 hover:text-blue-900 underline">Ability vs Abillity</a></li>
            <li><a href="/spelling/accept-vs-acept" className="text-blue-700 hover:text-blue-900 underline">Accept vs Acept</a></li>
            <li><a href="/spelling/access-vs-acces" className="text-blue-700 hover:text-blue-900 underline">Access vs Acces</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/presence-vs-presence" className="text-purple-700 hover:text-purple-900 underline">Presence vs Presence</a></li>
            <li><a href="/spelling/attendance-vs-attendence" className="text-purple-700 hover:text-purple-900 underline">Attendance vs Attendence</a></li>
            <li><a href="/spelling/absence-vs-absense" className="text-purple-700 hover:text-purple-900 underline">Absence vs Absense</a></li>
            <li><a href="/spelling/absence-vs-apsence" className="text-purple-700 hover:text-purple-900 underline">Absence vs Apsence</a></li>
            <li><a href="/spelling/absent-vs-abcent" className="text-purple-700 hover:text-purple-900 underline">Absent vs Abcent</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/letter-order" className="text-green-700 hover:text-green-900 underline">Letter Order</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 