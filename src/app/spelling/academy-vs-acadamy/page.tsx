import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Academy or Acadamy - Which is Correct?",
  description: "Learn the correct spelling between &apos;academy&apos; and &apos;acadamy&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcademyVsAcadamyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Academy or Acadamy</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Academy or Acadamy, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acadamy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acadamy&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Academy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling.   &quot;Academy&quot; is a noun meaning a place of study or training in a special field.
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
              <span className="font-bold">Academy</span> (noun): A place of study or training in a special field; an educational institution.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She was accepted into a prestigious music academy.</li>
              <li>The police academy trains new recruits.</li>
              <li>He attended a military academy as a teenager.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;academy&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Institute</li>
                  <li>School</li>
                  <li>College</li>
                  <li>Conservatory</li>
                  <li>Training center</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Place of learning</li>
                  <li>Educational institution</li>
                  <li>Specialized school</li>
                  <li>Training facility</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Academy&quot; is the correct spelling. &quot;Acadamy&quot; is a common misspelling—remember, it ends with &quot;-emy&quot; not &quot;-amy&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acadamy or academy?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;academy.&quot; &quot;Acadamy&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce academy?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkædəmi/ (uh-KAD-uh-mee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does academy mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A place of study or training in a special field; an educational institution.</div>
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
            <li><a href="/spelling/absence-vs-abscence" className="text-blue-700 hover:text-blue-900 underline">Absence vs Abscence</a></li>
            <li><a href="/spelling/accept-vs-acept" className="text-blue-700 hover:text-blue-900 underline">Accept vs Acept</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/institute-vs-institute" className="text-purple-700 hover:text-purple-900 underline">Institute vs Institute</a></li>
            <li><a href="/spelling/school-vs-school" className="text-purple-700 hover:text-purple-900 underline">School vs School</a></li>
            <li><a href="/spelling/college-vs-college" className="text-purple-700 hover:text-purple-900 underline">College vs College</a></li>
            <li><a href="/spelling/conservatory-vs-conservatory" className="text-purple-700 hover:text-purple-900 underline">Conservatory vs Conservatory</a></li>
            <li><a href="/spelling/university-vs-univercity" className="text-purple-700 hover:text-purple-900 underline">University vs Univercity</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/educational-terms" className="text-green-700 hover:text-green-900 underline">Educational Terms</a></li>
            <li><a href="/grammar/word-endings" className="text-green-700 hover:text-green-900 underline">Word Endings</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 