import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Momento vs Memento - Which is Correct?",
  description: "Learn the correct spelling between 'momento' and 'memento'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function MementoVsMomentoPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Momento or Memento</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Memento&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Momento</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect in English. &quot;Momento&quot; is not a valid English word (though it is a word in Spanish and Italian for &quot;moment&quot;).
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Memento</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Memento&quot; is a noun meaning a keepsake or souvenir.
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
              <span className="font-bold">Memento</span> (noun): An object kept as a reminder or souvenir of a person or event; a keepsake or remembrance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She kept the ticket stub as a memento of the concert.</li>
              <li>The photo album serves as a memento of our family vacation.</li>
              <li>He gave her a small memento to remember him by.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;memento&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Souvenir</li>
                  <li>Keepsake</li>
                  <li>Token</li>
                  <li>Remembrance</li>
                  <li>Relic</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Memorabilia</li>
                  <li>Heirloom</li>
                  <li>Trophy</li>
                  <li>Reminder</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Memento&quot; is the correct spelling for a keepsake or reminder. &quot;Momento&quot; is a common misspelling in English—remember, it has an &quot;e&quot; after the &quot;m.&quot; (&quot;Momento&quot; is a real word in Spanish and Italian for &quot;moment.&quot;)
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it momento or memento?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word in English is &quot;memento.&quot; &quot;Momento&quot; is a common misspelling, but is a real word in Spanish and Italian.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce memento?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /məˈmɛntoʊ/ (muh-MEN-toh).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does memento mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An object kept as a reminder or souvenir of a person or event; a keepsake or remembrance.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 