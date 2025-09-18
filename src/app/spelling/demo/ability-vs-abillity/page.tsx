import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ability or Abillity - Which is Correct?",
  description: "Learn the correct spelling between &apos;ability&apos; and &apos;abillity&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbilityVsAbillityPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Ability or Abillity</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Ability or Abillity, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Abillity</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Abillity&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Ability</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Ability&quot; is a noun meaning the power or skill to do something.
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
              <span className="font-bold">Ability</span> (noun): The power or skill to do something; a natural aptitude or acquired proficiency.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She has the ability to learn languages quickly.</li>
              <li>His mathematical ability impressed the teachers.</li>
              <li>The team demonstrated their ability to work under pressure.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;ability&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Capability</li>
                  <li>Capacity</li>
                  <li>Skill</li>
                  <li>Talent</li>
                  <li>Proficiency</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Aptitude</li>
                  <li>Competence</li>
                  <li>Expertise</li>
                  <li>Mastery</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Ability&quot; is the correct spelling. &quot;Abillity&quot; is a common misspelling—remember, it has only one &quot;l&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it abillity or ability?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;ability.&quot; &quot;Abillity&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce ability?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈbɪləti/ (uh-BIL-uh-tee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does ability mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The power or skill to do something; a natural aptitude or acquired proficiency.</div>
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
            <li><a href="/spelling/absence-vs-abscence" className="text-blue-700 hover:text-blue-900 underline">Absence vs Abscence</a></li>
            <li><a href="/spelling/accept-vs-acept" className="text-blue-700 hover:text-blue-900 underline">Accept vs Acept</a></li>
            <li><a href="/spelling/access-vs-acces" className="text-blue-700 hover:text-blue-900 underline">Access vs Acces</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/capability-vs-capability" className="text-purple-700 hover:text-purple-900 underline">Capability vs Capability</a></li>
            <li><a href="/spelling/capacity-vs-capacity" className="text-purple-700 hover:text-purple-900 underline">Capacity vs Capacity</a></li>
            <li><a href="/spelling/skill-vs-skill" className="text-purple-700 hover:text-purple-900 underline">Skill vs Skill</a></li>
            <li><a href="/spelling/talent-vs-talent" className="text-purple-700 hover:text-purple-900 underline">Talent vs Talent</a></li>
            <li><a href="/spelling/proficiency-vs-proficiency" className="text-purple-700 hover:text-purple-900 underline">Proficiency vs Proficiency</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/double-letters" className="text-green-700 hover:text-green-900 underline">Double Letters</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 