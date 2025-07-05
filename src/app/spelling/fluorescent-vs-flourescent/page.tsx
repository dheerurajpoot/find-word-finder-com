import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Flourescent vs Fluorescent - Which is Correct?",
  description: "Learn the correct spelling between &apos;flourescent&apos; and &apos;fluorescent&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function FluorescentVsFlourescentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Flourescent or Fluorescent</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Fluorescent&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Flourescent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Flourescent&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Fluorescent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Fluorescent&quot; is an adjective meaning emitting light after absorbing radiation.
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
              <span className="font-bold">Fluorescent</span> (adjective): Emitting light as a result of absorbing radiation, especially visible or ultraviolet light; glowing or luminous.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The room was lit by fluorescent lights.</li>
              <li>She wore a fluorescent yellow jacket for visibility.</li>
              <li>The paint glows under fluorescent lighting.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;fluorescent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Glowing</li>
                  <li>Luminous</li>
                  <li>Radiant</li>
                  <li>Shining</li>
                  <li>Bright</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Phosphorescent</li>
                  <li>Incandescent</li>
                  <li>Vivid</li>
                  <li>Brilliant</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Fluorescent&quot; is the correct spelling for something that emits light after absorbing radiation. &quot;Flourescent&quot; is a common misspelling—remember, the &quot;u&quot; comes after the &quot;o.&quot;
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it flourescent or fluorescent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;fluorescent.&quot; &quot;Flourescent&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce fluorescent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /flʊˈrɛsənt/ (floo-RES-uhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does fluorescent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Emitting light as a result of absorbing radiation, especially visible or ultraviolet light; glowing or luminous.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 