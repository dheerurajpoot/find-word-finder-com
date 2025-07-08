import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Accommodate or Accomodate - Which is Correct?",
  description: "Learn the correct spelling between &apos;accommodate&apos; and &apos;accomodate&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccommodateVsAccomodatePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accommodate or Accomodate</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accommodate or Accomodate, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Accomodate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Accomodate&quot; is missing the second &quot;m&quot; - it should be &quot;accommodate.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accommodate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accommodate&quot; means to provide space or make adjustments for someone or something.
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
              <span className="font-bold">Accommodate</span> (verb): 1) To provide space or lodging for someone. 2) To make adjustments or adaptations to suit someone&apos;s needs. 3) To fit or contain something.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The hotel can accommodate up to 200 guests.</li>
              <li>We need to accommodate the new requirements.</li>
              <li>The room can accommodate all the furniture.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accommodate&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Provide Space:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>House</li>
                  <li>Lodge</li>
                  <li>Shelter</li>
                  <li>Contain</li>
                  <li>Hold</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjust:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Adapt</li>
                  <li>Adjust</li>
                  <li>Modify</li>
                  <li>Conform</li>
                  <li>Comply</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accommodate&quot; is the correct spelling. &quot;Accomodate&quot; is a common misspelling—remember the double &quot;m&quot; in accommodate.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it accomodate or accommodate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accommodate.&quot; &quot;Accomodate&quot; is incorrect—it&apos;s missing the second &quot;m.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accommodate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkɒmədeɪt/ (uh-KOM-uh-dayt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accommodate mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means to provide space or lodging, or to make adjustments to suit someone&apos;s needs.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accommodate and adapt?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accommodate often means providing space or making adjustments for others, while adapt means changing oneself to fit a situation.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accommodate be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;We can accommodate your schedule&quot; or &quot;The system accommodates multiple users&quot; are common business uses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accommodate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: accommodate guests, accommodate needs, accommodate changes, and accommodate requests.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accommodate used in hospitality contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The hotel can accommodate large groups&quot; is a very common hospitality industry phrase.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the noun form of accommodate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun is &quot;accommodation&quot; - the act of accommodating or the space provided.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accommodate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accommodate comes from Latin &quot;accommodatus&quot; meaning fitted or adapted.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accommodate be used in educational contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The school accommodates students with special needs&quot; is a common educational usage.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 