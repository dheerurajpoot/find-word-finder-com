import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acheive or Achieve - Which is Correct?",
  description: "Learn the correct spelling between &apos;acheive&apos; and &apos;achieve&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AchieveVsAcheivePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acheive or Achieve</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Achieve&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acheive</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acheive&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Achieve</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Achieve&quot; is a verb meaning to successfully bring about or reach something.
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
              <span className="font-bold">Achieve</span> (verb): Successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She achieved her dream of becoming a doctor.</li>
              <li>The team achieved their goal of winning the championship.</li>
              <li>He achieved success through hard work and determination.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;achieve&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Accomplish</li>
                  <li>Attain</li>
                  <li>Reach</li>
                  <li>Realize</li>
                  <li>Complete</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Fulfill</li>
                  <li>Obtain</li>
                  <li>Gain</li>
                  <li>Secure</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Achieve&quot; is a verb meaning to successfully bring about or reach something. &quot;Acheive&quot; is a common misspelling.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acheive or achieve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;achieve.&quot; &quot;Acheive&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce achieve?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈtʃiːv/ (uh-CHEEV).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does achieve mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.</div>
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
            <li><a href="/spelling/advance-vs-advance" className="text-blue-700 hover:text-blue-900 underline">Advance vs Advance</a></li>
            <li><a href="/spelling/adventure-vs-adventure" className="text-blue-700 hover:text-blue-900 underline">Adventure vs Adventure</a></li>
            <li><a href="/spelling/advertise-vs-advertise" className="text-blue-700 hover:text-blue-900 underline">Advertise vs Advertise</a></li>
            <li><a href="/spelling/advice-vs-advise" className="text-blue-700 hover:text-blue-900 underline">Advice vs Advise</a></li>
            <li><a href="/spelling/advise-vs-advise" className="text-blue-700 hover:text-blue-900 underline">Advise vs Advise</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/accomplish-vs-acomplish" className="text-purple-700 hover:text-purple-900 underline">Accomplish vs Acomplish</a></li>
            <li><a href="/spelling/attain-vs-attain" className="text-purple-700 hover:text-purple-900 underline">Attain vs Attain</a></li>
            <li><a href="/spelling/reach-vs-reach" className="text-purple-700 hover:text-purple-900 underline">Reach vs Reach</a></li>
            <li><a href="/spelling/realize-vs-realize" className="text-purple-700 hover:text-purple-900 underline">Realize vs Realize</a></li>
            <li><a href="/spelling/complete-vs-complete" className="text-purple-700 hover:text-purple-900 underline">Complete vs Complete</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/ie-vs-ei" className="text-green-700 hover:text-green-900 underline">Ie vs Ei Rules</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 