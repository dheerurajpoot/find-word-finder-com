import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mispell vs Misspell - Which is Correct?",
  description: "Learn the correct spelling between &apos;mispell&apos; and &apos;misspell&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function MisspellVsMispellPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Mispell or Misspell</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Misspell&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Mispell</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Mispell&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Misspell</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Misspell&quot; is a verb meaning to spell a word incorrectly.
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
              <span className="font-bold">Misspell</span> (verb): To spell a word incorrectly; to write a word with the wrong letters or letter order.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>It&apos;s easy to misspell complicated words.</li>
              <li>Many people misspell &quot;accommodate&quot; as &quot;accomodate.&quot;</li>
              <li>Don&apos;t misspell your name on the application form.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;misspell&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Typo</li>
                  <li>Spell wrong</li>
                  <li>Miswrite</li>
                  <li>Err</li>
                  <li>Mistype</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Spelling error</li>
                  <li>Typographical error</li>
                  <li>Mistake</li>
                  <li>Slip</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Misspell&quot; is the correct spelling for writing a word incorrectly. &quot;Mispell&quot; is a common misspelling—remember, it has two &quot;s&quot; letters in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it mispell or misspell?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;misspell.&quot; &quot;Mispell&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce misspell?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌmɪsˈspɛl/ (miss-PELL).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does misspell mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To spell a word incorrectly; to write a word with the wrong letters or letter order.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 