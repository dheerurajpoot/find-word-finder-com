import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Assassinate or Assasinate - Which is Correct?",
  description: "Learn the correct spelling between &apos;assassinate&apos; and &apos;assasinate&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AssassinateVsAssasinatePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Assassinate or Assasinate</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Assassinate or Assasinate, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Assasinate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Assasinate&quot; is missing the second &quot;s&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Assassinate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Assassinate&quot; has double &quot;s&quot;.
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
              <span className="font-bold">Assassinate</span> (verb): To murder a prominent person, especially a political leader, by surprise attack.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The plot to assassinate the president was discovered.</li>
              <li>Several attempts were made to assassinate the dictator.</li>
              <li>Security forces prevented the assassination attempt.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;assassinate&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Kill:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Kill</li>
                  <li>Murder</li>
                  <li>Execute</li>
                  <li>Eliminate</li>
                  <li>Liquidate</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Political:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Target</li>
                  <li>Take out</li>
                  <li>Neutralize</li>
                  <li>Remove</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Assassinate&quot; is the correct spelling. &quot;Assasinate&quot; is incorrect—remember the double &quot;s&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it assasinate or assassinate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;assassinate.&quot; &quot;Assasinate&quot; is incorrect—it&apos;s missing the second &quot;s&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce assassinate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈsæsɪneɪt/ (uh-SAS-uh-nayt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does assassinate mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To murder a prominent person, especially a political leader, by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between assassinate and kill?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Assassinate&quot; specifically refers to killing prominent figures for political reasons, while &quot;kill&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassinate be used in historical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Historical assassinations like &quot;They attempted to assassinate Lincoln&quot; are common references.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with assassinate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: attempt to assassinate, plot to assassinate, and successfully assassinate.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is assassinate used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Assassination plots, assassination attempts, and assassination conspiracies are common in fiction and drama.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the noun form of assassinate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun is &quot;assassination&quot; - meaning the act of murdering a prominent person by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of assassinate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Assassinate comes from the word &quot;assassin&quot; which comes from Arabic &quot;hashshashin&quot; meaning hashish users.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassinate be used metaphorically?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Character assassination&quot; means destroying someone&apos;s reputation, not physically killing them.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 