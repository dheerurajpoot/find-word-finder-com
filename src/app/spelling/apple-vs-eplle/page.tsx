import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Apple vs Eplle - Which is Correct?",
  description: "Learn the correct spelling between &apos;apple&apos; and &apos;eplle&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppleVsEpllePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Apple or Eplle</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Apple or Eplle, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Eplle</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Eplle&quot; has the wrong first letter and letter order.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Apple</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Apple&quot; is a round fruit with red, yellow, or green skin.
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
              <span className="font-bold">Apple</span> (noun): A round fruit with red, yellow, or green skin and white flesh; the tree that bears this fruit; a company that makes computers and electronics.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I eat an apple every day for breakfast.</li>
              <li>The apple tree in our backyard produces delicious fruit.</li>
              <li>Apple Inc. is known for its innovative technology.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;apple&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Fruit Types:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Pome</li>
                  <li>Tree fruit</li>
                  <li>Orchard fruit</li>
                  <li>Deciduous fruit</li>
                  <li>Hard fruit</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Core</li>
                  <li>Pip</li>
                  <li>Orchard</li>
                  <li>Cider</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Apple&quot; is the correct spelling. &quot;Eplle&quot; is incorrect—remember it starts with &quot;a&quot; and has the correct letter order.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it eplle or apple?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;apple.&quot; &quot;Eplle&quot; is incorrect—it has the wrong first letter and letter order.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce apple?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæpəl/ (AP-uhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does apple mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A round fruit with red, yellow, or green skin and white flesh; the tree that bears this fruit.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between apple and other fruits?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Apples are pome fruits with a core containing seeds, unlike berries or stone fruits.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apple be used for the company?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Apple Inc. is the technology company that makes iPhones, Macs, and other devices.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with apple?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: apple of my eye, rotten apple, apple pie, and Big Apple (New York).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is apple used in idioms?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Apple of my eye&quot; means someone very dear, and &quot;rotten apple&quot; means a bad person in a group.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the plural of apple?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The plural is &quot;apples&quot; - &quot;I bought three apples at the store.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of apple?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Apple comes from Old English &quot;æppel&quot; meaning fruit in general, from Proto-Germanic &quot;ap(a)laz.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apple be used in cooking?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Apples are used in pies, sauces, cider, and many other culinary applications.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 