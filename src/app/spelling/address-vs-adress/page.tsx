import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Adress vs Address - Which is Correct?",
  description: "Learn the correct spelling between &apos;adress&apos; and &apos;address&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AddressVsAdressPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Adress or Address</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Address&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Adress</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Adress&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Address</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Address&quot; is a noun/verb meaning location or to speak to.
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
              <span className="font-bold">Address</span> (noun/verb): (n) The details of where a building is located; (v) to speak to or deal with something.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Please write your address clearly.</li>
              <li>The president will address the nation tonight.</li>
              <li>We need to address this issue immediately.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;address&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Location</li>
                  <li>Residence</li>
                  <li>Dwelling</li>
                  <li>Abode</li>
                  <li>Home</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Speak to</li>
                  <li>Deal with</li>
                  <li>Handle</li>
                  <li>Confront</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Address&quot; is the correct spelling for both the place where someone lives and the act of speaking to a group. &quot;Adress&quot; is a common misspelling—remember, it has two &quot;d&quot; letters.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it adress or address?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;address.&quot; &quot;Adress&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce address?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈdrɛs/ (uh-DRESS) or /ˈædˌrɛs/ (AD-dress), depending on usage.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does address mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It can mean the location of a place or to speak to/deal with something.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 