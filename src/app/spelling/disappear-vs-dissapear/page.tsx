import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Disappear or Dissapear - Which is Correct?",
  description: "Learn the correct spelling between &apos;disappear&apos; and &apos;dissapear&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function DisappearVsDissapearPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Disappear or Dissapear</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Disappear or Dissapear, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Dissapear</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Dissapear&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Disappear</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Disappear&quot; is a verb meaning to cease to be visible.
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
              <span className="font-bold">Disappear</span> (verb): To cease to be visible; to vanish from sight; to become lost or go missing.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The magician made the rabbit disappear.</li>
              <li>The sun disappeared behind the clouds.</li>
              <li>My keys seem to have disappeared.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;disappear&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Vanish</li>
                  <li>Evaporate</li>
                  <li>Fade</li>
                  <li>Retreat</li>
                  <li>Fade away</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Go missing</li>
                  <li>Become invisible</li>
                  <li>Dissolve</li>
                  <li>Melt away</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Disappear&quot; is the correct spelling. &quot;Dissapear&quot; is a common misspelling—remember, it only has one &quot;s&quot; after the &quot;i&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it dissapear or disappear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;disappear.&quot; &quot;Dissapear&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce disappear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌdɪsəˈpɪr/ (dis-uh-PEER).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does disappear mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To cease to be visible; to vanish from sight; to become lost or go missing.</div>
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
            <li><a href="/spelling/appreciate-vs-appreiciate" className="text-blue-700 hover:text-blue-900 underline">Appreciate vs Appreiciate</a></li>
            <li><a href="/spelling/acquire-vs-aquire" className="text-blue-700 hover:text-blue-900 underline">Acquire vs Aquire</a></li>
            <li><a href="/spelling/acquitted-vs-acquited" className="text-blue-700 hover:text-blue-900 underline">Acquitted vs Acquited</a></li>
            <li><a href="/spelling/acquisition-vs-aquisition" className="text-blue-700 hover:text-blue-900 underline">Acquisition vs Aquisition</a></li>
            <li><a href="/spelling/acquiescence-vs-acquiesence" className="text-blue-700 hover:text-blue-900 underline">Acquiescence vs Acquiesence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/disappoint-vs-dissapoint" className="text-purple-700 hover:text-purple-900 underline">Disappoint vs Dissapoint</a></li>
            <li><a href="/spelling/disappointed-vs-dissapointed" className="text-purple-700 hover:text-purple-900 underline">Disappointed vs Dissapointed</a></li>
            <li><a href="/spelling/disappointing-vs-dissapointing" className="text-purple-700 hover:text-purple-900 underline">Disappointing vs Dissapointing</a></li>
            <li><a href="/spelling/disappointment-vs-dissapointment" className="text-purple-700 hover:text-purple-900 underline">Disappointment vs Dissapointment</a></li>
            <li><a href="/spelling/disappear-vs-dissapear" className="text-purple-700 hover:text-purple-900 underline">Disappear vs Dissapear</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech Worksheets</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 hover:text-green-900 underline">Helping Verbs Worksheets</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 