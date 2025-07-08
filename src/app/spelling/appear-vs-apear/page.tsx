import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appear or Apear - Which is Correct?",
  description: "Learn the correct spelling between &apos;appear&apos; and &apos;apear&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppearVsApearPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appear or Apear</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appear or Apear, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apear</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apear&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appear</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appear&quot; means to become visible or present.
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
              <span className="font-bold">Appear</span> (verb): To become visible; to come into sight; to seem or look; to make a public appearance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The stars appear in the night sky.</li>
              <li>She will appear on the talk show tomorrow.</li>
              <li>It appears that the weather will be nice today.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appear&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Show</li>
                  <li>Emerge</li>
                  <li>Surface</li>
                  <li>Materialize</li>
                  <li>Arrive</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Become visible</li>
                  <li>Come into view</li>
                  <li>Show up</li>
                  <li>Turn up</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appear&quot; is the correct spelling. &quot;Apear&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apear or appear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appear.&quot; &quot;Apear&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpɪr/ (uh-PEER).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appear mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To become visible; to come into sight; to seem or look; to make a public appearance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appear and show?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appear&quot; suggests something becoming visible naturally, while &quot;show&quot; suggests something being revealed or displayed.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appear be used for non-physical things?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! You can say &quot;It appears that...&quot; to mean something seems to be the case.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: appear to be, appear out of nowhere, appear on stage, and appear in court.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appear used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Appear&quot; is commonly used in storytelling to describe characters or events coming into view.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the past tense of appear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The past tense is &quot;appeared&quot; - meaning came into sight or became visible.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appear?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appear comes from Latin &quot;apparere&quot; meaning to become visible, from &quot;ad-&quot; (to) + &quot;parere&quot; (to be visible).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appear be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Appear&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 