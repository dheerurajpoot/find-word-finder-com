import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Action or Actoin - Which is Correct?",
  description: "Learn the correct spelling between &apos;action&apos; and &apos;actoin&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ActionVsActoinPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Action or Actoin</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Action or Actoin, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Actoin</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Actoin&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Action</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Action&quot; is a noun meaning the process of doing something.
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
              <span className="font-bold">Action</span> (noun): The fact or process of doing something, typically to achieve an aim; a thing done.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The government must take action to reduce pollution.</li>
              <li>His actions spoke louder than his words.</li>
              <li>The movie was full of exciting action scenes.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;action&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Deed</li>
                  <li>Step</li>
                  <li>Move</li>
                  <li>Measure</li>
                  <li>Activity</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Behavior</li>
                  <li>Conduct</li>
                  <li>Performance</li>
                  <li>Execution</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Action&quot; is the correct spelling. &quot;Actoin&quot; is a common misspelling—remember, the &quot;i&quot; comes after the &quot;o&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it actoin or action?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;action.&quot; &quot;Actoin&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce action?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈækʃən/ (AK-shun).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does action mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The fact or process of doing something, typically to achieve an aim; a thing done.</div>
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
            <li><a href="/spelling/alcohol-vs-alcohol" className="text-blue-700 hover:text-blue-900 underline">Alcohol vs Alcohol</a></li>
            <li><a href="/spelling/alive-vs-alive" className="text-blue-700 hover:text-blue-900 underline">Alive vs Alive</a></li>
            <li><a href="/spelling/all-vs-all" className="text-blue-700 hover:text-blue-900 underline">All vs All</a></li>
            <li><a href="/spelling/allow-vs-allow" className="text-blue-700 hover:text-blue-900 underline">Allow vs Allow</a></li>
            <li><a href="/spelling/almost-vs-almost" className="text-blue-700 hover:text-blue-900 underline">Almost vs Almost</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/deed-vs-deed" className="text-purple-700 hover:text-purple-900 underline">Deed vs Deed</a></li>
            <li><a href="/spelling/step-vs-step" className="text-purple-700 hover:text-purple-900 underline">Step vs Step</a></li>
            <li><a href="/spelling/move-vs-move" className="text-purple-700 hover:text-purple-900 underline">Move vs Move</a></li>
            <li><a href="/spelling/measure-vs-measure" className="text-purple-700 hover:text-purple-900 underline">Measure vs Measure</a></li>
            <li><a href="/spelling/activity-vs-activity" className="text-purple-700 hover:text-purple-900 underline">Activity vs Activity</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 