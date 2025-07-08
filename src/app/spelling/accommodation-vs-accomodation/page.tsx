import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Accommodation or Accomodation - Which is Correct?",
  description: "Learn the correct spelling between &apos;accommodation&apos; and &apos;accomodation&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccommodationVsAccomodationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accommodation or Accomodation</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accommodation or Accomodation, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Accomodation</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Accomodation&quot; is missing the second &quot;m&quot; - it should be &quot;accommodation.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accommodation</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accommodation&quot; means a place to stay or the act of providing space.
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
              <span className="font-bold">Accommodation</span> (noun): 1) A place to live, work, or stay temporarily. 2) The act of providing space or lodging. 3) An adjustment or adaptation to suit someone&apos;s needs.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The hotel provides excellent accommodation for guests.</li>
              <li>We need to find accommodation for the conference.</li>
              <li>The school makes accommodation for students with disabilities.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accommodation&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Lodging:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Lodging</li>
                  <li>Housing</li>
                  <li>Shelter</li>
                  <li>Residence</li>
                  <li>Quarters</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjustment:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Adjustment</li>
                  <li>Adaptation</li>
                  <li>Modification</li>
                  <li>Arrangement</li>
                  <li>Provision</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accommodation&quot; is the correct spelling. &quot;Accomodation&quot; is a common misspelling—remember the double &quot;m&quot; in accommodation.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it accomodation or accommodation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accommodation.&quot; &quot;Accomodation&quot; is incorrect—it&apos;s missing the second &quot;m.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accommodation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˌkɒməˈdeɪʃən/ (uh-kom-uh-DAY-shun).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accommodation mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means a place to stay or live, or the act of providing space and adjustments for someone&apos;s needs.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accommodation and lodging?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accommodation is broader and can include adjustments for needs, while lodging specifically refers to a place to stay.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accommodation be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;We provide accommodation for business travelers&quot; or &quot;The company offers accommodation for remote work&quot; are common uses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accommodation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: student accommodation, hotel accommodation, reasonable accommodation, and accommodation booking.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accommodation used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Reasonable accommodation&quot; is a legal term for adjustments made for people with disabilities.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of accommodation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;accommodate&quot; - to provide accommodation or make adjustments.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accommodation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accommodation comes from Latin &quot;accommodatio&quot; meaning adjustment or adaptation.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accommodation be used in educational contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The university provides accommodation for international students&quot; is a common educational usage.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 