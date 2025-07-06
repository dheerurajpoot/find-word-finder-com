import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appealing vs Appealling - Which is Correct?",
  description: "Learn the correct spelling between &apos;appealing&apos; and &apos;appealling&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppealingVsAppeallingPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appealing or Appealling</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appealing or Appealling, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Appealling</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Appealling&quot; has an extra &quot;l&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appealing</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appealing&quot; means attractive or interesting.
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
              <span className="font-bold">Appealing</span> (adjective): Attractive or interesting; able to arouse interest or desire; making a request or plea.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The new restaurant has an appealing menu with many options.</li>
              <li>She made an appealing case for why we should support the project.</li>
              <li>The job offer was very appealing to recent graduates.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appealing&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Attractive</li>
                  <li>Interesting</li>
                  <li>Desirable</li>
                  <li>Charming</li>
                  <li>Engaging</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Inviting</li>
                  <li>Pleasing</li>
                  <li>Alluring</li>
                  <li>Enticing</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appealing&quot; is the correct spelling. &quot;Appealling&quot; is incorrect—remember, only one &quot;l&quot; in appealing.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it appealling or appealing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appealing.&quot; &quot;Appealling&quot; is incorrect—it has an extra &quot;l&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appealing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpiːlɪŋ/ (uh-PEEL-ing).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appealing mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Attractive or interesting; able to arouse interest or desire; making a request or plea.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appealing and attractive?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appealing&quot; suggests something that draws interest or desire, while &quot;attractive&quot; specifically refers to physical beauty or visual appeal.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appealing be used for people?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! You can say someone has an appealing personality or an appealing smile.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appealing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: appealing to, visually appealing, intellectually appealing, and appealing offer.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appealing the same as interesting?</div>
              <div className="text-lg md:text-xl text-muted-foreground">They are similar, but &quot;appealing&quot; suggests something that draws you toward it, while &quot;interesting&quot; just means it holds your attention.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of appealing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb form is &quot;appeal&quot; - meaning to make a request or to be attractive.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appealing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appealing comes from the verb &quot;appeal&quot; which comes from Latin &quot;appellare&quot; meaning to address or call upon.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appealing be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In business, you might talk about appealing products, appealing prices, or appealing marketing campaigns.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 