import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Assassin vs Assasin - Which is Correct?",
  description: "Learn the correct spelling between &apos;assassin&apos; and &apos;assasin&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AssassinVsAssasinPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Assassin or Assasin</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Assassin or Assasin, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Assasin</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Assasin&quot; is missing the second &quot;s&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Assassin</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Assassin&quot; has double &quot;s&quot;.
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
              <span className="font-bold">Assassin</span> (noun): A person who murders a prominent person, especially a political leader, by surprise attack.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The assassin was caught before he could escape.</li>
              <li>Security forces tracked down the assassin.</li>
              <li>The assassin used a sniper rifle for the attack.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;assassin&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Killer:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Killer</li>
                  <li>Murderer</li>
                  <li>Executioner</li>
                  <li>Hitman</li>
                  <li>Contract killer</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Political:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Political killer</li>
                  <li>Targeted killer</li>
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
        <strong>Note:</strong> &quot;Assassin&quot; is the correct spelling. &quot;Assasin&quot; is incorrect—remember the double &quot;s&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it assasin or assassin?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;assassin.&quot; &quot;Assasin&quot; is incorrect—it&apos;s missing the second &quot;s&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce assassin?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈsæsɪn/ (uh-SAS-in).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does assassin mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A person who murders a prominent person, especially a political leader, by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between assassin and murderer?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Assassin&quot; specifically refers to killing prominent figures for political reasons, while &quot;murderer&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassin be used in historical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Historical assassins like John Wilkes Booth or Gavrilo Princip are common references.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with assassin?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: hired assassin, professional assassin, and would-be assassin.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is assassin used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Assassin characters, assassin guilds, and assassin plots are common in fiction and drama.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of assassin?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;assassinate&quot; - meaning to murder a prominent person by surprise attack.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of assassin?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Assassin comes from Arabic &quot;hashshashin&quot; meaning hashish users, referring to a medieval sect.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can assassin be used metaphorically?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Character assassin&quot; means someone who destroys reputations, not physically kills people.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 