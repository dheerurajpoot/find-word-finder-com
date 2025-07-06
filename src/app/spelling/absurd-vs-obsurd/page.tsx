import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absurd vs Obsurd - Which is Correct?",
  description: "Learn the correct spelling between &apos;absurd&apos; and &apos;obsurd&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsurdVsObsurdPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absurd or Obsurd</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Absurd or Obsurd, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Obsurd</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Obsurd&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absurd</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absurd&quot; means ridiculous, unreasonable, or illogical.
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
              <span className="font-bold">Absurd</span> (adjective): Ridiculous, unreasonable, or illogical; contrary to reason or common sense.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>It&apos;s absurd to think that the earth is flat.</li>
              <li>The movie had an absurd plot that made no sense.</li>
              <li>His behavior was completely absurd.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absurd&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Ridiculous</li>
                  <li>Preposterous</li>
                  <li>Ludicrous</li>
                  <li>Nonsensical</li>
                  <li>Irrational</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Unreasonable</li>
                  <li>Illogical</li>
                  <li>Foolish</li>
                  <li>Crazy</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absurd&quot; is the correct spelling. &quot;Obsurd&quot; is a common misspelling—remember, it starts with &quot;A&quot; not &quot;O&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it obsurd or absurd?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absurd.&quot; &quot;Obsurd&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absurd?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əbˈsɜːrd/ (uhb-SURD).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absurd mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Ridiculous, unreasonable, or illogical; contrary to reason or common sense.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the noun form of absurd?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun form is &quot;absurdity&quot; - meaning the quality of being absurd or ridiculous.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absurd be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;absurd&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between absurd and ridiculous?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both mean silly or foolish, but &quot;absurd&quot; emphasizes illogical reasoning, while &quot;ridiculous&quot; emphasizes being laughable.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is absurd always negative?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Usually yes, but &quot;absurd&quot; can sometimes be used humorously or affectionately in certain contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with absurd?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: theater of the absurd, absurd situation, completely absurd, and utterly absurd.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absurd describe people?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, you can say someone is &quot;absurd&quot; or behaving in an &quot;absurd&quot; way.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of the word absurd?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Absurd comes from the Latin &quot;absurdus&quot; meaning &quot;out of tune&quot; or &quot;discordant,&quot; later meaning &quot;irrational.&quot;</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 