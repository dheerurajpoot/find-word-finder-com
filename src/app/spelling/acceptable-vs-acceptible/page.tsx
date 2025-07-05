import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acceptable vs Acceptible - Which is Correct?",
  description: "Learn the correct spelling between &apos;acceptable&apos; and &apos;acceptible&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcceptableVsAcceptiblePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acceptable or Acceptible</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Acceptable or Acceptible, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acceptible</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acceptible&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Acceptable</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Acceptable&quot; is an adjective meaning able to be agreed on or suitable.
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
              <span className="font-bold">Acceptable</span> (adjective): Able to be agreed on; suitable or satisfactory.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The proposal was acceptable to everyone.</li>
              <li>This behavior is not acceptable in our school.</li>
              <li>The quality of work was acceptable but could be improved.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;acceptable&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Permissible</li>
                  <li>Allowable</li>
                  <li>Admissible</li>
                  <li>Satisfactory</li>
                  <li>Tolerable</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Acceptability</li>
                  <li>Permissibility</li>
                  <li>Admissibility</li>
                  <li>Suitability</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Acceptable&quot; is the correct spelling. &quot;Acceptible&quot; is a common misspelling—remember, the correct ending is &quot;-able&quot; not &quot;-ible&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acceptible or acceptable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;acceptable.&quot; &quot;Acceptible&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce acceptable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əkˈsɛptəbəl/ (uk-SEP-tuh-buhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does acceptable mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Able to be agreed on; suitable or satisfactory.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 