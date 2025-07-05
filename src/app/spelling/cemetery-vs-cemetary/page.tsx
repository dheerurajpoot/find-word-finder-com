import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cemetary vs Cemetery - Which is Correct?",
  description: "Learn the correct spelling between &apos;cemetary&apos; and &apos;cemetery&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function CemeteryVsCemetaryPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Cemetary or Cemetery</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Cemetery&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Cemetary</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Cemetary&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Cemetery</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Cemetery&quot; is a noun meaning a burial ground.
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
              <span className="font-bold">Cemetery</span> (noun): A burial ground; a place where the dead are buried; a graveyard.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The cemetery was quiet and peaceful.</li>
              <li>They visited the family cemetery on Memorial Day.</li>
              <li>The old cemetery dates back to the 1800s.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;cemetery&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Graveyard</li>
                  <li>Burial ground</li>
                  <li>Memorial park</li>
                  <li>Necropolis</li>
                  <li>Burying ground</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Mausoleum</li>
                  <li>Columbarium</li>
                  <li>Memorial</li>
                  <li>Resting place</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Cemetery&quot; is the correct spelling for a burial ground. &quot;Cemetary&quot; is a common misspelling—remember, it ends with &quot;-ery.&quot;
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it cemetary or cemetery?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;cemetery.&quot; &quot;Cemetary&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce cemetery?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈsɛmɪˌtɛri/ (SEM-ih-ter-ee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does cemetery mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A burial ground; a place where the dead are buried; a graveyard.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 