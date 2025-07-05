import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Independent vs Independant - Which is Correct?",
  description: "Learn the correct spelling between &apos;independent&apos; and &apos;independant&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function IndependentVsIndependantPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Independent or Independant</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Independent or Independant, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Independant</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Independant&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Independent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Independent&quot; is an adjective meaning free from outside control.
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
              <span className="font-bold">Independent</span> (adjective/noun): Free from outside control; not depending on another's authority; self-reliant.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She is an independent thinker.</li>
              <li>The country became independent in 1960.</li>
              <li>He runs an independent business.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;independent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Self-reliant</li>
                  <li>Autonomous</li>
                  <li>Free</li>
                  <li>Self-sufficient</li>
                  <li>Self-governing</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Independence</li>
                  <li>Autonomy</li>
                  <li>Freedom</li>
                  <li>Self-reliance</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Independent&quot; is the correct spelling. &quot;Independant&quot; is a common misspelling—remember, it ends with &quot;-ent&quot; not &quot;-ant&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it independant or independent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;independent.&quot; &quot;Independant&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce independent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌɪndɪˈpɛndənt/ (in-di-PEN-dent).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does independent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Free from outside control; not depending on another's authority; self-reliant.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 