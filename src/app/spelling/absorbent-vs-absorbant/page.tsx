import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absorbant or Absorbent - Which is Correct?",
  description: "Learn the correct spelling between &apos;absorbant&apos; and &apos;absorbent&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsorbentVsAbsorbantPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absorbant or Absorbent</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Absorbent&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Absorbant</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Absorbant&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absorbent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absorbent&quot; is an adjective meaning able to soak up liquid easily.
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
              <span className="font-bold">Absorbent</span> (adjective): Able to soak up liquid easily; having the ability to absorb moisture or other substances.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Towels are made from absorbent material.</li>
              <li>This absorbent paper quickly soaks up spills.</li>
              <li>The absorbent cotton fabric dried quickly.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absorbent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Soaking</li>
                  <li>Spongy</li>
                  <li>Porous</li>
                  <li>Permeable</li>
                  <li>Thirsty</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Absorptive</li>
                  <li>Retentive</li>
                  <li>Capacious</li>
                  <li>Efficient</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absorbent&quot; is the correct spelling for something that soaks up liquids. &quot;Absorbant&quot; is a common misspelling—remember, the correct ending is &quot;-ent.&quot;
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it absorbant or absorbent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absorbent.&quot; &quot;Absorbant&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absorbent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əbˈzɔːrbənt/ (ub-ZOR-bent).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absorbent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Able to soak up liquid easily; having the ability to absorb moisture or other substances.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 