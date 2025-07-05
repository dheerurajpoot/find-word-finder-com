import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sacrifice vs Sacrafice - Which is Correct?",
  description: "Learn the correct spelling between &apos;sacrifice&apos; and &apos;sacrafice&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function SacrificeVsSacraficePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Sacrifice or Sacrafice</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Sacrifice or Sacrafice, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Sacrafice</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Sacrafice&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Sacrifice</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Sacrifice&quot; is a noun/verb meaning to give up something valuable.
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
              <span className="font-bold">Sacrifice</span> (noun, verb): An act of giving up something valued for the sake of something else regarded as more important or worthy.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Parents often make sacrifices for their children.</li>
              <li>She sacrificed her career to care for her family.</li>
              <li>The team made many sacrifices to win the championship.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;sacrifice&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Give up</li>
                  <li>Forfeit</li>
                  <li>Relinquish</li>
                  <li>Surrender</li>
                  <li>Abandon</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Offering</li>
                  <li>Loss</li>
                  <li>Compromise</li>
                  <li>Concession</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Sacrifice&quot; is the correct spelling. &quot;Sacrafice&quot; is a common misspelling—remember, it ends with &quot;-ifice,&quot; not &quot;-afice&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it sacrafice or sacrifice?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;sacrifice&quot;. &quot;Sacrafice&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce sacrifice?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈsæk.rɪ.faɪs/ (SAK-ri-fyse).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does sacrifice mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An act of giving up something valued for the sake of something else regarded as more important or worthy.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 