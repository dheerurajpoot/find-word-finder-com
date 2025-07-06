import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About vs Ebout - Which is Correct?",
  description: "Learn the correct spelling between &apos;about&apos; and &apos;ebout&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AboutVsEboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">About or Ebout</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, About or Ebout, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Ebout</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Ebout&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">About</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;About&quot; is a preposition and adverb with multiple meanings.
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
              <span className="font-bold">About</span> (preposition/adverb): Concerning, relating to, or approximately.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>What is this book about?</li>
              <li>I&apos;ll be there in about ten minutes.</li>
              <li>She talked about her vacation.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;about&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Prepositions:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Concerning</li>
                  <li>Regarding</li>
                  <li>Relating to</li>
                  <li>On the subject of</li>
                  <li>With respect to</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adverbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Approximately</li>
                  <li>Roughly</li>
                  <li>Around</li>
                  <li>Nearly</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;About&quot; is the correct spelling. &quot;Ebout&quot; is a common misspelling—remember, it starts with &quot;A&quot; not &quot;E&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it ebout or about?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;about.&quot; &quot;Ebout&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce about?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈbaʊt/ (uh-BOUT).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does about mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means concerning, relating to, or approximately.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How many meanings does about have?</div>
              <div className="text-lg md:text-xl text-muted-foreground">About has several meanings: as a preposition (concerning), adverb (approximately), and can mean &quot;around&quot; or &quot;near.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can about be used at the beginning of a sentence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;About what are you talking?&quot; or &quot;About ten people attended the meeting.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between about and around?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both can mean approximately, but &quot;around&quot; often refers to physical location, while &quot;about&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is about a common word?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;about&quot; is one of the most frequently used words in English, appearing in everyday conversation.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 