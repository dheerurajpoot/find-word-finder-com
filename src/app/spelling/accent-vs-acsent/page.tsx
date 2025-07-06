import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accent vs Acsent - Which is Correct?",
  description: "Learn the correct spelling between &apos;accent&apos; and &apos;acsent&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccentVsAcsentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accent or Acsent</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accent or Acsent, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acsent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acsent&quot; is missing the second &quot;c&quot; - it should be &quot;accent.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accent&quot; means a distinctive way of pronouncing words or emphasis.
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
              <span className="font-bold">Accent</span> (noun): A distinctive way of pronouncing words, typically associated with a particular country, region, or social class. Emphasis or stress on a particular syllable or word.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She has a British accent.</li>
              <li>The accent falls on the second syllable.</li>
              <li>He spoke with a strong regional accent.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Speech:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Pronunciation</li>
                  <li>Intonation</li>
                  <li>Inflection</li>
                  <li>Dialect</li>
                  <li>Brogue</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Emphasis:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Stress</li>
                  <li>Emphasis</li>
                  <li>Prominence</li>
                  <li>Focus</li>
                  <li>Highlight</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accent&quot; is the correct spelling. &quot;Acsent&quot; is a common misspelling—remember the double &quot;c&quot; in accent.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acsent or accent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accent.&quot; &quot;Acsent&quot; is incorrect—it&apos;s missing the second &quot;c.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæksənt/ (AK-suhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means a distinctive way of pronouncing words or emphasis on a particular syllable or word.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accent and dialect?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accent refers to pronunciation, while dialect includes vocabulary, grammar, and pronunciation differences.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accent be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;She spoke with a French accent&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: foreign accent, regional accent, strong accent, and accent mark.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accent used in linguistics?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Accent&quot; is a key term in phonetics and linguistics for describing pronunciation patterns.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of accent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;accent&quot; - to emphasize or stress a particular syllable or word.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accent comes from Latin &quot;accentus&quot; meaning tone or intonation.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accent be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;He has an accent&quot; or &quot;Put the accent on the first syllable&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 