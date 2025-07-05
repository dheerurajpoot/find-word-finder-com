import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Knowledgeable vs Knowledgable - Which is Correct?",
  description: "Learn the correct spelling between &apos;knowledgeable&apos; and &apos;knowledgable&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function KnowledgeableVsKnowledgablePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Knowledgeable or Knowledgable</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Knowledgeable or Knowledgable, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Knowledgable</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Knowledgable&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Knowledgeable</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Knowledgeable&quot; is an adjective meaning well-informed or educated.
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
              <span className="font-bold">Knowledgeable</span> (adjective): Intelligent and well informed; showing knowledge or understanding; educated or expert in a particular field.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The guide was very knowledgeable about the city&apos;s history.</li>
              <li>She is knowledgeable in computer programming.</li>
              <li>He gave a knowledgeable presentation on the topic.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;knowledgeable&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Informed</li>
                  <li>Educated</li>
                  <li>Well-versed</li>
                  <li>Expert</li>
                  <li>Learned</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Skilled</li>
                  <li>Competent</li>
                  <li>Proficient</li>
                  <li>Experienced</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Knowledgeable&quot; is the correct spelling. &quot;Knowledgable&quot; is a common misspelling—remember, it has &quot;-eable&quot; at the end, not &quot;-able&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it knowledgable or knowledgeable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;knowledgeable.&quot; &quot;Knowledgable&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce knowledgeable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈnɒlɪdʒəbl/ (NOL-ij-uh-buhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does knowledgeable mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Intelligent and well informed; showing knowledge or understanding; educated or expert in a particular field.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 