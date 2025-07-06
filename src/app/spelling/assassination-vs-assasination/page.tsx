import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Assassination vs Assasination - Which is Correct?",
  description: "Learn the correct spelling between &apos;assassination&apos; and &apos;assasination&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AssassinationVsAssasinationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Assassination or Assasination</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Assassination or Assasination, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Assasination</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Assasination&quot; is missing the second &quot;s&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Assassination</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Assassination&quot; has double &quot;s&quot;.
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
              <span className="font-bold">Assassination</span> (noun): The murder of a prominent person, especially a political leader, by surprise attack.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The assassination of President Kennedy shocked the nation.</li>
              <li>Security was increased after the assassination attempt.</li>
              <li>The assassination plot was foiled by intelligence agents.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;assassination&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Murder:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Murder</li>
                  <li>Killing</li>
                  <li>Execution</li>
                  <li>Elimination</li>
                  <li>Liquidation</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Political:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Political murder</li>
                  <li>Targeted killing</li>
                  <li>Regicide</li>
                  <li>Patricide</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Assassination&quot; is the correct spelling. &quot;Assasination&quot; is incorrect—remember the double &quot;s&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it assasination or assassination?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;assassination.&quot; &quot;Assasination&quot; is incorrect—it&apos;s missing the second &quot;s&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce assassination?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˌsæsɪˈneɪʃən/ (uh-sas-uh-NAY-shuhn).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does assassination mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The murder of a prominent person, especially a political leader, by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between assassination and murder?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Assassination&quot; specifically refers to killing prominent figures for political reasons, while &quot;murder&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassination be used in historical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Historical assassinations like Lincoln&apos;s assassination or Caesar&apos;s assassination are common references.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with assassination?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: assassination attempt, assassination plot, character assassination, and political assassination.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is assassination used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Assassination plots, assassination attempts, and assassination conspiracies are common in fiction and drama.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of assassination?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;assassinate&quot; - meaning to murder a prominent person by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of assassination?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Assassination comes from the word &quot;assassin&quot; which comes from Arabic &quot;hashshashin&quot; meaning hashish users.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassination be used metaphorically?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Character assassination&quot; means destroying someone&apos;s reputation, not physically killing them.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 